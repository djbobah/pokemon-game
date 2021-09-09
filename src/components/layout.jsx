import React from "react";
import s from "./layout.module.css";
const Layout = (props) => {
  console.log("props", props.urlBg);
  return (
    <section
      className={s.root}
      style={{
        backgroundColor: `${props.colorBg}`,
        backgroundImage: `url(${props.urlBg})`,
      }}
    >
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{props.title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>
            <p>{props.desc}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
