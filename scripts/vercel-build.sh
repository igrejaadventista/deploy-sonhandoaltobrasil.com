#!/bin/bash
set -e

echo "🔧 Configurando Git LFS..."

# Configurar Git LFS para usar HTTPS
git remote set-url origin https://github.com/igrejaadventista/deploy-sonhandoaltobrasil.com.git 2>/dev/null || true

# Tentar fazer pull do Git LFS
echo "📥 Fazendo pull do Git LFS..."
if git lfs pull; then
  echo "✅ Git LFS pull bem-sucedido"
else
  echo "⚠️ Git LFS pull falhou, continuando sem as imagens do LFS..."
  echo "ℹ️ As imagens podem não aparecer se não estiverem commitadas no Git LFS"
fi

# Build do Next.js
echo "🏗️ Iniciando build do Next.js..."
next build

echo "✅ Build concluído com sucesso!"

