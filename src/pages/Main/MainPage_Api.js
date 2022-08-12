import React, {useState} from 'react';
import Icon from '../../assets/4_icon.svg';
import { FaApple, FaGlobe, FaPaperPlane } from 'react-icons/fa';
import { AiFillAndroid } from "react-icons/ai";
import './MainPage_Api.css'



function MainPage_Api() {
    const [tab, setTab] = useState(0);

    const menuArr = [
        { icon : <FaGlobe /> ,name : 'Web', content : ' BootPay.request({\n' +
                '      price: \'1000\', //실제 결제되는 가격\n' +
                '      application_id: \'593f8febe13f332431a8ddae\',\n' +
                '      name: \'블링블링 마스카라\', //결제창에서 보여질 이름\n' +
                '      pg: \'danal\',\n' +
                '      show_agree_window: 0, // 부트페이 정보 동의 창 보이기 여부\n' +
                '      items: [\n' +
                '          {\n' +
                '              item_name: \'나는 아이템\', //상품명\n' +
                '              qty: 1, //수량\n' +
                '              unique: \'123\', //해당 상품을 구분짓는 primary key\n' +
                '              price: 1000, //상품 단가\n' +
                '              cat1: \'TOP\', // 대표 상품의 카테고리 상, 50글자 이내\n' +
                '              cat2: \'티셔츠\', // 대표 상품의 카테고리 중, 50글자 이내\n' +
                '              cat3: \'라운드 티\', // 대표상품의 카테고리 하, 50글자 이내\n' +
                '          }\n' +
                '      ],\n' +
                '      user_info: {\n' +
                '          username: \'사용자 이름\',\n' +
                '          email: \'사용자 이메일\',\n' +
                '          addr: \'사용자 주소\',\n' +
                '          phone: \'010-1234-4567\'\n' +
                '      },\n' +
                '      method: \'card\', //결제수단, 입력하지 않으면 결제수단 선택부터 화면이 시작합니다.\n' +
                '      order_id: \'고유order_id_1234\', //관리하시는 고유 주문번호를 입력해주세요\n' +
                '      params: {\n' +
                '        callback1: \'그대로 콜백받을 변수 1\',\n' +
                '        callback2: \'그대로 콜백받을 변수 2\',\n' +
                '        customvar1234: \'변수명도 마음대로\'\n' +
                '      },\n' +
                '  }).error(function (data) {\n' +
                '      //결제 진행시 에러가 발생하면 수행됩니다.\n' +
                '      console.log(data);\n' +
                '  }).cancel(function (data) {\n' +
                '      //결제가 취소되면 수행됩니다.\n' +
                '      console.log(data);\n' +
                '  }).confirm(function (data) {\n' +
                '      //결제가 실행되기 전에 수행되며, 주로 재고를 확인하는 로직이 들어갑니다.\n' +
                '      //주의 - 카드 수기결제일 경우 이 부분이 실행되지 않습니다.\n' +
                '      console.log(data);\n' +
                '      if(somthing) { // 재고 수량 관리 로직 혹은 다른 처리\n' +
                '        this.transactionConfirm(data); // 조건이 맞으면 승인 처리를 한다.\n' +
                '      } else {\n' +
                '        this.removeWindow(); // 조건이 맞지 않으면 결제 창을 닫고 결제를 승인하지 않는다.\n' +
                '      }\n' +
                '  }).done(function (data) {\n' +
                '      //결제가 정상적으로 완료되면 수행됩니다\n' +
                '      //비즈니스 로직을 수행하기 전에 결제 유효성 검증을 하시길 추천합니다.\n' +
                '      console.log(data);\n' +
                '  });' },
        { icon : <AiFillAndroid /> ,name : 'Android', content : 'Bootpay.init(getFragmentManager())\n' +
                '      .setApplicationId("59a7e647396fa64fcad4a8c2") // 해당 프로젝트(안드로이드)의 application id 값\n' +
                '      .setPG(PG.KCP) // 결제할 PG 사\n' +
                '      .setMethod(Method.CARD) // 결제수단\n' +
                '      .setName("맥북프로임다") // 결제할 상품명\n' +
                '      .setOrderId("1234") // 결제 고유번호\n' +
                '      .setPrice(1000) // 결제할 금액\n' +
                '      .addItem("마우스", 1, "123", 100) // 주문정보에 담길 상품정보, 통계를 위해 사용\n' +
                '      .addItem("키보드", 1, "122", 200) // 주문정보에 담길 상품정보, 통계를 위해 사용\n' +
                '      .onConfirm(new ConfirmListener() {\n' +
                '          // 결제가 진행되기 바로 직전 호출되는 함수로, 주로 재고처리 등의 로직이 수행\n' +
                '          @Override\n' +
                '          public void onConfirmed(@Nullable String message) {\n' +
                '              if (0 < stuck) Bootpay.confirm(message); // 재고가 있을 경우. 결제를 진행한다\n' +
                '              Log.d("confirm", message);\n' +
                '          }\n' +
                '      })\n' +
                '      .onDone(new DoneListener() { // 결제완료시 호출, 아이템 지급 등 데이터 동기화 로직을 수행합니다\n' +
                '          @Override\n' +
                '          public void onDone(@Nullable String message) {\n' +
                '              Log.d("done", message);\n' +
                '          }\n' +
                '      })\n' +
                '      .onCancel(new CancelListener() { // 결제 취소시 호출\n' +
                '          @Override\n' +
                '          public void onCancel(@Nullable String message) {\n' +
                '              Log.d("cancel", message);\n' +
                '          }\n' +
                '      })\n' +
                '      .onError(new ErrorListener() { // 에러가 났을때 호출되는 부분\n' +
                '          @Override\n' +
                '          public void onError(@Nullable String message) {\n' +
                '              Log.d("error", message);\n' +
                '          }\n' +
                '      })\n' +
                '      .show();' },
        { icon : <FaApple /> ,name : 'iOS', content : ' import UIKit\n' +
                ' import SwiftyBootpay\n' +
                '\n' +
                ' class ViewController: UIViewController {\n' +
                '  var vc: BootpayController!\n' +
                '\n' +
                '  func goBuy() {\n' +
                '    vc = BootpayController()\n' +
                '\n' +
                '    // 주문정보 - 실제 결제창에 반영되는 정보\n' +
                '    vc.params {\n' +
                '        $0.price = 1000 // 결제할 금액\n' +
                '        $0.name = "블링블링 마스카라" // 결제할 상품명\n' +
                '        $0.order_id = "1234" //고유 주문번호로, 생성하신 값을 보내주셔야 합니다.\n' +
                '        $0.user_info = userInfo // 구매자 정보\n' +
                '        $0.pg = "kcp" // 결제할 PG사\n' +
                '        $0.phone = "010-1234-5678" // 결제할 PG사\n' +
                '        $0.method = "phone" // 결제수단\n' +
                '        $0.sendable = self // 이벤트를 처리할 protocol receiver\n' +
                '        $0.quotas = [0,2,3] // // 5만원 이상일 경우 할부 허용범위 설정 가능, (예제는 일시불, 2개월 할부, 3개월 할부 허용)\n' +
                '    }\n' +
                '\n' +
                '    vc.addItem(item: item1) //배열 가능\n' +
                '    vc.addItem(item: item2) //배열 가능\n' +
                '\n' +
                '    self.present(vc, animated: true, completion: nil) // 결제창 controller 호출\n' +
                '  }\n' +
                '}' },
        { icon : <FaPaperPlane /> ,name : 'Flutter', content : 'void goBootpayRequest(BuildContext context) async {\n' +
                '  Payload payload = Payload();\n' +
                '  payload.androidApplicationId = \'5b8f6a4d396fa665fdc2b5e8\';\n' +
                '  payload.iosApplicationId = \'5b8f6a4d396fa665fdc2b5e9\';\n' +
                '\n' +
                '  payload.pg = \'inicis\';\n' +
                '  payload.method = \'phone\';\n' +
                '//  payload.methods = [\'card\', \'phone\', \'vbank\', \'bank\'];\n' +
                '  payload.name = \'testUser\';\n' +
                '  payload.price = 2000.0;\n' +
                '  payload.orderId = DateTime.now().millisecondsSinceEpoch.toString();\n' +
                '\n' +
                '  User user = User();\n' +
                '  user.username = "사용자 이름";\n' +
                '  user.email = "user1234@gmail.com";\n' +
                '  user.area = "서울";\n' +
                '  user.phone = "010-1234-4567";\n' +
                '\n' +
                '  Extra extra = Extra();\n' +
                '  extra.appScheme = \'bootpaySample\';\n' +
                '\n' +
                '  Item item1 = Item();\n' +
                '  item1.itemName = "미"키\'s 마우스"; // 주문정보에 담길 상품명\n' +
                '  item1.qty = 1; // 해당 상품의 주문 수량\n' +
                '  item1.unique = "ITEM_CODE_MOUSE"; // 해당 상품의 고유 키\n' +
                '  item1.price = 1000; // 상품의 가격\n' +
                '\n' +
                '  Item item2 = Item();\n' +
                '  item2.itemName = "키보드"; // 주문정보에 담길 상품명\n' +
                '  item2.qty = 1; // 해당 상품의 주문 수량\n' +
                '  item2.unique = "ITEM_CODE_KEYBOARD"; // 해당 상품의 고유 키\n' +
                '  item2.price = 1000; // 상품의 가격\n' +
                '  List<Item> itemList = [item1, item2];\n' +
                '\n' +
                '  BootpayApi.request(\n' +
                '    context,\n' +
                '    payload,\n' +
                '    extra: extra,\n' +
                '    user: user,\n' +
                '    items: itemList,\n' +
                '    onDone: (String json) {\n' +
                '      print(\'onDone: $json\');\n' +
                '    },\n' +
                '    onReady: (String json) {\n' +
                '      //flutter는 가상계좌가 발급되었을때  onReady가 호출되지 않는다. onDone에서 처리해주어야 한다.\n' +
                '      print(\'onReady: $json\');\n' +
                '    },\n' +
                '    onCancel: (String json) {\n' +
                '      print(\'onCancel: $json\');\n' +
                '    },\n' +
                '    onError: (String json) {\n' +
                '      print(\'onError: $json\');\n' +
                '    },\n' +
                '  );\n' +
                '}\n' +
                '}' },
    ]

    const selectMenuHandler = (index) => {
        setTab(index);
    }



    return (
        <div className='main4_wrap'>
            <div className="main-contents4">
                <div className="icon_pc">
                    <img src={Icon} alt="아이콘"/>
                </div>
                <div className="m4_contents">
                <div className="icon_mobile">
                    <img src={Icon} alt="아이콘"/>
                </div>
                    <div className="m4_text">
                        <p>개발자를 위한 API</p>
                        <p>하루면 되는 결제연동</p>
                    </div>
                    <button>개발매뉴얼바로가기</button>
                    <div className="m4_tabmenu">
                        <div className='tab_text'>
                            <pre>{menuArr[tab].content}</pre>
                        </div>
                        <div className='tab_select'>
                            {
                                menuArr.map((tab, index) => {
                                    return(
                                        <li
                                            key={index}
                                            className={tab === index ? "submenu focused" : "submenu"}
                                            onClick={() => selectMenuHandler(index)}
                                            >
                                            {tab.icon}{tab.name}
                                        </li>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage_Api;