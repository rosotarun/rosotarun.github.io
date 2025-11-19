import React from 'react';

interface TeamMember {
  name: string;
  role: string;
}

const MEMBERS: TeamMember[] = [
  { name: 'Minseok Choi', role: 'Robotics Lab Engineer' },
  { name: 'Hyeonjoon Jang', role: 'Robotics Lab Engineer' },
  { name: 'Kwangtai Kim', role: 'Robotics Lab Engineer' },
  { name: 'Inhyeok Baek', role: 'Robotics Lab Engineer' },
  { name: 'Yeongmin Park', role: 'Robotics Lab Engineer' },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-gradient-to-b from-raycast-white to-gray-50/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-semibold text-raycast-text mb-2">Meet the Lab</h2>
          <p className="text-lg text-raycast-text-secondary max-w-2xl mx-auto">
            A hands-on team of Robotics Lab Engineers building precise, reliable tools for modern automation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MEMBERS.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-raycast-border bg-raycast-white/80 backdrop-blur-sm p-8 shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white text-lg font-semibold mb-6">
                {member.name
                  .split(' ')
                  .map((chunk) => chunk[0] ?? '')
                  .join('')
                  .slice(0, 2)}
              </div>
              <h3 className="text-xl font-semibold text-raycast-text">{member.name}</h3>
              <p className="text-raycast-text-secondary mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

