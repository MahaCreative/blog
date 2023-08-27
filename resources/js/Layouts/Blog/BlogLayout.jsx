import Footer from "@/Components/Blog/Footre/Footer";
import Navbar from "@/Components/Blog/Navbar/Navbar";
import React from "react";

export default function BlogLayout({ children }) {
    return (
        <>
            <div className="relative w-full min-h-screen bg-slate-950">
                <Navbar />
                {children}
            </div>
            <Footer />
        </>
    );
}
