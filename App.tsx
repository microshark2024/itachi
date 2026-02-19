
import React from 'react';
import Hero from './components/Hero';
import Abilities from './components/Abilities';
import Timeline from './components/Timeline';
import Chat from './components/Chat';

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 py-4 px-8 flex justify-between items-center">
    <div className="text-2xl font-cinzel font-black text-red-600 tracking-tighter">UCHIHA</div>
    <div className="hidden md:flex gap-8 text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">
      <a href="#" className="hover:text-white transition-colors">主页</a>
      <a href="#abilities" className="hover:text-white transition-colors">能力</a>
      <a href="#timeline" className="hover:text-white transition-colors">生平</a>
      <a href="#philosophy" className="hover:text-white transition-colors">哲学</a>
    </div>
  </nav>
);

const Footer: React.FC = () => (
  <footer className="py-12 bg-black border-t border-white/5 text-center">
    <div className="mb-6 opacity-30 invert inline-block">
       {/* Small Leaf/Uchiha Crest placeholder */}
       <div className="w-12 h-12 border-4 border-red-600 rounded-full flex items-center justify-center">
         <div className="w-6 h-6 bg-red-600 rounded-t-full"></div>
       </div>
    </div>
    <p className="text-gray-600 text-xs tracking-widest uppercase px-4">
      世界并不如它看起来那样。真相只存在于阴影之中。
    </p>
    <div className="mt-4 text-[10px] text-gray-700">
      &copy; 2024 宇智波鼬个人网站
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="abilities">
        <Abilities />
      </div>
      <div id="timeline">
        <Timeline />
      </div>
      <Chat />
      <section id="philosophy" className="py-32 px-4 bg-zinc-950 text-center flex items-center justify-center">
        <div className="max-w-2xl">
          <h2 className="text-red-700 text-6xl opacity-10 font-cinzel mb-[-2rem] select-none">真相</h2>
          <p className="text-2xl md:text-3xl font-light text-gray-300 italic leading-relaxed relative z-10">
            “无论你变得多么强大，永远不要试图独自承担一切。 
            如果你这样做，你注定会失败。”
          </p>
          <div className="mt-8 h-px w-24 bg-red-900 mx-auto"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
