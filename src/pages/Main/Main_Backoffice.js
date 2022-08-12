import React from 'react';
import Logo from '../../assets/bootpay_white.svg';
import './MainPage_Backoffice.css'

function Main_Backoffice() {
    return (
        <div className='main9_wrap'>
            <div className="main-contents9">
                <div className="m9_text">
                    <span>무료 결제 연동 API 서비스</span>
                    <img src={Logo} alt="로고"/>
                </div>
                <button>관리자 페이지 체험하기</button>
            </div>
        </div>
    );
}

export default Main_Backoffice;