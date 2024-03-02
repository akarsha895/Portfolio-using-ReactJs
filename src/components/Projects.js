
import React from 'react';
import './Projects.css';


const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-content">
        <h2>Projects</h2>
        <div className="project-card">
          <img src="https://media.licdn.com/dms/image/D5612AQFFvzq6dYiveA/article-cover_image-shrink_720_1280/0/1697744658455?e=2147483647&v=beta&t=7CwO5_Or2VNj6NLAcFn80gUPnKuaqPCy5jJBlUaZg-c" alt="Project 1" />
          <div className="project-details">
            <h3 >Project 1 Title</h3>
            <p>Project description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#project1">View Details</a>
          </div>
        </div>
        <div className="project-card">
          <img src="https://miro.medium.com/v2/resize:fit:1358/0*8XGQHn3JtfT-c5qw.png" alt="Project 2" />
          <div className="project-details">
            <h3>Project 2 Title</h3>
            <p>Project description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#project2">View Details</a>
          </div>
        </div>
        <div className="project-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQarlCSzF9qApeWATYy9pPPX7iylxSEOf703tx_liGFMbnib1VehpplyZYN3y-rnLl_BY&usqp=CAU" alt="Project 3" />
          <div className="project-details">
            <h3 >Project 3 Title</h3>
            <p>Project description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#project1">View Details</a>
          </div>
        </div>
        <div className="project-card">
          <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/316926182/original/8908e68d9773da2fa3c8940ade672fa46b98306b/be-a-full-stack-web-developer-for-you.jpg" alt="Project 4" />
          <div className="project-details">
            <h3>Project 4 Title</h3>
            <p>Project description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#project2">View Details</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
