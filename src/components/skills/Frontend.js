const frontendSkills = [
  { name: "HTML / Responsive", subtitle: "20+ Projects" },
  { name: "CSS / Animation", subtitle: "20+ Projects" },
  { name: "React / Next.js", subtitle: "5 Projects" },
  { name: "TypeScript", subtitle: "3 Projects" },
  {
    name: "State Management",
    subtitle: ["Zustand, Redux", "React Query"],
  },
  {
    name: "CSS-in-JS",
    subtitle: ["styled-components", "emotion/styled"],
  },
  {
    name: "Mobile / Webview",
    subtitle: ["React Native", "Troubleshooting"],
  },
  { name: "UI Frameworks", subtitle: ["Tailwind CSS", "shadcn/ui"] },
];

const frontendUtilize = [
  "웹 표준/웹 접근성을 준수한 시맨틱 마크업 및 반응형 UI 구현",
  "Next.js를 활용한 SSR/SSG 적용 및 웹 성능 최적화",
  "TypeScript를 도입하여 정적 타입 체크 및 코드 안정성 확보",
  "Zustand, React Query를 활용한 효율적인 전역 상태 및 서버 데이터 관리",
  "Tailwind CSS 및 UI 프레임워크를 활용한 일관된 디자인 시스템 구축",
  "React Native 환경의 웹뷰 연동 및 모바일 디버깅/트러블슈팅",
];

const Frontend = () => {
  return (
    <div className="skills__content">
      <div>
        <i className="uil uil-web-grid skills__title-icon" />
        <h3 className="skills__title">
          Frontend
          <br /> Development
        </h3>
      </div>

      <div className="skills__utilize">
        <ul className="skills__utilize-list grid">
          {frontendUtilize.map((text, i) => (
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
          {frontendSkills.map((skill, index) => (
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

export default Frontend;
