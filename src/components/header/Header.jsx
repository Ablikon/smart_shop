import React from 'react';
import './Header.css'
import logoicon from './../../images/icons/simple-icons--4chan.svg'
import heart from './../../images/icons/arcticons--heart.svg'
import cart from './../../images/icons/mdi-light--cart.svg'
import profile from './../../images/icons/iconamoon--profile-thin.svg'
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
                        <div className='notifications'>
                            <img className="notes" src={heart} alt="heart"/>
                            <img className="notes" src={cart} alt="cart"/>
                            <img className="notes" src={profile} alt="profile"/>
                        </div>
                    </div>
                </div>
                <div className='widgetwrapper'>
                    <div className='wfull'>
                            <div className='nav'>
                                <div className='list'>
                                    <h3>Categories</h3>
                                    <h3>About</h3>
                                    <h3>Contacts</h3>
                                <div className='become'>
                                    <h3>Become</h3>
                                    <h3>a</h3>
                                    <h3>Partner</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </header>
    )
}
export default Header;