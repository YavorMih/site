import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    q: "Какви са таксите?",
    a: "Нашите такси са базирани изцяло на успеха. Варират между 15% и 35% от реализирания приход, в зависимост от избрания пакет услуги. Без скрити месечни такси."
  },
  {
    q: "Как следя приходите си?",
    a: "Предоставяме достъп до персонален портал, където виждате календара, резервациите и финансовите отчети в реално време. Пълна прозрачност 24/7."
  },
  {
    q: "Кой отговаря за хигиената?",
    a: "Работим с доверени партньори за професионално почистване. Стандартите ни са сравними с 5-звездни хотели, включително дезинфекция и хотелско бельо."
  },
  {
    q: "Как се процедира при щети?",
    a: "Ние извършваме щателен оглед след всеки гост. В случай на щети, използваме застрахователните програми на платформите (Airbnb AirCover) и депозитите за сигурност."
  },
  {
    q: "Има ли дългосрочен ангажимент?",
    a: "Договорът ни е безсрочен с възможност за прекратяване с едномесечно предизвестие. Вярваме, че качеството на услугата ни е това, което задържа клиентите."
  },
  {
    q: "Взимате ли апартаменти за дългосрочен наем?",
    a: "Фокусът ни е върху краткосрочните наеми за максимизиране на дохода. В определени случаи предлагаме хибриден модел със средносрочни наеми (1-3 месеца)."
  },
  {
    q: "Кои райони обслужвате?",
    a: "Основно оперираме в центъра на София и престижните южни квартали (Лозенец, Изток, Иван Вазов, Манастирски ливади)."
  },
  {
    q: "Колко време отнема стартирането?",
    a: "От първия оглед до публикуването на обявата обикновено минават 7 до 10 дни, необходими за стилизиране, фотосесия и създаване на профили."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-24 bg-neutral min-h-screen">
      <div className="bg-primary py-20 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Често задавани въпроси</h1>
        <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
           Отговори на най-важните въпроси относно управлението на имоти.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <button
                className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-serif text-lg font-medium text-primary pr-8">{item.q}</span>
                {openIndex === index ? <ChevronUp className="text-accent" /> : <ChevronDown className="text-gray-400" />}
              </button>
              <div
                className={`px-8 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100 pb-8' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};