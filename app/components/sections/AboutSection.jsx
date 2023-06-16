import React from 'react'

const AboutSection = () => {
  return (
    <section
    id="about"
    className="flex flex-col md:flex-row md:justify-around  justify-start pt-40 gap-y-10 items-center min-h-screen"
  >
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl lg:text-6xl font-bold">Hi, I'mNevil </h1>
      <h1 className="text-4xl lg:text-6xl font-bold pt-4">
        WebDeveloper
      </h1>
      <h3 className="font-bold pt-10 md:max-w-xs lg:max-w-max">
        Front End Developer / JavaScript Fan / Learner
      </h3>
    </div>
    <p className="max-w-sm lg:max-w-lg mt-4 font-extralight lg:text-xl md:mt-0 md:text-lg p-2 my-10 leading-relaxed">
      Professionally connected with the web development industry.
      Problem solver, well-organised person, loyal employee with high
      attention to detail. Fan of Anime, outdoor activities, video
      games, and coding of course. Interested in the entire frontend
      spectrum and working on ambitious projects with interesting
      people.
    </p>
  </section>
  )
}

export default AboutSection