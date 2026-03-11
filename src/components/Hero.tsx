import { imgRectangle138, imgRectangle236 } from '../assets/images'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[700px] overflow-hidden" aria-label="Início">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imgRectangle138}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-16 lg:px-[297px] py-[91px]">
        {/* Logo */}
        <div className="mb-8">
          <img
            src={imgRectangle236}
            alt="Vencendo a Procrastinação - Logo"
            className="w-[392px] max-w-[70vw] h-auto object-contain"
          />
        </div>

        {/* Headline */}
        <h1 className="font-poppins font-bold text-white text-[clamp(28px,4vw,48px)] leading-[1.05] max-w-[769px] mb-6">
          O que está te travando não é preguiça{' '}
          <span className="text-[#c59d51]">é a sua mente tentando te proteger.</span>
        </h1>

        {/* Sub-headline */}
        <p className="font-poppins font-medium text-white text-[clamp(16px,1.4vw,24px)] leading-[27px] max-w-[772px] mb-6">
          Junte-se a{' '}
          <span className="text-[#ebc268]">mais de 1.286 alunos</span>{' '}
          que estão transformando suas vidas! Entenda a raiz da sua procrastinação e crie uma rotina Antiprocrastinação.{' '}
          <strong className="font-poppins font-bold text-[#ebc268]">Chega de esforço sem resultado!</strong>
        </p>

        {/* CTA text */}
        <p className="font-poppins font-medium text-white text-[clamp(16px,1.4vw,24px)] leading-[27px] max-w-[776px] mb-8">
          Aprenda a vencer a procrastinação e finalmente{' '}
          <span className="text-[#b58d48]">fazer o que você sabe que precisa ser feito.</span>
        </p>

        {/* CTA Button */}
        <a
          href="#preco"
          className="inline-block rounded-[61px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] px-12 py-[22px] font-poppins font-black text-white text-[clamp(18px,1.5vw,24px)] leading-tight text-center transition-opacity hover:opacity-90 active:opacity-80"
          style={{
            background: 'linear-gradient(180deg, rgba(235,194,104,0.2) 26%, rgba(183,144,73,0.2) 64.4%, rgba(141,102,48,0.2) 100%), linear-gradient(90deg, #b9924a 0%, #b9924a 100%)',
          }}
          aria-label="Liberar acesso ao curso"
        >
          LIBERAR O ACESSO
        </a>
      </div>
    </section>
  )
}
