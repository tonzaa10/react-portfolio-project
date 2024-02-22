import React from "react";
import style from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={style.testi_con}>
      <h3 className={style.testi_title}>Testimonials</h3>
      <div className={style.testi_list}>
        <div className={style.testi_item}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <img
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h4>Jhon Doe</h4>
          <p className={style.bio}>Web Developer</p>
        </div>
        <div className={style.testi_item}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <img
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h4>Jhon Doe</h4>
          <p className={style.bio}>Web Developer</p>
        </div>
        <div className={style.testi_item}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <img
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h4>Jhon Doe</h4>
          <p className={style.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
