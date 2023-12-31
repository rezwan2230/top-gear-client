import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {

    const product = useLoaderData()
    const { _id, name, type, price, rating, photo, brandName, description } = product

    const navigate = useNavigate()

    const handleUpdate = event => {
        
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const type = form.type.value
        const price = form.price.value
        const rating = form.rating.value
        const photo = form.photo.value
        const brandName = form.brandname.value
        const description = form.message.value

        const updateProduct = { name, type, price, rating, photo,  brandName, description}
        console.log(updateProduct);

        fetch(`https://top-gear-99euiwgyy-rezwanul-haques-projects.vercel.app/details/${_id}`,{
            method: "PUT",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updateProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                form.reset()
                navigate('/')
            }
        })
    }

    return (
        <div className="w-full absolute -mt-[88px] h-screen font-sans bg-cover" style={{backgroundImage : 'url(https://i.ibb.co/1Myc997/pexels-kamshotthat-7465827.jpg)', backgroundSize:'fit', backgroundPosition: 'center', objectFit:"top left" }}>
            
        <section className="container p-6 mx-auto glass rounded-md shadow-md mt-36" >
            <h2 className="text-4xl font-semibold  capitalize text-white text-center mb-10">Update Product</h2>
            <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 px-10 ">
                    <div>
                        <label className="text-white">Name</label>
                        <input type="text" name="name" placeholder="product name" defaultValue={name} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                    </div>

                    <div>
                        <label className="text-white" >Type</label>
                        <input id="password" type="text" name="type" placeholder="product type"  defaultValue={type} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                    </div>

                    <div>
                        <label className="text-white">Price</label>
                        <input id="passwordConfirmation" type="number" name="price" placeholder="product price"  defaultValue={price} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                    </div>

                    <div>
                        <label className="text-white">Rating</label>
                        <input id="passwordConfirmation" type="number" name="rating" placeholder="product rating"  defaultValue={rating} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                    </div>

                    <div>
                        <label className="text-white">Photo URL</label>
                        <input id="passwordConfirmation" type="text" name="photo" placeholder="product img url"  defaultValue={photo} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></input>
                    </div>

                    <div>
                        <label className="text-white"  defaultValue={brandName}>Brand Name</label>
                        <br></br>
                        <select name="brandname" id="" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required>
                            <option value="Lamborghini">Lamborghini</option>
                            <option value="BMD">BMD</option>
                            <option value="Toyota">Toyota</option>
                            <option value="AUDI">AUDI</option>
                            <option value="Mercedes-Benz">Mercedes-Benz</option>
                            <option value="Nissan">Nissan</option>
                        </select>
                    </div>
                </div>
                <div className="relative mb-4 mt-5 px-10 ">
                    <label className="leading-7 text-white">Short Description</label>
                    <textarea id="message" name="message"  defaultValue={description} className="mt-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
                </div>
                <div className="flex justify-end mt-6 mb-10">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update Product</button>
                </div>
            </form>
        </section>
    </div>


    );
};

export default Update;