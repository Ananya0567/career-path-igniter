import { Card } from "@/components/ui/card";
import {
  Map,
  TrendingUp,
  Users,
  BookMarked,
  Award,
  BarChart3,
  Rocket,
  Heart
} from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Personalized Roadmaps",
    description: "Get custom learning paths tailored to your goals and current skill level",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed progress analytics",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with mentors and peers on similar career paths",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: BookMarked,
    title: "Curated Resources",
    description: "Access hand-picked learning materials and tutorials",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Award,
    title: "Skill Certifications",
    description: "Earn certificates as you complete roadmap milestones",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: BarChart3,
    title: "Industry Insights",
    description: "Stay updated with latest tech trends and job market demands",
    gradient: "from-teal-500 to-green-500"
  },
  {
    icon: Rocket,
    title: "Fast Track Mode",
    description: "Accelerated learning paths for motivated learners",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Heart,
    title: "AI Recommendations",
    description: "Get smart suggestions based on your learning style and pace",
    gradient: "from-amber-500 to-orange-500"
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to accelerate your IT career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card hover:shadow-card transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;