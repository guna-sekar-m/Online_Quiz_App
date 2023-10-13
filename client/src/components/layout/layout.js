'use client'
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
const Header= dynamic(() => import('../header/header'));
const Footer= dynamic(() => import('../footer/footer'));
const Layout=({children})=>{
 return(
    <ThemeProvider attribute="class">
            <main className="flex flex-col h-screen justify-between">
            <Header/>
                {children}
        
            <Footer/>

            </main>
        <Toaster/>
    </ThemeProvider>
 )
}
export default Layout;