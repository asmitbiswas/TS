type CarProps = {
    name?: string;
    price?: number;
    isSpecial: boolean;
};

function CarName({
    name = "",
    price = 0,
    isSpecial,
}: CarProps) {
    return (
        <>
            <article>
                <h2>
                    {name} {isSpecial && <span>Star</span>}
                </h2>
                <p>{price}</p>
            </article>
        </>
    );
}

console.log(
    CarName({
        name: "Bmw",
        price: 125456,
        isSpecial: true,
    })
);

export default CarName;