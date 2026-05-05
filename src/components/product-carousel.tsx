"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import SobreNos from "../../public/sobre-nos-landing.jpeg"
import Carrosel_1 from "../../public/carrossel-1.jpeg"
import Carrosel_2 from "../../public/carrossel-2.jpeg"
import Carrosel_3 from "../../public/carrossel-3.png"
import { Pause, Play } from "lucide-react"

const items = [
    { id: 1, title: "Esmaltes Sintéticos", src: Carrosel_1 },
    { id: 2, title: "Vernizes PU", src: Carrosel_2 },
    { id: 3, title: "Primers Epóxi", src: Carrosel_3 }
]

export default function ProductCarousel() {
    const [active, setActive] = useState(1)
    const [paused, setPaused] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const getPosition = (index: number) => {
        const diff = index - active

        if (diff === 0) return "z-30 scale-100 opacity-100 translate-x-0"
        if (diff === -1 || diff === items.length - 1)
            return "z-20 scale-90 md:scale-95 opacity-0 md:opacity-70 translate-x-0 md:-translate-x-[220px]"
        if (diff === 1 || diff === -(items.length - 1))
            return "z-20 scale-90 md:scale-95 opacity-0 md:opacity-70 translate-x-0 md:translate-x-[220px]"

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
        <section className="w-full pb-16 md:pb-20">
            <div className="relative h-[420px] sm:h-[460px] md:h-[520px] flex items-center justify-center overflow-hidden px-4">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        onClick={() => goTo(index)}
                        className={`absolute cursor-pointer transition-all duration-500 ease-out ${getPosition(index)}`}
                    >
                        <div className="w-[280px] sm:w-[320px] md:w-[360px] h-[360px] sm:h-[420px] md:h-[480px] rounded-[24px] md:rounded-[32px] overflow-hidden relative shadow-xl mx-auto">
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-black/30" />
                            <div className="absolute bottom-6 md:bottom-8 left-5 right-5 md:left-8 md:right-8 text-white text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-semibold">{item.title}</h3>
                                <button className="mt-4 md:mt-6 w-full bg-white/20 backdrop-blur py-3 rounded-full text-sm">
                                    Saiba mais
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center gap-3 md:gap-4 mt-8 md:mt-10 px-4">
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
                    className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-800 cursor-pointer shrink-0"
                >
                    {paused ? <Play size={17.5} /> : <Pause size={17.5} />}
                </button>
            </div>
        </section>
    )
}