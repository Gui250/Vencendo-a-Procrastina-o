import { imgBanner3Lizandra1 } from '../assets/images'
import lizandraImg from '../assets/lizandra.png'
import mobileImg from '../assets/mobile.png'

export default function About() {
  return (
    <section className="relative w-full overflow-hidden" aria-label="Sobre Lizandra Soares">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full hidden lg:block">
        <img
          src={imgBanner3Lizandra1}
          alt="Lizandra Soares"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content overlay - right side */}
      <div className="relative z-10 min-h-[clamp(1800px,220vh,2400px)] lg:min-h-[650px] flex items-center">
        {/* Desktop background image - Lizandra */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url(${lizandraImg})`,
            backgroundSize: 'auto 100%',
            backgroundPosition: 'left center'
          }}
        />

        {/* Mobile background image - preenche toda a sessão pai */}
        <div className="lg:hidden absolute inset-0 w-full h-full pointer-events-none">
          <img
            src={mobileImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="ml-auto w-full lg:w-[55%] px-6 lg:px-12 lg:pr-16 py-24 lg:py-12 relative">

          <h2 className="relative z-10 font-inter font-bold text-white text-[clamp(18px,1.5vw,24px)] leading-[27px] mb-6 uppercase tracking-wide text-center">
            COM QUEM VOCÊ IRÁ APRENDER?
          </h2>

          <div className="relative z-10 font-inter font-normal text-white text-[clamp(14px,0.95vw,16px)] leading-[27px] space-y-4">
            <p className="pt-[31.25rem] lg:pt-0">
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
            <p style={{ color: '#DDC07F' }} className="pb-20 lg:pb-6">
              É Mestra em Psicologia pela Universidade Federal de Sergipe (UFS), com experiência como
              professora universitária e sólida trajetória acadêmica. Possui especialização em Avaliação
              Psicológica e Neuropsicologia pelo IPOG, formação em Terapia Cognitivo-Comportamental
              pela PUC/RS e MBA em Reabilitação Neuropsicológica pelo IPOG. Sua atuação contempla
              avaliação psicológica, avaliação neuropsicológica, psicoterapia clínica, terapia de
              esquemas e reabilitação cognitiva.
            </p>
            <p className="pt-[31.5rem] lg:pt-0">
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
