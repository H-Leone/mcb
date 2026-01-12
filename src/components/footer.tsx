import Image from "next/image";
import Logo from "../../public/logo.png";
import Button from "./button";
import Input from "./input";

function Footer() {
    return (
        <footer className="bg-[#0c1d41] p-8 text-white flex justify-evenly">
            <div>
                <Image
                    src={Logo.src}
                    width={75}
                    height={75}
                    alt="Logo"
                />
                <p className="w-lg text-sm">A Marcobi atua no desenvolvimento e fabricação de tintas e revestimentos industriais, oferecendo soluções técnicas para diversos segmentos da indústria.</p>
            </div>

            <div className="space-y-6 text-sm">
                <div className="flex gap-6">
                    <p>Email</p>
                    <p>vendas1@marcobi.com.br</p>
                </div>
                <div className="flex gap-6">
                    <p>Telefone</p>
                    <p>(11) 2199-5399</p>
                </div>
                <div className="flex gap-6">
                    <p>Endereço</p>
                    <p>Rua Santa Catarina, n° 1 - Jardim da Várzea - CEP 06530-071 Santana de Parnaíba - SP</p>
                </div>

                <div id="fale-conosco" className="space-y-6 flex items-center gap-4">
                    <Input label="Insira seu email para receber novidades" />

                    <Button className="ml-auto py-3">
                        Enviar
                    </Button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;