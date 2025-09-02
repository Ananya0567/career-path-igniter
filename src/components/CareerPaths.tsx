import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Smartphone, 
  TrendingUp,
  Brain,
  Palette,
  Server,
  BarChart,
  GitBranch,
  Cpu
} from "lucide-react";

const careerPaths = [
  {
    id: 1,
    title: "Frontend Developer",
    icon: Code,
    description: "Build beautiful user interfaces with modern web technologies",
    skills: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Responsive Design"],
    level: "Beginner Friendly",
    duration: "6-8 months",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Backend Developer",
    icon: Server,
    description: "Design and build robust server-side applications and APIs",
    skills: ["Node.js", "Python", "Databases", "REST APIs", "Microservices"],
    level: "Intermediate",
    duration: "8-10 months",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    icon: GitBranch,
    description: "Master both frontend and backend development",
    skills: ["MERN Stack", "MEAN Stack", "DevOps", "System Design"],
    level: "Advanced",
    duration: "12-15 months",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Data Scientist",
    icon: Brain,
    description: "Analyze data and build machine learning models",
    skills: ["Python", "ML/AI", "Statistics", "Data Visualization", "Deep Learning"],
    level: "Intermediate",
    duration: "10-12 months",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Cloud Engineer",
    icon: Cloud,
    description: "Design and manage cloud infrastructure and services",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
    level: "Intermediate",
    duration: "8-10 months",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "DevOps Engineer",
    icon: Cpu,
    description: "Bridge the gap between development and operations",
    skills: ["Automation", "CI/CD", "Monitoring", "Infrastructure as Code"],
    level: "Advanced",
    duration: "10-12 months",
    color: "from-teal-500 to-green-500"
  },
  {
    id: 7,
    title: "Mobile Developer",
    icon: Smartphone,
    description: "Create native and cross-platform mobile applications",
    skills: ["React Native", "Flutter", "iOS", "Android", "Mobile UI/UX"],
    level: "Beginner Friendly",
    duration: "7-9 months",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 8,
    title: "Cybersecurity Specialist",
    icon: Shield,
    description: "Protect systems and data from security threats",
    skills: ["Network Security", "Ethical Hacking", "Security Auditing", "Cryptography"],
    level: "Advanced",
    duration: "12-14 months",
    color: "from-red-500 to-orange-500"
  },
  {
    id: 9,
    title: "UI/UX Designer",
    icon: Palette,
    description: "Design user-centered digital experiences",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Accessibility"],
    level: "Beginner Friendly",
    duration: "5-7 months",
    color: "from-violet-500 to-purple-500"
  },
  {
    id: 10,
    title: "Data Analyst",
    icon: BarChart,
    description: "Transform data into actionable business insights",
    skills: ["SQL", "Excel", "Power BI", "Python", "Data Visualization"],
    level: "Beginner Friendly",
    duration: "5-6 months",
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: 11,
    title: "Database Administrator",
    icon: Database,
    description: "Manage and optimize database systems",
    skills: ["SQL", "MongoDB", "PostgreSQL", "Database Design", "Performance Tuning"],
    level: "Intermediate",
    duration: "7-9 months",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 12,
    title: "Product Manager",
    icon: TrendingUp,
    description: "Lead product strategy and development",
    skills: ["Product Strategy", "Agile", "Analytics", "User Research", "Roadmapping"],
    level: "Advanced",
    duration: "10-12 months",
    color: "from-amber-500 to-orange-500"
  }
];

const CareerPaths = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Choose Your Career Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore different IT career paths and find the one that matches your interests and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {careerPaths.map((path) => {
            const Icon = path.icon;
            return (
              <Card 
                key={path.id} 
                className="group relative overflow-hidden border-border/50 bg-card hover:bg-card-hover transition-all duration-300 hover:shadow-card cursor-pointer"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="p-6 relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${path.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {path.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {path.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {path.skills.slice(0, 3).map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="text-xs bg-muted/50 hover:bg-muted"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {path.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-muted/50">
                        +{path.skills.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Meta info */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{path.level}</span>
                    <span>{path.duration}</span>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="glass" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    View Roadmap
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerPaths;