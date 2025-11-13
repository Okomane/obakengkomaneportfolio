import { Badge } from './ui/badge';

export function Skills() {
  const skillCategories = [
    {
      category: 'Cloud Platforms',
      skills: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean'],
    },
    {
      category: 'Containerization & Orchestration',
      skills: ['Docker', 'Kubernetes', 'Docker Swarm', 'Helm'],
    },
    {
      category: 'CI/CD Tools',
      skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'CircleCI', 'ArgoCD'],
    },
    {
      category: 'Infrastructure as Code',
      skills: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi'],
    },
    {
      category: 'Monitoring & Logging',
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic'],
    },
    {
      category: 'Version Control & Collaboration',
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
    },
    {
      category: 'Scripting & Programming',
      skills: ['Python', 'Bash', 'PowerShell', 'Go'],
    },
    {
      category: 'Operating Systems',
      skills: ['Linux (Ubuntu, CentOS, RHEL)', 'Windows Server'],
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-white">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl text-blue-400">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
