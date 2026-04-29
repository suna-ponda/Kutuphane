import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

function HomeLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Header/>
            <Navbar />
            {children}
            <Footer/>
        </div>
        
    )
}

export default HomeLayout