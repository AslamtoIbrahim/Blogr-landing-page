import "./Footer.css";
import logo from "../../../images/logo.svg";
function Footer() {
  return (
    <footer>
      <Logo />
      <Contacts
        title="Product"
        headings={[
          "Overview",
          "Pricing",
          "Marketplace",
          "Features",
          "Integrations",
        ]}
      />
      <Contacts
        title="Company"
        headings={["About", "Team", "Blog", "Careers"]}
      />
      <Contacts
        title="Connect"
        headings={["Contact", "Newsletter", "LinkedIn"]}
      />
    </footer>
  );
}

export default Footer;

function Contacts({ title, headings }) {
  return (
    <div className="footer-block">
      <p className="footer-title">{title}</p>
      <div className="footer-headings">
        {headings.map((heading, index) => (
          <a href="#" key={index}>
            {heading}
          </a>
        ))}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="footer-logo">
      <img src={logo} alt="lgog" />
    </div>
  );
}
