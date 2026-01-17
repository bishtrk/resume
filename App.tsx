
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Sparkles,
  Download,
  Moon,
  Sun,
  MapPin,
  Calendar
} from 'lucide-react';
import { INITIAL_DATA } from './constants';
import { ResumeData } from './types';

// Defining BentoBoxProps interface for better type safety
interface BentoBoxProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  noPadding?: boolean;
}

const BentoBox: React.FC<BentoBoxProps> = ({ children, className = "", delay = 0, noPadding = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`glass rounded-[2rem] overflow-hidden hover:border-blue-500/30 transition-all duration-300 ${noPadding ? '' : 'p-6 lg:p-8'} ${className}`}
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  const [data] = useState<ResumeData>(INITIAL_DATA);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#020617] text-slate-100' : 'bg-slate-50 text-slate-900'} transition-colors duration-300`}>
      
      {/* Header / Nav */}
      <nav className="no-print fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center backdrop-blur-md">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20 group-hover:rotate-6 transition-transform text-sm tracking-tighter">
            {data.name.split(' ').map(n => n[0]).join('')}
          </div>
          <span className="font-bold text-lg tracking-tight">{data.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2.5 rounded-full glass hover:bg-slate-800/50 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => window.print()}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-sm transition-all shadow-lg shadow-blue-500/20"
          >
            <Download size={16} /> Resume PDF
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto pt-32 pb-24 px-6 space-y-6">
        {/* Top Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Profile Photo */}
          <BentoBox className="lg:col-span-3 h-[300px] lg:h-auto group" noPadding delay={0}>
            {data.profileImage ? (
              <img 
                src={data.profileImage} 
                alt={data.name} 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
            ) : (
              <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500">
                <Sparkles size={48} />
              </div>
            )}
          </BentoBox>

          {/* Main Intro */}
          <BentoBox className="lg:col-span-6 flex flex-col justify-center min-h-[300px]" delay={0.1}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-6 w-fit border border-blue-500/20"
            >
              <Sparkles size={12} /> OPEN TO NEW OPPORTUNITIES
            </motion.div>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Architecting digital <br />
              <span className="text-blue-500">experiences</span> that scale.
            </h1>
            <p className="text-base text-slate-400 max-w-2xl leading-relaxed">
              {data.summary}
            </p>
          </BentoBox>

          {/* Socials & Links */}
          <BentoBox className="lg:col-span-3 flex flex-col gap-4 justify-between" delay={0.2}>
            <div className="flex flex-col gap-4">
               <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Connect</h3>
               <div className="grid grid-cols-1 gap-3">
                 <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors">
                   <Github size={18} /> <span className="text-sm font-semibold">GitHub</span>
                 </a>
                 <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors">
                   <Linkedin size={18} /> <span className="text-sm font-semibold">LinkedIn</span>
                 </a>
               </div>
               <a href={`mailto:${data.email}`} className="flex items-center justify-between p-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold">
                 <span>Hire Me</span> <Mail size={18} />
               </a>
            </div>
            <div className="pt-4 border-t border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin size={12} /> San Francisco, CA
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Calendar size={12} /> 8+ Years Experience
              </div>
            </div>
          </BentoBox>
        </div>

        {/* Experience & Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Skills (The dynamic tag cloud) */}
          <BentoBox className="lg:col-span-4" delay={0.3}>
            <div className="flex items-center gap-2 mb-8 text-blue-500">
              <Code2 size={24} />
              <h2 className="text-xl font-bold">Tech Stack</h2>
            </div>
            <div className="space-y-8">
              {data.skills.map(group => (
                <div key={group.category}>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">{group.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(skill => (
                      <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium hover:border-blue-500/50 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </BentoBox>

          {/* Work History */}
          <BentoBox className="lg:col-span-8" delay={0.4}>
            <div className="flex items-center gap-2 mb-8 text-blue-500">
              <Briefcase size={24} />
              <h2 className="text-xl font-bold">Work Experience</h2>
            </div>
            <div className="space-y-12">
              {data.experiences.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l border-slate-800 last:border-0">
                  <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-2 gap-2">
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold text-slate-400 mono border border-white/5">{exp.period}</span>
                  </div>
                  <p className="text-blue-500 font-bold text-sm mb-4">{exp.company}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </BentoBox>
        </div>

        {/* Projects Horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2 lg:col-span-3 py-4">
             <h2 className="text-2xl font-bold flex items-center gap-2">
               <Sparkles className="text-blue-500" /> Featured Projects
             </h2>
          </div>
          {data.projects.map((proj, idx) => (
            <BentoBox key={proj.id} className="group hover:-translate-y-2" delay={0.5 + idx * 0.1}>
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <Code2 size={24} />
                </div>
                {proj.link && (
                  <a href={`https://${proj.link}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors text-slate-500 hover:text-white">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <h3 className="text-lg font-bold mb-2">{proj.name}</h3>
              <p className="text-sm text-slate-400 mb-6 line-clamp-3">{proj.description}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold text-blue-400/80 mono uppercase tracking-wider">{t}</span>
                ))}
              </div>
            </BentoBox>
          ))}
        </div>

        {/* Education Section */}
        <BentoBox className="w-full flex flex-col md:flex-row justify-between items-center gap-6" delay={0.7}>
           <div className="flex items-center gap-4">
             <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500">
               <GraduationCap size={32} />
             </div>
             <div>
               <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">Education</p>
               <h3 className="text-xl font-bold">{data.education[0].school}</h3>
               <p className="text-sm text-slate-400">{data.education[0].degree}</p>
             </div>
           </div>
           <div className="text-right">
             <span className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm font-bold mono">
               {data.education[0].year}
             </span>
           </div>
        </BentoBox>
      </main>

      {/* Modern Footer */}
      <footer className="no-print py-12 border-t border-white/5 text-center space-y-4">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">Designed & Engineered with Passion</p>
        <div className="flex justify-center gap-6">
           <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
           <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
           <a href={`mailto:${data.email}`} className="text-slate-500 hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
      </footer>
    </div>
  );
};

export default App;
