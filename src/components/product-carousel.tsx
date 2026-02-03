"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import SobreNos from "../../public/sobre-nos-landing.jpeg"
import { Pause, Play } from "lucide-react"

const items = [
    { id: 1, title: "Esmaltes Sintéticos" },
    { id: 2, title: "Vernizes PU" },
    { id: 3, title: "Primers Epóxi" }
]

export default function ProductCarousel() {
    const [active, setActive] = useState(1)
    const [paused, setPaused] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const getPosition = (index: number) => {
        const diff = index - active

        if (diff === 0) return "z-30 scale-100 opacity-100 translate-x-0"
        if (diff === -1 || diff === items.length - 1)
            return "z-20 scale-95 opacity-70 -translate-x-[220px]"
        if (diff === 1 || diff === -(items.length - 1))
            return "z-20 scale-95 opacity-70 translate-x-[220px]"

        return "opacity-0 pointer-events-none"
    }

    useEffect(() => {
        if (paused) return

        intervalRef.current = setInterval(() => {
            setActive((prev) => (prev + 1) % items.length)
        }, 3500)

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [paused])

    const goTo = (index: number) => {
        setActive(index)
        setPaused(true)
    }

    const togglePause = () => {
        setPaused((p) => !p)
    }

    return (
        <section className="w-full pb-20">
            <div className="relative h-[520px] flex items-center justify-center">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        onClick={() => goTo(index)}
                        className={`absolute cursor-pointer transition-all duration-500 ease-out ${getPosition(
                            index
                        )}`}
                    >
                        <div className="w-[360px] h-[480px] rounded-[32px] overflow-hidden relative shadow-xl">
                            <Image
                                src={SobreNos}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30" />
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <h3 className="text-3xl font-semibold">{item.title}</h3>
                                <button className="mt-6 w-full bg-white/20 backdrop-blur py-3 rounded-full text-sm">
                                    Saiba mais
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center gap-4 mt-10">
                <div className="flex items-center bg-neutral-100 rounded-full px-4 py-3 gap-3">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goTo(index)}
                            className={`transition-all duration-300 rounded-full ${index === active
                                    ? "w-8 h-2 bg-neutral-800"
                                    : "w-3 h-2 bg-neutral-300"
                                }`}
                        />
                    ))}
                </div>

                <button
                    onClick={togglePause}
                    className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-800 cursor-pointer"
                >
                    {paused ? 
                        <Play size={17.5} /> :
                        <Pause size={17.5} />}
                </button>
            </div>
        </section>
    )
}