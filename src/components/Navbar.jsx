import psychoArt from "../assets/PsychoArt.svg";
import search from "../assets/search.svg";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='w-full flex justify-between items-center'>

            <img src={psychoArt} alt="logo" className='font-bold text-[25px]' />

            <div className=' w-[384px] h-12.5 py-2.5 pl-2.5 pr-13 rounded-[10px] font-medium bg-[#FFFFFF1A] '>
                <div className='flex gap-2 justify-start items-center'>
                    <img src={search} alt='searcgLogo' className='text-[#FFFFFF] w-5 h-5' />
                    <input className='text-[20px] text-[#FFFFFF] w-74.5  outline-none ' type="text" placeholder='Search items and collections' />
                </div>
            </div>

            <div className='p-2.5'>
                <div className='flex items-center gap-10 text-[20px] font-medium [&>*:not(.no-hover)]:hover:text-blue-500 text-[#FFFFFF]'>
                    <Link className='test' to="#">Collections</Link>
                    <Link to="#">Feature</Link>
                    <Link to="#">FAQ</Link>
                    <button className='no-hover py-2.5 active:scale-98 px-5 rounded-[10px] bg-linear-to-t from-[#B75CFF] to-[#671AE4]'  >
                        <Link to="#">Select Wallet</Link>
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Navbar
