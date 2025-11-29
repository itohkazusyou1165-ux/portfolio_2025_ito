import ProfileImg from "./../assets/First-view.png";

export default function Myprofile() {
  return (
    <section className="profile" id="wrapper">
      <div className="profile-top" id="profile">
        <h2 className="title">Profile</h2>
        <p className="text">ー私についてー</p>
      </div>

      <div className="profile-area">
        <img src={ProfileImg} alt="プロフィール画像" />

        <div className="profile-txt">
          <h3>
            1800kmで培った「粘り強さ」を、
            <br />
            コードの正確性と安定性に注ぎます。
          </h3>
          <br />
          <p>
            伊藤和輝と申します。
            今年7月より、Webコーディングとフロントエンド開発を専門とする職業訓練校にて、就職後の即戦力となるためのスキルを集中して習得中です。
            私の強みは、
            <strong>目標達成に向けた粘り強い継続力です。</strong>
            この力は、ランニングで1800kmを走り続けた経験で培われました。
            <br />
          </p>
          <br />
          <p>
            Web・フロントエンド開発の訓練校にて、即戦力となるべく技術の習得に励んでいます。
            1800kmを走り抜いた粘り強さを活かし、一歩一歩、正確でメンテナンス性の高い実装を積み重ねます。
            変化の速い業界で常に学び続け、確かな品質で貴社に貢献したいと考えております。
          </p>
          <br />
        </div>
      </div>
    </section>
  );
}
