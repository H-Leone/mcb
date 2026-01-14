import Button from "@/components/button";
import SectionHeader from "@/components/section-header";
import FeatureCard from "@/components/card";
import ProcessList from "@/components/process-list";
import Image from "next/image";
import { ClipboardCheck, ShieldCheck, TrendingUp, FlaskConical } from "lucide-react";
import SobreNos from "../../../../public/sobre-nos-landing.jpeg";

export default function QualidadePage() {
  const pilares = [
    {
      title: "Compromisso com o cliente",
      description:
        "Entregamos soluções confiáveis, desenvolvidas para atender às necessidades reais de cada aplicação industrial.",
      icon: <ShieldCheck size={42} />,
    },
    {
      title: "Controle de processos",
      description:
        "Monitoramento contínuo em todas as etapas produtivas, assegurando padronização e desempenho.",
      icon: <ClipboardCheck size={42} />,
    },
    {
      title: "Melhoria contínua",
      description:
        "Evoluímos constantemente nossos processos, produtos e métodos para acompanhar o mercado.",
      icon: <TrendingUp size={42} />,
    },
  ];

  const processos = [
    "Seleção e qualificação de matérias-primas",
    "Ensaios e verificações técnicas",
    "Controle em processo produtivo",
    "Avaliação final e liberação técnica",
    "Rastreabilidade e registros de qualidade",
  ];

  return (
    <>
      <section className="w-11/12 mx-auto grid grid-cols-2 gap-16 items-center py-24">
        <div className="space-y-8">
          <h1 className="text-4xl font-semibold">
            Qualidade que gera confiança e resultados
          </h1>

          <p className="text-lg text-gray-600 w-4/5">
            Nossos processos são orientados por rigor técnico, controle contínuo e foco total no desempenho dos produtos entregues aos nossos clientes.
          </p>

          <Button redirect="/contato">Fale com nosso time técnico</Button>
        </div>

        <Image
          src={SobreNos}
          alt="Processo industrial"
          width={520}
          height={380}
          className="rounded-2xl object-cover"
        />
      </section>

      <section className="bg-blue/10 py-24">
        <div className="w-10/12 mx-auto space-y-16">
          <SectionHeader
            title="Nossa política da qualidade"
            subtitle="Atuamos com responsabilidade e excelência, garantindo produtos confiáveis e alinhados às exigências do mercado industrial."
          />

          <div className="grid grid-cols-3 gap-8">
            {pilares.map((p) => (
              <FeatureCard
                key={p.title}
                icon={p.icon}
                title={p.title}
                description={p.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="w-10/12 mx-auto grid grid-cols-2 gap-16 items-center">
          <Image
            src={SobreNos}
            alt="Controle de qualidade"
            width={480}
            height={360}
            className="rounded-2xl object-cover"
          />

          <div className="space-y-8">
            <SectionHeader
              align="left"
              title="Processos orientados à excelência"
              subtitle="Cada etapa é conduzida com critérios técnicos claros, assegurando confiabilidade, padronização e rastreabilidade."
            />

            <ProcessList items={processos} />
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-24">
        <div className="w-10/12 mx-auto grid grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeader
              align="left"
              title="Ensaios e validações técnicas"
              subtitle="Realizamos verificações técnicas conforme normas aplicáveis, garantindo que cada produto atenda aos requisitos definidos para sua aplicação."
            />
          </div>

          <div className="bg-white rounded-2xl p-12 flex flex-col items-center text-center space-y-6 shadow-sm">
            <FlaskConical size={56} className="text-blue-600" />
            <p className="text-lg font-medium">Controle técnico e rastreabilidade</p>
            <p className="text-gray-600">
              Processos documentados e acompanhamento contínuo para assegurar consistência e confiabilidade.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 text-center space-y-8">
        <SectionHeader
          title="Qualidade aplicada à sua necessidade"
          subtitle="Nossa equipe está pronta para apoiar tecnicamente o seu projeto e indicar a melhor solução para cada aplicação."
        />

        <div className="flex justify-center">
          <Button redirect="/contato">Entrar em contato</Button>
        </div>
      </section>
    </>
  );
}
