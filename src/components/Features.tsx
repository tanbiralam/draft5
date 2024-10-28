import { Target, Users, BookOpen, Award, Briefcase, LineChart } from 'lucide-react';

const features = [
  {
    icon: <Target className="h-6 w-6 text-blue-600" />,
    title: "Industry-Focused Curriculum",
    description: "Learn real-world skills that align with current market demands and industry standards."
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "1:1 Mentorship",
    description: "Get personalized guidance from experienced Product Managers at top tech companies."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    title: "Hands-on Projects",
    description: "Build a portfolio through practical projects based on real business scenarios."
  },
  {
    icon: <Award className="h-6 w-6 text-blue-600" />,
    title: "Industry Certification",
    description: "Earn a recognized certification upon completion of the program."
  },
  {
    icon: <Briefcase className="h-6 w-6 text-blue-600" />,
    title: "Career Support",
    description: "Get placement assistance and interview preparation from industry experts."
  },
  {
    icon: <LineChart className="h-6 w-6 text-blue-600" />,
    title: "Network Growth",
    description: "Connect with a community of aspiring and experienced Product Managers."
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-white" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Program?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive program is designed to transform you into a job-ready Product Manager through practical learning and industry exposure.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="relative p-8 bg-white border rounded-xl hover:shadow-lg transition">
              <div className="inline-block p-3 bg-blue-50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}