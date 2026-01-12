import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data1 = [
  { name: 'Ян', val: 65 }, { name: 'Фев', val: 70 }, { name: 'Март', val: 75 },
  { name: 'Апр', val: 82 }, { name: 'Май', val: 88 }, { name: 'Юни', val: 95 },
];

const data2 = [
  { name: 'Наем', val: 383 },
  { name: 'PrimeHost', val: 588 },
];

export const CaseStudies: React.FC = () => {
  return (
    <div className="pt-24 bg-neutral min-h-screen">
       <div className="bg-primary py-20 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Истории на успеха</h1>
        <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
             Реални примери за това как увеличаваме доходите на нашите клиенти.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        
        {/* Case 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
           <div className="grid grid-cols-1 lg:grid-cols-2">
               <div className="p-8 md:p-12">
                  <div className="inline-block bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-bold mb-4">София, Център</div>
                  <h2 className="text-3xl font-serif text-primary mb-4">Апартамент до НДК</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Преди нашето управление, имотът имаше заетост под 50% и нисък рейтинг. След професионален ре-стайлинг и оптимизация на профила, постигнахме 40% ръст в приходите още първия месец.
                  </p>
                  <div className="grid grid-cols-2 gap-8 mb-8">
                     <div>
                        <span className="block text-4xl font-bold text-accent mb-1">+40%</span>
                        <span className="text-sm text-gray-500">Приходи</span>
                     </div>
                     <div>
                        <span className="block text-4xl font-bold text-accent mb-1">4.98</span>
                        <span className="text-sm text-gray-500">Рейтинг</span>
                     </div>
                  </div>
               </div>
               <div className="bg-gray-50 p-8 flex flex-col justify-center">
                   <h4 className="text-center text-gray-500 mb-6 text-sm uppercase font-semibold">Заетост (%)</h4>
                   <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data1}>
                        <XAxis dataKey="name" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                        <Tooltip 
                            contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} 
                            formatter={(value) => [`${value}%`, 'Заетост']}
                        />
                        <Bar dataKey="val" radius={[4, 4, 0, 0]}>
                            {data1.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 5 ? '#C5A059' : '#0F172A'} />
                            ))}
                        </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                   </div>
               </div>
           </div>
        </div>

        {/* Case 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
           <div className="grid grid-cols-1 lg:grid-cols-2">
               <div className="lg:order-2 p-8 md:p-12">
                  <div className="inline-block bg-blue-50 text-primary px-3 py-1 rounded-full text-xs font-bold mb-4">София, Младост 4</div>
                  <h2 className="text-3xl font-serif text-primary mb-4">Апартамент до Бизнес Парк</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Имот извън центъра, който превърнахме в предпочитано място за корпоративни клиенти. Благодарение на близостта до офис сгради и удобния транспорт, постигнахме висока заетост през делничните дни, надвишаваща значително дохода от стандартен наем.
                  </p>
                  <div className="grid grid-cols-2 gap-8 mb-8">
                     <div>
                        <span className="block text-4xl font-bold text-accent mb-1">+53%</span>
                        <span className="text-sm text-gray-500">Доходност</span>
                     </div>
                     <div>
                        <span className="block text-4xl font-bold text-accent mb-1">43 €</span>
                        <span className="text-sm text-gray-500">Ср. Цена</span>
                     </div>
                  </div>
               </div>
               <div className="lg:order-1 bg-gray-50 p-8 flex flex-col justify-center">
                   <h4 className="text-center text-gray-500 mb-6 text-sm uppercase font-semibold">Сравнение (€)</h4>
                   <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data2} layout="vertical">
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12, fontWeight: 500}} axisLine={false} tickLine={false} />
                        <Tooltip 
                            cursor={{fill: 'transparent'}} 
                            contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} 
                            formatter={(value) => [`${value} €`, 'Приход']}
                        />
                        <Bar dataKey="val" barSize={40} radius={[0, 4, 4, 0]}>
                            <Cell fill="#94a3b8" />
                            <Cell fill="#C5A059" />
                        </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                   </div>
               </div>
           </div>
        </div>

      </div>
    </div>
  );
};