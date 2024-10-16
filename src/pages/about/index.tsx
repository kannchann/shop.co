import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <main className="flex flex-col items-center">
        <h1 className="mb-8 text-center text-4xl font-bold">About Us</h1>

        <section className="mb-8 w-full max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
          <p className="text-lg">
            At [Your Company Name], we are dedicated to [brief description of
            your mission]. Our goal is to [main objective of your company].
          </p>
        </section>

        <section className="mb-8 w-full max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold">Our Story</h2>
          <p className="text-lg">
            Founded in [year], [Your Company Name] began with a vision to
            [founding vision]. Since then, we've grown into [brief description
            of current state].
          </p>
        </section>

        <section className="mb-8 w-full max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold">Our Team</h2>
          <p className="text-lg">
            We're proud of our diverse and talented team of professionals who
            are passionate about [your industry/field]. Together, we work
            tirelessly to [main value proposition].
          </p>
        </section>

        <section className="mb-8 w-full max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold">Our Values</h2>
          <ul className="list-disc pl-6 text-lg">
            <li>Value 1: [Description]</li>
            <li>Value 2: [Description]</li>
            <li>Value 3: [Description]</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
