import FooterImg from "./../assets/react.svg";
export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 45,
        border: "1px solid #black",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <img
          src={FooterImg}
          alt=""
          style={{
            width: 100,
          }}
        />
        <p>〒6666-66666</p>
        <p>住所が入ります</p>
        <p>tel:000-0000-000</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <h3>私たちについて</h3>
        <p>▶️テキストテキスト</p>
        <p>▶️テキストテキスト</p>
        <p>▶️テキストテキスト</p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <h3>サービス内容</h3>
        <p>▶️テキストテキスト</p>
        <p>▶️テキストテキスト</p>
        <p>▶️テキストテキスト</p>
      </div>
    </footer>
  );
}
