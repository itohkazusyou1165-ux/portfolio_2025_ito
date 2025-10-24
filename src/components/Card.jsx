import Photo01 from "./../assets/Shibuya.jpg";
import Photo02 from "./../assets/TakeshitaStreet.jpg";
import Photo03 from "./../assets/Tokyotower.jpg";

export default function CardBox() {
  return (
    <section>
      <div>
        <h2
          style={{
            textAlign: "center",
            padding: 45,
            fontFamily: "Yumincho",
          }}
        >
          カード欄
        </h2>
      </div>
      <div
        className="Card"
        style={{
          display: "flex",
          gap: 25,
          justifyContent: "space-around",
          backgroundColor: "#F5F5DC",
        }}
      >
        <div style={{}}>
          <img
            src={Photo01}
            alt="写真1"
            style={{
              width: 300,
              height: 450,
              paddingTop: 25,
              objectFit: "cover",
            }}
          />
          <h3
            style={{
              fontFamily: "Yumincho",
              padding: 15,
            }}
          >
            テキスト
          </h3>
          <p
            style={{
              padding: 15,
            }}
          >
            テキストテキストテキストテキスト
          </p>
        </div>
        <div style={{}}>
          <img
            src={Photo02}
            alt="写真1"
            style={{
              width: 300,
              height: 450,
              paddingTop: 25,
              objectFit: "cover",
            }}
          />
          <h3
            style={{
              fontFamily: "Yumincho",
              padding: 15,
            }}
          >
            テキスト
          </h3>
          <p
            style={{
              padding: 15,
            }}
          >
            テキストテキストテキストテキスト
          </p>
        </div>
        <div style={{}}>
          <img
            src={Photo03}
            alt="写真1"
            style={{
              width: 300,
              height: 450,
              paddingTop: 25,
              objectFit: "cover",
            }}
          />
          <h3
            style={{
              fontFamily: "Yumincho",
              padding: 15,
            }}
          >
            テキスト
          </h3>
          <p
            style={{
              padding: 15,
            }}
          >
            テキストテキスト
          </p>
        </div>
      </div>
    </section>
  );
}
