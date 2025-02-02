import Logo from "./ui/Logo";
import Navigation from "./ui/navigation/Navigation";

const Header = () => {
    return(
        <header 
            className="w-screen max-w-full py-8 px-4 flex justify-center items-center gap-10 border-b-2"

        >
            <Logo />
            <Navigation />
        </header>
    );
};

export default Header;