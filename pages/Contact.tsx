import React from 'react';
import { MapPin, Phone, Mail, Smartphone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 bg-neutral min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Info Side */}
          <div className="bg-primary p-12 text-white flex flex-col justify-between">
             <div>
                <h1 className="text-4xl font-serif mb-8">Свържете се с нас</h1>
                <p className="text-gray-300 mb-12 leading-relaxed">
                   Готови ли сте да увеличите приходите от имота си? Попълнете формата или ни се обадете за безплатна консултация.
                </p>

                <div className="space-y-8">
                   <div className="flex items-start gap-4">
                      <Phone className="text-accent mt-1" size={24} />
                      <div>
                         <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Телефон</p>
                         <p className="text-xl font-medium">+359 898 795 311</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <Mail className="text-accent mt-1" size={24} />
                      <div>
                         <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Имейл</p>
                         <p className="text-xl font-medium">office@primehost.bg</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <Smartphone className="text-accent mt-1" size={24} />
                      <div>
                         <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">WhatsApp</p>
                         <a href="https://wa.me/359898795311" className="text-xl font-medium hover:text-accent transition-colors">Чат с нас</a>
                      </div>
                   </div>
                </div>
             </div>
             
             <div className="mt-12">
                <p className="text-sm text-gray-400">
                   Работно време: Пон - Пет: 09:00 - 18:00
                </p>
             </div>
          </div>

          {/* Form Side */}
          <div className="p-12 bg-white">
            <h3 className="text-2xl font-serif text-primary mb-8">Изпратете запитване</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Име</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Вашето име" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Телефон за връзка" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Имейл</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="name@example.com" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Локация</label>
                  <input type="text" id="location" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Квартал / Улица" />
                </div>
                <div>
                  <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-2">Квадратура</label>
                  <input type="text" id="size" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="кв.м." />
                </div>
              </div>
              <div>
                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Допълнителна информация</label>
                 <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Разкажете ни повече за имота..."></textarea>
              </div>
              <button type="button" className="w-full bg-accent text-white py-4 rounded-lg font-bold hover:bg-accent-light transition-colors shadow-lg">
                Изпрати запитване
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};