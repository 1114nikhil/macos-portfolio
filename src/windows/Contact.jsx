import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact</h2>
      </div>
      <div className="p-5 space-y-2 items-center flex flex-col">
        <img
          src="/images/me.jpeg"
          alt="me"
          className="w-20   rounded-full"
        />
        <h3>Let's Connect</h3>
        <p>I enjoy turning complex problems into scalable full-stack solutions that deliver real business value.
Let’s connect if you’re building something impactful.</p>
        <p>nikhiltk1114@gmail.com</p>
        <ul className="flex gap-2 w-full p-0 m-0 list-none">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;