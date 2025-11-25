import React from 'react';
import { Camera, Layout, DollarSign, MessageSquare, Sparkles, Key, FileText, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  const services = [
    {
      title: "Професионални снимки",
      description: "Заснемане от професионален интериорен фотограф за максимално въздействие.",
      icon: <Camera size={32} />
    },
    {
      title: "Профили и Оптимизация",
      description: "Създаване и управление на атрактивни профили в Airbnb и Booking.com.",
      icon: <Layout size={32} />
    },
    {
      title: "Динамично ценообразуване",
      description: "Ежедневна оптимизация на цените спрямо търсенето, сезона и конкуренцията.",
      icon: <DollarSign size={32} />
    },
    {
      title: "Комуникация 24/7",
      description: "Бързи отговори на всички запитвания от гости по всяко време на денонощието.",
      icon: <MessageSquare size={32} />
    },
    {
      title: "Почистване и поддръжка",
      description: "Професионално почистване с хотелски стандарти след всеки престой.",
      icon: <Sparkles size={32} />
    },
    {
      title: "Check-in / Self check-in",
      description: "Организация на настаняването чрез смарт системи или лично посрещане.",
      icon: <Key size={32} />
    },
    {
      title: "Линени услуги",
      description: "Осигуряване на висококачествено спално бельо и хавлии.",
      icon: <UserCheck size={32} />
    },
    {
      title: "Пълна отчетност",
      description: "Месечни финансови отчети и прозрачност на приходите за собственика.",
      icon: <FileText size={32} />
    }
  ];

  return (
    <div className="pt-24 bg-neutral min-h-screen">
      
      {/* Header */}
      <div className="bg-primary py-20 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Нашите Услуги</h1>
        <p className="text-xl font-light text-gray-300 max-w-2xl mx-auto">
           Цялостни решения за безпроблемно управление.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-accent mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Platforms */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-serif text-primary mb-12">Платформи, с които работим</h3>
            <div className="flex justify-center items-center gap-16 flex-wrap grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb" className="h-12" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg" alt="Booking.com" className="h-12" />
            </div>
        </div>
      </div>
    </div>
  );
};