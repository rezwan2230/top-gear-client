import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SingleProduct = ({ product }) => {
    const { _id, name, type, price, rating, photo, brandName, description } = product

    const handleAddToCart = ()=>{
        const myCartProduct = { name, type, price, rating, photo, brandName, description}
        console.log(myCartProduct);
        
        fetch('http://localhost:5000/mycart',{
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(myCartProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                toast('Added to the my card section')
            }
        })
    }

    return (
       <div className="card card-compact w-full bg-base-100 shadow-xl pb-2">
            <figure><img className="w-full h-[280px]" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <div className="flex justify-center items-center gap-2">
                        <AiOutlineStar className="text-yellow-400 text-2xl"></AiOutlineStar>
                        <p className="text-xl font-semibold">{rating}.0</p>
                    </div>
                </div>
                <div className="text-base">
                    {
                        <p>{description.slice(0, 200)} <Link to={`/details/${_id}`}><span className="text-blue-700 underline ml-1 font-semibold">Read More...</span></Link></p>
                    }
                </div>

                <div className="flex items-center justify-between text-gray-600 my-3">
                    <div className="text-[17px] font-semibold">
                        <p>Price : {price}</p>
                    </div>
                    <div className="text-[17px] font-semibold">
                        <p>Brand Name : {brandName}</p>
                    </div>
                </div>

                <div className="card-actions  w-full">
                    <button onClick={()=>handleAddToCart()} className="btn btn-primary w-full">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;

