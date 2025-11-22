import { 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp, 
  FaLinkedin 
} from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6"; 

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/utitbest.akpan/", Icon: FaFacebookF, hover: "hover:bg-[#1877F2]" },
  { label: "X", href: "https://x.com/utitbest", Icon: FaXTwitter, hover: "hover:bg-[#000000]" },
  { label: "Instagram", href: "https://www.instagram.com/utitbestakpan/", Icon: FaInstagram, hover: "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]" },
  { label: "WhatsApp", href: "https://wa.me/+2348063308044", Icon: FaWhatsapp, hover: "hover:bg-[#25D366]" },
  { label: "Linkedin", href: "https://www.linkedin.com/in/utitbest/", Icon: FaLinkedin, hover: "hover:bg-[#0077B5]" },
];

export default function SocialHandle({width}) {
  return (
    <div className={width}>
      <ul className="mx-auto rounded-3xl bg-black flex max-w-3xl items-center justify-center gap-5 px-4 py-3">
        {socials.map(({ label, href, Icon, hover }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 
                bg-[#0f0f0f] text-white transition-all duration-300 ease-out 
                hover:scale-105 hover:border-transparent ${hover}`}
            >
              <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
