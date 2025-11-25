import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center bg-primary">
         <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop')] bg-cover bg-center"></div>
         <div className="relative z-10 text-center max-w-4xl px-6">
            <h1 className="text-5xl font-serif text-white mb-6">За PrimeHost</h1>
            <p className="text-xl text-gray-300 font-light">
               Нова енергия в управлението на имоти.
            </p>
         </div>
      </div>

      {/* Story */}
      <div className="max-w-7xl mx-auto px-6 py-24">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-3xl font-serif text-primary mb-8 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-accent after:mt-4">
                  Млади, амбициозни, отдадени
               </h2>
               <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  PrimeHost е нова компания, създадена от екип млади и силно мотивирани хора. Вярваме, че пазарът на краткосрочни наеми в България има нужда от свеж подход, модерно мислене и безкомпромисна енергия.
               </p>
               <p className="text-gray-600 text-lg leading-relaxed">
                  Ние не разчитаме на остарели методи. Нашата амбиция ни води да търсим най-новите технологии, най-добрите практики и да предоставяме услуга, която надхвърля очакванията. За нас всеки имот е лична отговорност и възможност да докажем своя професионализъм.
               </p>
            </div>
            <div>
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" alt="Team Meeting" className="rounded-lg shadow-2xl" />
            </div>
         </div>
      </div>

      {/* Values */}
      <div className="bg-neutral py-24">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-serif text-primary">Нашите Ценности</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
               <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="text-accent mb-4 font-bold text-xl">01</div>
                  <h3 className="text-xl font-serif text-primary mb-4">Прозрачност</h3>
                  <p className="text-gray-600">
                     Вярваме в откритите и честни отношения. Винаги знаете какво се случва с вашия имот и вашите финанси.
                  </p>
               </div>
               <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="text-accent mb-4 font-bold text-xl">02</div>
                  <h3 className="text-xl font-serif text-primary mb-4">Качество</h3>
                  <p className="text-gray-600">
                     Не правим компромиси с чистотата, комуникацията или презентацията на имотите.
                  </p>
               </div>
               <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="text-accent mb-4 font-bold text-xl">03</div>
                  <h3 className="text-xl font-serif text-primary mb-4">Иновация</h3>
                  <p className="text-gray-600">
                     Използваме модерни инструменти и данни, за да оптимизираме приходите ви всеки ден.
                  </p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};