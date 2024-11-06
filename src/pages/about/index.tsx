import React from "react";
import {
  avatar,
  innovation,
  memberOne,
  memberThree,
  memberTwo,
  sustainability,
} from "../../assets";

const AboutPage: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="px-6">
          <header className="mb-20 text-center">
            <h1 className="text-primary mb-4 text-5xl font-extrabold">
              Who We Are
            </h1>
            <p className="text-xl text-gray-600">
              Discover our mission, story, and the passionate team behind
              Shop.co.
            </p>
          </header>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <section className="space-y-6">
              <h2 className="text-secondary text-4xl font-semibold">
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                At Shop.co, we are committed to transforming the ecommerce by
                focusing on innovation, sustainability, and customer success.
                Our mission is to create impactful solutions that address
                today’s most pressing challenges.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-secondary text-4xl font-semibold">
                Our Story
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Founded in 2000, Shop.co began with a simple idea: to
                revolutionize ecommerce. Since then, we’ve grown into a leading
                company, known for our customer-focused approach, creativity,
                and ability to tackle complex problems with ease.
              </p>
            </section>
          </div>

          <div className="mt-12 space-y-12">
            <section>
              <h2 className="text-secondary text-4xl font-semibold">
                Meet Our Team
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                <div className="rounded-lg border border-primary-200 bg-white p-6 text-center shadow-lg">
                  <img
                    src={memberOne}
                    alt="Team Member 1"
                    className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                  />
                  <h3 className="text-primary text-xl font-semibold">
                    Jane Doe
                  </h3>
                  <p className="text-gray-600">CEO & Founder</p>
                </div>

                <div className="rounded-lg border border-primary-200 bg-white p-6 text-center shadow-lg">
                  <img
                    src={memberTwo}
                    alt="Team Member 1"
                    className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                  />
                  <h3 className="text-primary text-xl font-semibold">
                    John Smith
                  </h3>
                  <p className="text-gray-600">CTO</p>
                </div>

                <div className="rounded-lg border border-primary-200 bg-white p-6 text-center shadow-lg">
                  <img
                    src={memberThree}
                    alt="Team Member 1"
                    className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                  />
                  <h3 className="text-primary text-xl font-semibold">
                    Sarah Lee
                  </h3>
                  <p className="text-gray-600">COO</p>
                </div>
              </div>
            </section>
          </div>
          <section className="mt-12">
            <h2 className="text-secondary text-4xl font-semibold">
              Our Values
            </h2>
            <div className="mt-8 space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 rounded-lg bg-black-700 bg-opacity-10">
                  <img
                    src={innovation}
                    alt="Value 1"
                    className="h-24 w-24 rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Innovation
                  </h3>
                  <p className="text-gray-600">
                    We’re dedicated to pushing boundaries, embracing change, and
                    fostering innovation at every level of our business.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 rounded-lg bg-black-700 bg-opacity-10">
                  <img
                    src={sustainability}
                    alt="Value 2"
                    className="h-24 w-24 rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Customer Focus
                  </h3>
                  <p className="text-gray-600">
                    Our customers are at the heart of everything we do. We aim
                    to exceed their expectations and create solutions that
                    address their needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 rounded-lg bg-black-700 bg-opacity-10">
                  <img
                    src={innovation}
                    alt="Value 3"
                    className="h-24 w-24 rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Sustainability
                  </h3>
                  <p className="text-gray-600">
                    We prioritize sustainable practices, ensuring that our
                    solutions help reduce environmental impact while driving
                    long-term growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 rounded-lg bg-black-700 bg-opacity-10">
                  <img
                    src={sustainability}
                    alt="Value 4"
                    className="h-24 w-24 rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Integrity
                  </h3>
                  <p className="text-gray-600">
                    We hold ourselves to the highest ethical standards and are
                    committed to transparency, honesty, and trust in all our
                    business relationships.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
