#!/bin/bash
set -e

echo "🔧 Configurando Git LFS para Vercel..."

# Configurar Git LFS
git lfs install

# Configurar remote para HTTPS (a Vercel usa HTTPS por padrão)
CURRENT_REMOTE=$(git remote get-url origin 2>/dev/null || echo "")
echo "📍 Remote atual: $CURRENT_REMOTE"

# Garantir que está usando HTTPS
if [[ "$CURRENT_REMOTE" == *"git@"* ]]; then
  echo "🔄 Convertendo remote de SSH para HTTPS..."
  git remote set-url origin https://github.com/igrejaadventista/deploy-sonhandoaltobrasil.com.git
fi

# Configurar Git LFS para usar HTTPS explicitamente
echo "🔗 Configurando Git LFS URL..."
git config lfs.url https://github.com/igrejaadventista/deploy-sonhandoaltobrasil.com.git/info/lfs

# Verificar arquivos LFS antes do pull
echo "📋 Arquivos no Git LFS:"
git lfs ls-files | head -10 || echo "ℹ️ Não foi possível listar arquivos LFS"

# Tentar fazer pull do Git LFS com múltiplas tentativas
echo "📥 Fazendo pull do Git LFS..."
MAX_RETRIES=3
RETRY_COUNT=0
LFS_PULL_SUCCESS=false

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
  if git lfs pull 2>&1; then
    echo "✅ Git LFS pull bem-sucedido na tentativa $((RETRY_COUNT + 1))"
    LFS_PULL_SUCCESS=true
    break
  else
    RETRY_COUNT=$((RETRY_COUNT + 1))
    if [ $RETRY_COUNT -lt $MAX_RETRIES ]; then
      echo "⚠️ Tentativa $RETRY_COUNT falhou, tentando novamente em 2 segundos..."
      sleep 2
    fi
  fi
done

if [ "$LFS_PULL_SUCCESS" = false ]; then
  echo "⚠️ Git LFS pull falhou após $MAX_RETRIES tentativas"
  echo "📊 Verificando se há arquivos LFS locais..."
  ls -lh public/images/*.webp 2>/dev/null | head -5 || echo "❌ Nenhuma imagem encontrada em public/images/"
  echo "⚠️ Continuando o build, mas as imagens podem não aparecer..."
fi

# Verificar tamanho dos arquivos após pull
echo "📊 Verificando tamanho dos arquivos após pull..."
ls -lh public/images/banner.webp public/images/sonhando-alto-logo.webp 2>/dev/null || echo "⚠️ Arquivos não encontrados"

# Build do Next.js
echo "🏗️ Iniciando build do Next.js..."
next build

echo "✅ Build concluído com sucesso!"

