import { imgBanner3Lizandra1 } from '../assets/images'

export default function About() {
  return (
    <section className="relative w-full overflow-hidden" aria-label="Sobre Lizandra Soares">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imgBanner3Lizandra1}
          alt="Lizandra Soares"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content overlay - right side */}
      <div className="relative z-10 min-h-[650px] flex items-center">
        <div className="ml-auto w-full lg:w-[55%] px-6 lg:pr-16 py-16">
          <h2 className="font-inter font-bold text-white text-[clamp(18px,1.5vw,24px)] leading-[27px] mb-6 uppercase tracking-wide">
            COM QUEM VOCÊ IRÁ APRENDER?
          </h2>

          <div className="font-inter font-normal text-white text-[clamp(14px,0.95vw,16px)] leading-[27px] space-y-4">
            <p>
              Criadora dos métodos{' '}
              <em className="font-semibold italic">Vencendo a Procrastinação</em>{' '}
              e{' '}
              <em className="font-semibold italic">Método Controle</em>,
              programas que já transformaram a vida de mais de 1.200 alunos, Lizandra Menezes Soares
              dedica sua carreira a elevar o padrão da prática psicológica e a conduzir pessoas a
              processos de mudança real.
            </p>
            <p>
              Graduada em Psicologia pela Faculdade Pio Décimo e registrada sob o CRP 19/003267,
              atua há mais de oito anos na clínica, integrando rigor científico, sensibilidade humana
              e um olhar profundamente estratégico sobre comportamento e saúde mental.
            </p>
            <p>
              É Mestra em Psicologia pela Universidade Federal de Sergipe (UFS), com experiência como
              professora universitária e sólida trajetória acadêmica. Possui especialização em Avaliação
              Psicológica e Neuropsicologia pelo IPOG, formação em Terapia Cognitivo-Comportamental
              pela PUC/RS e MBA em Reabilitação Neuropsicológica pelo IPOG. Sua atuação contempla
              avaliação psicológica, avaliação neuropsicológica, psicoterapia clínica, terapia de
              esquemas e reabilitação cognitiva.
            </p>
            <p>
              Como pesquisadora, aprofundou-se no estudo da psicologia do sono, especialmente em
              quadros de insônia, e em transtornos como ansiedade e depressão. Além da clínica, ministra
              cursos, palestras, workshops e treinamentos destinados à formação de profissionais de alto
              padrão. Utiliza tecnologias e protocolos avançados, como neurofeedback, programas de
              reabilitação cognitiva, entre outras metodologias baseadas em evidências.
            </p>
            <p>
              <strong className="font-semibold">
                Sua missão é clara: conduzir pessoas e profissionais ao desenvolvimento consciente,
                consistente e sustentado sempre com elegância, precisão técnica e profundo compromisso ético.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
