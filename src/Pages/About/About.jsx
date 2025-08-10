import React from "react";

const About = () => {
  return (
    <section className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-[#129ee7] text-center pb-5 font-bold text-5xl">
          About Uddog
        </h1>
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-600 mb-12">
          Uddog is a social development event platform dedicated to connecting
          passionate individuals with meaningful community-driven initiatives.
          Whether you're looking to volunteer, organize, or simply stay
          informed—Uddog empowers you to make a real impact.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-gray-600">
              We aim to build a digital ecosystem where social good is easily
              accessible and actionable. By connecting organizers with
              volunteers and showcasing impactful events, Uddog strengthens
              local communities across Bangladesh and beyond.
            </p>

            <h2 className="text-2xl font-semibold mt-6">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Discover local social service events</li>
              <li>Join as a volunteer or team member</li>
              <li>Create and manage your own community events</li>
              <li>Track participation and impact</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We believe in the power of collective action. Join our movement to
            build a more connected and caring society—one event at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
