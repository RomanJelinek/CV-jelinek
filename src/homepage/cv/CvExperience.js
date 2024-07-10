import React from 'react';

const CvExperience = (props) => {
  return (
    <div className="cv-experience-container">
      <h2
        style={{
          color:
            props.selectedColor === 'white' ? 'black' : props.selectedColor,
        }}
      >
        Experience
      </h2>
      <h3>usetreno.cz</h3>
      <p>
        I&nbsp;have been working at this company for about two and a&nbsp;half
        years. They were the first to give me a&nbsp;chance after I&nbsp;learned
        to code. In my role, I&nbsp;primarily work as a&nbsp;front-end developer
        with some overlap in backend development, thanks to the Next.js
        framework. Additionally, I&nbsp;have experience using PHP, databases, or
        CMS platforms like Strapi. Occasionally, I&nbsp;also work with Docker
        and have learned some basics of GitLab CI/CD.
      </p>
      <h3>nasemista.cz</h3>
      <p>
        This is a&nbsp;web app that wasn't originally created by me, but
        I&nbsp;gradually took over its development. The app is written in
        Laravel with React for the front-end. I&nbsp;maintained it, expanded its
        features, added new functionalities, created an ordering system,
        implemented cron jobs for payment matching, refactored the code,
        redesigned the interface, and more. Additionally, I&nbsp;created
        https://www.starly.cz/, which aligned well with the project since both
        are in the printing business. While I&nbsp;would approach the
        development completely differently and more safely now, there are no
        plans for a&nbsp;refactor since we are about to sell both projects.
      </p>
      <h3>jezeckovo.cz </h3>
      <p>
        This project is built using Next.js and leverages the app router for
        navigation. The database connection is handled through Prisma, with
        MySQL as the database. Key functionalities include user registration,
        user login, email sending, and the ability to add and edit products. The
        project also utilizes Tailwind CSS and NextUI for styling and UI
        components.
      </p>
      <p>
        You can find additional projects on my GitHub. While most of these
        projects are older and may not fully represent my current skills, they
        showcase my progress over time. I&nbsp;keep them as a&nbsp;reminder of
        my journey and growth.
        <br />
        <a
          style={{ margin: 0 }}
          href="https://github.com/RomanJelinek?tab=repositories"
        >
          github.com/RomanJelinek
        </a>
      </p>
    </div>
  );
};

export default CvExperience;
