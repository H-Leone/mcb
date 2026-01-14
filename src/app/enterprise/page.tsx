import Header from "@/components/header"
import Footer from "@/components/footer"
import SectionHeader from "@/components/section-header"
import Timeline from "@/components/timeline"
import Image from "next/image"
import SobreNos from "../../../public/sobre-nos-landing.jpeg";


export default function EmpresaPage() {
  return (
    <>
      <Header />

      {/* HERO INSTITUCIONAL */}
      <section className="relative pt-40 pb-36 text-white">
        <Image
          src={SobreNos}
          alt="Indústria Marcobi"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 px-6">
          <p className="uppercase tracking-widest text-sm text-gray-300">
            Marcobi Tintas Industriais
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Tecnologia, qualidade <br /> e desempenho industrial
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Há mais de três décadas desenvolvendo soluções em tintas e
            revestimentos industriais para diferentes segmentos do mercado.
          </p>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="py-28 max-w-6xl mx-auto grid grid-cols-2 gap-16 px-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">
            A Marcobi
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Fundada em 1991, a Marcobi é uma indústria brasileira especializada
            no desenvolvimento, produção e comercialização de tintas e
            revestimentos industriais. Atua em diversos segmentos do mercado,
            oferecendo soluções técnicas que aliam desempenho, qualidade e
            confiabilidade.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Com foco em inovação e excelência técnica, a empresa investe
            continuamente em tecnologia, processos produtivos e relacionamento
            próximo com seus clientes, garantindo soluções eficientes para
            diferentes aplicações industriais.
          </p>
        </div>

        <Image
          src={SobreNos}
          alt="Estrutura industrial"
          width={600}
          height={450}
          className="rounded-2xl object-cover"
        />
      </section>

      <section className="py-36 bg-white">
  <SectionHeader title="Nossa trajetória" />

  <div className="mt-24">
    <Timeline
      items={[
        {
          year: "1995",
          title: "Fundação da Marcobi",
          description:
            "Início das atividades da Marcobi, com foco no desenvolvimento de soluções em tintas e revestimentos industriais.",
          image: SobreNos.src,
        },
        {
          year: "2000",
          title: "Consolidação no Mercado",
          description:
            "Ampliação da atuação no mercado industrial, atendendo diferentes aplicações e segmentos produtivos.",
          image: SobreNos.src,
        },
        {
          year: "2004",
          title: "Implantação da Política da Qualidade",
          description:
            "Estruturação de processos padronizados com foco na melhoria contínua.",
          image: SobreNos.src,
        },
        {
          year: "2005",
          title: "Certificação ISO 9001",
          description:
            "Certificação do Sistema de Gestão da Qualidade conforme a norma ISO 9001.",
          image: SobreNos.src,
        },
      ]}
    />
  </div>
</section>


      <section className="py-36 bg-gray-900 text-white">
  <SectionHeader
    title="Compromisso com a Qualidade"
    subtitle="Processos estruturados, certificações e foco total no cliente."
  />

  <div className="max-w-6xl mx-auto mt-20 grid grid-cols-3 gap-10 px-8">
    {[
      {
        title: "Sistema de Gestão da Qualidade",
        desc: `A Marcobi adota práticas de gestão baseadas em processos padronizados
        e controle rigoroso, assegurando constância na qualidade de seus produtos
        e confiabilidade em todas as etapas de produção.`,
      },
      {
        title: "Certificação ISO 9001/2018",
        desc: `Atuamos com base nos princípios da norma ISO 9001, reforçando o
        compromisso com a melhoria contínua, a eficiência operacional e o
        atendimento às expectativas de clientes e parceiros.`,
      },
      {
        title: "Compromisso com o Cliente",
        desc: `Cada solução desenvolvida pela Marcobi tem como objetivo atender às
        necessidades específicas de aplicação, promovendo desempenho, segurança
        e satisfação em diferentes contextos industriais.`,
      },
    ].map((item) => (
      <div
        key={item.title}
        className="rounded-2xl overflow-hidden border border-white/20 hover:border-white transition bg-gray-900"
      >
        <div className="relative h-48">
          <Image
            src={SobreNos}
            alt={item.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* TEXTO */}
        <div className="p-8 space-y-4">
          <h3 className="text-xl font-semibold leading-snug">
            {item.title}
          </h3>

          <p className="text-gray-300 leading-relaxed text-sm">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* MAPA + ESTRUTURA */}
      <section className="py-36 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 px-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Nossa Estrutura
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              A Marcobi conta com estrutura adequada para o desenvolvimento e
              fabricação de tintas e revestimentos industriais, dispondo de
              instalações planejadas para atender às demandas produtivas com
              eficiência e segurança.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Localizada estrategicamente, a empresa possui capacidade
              operacional compatível com diferentes volumes de produção,
              assegurando padronização, controle de qualidade e agilidade no
              atendimento aos clientes.
            </p>
          </div>

          <iframe
            className="w-full h-[420px] rounded-2xl border"
            src="https://www.google.com/maps?q=Brasil&output=embed"
            loading="lazy"
          />
        </div>
      </section>

      <Footer />
    </>
  )
}
