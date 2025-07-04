import React from "react";

const testimonials = [
  {
    name: "Nafisa Akter",
    role: "Volunteer",
    event: "Tree Plantation Drive",
    quote:
      "Uddog gave me a platform to contribute meaningfully to society. It’s empowering!",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Rezaul Karim",
    role: "Event Organizer",
    event: "Blood Donation Camp",
    quote: "Organizing my event through Uddog was seamless and effective.",
    avatar: "https://i.pravatar.cc/100?img=33",
  },
  {
    name: "Tania Haque",
    role: "Volunteer",
    event: "Clean Dhaka Campaign",
    quote:
      "The community spirit here is amazing. I felt like part of something bigger.",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-100" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-[#129ee7] text-center pb-7">What Our Community Says</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
            >
              <p className="text-gray-700 italic mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} – {testimonial.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
