import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  AreaChart, Area
} from 'recharts';
import { Shield, Zap, Globe, Cpu, TrendingUp, Users, Clock, Target, Layers, Rocket, BookOpen, BrainCircuit } from 'lucide-react';

const skillsData = [
  { subject: 'Web Dev', A: 95, fullMark: 100 },
  { subject: 'AI Automation', A: 90, fullMark: 100 },
  { subject: 'Digital Marketing', A: 85, fullMark: 100 },
  { subject: 'SEO', A: 88, fullMark: 100 },
  { subject: 'Chatbots', A: 92, fullMark: 100 },
  { subject: 'E-commerce', A: 85, fullMark: 100 },
];

const growthData = [
  { name: '2021', projects: 10, clients: 5 },
  { name: '2022', projects: 25, clients: 15 },
  { name: '2023', projects: 50, clients: 35 },
  { name: '2024', projects: 90, clients: 60 },
  { name: '2025', projects: 150, clients: 100 },
  { name: '2026', projects: 220, clients: 150 },
];

const roadmapData = [
  { month: 'Jan', value: 20 },
  { month: 'Feb', value: 35 },
  { month: 'Mar', value: 45 },
  { month: 'Apr', value: 60 },
  { month: 'May', value: 80 },
  { month: 'Jun', value: 100 },
];

export default function AboutView() {
  return (
    <div className="h-full overflow-y-auto bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 lg:p-10 shadow-sm">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4 pt-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            N E X A 1337
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Empowering Businesses with AI & Automation. We offer cutting-edge web development, AI automation, and digital marketing services to scale your business.
          </p>
        </div>

        {/* About N E X A 1337 */}
        <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-3xl p-8 md:p-10 border border-zinc-200 dark:border-zinc-700/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-zinc-900 dark:text-white flex items-center gap-3">
              <Rocket className="w-8 h-8 text-blue-500" />
              Who We Are
            </h2>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-300 text-base md:text-lg leading-relaxed">
              <p>
                <strong>N E X A 1337</strong> is a forward-thinking digital agency and technology hub specializing in AI automation, cutting-edge web development, and data-driven digital marketing. We bridge the gap between complex technology and tangible business growth.
              </p>
              <p>
                Our mission is to democratize access to high-tier technological resources and services. Whether you are an enterprise building a robust e-commerce platform, a startup integrating intelligent chatbots, or an individual mapping out a career in cybersecurity, N E X A 1337 provides the tools, expertise, and guidance to accelerate your journey.
              </p>
            </div>
          </div>
        </div>

        {/* Value Proposition: Why use this tool? */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4">Why Spend Your Time Here?</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              This tool isn't just a directory—it's your centralized command center for mastering modern technology. Here is how it brings you immediate value:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Value 1 */}
            <div className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Clock className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-white">Save Hundreds of Hours</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Stop endlessly searching for tutorials and resources. We've curated the absolute best roadmaps, databases, and books into one streamlined platform.</p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Target className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-white">Structured Learning Paths</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Interactive, visual roadmaps guide you step-by-step from beginner to advanced in fields like Cybersecurity, AI, Web Dev, and DevOps.</p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Layers className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-white">Comprehensive Database</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">Access a hand-picked, categorized collection of AI tools, learning platforms, digital assets, and software to supercharge your workflow.</p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <BrainCircuit className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-white">Future-Proof Your Skills</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">With dedicated sections for AI/ML, Blockchain, and modern frameworks, you're always learning the technologies that matter tomorrow.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Features */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
              <Globe className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">Web Development</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Building scalable, high-performance web applications and e-commerce platforms tailored to your needs.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
              <Cpu className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">AI Automation</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Streamlining operations with intelligent chatbots, workflow automation, and advanced AI integrations.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
              <TrendingUp className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">Digital Marketing</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Data-driven SEO, social media management, and targeted campaigns to maximize your reach.</p>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Radar Chart - Core Competencies */}
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-6 self-start text-zinc-900 dark:text-white">Core Competencies</h3>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                  <PolarGrid stroke="#52525b" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#71717a', fontSize: 12 }} />
                  <Radar name="NEXA1337" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
                  <Tooltip contentStyle={{ backgroundColor: '#18181b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bar Chart - Growth */}
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 flex flex-col">
            <h3 className="text-lg font-semibold mb-6 text-zinc-900 dark:text-white">Business Growth & Scale</h3>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={growthData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" vertical={false} />
                  <XAxis dataKey="name" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', border: 'none', borderRadius: '8px', color: '#fff' }}
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  />
                  <Bar dataKey="projects" name="Projects Delivered" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="clients" name="Active Clients" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* Roadmap Area Chart */}
        <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
          <h3 className="text-lg font-semibold mb-6 text-zinc-900 dark:text-white">Strategic Roadmap Progress</h3>
          <div className="w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={roadmapData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" vertical={false} />
                <Tooltip contentStyle={{ backgroundColor: '#18181b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                <Area type="monotone" dataKey="value" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
