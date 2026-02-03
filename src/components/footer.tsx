import Image from "next/image"
import Logo from "../../public/logo.png"
import Button from "./button"
import Input from "./input"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-y-14 gap-x-4 pb-16">
                <div className="col-span-12 md:col-span-4 space-y-6">
                    <Image src={Logo} alt="Logo" width={72} height={72} />
                    <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
                        A Marcobi atua no desenvolvimento e fabricação de tintas e
                        revestimentos industriais, oferecendo soluções técnicas para
                        diversos segmentos da indústria.
                    </p>

                    <div className="flex gap-5 pt-2">
                        <Facebook className="w-5 h-5 text-neutral-500 hover:text-white cursor-pointer" />
                        <Instagram className="w-5 h-5 text-neutral-500 hover:text-white cursor-pointer" />
                        <Linkedin className="w-5 h-5 text-neutral-500 hover:text-white cursor-pointer" />
                        <Youtube className="w-5 h-5 text-neutral-500 hover:text-white cursor-pointer" />
                    </div>
                </div>

                <div className="col-span-12 md:col-span-4 space-y-4">
                    <h4 className="font-semibold">Contato</h4>
                    <p className="text-sm text-neutral-400">vendas1@marcobi.com.br</p>
                    <p className="text-sm text-neutral-400">(11) 2199-5399</p>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                        Rua Santa Catarina, nº 1<br />
                        Jardim da Várzea<br />
                        Santana de Parnaíba – SP
                    </p>
                </div>

                <div className="col-span-12 md:col-span-4 space-y-4">
                    <h4 className="font-semibold">Receba novidades</h4>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                        Insira seu email para receber conteúdos e lançamentos.
                    </p>

                    <div id="fale-conosco" className="flex gap-3">
                        <Input placeholder="Seu email" />
                        <Button className="px-6">Enviar</Button>
                    </div>
                </div>
            </div>

            <div className="border-t border-neutral-800">
                <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
                    <span>© 2026 Marcobi. Todos os direitos reservados.</span>
                    <span>Desenvolvido no Brasil</span>
                </div>
            </div>
        </footer>
    )
}
