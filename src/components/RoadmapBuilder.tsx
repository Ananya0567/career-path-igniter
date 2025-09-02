import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle2,
  Circle,
  Clock,
  Target,
  BookOpen,
  Trophy,
  ChevronRight,
  Zap
} from "lucide-react";

interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  skills: string[];
  resources: string[];
  completed: boolean;
  current: boolean;
}

const RoadmapBuilder = () => {
  const [selectedPath, setSelectedPath] = useState("frontend");
  const [progress, setProgress] = useState(25);

  const roadmaps = {
    frontend: [
      {
        id: 1,
        title: "HTML & CSS Fundamentals",
        description: "Learn the building blocks of web development",
        duration: "2-3 weeks",
        skills: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive Design"],
        resources: ["MDN Web Docs", "FreeCodeCamp", "CSS Tricks"],
        completed: true,
        current: false
      },
      {
        id: 2,
        title: "JavaScript Essentials",
        description: "Master the programming language of the web",
        duration: "4-5 weeks",
        skills: ["ES6+", "DOM Manipulation", "Async/Await", "APIs", "Error Handling"],
        resources: ["JavaScript.info", "Eloquent JavaScript", "You Don't Know JS"],
        completed: false,
        current: true
      },
      {
        id: 3,
        title: "React.js Framework",
        description: "Build modern single-page applications",
        duration: "4-6 weeks",
        skills: ["Components", "State & Props", "Hooks", "Routing", "Context API"],
        resources: ["React Documentation", "React Tutorial", "Scrimba React Course"],
        completed: false,
        current: false
      },
      {
        id: 4,
        title: "Advanced Concepts",
        description: "Level up with advanced patterns and tools",
        duration: "3-4 weeks",
        skills: ["TypeScript", "Testing", "Performance", "State Management", "Next.js"],
        resources: ["TypeScript Handbook", "Testing Library", "Web.dev"],
        completed: false,
        current: false
      }
    ],
    backend: [
      {
        id: 1,
        title: "Programming Fundamentals",
        description: "Master a backend programming language",
        duration: "3-4 weeks",
        skills: ["Python/Node.js", "Data Structures", "Algorithms", "OOP"],
        resources: ["Python.org", "Node.js Docs", "LeetCode"],
        completed: true,
        current: false
      },
      {
        id: 2,
        title: "Database Management",
        description: "Learn to design and query databases",
        duration: "3-4 weeks",
        skills: ["SQL", "NoSQL", "Database Design", "ORMs", "Migrations"],
        resources: ["PostgreSQL Tutorial", "MongoDB University", "SQLBolt"],
        completed: false,
        current: true
      },
      {
        id: 3,
        title: "API Development",
        description: "Build RESTful and GraphQL APIs",
        duration: "4-5 weeks",
        skills: ["REST", "GraphQL", "Authentication", "API Security", "Documentation"],
        resources: ["REST API Tutorial", "GraphQL.org", "Postman Learning"],
        completed: false,
        current: false
      },
      {
        id: 4,
        title: "DevOps & Deployment",
        description: "Deploy and maintain applications",
        duration: "3-4 weeks",
        skills: ["Docker", "CI/CD", "Cloud Services", "Monitoring", "Scaling"],
        resources: ["Docker Docs", "AWS Training", "GitHub Actions"],
        completed: false,
        current: false
      }
    ],
    data: [
      {
        id: 1,
        title: "Python & Statistics",
        description: "Foundation for data science",
        duration: "4-5 weeks",
        skills: ["Python", "NumPy", "Pandas", "Statistics", "Probability"],
        resources: ["Python for Data Science", "Khan Academy Stats", "DataCamp"],
        completed: true,
        current: false
      },
      {
        id: 2,
        title: "Data Analysis & Visualization",
        description: "Extract insights from data",
        duration: "3-4 weeks",
        skills: ["Data Cleaning", "EDA", "Matplotlib", "Seaborn", "Plotly"],
        resources: ["Kaggle Learn", "Towards Data Science", "D3.js Tutorial"],
        completed: false,
        current: true
      },
      {
        id: 3,
        title: "Machine Learning",
        description: "Build predictive models",
        duration: "6-8 weeks",
        skills: ["Scikit-learn", "Supervised Learning", "Unsupervised Learning", "Model Evaluation"],
        resources: ["Andrew Ng Course", "Fast.ai", "Google ML Crash Course"],
        completed: false,
        current: false
      },
      {
        id: 4,
        title: "Deep Learning & AI",
        description: "Advanced neural networks",
        duration: "4-6 weeks",
        skills: ["TensorFlow", "PyTorch", "CNNs", "RNNs", "Transformers"],
        resources: ["Deep Learning Specialization", "PyTorch Tutorials", "Papers with Code"],
        completed: false,
        current: false
      }
    ]
  };

  const RoadmapStep = ({ step, index }: { step: RoadmapStep; index: number }) => {
    return (
      <div className="relative">
        {/* Connection line */}
        {index < roadmaps[selectedPath as keyof typeof roadmaps].length - 1 && (
          <div className={`absolute left-6 top-12 w-0.5 h-full ${step.completed ? 'bg-primary' : 'bg-border'}`} />
        )}

        <Card className={`p-6 ${step.current ? 'border-primary bg-primary/5' : 'border-border/50'} ${step.completed ? 'opacity-80' : ''} transition-all duration-300 hover:shadow-card`}>
          <div className="flex items-start gap-4">
            {/* Status indicator */}
            <div className="flex-shrink-0">
              {step.completed ? (
                <CheckCircle2 className="w-12 h-12 text-success" />
              ) : step.current ? (
                <div className="relative">
                  <Circle className="w-12 h-12 text-primary" />
                  <div className="absolute inset-2 bg-primary rounded-full animate-pulse" />
                </div>
              ) : (
                <Circle className="w-12 h-12 text-muted-foreground" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                {step.current && (
                  <Badge variant="default" className="bg-gradient-primary">
                    <Zap className="w-3 h-3 mr-1" />
                    Current
                  </Badge>
                )}
              </div>

              <p className="text-muted-foreground mb-4">{step.description}</p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Clock className="w-4 h-4" />
                <span>{step.duration}</span>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <div className="text-sm font-medium text-foreground mb-2">Skills to Learn:</div>
                <div className="flex flex-wrap gap-2">
                  {step.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-muted/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div>
                <div className="text-sm font-medium text-foreground mb-2">Resources:</div>
                <div className="flex flex-wrap gap-2">
                  {step.resources.map((resource, idx) => (
                    <span key={idx} className="text-xs text-primary hover:underline cursor-pointer">
                      {resource}
                      {idx < step.resources.length - 1 && " • "}
                    </span>
                  ))}
                </div>
              </div>

              {step.current && (
                <Button variant="gradient" className="mt-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Continue Learning
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <section className="py-20 px-4 bg-gradient-dark">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Your Learning Roadmap
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow a structured path to achieve your career goals
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="p-6 mb-8 bg-card/50 backdrop-blur-sm border-border/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Target className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">Your Progress</h3>
                <p className="text-sm text-muted-foreground">Keep going! You're doing great</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-warning" />
              <span className="text-2xl font-bold text-foreground">{progress}%</span>
            </div>
          </div>
          <Progress value={progress} className="h-3" />
        </Card>

        {/* Path Selection */}
        <Tabs value={selectedPath} onValueChange={setSelectedPath} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="frontend">Frontend Path</TabsTrigger>
            <TabsTrigger value="backend">Backend Path</TabsTrigger>
            <TabsTrigger value="data">Data Science Path</TabsTrigger>
          </TabsList>

          <TabsContent value="frontend" className="space-y-6">
            {roadmaps.frontend.map((step, index) => (
              <RoadmapStep key={step.id} step={step} index={index} />
            ))}
          </TabsContent>

          <TabsContent value="backend" className="space-y-6">
            {roadmaps.backend.map((step, index) => (
              <RoadmapStep key={step.id} step={step} index={index} />
            ))}
          </TabsContent>

          <TabsContent value="data" className="space-y-6">
            {roadmaps.data.map((step, index) => (
              <RoadmapStep key={step.id} step={step} index={index} />
            ))}
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Customize Your Roadmap
            <ChevronRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoadmapBuilder;