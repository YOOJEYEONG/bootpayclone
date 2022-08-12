import React from 'react';
import icon from '../../assets/7_icon.svg';
import Leftimg from '../../assets/7_phone.svg';
import Rightimg from '../../assets/7_big.svg';
import './MainPage_Login_service.css'
import mobile from '../../assets/7_phone_mobile.svg';



function MainPage_Login_service() {
    return (
        <div className='main7_wrap'>
            <div className="main-contents7">
                <div className="m7_icon">
                    <img src={icon} alt="아이콘"/>
                </div>
                <div className="m7_main">
                    <div className="m7_icon_mobile">
                        <img src={icon} alt="아이콘"/>
                    </div>
                    <div className="m7_title">
                        <span>PG 기반의</span>
                        <span className='blue'>무료 로그분석 서비스</span>
                    </div>
                    <div className="m7_text">
                        <p>정확한 매출데이터를 기반으로 유입,교객,상품,채널등의 데이터를 제공하며,결제가 취소되더라도 불편한 과정없이 부트페이가 데이터를 추적하여 업데이트 합니다.<br />
                        부트페이를 통해 결제창을 연동하고, 추가적으로 2줄을 코딩한다면 강력한 데이터분석 기능을 무료로 이용할수 있습니다.</p>
                    </div>
                    <div className="m7_img">
                        <img className='m7_img_left' src={Leftimg} alt="폰이미지"/>
                        <img className='m7_img_left_mobile' src={mobile} alt="폰이미지"/>
                        <img className='m7_img_right' src={Rightimg} alt="테블릿이미지"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage_Login_service;