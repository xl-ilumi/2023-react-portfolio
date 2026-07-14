const toolSkills = [
  { name: "AI Skills", subtitle: ["ChatGPT", "Gemini", "Genspark"] },
  {
    name: "AI Dev Skills",
    subtitle: ["Claude Code", "Codex", "Antigravity", "Cursor"],
  },
  { name: "IDEs", subtitle: ["VS Code", "Eclipse"] },
  { name: "Design Tools", subtitle: ["Figma", "Photoshop"] },
  { name: "Version Control", subtitle: ["Git", "GitHub"] },
  { name: "Hosting & Analytics", subtitle: ["Cafe24", "Google Analytics"] },
];

const toolsUtilize = [
  "클라이언트 요구사항 분석 및 이를 바탕으로 한 프로젝트 기획·아키텍처 설계",
  "ChatGPT, Gemini, Genspark를 활용한 빠른 기술 리서치 및 문제 해결 아이디어 도출",
  "Claude Code, Codex 등 AI 기술을 적극 도입하여 개발 생산성 및 코드 품질 극대화",
  "Figma 기반의 직관적인 UI/UX 설계와 Git을 활용한 체계적인 버전 관리 및 협업",
  "검색엔진 최적화(SEO) 및 Google Analytics를 연계한 웹서비스 운영 및 데이터 분석",
];

const Tools = () => {
  return (
    <div className="skills__content">
      <div>
        <i className="uil uil-edit skills__title-icon" />
        <h3 className="skills__title">
          Planning and
          <br /> Management
        </h3>
      </div>

      <div className="skills__utilize">
        <ul className="skills__utilize-list grid">
          {toolsUtilize.map((text, i) => (
            <li className="skills__utilize-item" key={i}>
              <i className="uil uil-check-circle skills__utilize-icon" />
              <p className="skills__utilize-info">{text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="skills__box">
        <h4 className="skills__utilize-title">Tools</h4>
        <div className="skills__group">
          {toolSkills.map((skill, index) => (
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

export default Tools;
