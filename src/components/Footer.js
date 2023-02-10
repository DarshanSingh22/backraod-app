import SocialLinks from "./SocialLinks";
import PageLinks from "./PageLinks";
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass={"footer-links"} childClass={"footer-link"} />
      <SocialLinks parentClass={"footer-icons"} />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
