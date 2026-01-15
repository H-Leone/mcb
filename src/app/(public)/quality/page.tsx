import Button from "@/components/button";
import SectionHeader from "@/components/section-header";
import FeatureCard from "@/components/card";
import ProcessList from "@/components/process-list";
import Image from "next/image";
import SobreNos from "../../../../public/sobre-nos-landing.jpeg";
import {
  ShieldCheck,
  ClipboardCheck,
  TrendingUp,
  Target,
  Eye,
  HeartHandshake,
  FlaskConical,
} from "lucide-react";

export default function QualidadePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-32 text-white text-center">
        <Image
          src={SobreNos}
          alt="Qualidade industrial"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-6 px-6">
          <h1 className="text-5xl md:text-6xl font-semibold">
            Qualidade
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Processos padronizados, controle rigoroso e compromisso contínuo
            com desempenho, segurança e confiabilidade.
          </p>

          <Button redirect="/contato">
            Fale com nosso time técnico
          </Button>
        </div>
      </section>

      {/* POLÍTICA DA QUALIDADE */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto space-y-20 px-6">
          <SectionHeader
            title="Política da Qualidade"
            subtitle="Princípios que orientam nossos processos e decisões"
          />

          <div className="grid grid-cols-3 gap-10">
            <FeatureCard
              icon={<ShieldCheck size={44} />}
              title="Compromisso com o cliente"
              description="Atender rigorosamente às necessidades técnicas de cada aplicação, assegurando desempenho, segurança e confiabilidade."
            />

            <FeatureCard
              icon={<ClipboardCheck size={44} />}
              title="Controle de processos"
              description="Padronização, monitoramento contínuo e rastreabilidade em todas as etapas produtivas."
            />

            <FeatureCard
              icon={<TrendingUp size={44} />}
              title="Melhoria contínua"
              description="Evolução constante de processos, produtos e métodos, alinhados às exigências do mercado."
            />
          </div>
        </div>
      </section>

      {/* MISSÃO, VISÃO E VALORES */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-20 px-6">
          <SectionHeader
            title="Direcionamento Estratégico"
            subtitle="Missão, visão e valores que sustentam nossa atuação"
          />

          <div className="grid grid-cols-3 gap-10">
            <FeatureCard
              icon={<Target size={42} />}
              title="Missão"
              description="Desenvolver soluções industriais em tintas e revestimentos com excelência técnica e foco no cliente."
            />

            <FeatureCard
              icon={<Eye size={42} />}
              title="Visão"
              description="Ser referência nacional em qualidade, inovação e confiabilidade no mercado industrial."
            />

            <FeatureCard
              icon={<HeartHandshake size={42} />}
              title="Valores"
              description="Ética, responsabilidade técnica, melhoria contínua e parceria com clientes e colaboradores."
            />
          </div>
        </div>
      </section>

      {/* PROCESSOS */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-20 px-6 items-center">
          <Image
            src={SobreNos}
            alt="Processos de qualidade"
            width={520}
            height={400}
            className="rounded-2xl object-cover"
          />

          <div className="space-y-8">
            <SectionHeader
              align="left"
              title="Processos orientados à excelência"
              subtitle="Critérios técnicos claros, padronização e rastreabilidade"
            />

            <ProcessList
              items={[
                "Seleção e qualificação de matérias-primas",
                "Ensaios e verificações técnicas",
                "Controle em processo produtivo",
                "Avaliação final e liberação técnica",
                "Rastreabilidade e registros de qualidade",
              ]}
            />
          </div>
        </div>
      </section>

      {/* BLOCO DE DESTAQUE */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center space-y-8 px-6">
          <FlaskConical size={64} className="mx-auto text-blue-500" />

          <h2 className="text-4xl font-semibold">
            Ensaios e validações técnicas
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            Todos os produtos passam por ensaios técnicos conforme normas
            aplicáveis, assegurando conformidade, desempenho e confiabilidade
            para cada aplicação industrial.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-white">
        <SectionHeader
          title="Qualidade aplicada à sua necessidade"
          subtitle="Nossa equipe técnica está pronta para apoiar seu projeto."
        />

        <div className="flex justify-center mt-10">
          <Button redirect="/contato">
            Entrar em contato
          </Button>
        </div>
      </section>
    </>
  );
}
