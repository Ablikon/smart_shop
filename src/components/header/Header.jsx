import React from 'react';
import './Header.css'
import logoicon from './../../images/icons/simple-icons--4chan.svg'
import SearchForm from './SearchForm'

function Header(){
    return(
        <header className='header'>
                <div className='full'>
                    <div className="header_row">
                        <div className="header_logo">
                            <img className="icon" src={logoicon} alt="logoicon"/>
                            <span>SmartShop</span>
                        </div>
                        <div className='header_search'>
                            <SearchForm />
                        </div>
                    </div>
                </div>
        </header>
    )
}
export default Header;