import React from "react";

const Instructor = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-64">Teach. Create. Earn.</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Passionate about teaching? Looking for a platform where you can share
          your knowledge, connect with professionals, and enrich careers, all
          while earning supplemental income?
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <p className="bold-16 lg:bold-20 text-blue-70">
            Passionate about teaching? Looking for a platform where you can
            share your knowledge, connect with professionals, and enrich
            careers, all while earning supplemental income? You've come to the
            right place.
          </p>
          <span className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            At Simplilearn, our constant endeavour is to create a network of
            world-class trainers and industry-experts who, in turn, create
            high-quality courseware that resonates with professionals the world
            over, cutting across domains, especially Full Stack, DevOps, Cloud
            Computing, Big Data, Deep Learning and NLP. Come join us on our
            journey.
          </span>
          <p className="bold-16 lg:bold-20 text-blue-70">
            What's in it for me?
          </p>
          <span className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            We're glad you asked! The material you produce will be used to train
            professionals worldwide, meaning increased visibility, a larger
            audience for your content, and the chance to become a part of an
            elite worldwide training community!
          </span>
          <p className="bold-16 lg:bold-20 text-blue-70">Show me the money!</p>
          <span className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            At Simplilearn, we know the value of your time and effort, and also
            understand that offering fair and flexible compensation is a part of
            your business ethos. With our revenue-sharing model, you have the
            opportunity to earn tens of thousands of dollars every month!
          </span>
          <br />
          <p className="bold-16 lg:bold-20 text-blue-70">What does it take?</p>
          <span className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
            <ul className="list-disc">
              <li>
                A great deal of passion for teaching and sharing knowledge
              </li>
              <li>Domain expertise with relevant certifications</li>
              <li>Strong communication and presentation skills required</li>
              <li>
                A commitment to developing and delivering best-in-class training
                to a global audience
              </li>
            </ul>
          </span>
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <img
          className="rounded-3xl"
          src="https://assets-global.website-files.com/6509176963fe4ef34ed8b7e1/6526607c80a71efa52c2d876_Contact%20Image.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Instructor;
