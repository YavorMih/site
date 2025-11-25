import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, ClipboardCheck, Users } from 'lucide-react';

export const Owners: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">За Собственици</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
          Превърнете имота си в печеливш актив с минимални усилия от ваша страна.
        </p>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-3xl font-serif text-primary mb-6">Защо краткосрочен наем?</h2>
               <p className="text-gray-600 mb-6 leading-relaxed">
                  Краткосрочното отдаване чрез платформи като Airbnb и Booking.com позволява значително по-висока доходност спрямо традиционния дългосрочен наем – често между 40% и 60% повече.
               </p>
               <p className="text-gray-600 mb-8 leading-relaxed">
                  Освен по-високите приходи, вие запазвате гъвкавостта да ползвате имота си, когато пожелаете, а той се поддържа в перфектно състояние благодарение на професионалното почистване след всеки гост.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="flex items-start gap-4">
                       <div className="bg-blue-50 p-3 rounded-full text-primary"><BarChart2 size={24}/></div>
                       <div>
                           <h4 className="font-bold text-primary mb-1">По-висок доход</h4>
                           <p className="text-sm text-gray-500">До 60% повече от дългосрочен наем.</p>
                       </div>
                   </div>
                   <div className="flex items-start gap-4">
                       <div className="bg-blue-50 p-3 rounded-full text-primary"><ClipboardCheck size={24}/></div>
                       <div>
                           <h4 className="font-bold text-primary mb-1">Гъвкавост</h4>
                           <p className="text-sm text-gray-500">Ползвайте имота си когато искате.</p>
                       </div>
                   </div>
               </div>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2670&auto=format&fit=crop" alt="Living Room" className="rounded-2xl shadow-2xl" />
            </div>
         </div>
      </section>

      {/* ROI Simulation */}
      <section className="py-20 bg-neutral">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
             <h3 className="text-2xl font-serif text-center text-primary mb-12">Симулация на приходи</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
                <div className="space-y-4">
                   <p className="text-sm text-gray-500 uppercase tracking-wide">Дългосрочен наем</p>
                   <p className="text-4xl font-bold text-gray-400">800 лв.</p>
                   <p className="text-xs text-gray-400">Месечен доход</p>
                </div>
                <div className="space-y-4 relative">
                   <div className="absolute inset-0 bg-blue-50 -z-10 rounded-xl transform scale-110"></div>
                   <p className="text-sm text-accent font-bold uppercase tracking-wide">PrimeHost Управление</p>
                   <p className="text-5xl font-bold text-primary">1,450 лв.</p>
                   <p className="text-xs text-gray-500">Прогнозен чист месечен доход</p>
                   <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold mt-2">
                      +80% Увеличение
                   </div>
                </div>
             </div>
             <p className="text-center text-xs text-gray-400 mt-12">* Примерна калкулация за двустаен апартамент в центъра на София.</p>
          </div>
          <div className="text-center mt-12">
             <Link to="/contact" className="bg-primary text-white px-10 py-4 rounded-lg font-medium hover:bg-secondary transition-colors inline-block shadow-lg">
                Изпратете запитване за вашия имот
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};