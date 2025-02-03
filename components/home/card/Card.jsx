const Card = ({productName, imgUrl, alt}) => {
    return(
        <section className="w-fit m-auto p-4 flex flex-col justify-center items-center gap-4">
            <img src={imgUrl} alt={alt} 
                className="w-60 h-72 object-cover"
            />
            
            <span
                className="text-xl font-semibold"
            >
                {productName}
            </span>
        </section>
    );
};

export default Card;