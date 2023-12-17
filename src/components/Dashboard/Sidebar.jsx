import React from 'react'
import './styles/sidebar.scss'
import logo from '../../pages/Auth/assets/logo.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import dashboardIcon from '../Dashboard/assets/dashboardIcon.svg'
import profileIcon from '../Dashboard/assets/profileIcon.svg'
import communityIcon from '../Dashboard/assets/communityIcon.svg'
import resourceIcon from '../Dashboard/assets/resourceIcon.svg'
import webinarIcon from '../Dashboard/assets/webinarIcon.svg'
import settingsIcon from '../Dashboard/assets/settingsIcon.svg'
import logoutIcon from '../Dashboard/assets/logoutIcon.svg'



const sidebarItems = [
    {
        icon: dashboardIcon,
        name: 'Dashboard',
        link: '/dashboard'
    },
    {
        icon: profileIcon,
        name: 'Profile',
        link: '/profile'
    }, {
        icon: communityIcon,
        name: 'Community',
        link: '/community'
    }, {
        icon: resourceIcon,
        name: 'Resource Library',
        link: '/resource'
    }, {
        icon: webinarIcon,
        name: 'Webinars',
        link: '/webinars'
    },
    {
        icon: settingsIcon,
        name: 'Settings',
        link: '/settings'
    },
]

const Sidebar = () => {

    const [activeClass, setActiveClass] = useState(0);

    const handleNavigate = (id) => {
        setActiveClass(id);

        localStorage.setItem('activeClass', id.toString());
    }

    useEffect(() => {
        const storedActiveClass = localStorage.getItem('activeClass');
        if (storedActiveClass !== null) {
            setActiveClass(parseInt(storedActiveClass, 10));
        }
    }, []);

  return (
    <>
        <div className='sidebar'>
            <div className='sidebar__logo'>
                <img
                    src={logo}
                    alt='logo'
                />
                <h3>Peerwize</h3>
            </div>
            <div className='sidebar__links'>
                {sidebarItems.map((item, id) => (
                    <>
                        <Link 
                            key={id} 
                            style={{ 
                                backgroundColor: `${activeClass === id ? '#FBA04B': '#2C96A2'}`
                            }} 
                            to={item.link} 
                            onClick={() => handleNavigate(id)}>
                            <img
                                src={item.icon}
                                alt='item icon'
                                className='sidebar__icon'
                            />
                            <p>{item.name}</p>
                        </Link>
                    </>
                ))}
            </div>
            
            <AdProfessional />
            <LogoutBtn />
        </div>
    </>
  )
}


export default Sidebar

export const AdProfessional = () => {
    return (
        <>
            <div className='ad__professional'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 14.6668C28 22.0668 22.88 28.9868 16 30.6668C9.12 28.9868 4 22.0668 4 14.6668V6.66683L16 1.3335L28 6.66683V14.6668ZM16 28.0002C21 26.6668 25.3333 20.7202 25.3333 14.9602V8.40016L16 4.24016L6.66667 8.40016V14.9602C6.66667 20.7202 11 26.6668 16 28.0002ZM20.0667 21.3335L15.96 18.8668L11.8667 21.3335L12.9467 16.6668L9.33333 13.5468L14.1067 13.1335L15.96 8.7335L17.8267 13.1202L22.6 13.5335L18.9733 16.6668L20.0667 21.3335Z" fill="#EBF8FA"/>
                </svg>
                <p>
                    Become a professional. <br /> Upgrade to start sharing courses and webinars
                </p>
                <button>
                    Upgrade
                </button>
            </div>
        </>
    )
}

export const LogoutBtn = () => {
    return (
        <>
            <button className='sidebar__logout--btn'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4399 14.62L19.9999 12.06L17.4399 9.5" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.75977 12.0601H19.9298" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.7598 20C7.33977 20 3.75977 17 3.75977 12C3.75977 7 7.33977 4 11.7598 4" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Logout</p>
            </button>
        </>
    )
}