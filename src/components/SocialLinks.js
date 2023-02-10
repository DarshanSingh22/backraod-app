import { socialLinks } from "./data";
const SocialLinks = ({ parentClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <li id={id}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="nav-icon"
            >
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialLinks;
