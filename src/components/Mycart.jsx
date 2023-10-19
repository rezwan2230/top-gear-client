import { useLoaderData } from "react-router-dom";
import MyCartDesign from "./MycartDesign";
import { useState } from "react";

const Mycart = () => {
    const loadedProdusts = useLoaderData()
    const [products, setProducts] = useState(loadedProdusts)

    return (
        <div className="-mt-[88px] h-[100vh] bg-black " style={{backgroundImage : 'url(https://i.ibb.co/JQFWNNL/josh-berquist-4s-Wbz-H5fp8-unsplash-1.jpg)', backgroundSize:'cover', objectFit:"top left"}}>
            <div className="grid grid-cols-2 container mx-auto gap-5 pt-32 pb-20">
                {
                    products.map(product=><MyCartDesign key={product._d} product={product} products={products} setProducts={setProducts}></MyCartDesign>)
                }
            </div>
        </div>
    );
};

export default Mycart;
