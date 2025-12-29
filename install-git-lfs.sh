#!/bin/bash
echo "Instalando Git LFS..."
if command -v brew &> /dev/null; then
    brew install git-lfs
elif command -v apt-get &> /dev/null; then
    sudo apt-get install git-lfs
elif command -v yum &> /dev/null; then
    sudo yum install git-lfs
else
    echo "Por favor, instale o Git LFS manualmente: https://git-lfs.github.com/"
    exit 1
fi

echo "Inicializando Git LFS..."
git lfs install

echo "Fazendo pull das imagens..."
git lfs pull

echo "✅ Concluído!"
