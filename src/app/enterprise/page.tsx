// src/app/empresa/page.tsx
import Header from "@/components/header"
import Footer from "@/components/footer"
import SectionHeader from "@/components/section-header"
import StatCard from "@/components/card2"
import Timeline from "@/components/timeline"
import ValuesGrid from "@/components/values-grid"

export default function EmpresaPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-24 text-center bg-gray-50">
        <SectionHeader
          title="Nossa história"
          subtitle="Há mais de três décadas desenvolvendo soluções em tintas e revestimentos industriais."
        />
      </section>

      {/* INTRO */}
      <section className="py-20 max-w-5xl mx-auto space-y-8">
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Fundada em 1991, a Marcobi atua no desenvolvimento, produção e
          comercialização de tintas e revestimentos industriais, atendendo
          diversos segmentos do mercado nacional com soluções técnicas
          personalizadas.
        </p>
      </section>

      {/* STATS */}
      <section className="py-20 bg-white">
        <div className="grid grid-cols-3 gap-12 max-w-5xl mx-auto">
          <StatCard value="+30" label="Anos de experiência" />
          <StatCard value="+100" label="Produtos no portfólio" />
          <StatCard value="+10" label="Segmentos atendidos" />
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-32 bg-gray-50">
        <SectionHeader title="Linha do tempo" />

        <div className="max-w-3xl mx-auto mt-16">
          <Timeline
            items={[
              {
                year: "1991",
                text: "Fundação da Marcobi e início das atividades industriais.",
              },
              {
                year: "2000",
                text: "Ampliação do portfólio e consolidação no mercado nacional.",
              },
              {
                year: "2010",
                text: "Investimentos em tecnologia e desenvolvimento técnico.",
              },
              {
                year: "2020",
                text: "Expansão para novos segmentos industriais.",
              },
            ]}
          />
        </div>
      </section>

      {/* VALUES */}
      <section className="py-32">
        <SectionHeader
          title="Nossos valores"
          subtitle="Os pilares que orientam nossas decisões e relações."
        />

        <div className="max-w-6xl mx-auto mt-16">
          <ValuesGrid
            values={[
              {
                title: "Qualidade",
                description:
                  "Compromisso com excelência técnica em todos os processos.",
              },
              {
                title: "Parceria",
                description:
                  "Relacionamento próximo e transparente com clientes.",
              },
              {
                title: "Inovação",
                description:
                  "Desenvolvimento contínuo de soluções eficientes.",
              },
            ]}
          />
        </div>
      </section>

      <Footer />
    </>
  )
}
