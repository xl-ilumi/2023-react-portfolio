import "./home.css";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#skills" className="home__scroll-button button--flex">
        <span className="home__scroll-wheel"></span>
        <span className="home__scroll-name">Scroll Down</span>
        <i className="uil uil-arrow-down home__scroll-arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
