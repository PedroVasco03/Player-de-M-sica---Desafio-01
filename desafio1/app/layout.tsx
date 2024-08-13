import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../src/assets/fonts/geral.font.css';
import './global.css'
import BootstrapClient from '../src/components/BootstrapClient'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-pt">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Desafio 01</title>
      <body >
          {children}
      </body>
      <BootstrapClient />
    </html>
  )
}