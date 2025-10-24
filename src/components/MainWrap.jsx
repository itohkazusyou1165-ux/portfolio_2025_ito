import Firstview from "./../assets/Firstview.jpg";
export default function First() {
  return (
    <main>
      <img
        src={Firstview}
        alt="ファーストビュー"
        style={{
          width: 1000,
          height: 600,
          objectFit: "cover",
        }}
      />
    </main>
  );
}
