import { imgRectangle202 } from '../assets/images'

export default function VSL() {
  return (
    <section className="relative w-full overflow-hidden" aria-label="Vídeo">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imgRectangle202}
          alt="Background VSL"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full py-16 md:py-24 px-6">
        {/* Headline */}
        <div className="text-center mb-10">
          <h2 className="font-poppins font-bold text-[#010101] text-[clamp(22px,2vw,28px)] leading-[31px]">
            Você já tentou mudar
          </h2>
          <p className="font-poppins font-bold text-[#ddc07f] text-[clamp(22px,2vw,28px)] leading-[31px]">
            mas algo sempre te puxa de volta?
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="mx-auto max-w-[800px] w-full aspect-video bg-[#ff0404] rounded-[15px] flex items-center justify-center">
          <span className="text-white font-inter font-semibold text-xl">Vídeo</span>
        </div>

        {/* Footer text */}
        <div className="text-center mt-12">
          <p className="font-poppins font-light text-black text-[clamp(18px,1.6vw,28px)] leading-[27px]">
            Sua nova vida está a um passo.
          </p>
          <p className="font-poppins text-[clamp(18px,1.6vw,28px)] leading-[27px]">
            <strong className="font-poppins font-bold text-[#ddc07f]">E tudo começa com uma decisão</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
