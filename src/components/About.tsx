import { Code2, Cloud, Workflow } from 'lucide-react';
import { Card } from './ui/card';

export function About() {
  const highlights = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Expertise in AWS, Azure, and GCP cloud platforms',
    },
    {
      icon: Workflow,
      title: 'CI/CD Pipelines',
      description: 'Building automated deployment workflows',
    },
    {
      icon: Code2,
      title: 'Infrastructure as Code',
      description: 'Terraform, Ansible, and CloudFormation',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-white">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4 text-slate-300">
            <p>
              I’m a DevOps Engineer with over seven years of experience in the IT industry,
              supported by a strong foundation as a software developer. 
              My passion lies in automating processes, optimizing infrastructure, 
              and implementing best-practice solutions that enhance software delivery.
            </p>
            <p>
             With my developer background, I am able to bridge the gap between development and operations teams,
             fostering efficient collaboration and building scalable, resilient systems. 
             I have extensive hands-on experience with cloud platforms, containerization, 
             and CI/CD pipelines, helping organizations streamline workflows and improve system reliability.
            </p>
            <p>
              I am a firm believer in the power of automation and Infrastructure as Code to create consistent,
              reproducible environments that allow teams to focus on delivering real value. 
              I also owe a great deal to Kabelo Lekgoathi, whose influence and support have played a meaningful role
              in my professional journey.
            </p>
          </div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="p-6 bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <item.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
