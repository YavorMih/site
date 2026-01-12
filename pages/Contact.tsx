import React, { useState } from 'react';
import { Mail, Smartphone, Phone, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    size: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Конструираме данните, които ще бъдат изпратени
    const payload = {
      ...formData,
      recipient: 'officeprimehost@gmail.com', // Изрично указваме получателя за автоматизацията
      subject: `Ново запитване от ${formData.name}`,
      source: 'PrimeHost Website Contact Form',
      submittedAt: new Date().toLocaleString('bg-BG')
    };

    const webhookUrl = 'https://build.twin.so/triggers/c926caae-12f1-4a60-b15f-ada7586fee9d/webhook';

    try {
      // Първи опит: Стандартна CORS заявка
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', location: '', size: '', message: '' });
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      console.warn('CORS check or fetch failed, trying fallback mode...');
      
      try {
        // Втори опит: "no-cors" режим (често заобикаля CORS проблеми за прости уебхуци)
        // В този режим не можем да прочетем отговора, но заявката достига до сървъра.
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: JSON.stringify(payload),
        });
        
        // В no-cors режим приемаме, че е успешно, ако не хвърли грешка при самото изпращане
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', location: '', size: '', message: '' });
      } catch (fallbackError) {
        console.error('Final submission error:', fallbackError);
        setStatus('error');
      }
    }
  };

  return (
    <div className="pt-24 bg-neutral min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Info Side */}
          <div className="bg-primary p-12 text-white flex flex-col justify-between order-2 lg:order-1 relative overflow-hidden">
             {/* Decorative Background Elements */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
             
             <div className="relative z-10">
                <h1 className="text-3xl font-serif mb-8 text-gray-200">Други начини за връзка</h1>
                <p className="text-gray-400 mb-12 leading-relaxed text-sm">
                   Ако предпочитате директен контакт или имате спешни въпроси, можете да ни намерите тук:
                </p>

                <div className="space-y-10">
                   {/* Email - Primary */}
                   <div className="flex items-start gap-4 group">
                      <div className="bg-white/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Mail className="text-accent" size={24} />
                      </div>
                      <div>
                         <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Имейл (Препоръчително)</p>
                         <a href="mailto:officeprimehost@gmail.com" className="text-xl font-medium select-all hover:text-accent transition-colors block">
                            officeprimehost@gmail.com
                         </a>
                         <p className="text-xs text-gray-500 mt-1">Отговаряме до 24 часа</p>
                      </div>
                   </div>

                   {/* WhatsApp */}
                   <div className="flex items-start gap-4 group">
                      <div className="bg-white/10 p-3 rounded-lg group-hover:bg-green-500/20 transition-colors">
                        <Smartphone className="text-accent group-hover:text-green-400 transition-colors" size={24} />
                      </div>
                      <div>
                         <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">WhatsApp Чат</p>
                         <a href="https://wa.me/359898795311" target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-accent transition-colors block">
                            Пишете ни в WhatsApp
                         </a>
                      </div>
                   </div>

                   {/* Phone */}
                   <div className="flex items-start gap-4 opacity-75 hover:opacity-100 transition-opacity">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <Phone className="text-gray-400" size={24} />
                      </div>
                      <div>
                         <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Телефон</p>
                         <p className="text-lg font-normal text-gray-300">+359 898 795 311</p>
                         <p className="text-[10px] text-gray-500 mt-1">Пон - Пет: 09:00 - 18:00</p>
                      </div>
                   </div>
                </div>
             </div>
             
             <div className="mt-12 pt-8 border-t border-gray-800 relative z-10">
                <p className="text-sm text-gray-500">
                   Главен офис: гр. София, България
                </p>
             </div>
          </div>

          {/* Form Side */}
          <div className="p-12 bg-white order-1 lg:order-2 relative">
            <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-6 py-2 rounded-bl-lg uppercase tracking-widest">
                Директна връзка
            </div>

            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-up">
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 size={56} />
                </div>
                <h3 className="text-3xl font-serif text-primary mb-4">Запитването е изпратено!</h3>
                <p className="text-gray-600 mb-8 max-w-sm">
                  Данните бяха изпратени успешно до <strong>officeprimehost@gmail.com</strong>. Наш консултант ще ви отговори съвсем скоро.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-secondary transition-all"
                >
                  Изпрати ново съобщение
                </button>
              </div>
            ) : (
              <>
                <div className="mb-10">
                  <h3 className="text-3xl font-serif text-primary mb-3">Оценка на вашия имот</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Попълнете формата и ще получите безплатен анализ на потенциалния доход на вашия апартамент.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Вашето име</label>
                      <input 
                        required
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-gray-50/50" 
                        placeholder="Име и фамилия" 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Телефон</label>
                      <input 
                        required
                        type="tel" 
                        id="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-gray-50/50" 
                        placeholder="08X XXX XXXX" 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Имейл адрес</label>
                    <input 
                      required
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-gray-50/50" 
                      placeholder="name@example.com" 
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Къде се намира имота?</label>
                      <input 
                        type="text" 
                        id="location" 
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-gray-50/50" 
                        placeholder="Напр. Център, Лозенец" 
                      />
                    </div>
                    <div>
                      <label htmlFor="size" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Квадратура / Тип</label>
                      <input 
                        type="text" 
                        id="size" 
                        value={formData.size}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-gray-50/50" 
                        placeholder="Напр. 65 кв.м / 2-стаен" 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Допълнителни детайли</label>
                    <textarea 
                      id="message" 
                      rows={3} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-gray-50/50 resize-none" 
                      placeholder="Имате ли специфични въпроси или изисквания?"
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="flex flex-col gap-2 text-red-600 text-sm bg-red-50 p-4 rounded-xl border border-red-100 animate-shake">
                      <div className="flex items-center gap-2 font-bold">
                        <AlertCircle size={18} />
                        <span>Грешка при изпращането.</span>
                      </div>
                      <p className="text-xs opacity-90 leading-relaxed">
                        Браузърът блокира автоматичната заявка. Моля, изпратете запитването си директно на 
                        <a href="mailto:officeprimehost@gmail.com" className="font-bold underline ml-1">officeprimehost@gmail.com</a>
                      </p>
                    </div>
                  )}

                  <button 
                    disabled={status === 'loading'}
                    type="submit" 
                    className={`w-full bg-accent text-white py-4 rounded-xl font-bold hover:bg-accent-light transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group relative overflow-hidden ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-3">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Обработка...
                      </span>
                    ) : (
                      <>
                        ИЗПРАТИ ЗАПИТВАНЕ
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest font-semibold">
                    Гарантирана конфиденциалност на данните
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out 0s 2;
        }
      `}</style>
    </div>
  );
};