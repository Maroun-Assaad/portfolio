import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const timelineData = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    date: "2022 - Present",
    description: "Led development of enterprise applications using React, Node.js, and AWS.",
    icon: Briefcase,
    category: "work"
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    date: "2020 - 2022",
    description: "Developed and maintained multiple client projects using modern web technologies.",
    icon: Briefcase,
    category: "work"
  },
  {
    title: "Master's in Computer Science",
    company: "University Name",
    date: "2018 - 2020",
    description: "Specialized in Software Engineering and Cloud Computing.",
    icon: GraduationCap,
    category: "education"
  },
  {
    title: "Innovation Award",
    company: "Tech Conference",
    date: "2021",
    description: "Recognized for innovative solution in web development.",
    icon: Award,
    category: "achievement"
  }
];

export default function Timeline() {
  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
      <VerticalTimeline lineColor="rgba(59, 130, 246, 0.2)">
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            contentStyle={{ 
              background: 'rgba(17, 24, 39, 0.8)',
              boxShadow: 'none',
              border: '1px solid rgba(75, 85, 99, 0.3)',
              borderRadius: '0.75rem',
              padding: '1.5rem'
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(75, 85, 99, 0.3)' }}
            date={item.date}
            dateClassName="text-gray-400"
            iconStyle={{ 
              background: 'rgb(59, 130, 246)',
              color: '#fff',
              boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.2)'
            }}
            icon={<item.icon size={20} />}
          >
            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
            <h4 className="text-blue-400 mb-2">{item.company}</h4>
            <p className="text-gray-400">{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}