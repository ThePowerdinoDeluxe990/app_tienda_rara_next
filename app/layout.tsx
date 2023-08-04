import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tienda_rara',
  description: 'Simulador de tienda rara hecho por mi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='bg-dark' lang="en">
   
      <body className={inter.className}>
        <nav style={{height: "7rem"}} className='sticky-top navbar navbar-expand-lg  bg-secondary bg-gradient '> 
          <div className="container-fluid">
            <h1 className='text-light'>Productos</h1>
          </div>
        </nav>
        {children}</body>
      
    </html>
  )
}
