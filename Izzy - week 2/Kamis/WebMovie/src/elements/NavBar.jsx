import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";

const NavBar = () => {
  const Navigate = useNavigate()
  
  const Goto = (index) => {
    localStorage.setItem('WebAppHomeIndex', JSON.stringify(index));
    switch(index){
      case 0:
        Navigate('/Intheatres');
        break;
      case 1:
        Navigate('/Popular');
        break;
      case 2:
        Navigate('/TvShow');
        break;
    }
  }
  const onSearch = () => {
    const search = document.getElementById('search').value;
    if(!search){
      const Index = localStorage.getItem('WebAppHomeIndex') ? JSON.parse(localStorage.getItem('WebAppHomeIndex')) : 0;
      Goto(Index);
    }else{
      Navigate(`/Search/${search}`);
      search.value = '';
    }
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white" style={{padding: '40px'}}>
        <div className="flex w-full space-x-5 items-center">
            <input type="text" name="" className='w-full p-2 ps-8' style={{backgroundColor: 'rgb(238,238,238)', borderRadius: '45px'}} id="search" placeholder='Search' autoComplete='off'/>
            <span onClick={() => onSearch()}><IoMdSearch size={20} className='cursor-pointer'/></span>
        </div>
        <div className="w-full grid grid-cols-3 mt-4">
            <div className='hover:bg-gray-300 p-4 cursor-default' onClick={() => Goto(0)}>
                <p className='text-center cursor-default'>In Theatres</p>
            </div>
            <div className='hover:bg-gray-300 p-4 cursor-default' onClick={() => Goto(1)}>
                <p className='text-center cursor-default'>Popular</p>
            </div>
            <div className='hover:bg-gray-300 p-4 cursor-default' onClick={() => Goto(2)}>
                <p className='text-center cursor-default'>Tv Show</p>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;