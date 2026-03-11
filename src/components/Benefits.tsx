import {
  imgRectangle218,
  imgRectangle219,
  imgRectangle220,
  imgRectangle221,
  imgRectangle222,
  imgRectangle223,
} from '../assets/images'

const benefits = [
  { icon: imgRectangle218, label: 'Controle emocional' },
  { icon: imgRectangle219, label: 'Disciplina natural' },
  { icon: imgRectangle220, label: 'Clareza mental' },
  { icon: imgRectangle221, label: 'Confiança' },
  { icon: imgRectangle222, label: 'Ação sem sabotagem' },
  { icon: imgRectangle223, label: 'Autoimagem fortalecida' },
]

export default function Benefits() {
  return (
    <section className="w-full bg-[#263c56] py-16 md:py-20 px-6" aria-label="Benefícios">
      <div className="max-w-[1300px] mx-auto">
        {/* Section title */}
        <h2 className="font-inter font-black text-[#ddc07f] text-[clamp(20px,2vw,28px)] leading-[31px] text-center mb-12 whitespace-pre-line">
          O que você vai desbloquear com o{'\n'}método Vencendo a Procrastinação
        </h2>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map(({ icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-4 border-[9px] border-[#08c9ef] rounded-[18px] p-6 min-h-[180px] justify-center"
            >
              <img
                src={icon}
                alt={label}
                className="w-[110px] h-[110px] object-contain"
              />
              <p className="font-inter font-bold text-[#c59d51] text-[clamp(16px,1.3vw,20px)] leading-[42px] text-center">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
