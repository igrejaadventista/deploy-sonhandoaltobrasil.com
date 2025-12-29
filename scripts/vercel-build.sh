#!/bin/bash
set -e

echo "🔧 Configurando Git LFS para Vercel..."

# Instalar Git LFS se não estiver instalado
if ! command -v git-lfs &> /dev/null; then
  echo "📦 Instalando Git LFS..."
  # Na Vercel, o Git LFS geralmente já está disponível, mas vamos garantir
  git lfs install || echo "⚠️ Git LFS já instalado ou não disponível"
fi

# Configurar Git LFS
git lfs install

# Configurar remote para HTTPS (a Vercel usa HTTPS por padrão)
CURRENT_REMOTE=$(git remote get-url origin 2>/dev/null || echo "")
if [[ "$CURRENT_REMOTE" == *"git@"* ]]; then
  echo "🔄 Convertendo remote de SSH para HTTPS..."
  git remote set-url origin https://github.com/igrejaadventista/deploy-sonhandoaltobrasil.com.git
fi

# Tentar fazer pull do Git LFS
echo "📥 Fazendo pull do Git LFS..."
if git lfs pull 2>&1; then
  echo "✅ Git LFS pull bem-sucedido"
  echo "📊 Verificando arquivos baixados..."
  git lfs ls-files | head -5 || echo "ℹ️ Não foi possível listar arquivos LFS"
else
  echo "⚠️ Git LFS pull falhou, mas continuando o build..."
  echo "ℹ️ A Vercel pode fazer o pull automaticamente durante o clone"
fi

# Build do Next.js
echo "🏗️ Iniciando build do Next.js..."
next build

echo "✅ Build concluído com sucesso!"

