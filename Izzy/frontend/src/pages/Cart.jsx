const Cart = () => {

    return(
        
        <div className="flex justify-center items-center h-screen" style={{backgroundColor: 'rgba(239, 242, 251, 1)'}}>
            <div className="p-5 m-10 w-full bg-gray-50 ">
                <h1 className="font-bold" style={{fontSize: '50px'}}>Keranjang</h1>
                <hr className="mt-4 px-5"/>
                <div className="mx-auto w-3/4 flex items-center shadow-sm border rounded-xl border-gray-300 p-2 m-5">
                    <img src="No-image-found.jpg" alt="" className="border border-gray-500 rounded-xl w-60 m-2"/>
                </div>
                <div className="mx-auto w-3/4 flex items-center shadow-sm border rounded-xl border-gray-300 p-2 m-5">
                    <img src="No-image-found.jpg" alt="" className="border border-gray-500 rounded-xl w-60 m-2"/>
                </div>
                <hr className="mt-4 px-5"/>
                <div className="container mx-auto flex justify-end items-center m-2">
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-1 md:gap-2 space-x-2">
                        <div>
                            <h1 className="font-semibold">Total Belanja</h1>
                        </div>
                        <div className="text-end">
                            <h1 className="font-semibold">Rp. 0</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Cart