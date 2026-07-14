import "./experience.css";

const experienceData = [
  {
    id: 1,
    title: "OTI",
    subtitle: "Frontend & Backend / 대리",
    calendar: "2020.01-2022.11",
  },
  {
    id: 2,
    title: "GKL",
    subtitle: "Frontend & Backend / 프리랜서",
    calendar: "2018.07-2018.08",
  },
  {
    id: 3,
    title: "생각더하기느낌",
    subtitle: "Frontend & Backend / 대리",
    calendar: "2017.05-2017.10",
  },
  {
    id: 4,
    title: "더뷰컨설팅",
    subtitle: "Frontend & Backend / 사원",
    calendar: "2016.05-2017.03",
  },
  {
    id: 5,
    title: "지케이메디컬",
    subtitle: "Frontend & Backend / 사원",
    calendar: "2015.09 - 2016.03",
  },
];

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="experience__container container">
        <div className="experience__content">
          {experienceData.map((item, index) => {
            return (
              <div className="experience__data" key={item.id}>
                {index % 2 !== 0 ? (
                  <>
                    <div></div>

                    <div>
                      <span className="experience__rounder"></span>
                      <span className="experience__line"></span>
                    </div>

                    <div>
                      <h3 className="experience__title">{item.title}</h3>
                      <span className="experience__subtitle">
                        {item.subtitle}
                      </span>
                      <div className="experience__calender">
                        <i className="uil uil-calendar-alt" /> {item.calendar}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h3 className="experience__title">{item.title}</h3>
                      <span className="experience__subtitle">
                        {item.subtitle}
                      </span>
                      <div className="experience__calender">
                        <i className="uil uil-calendar-alt" /> {item.calendar}
                      </div>
                    </div>

                    <div>
                      <span className="experience__rounder"></span>
                      <span className="experience__line"></span>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
