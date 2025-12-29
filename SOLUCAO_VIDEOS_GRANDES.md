# 🎥 Solução: Vídeos Grandes Excedem Limite da Vercel

## ❌ Problema

O arquivo `testemunho_julio_diniz.mp4` (~1GB) excede o limite de upload de 1GB da Vercel.

## ✅ Solução Imediata: .vercelignore

Criei o arquivo `.vercelignore` que exclui os vídeos grandes do deploy.

**⚠️ Importante:** Os vídeos não estarão disponíveis no site até serem movidos para um CDN.

## 🚀 Soluções Recomendadas

### Opção 1: Hospedar no YouTube (Recomendado - Gratuito)

1. **Fazer upload dos vídeos no YouTube:**
   - Acesse: https://www.youtube.com/upload
   - Faça upload dos vídeos
   - Configure como "Não listado" ou "Público" conforme necessário

2. **Atualizar o código para usar iframe:**

```tsx
// Em app/depoimentos/page.tsx
<iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/VIDEO_ID_AQUI"
  title="Testemunho - Júlio Diniz"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="w-full h-full"
></iframe>
```

### Opção 2: Hospedar no Vimeo

1. Faça upload no Vimeo
2. Use o player embed do Vimeo

### Opção 3: Usar Cloudinary (Recomendado para Performance)

1. Crie conta em: https://cloudinary.com
2. Faça upload dos vídeos
3. Use a URL do Cloudinary no código

### Opção 4: Comprimir os Vídeos

Se quiser manter os vídeos localmente:

```bash
# Instalar ffmpeg
brew install ffmpeg

# Comprimir vídeo (reduz para ~50-100MB)
ffmpeg -i testemunho_julio_diniz.mp4 \
  -c:v libx264 \
  -crf 28 \
  -preset slow \
  -c:a aac \
  -b:a 128k \
  testemunho_julio_diniz_compressed.mp4
```

## 📝 Arquivos que Precisam ser Atualizados

Após escolher uma solução, atualize:

1. **`app/depoimentos/page.tsx`** - Vídeos de testemunhos
2. **`components/what-is-it-section.tsx`** - Vídeo principal (se necessário)

## 🔧 Implementação Rápida: YouTube

### Passo 1: Upload no YouTube

1. Faça upload dos vídeos no YouTube
2. Anote os IDs dos vídeos (ex: `dQw4w9WgXcQ`)

### Passo 2: Atualizar Código

Substitua os elementos `<video>` por `<iframe>` do YouTube:

```tsx
// Antes
<video src="/videos/testemunho_julio_diniz.mp4" controls />

// Depois
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Testemunho - Júlio Diniz"
  allowFullScreen
/>
```

## 📊 Status Atual

- ✅ `.vercelignore` criado - Vídeos excluídos do deploy
- ⏳ Aguardando migração para CDN
- ⚠️ Vídeos não funcionarão até serem migrados

## 🎯 Próximos Passos

1. **Escolher uma solução** (YouTube recomendado)
2. **Fazer upload dos vídeos**
3. **Atualizar o código** para usar o CDN
4. **Testar no site**

## 🔗 Links Úteis

- [YouTube Upload](https://www.youtube.com/upload)
- [Vimeo Upload](https://vimeo.com/upload)
- [Cloudinary](https://cloudinary.com)
- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)

