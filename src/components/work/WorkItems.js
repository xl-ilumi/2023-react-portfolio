import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <h3 className="work__title">{item.title}</h3>
      <div className="work__date">
        <i class="uil uil-calendar-alt" /> {item.date} {item.calculator}
      </div>
      <div className="work__calculator"></div>
      <div className="work__data">
        <span className="work__data-title">URL</span>
        {item.url && item.url.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {item.url.map((u, idx) => (
              <div key={idx} style={{ wordBreak: "break-all" }}>
                {u.link ? (
                  <a
                    href={u.link}
                    target="_blank"
                    rel="noreferrer"
                    className="work__link"
                  >
                    {u.name}
                  </a>
                ) : (
                  <span>{u.name}</span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <span>-</span>
        )}
      </div>
      <div className="work__data">
        <span className="work__data-title">Position</span>
        {item.position}
      </div>
      <div className="work__data">
        <span className="work__data-title">Skills</span>
        <ul className="work__skill-list">
          {item.skill.map((skill, idx) => {
            return (
              <li className="work__skill-item" key={idx}>
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="work__data">
        <span className="work__data-title">Description</span>
        {item.description}
      </div>
    </div>
  );
};

export default WorkItems;
