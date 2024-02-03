import type {Metadata} from "next";
import "@/assets/style/globals.css";
import '@/assets/style/common.scss'
import Header from '@/app/layout/Header'
import Footer from '@/app/layout/Footer'
import React from "react";


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    console.log(children);
    return (
        <html lang="en">
        <body>
        <Header/>
        <div className='min-h-[600px]'>
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    );
}
