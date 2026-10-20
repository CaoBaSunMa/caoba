import { DM_Sans } from 'next/font/google'
import AppProviders from '@/context/AppProviders';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '@/styles/scss/style.scss';

// Font Family
const dm_sans = DM_Sans({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: '--font-caoba'
})

// metadata
export const metadata = {
  title: 'caoba | 基于 Next.js 构建的强大 SaaS 应用模板',
  description: '由 caoba 打造的基于 NextJs 的管理后台模板',
  keywords: ['NextJs', 'React NextJs', 'Next.js', 'React template', 'react admin', 'react node', 'react bootstrap', 'responsive web application', 'react webapp', 'multi app demos'],
}


export default function RootLayout({ children }) {

  return (
    <html lang="zh-CN" className={`${dm_sans.variable}`} data-scroll-behavior="smooth">
      <body>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  )
}
