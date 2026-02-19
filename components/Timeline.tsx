
import React from 'react';
import { TimelineEvent } from '../types';

const events: TimelineEvent[] = [
  { year: '4 岁', title: '战争洗礼', description: '亲眼目睹了第三次忍界大战，塑造了他的和平主义哲学。' },
  { year: '7 岁', title: '忍者学校毕业', description: '仅用一年时间就从忍者学校毕业，是历史上最年轻的毕业生。' },
  { year: '11 岁', title: '进入暗部', description: '成为木叶暗部历史上最年轻的成员。' },
  { year: '13 岁', title: '沉重的抉择', description: '执行了宇智波一族灭族任务，以阻止政变并保护村子。' },
  { year: '21 岁', title: '最后一战', description: '在与弟弟佐助的战斗中死去，传承了他的意志与真相。' },
];

const Timeline: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-cinzel text-center mb-16 text-white">昔日 <span className="text-red-600">足迹</span></h2>
        
        <div className="relative border-l-2 border-red-900 ml-4 md:ml-0 md:left-1/2">
          {events.map((event, idx) => (
            <div key={idx} className={`mb-12 relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="absolute -left-2.5 md:left-1/2 md:-translate-x-2.5 w-5 h-5 bg-red-600 rounded-full border-4 border-black shadow-[0_0_10px_rgba(220,38,38,0.8)]"></div>
              
              <div className={`w-full md:w-1/2 px-8 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <span className="text-red-500 font-bold font-cinzel tracking-widest">{event.year}</span>
                <h3 className="text-2xl text-white font-cinzel my-2">{event.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
