"use client"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import NProgress from "nprogress"
import "nprogress/nprogress.css" // Importa o CSS padrão do nprogress

export default function LoadingBar() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleStart = () => NProgress.start()
    const handleComplete = () => NProgress.done()

    // Next.js 13+ App Router não tem router.events como o Pages Router.
    // Precisamos simular o comportamento de início/fim de carregamento
    // observando as mudanças de rota e o estado de navegação.
    // Uma forma simples é iniciar no clique e finalizar quando a rota é renderizada.

    // Para uma solução mais robusta no App Router, geralmente se usa um Suspense
    // boundary ou um custom hook que detecta o estado de pending da navegação.
    // No entanto, para uma barra de progresso simples, podemos usar o useEffect
    // para iniciar e parar com base na mudança de pathname.

    // NProgress.start() é chamado implicitamente quando a navegação começa
    // se você usar <Link> do next/link.
    // NProgress.done() é chamado quando a nova página é renderizada.

    // Para garantir que a barra apareça em todas as navegações,
    // podemos forçar o início e o fim com base no pathname.
    // No entanto, o NProgress já se integra bem com o Next.js Link.
    // O código abaixo é mais para garantir que ele limpe o estado.

    // O NProgress já se integra automaticamente com as navegações do Next.js Link.
    // O que precisamos é apenas garantir que o CSS seja carregado e que ele seja
    // renderizado no layout.
    // O useEffect aqui é mais para fins de demonstração de como você controlaria,
    // mas para NProgress com Next.js Link, muitas vezes basta importar o CSS
    // e o componente no layout.

    // Para o App Router, a forma mais comum de usar NProgress é:
    // 1. Importar o CSS globalmente (já feito em globals.css ou aqui).
    // 2. Chamar NProgress.start() e NProgress.done() em um useEffect
    //    que reage a mudanças de rota, como o usePathname.

    // Exemplo de como você faria se precisasse de controle manual:
    // const handleRouteChangeStart = (url: string) => {
    //   NProgress.start();
    // };
    // const handleRouteChangeComplete = (url: string) => {
    //   NProgress.done();
    // };
    // const handleRouteChangeError = (err: Error, url: string) => {
    //   NProgress.done();
    // };

    // router.events.on('routeChangeStart', handleRouteChangeStart);
    // router.events.on('routeChangeComplete', handleRouteChangeComplete);
    // router.events.on('routeChangeError', handleRouteChangeError);

    // return () => {
    //   router.events.off('routeChangeStart', handleRouteChangeStart);
    //   router.events.off('routeChangeComplete', handleRouteChangeComplete);
    //   router.events.off('routeChangeError', handleRouteChangeError);
    // };

    // Para o App Router, o NProgress funciona bem com o <Link> sem a necessidade
    // de listeners de eventos do router. A barra de progresso aparecerá
    // automaticamente durante as transições de página.
    // O importante é que o componente seja um 'use client' e o CSS seja importado.

    // Para garantir que a barra de progresso seja visível em todas as navegações,
    // podemos adicionar um pequeno atraso para que ela sempre apareça, mesmo em
    // carregamentos rápidos.
    let timer: NodeJS.Timeout
    const startProgress = () => {
      timer = setTimeout(() => NProgress.start(), 100) // Inicia após 100ms
    }
    const stopProgress = () => {
      clearTimeout(timer)
      NProgress.done()
    }

    // Inicia a barra de progresso quando o pathname muda (início da navegação)
    startProgress()

    // Para a barra de progresso quando o componente é desmontado ou o pathname muda novamente
    return () => {
      stopProgress()
    }
  }, [pathname]) // Depende do pathname para detectar mudanças de rota

  return null // Este componente não renderiza nada visualmente, apenas controla o NProgress
}
