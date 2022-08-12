import React from 'react';
import { FaRegWindowRestore } from 'react-icons/fa';
import Lefticon from '../../assets/5_icon_pay_window.svg';
import Leftimg from '../../assets/pay_total.svg';
import Righticon from '../../assets/5_icon_security.svg';
import Mainicon from '../../assets/5_security_item_icon.svg'
import Mainimg from '../../assets/5_security (1).svg';
import './MainPage_security.css'


function MainPage_Security() {

    const text = [
        {
            name : '모든 통신구간 SSL암호화적용',
        },
        {
            name : 'White IP 허용',
        },
        {
            name : 'Private Cloud 환경',
        },
        {
            name : '대규모 트래픽 처리',
        },
        {
            name : '실시간 트래픽 모니터링',
        },
        {
            name : '즉각적인 노드 분산 처리',
        }
    ]

    return (
        <div className='main5_wrap'>
            <div className="main-contents5">
                <div className="m5_left">
                    <div className="m5_lf_icon">
                        <img src={Lefticon} alt="아이콘"/>
                    </div>
                    <div className="m5_lf_text">
                        <div className="bold">통합 결제창 제공</div>
                        <p>판매페이지에서 여러 결제수단을 지저분하게 나열하지 마시고,<br />
                        단 하나의 구매하기 버튼을 제공하세요.</p>
                        <button>통합결제창 테스트<FaRegWindowRestore /></button>
                    </div>
                    <div className="m5_lf_main">
                        <img src={Leftimg} alt="결제선택이미지"/>
                    </div>
                </div>
                <div className="m5_right">
                    <div className="m5_rt_icon">
                        <img src={Righticon} alt="아이콘"/>
                    </div>
                    <div className="m5_rt_text">
                        <div className="bold">안전한 보안</div>
                    </div>
                    <div className="m5_rt_main">
                        {
                            text.map((text) => {
                                return(
                                    <li>
                                        <img src={Mainicon} alt="아이콘"/>{text.name}
                                    </li>
                                )
                            })
                        }
                        <img src={Mainimg} alt="이미지"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage_Security;