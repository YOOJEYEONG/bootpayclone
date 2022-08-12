import React from 'react';
import Left from '../../assets/3_pgs.svg'
import Center from '../../assets/3_bootpay.svg'
import Right from '../../assets/3_platform.svg'
import Arrow from '../../assets/3_arrow_h.svg'
import './MainPage_Manual.css'

function MainPage_Manual() {
    return (
        <div className='main3_wrap'>
            <div className='main_contents3'>
                <div className="main3_top">
                    <div>
                        <span>
                            <span className='main3_bold'>국내외 여러 PG를 소스코드 한줄로</span><br />
                            복수PG 이용도 무료
                        </span>
                    </div>
                    <div className='main3_rt'>
                        <span>
                            <span className='main3_bold'>다양한 결제수단도 소스코드 한줄로</span><br />
                            다양한 샘플 제공
                        </span>
                    </div>
                </div>
                <div className="main3_bottom">
                    <div className="m3b_left">
                        <img src={Left} alt="PG"/>
                        <div className="m3b_line">
                            <div className="m3b_icon"></div>
                            <p>
                                지원PG:KGP,다날,KG이니시스,토스페이먼츠,네이버페이 등
                            </p>
                        </div>
                    </div>
                    <div className="arrow">
                        <img src={Arrow} alt="arrow"/>
                    </div>
                    <div className="m3b_center">
                        <img src={Center} alt="Bootpay"/>
                    </div>
                    <div className="arrow">
                        <img src={Arrow} alt="arrow"/>
                    </div>
                    <div className="m3b_right">
                        <img src={Right} alt="WEB"/>
                        <div className="m3b_line">
                                <p>
                                지원언어:Android,iOS,Flutter,JavaScript 등
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage_Manual;