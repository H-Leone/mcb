"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";

function Header() {
    const [scrolled, setScrolled] = useState(false);

    const tabs = [
        { name: "Home", path: "/" },
        { name: "Produtos", path: "/products" },
        { name: "Qualidade", path: "/quality" },
        { name: "Empresa", path: "/enterprise" },
        { name: "Contato", path: "/contato" },
    ];

    useLayoutEffect(() => {
        setScrolled(window.scrollY > 10);
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`w-full h-16 fixed left-1/2 -translate-x-1/2 z-50
                backdrop-blur-md container flex justify-evenly items-center px-4 rounded-2xl gap-8
                transition-all duration-300 ease-in-out border top-[30px]
                ${scrolled
                    ? "bg-white/50 max-w-4/5 md:max-w-[800px] border-neutral-200"
                    : "bg-transparent max-w-4/5 border-transparent"
                }
            `}
        >
            <Image
                src={Logo.src}
                width={60}
                height={60}
                alt="Logo"
            />

            <nav className="flex items-center gap-6">
                {tabs.map(tab => (
                    <Link key={tab.path} href={tab.path}>
                        {tab.name}
                    </Link>
                ))}
            </nav>

            <Button>
                <a href="#fale-conosco">Fale Conosco</a>
            </Button>
        </header>
    );
}

export default Header;
