import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: 'Chittagong University of Engineering & Technology',
      shortName: 'CUET',
      degree: 'Bachelor of Science in Electrical & Electronic Engineering',
      period: '2023 - Present',
      status: 'Sophomore',
      location: 'Chittagong, Bangladesh',
      description: 'Currently in my second year, focusing on core EEE subjects including circuit analysis, digital electronics, signals and systems, and programming.',
    },
    {
      institution: 'Scholarshome',
      shortName: 'Scholarshome',
      degree: 'Higher Secondary & Secondary Education',
      period: 'Completed',
      status: 'Alumni',
      location: 'Bangladesh',
      description: 'Completed both SSC and HSC from Scholarshome, building a strong academic foundation in science and mathematics.',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
            <span className="text-green-600">&gt;</span> education.log
          </h2>
          <div className="h-1 w-20 bg-green-600"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-green-900/30 rounded-lg p-6 hover:border-green-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-900/20"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="bg-green-900/30 p-3 rounded-lg border border-green-800/50">
                    {index === 0 ? (
                      <GraduationCap className="text-green-500" size={28} />
                    ) : (
                      <BookOpen className="text-green-500" size={28} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-1">
                      {edu.shortName}
                    </h3>
                    <p className="text-green-500/80 text-sm mb-2">{edu.institution}</p>
                    <div className="flex items-center space-x-3 text-sm">
                      <span className="bg-green-900/40 text-green-400 px-3 py-1 rounded border border-green-800/50">
                        {edu.status}
                      </span>
                      <span className="text-green-600">{edu.location}</span>
                    </div>
                  </div>
                </div>
                <div className="text-green-600 bg-gray-800/50 px-4 py-2 rounded border border-green-900/30 self-start">
                  {edu.period}
                </div>
              </div>

              <div className="border-l-2 border-green-800/50 pl-4 ml-6">
                <p className="text-green-400 font-semibold mb-2">{edu.degree}</p>
                <p className="text-green-500/70 leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-900 border border-green-900/30 rounded-lg p-6">
          <p className="text-green-600 mb-2">$ echo $LEARNING_PHILOSOPHY</p>
          <p className="text-green-500/80 ml-4 leading-relaxed">
            "Education is not just about acquiring knowledge, but about developing the ability to
            think critically, solve problems creatively, and continuously adapt to new challenges.
            Every course, every project, and every failure is a stepping stone to mastery."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
