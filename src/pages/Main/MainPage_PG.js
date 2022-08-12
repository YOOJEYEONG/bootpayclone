import React from 'react';
import npay from '../../assets/npay.png';
import kakaopay from '../../assets/kakao.png';
import payco from '../../assets/payco.png';
import nice from '../../assets/nice.png';
import payapp from '../../assets/payapp.png';
import danal from '../../assets/danal.png';
import kcp from '../../assets/kcp.png';
import kginicis from '../../assets/inicis.png';
import toss from '../../assets/toss.png';
import payletter from '../../assets/payletter.png';
import welcome from '../../assets/welcome.png';
import tpay from '../../assets/tpay.png';
import easypay from '../../assets/easypay.png';
import './MainPage_PG.css'


function MainPage_PG() {

    const icon = [
        {
            icon : npay
        },        {
            icon : kakaopay
        },        {
            icon : payco
        },        {
            icon : nice
        },        {
            icon : payapp
        },        {
            icon : danal
        },        {
            icon : kcp
        },        {
            icon : kginicis
        },        {
            icon : toss
        },        {
            icon : payletter
        },        {
            icon : welcome
        },        {
            icon : tpay
        },        {
            icon : easypay
        },
    ]

    return (
        <div className='main6_wrap'>
            <div className="main-contents6">
                <div className="m6_title">부트페이가 지원하는 PG사</div>
                <div className="m6_icon">
                {
                    icon.map((name) => {
                        return(
                            <img key={icon} src={name.icon} alt="아이콘"/>
                        )
                    })
                }
                </div>
            </div>
        </div>
    );
}

export default MainPage_PG;