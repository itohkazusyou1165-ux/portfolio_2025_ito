import Photo01 from "./../assets/Summer.Vacation.jpg";
import Photo02 from "./../assets/PokeAPI.png";
import Photo03 from "./../assets/Lp.png";

export default function CardBox() {
  return (
    <section className="Works" id="wrapper">
      <div className="works-top">
        <h2 className="title">Works</h2>
        <p className="text">ー作品一覧</p>
      </div>

      <div className="box-area">
        <div className="box">
          <figure className="box__image">
            <img src={Photo01} alt="作品1" />
          </figure>
          <div className="box__body">
            <h2>休み課題</h2>
            <p className="box-text">
              flexboxを使用
              <br />
              hamburgerメニュー導入
            </p>
            <div className="box-link">
              <p className="box_txt">html/css</p>
              <p>
                <a href="https://itohkazusyou1165-ux.github.io/summer_vacation_blog/">
                  Site-Link
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="box">
          <figure className="box__image">
            <img src={Photo02} alt="作品2" />
          </figure>
          <div className="box__body">
            <h2>個人制作</h2>
            <p className="box-text">
              API取得
              <br />
              おみくじランダム機能
            </p>
            <div className="box-link">
              <p className="box_txt">html/css/Javascript</p>
              <p>
                <a href="https://itohkazusyou1165-ux.github.io/poke_api/">
                  Site-Link
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="box">
          <figure className="box__image">
            <img src={Photo03} alt="作品3" />
          </figure>
          <div className="box__body">
            <h2>個人制作</h2>

            <p className="box-text">
              JS機能搭載 <br />
              レスポンシブ対応
            </p>
            <div className="box-link">
              <p className="box_txt">html/css</p>
              <p>
                <a href="https://itohkazusyou1165-ux.github.io/2025_10_17fictional_LP-3/">
                  Site-Link
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
