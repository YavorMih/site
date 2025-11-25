import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Home as HomeIcon } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop")' }}
        >
           <div className="absolute inset-0 bg-primary/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              Управляваме имоти.<br />
              <span className="text-accent">Вие получавате максимални приходи.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-2xl">
              Професионално управление на вашия имот в Airbnb и Booking. Без ангажименти. Без стрес.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-accent text-white px-8 py-4 rounded text-center font-medium hover:bg-accent-light transition-colors shadow-lg">
                Получете безплатна оценка
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded text-center font-medium hover:bg-white/20 transition-colors">
                Свържете се
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Процесът</span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mt-2">Как работи?</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="p-6">
                 <div className="w-16 h-16 bg-blue-50 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} />
                 </div>
                 <h3 className="text-xl font-serif font-bold mb-4">1. Подготовка</h3>
                 <p className="text-gray-500 leading-relaxed">
                    Правим професионален одит, интериорни подобрения и професионална фотосесия на имота.
                 </p>
              </div>
              <div className="p-6">
                 <div className="w-16 h-16 bg-blue-50 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp size={32} />
                 </div>
                 <h3 className="text-xl font-serif font-bold mb-4">2. Оптимизация</h3>
                 <p className="text-gray-500 leading-relaxed">
                    Създаваме профили в Airbnb и Booking с динамично ценообразуване за максимална заетост.
                 </p>
              </div>
              <div className="p-6">
                 <div className="w-16 h-16 bg-blue-50 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <HomeIcon size={32} />
                 </div>
                 <h3 className="text-xl font-serif font-bold mb-4">3. Управление</h3>
                 <p className="text-gray-500 leading-relaxed">
                    Поемаме цялата комуникация, настаняване, почистване и поддръжка. Вие само получавате приходите.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
           <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2670&auto=format&fit=crop" 
                alt="Interior" 
                className="rounded-lg shadow-xl"
              />
           </div>
           <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Пълно обслужване от А до Я</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                 Ние се грижим за всеки детайл – от първоначалната консултация до безупречното почистване след всеки гост. Вашето спокойствие е наш приоритет.
              </p>
              <ul className="space-y-4 mb-8">
                 <li className="flex items-center gap-3 text-primary"><div className="w-2 h-2 bg-accent rounded-full"></div> 24/7 Комуникация с гости</li>
                 <li className="flex items-center gap-3 text-primary"><div className="w-2 h-2 bg-accent rounded-full"></div> Професионално почистване</li>
                 <li className="flex items-center gap-3 text-primary"><div className="w-2 h-2 bg-accent rounded-full"></div> Динамични цени</li>
              </ul>
              <Link to="/services" className="text-accent font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                 Вижте всички услуги <ArrowRight size={20} />
              </Link>
           </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-primary text-white">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-16">Реални Резултати</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">92%</div>
                  <div className="text-sm uppercase tracking-widest text-gray-400">Средна заетост</div>
               </div>
               <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100 лв</div>
                  <div className="text-sm uppercase tracking-widest text-gray-400">Ср. цена нощувка</div>
               </div>
               <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">35%</div>
                  <div className="text-sm uppercase tracking-widest text-gray-400">Ръст на приходите</div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};