import {
  imgRectangle171,
  imgRectangle172,
  imgRectangle173,
  imgRectangle174,
  imgRectangle175,
  imgRectangle176,
  imgRectangle177,
} from '../assets/images'

const socialLinks = [
  { icon: imgRectangle172, alt: 'Rede social 1', href: '#' },
  { icon: imgRectangle173, alt: 'Rede social 2', href: '#' },
  { icon: imgRectangle174, alt: 'Rede social 3', href: '#' },
  { icon: imgRectangle175, alt: 'Rede social 4', href: '#' },
  { icon: imgRectangle176, alt: 'Rede social 5', href: '#' },
  { icon: imgRectangle177, alt: 'Rede social 6', href: '#' },
]

export default function Footer() {
  return (
    <footer aria-label="Rodapé">
      {/* Logo and social section */}
      <div className="bg-white py-10 px-6 flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="w-[300px] md:w-[541px] max-w-full">
          <img
            src={imgRectangle171}
            alt="Lizandra Soares - Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Social icons */}
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map(({ icon, alt, href }) => (
            <a
              key={alt}
              href={href}
              aria-label={alt}
              className="transition-opacity hover:opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={icon}
                alt={alt}
                className="w-[50px] h-[50px] object-cover"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#02356b] py-10 px-6 flex flex-col items-center gap-2 text-center">
        <p className="font-inter font-bold text-white text-[clamp(14px,1.2vw,24px)] leading-[27px]">
          Todos direitos reservados a Lizandra Soares
        </p>
        <p className="font-inter font-normal text-white text-[clamp(13px,1vw,24px)] leading-[27px]">
          Política de Privacidade | Termos de Uso
        </p>
        <p className="font-inter font-semibold text-white text-[clamp(13px,1vw,24px)] leading-[27px]">
          Produzido por Smart Soluções
        </p>
      </div>
    </footer>
  )
}
