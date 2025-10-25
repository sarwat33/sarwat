import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Home Automation',
      description:
        'IoT-based home automation system using Arduino and mobile app integration for remote control of appliances.',
      tags: ['Arduino', 'IoT', 'C++', 'Mobile App'],
      github: '#',
      demo: '#',
      status: 'Completed',
    },
    {
      title: 'Power Grid Analyzer',
      description:
        'MATLAB-based tool for analyzing power distribution networks and optimizing load balancing in electrical grids.',
      tags: ['MATLAB', 'Power Systems', 'Algorithm'],
      github: '#',
      demo: '#',
      status: 'In Progress',
    },
    {
      title: 'Digital Signal Processor',
      description:
        'Implementation of various DSP algorithms for audio filtering and enhancement using Python and NumPy.',
      tags: ['Python', 'DSP', 'NumPy', 'Signal Processing'],
      github: '#',
      demo: '#',
      status: 'Completed',
    },
    {
      title: 'PCB Design Portfolio',
      description:
        'Collection of custom PCB designs for various embedded projects, including sensor modules and motor controllers.',
      tags: ['PCB Design', 'KiCad', 'Hardware', 'Embedded'],
      github: '#',
      demo: '#',
      status: 'Ongoing',
    },
    {
      title: 'Weather Monitoring Station',
      description:
        'Real-time weather data collection and visualization system using sensors and cloud integration.',
      tags: ['Sensors', 'Data Viz', 'Cloud', 'React'],
      github: '#',
      demo: '#',
      status: 'Completed',
    },
    {
      title: 'Line Following Robot',
      description:
        'Autonomous robot capable of following lines using IR sensors and implementing PID control for smooth navigation.',
      tags: ['Robotics', 'Arduino', 'Control Systems'],
      github: '#',
      demo: '#',
      status: 'Completed',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
            <span className="text-green-600">&gt;</span> projects/
          </h2>
          <div className="h-1 w-20 bg-green-600"></div>
          <p className="text-green-500/70 mt-4">
            $ ls -la projects/ | grep -i "engineering\|code"
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-green-900/30 rounded-lg p-6 hover:border-green-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-900/20 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <FolderGit2 className="text-green-500" size={28} />
                <span
                  className={`text-xs px-2 py-1 rounded border ${
                    project.status === 'Completed'
                      ? 'bg-green-900/40 text-green-400 border-green-800/50'
                      : project.status === 'In Progress'
                      ? 'bg-yellow-900/40 text-yellow-400 border-yellow-800/50'
                      : 'bg-blue-900/40 text-blue-400 border-blue-800/50'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-green-400 mb-3">{project.title}</h3>
              <p className="text-green-500/70 mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs bg-gray-800 text-green-500 px-2 py-1 rounded border border-green-900/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4 pt-4 border-t border-green-900/30">
                <a
                  href={project.github}
                  className="flex items-center space-x-1 text-green-500 hover:text-green-300 transition-colors"
                >
                  <Github size={18} />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.demo}
                  className="flex items-center space-x-1 text-green-500 hover:text-green-300 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span className="text-sm">Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-900 border border-green-900/30 rounded-lg p-6 text-center">
          <p className="text-green-600 mb-2">$ echo "More projects coming soon..."</p>
          <p className="text-green-500/70">
            Currently working on several exciting projects. Check back later for updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
