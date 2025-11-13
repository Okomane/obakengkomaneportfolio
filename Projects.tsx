import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, GitBranch } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Multi-Cloud Infrastructure Deployment',
      description: 'Designed and implemented a multi-cloud infrastructure using Terraform, enabling seamless deployment across AWS, Azure, and GCP with automated failover capabilities.',
      technologies: ['Terraform', 'AWS', 'Azure', 'GCP', 'Kubernetes'],
      impact: 'Reduced deployment time by 60% and improved system reliability',
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Built comprehensive CI/CD pipelines using Jenkins and GitHub Actions, implementing automated testing, security scanning, and deployment strategies.',
      technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'SonarQube', 'Trivy'],
      impact: 'Accelerated release cycles from monthly to daily deployments',
    },
    {
      title: 'Kubernetes Cluster Management',
      description: 'Set up and managed production-grade Kubernetes clusters with automated scaling, monitoring, and disaster recovery capabilities.',
      technologies: ['Kubernetes', 'Helm', 'Prometheus', 'Grafana', 'ArgoCD'],
      impact: 'Achieved 99.9% uptime and reduced infrastructure costs by 40%',
    },
    {
      title: 'Monitoring & Observability Platform',
      description: 'Implemented comprehensive monitoring solution using Prometheus, Grafana, and ELK stack for real-time insights and alerting.',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'AlertManager'],
      impact: 'Reduced mean time to resolution (MTTR) by 50%',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-white">
          Featured Projects & Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <div className="flex gap-2">
                    <GitBranch className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer" />
                    <ExternalLink className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer" />
                  </div>
                </div>
                <CardDescription className="text-slate-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-blue-500/30 text-blue-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-green-400">
                    💡 {project.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
