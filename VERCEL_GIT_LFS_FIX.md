# 🔧 Solução Definitiva: Git LFS na Vercel

## ❌ Problema Atual

As imagens não estão carregando em produção porque o Git LFS não está fazendo pull durante o build na Vercel.

## ✅ Solução: Habilitar Git LFS nas Configurações da Vercel

### Passo 1: Acessar Configurações do Projeto

1. Acesse: https://vercel.com/dashboard
2. Abra o projeto `deploy-sonhandoaltobrasil.com`
3. Vá em **Settings** → **Git**

### Passo 2: Verificar/Habilitar Git LFS

Procure por uma opção relacionada a **"Git LFS"** ou **"Large File Storage"** e:
- ✅ Habilite se estiver desabilitado
- ✅ Salve as alterações

**Nota:** Nem todos os projetos mostram essa opção. Se não aparecer, use a Solução Alternativa abaixo.

## 🔄 Solução Alternativa: Usar Variável de Ambiente

Se não houver opção de Git LFS nas configurações, adicione uma variável de ambiente:

1. Vá em **Settings** → **Environment Variables**
2. Adicione:
   - **Name**: `GIT_LFS_ENABLED`
   - **Value**: `true`
   - **Environments**: Production, Preview, Development

## 🛠️ Solução Técnica: Script Melhorado

O script `scripts/vercel-build.sh` foi atualizado com:
- ✅ Múltiplas tentativas de pull
- ✅ Configuração explícita da URL do Git LFS
- ✅ Verificação de arquivos após pull
- ✅ Logs detalhados para debug

## 📋 Checklist de Verificação

Após fazer as alterações:

- [ ] Git LFS habilitado nas configurações (se disponível)
- [ ] Variável de ambiente `GIT_LFS_ENABLED=true` configurada
- [ ] Script `vercel-build.sh` atualizado e commitado
- [ ] Novo deploy realizado
- [ ] Logs do build verificados

## 🔍 Como Verificar se Funcionou

### 1. Verificar Logs do Build

Durante o build, procure por:
```
✅ Git LFS pull bem-sucedido na tentativa X
📊 Verificando tamanho dos arquivos após pull...
```

### 2. Verificar Tamanho dos Arquivos

Os arquivos devem ter tamanho real (não 130 bytes):
```
-rw-r--r-- 1 user staff 29K banner.webp
-rw-r--r-- 1 user staff 57K sonhando-alto-logo.webp
```

### 3. Verificar no Site

- Acesse o site em produção
- Abra o DevTools (F12) → Network
- Recarregue a página
- Verifique se as requisições de imagens retornam **200 OK** (não 404)

## 🚨 Se Ainda Não Funcionar

### Opção 1: Verificar Permissões do Repositório

Certifique-se de que:
- ✅ A Vercel tem acesso ao repositório GitHub
- ✅ O repositório não é privado sem permissões adequadas
- ✅ O Git LFS está configurado no GitHub

### Opção 2: Usar CDN para Imagens

Se o Git LFS continuar falhando, considere migrar as imagens para:
- **Cloudinary** (recomendado)
- **AWS S3 + CloudFront**
- **Vercel Blob Storage**

### Opção 3: Commitar Imagens Sem Git LFS (Não Recomendado)

⚠️ **Atenção:** Isso aumentará muito o tamanho do repositório.

```bash
# Remover do Git LFS
git lfs untrack "*.webp"
git lfs untrack "*.jpg"
git lfs untrack "*.png"

# Adicionar normalmente
git add public/images/
git commit -m "feat: move imagens para Git normal"
git push origin main
```

## 📝 Arquivos Modificados

- ✅ `scripts/vercel-build.sh` - Script melhorado com retry e logs
- ✅ `vercel.json` - Configuração mantida
- ✅ `package.json` - Script vercel-build apontando para o bash script

## 🎯 Próximos Passos

1. **Habilitar Git LFS nas configurações da Vercel** (Passo 1 e 2 acima)
2. **Fazer commit e push das alterações:**
   ```bash
   git add scripts/vercel-build.sh VERCEL_GIT_LFS_FIX.md
   git commit -m "fix: melhora script Git LFS com retry e logs detalhados"
   git push origin main
   ```
3. **Fazer novo deploy na Vercel**
4. **Verificar logs do build**
5. **Testar o site em produção**

## 🔗 Referências

- [Vercel Git LFS Documentation](https://vercel.com/docs/deployments/git-lfs)
- [Git LFS GitHub](https://git-lfs.github.com/)
- [Vercel Build Logs](https://vercel.com/docs/concepts/builds/build-logs)

