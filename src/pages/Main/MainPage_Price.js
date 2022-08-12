import React from 'react';
import img1 from '../../assets/10_2.svg';
import img2 from '../../assets/10_3.svg';
import img3 from '../../assets/10_4.svg';
import Logo from '../../assets/bootpay_dark.svg';
import arrow from '../../assets/3_arrow_h.svg';
import './MainPage_Price.css'


function MainPage_Price() {

    const main = [
        {
            img : img1,
            count : '30',
            title : '만원',
            text : '결제 모듈 연동'
        },        {
            img : img2,
            to : '연',
            count : '52',
            title : '만원',
            text : '데이터분석'
        },        {
            img : img3,
            to : '연',
            count : '12',
            title : '만원',
            text : '월별리포트'
        },
    ]

    return (
        <div className='main8_wrap'>
            <div className="main-contents8">
                <div className="m8_main">
                    <div className='m8_cont'>
                        {
                            main.map((main) => {
                                return(
                                    <div className='m8_box' key={main}>
                                        <img src={main.img} alt="이미지"/>
                                        <div className="m8_box_text">
                                            <p>{main.to}</p><h1>{main.count}</h1><p>{main.title}</p>
                                        </div>
                                        <span>{main.text}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="m8_text">
                    <img src={Logo} alt="로고"/>
                    <span>이용 시 비용 총 </span>
                    <span className='delete'> 94만원</span>
                    <div className="m8_icon">
                        <img src={arrow} alt="화살표"/>
                    </div>
                    <span className='blue'>모두 무료!</span>
                </div>
            </div>
        </div>
    );
}

export default MainPage_Price;