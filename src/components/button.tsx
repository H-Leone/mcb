"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ButtonProps {
    click?: (e?: unknown) => void;
    children: ReactNode;
    redirect?: string;
    variant?: "primary" | "secondary" | "transparent" | "card" | "critical";
    disabled?: boolean;
    type?: "button" | "submit";
    className?: string;
    selected?: boolean
}

function Button({
    children,
    redirect,
    click,
    variant = "primary",
    disabled,
    type,
    className,
    selected = false
}: ButtonProps) {
    const router = useRouter();

    const handleClick = () => {
        if (click) return click();
        if (redirect) router.push(redirect);
    };

    const getVariant = () => {
        switch (variant) {
            case "primary":
                return "bg-blue hover:bg-primary/80 disabled:brightness-60 font-medium";
            case "secondary":
                return "bg-zinc-800/40 hover:bg-zinc-700/40 border border-white/20 disabled:brightness-60 font-medium";
            case "transparent":
                return "bg-transparent hover:bg-muted/10 font-normal";
            case "card":
                return `bg-background hover:bg-muted/5 disabled:brightness-60 border font-medium ${selected ? "border-primary bg-primary/5" : "border-border hover:border-muted"}`;
            case "critical":
                return "bg-error hover:bg-error/75 disabled:brightness-60";
            default:
                return "";
        }
    };

    return (
        <button
            disabled={disabled}
            onClick={handleClick}
            type={type ?? "button"}
            className={`flex items-center gap-2 text-sm text-white px-4 py-2 rounded-md whitespace-nowrap cursor-pointer transition duration-300 select-none disabled:cursor-not-allowed ${getVariant()} ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
