import {
  imgRectangle207,
  imgRectangle209,
  imgRectangle212,
  imgRectangle214,
  imgRectangle210,
  imgRectangle211,
  imgRectangle213,
  imgRectangle215,
} from '../assets/images'

const testimonials = [
  { src: imgRectangle207, alt: 'Depoimento 1' },
  { src: imgRectangle209, alt: 'Depoimento 2' },
  { src: imgRectangle212, alt: 'Depoimento 3' },
  { src: imgRectangle214, alt: 'Depoimento 4' },
  { src: imgRectangle210, alt: 'Depoimento 5' },
  { src: imgRectangle211, alt: 'Depoimento 6' },
  { src: imgRectangle213, alt: 'Depoimento 7' },
  { src: imgRectangle215, alt: 'Depoimento 8' },
]

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-6" aria-label="Avaliações dos alunos">
      <div className="max-w-[1700px] mx-auto">
        {/* Section title */}
        <h2 className="font-inter font-bold text-[clamp(20px,2vw,28px)] leading-[28px] text-center mb-3">
          <span className="text-[#1c5c9f]">Veja o que acontece quando{' '}</span>
          <span className="text-[#ddc07f]">você vence a procrastinação.</span>
        </h2>

        {/* Testimonial grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10">
          {testimonials.map(({ src, alt }) => (
            <div key={alt} className="rounded-[10px] overflow-hidden aspect-[357/165]">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover rounded-[10px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Footer quote */}
        <div className="text-center mt-12 max-w-[1051px] mx-auto">
          <p className="font-inter font-bold text-[#1c5c9f] text-[clamp(18px,1.6vw,28px)] leading-[28px]">
            Você não está comprando aulas.{' '}
          </p>
          <p className="font-inter font-bold text-[#ddc07f] text-[clamp(18px,1.6vw,28px)] leading-[28px]">
            Você está adquirindo uma nova versão de você mesmo.
          </p>
        </div>
      </div>
    </section>
  )
}
