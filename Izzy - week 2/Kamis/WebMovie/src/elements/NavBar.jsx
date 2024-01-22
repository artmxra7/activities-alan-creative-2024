import React, { useEffect, useState } from 'react';
import { useNavigate, useSubmit } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";

const NavBar = () => {
  const Navigate = useNavigate()
  const [buttonEffect, setButtonEffect] = useState(localStorage.getItem('WebAppHomeIndex') 
  ? JSON.parse(localStorage.getItem('WebAppHomeIndex')) : 0);
  
  const Goto = (index) => {
    localStorage.setItem('WebAppHomeIndex', JSON.stringify(index));
    switch(index){
      case 0:
        Navigate('/WebMovieExample/Intheatres');
        break;
      case 1:
        Navigate('/WebMovieExample/Popular');
        break;
      case 2:
        Navigate('/WebMovieExample/TvShow');
        break;
    }
  }

  const onSearch = () => {
    const search = document.getElementById('search').value;
    if(!search){
      const Index = localStorage.getItem('WebAppHomeIndex') ? JSON.parse(localStorage.getItem('WebAppHomeIndex')) : 0;
      Goto(Index);
    }else{
      if(window.location.pathname !== `/WebMovieExample/Search/${search}`){
        Navigate(`/WebMovieExample/Search/${search}`);
        localStorage.setItem('WebAppHomeIndex', JSON.stringify(3));
        document.getElementById('search').value = '';
      }
    }
  }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white" style={{padding: '40px'}}>
        <div className="flex w-full space-x-5 items-center">
            <input type="text" name="" className='w-full p-2 ps-8' style={{backgroundColor: 'rgb(238,238,238)', borderRadius: '45px'}} id="search" placeholder='Search' autoComplete='off'/>
            <span onClick={() => {onSearch(); setButtonEffect(3)}}><IoMdSearch size={20} className='cursor-pointer'/></span>
        </div>
        <div className="w-full grid grid-cols-3 mt-4">
            <div className='hover:bg-gray-300 p-4 cursor-default' 
            style={{borderBottomColor: buttonEffect === 0 ? 'rgb(0,0,0)' : 'transparent', borderBottomWidth: '3px'}} onClick={() => {Goto(0);setButtonEffect(0)}}>
                <p className='text-center cursor-default'>In Theatres</p>
            </div>
            <div className='hover:bg-gray-300 p-4 cursor-default' 
            style={{borderBottomColor: buttonEffect === 1 ? 'rgb(0,0,0)' : 'transparent', borderBottomWidth: '3px'}} onClick={() => {Goto(1);setButtonEffect(1)}}>
                <p className='text-center cursor-default'>Popular</p>
            </div>
            <div className='hover:bg-gray-300 p-4 cursor-default' 
            style={{borderBottomColor: buttonEffect === 2 ? 'rgb(0,0,0)' : 'transparent', borderBottomWidth: '3px'}} onClick={() => {Goto(2);setButtonEffect(2)}}>
                <p className='text-center cursor-default'>Tv Show</p>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;