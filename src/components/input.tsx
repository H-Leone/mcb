"use client";

import { useState, useEffect, useRef } from "react";

type InputProps = {
    label?: string;
    field?: string;
    placeholder?: string;
    initialValue?: string;
    delay?: number;
    onChange?: (data: InputEntry) => void;
    type?: string;
    className?: string;
    variant?: "primary" | "secondary";
    mode?: "input" | "textarea";
    disabled?: boolean;
};

export interface InputEntry {
    field: string | null;
    value: unknown;
}

export default function Input({
    label,
    field,
    placeholder = "",
    initialValue = "",
    delay = 650,
    onChange,
    type = "text",
    className,
    variant = "primary",
    mode = "input",
    disabled = false,
}: InputProps) {
    const [value, setValue] = useState(() => initialValue);
    const mounted = useRef(false);

    useEffect(() => {
        if (initialValue !== value) {
            setValue(initialValue);
        }
    }, [initialValue]);

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            return;
        }

        if (value === initialValue) return;

        const handler = setTimeout(() => {
            onChange?.({ field: field ?? null, value });
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay, onChange, field, initialValue]);

    const getVariant = () => {
        switch (variant) {
            case "primary":
                return "bg-transparent";
            case "secondary":
                return "bg-green";
            default:
                return "";
        }
    };

    const baseClass =
        "w-full border border-border/65 text-sm rounded-lg text-main-text outline-none transition-colors " +
        getVariant() +
        " " +
        (className ?? "");

    const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

    return (
        <div className="w-full flex flex-col gap-1">
            {label && <label className="block text-sm mb-1">{label}</label>}

            {mode === "textarea" ? (
                <textarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={`${baseClass} px-4 py-3 h-20 resize-none ${disabledClass}`}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={`${baseClass} px-4 py-2.5 ${disabledClass}`}
                />
            )}
        </div>
    );
}