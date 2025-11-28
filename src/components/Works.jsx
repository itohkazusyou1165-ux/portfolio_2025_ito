import React from "react";
import worksData from "./worksData"; //さっき作ったデータを読み込む

export default function Works() {
  return (
    <section className="Works" id="wrapper">
      <div className="works-top">
        <h2 className="title">Works</h2>
        <p className="text">ー作品一覧</p>
      </div>

      <div className="box-area">
        {/* データを使って繰り返し表示（map）する形に修正 */}
        {worksData.map((item, index) => (
          <div className="box" key={index}>
            <figure className="box__image">
              <img src={item.imageUrl} alt={item.title} />
            </figure>
            <div className="box__body">
              <h2>{item.title}</h2>
              <p className="box-text">
                {item.text}
              </p>
              <div className="box-link">
                <p className="box_txt">{item.skill}</p>
                <p>
                  <a href="#">Site-Link</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
