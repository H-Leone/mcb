import Image from "next/image";
import SobreNos from "../../../../public/sobre-nos-landing.jpeg";

import { 
    Award, MapPin, Target, History, 
    Building2, Users, ArrowRight 
} from "lucide-react";


const TIMELINE_EVENTS = [
    {
        year: "1991",
        title: "O Início",
        description: "Fundação da Marcobi com foco inicial em tintas imobiliárias e migração gradual para a linha industrial.",
    },
    {
        year: "2000",
        title: "Expansão Industrial",
        description: "Inauguração da nova planta fabril e ampliação do portfólio para atender o setor metal-mecânico.",
    },
    {
        year: "2005",
        title: "Certificação ISO 9001",
        description: "Implementação do Sistema de Gestão da Qualidade, um marco na padronização dos nossos processos.",
    },
    {
        year: "2018",
        title: "Nova Era Tecnológica",
        description: "Investimento em laboratório próprio de colorimetria e modernização da linha de produção automatizada.",
    },
];

const CORPORATE_VALUES = [
    {
        title: "Missão",
        icon: <Target className="w-8 h-8 text-blue-500" />,
        desc: "Desenvolver soluções em revestimentos que agreguem valor, proteção e durabilidade aos produtos de nossos clientes."
    },
    {
        title: "Visão",
        icon: <History className="w-8 h-8 text-blue-500" />,
        desc: "Ser referência nacional em tintas industriais, reconhecida pela agilidade técnica e excelência no atendimento."
    },
    {
        title: "Valores",
        icon: <Users className="w-8 h-8 text-blue-500" />,
        desc: "Ética nas relações, compromisso com a qualidade, inovação constante e responsabilidade socioambiental."
    },
];


export default function EmpresaPage() {
  return (
    <main className="w-full bg-slate-50 text-slate-800">
      
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
            <Image
                src={SobreNos}
                alt="Fachada Indústria Marcobi"
                fill
                priority
                className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-slate-600 bg-slate-800/50 backdrop-blur-md text-slate-300 text-sm font-medium tracking-widest uppercase mb-4">
            Desde 1991
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Solidez construída com <br />
            <span className="text-blue-500">tecnologia e confiança.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Mais de três décadas desenvolvendo tintas e vernizes que protegem e valorizam a indústria brasileira.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/2 space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">A Indústria</h2>
                    <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed text-justify">
                    A Marcobi não é apenas uma fabricante de tintas; somos uma parceira estratégica para indústrias que buscam performance. Fundada em 1991, nascemos com o propósito de suprir uma lacuna no mercado: o atendimento técnico personalizado.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed text-justify">
                    Com foco em inovação, investimos continuamente em nossa planta fabril e na capacitação de nossos químicos. Nossa estrutura permite atender desde pequenos lotes customizados até grandes volumes para linhas de produção contínua, sempre com a mesma garantia de repetibilidade.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4">
                    <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                        <p className="text-3xl font-bold text-blue-600">+30</p>
                        <p className="text-sm text-slate-500">Anos de História</p>
                    </div>
                    <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm">
                        <p className="text-3xl font-bold text-blue-600">100%</p>
                        <p className="text-sm text-slate-500">Capital Nacional</p>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 relative pl-8 pt-8">
                <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-blue-100 rounded-3xl -z-10"></div>
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                        src={SobreNos}
                        alt="Estrutura industrial interna"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                    <Building2 className="w-8 h-8 mb-3 text-blue-400" />
                    <p className="font-medium text-sm">"Nosso maior patrimônio é a confiança que conquistamos a cada entrega."</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-slate-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Nossa Trajetória</h2>
                <p className="text-slate-500 mt-4">Uma história marcada pela evolução constante.</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 md:block"></div>

                <div className="space-y-12">
                    {TIMELINE_EVENTS.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-600 rounded-full z-10 shadow-md"></div>

                                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                                    <span className="text-5xl font-bold text-slate-100 absolute -top-4 md:-top-6 z-0 pointer-events-none select-none opacity-80" aria-hidden="true">
                                        {item.year}
                                    </span>
                                    <div className="relative z-10">
                                        <span className="text-blue-600 font-bold text-lg block mb-1">{item.year}</span>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="w-full md:w-1/2 hidden md:block"></div>
                            </div>
                        )
                    })}
                </div>
            </div>
          </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">Identidade Corporativa</h2>
                <p className="text-slate-400 mt-4">
                    Princípios que guiam nossas decisões e moldam nosso futuro.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {CORPORATE_VALUES.map((item) => (
                    <div key={item.title} className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors group">
                        <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/20">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                
                <div className="p-10 md:p-16 space-y-8 flex flex-col justify-center">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 text-blue-600 font-semibold uppercase text-sm tracking-wider">
                            <MapPin className="w-4 h-4" /> Nossa Planta
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">Capacidade produtiva estratégica</h2>
                    </div>

                    <p className="text-slate-600 leading-relaxed">
                        Localizada estrategicamente, nossa fábrica conta com reatores modernos e tanques de dispersão de alta capacidade. Dispomos de frota própria para entregas regionais e parcerias logísticas para atendimento nacional.
                    </p>

                    <div className="space-y-4 pt-4">
                         <div className="flex items-start gap-4">
                            <div className="mt-1 bg-blue-50 p-2 rounded-full text-blue-600">
                                <Building2 size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900">Sede Própria</p>
                                <p className="text-sm text-slate-500">Área industrial projetada para expansão.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="mt-1 bg-blue-50 p-2 rounded-full text-blue-600">
                                <Award size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900">Segurança Ambiental</p>
                                <p className="text-sm text-slate-500">Estação de tratamento de efluentes e licenciamento ambiental em dia.</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6">
                        <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all group">
                            Agendar uma visita <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="h-[400px] lg:h-auto w-full bg-slate-200 relative">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197577820128!2d-46.65868848502223!3d-23.561348584682944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1689620000000!5m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>
            </div>
        </div>
      </section>
    </main>
  )
}