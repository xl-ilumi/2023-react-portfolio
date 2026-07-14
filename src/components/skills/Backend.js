const backendSkills = [
  { name: "JAVA", subtitle: "2 Projects" },
  { name: "PHP", subtitle: "20+ Projects" },
  { name: "Node.js", subtitle: "2 Projects" },
  { name: "Oracle", subtitle: "2 Projects" },
  { name: "MySQL", subtitle: "20+ Projects" },
  { name: "Firebase / Supabase", subtitle: "2 Projects" },
];

const backendUtilize = [
  "Java(전자정부프레임워크) 기반 백엔드 시스템 구축",
  "그누보드(PHP)를 활용한 웹사이트 제작 및 솔루션 커스터마이징",
  "Node.js를 활용한 RESTful API 설계 및 개발",
  "Oracle, MySQL 등 RDBMS 데이터베이스 설계 및 쿼리 튜닝",
  "Firebase, Supabase를 활용한 서버리스(Serverless) 백엔드 구축",
  "프론트엔드와의 원활한 통신을 위한 API 연동 및 서버 환경 구축",
];

const Backend = () => {
  return (
    <div className="skills__content">
      <div>
        <i className="uil uil-arrow skills__title-icon" />
        <h3 className="skills__title">
          Backend
          <br /> Development
        </h3>
      </div>

      <div className="skills__utilize">
        <ul className="skills__utilize-list grid">
          {backendUtilize.map((text, i) => (
            <li className="skills__utilize-item" key={i}>
              <i className="uil uil-check-circle skills__utilize-icon" />
              <p className="skills__utilize-info">{text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="skills__box">
        <h4 className="skills__utilize-title">Skills</h4>
        <div className="skills__group">
          {backendSkills.map((skill, index) => (
            <div className="skills__data" key={index}>
              <i className="bx bx-badge-check" />
              <div>
                <h3 className="skills__name">{skill.name}</h3>
                <div className="skills__level">
                  {Array.isArray(skill.subtitle) ? (
                    skill.subtitle.map((sub, i) => (
                      <span
                        key={i}
                        style={{
                          display: "block",
                          marginTop: i > 0 ? "0.2rem" : "0",
                        }}
                      >
                        {sub}
                      </span>
                    ))
                  ) : (
                    <span>{skill.subtitle}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backend;
