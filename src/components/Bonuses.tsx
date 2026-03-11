import { imgRectangle7 } from '../assets/images'

export default function Bonuses() {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-6" aria-label="Bônus exclusivos">
      <div className="max-w-[1700px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left image */}
          <div className="w-full lg:w-[513px] lg:min-w-[513px] max-w-full">
            <img
              src={imgRectangle7}
              alt="Material bônus Vencendo a Procrastinação"
              className="w-full h-auto object-cover rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Right content */}
          <div className="flex-1">
            {/* Sorteios headline */}
            <h2 className="font-inter font-black text-[#ebc268] text-[clamp(20px,1.8vw,28px)] leading-[31px] mb-8">
              Você ainda participará a cada 2 meses de sorteios exclusivos para ganhar
            </h2>

            {/* Bonus 1: Ebooks */}
            <div className="mb-6">
              <div className="flex gap-0">
                <div className="w-2 bg-[#ddc07f] rounded-l-sm flex-shrink-0" />
                <div className="flex-1 bg-[#2595cd] px-6 py-4">
                  <h3 className="font-inter font-bold text-[#ebc268] text-[clamp(16px,1.2vw,20px)] leading-[22px] mb-2">
                    Ebooks Exclusivos
                  </h3>
                  <p className="font-inter font-light text-white text-[clamp(14px,1vw,18px)] leading-[20px]">
                    Apresentamos, pela primeira vez, um método em 2 ebooks nunca vendido antes. Conteúdo testado com sucesso por +1293 alunos que já obtiveram ganhos expressivos. São técnicas rápidas, objetivas e discretas que você pode aplicar agora.
                  </p>
                </div>
              </div>
            </div>

            {/* Bonus 2: Mentoria */}
            <div className="mb-8">
              <div className="flex gap-0">
                <div className="w-2 bg-[#ddc07f] rounded-l-sm flex-shrink-0" />
                <div className="flex-1 bg-[#0c5f89] px-6 py-4">
                  <h3 className="font-inter font-bold text-[#ebc268] text-[clamp(16px,1.2vw,20px)] leading-[22px] mb-2">
                    Como ganhar uma mentoria com a Lizandra Soares
                  </h3>
                  <p className="font-inter font-light text-white text-[clamp(14px,1vw,18px)] leading-[20px]">
                    Alguns poucos alunos terão acesso a algo que vai muito além do curso: uma mentoria direta comigo.{' '}
                    <span className="font-inter font-medium text-[#ebc268]">Não é para todo mundo</span>.{' '}
                    <em className="font-inter font-light italic text-white">É para quem está pronto para sair da estagnação e viver uma virada real.</em>
                  </p>
                  <p className="font-inter font-light text-white text-[clamp(14px,1vw,18px)] leading-[20px] mt-2">
                    Você vai receber uma mentoria de 21 dias diretamente com a Lizandra Soares, que são 3 encontros via meet e acompanhamento semanal.
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="font-inter font-light text-black text-[clamp(16px,1.4vw,24px)] leading-[29px] mb-6">
              Pela primeira vez, você não vai apenas aprender um método para vencer a procrastinação, você vai transformar a sua identidade com recursos exclusivos e um acompanhamento que você nunca teve na vida.
            </p>

            {/* Mentoria quote */}
            <p className="font-inter font-bold text-black text-[clamp(16px,1.3vw,24px)] leading-[29px] text-center mb-8">
              Algumas pessoas terão a oportunidade de receber uma mentoria exclusiva comigo, Lizandra Soares, para acelerar ainda mais sua evolução.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <a
                href="#preco"
                className="inline-block rounded-[15px] px-12 py-5 font-inter font-bold text-white text-[clamp(18px,1.5vw,30px)] leading-[22px] text-center transition-opacity hover:opacity-90"
                style={{
                  background: 'linear-gradient(181.67deg, #ddc07f 9.79%, #b18a45 90.22%)',
                }}
                aria-label="Quero me inscrever no curso"
              >
                Quero me inscrever no curso!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
