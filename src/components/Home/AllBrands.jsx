import { useLoaderData } from "react-router-dom";
import Brand from "../Brand";

const AllBrands = () => {
    const brands = useLoaderData()
    return (
        <div className="text-center font-bold mt-[320px] md:mt-[390px] lg:mt-[650px]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">All Brands</h2>
            <hr className="w-20 md:w-48 mx-auto mt-4 border-[1px] border-black" />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mx-3 md:mx-20 my-10">
                {
                    brands.map(brand =><Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>
        </div>
    );
};
export default AllBrands;