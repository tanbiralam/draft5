import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "David Chen",
    role: "Product Manager at Microsoft",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    quote: "The program's hands-on approach and real-world projects helped me transition from engineering to product management seamlessly."
  },
  {
    name: "Emily Rodriguez",
    role: "Senior PM at Amazon",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    quote: "The mentorship I received was invaluable. My mentor helped me navigate complex product decisions and grow my career."
  },
  {
    name: "Michael Kim",
    role: "Product Lead at Spotify",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    quote: "The curriculum is perfectly balanced between theory and practice. I still use the frameworks I learned in my daily work."
  }
];

export default function Testimonials() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Our Alumni Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our graduates who have transformed their careers through our program
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}