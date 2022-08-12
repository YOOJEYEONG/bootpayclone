import React from 'react';
import Tablet from '../../assets/2_tablet.svg'
import './MainPage_Introducation.css'


function MainPage_Introduction() {
    return (
        <div className='main2_wrap'>
            <div className="main_contents2">
                <div className="main2_left">
                    <span className="main2_title">
                        부트페이를 통하면 <br />
                        <span className="text_bold">개발기간이 단축됩니다</span>
                    </span>
                    <div className="main2_text">
                        <li>
                            <div className="icon">
                                <i className="icon_check"></i>
                            </div>
                            <span className="text_bold">PG 계약</span> 상관없이 즉시 개발
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon_check"></i>
                            </div>
                            <span className="text_bold">웹,앱 SDK</span> 모두 지원
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon_check"></i>
                            </div>
                            소스코드 수준의 <span className="text_bold">기술지원</span>
                        </li>
                    </div>
                    <button  data-aos="fade-right">개발매뉴얼 바로가기</button>
                </div>
                <div className="main2_right">
                    <img src={Tablet} alt="이미지"/>
                </div>
            </div>
        </div>
    );
}

export default MainPage_Introduction;