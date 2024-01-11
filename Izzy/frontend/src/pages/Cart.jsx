import { useNavigate } from "react-router-dom";
import { LoginCheck } from "../services/LoginCheck";
import { useEffect, useState } from "react";
const Cart = () => {
    const navigate = useNavigate();
    const[width, setWidth] = useState(window.innerWidth);
    let cart = [
        {
            namaproduk: 'lanchiau',
            gambar: '',
            harga: 20000,
            deskripsi: 'lanchiau produk terbaru',
            qty: 1,
            kategori: 'lanchiau',
            checked: false,
        },
        {
            namaproduk: 'lanchiau',
            gambar: '',
            harga: 20000,
            deskripsi: 'lanchiau produk terbaru',
            qty: 1,
            kategori: 'lanchiau',
            checked: false,
        }
    ]
    const [dataCart, setDataCart] = useState([
        {
        namaproduk: '',
        gambar: '',
        harga: 0,
        deskripsi: '',
        qty: 0,
        kategori: '',
        checked: false,
        }
    ]);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }
    const formattedNumber = (number) => {
        const format = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);

        return format.replace(',00', '');
    }

    const changeStok = (index, toDo) => {
        setDataCart((prevDataCart) => {
          return prevDataCart.map((item, i) => {
            if (i === index) {
              if (toDo === 'plus') {
                return { ...item, qty: item.qty + 1 };
              } else if (toDo === 'minus' && item.qty > 1) {
                return { ...item, qty: item.qty - 1 };
              }
            }
            return item;
          });
        });
    };

    const handleCheckboxChange = (index) => {
        setDataCart((prevCart) => {
            return prevCart.map((item, i) => {
                if (i === index) {
                    return { ...item, checked: !item.checked };
                }
                return item;
            });
        });
    };

    const handleCheckAll = () => {
        setDataCart((prevCart) => {
            const allChecked = prevCart.every((item) => item.checked);
    
            return prevCart.map((item) => {
                return { ...item, checked: !allChecked };
            });
        });
    };

    const TotalPrice = () => {
        let total = 0;
        dataCart.forEach((item) => {
            if(item.checked){
                if(item.qty > 0){
                total += item.harga * item.qty;
                }else if(item.qty === 0){
                    total = 0
                }else{
                    total = 0 
                }
            }
        });
        return formattedNumber(total);
    }
    

    useEffect(() => {
        document.title = 'Keranjang';
        window.addEventListener('resize', handleWindowSizeChange);
        setDataCart(cart)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    LoginCheck(navigate);

    return(
        <div style={{backgroundColor: 'rgba(239, 242, 251, 1)'}}>
            {isMobile ? (
                <>
                <div className="min-h-screen bg-gray-50" style={{marginTop: '72px'}}>
                    {dataCart.length > 0 && dataCart.map((item, index) => (
                    <div className="mx-auto flex border border-gray-300 p-2">
                        <input type="checkbox" name="" className="my-auto ms-2 me-4" onChange={() => handleCheckboxChange(index)} checked={item.checked}/>
                        <img src="No-image-found.jpg" onClick={() => handleCheckboxChange(index)} alt="" className="my-auto border border-gray-500 rounded-lg m-2 shadow-md" style={{width: '80px', height: '80px'}}/>
                        <div>
                            <h1 className="font-semibold text-sm m-2">{item.namaproduk}</h1>  
                            <p className="text-sm m-2" style={{fontFamily: 'Verdana'}}>{formattedNumber(item.harga)}</p>
                            <div className="flex items-center m-2">
                                <button className="border border-gray-500 p-2 rounded-1" style={{borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', width: '30px'}} onClick={() => changeStok(index, 'minus')}>-</button>
                                <input type="number" name="" className="border border-gray-500 py-2 px-4 text-center" style={{width: '55px'}} value={item.qty} onWheel={(e) => e.target.blur()} 
                                onChange={(e) => setDataCart((prevDataCart) => prevDataCart.map((item, i) => i === index ? { ...item, qty: parseInt(e.target.value) } : item))}/>
                                <button className="border border-gray-500 p-2 rounded-1" style={{borderTopRightRadius: '5px', borderBottomRightRadius: '5px', width: '30px'}} onClick={() => changeStok(index, 'plus')}>+</button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="bg-white fixed w-full z-20 bottom-0 start-0 shadow-md" style={{borderTop: '1px solid'}}>
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="flex items-center">
                            <input type="checkbox" className="my-auto me-2 ms-3" onChange={() => handleCheckAll()}/>
                            <p>semua</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <p className="">Total</p>
                            <p className="font-bold">{TotalPrice()}</p>
                            <button className="bg-blue-500 text-white p-3">Checkout</button>
                        </div>
                    </div>
                </div>
                </>
            ) : (
            <div className="flex justify-center items-center h-screen">
                <div className="p-5 m-10 w-full rounded-lg bg-gray-50 ">
                    <h1 className="font-bold" style={{fontSize: '50px'}}>Keranjang</h1>
                    <hr className="mt-4 px-5"/>
                    {dataCart.length > 0 && dataCart.map((item, index) => (
                    <div className="mx-auto w-3/4 flex shadow-sm border rounded-xl border-gray-300 p-2 m-5">
                        <input type="checkbox" name="" className="my-auto ms-2 me-4" onChange={() => handleCheckboxChange(index)} checked={item.checked}/>
                        <img src="No-image-found.jpg" alt="" onClick={() => handleCheckboxChange(index)} className="border border-gray-500 rounded-xl m-2 shadow-md" style={{width: '150px'}}/>
                        <div className="">
                            <div className="m-2">
                                <h1 className="font-semibold text-xl">{item.namaproduk}</h1>
                            </div>
                            <div className="m-2">
                                <p className="text-md"  style={{fontFamily: 'Verdana'}}>{formattedNumber(item.harga)}</p>
                            </div>
                            <div className="flex m-2">
                                <button className="border border-gray-500 p-2 rounded-1" onClick={() => changeStok(index, 'minus')}>-</button>
                                <input type="number" name="" className="border border-gray-500 py-2 px-4 w-16 text-center" value={item.qty} onWheel={(e) => e.target.blur()} 
                                onChange={(e) => setDataCart((prevDataCart) => prevDataCart.map((item, i) => i === index ? { ...item, qty: parseInt(e.target.value) } : item))}/>
                                <button className="border border-gray-500 p-2 rounded-1" onClick={() => changeStok(index, 'plus')}>+</button>
                            </div>
                        </div>
                    </div>
                    ))}
                    <hr className="mt-4 px-5"/>
                    <div className="container mx-auto flex justify-between items-center m-2">
                        <div className="flex items-center">
                            <input type="checkbox" className="my-auto me-2 ms-3" id="CheckAll" onChange={() => handleCheckAll()}/>
                            <label htmlFor="CheckAll">Semua</label>
                        </div>
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-1 md:gap-2 space-x-2">
                            <div className="flex space-x-2">
                                <h1 className="font-semibold">Total Belanja</h1>
                                <h1 className="font-semibold">{TotalPrice()}</h1>
                            </div>
                            <div className="flex justify-end">
                                <button className="bg-blue-500 text-white p-2 font-semibold rounded-lg w-full">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
        
    )
}

export default Cart