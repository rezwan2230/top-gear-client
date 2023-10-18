
const Brand = ({ brand }) => {
    const { img } = brand
    return (
        <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={img}
                    alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                    <p className="mb-4 text-xs text-gray-100 text-left-top">Product Manager</p>

                    <div className="flex items-center justify-center space-x-3">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;