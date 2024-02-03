import type {Metadata} from "next";
import "@/assets/style/globals.css";
import '@/assets/style/common.scss'
import Header from '@/app/layout/Header'
import Footer from '@/app/layout/Footer'
import React from "react";
import DefaultMetadata from '@/utils/metadata'


export const metadata: Metadata = DefaultMetadata;

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
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
