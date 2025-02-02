import { MSG } from "@/constants/MSG";
import Link from "next/link";

const Navigation = () => {
    return(
        <nav className="w-full flex gap-8">
            {MSG.LAYOUT.HEADER.NAVIGATION.map((menu, i) => (
                <Link href={menu.linkUrl}
                    className="text-2xl font-semibold opacity-70"
                    key={i}
                >
                    {menu.linkName}
                </Link>
            ))}
        </nav>
    );
};

export default Navigation;