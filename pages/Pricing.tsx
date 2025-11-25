import React from 'react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Basic",
      percentage: "15%",
      desc: "Дигитално управление и комуникация.",
      features: [
        { name: "Създаване на профил", included: true },
        { name: "24/7 Комуникация", included: true },
        { name: "Динамични цени", included: true },
        { name: "Скрининг на гости", included: true },
        { name: "Почистване", included: false },
        { name: "Линени услуги", included: false },
        { name: "Техническа поддръжка", included: false },
        { name: "Посрещане на гости", included: false },
      ]
    },
    {
      name: "Standard",
      percentage: "20%",
      popular: true,
      desc: "Балансирано решение с включена логистика.",
      features: [
        { name: "Създаване на профил", included: true },
        { name: "24/7 Комуникация", included: true },
        { name: "Динамични цени", included: true },
        { name: "Скрининг на гости", included: true },
        { name: "Почистване", included: true },
        { name: "Линени услуги", included: true },
        { name: "Техническа поддръжка", included: false },
        { name: "Посрещане на гости", included: true },
      ]
    },
    {
      name: "Premium",
      percentage: "30%",
      desc: "Пълен мениджмънт и спокойствие.",
      features: [
        { name: "Създаване на профил", included: true },
        { name: "24/7 Комуникация", included: true },
        { name: "Динамични цени", included: true },
        { name: "Скрининг на гости", included: true },
        { name: "Почистване", included: true },
        { name: "Линени услуги", included: true },
        { name: "Техническа поддръжка", included: true },
        { name: "Посрещане на гости", included: true },
      ]
    }
  ];

  return (
    <div className="pt-24 bg-neutral min-h-screen">
      <div className="bg-primary py-20 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Цени и Пакети</h1>
        <p className="text-xl font-light text-gray-300 max-w-2xl mx-auto">
          Прозрачни условия без скрити такси. Заплащате само при реализиран приход.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border transition-transform duration-300 hover:-translate-y-2 ${plan.popular ? 'border-accent ring-4 ring-accent/10' : 'border-gray-200'}`}
            >
              {plan.popular && (
                <div className="bg-accent text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
                  Най-популярен
                </div>
              )}
              
              <div className="p-8 text-center border-b border-gray-100">
                <h3 className="text-xl font-serif text-primary font-bold mb-4">{plan.name}</h3>
                <div className="flex justify-center items-baseline gap-1 text-primary">
                    <span className="text-5xl font-bold">{plan.percentage}</span>
                </div>
                <p className="mt-4 text-sm text-gray-500">{plan.desc}</p>
              </div>

              <div className="p-8 bg-gray-50/50">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm">
                      {feature.included ? (
                        <Check className="text-accent shrink-0" size={18} />
                      ) : (
                        <X className="text-gray-300 shrink-0" size={18} />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className={`block w-full py-3 rounded-lg text-center font-bold transition-colors ${
                    plan.popular 
                      ? 'bg-accent text-white hover:bg-accent-light' 
                      : 'bg-primary text-white hover:bg-secondary'
                  }`}
                >
                  Избери план
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-gray-500 text-sm">
           <p>Цените са без включен ДДС. За комплекси от имоти изготвяме индивидуална оферта.</p>
        </div>
      </div>
    </div>
  );
};