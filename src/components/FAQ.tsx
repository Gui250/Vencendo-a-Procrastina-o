import { useState } from 'react'
import { imgRectangle161 } from '../assets/images'

const faqs = [
  {
    question: '1. Quanto tempo terei de acesso ao curso? Recebo certificado ao concluir o curso?',
    answer: 'Você terá acesso vitalício ao curso, podendo revisitar cada aula quantas vezes precisar. Ao concluir todos os módulos, você recebe seu certificado de conclusão.',
  },
  {
    question: '2. Mesmo sendo muito procrastinador(a), esse método funciona pra mim?',
    answer: 'Sim! O método foi desenvolvido especialmente para quem luta com a procrastinação. Mais de 1.286 alunos já comprovaram a eficácia, independentemente do grau de procrastinação.',
  },
  {
    question: '3. Esse curso ajuda com ansiedade e falta de foco?',
    answer: 'Com certeza. O método aborda as raízes emocionais e cognitivas da procrastinação, que estão diretamente relacionadas à ansiedade e à dificuldade de concentração.',
  },
  {
    question: '4. O curso serve para quem trabalha, estuda ou tem vida corrida?',
    answer: 'Sim, o conteúdo foi desenvolvido para se encaixar na rotina de pessoas ocupadas. Você aprenderá a criar sistemas eficazes mesmo com tempo limitado.',
  },
  {
    question: '5. O curso é para qualquer idade?',
    answer: 'Sim! O método é aplicável para pessoas de todas as idades que desejam superar a procrastinação e criar hábitos mais saudáveis e produtivos.',
  },
  {
    question: '6. O que diferencia esse curso de outros sobre produtividade? Em quanto tempo verei resultados?',
    answer: 'Este curso vai além das técnicas superficiais. Ele trabalha a raiz psicológica da procrastinação com base científica. Muitos alunos relatam mudanças nas primeiras semanas.',
  },
  {
    question: '7. Tenho medo de não conseguir acompanhar. E se eu travar?',
    answer: 'Você terá suporte 24h e acesso à comunidade de alunos. Se travar em algum ponto, a equipe estará disponível para te ajudar a avançar.',
  },
  {
    question: '8. As aulas são ao vivo ou gravadas? E se eu não gostar? Tenho garantia?',
    answer: 'As aulas são gravadas, então você assiste no seu próprio ritmo. Oferecemos garantia de satisfação para que você possa investir com segurança.',
  },
  {
    question: '9. Como faço para acessar o curso depois de comprar?',
    answer: 'Após a confirmação do pagamento, você recebe um e-mail com seus dados de acesso à plataforma. O acesso é imediato.',
  },
  {
    question: '10. Quanto tempo preciso por dia para fazer o curso?',
    answer: 'O curso é estruturado para quem tem rotina corrida. Você consegue progredir significativamente dedicando 20 a 30 minutos por dia.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-white py-16 md:py-20 px-6" aria-label="Perguntas frequentes">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="font-inter font-bold text-[#02356b] text-[clamp(18px,1.5vw,24px)] leading-[27px] text-center mb-10">
          FAQ — Dúvidas Frequentes
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden rounded-sm">
              <button
                onClick={() => toggle(index)}
                className="w-full bg-[#167fb3] flex items-center justify-between gap-4 px-6 py-4 text-left cursor-pointer transition-colors hover:bg-[#1370a0]"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-inter font-bold text-white text-[clamp(14px,1vw,24px)] leading-[27px] flex-1">
                  {faq.question}
                </span>
                <img
                  src={imgRectangle161}
                  alt={openIndex === index ? 'Fechar' : 'Abrir'}
                  className="w-[40px] h-[40px] object-cover flex-shrink-0 transition-transform"
                  style={{ transform: openIndex === index ? 'rotate(45deg)' : 'none' }}
                />
              </button>

              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="bg-white px-6 py-4 border border-[#167fb3] border-t-0"
                  role="region"
                >
                  <p className="font-inter font-normal text-black text-[clamp(14px,1vw,18px)] leading-[27px]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
