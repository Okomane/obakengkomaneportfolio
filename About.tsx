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
              I'm a DevOps Engineer with a passion for automating processes, optimizing infrastructure, 
              and implementing best practices in software delivery. My expertise lies in bridging the gap 
              between development and operations teams to create efficient, scalable systems.
            </p>
            <p>
              With extensive experience in cloud platforms, containerization, and continuous integration/deployment, 
              I help organizations streamline their development workflows and improve system reliability.
            </p>
            <p>
              I believe in the power of automation and infrastructure as code to create consistent, 
              reproducible environments that enable teams to focus on delivering value.
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
