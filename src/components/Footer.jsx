import InstagramIcon from "./../assets/icons8-インスタグラム-96.png";
import TwitterIcon from "./../assets/icons8-ツイッターx-90.png";
import ShareIcon from "./../assets/icons8-シェア-96.png";
import Gotop from "./../assets/scroll.button.png";
export default function Footer() {
  return (
    <footer>
      <div class="footer-text" id="wrapper">
        <h2>Contact</h2>
        <p>お問い合わせ</p>
        <div class="image-area">
          <img src={TwitterIcon} alt="X" width="50" />
          <img src={InstagramIcon} alt="Instagram" width="50" />
          <img src={ShareIcon} alt="Share" width="50" />
        </div>
        <div id="go-top">
          <p>Scroll</p>
          <img src={Gotop} alt="スクロールボタン" />
        </div>
      </div>
    </footer>
  );
}
