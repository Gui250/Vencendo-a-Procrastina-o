import {
  imgRectangle24,
  imgRectangle25,
  imgRectangle26,
  imgRectangle225,
} from '../assets/images'

const features = [
  {
    icon: imgRectangle24,
    title: 'Comunidade dos Alunos',
    description: 'Um espaço seguro para trocar experiências, manter a constância, receber apoio emocional e compartilhar vitórias.',
  },
  {
    icon: imgRectangle25,
    title: 'Acompanhamento',
    description: 'Terá acesso a direcionamentos, materiais extras e pontos de apoio que vão te manter no caminho certo, sem procrastinar.',
  },
  {
    icon: imgRectangle26,
    title: 'Suporte 24h',
    description: 'Dúvida técnica? Travou em algo? A equipe estará disponível para te ajudar 24h, garantindo que nada te impeça de avançar.',
  },
  {
    icon: imgRectangle225,
    title: 'Vitalício',
    description: 'Isso não é algo que se aprende em uma semana. Você poderá revisitar cada aula, cada módulo, quantas vezes precisar.',
    iconLarge: true,
  },
]

export default function Pricing() {
  return (
    <section id="preco" className="w-full bg-white py-16 md:py-20 px-6" aria-label="Preço e benefícios">
      <div className="max-w-[1700px] mx-auto">
        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {features.map(({ icon, title, description, iconLarge }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center border-[6px] border-[#ddc07f] rounded-[10px] p-6 gap-4"
            >
              <img
                src={icon}
                alt={title}
                className={`object-contain ${iconLarge ? 'w-[167px] h-[167px]' : 'w-[150px] h-[150px]'}`}
                loading="lazy"
              />
              <h3 className="font-inter font-bold text-black text-[clamp(16px,1.2vw,22px)] leading-[38px]">
                {title}
              </h3>
              <p className="font-inter font-normal text-black text-[clamp(13px,0.9vw,16px)] leading-[20px]">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing block */}
        <div className="flex flex-col items-center gap-4">
          {/* Original price */}
          <p className="font-inter font-normal text-black text-[clamp(20px,1.8vw,28px)] leading-[22px]">
            De <span className="line-through">R$597,00</span>
          </p>

          {/* Main price */}
          <div
            className="rounded-[14px] px-10 py-6 text-center"
            style={{ background: '#0baac9' }}
          >
            <p className="font-inter font-bold text-white text-[clamp(22px,2.5vw,48px)] leading-[22px]">
              por <span className="text-[clamp(26px,3vw,48px)]">12x de R$ 19,97</span>
            </p>
          </div>

          {/* Cash price */}
          <p className="font-inter font-normal text-[#0baac9] text-[clamp(18px,1.5vw,28px)] leading-[22px]">
            ou R$ 197 a vista
          </p>

          {/* CTA Button */}
          <a
            href="#preco"
            className="rounded-[15px] px-16 py-6 font-inter font-bold text-white text-[clamp(20px,2vw,38px)] leading-[22px] text-center transition-opacity hover:opacity-90 mt-4 w-full max-w-[814px]"
            style={{
              background: 'linear-gradient(179.06deg, #ddc07f 4.64%, #b9944f 95.36%)',
            }}
            aria-label="Quero começar minha virada agora"
          >
            Quero começar minha virada agora
          </a>
        </div>
      </div>
    </section>
  )
}
