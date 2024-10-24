import React from 'react';

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 text-center mb-10 sm:mb-16">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
              alt="Developer working"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-32 sm:w-48 h-32 sm:h-48 bg-sage-100 rounded-lg -z-10"></div>
          </div>
          <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
            <p className="text-base sm:text-lg text-sage-800 leading-relaxed">
              I'm a passionate Web Developer and Product Manager with a keen eye
              for design and a love for creating seamless user experiences. With
              a experience in both development and product management, I bring a
              unique perspective to every project.
            </p>
            <p className="text-base sm:text-lg text-sage-800 leading-relaxed">
              My approach combines technical expertise with strategic thinking,
              ensuring that every solution not only works flawlessly but also
              drives business value.
            </p>
            {/* <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
              <div className="text-center p-2 sm:p-4">
                <span className="block text-2xl sm:text-3xl font-bold text-sage-600">5+</span>
                <span className="text-sm sm:text-base text-sage-700">Years Experience</span>
              </div>
              <div className="text-center p-2 sm:p-4">
                <span className="block text-2xl sm:text-3xl font-bold text-sage-600">50+</span>
                <span className="text-sm sm:text-base text-sage-700">Projects Done</span>
              </div>
              <div className="text-center p-2 sm:p-4">
                <span className="block text-2xl sm:text-3xl font-bold text-sage-600">30+</span>
                <span className="text-sm sm:text-base text-sage-700">Happy Clients</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
