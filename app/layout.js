"use client"
import { Inter } from "@next/font/google";
import { useState,useEffect } from "react";

import "@/styles/reset.css";
import "@/styles/variables.css";
import "@/styles/global.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Load from "@/components/load/load";

const interFontFamily = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const[loa,setLoa]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoa(false)
    },3000)
  },[])
  return (
    <html lang="en" className={interFontFamily.className}>
      <body className="container">
       {loa? <Load/>
       :
       <div>
        <Header />
        <main>{children}</main>
        <Footer />
        </div>
   } </body>
    </html>
  );
}
