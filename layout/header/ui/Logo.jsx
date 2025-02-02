import { MSG } from "@/constants/MSG";
import Link from "next/link";

const Logo = () => {
    return(
        <Link 
            href={"/"}
            className="min-w-fit text-5xl font-bold"
        >
            {MSG.LAYOUT.HEADER.LOGO}
        </Link>
    );
};

export default Logo;