import Navbar from '@components/Navbar';
import '@styles/globals.css';

export const metadata = {
    title : "Share-Prompts",
    description : "Discover & Share AI prompts"
}
const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient" />
                </div>

                <main className="app">
                    <Navbar />
                    {children}
                </main>
            </body>

        </html>
    )
}

export default RootLayout