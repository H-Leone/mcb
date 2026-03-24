import {
    MapPin,
    Send,
    Beaker,
    HardHat,
    Truck,
    Clock
} from "lucide-react";

const CONTACT_CHANNELS = [
    {
        title: "Suporte Técnico",
        desc: "Dúvidas sobre aplicação, solventes e diluição.",
        action: "Falar com Químico",
        icon: <Beaker className="text-emerald-500" size={24} />,
        link: "https://wa.me/seunumerowhatsapp"
    },
    {
        title: "Vendas e Orçamentos",
        desc: "Cotações para grandes volumes e parcerias.",
        action: "Solicitar Cotação",
        icon: <Truck className="text-blue-500" size={24} />,
        link: "mailto:comercial@marcobi.com.br"
    },
    {
        title: "Especificação de Projetos",
        desc: "Desenvolvimento de cores e sistemas exclusivos.",
        action: "Agendar Reunião",
        icon: <HardHat className="text-amber-500" size={24} />,
        link: "#"
    }
];

export default function ContactPage() {
    return (
        <main className="w-full bg-white text-slate-900 overflow-x-hidden">
            <section className="relative w-full pt-32 md:pt-48 pb-20 md:pb-28 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
                        Vamos colorir seu <br />
                        <span className="text-emerald-400">próximo desafio.</span>
                    </h1>
                    <p className="text-slate-400 max-w-xl text-sm md:text-lg font-light mx-auto md:mx-0">
                        Seja para uma linha de produção industrial ou um projeto arquitetônico complexo,
                        nossa engenharia química está à sua disposição.
                    </p>
                </div>
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:32px_32px]"></div>
            </section>

            <section className="container mx-auto px-4 sm:px-6 relative z-20 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    <div className="lg:col-span-1 space-y-4">
                        {CONTACT_CHANNELS.map((channel, i) => (
                            <div key={i} className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-50 rounded-xl shrink-0">{channel.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{channel.title}</h3>
                                        <p className="text-sm text-slate-500 mb-4">{channel.desc}</p>
                                        <a href={channel.link} className="text-xs font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-700 flex items-center gap-2">
                                            {channel.action} <Send size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="p-6 md:p-8 bg-emerald-50 rounded-3xl border border-emerald-100 mt-6 md:mt-8">
                            <h4 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
                                <Clock size={18} /> Horário de Operação
                            </h4>
                            <p className="text-sm text-emerald-700 leading-relaxed">
                                Segunda a Quinta: 07:30 às 17:30<br />
                                Sexta-feira: 07:30 às 16:30<br />
                                <span className="block mt-2 font-semibold">Plantão Técnico via WhatsApp</span>
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                        <div className="bg-slate-50 p-5 sm:p-6 md:p-8 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4 text-center md:text-left">
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold">Diagnóstico Rápido</h2>
                                <p className="text-slate-500 text-sm">Preencha e enviaremos o técnico ideal para sua necessidade.</p>
                            </div>
                            <div className="flex -space-x-2 justify-center md:justify-end">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Técnico" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
                                    +8
                                </div>
                            </div>
                        </div>

                        <form className="p-5 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Nome Completo</label>
                                <input type="text" placeholder="Ex: João Marcobi" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">E-mail Corporativo</label>
                                <input type="email" placeholder="joao@empresa.com.br" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" />
                            </div>

                            <div className="md:col-span-2 space-y-4">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Qual o seu desafio hoje?</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                                    {["Pintura Industrial", "Arquitetura", "Revenda", "Manutenção"].map((opt) => (
                                        <button key={opt} type="button" className="px-4 py-3 rounded-lg border border-slate-200 text-sm font-medium hover:bg-emerald-50 hover:border-emerald-200 transition-colors">
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="md:col-span-2 space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Conte-nos sobre o substrato ou superfície</label>
                                <textarea rows={4} placeholder="Ex: Preciso de uma tinta para aço galvanizado com alta resistência a UV..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none"></textarea>
                            </div>

                            <div className="md:col-span-2">
                                <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 shadow-lg shadow-slate-200">
                                    Enviar para Análise Técnica <Send size={18} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                        <div className="md:w-1/2 space-y-6 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-mono mx-auto md:mx-0">
                                <MapPin size={14} className="text-emerald-500" /> Fábrica & Showroom
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold">Onde a química acontece.</h2>

                            <p className="text-slate-600">
                                Visite nosso showroom para ver amostras aplicadas e testar texturas em tempo real.
                            </p>

                            <div className="space-y-4">
                                <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 text-center md:text-left">
                                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-emerald-500 shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <span className="text-slate-700">
                                        Rua da Inovação, 404 - Distrito Industrial, São Paulo - SP
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 w-full h-[280px] sm:h-[340px] md:h-[400px] rounded-3xl overflow-hidden border-4 sm:border-6 md:border-8 border-white shadow-2xl">
                            <iframe
                                title="Mapa da empresa"
                                src="https://www.google.com/maps?q=Rua%20da%20Inova%C3%A7%C3%A3o%2C%20404%20-%20Distrito%20Industrial%2C%20S%C3%A3o%20Paulo%20-%20SP&z=15&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}