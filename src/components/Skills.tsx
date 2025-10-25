import { Code2, Cpu, Database, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming',
      skills: [
        { name: 'Python', level: 80 },
        { name: 'C/C++', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'MATLAB', level: 65 },
      ],
    },
    {
      icon: Layers,
      title: 'Web Development',
      skills: [
        { name: 'React', level: 75 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'Node.js', level: 60 },
        { name: 'Tailwind CSS', level: 80 },
      ],
    },
    {
      icon: Cpu,
      title: 'Engineering',
      skills: [
        { name: 'Circuit Analysis', level: 80 },
        { name: 'Digital Electronics', level: 75 },
        { name: 'PCB Design', level: 60 },
        { name: 'Embedded Systems', level: 65 },
      ],
    },
    {
      icon: Database,
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 75 },
        { name: 'Arduino', level: 70 },
        { name: 'LaTeX', level: 65 },
        { name: 'Linux', level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
            <span className="text-green-600">&gt;</span> skills.json
          </h2>
          <div className="h-1 w-20 bg-green-600"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 border border-green-900/30 rounded-lg p-6 hover:border-green-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-900/20"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-green-900/30 p-2 rounded border border-green-800/50">
                    <Icon className="text-green-500" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-green-400">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-green-500">{skill.name}</span>
                        <span className="text-green-600 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-green-600 to-green-400 h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-gray-900 border border-green-900/30 rounded-lg p-6">
          <p className="text-green-600 mb-4">$ cat learning_status.txt</p>
          <div className="ml-4 space-y-2 text-green-500/80">
            <p className="flex items-center">
              <span className="text-green-400 mr-2">[ACTIVE]</span>
              Continuously expanding knowledge in embedded systems and IoT
            </p>
            <p className="flex items-center">
              <span className="text-green-400 mr-2">[ACTIVE]</span>
              Exploring machine learning applications in electrical engineering
            </p>
            <p className="flex items-center">
              <span className="text-green-400 mr-2">[ACTIVE]</span>
              Building expertise in power electronics and renewable energy systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
