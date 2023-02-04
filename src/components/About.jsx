import React from "react";

const About = () => {
  return (
    <div className="container mx-auto font-semibold text-center text-xl items-center px-8">
      <h1 className="text-4xl font-normal leading-normal mt-0 mb-2 text-orange-600">
        Find Your Dream Job
      </h1>
      <p>
        This App created by Kubilay Ture by using React. useState is used for
        state management. For API call, local JSON file is used because of
        limited API call on indeed API so the search results may be very
        limited. TailwindCSS and React Icons is used for the styling. The
        purpose of the app is search jobs based on job title and location that
        typed. The search results can be seen in results section and by clicking
        the "Favorites" icon, the job can be added to Favorite Jobs section and
        can be removed from the Favorite Jobs section by clicking unsave icon If
        there is an error by calling api, error will show up.
      </p>
    </div>
  );
};

export default About;
