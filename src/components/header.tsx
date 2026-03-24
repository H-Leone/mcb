"use client";

import { useEffect, useState } from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const tabs = [
        { name: "Home", path: "/" },
        { name: "Produtos", path: "/products" },
        { name: "Qualidade", path: "/quality" },
        { name: "Empresa", path: "/enterprise" },
        { name: "Contato", path: "/contact" },
    ];

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    return (
        <>
            <header className="w-[calc(100%-70px)] sm:w-[calc(100%-48px)] h-14 md:h-16 fixed left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl flex justify-between lg:justify-evenly items-center px-4 rounded-2xl gap-4 lg:gap-8 transition-all duration-300 ease-in-out border top-6 md:top-[44px] bg-white/60 max-w-[800px] border-white/30 shadow-lg shadow-black/5">
                <Link href="/" className="shrink-0">
                    <Image
                        src={Logo}
                        width={60}
                        height={60}
                        alt="Logo"
                        className="w-10 md:w-14"
                    />
                </Link>

                <nav className="hidden lg:flex items-center gap-6">
                    {tabs.map((tab) => (
                        <Link
                            key={tab.path}
                            href={tab.path}
                            className={`transition-colors duration-200 ${
                                pathname === tab.path ? "text-blue-700" : "text-slate-800 hover:text-blue-700"
                            }`}
                        >
                            {tab.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <Button>
                        <a href="#fale-conosco">Fale Conosco</a>
                    </Button>
                </div>

                <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-900 transition-all duration-200 active:scale-95"
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </header>

            <div
                onClick={() => setMenuOpen(false)}
                className={`fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-[2px] lg:hidden transition-all duration-300 ${
                    menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            />

            <div
                className={`fixed left-1/2 -translate-x-1/2 top-[90px] md:top-[124px] z-50 w-[calc(100%-70px)] sm:w-[calc(100%-70px)] max-w-[800px] lg:hidden transition-all duration-300 ${
                    menuOpen
                        ? "opacity-100 pointer-events-auto translate-y-0 scale-100"
                        : "opacity-0 pointer-events-none -translate-y-3 scale-95"
                }`}
            >
                <div className="rounded-3xl border border-white/30 bg-white/80 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] p-3 sm:p-4">
                    <nav className="flex flex-col gap-2">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.path}
                                href={tab.path}
                                className={`group rounded-2xl px-4 py-4 flex items-center justify-between transition-all duration-200 ${
                                    pathname === tab.path
                                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow"
                                        : "bg-white/60 text-slate-800 hover:bg-slate-100/80"
                                }`}
                            >
                                <span className="font-medium">{tab.name}</span>
                                <span
                                    className={`text-sm transition-transform duration-200 ${
                                        pathname === tab.path
                                            ? "translate-x-0 text-white"
                                            : "translate-x-0 text-slate-400 group-hover:translate-x-1"
                                    }`}
                                >
                                    →
                                </span>
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-4 text-white">
                        <p className="text-sm text-white/70 mb-3">Precisa de uma solução técnica especializada?</p>
                        <Button>
                            <a href="#fale-conosco">Fale Conosco</a>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;