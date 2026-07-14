import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about_subtitle">10 Years Working</span>
      </div>

      <div className="about__box">
        <i className="bx bx-male about__icon" />
        <h3 className="about__title">Age</h3>
        <span className="about_subtitle">35, 1991.10.21</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon" />
        <h3 className="about__title">Completed</h3>
        <span className="about_subtitle">30 + Projects</span>
      </div>
    </div>
  );
};

export default Info;
