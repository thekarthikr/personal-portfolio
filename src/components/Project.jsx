import { useState } from "react";
import { BiLink } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { project } from "../constants";

const Project = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  return (
    <section id='Projects' className='project '>
      <div className='project__header section'>
        <h2 className='project__heading'>
          <span className='text-gradient-light'>Projects</span>
        </h2>
        <p className='project__intro'>
          I love to create projects while learning new technologies , Here are a
          few of my recent projects
        </p>
      </div>
      <div className='project__wrapper'>
        {project
          .slice(0, visibleProjects)
          .map(
            ({ id, title, description, liveLink, githubLink, img, tech }) => (
              <section key={id} className='project__content'>
                <img className='project__img' src={img} alt={title} />

                <div className='project__info'>
                  <h3 className='project__title'> {title} </h3>
                  <p className='project__description'>{description}</p>

                  <div className='project__tech'>
                    {tech.map((item, index) => (
                      <p key={index}> {item} </p>
                    ))}
                  </div>

                  <div className='project__list'>
                    <a href={liveLink} target='_blank'>
                      <BiLink /> View site
                    </a>

                    <a href={githubLink} target='_blank'>
                      <BsGithub /> View in detail
                    </a>
                  </div>
                </div>
              </section>
            )
          )}

        {visibleProjects < project.length && (
          <button className='load-more' onClick={loadMore}>
            View more
          </button>
        )}
      </div>
    </section>
  );
};

export default Project;
