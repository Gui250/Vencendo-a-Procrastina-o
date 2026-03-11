import {
  imgRectangle216,
  imgRectangle397,
  imgRectangle398,
  imgRectangle399,
  imgRectangle400,
  imgRectangle401,
  imgRectangle402,
  imgRectangle403,
  imgRectangle404,
} from '../assets/images'

interface ModuleCard {
  number: string
  subtitle: string
  title: string
  items: string[]
  icon: string
  accentColor?: string
}

const modules: ModuleCard[] = [
  {
    number: 'Módulo 0',
    subtitle: 'As dores do procrastinador',
    title: 'O Que Te Trouxe Até Aqui',
    items: [
      'Propósito de identificação',
      'O erro que todo mundo comete',
      'Por que tentar raramente funciona',
      'A falsa ideia de que procrastinação é preguiça',
    ],
    icon: imgRectangle398,
    accentColor: '#ebc268',
  },
  {
    number: 'Módulo 1',
    subtitle: 'Entendendo a Procrastinação',
    title: 'A base Cognitiva',
    items: [
      'O que é procrastinação?',
      'Procrastinação emocional x cognitiva',
      'O erro da autocobrança excessiva',
      'Por que saber não gera ação',
    ],
    icon: imgRectangle397,
    accentColor: '#d6b058',
  },
  {
    number: 'Módulo 2',
    subtitle: 'Biologia da Procrastinação',
    title: 'A engenharia Invisível',
    items: [
      'O Recurso ilimitado',
      'A Fadiga decisória',
      'A Economia de energia do cérebro',
      'Mecanismos de evitação emocional',
    ],
    icon: imgRectangle399,
    accentColor: '#ddc07f',
  },
  {
    number: 'Módulo 3',
    subtitle: 'Clareza e Microações',
    title: 'Reorganização Mental',
    items: [
      'Tarefas vagas geram paralisia',
      'Clareza cognitiva reduz resistência',
      'Fragmentação estratégica',
      'Protocolo de Microexecução',
    ],
    icon: imgRectangle400,
    accentColor: '#ddc07f',
  },
  {
    number: 'Módulo 4',
    subtitle: 'Foco e Produtividade',
    title: 'Priorização Estratégica',
    items: [
      'Trabalho operacional x de expansão',
      'Procrastinação de refúgio',
      'Medo sofisticado de crescer',
      'Matriz de Prioridade de Expansão',
    ],
    icon: imgRectangle401,
    accentColor: '#ddc07f',
  },
  {
    number: 'Módulo 5',
    subtitle: 'Planejamento Eficaz',
    title: 'Rotina de Excelência',
    items: [
      'Rotinas idealizadas fracassam',
      'Rotina aspiracional x rotina funcional',
      'Planejamento baseado em energia',
      'Mapa de Energia Pessoal',
    ],
    icon: imgRectangle402,
    accentColor: '#ddc07f',
  },
  {
    number: 'Módulo 6',
    subtitle: 'Arquitetura de Hábitos',
    title: 'Novos Hábitos',
    items: [
      'Gatilhos comportamentais',
      'Empilhamento de hábitos',
      'Redução de fricção',
      'Sistema de Gatilhos',
    ],
    icon: imgRectangle403,
    accentColor: '#ddc07f',
  },
  {
    number: 'Módulo 7',
    subtitle: 'Cronômetro e Foco',
    title: 'Gestão de Tempo e Energia',
    items: [
      'Ciclos ultradianos',
      'Blocos de execução',
      'Foco profundo',
      'Blocos de Execução',
    ],
    icon: imgRectangle404,
    accentColor: '#ddc07f',
  },
]

export default function Modules() {
  return (
    <section className="relative w-full" aria-label="Módulos do curso">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imgRectangle216}
          alt="Background módulos"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 py-16 md:py-20 px-6">
        <div className="max-w-[1700px] mx-auto">
          {/* Regular modules grid: 4 per row first two rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {modules.slice(0, 4).map((mod) => (
              <ModuleCard key={mod.number} mod={mod} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {modules.slice(4, 8).map((mod) => (
              <ModuleCard key={mod.number} mod={mod} />
            ))}
          </div>

          {/* Module 8 - wide card */}
          <div className="flex justify-center">
            <Module8Card />
          </div>

          {/* Support materials */}
          <SupportMaterials />
        </div>
      </div>
    </section>
  )
}

function ModuleCard({ mod }: { mod: ModuleCard }) {
  const { number, subtitle, title, items, icon, accentColor = '#ddc07f' } = mod
  const listItems = items.slice(0, 3)
  const highlight = items[3]

  return (
    <article className="rounded-[10px] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-[#3a536e] p-4 flex flex-col items-center gap-2 pt-6">
        <p className="font-inter font-medium text-[#ddc07f] text-[26px] leading-[30px] text-center">
          {number}
        </p>
        <p className="font-inter font-extrabold text-white text-[22px] leading-[30px] text-center">
          {title}
        </p>
        <p className="font-inter font-medium text-[#2595cd] text-[18px] leading-[30px] text-center">
          {subtitle}
        </p>
        <img
          src={icon}
          alt={title}
          className="w-[150px] h-[150px] object-cover mt-2"
          loading="lazy"
        />
      </div>

      {/* Body */}
      <div className="bg-white flex-1 p-4">
        <ul className="space-y-1">
          {listItems.map((item) => (
            <li key={item} className="flex items-start gap-2 font-inter font-medium text-[16px] leading-[30px]" style={{ color: accentColor }}>
              <span className="mt-1 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
          {highlight && (
            <li className="flex items-start gap-2 font-inter font-black text-[#3a536e] text-[16px] leading-[30px]">
              <span className="mt-1 flex-shrink-0">•</span>
              <span>{highlight}</span>
            </li>
          )}
        </ul>
      </div>
    </article>
  )
}

function Module8Card() {
  return (
    <article className="w-full max-w-[784px] rounded-[10px] overflow-hidden" aria-label="Módulo 8">
      {/* Header */}
      <div
        className="p-6 flex flex-col items-center gap-2"
        style={{ background: 'linear-gradient(-0.45deg, #223345 32.98%, #3a536e 98.31%)' }}
      >
        <div
          className="p-6 flex flex-col items-center gap-2 w-full"
          style={{ background: 'linear-gradient(-0.45deg, #223345 32.98%, #3a536e 98.31%)' }}
        >
          <p className="font-inter font-medium text-[#ddc07f] text-[26px] leading-[30px] text-center">
            Módulo 8
          </p>
          <p className="font-inter font-extrabold text-white text-[24px] leading-[30px] text-center">
            A ponte para o próximo nível
          </p>
          <p className="font-inter font-medium text-[#2595cd] text-[20px] leading-[30px] text-center">
            Diagnóstico Profundo
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white p-6 flex flex-col md:flex-row gap-6 items-start">
        {/* Items */}
        <ul className="flex-1 space-y-1">
          {[
            'A importância da avaliação neuropsicológica',
            'Limites do autoconhecimento superficial',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 font-inter font-extrabold text-[#ddc07f] text-[16px] leading-[30px]">
              <span className="flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a
          href="#preco"
          className="rounded-[10px] px-10 py-4 font-inter font-extrabold text-white text-[24px] leading-[30px] uppercase text-center transition-opacity hover:opacity-90 whitespace-nowrap"
          style={{ background: 'linear-gradient(-0.66deg, #b99550 2.43%, #dcbf7d 97.57%)' }}
          aria-label="Começar agora"
        >
          Começar agora
        </a>
      </div>
    </article>
  )
}

import {
  imgRectangle405,
  imgRectangle406,
  imgRectangle407,
  imgRectangle408,
} from '../assets/images'

const materials = [
  { icon: imgRectangle405, label: 'Mapas mentais' },
  { icon: imgRectangle406, label: 'Checklists' },
  { icon: imgRectangle407, label: 'Templates' },
  { icon: imgRectangle408, label: 'Guias Práticos' },
]

function SupportMaterials() {
  return (
    <div className="mt-10">
      <h3 className="font-inter font-black text-[#10447c] text-[clamp(20px,1.8vw,28px)] leading-[26px] uppercase text-center mb-6">
        Bônus e Materiais de Apoio
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {materials.map(({ icon, label }) => (
          <div key={label} className="bg-white rounded-[10px] flex items-center gap-4 px-4 py-4">
            <img
              src={icon}
              alt={label}
              className="w-[80px] h-[80px] object-cover flex-shrink-0"
              loading="lazy"
            />
            <p className="font-inter font-extrabold text-[#10447c] text-[clamp(16px,1.2vw,24px)] leading-[26px]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
