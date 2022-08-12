import React, {useState, useEffect} from 'react';
import Logo from '../assets/bootpay_white.svg';

function Header() {
    // map 용 nav
    // const navBar = [
    //     {
    //         name:'살펴보기'
    //     },       {
    //         name:'PG가입하기'
    //     },       {
    //         name:'결제연동하기'
    //     },       {
    //         name:'데이터분석'
    //     },       {
    //         name:'지급대행'
    //     },       {
    //         name:'도움말'
    //     },
    // ]

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <div className={scrollPosition < 100 ? "original_header" : "change_header"}>
            <div className="header_container">
                <div className={scrollPosition < 100 ? "logo" : "change_logo"}></div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">살펴보기</a>
                        </li>
                        <li>
                            <a href="#">PG가입하기</a>
                        </li>
                        <li>
                            <a href="#">결제연동하기</a>
                        </li>
                        <li>
                            <a href="#">데이터분석</a>
                        </li>
                        <li>
                            <a href="#">지급대행</a>
                        </li>
                        <li>
                            <a href="#">도움말</a>
                        </li>
                    </ul>
                </nav>
                <div className="login">
                    <ul>
                        <li><a href="#">회원가입/로그인→</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;