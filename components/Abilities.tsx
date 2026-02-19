
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Skill } from '../types';

const data: Skill[] = [
  { name: '忍术', value: 100, fullMark: 100 },
  { name: '体术', value: 90, fullMark: 100 },
  { name: '幻术', value: 100, fullMark: 100 },
  { name: '贤 (智力)', value: 100, fullMark: 100 },
  { name: '力 (力量)', value: 70, fullMark: 100 },
  { name: '速 (速度)', value: 95, fullMark: 100 },
];

const AbilityCard: React.FC<{ title: string; desc: string; icon: string }> = ({ title, desc, icon }) => (
  <div className="p-6 bg-zinc-900/50 border border-red-900/30 rounded-lg hover:border-red-600 transition-colors group">
    <div className="text-3xl mb-4 text-red-600 group-hover:scale-110 transition-transform inline-block">
      {icon}
    </div>
    <h3 className="text-xl font-cinzel text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const Abilities: React.FC = () => {
  return (
    <section id="abilities" className="py-24 px-4 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-cinzel text-center mb-16">
          <span className="text-red-600">巅峰</span> 造诣
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] bg-zinc-900/20 rounded-full border border-red-900/10 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="name" tick={{ fill: '#999', fontSize: 12 }} />
                <Radar
                  name="Itachi"
                  dataKey="value"
                  stroke="#b91c1c"
                  fill="#b91c1c"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AbilityCard 
              icon="👁️" 
              title="月读" 
              desc="终极幻术。将受害者困在由施术者支配时间、空间和质量的幻术世界中。" 
            />
            <AbilityCard 
              icon="🔥" 
              title="天照" 
              desc="永不熄灭的黑色火焰，直至目标化为灰烬。最高等级的火遁奥义。" 
            />
            <AbilityCard 
              icon="⚔️" 
              title="须佐能乎" 
              desc="由查克拉形成的巨大人形实体。配备十拳剑与八咫镜。" 
            />
            <AbilityCard 
              icon="🐦" 
              title="伊邪那美" 
              desc="决定命运之术。将受害者困在无限循环中，直至其接受真实自我。" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abilities;
