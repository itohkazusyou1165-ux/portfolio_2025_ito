import Firstview from "./../assets/First-view.png";
export default function FirstView() {
  return (
    <main>
      <section className="view" id="wrapper">
        <div className="view-text">
          <h2>
            ITO <br />
            PORTFORIO
          </h2>
          <p>~ご覧いただきありがとうございます~</p>
          <p>コーダー志望の伊藤和輝のポートフォリオです。</p>
        </div>

        <firure className="view-img">
          <img src={Firstview} alt="ファーストビュー" style={{ width: 1000 }} />
        </firure>
      </section>
    </main>
  );
}
