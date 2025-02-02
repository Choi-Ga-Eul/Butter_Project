import { MSG } from "@/constants/MSG";

const MetaData = () => {
    return(
        <div className="w-full flex flex-col justify-center gap-2">
            <span 
                className="text-lg opacity-50"
                
                >
                {MSG.LAYOUT.FOOTER.METADATA.ADDRESS}
            </span>
            
            <span
                className="text-lg opacity-50"
                
            >
                {MSG.LAYOUT.FOOTER.METADATA.COPYRIGHT}
            </span>
        </div>
    );
};

export default MetaData;