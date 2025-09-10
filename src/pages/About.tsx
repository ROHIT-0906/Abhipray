import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Shield, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Advanced Sentiment Analysis",
      description: "AI-powered analysis of public comments using state-of-the-art NLP models"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Citizen Engagement",
      description: "Understand public opinion and sentiment towards government policies and initiatives"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Secure & Compliant",
      description: "Built with government security standards and data privacy regulations in mind"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Real-time Processing",
      description: "Fast processing of large volumes of comments with instant visualization"
    }
  ];

  const technologies = [
    "React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "TensorFlow", "Natural Language Processing"
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">About Abhipray</h1>
        <p className="text-muted-foreground">The Citizen's Compass for Government Analytics</p>
      </div>

      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle>What is Abhipray?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Abhipray (The Citizen's Compass) is a comprehensive sentiment analysis platform designed 
            specifically for government agencies to analyze public comments and feedback on policies, 
            regulations, and initiatives. Built for the Ministry of Corporate Affairs, this platform 
            provides real-time insights into public opinion through advanced AI-powered analysis.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our mission is to bridge the gap between citizens and government by providing actionable 
            insights from public feedback, enabling data-driven policy decisions that reflect the 
            true sentiment of the people.
          </p>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card>
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
          <CardDescription>Powerful tools for comprehensive sentiment analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technology Stack */}
      <Card>
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
          <CardDescription>Built with modern, secure, and scalable technologies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Contact & Support</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Ministry of Corporate Affairs</h3>
            <p className="text-muted-foreground">
              For technical support and inquiries, please contact the Digital Innovation Team.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Version Information</h3>
            <p className="text-muted-foreground">
              Abhipray v1.0.0 - Government Analytics Platform
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;