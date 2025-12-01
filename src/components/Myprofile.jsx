import ProfileImg from "./../assets/My_profile.png";

export default function Myprofile() {
  return (
    <>
      <section className="profile" id="wrapper">
        <div className="profile-top" id="profile">
          <h2 className="title">Profile</h2>
          <p className="text">ー私についてー</p>
        </div>

        <div className="profile-area">
          <img src={ProfileImg} alt="プロフィール画像" />

          <div className="profile-txt">
            <h3>一歩ずつ、確実に積み上げること</h3>
            <br />
            <p>
              伊藤和輝と申します。
              今年7月より、Webコーディングとフロントエンド開発を専門とする職業訓練校にて、就職後の即戦力となるためのスキルを集中して習得中です。
              私の強みは、
              <strong>目標達成に向けた粘り強い継続力です。</strong>
              この力は、趣味で始めたランニングで1800kmを走り続けた経験で培われました。
            </p>
            <br />
            <p>
              職業訓練校では HTML・CSS・JavaScript・React を学び、
              デザインカンプ通りのコーディングや
              基本的なレイアウト実装ができるようになりました。
            </p>

            <p>
              自宅学習では code.jump を使い、 JavaScript を繰り返し練習。
              pokeAPI を使ったおみくじアプリなど、
              小さな機能を理解し」作れるようになりました。
            </p>
            <p>
              これらの経験から、
              <strong>
                継続して学び続ける力 が自分の強みだと感じています。
              </strong>
            </p>
            <br />
            <p>
              今後は React を中心に技術を磨き、 使いやすく分かりやすいUIを作れる
              フロントエンドエンジニアを目指します。
            </p>
            <br />
          </div>
        </div>
      </section>
    </>
  );
}
