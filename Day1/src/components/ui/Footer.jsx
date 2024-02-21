import "../../assets/css/Footer.css";

function Footer() {
  return (
    <div>
      <section> </section>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>Gift Wonders gifts </h3>
          <p className="footer-links">
            <a href="#" className="link-1">blog</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
            <a href="#">Faq</a>
            <a href="#">Contact</a>
          </p>
          <p className="footer-company-name">GiftWonders © 2024</p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fas fa-map-marker"></i>
            <p><span></span>Coimbatore,India</p>
          </div>
          <div>
            <i className="fas fa-phone"></i>
            <p>+91-9443335826</p>
          </div>
          <div>
            <i className="fas fa-envelope"></i>
            <p><a href="mailto:support@company.com">GiftWonders@company.com</a></p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            through our websites you can make personalised gifts and make your loved ones happy
          </p>
          <div className="footer-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
