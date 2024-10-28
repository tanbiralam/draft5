import { BookOpen, Code, PieChart, Users, MessageSquare, Rocket } from 'lucide-react';

const modules = [
  {
    icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    title: "Product Fundamentals",
    duration: "2 weeks",
    topics: ["Product Thinking", "Market Research", "User Psychology", "Product Strategy"]
  },
  {
    icon: <Code className="h-6 w-6 text-blue-600" />,
    title: "Technical Skills",
    duration: "3 weeks",
    topics: ["Product Analytics", "Agile Methodologies", "Product Requirements", "Technical Architecture"]
  },
  {
    icon: <PieChart className="h-6 w-6 text-blue-600" />,
    title: "Business Acumen",
    duration: "2 weeks",
    topics: ["Business Models", "Monetization", "Growth Metrics", "Go-to-Market Strategy"]
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "Leadership & Communication",
    duration: "2 weeks",
    topics: ["Stakeholder Management", "Team Leadership", "Product Presentations", "Negotiation Skills"]
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
    title: "User Experience",
    duration: "2 weeks",
    topics: ["UX Research", "Design Thinking", "User Journey Mapping", "Prototyping"]
  },
  {
    icon: <Rocket className="h-6 w-6 text-blue-600" />,
    title: "Career Preparation",
    duration: "1 week",
    topics: ["Portfolio Building", "Interview Prep", "Case Studies", "Career Planning"]
  }
];

export default function Curriculum() {
  return (
    <div className="py-24 bg-gray-50" id="curriculum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Program Curriculum</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our 12-week intensive program covers everything you need to become a successful Product Manager
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="inline-block p-3 bg-blue-50 rounded-lg">
                {module.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{module.title}</h3>
              <p className="mt-1 text-sm text-blue-600">{module.duration}</p>
              <ul className="mt-4 space-y-2">
                {module.topics.map((topic, idx) => (
                  <li key={idx} className="text-gray-600 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}