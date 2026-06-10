import "./Footer.css";
import "./Footer.css";

function Footer({ theme }) {
  return (
    <footer className={`footer ${theme}`}>


      <div className="footer-section">
        <h2>SkillDo</h2>
        <p>Learn. Build. Grow.</p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li>Home</li>
          <li>Courses</li>
          <li>Blogs</li>
          <li>Quiz</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact</h3>
        <p>support@skilldo.com</p>
        <p>Mumbai, India</p>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SkillDo. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;