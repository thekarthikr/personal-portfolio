import TechStacks from "./TechStacks";

const About = () => {
  return (
    <section id='About' className='about section w'>
      <h2 className='about__heading'>
        <span className='text-gradient-light'>About me</span>
      </h2>
      <p className='about__info'>
        Hi there , I'm Karthik. Jr.Frontend Developer. I love to create
        beautiful and performant products using web technologies with delightful
        user experience. Maintain high coding standards and practices and
        exercise quality control on all aspects of web development. Interested
        in the entire frontend spectrum and working on ambitious projects with
        positive people.
      </p>
      <div className='about__skill'>
        <h3 className='about__skill-title w'>
          Here are a few technologies I’ve been working with
        </h3>
      </div>
      <TechStacks />
    </section>
  );
};

export default About;
