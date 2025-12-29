# 🔧 Solução: Imagens Não Carregam em Produção

## ❌ Problema

As imagens não estão carregando no site em produção (Vercel) porque o Git LFS não está fazendo pull durante o build.

## ✅ Solução Implementada

### 1. Script de Build Atualizado

O script `scripts/vercel-build.sh` agora:
- ✅ Instala e configura Git LFS
- ✅ Converte remote de SSH para HTTPS (se necessário)
- ✅ Faz pull do Git LFS antes do build
- ✅ Continua o build mesmo se o Git LFS falhar (com aviso)

### 2. Configuração do vercel.json

- ✅ `installCommand`: Inclui `git lfs install`
- ✅ `buildCommand`: Usa o script que faz pull do Git LFS

## 🚀 Próximos Passos

### Passo 1: Fazer Commit e Push

```bash
git add vercel.json package.json scripts/vercel-build.sh
git commit -m "fix: corrige carregamento de imagens Git LFS na Vercel"
git push origin main
```

### Passo 2: Verificar Configurações na Vercel

1. Acesse: https://vercel.com/dashboard
2. Abra o projeto
3. Vá em **Settings** → **Git**
4. Certifique-se de que:
   - ✅ O repositório está conectado corretamente
   - ✅ A branch correta está selecionada
   - ✅ Git LFS está habilitado (se houver opção)

### Passo 3: Fazer Novo Deploy

1. Na Vercel Dashboard, vá em **Deployments**
2. Clique nos três pontos do último deployment
3. Selecione **"Redeploy"**
4. Ou faça um novo push para trigger automático

### Passo 4: Verificar Logs do Build

Durante o build, verifique os logs para ver:
- ✅ `🔧 Configurando Git LFS para Vercel...`
- ✅ `📥 Fazendo pull do Git LFS...`
- ✅ `✅ Git LFS pull bem-sucedido`

Se aparecer `⚠️ Git LFS pull falhou`, veja a seção de Troubleshooting abaixo.

## 🔍 Troubleshooting

### Problema: Git LFS ainda não funciona

**Solução Alternativa 1: Habilitar Git LFS nas Configurações**

1. Na Vercel Dashboard → Settings → Git
2. Procure por "Git LFS" e habilite
3. Faça um novo deploy

**Solução Alternativa 2: Usar CDN para Imagens**

Se o Git LFS continuar falhando, considere:
- Upload das imagens para um CDN (Cloudinary, AWS S3, etc.)
- Atualizar os caminhos das imagens no código

**Solução Alternativa 3: Verificar Permissões do Repositório**

Certifique-se de que:
- ✅ A Vercel tem acesso ao repositório
- ✅ O repositório não é privado sem permissões adequadas
- ✅ O Git LFS está configurado no GitHub

### Problema: Build falha com erro de Git LFS

Se o build falhar, o script foi configurado para continuar mesmo assim. Mas se quiser forçar:

```bash
# No package.json, altere temporariamente para:
"vercel-build": "next build"
```

Isso fará o build sem Git LFS, mas as imagens não aparecerão.

## 📝 Verificação Pós-Deploy

Após o deploy, verifique:

1. ✅ Acesse o site em produção
2. ✅ Verifique se as imagens estão carregando
3. ✅ Abra o DevTools (F12) → Network
4. ✅ Veja se as requisições de imagens retornam 200 (sucesso) ou 404 (erro)

## 🎯 Status Atual

- ✅ Script de build atualizado
- ✅ Configuração do vercel.json ajustada
- ⏳ Aguardando commit e novo deploy

## 📚 Arquivos Modificados

- `vercel.json` - Adicionado `git lfs install` no installCommand
- `package.json` - Script `vercel-build` aponta para o script bash
- `scripts/vercel-build.sh` - Script completo com tratamento de erros

