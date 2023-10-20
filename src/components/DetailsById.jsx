import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
const DetailsById = () => {
    const product = useLoaderData();
    const {_id, name, type, price, rating, photo, brandName, description } = product

    const handleAddToCart = () => {
        const myCartProduct = { name, type, price, rating, photo, brandName, description }
        console.log(myCartProduct);

        fetch('https://top-gear-99euiwgyy-rezwanul-haques-projects.vercel.app/mycart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myCartProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast('Add this Product to My Cart page')
                }
            })
    }

    return (
        <section className="text-gray-600 mb-10">
            <div className="container mx-auto">
                <div className=" mx-auto ">
                    <img alt="ecommerce" className="w-full  lg:h-[700px] rounded -mt-[89px]" src={photo} />
                    <div className="w-full px-3 lg:px-0 lg:py-6 mt-6 lg:mt-0 ">
                        <h2 className="md:text-lg py-2 title-font text-gray-500 tracking-widest">BRAND NAME : {brandName}</h2>
                        
                        <div className="flex items-center justify-between">
                            <h1 className="text-gray-900 text-2xl md:text-3xl title-font font-medium mb-1 my-2">{name}</h1>
                            <Link to={`/update/${_id}`}><button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Edit</button></Link>
                        </div>

                        <div className="flex mb-4 mt-2">
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-gray-600 ml-3 my-2"><span>{rating}</span> Reviews</span>
                            </span>
                        </div>
                        <p className="leading-relaxed">{description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">$ {price}</span>
                            <button onClick={() => handleAddToCart()} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailsById;