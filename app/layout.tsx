import NavBar from "@/components/NavBar"
import "./globals.css"
import Footer from "@/components/Footer"
import Providers from "./providers"

export const metadata =
{
    title: 'Seiiccubus',
    description: 'Developer & Composer',
}

export default function RootLayout({ children }: { children: React.ReactNode })
{
    return (
        <html lang="en" data-theme='dark' style={{ colorScheme: 'dark' }} suppressHydrationWarning >
            <body className="dark:bg-dark bg-white flex flex-col min-h-screen">

                <Providers>
                    <NavBar />
                    <main className='py-20'>{children}</main>
                    <Footer />
                </Providers>
                
            </body>
        </html>
    )
}
