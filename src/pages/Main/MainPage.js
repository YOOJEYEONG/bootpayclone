import React from 'react';
import Phone from '../../assets/1_phone.svg';
import Laptop from '../../assets/1_laptop.svg';
import MainPage_Introduction from "./MainPage_Introduction";
import MainPage_Manual from "./MainPage_Manual";
import MainPage_Api from "./MainPage_Api";
import MainPage_Security from "./MainPage_Security";
import MainPage_PG from "./MainPage_PG";
import MainPage_Login_service from "./MainPage_Login_service";
import MainPage_Price from "./MainPage_Price";
import Main_Backoffice from "./Main_Backoffice";
import './MainPage.css'
import 'animate.css';


function MainPage() {

    const Text = [
        {
            title: "소스코드 한 줄 연동"
        }, {
            title: "모든결제 시나리오 지원"
        }, {
            title: "안정적인 서비스 운영 및 보안"
        }, {
            title: "무료 통계 서비스 제공"
        },
    ]


    return (
        <>
            <div className="main_top">
                <div className="main_contents">
                    <div className="main_text">
                        <span>부트페이로</span>
                        <h2>결제 연동 하세요</h2>
                        {
                            Text.map((text) => {
                                return (
                                    <p className="pc" key={text}>{text.title}</p>
                                )
                            })
                        }
                        <p className="mobile">무료 결제 연동 API 서비스</p>
                        <button>관리자 페이지 체험하기</button>
                    </div>
                    <div className="main_img">
                        <img className='phone' src={Phone} alt="폰"/>
                        <img className='laptop' src={Laptop} alt="태블릿"/>
                    </div>
                </div>
            </div>
            <MainPage_Introduction/>
            <MainPage_Manual/>
            <MainPage_Api/>
            <MainPage_Security/>
            <MainPage_PG/>
            <MainPage_Login_service/>
            <MainPage_Price/>
            <Main_Backoffice/>
        </>
    );
}

export default MainPage;