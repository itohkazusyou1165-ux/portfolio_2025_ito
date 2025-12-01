import Htmllogo from "./../assets/html5-emblem-orange-shield-and-white-text-vector.jpg";
import CSSlogo from "./../assets/CSS-Logo.png";
import Javascriptlogo from "./../assets/js_logo.png";
import Githublogo from "./../assets/github.jpg";
import Figmalogo from "./../assets/figma-app-icon-free-vector.jpg";
export default function MySkill() {
  return (
    <section className="Myskill" id="wrapper">
      <div className="skill-top" id="skill">
        <h2 className="title">Web skill</h2>
        <p className="text">ーできることー</p>
      </div>

      <div className="skill-container">
        <div className="skill-image">
          <img src={Htmllogo} alt="HTML" />
          <img src={CSSlogo} alt="CSS" />
          <img src={Javascriptlogo} alt="JavaScript" />
        </div>

        <div className="skill-images">
          <img src={Githublogo} alt="GitHub" />
          <img src={Figmalogo} alt="Figma" />
        </div>
      </div>

      <div className="skill-text">
        <p>
          私はフロントエンドを中心に、HTML・CSS
          を使ったデザインカンプ通りのコーディングや、 基本的な
          レスポンシブ対応を行うことができます。
        </p>
        <br />
        <p>
          JavaScript では DOM 操作やイベント処理、API
          を使用したデータ取得まで一通り実装したり、 実際に pokeAPI
          を使ったおみくじアプリも制作しました。
        </p>
        <br />
        <p>
          React ではコンポーネント分割や state / props を使った基本的な
          ところから応用までを勉強中です。
        </p>{" "}
        <br />
        <p>
          これまでに 0 からデザインした Web
          サイトの制作や、職業訓練校での個人・チーム制作
          にも取り組み、VSCode・Git・GitHub といった開発ツールを使用しながら、
          自宅でも書籍を使用したり、Udemy
          で勉強を毎日行い学習と実装を続けています。
          自走して学習と実装を続けています。
        </p>
      </div>
    </section>
  );
}
