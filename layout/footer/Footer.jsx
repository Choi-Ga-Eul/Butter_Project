import Logo from "./ui/Logo";
import MetaData from "./ui/MetaData";

const Footer = () => {
    return(
        <footer className="w-screen max-w-full py-8 px-4 flex items-center gap-8 border-t-2">
            <Logo />

            <MetaData />
        </footer>
    );
};

export default Footer;