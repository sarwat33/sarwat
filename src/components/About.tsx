import { Code, Zap, Target, Heart } from 'lucide-react';

const About = () => {
  const traits = [
    {
      icon: Code,
      title: 'Problem Solver',
      description: 'Love tackling complex challenges and finding elegant solutions',
    },
    {
      icon: Zap,
      title: 'Quick Learner',
      description: 'Always eager to explore new technologies and methodologies',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on achieving objectives with precision and dedication',
    },
    {
      icon: Heart,
      title: 'Team Player',
      description: 'Thrive in collaborative environments and value diverse perspectives',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
            <span className="text-green-600">&gt;</span> about_me.sh
          </h2>
          <div className="h-1 w-20 bg-green-600"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 border border-green-900/30 rounded-lg p-6 hover:border-green-700/50 transition-all duration-300">
            <p className="text-green-600 mb-4">$ cat about.txt</p>
            <div className="text-green-500/80 space-y-4 leading-relaxed">
              <p>
                Currently pursuing my Bachelor's in Electrical & Electronic Engineering at
                Chittagong University of Engineering & Technology (CUET), Bangladesh. As a
                sophomore, I'm diving deep into the fundamentals of engineering while exploring
                the intersection of hardware and software.
              </p>
              <p>
                My journey in education began at Scholarshome, where I built a strong foundation
                that continues to shape my approach to learning and problem-solving today.
              </p>
              <p>
                I'm passionate about leveraging technology to create meaningful solutions and
                constantly seeking opportunities to grow both technically and personally.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-green-600">$ ls characteristics/</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traits.map((trait, index) => {
                const Icon = trait.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900 border border-green-900/30 rounded-lg p-4 hover:border-green-700/50 hover:shadow-lg hover:shadow-green-900/20 transition-all duration-300 group"
                  >
                    <Icon className="text-green-500 mb-3 group-hover:text-green-400 transition-colors" size={24} />
                    <h3 className="text-green-400 font-semibold mb-2">{trait.title}</h3>
                    <p className="text-green-600/80 text-sm">{trait.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
