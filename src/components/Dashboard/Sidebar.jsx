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
        link: '/dashboard',
        iconPath: [
            "M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z",
            "M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z", 
            "M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z",
            "M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
        ]
    },
    {
        icon: profileIcon,
        name: 'Profile',
        link: '/profile',
        iconPath: [
            "M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z",
            "M7.16021 14.56C4.74021 16.18 4.74021 18.82 7.16021 20.43C9.91021 22.27 14.4202 22.27 17.1702 20.43C19.5902 18.81 19.5902 16.17 17.1702 14.56C14.4302 12.73 9.92021 12.73 7.16021 14.56Z"
        ]
    }, {
        icon: communityIcon,
        name: 'Community',
        link: '/community',
        iconPath: [
            "M10.5002 4.5002C10.5002 3.62498 10.1525 2.78561 9.53365 2.16674C8.91478 1.54787 8.07541 1.2002 7.2002 1.2002C6.32498 1.2002 5.48561 1.54787 4.86674 2.16674C4.24787 2.78561 3.9002 3.62498 3.9002 4.5002C3.9002 5.37541 4.24787 6.21478 4.86674 6.83365C5.48561 7.45252 6.32498 7.8002 7.2002 7.8002C8.07541 7.8002 8.91478 7.45252 9.53365 6.83365C10.1525 6.21478 10.5002 5.37541 10.5002 4.5002ZM5.1002 4.5002C5.1002 4.22442 5.15451 3.95134 5.26005 3.69656C5.36558 3.44178 5.52027 3.21027 5.71527 3.01527C5.91027 2.82027 6.14178 2.66558 6.39656 2.56005C6.65134 2.45451 6.92442 2.4002 7.2002 2.4002C7.47597 2.4002 7.74905 2.45451 8.00383 2.56005C8.25861 2.66558 8.49012 2.82027 8.68512 3.01527C8.88012 3.21027 9.03481 3.44178 9.14034 3.69656C9.24588 3.95134 9.3002 4.22442 9.3002 4.5002C9.3002 5.05715 9.07895 5.59129 8.68512 5.98512C8.29129 6.37895 7.75715 6.6002 7.2002 6.6002C6.64324 6.6002 6.1091 6.37895 5.71527 5.98512C5.32144 5.59129 5.1002 5.05715 5.1002 4.5002ZM3.0002 9.0002H8.0198C7.823 9.3722 7.6766 9.7754 7.5902 10.2002H3.0002C2.84107 10.2002 2.68845 10.2634 2.57593 10.3759C2.46341 10.4885 2.4002 10.6411 2.4002 10.8002V11.4002C2.4002 12.9122 3.719 14.537 6.1154 14.9162C5.729 15.1802 5.4074 15.5318 5.1782 15.941C2.6462 15.2558 1.2002 13.3046 1.2002 11.4002V10.8002C1.2002 10.3228 1.38984 9.86497 1.7274 9.5274C2.06497 9.18984 2.52281 9.0002 3.0002 9.0002ZM9.455 9.0002C10.0598 8.2682 10.9754 7.8002 12.0002 7.8002C12.7188 7.79894 13.4182 8.03282 13.9915 8.46616C14.5648 8.89949 14.9805 9.50847 15.1754 10.2002C15.3491 10.8176 15.3393 11.4722 15.1472 12.0841C14.9552 12.6961 14.5891 13.2388 14.0938 13.6463C13.5985 14.0537 12.9952 14.3081 12.3578 14.3785C11.7203 14.4488 11.0761 14.3321 10.5038 14.0426C10.0632 13.8183 9.67857 13.4979 9.37841 13.1051C9.07824 12.7122 8.87019 12.2569 8.76962 11.7729C8.66905 11.2888 8.67853 10.7883 8.79737 10.3084C8.91621 9.82848 9.14016 9.3814 9.455 9.0002ZM10.103 10.2002C9.98481 10.4495 9.91688 10.7196 9.90309 10.9952C9.8893 11.2707 9.92992 11.5463 10.0226 11.8062C10.1153 12.066 10.2583 12.3051 10.4434 12.5097C10.6285 12.7143 10.8521 12.8804 11.1014 12.9986C11.3507 13.1168 11.6208 13.1847 11.8964 13.1985C12.1719 13.2123 12.4475 13.1717 12.7074 13.079C12.9672 12.9863 13.2063 12.8433 13.4109 12.6582C13.6155 12.4731 13.7816 12.2495 13.8998 12.0002C14.1385 11.4965 14.1673 10.9187 13.98 10.3938C13.7926 9.86888 13.4044 9.43989 12.9008 9.2012C12.3971 8.9625 11.8193 8.93366 11.2944 9.121C10.7695 9.30835 10.3417 9.69655 10.103 10.2002ZM18.8222 15.941C18.5936 15.5316 18.2727 15.1811 17.885 14.9174C20.2802 14.537 21.6002 12.911 21.6002 11.4002V10.8002C21.6002 10.6411 21.537 10.4885 21.4245 10.3759C21.3119 10.2634 21.1593 10.2002 21.0002 10.2002H16.4102C16.3254 9.7818 16.1812 9.37769 15.9818 9.0002H21.0002C21.4776 9.0002 21.9354 9.18984 22.273 9.5274C22.6106 9.86497 22.8002 10.3228 22.8002 10.8002V11.4002C22.8002 13.3046 21.353 15.2546 18.8222 15.941ZM17.3846 16.0454C17.0571 15.7579 16.636 15.5996 16.2002 15.6002H7.8002C7.56364 15.5996 7.32929 15.6457 7.11062 15.7359C6.89194 15.8262 6.69326 15.9587 6.52599 16.126C6.35872 16.2933 6.22616 16.4919 6.13592 16.7106C6.04569 16.9293 5.99956 17.1636 6.0002 17.4002V18.0002C6.0002 20.3654 8.2322 22.8002 12.0002 22.8002C15.7682 22.8002 18.0002 20.3654 18.0002 18.0002V17.4002C18.0002 16.8602 17.7626 16.3754 17.3846 16.0442V16.0454ZM7.2002 17.4002C7.2002 17.2411 7.26341 17.0885 7.37593 16.9759C7.48845 16.8634 7.64107 16.8002 7.8002 16.8002H16.2002C16.3593 16.8002 16.5119 16.8634 16.6245 16.9759C16.737 17.0885 16.8002 17.2411 16.8002 17.4002V18.0002C16.8002 19.7258 15.0818 21.6002 12.0002 21.6002C8.9186 21.6002 7.2002 19.7258 7.2002 18.0002V17.4002ZM16.8002 1.2002C17.6754 1.2002 18.5148 1.54787 19.1336 2.16674C19.7525 2.78561 20.1002 3.62498 20.1002 4.5002C20.1002 5.37541 19.7525 6.21478 19.1336 6.83365C18.5148 7.45252 17.6754 7.8002 16.8002 7.8002C15.925 7.8002 15.0856 7.45252 14.4667 6.83365C13.8479 6.21478 13.5002 5.37541 13.5002 4.5002C13.5002 3.62498 13.8479 2.78561 14.4667 2.16674C15.0856 1.54787 15.925 1.2002 16.8002 1.2002ZM16.8002 2.4002C16.2432 2.4002 15.7091 2.62144 15.3153 3.01527C14.9214 3.4091 14.7002 3.94324 14.7002 4.5002C14.7002 5.05715 14.9214 5.59129 15.3153 5.98512C15.7091 6.37895 16.2432 6.6002 16.8002 6.6002C17.3572 6.6002 17.8913 6.37895 18.2851 5.98512C18.6789 5.59129 18.9002 5.05715 18.9002 4.5002C18.9002 3.94324 18.6789 3.4091 18.2851 3.01527C17.8913 2.62144 17.3572 2.4002 16.8002 2.4002Z"
        ]
    }, {
        icon: resourceIcon,
        name: 'Resource Library',
        link: '/resource',
        iconPath: [
            "M10.05 2.52979L4.03002 6.45979C2.10002 7.71979 2.10002 10.5398 4.03002 11.7998L10.05 15.7298C11.13 16.4398 12.91 16.4398 13.99 15.7298L19.98 11.7998C21.9 10.5398 21.9 7.72979 19.98 6.46979L13.99 2.53979C12.91 1.81979 11.13 1.81979 10.05 2.52979Z",
            "M5.63012 13.0801L5.62012 17.7701C5.62012 19.0401 6.60012 20.4001 7.80012 20.8001L10.9901 21.8601C11.5401 22.0401 12.4501 22.0401 13.0101 21.8601L16.2001 20.8001C17.4001 20.4001 18.3801 19.0401 18.3801 17.7701V13.1301",
            "M21.3999 15V9"
        ]
    }, {
        icon: webinarIcon,
        name: 'Webinars',
        link: '/webinars',
        iconPath: [
            "M20 4C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V16C22 17.11 21.11 18 20 18H24V20H0V18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V6C2 4.89 2.89 4 4 4H20ZM20 6H4V16H20V6ZM12 12C14.21 12 16 12.9 16 14V15H8V14C8 12.9 9.79 12 12 12ZM12 7C12.5304 7 13.0391 7.21071 13.4142 7.58579C13.7893 7.96086 14 8.46957 14 9C14 9.53043 13.7893 10.0391 13.4142 10.4142C13.0391 10.7893 12.5304 11 12 11C10.89 11 10 10.11 10 9C10 7.89 10.9 7 12 7Z"
        ]
    },
    {
        icon: settingsIcon,
        name: 'Settings',
        link: '/settings',
        iconPath: [
            "M9.00018 1C9.40132 1 9.79675 1.02971 10.1819 1.08686L10.7625 2.84571C11.271 2.99086 11.7545 3.19771 12.2025 3.45829L13.871 2.65371C14.4619 3.10743 14.9876 3.64229 15.431 4.24114L14.5967 5.89486C14.8493 6.34743 15.0482 6.83429 15.1842 7.34629L16.9327 7.95543C17.0291 8.69486 17.0226 9.44408 16.9133 10.1817L15.1545 10.7623C15.0103 11.2657 14.8046 11.7493 14.5419 12.2023L15.3465 13.8709C14.8921 14.4619 14.3579 14.9869 13.759 15.4309L12.1053 14.5966C11.6478 14.852 11.1603 15.0494 10.6539 15.184L10.0447 16.9326C9.30531 17.0289 8.5561 17.0224 7.81846 16.9131L7.23789 15.1543C6.73451 15.0101 6.25085 14.8044 5.79789 14.5417L4.12932 15.3463C3.5383 14.892 3.01328 14.3577 2.56932 13.7589L3.4036 12.1051C3.14876 11.6474 2.95146 11.1599 2.81618 10.6537L1.0676 10.0434C0.971368 9.30437 0.977907 8.55555 1.08703 7.81829L2.84589 7.23772C2.99103 6.72914 3.19789 6.24572 3.45846 5.79771L2.65389 4.12914C3.10822 3.53812 3.64247 3.0131 4.24132 2.56914L5.89503 3.40343C6.3525 3.14797 6.84009 2.95063 7.34646 2.816L7.95675 1.06743C8.30273 1.02242 8.65127 0.999893 9.00018 1Z",
            "M9.00035 12.4284C10.8939 12.4284 12.4289 10.8934 12.4289 8.99986C12.4289 7.10631 10.8939 5.57129 9.00035 5.57129C7.1068 5.57129 5.57178 7.10631 5.57178 8.99986C5.57178 10.8934 7.1068 12.4284 9.00035 12.4284Z"
        ]
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

                            {/* <img
                                src={item.icon}
                                alt='item icon'
                                className='sidebar__icon'
                                style={{
                                    color: `${activeClass === id? '#FFFFFF' : '#CECECE'}`
                                }}
                            /> */}

                            <svg className='sidebar__icon' width="20" height="20" viewBox="0 0 24 24" fill={activeClass === id? '#FFFFFF' : '#CECECE'} xmlns="http://www.w3.org/2000/svg">
                                {item.iconPath.map((path, pathId) => (
                                    <path key={pathId} d={path} stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                ))}
                            </svg>
                            <p style={{
                                color: `${activeClass === id? '#FFFFFF' : '#CECECE'}`
                            }}>{item.name}</p>
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