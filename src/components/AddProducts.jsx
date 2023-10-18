
const AddProducts = () => {
    const handleAddCoffee = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee = {name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee);



    }
    return (
        <div className="p-24 bg-[#F4F3F0]">
            <h2 className="text-3xl font-semibold">Add a Products</h2>

            <form onSubmit={handleAddCoffee} className="space-y-4 mt-5">
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Name" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="quantity" name="quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee supplier" name="supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee taste" name="taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee category" name="category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee details" name="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div >
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter photo URL" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="pt-5">
                    <input type="submit" value="Add Car" className="text-white btn btn-block bg-gray-500 hover:bg-gray-600"/>
                </div>

            </form>
        </div>
    );
};

export default AddProducts;