import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Server } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Timeline from '../components/Timeline';
import SkillBadge from '../components/SkillBadge';

const skills = [
  { name: 'Frontend Development', icon: Code2, description: 'Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS.' },
  { name: 'Backend Development', icon: Server, description: 'Building scalable APIs and server-side applications with Node.js and Python.' },
  { name: 'UI/UX Design', icon: Palette, description: 'Designing intuitive and beautiful user experiences with attention to detail.' },
  { name: 'DevOps', icon: Rocket, description: 'Managing deployment, CI/CD pipelines, and cloud infrastructure.' }
];

const technicalSkills = [
  { name: 'React/Next.js', level: 95, color: 'bg-blue-500' },
  { name: 'TypeScript', level: 90, color: 'bg-blue-500' },
  { name: 'Node.js', level: 85, color: 'bg-green-500' },
  { name: 'Python', level: 80, color: 'bg-yellow-500' },
  { name: 'AWS', level: 75, color: 'bg-orange-500' },
  { name: 'Docker', level: 70, color: 'bg-blue-500' }
];

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm a passionate Full Stack Developer with a keen eye for design and a love for creating
              seamless digital experiences. With years of experience in web development,
              I bring ideas to life through code.
            </p>
          </motion.div>

          <div 
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <skill.icon className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                    <p className="text-gray-400">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <SkillBadge {...skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <Timeline />
        </div>
      </section>
    </div>
  );
}