import React from 'react';
import Logo from '../assets/bootpay_gray.svg'

function Footer() {
    return (
        <>
            <footer>
                <div className="ft_contents">
                    <div className="juso">
                        <div className="ft_logo"><img src={Logo} alt="로고"/></div>
                        <span className="text">
                            (주)부트페이 | 사업자등록번호 618-87-00495 | 대표정재훈<br />
                            서울특별시 구로구 디지털로26길61,1801호|bootpay.co.kr@gmail.com
                        </span>
                    </div>
                    <div className="ft_box">
                        <div className="contact">
                            <div className="title">CONTACT</div>
                            <div className="text">
                                TEL. 1599-4062 <br />
                                FAX. 02-6008-9760
                            </div>
                        </div>
                        <div className="links">
                            <div className="title">LINKS</div>
                            <div className="text">
                                부트페이 관리자 이동 <br />
                                부트페이 개발문서 이동
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;