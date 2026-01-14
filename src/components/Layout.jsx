import React from 'react';
import Navbar from './Navbar';
// Footer will come later

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-vyla-dark text-white selection:bg-vyla-primary selection:text-white overflow-hidden">
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Ambient Background Glows */}
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-vyla-primary/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-vyla-accent/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
                <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] bg-vyla-secondary/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
            </div>

            <Navbar />

            <main className="relative z-10">
                {children}
            </main>

            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
