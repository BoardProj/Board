/*
    박성철 / 상단 로그인 버튼
*/
const login = document.createElement('button');
login.className = "inline-block";
login.innerHTML="로그인";
document.querySelector('body').appendChild(login);

/*
    박성철 / 상단 회원가입 버튼
*/
const register = document.createElement('button');
register.className = "inline-block";
register.innerHTML="회원가입";
document.querySelector('body').appendChild(register);

/*
    박성철 / 상단 회원가입 글씨
*/
const register1 = document.createElement('p');
register1.innerHTML="회원가입";
document.querySelector('body').appendChild(register1);

/*
    박성철 / 상단 수평선
*/
const horizon = document.createElement('hr');
document.querySelector('body').appendChild(horizon);

/*
    박성철 / 약관 내용
*/
const terms = document.createElement('p');
terms.innerHTML=`
본 회원약관은 DIGITAL GAME NOMAD(이하 'DGN'라 한다)이 운영하는 인터넷관련 서비스(이하 '서비스'라 한다)를 이용함에 있어 관리자와 이용자(이하 '회원'라 한다)의 권리, 의무 및 책임사항을 규정함을 목적으로 한다.


제2조 (약관의 효력)

1.본 약관은 'DGN'에 회원 가입 시 회원들에게 통지함으로써 효력을 발생합니다.

2.'DGN'은 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.

3.약관의 변경사항 및 내용은 'DGN'의 홈페이지에 게시하는 방법으로 공시합니다.


제3조 (약관 이외의 준칙)

이 약관에 명시되지 않은 사항이 전기 통신 기본법, 전기통신 사업법, 기타 관련 법령에 규정되어 있는 경우 그 규정에 따릅니다.


제4조 (이용계약의 체결)

회원 가입 시 회원 약관 밑에 있는 동의버튼을 누르면 약관에 동의하여 이 계약이 체결된 것으로 간주한다.


제5조 (용어의 정의)

이 약관에서 사용하는 용어의 정의는 다음과 같습니다.

1.회원: 'DGN'과 서비스 이용에 관한 계약을 체결한 자

2.아이디(ID): 회원 식별과 회원의 서비스 이용을 위하여 회원이 선정하고 'DGN'이 승인하는 문자와 숫자의 조합

3.비밀번호: 회원이 통신상의 자신의 비밀을 보호하기 위해 선정한 문자와 숫자의 조합



제6조 (이용신청)

1.회원 가입은 온라인으로 가입신청 양식에 기록하여 'DGN'에 제출함으로써 이용신청을 할 수 있습니다.

2.가입희망 회원은 반드시 자신의 본명 및 주민등록번호로 이용신청을 하여야 하며, 1개의 ID만 신청을 할 수 있습니다.



제7조 (회원가입의 승낙)

'DGN'의 회원 가입 신청 양식에 가입 희망 회원이 인터넷으로 제6조와 같이 신청하면 'DGN'은 바로 가입을 승인하여 서비스를 이용할 수 있다.


제8조(회원가입 신청거절 및 강제 탈퇴)

1. 'DGN'은 타인의 명의나 주민등록번호를 도용하여 회원가입신청을 할 경우 회원가입신청을 거절할 수 있다.
2. 회원가입신청이 승인이 된 후에도 허위사실의 기재가 발각되거나 'DGN'의 명예를 회손시키거나 음란물이나 불건전한 내용을 게재할 경우 회원의 자격을 강제 탈퇴시킬 수 있다.


제9조 (서비스 제공의 중지)

'DGN'은 다음 각 호의 1에 해당하는 경우 서비스의 제공을 중지할 수 있습니다

1.설비의 보수 등을 위하여 부득이한 경우 

2.전기통신사업법에 규정된 기간통신사업자가 전기통신서비스를 중지하는 경우 

3.기타 'DGN'이 서비스를 제공할 수 없는 사유가 발생한 경우.


제10조 ('갑'의 의무)

1. 'DGN'은  계속적, 안정적으로 서비스를 제공할 수 있도록 최선의 노력을 다하여야 합니다.


2.'DGN'은 항상 회원의 신용정보를 포함한 개인신상정보의 보안에 대하여 관리에 만전을 기함으로서 회원의 정보보안에 최선을 다하여야 합니다.   


제11조 (개인정보보호)

1.'DGN'은 이용자의 정보수집시 서비스의 제공에 필요한 최소한의 정보를 수집합니다. 

2.제공된 개인정보는 당해 이용자의 동의없이 목적외의 이용이나  제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 'DGN'이 집니다. 다만, 다음의 경우에는 예외로 합니다. 
 ①통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는 형태로 제공하는 경우  
 ②전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가 있는 경우
 ③범죄에 대한 수사상의 목적이 있거나 정보통신윤리 위원회의 요청이 있는 경우
 ④기타 관계법령에서 정한 절차에 따른 요청이 있는 경우


3.회원은 언제든지 'DGN'이 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 'DGN'은 이에 대해 지체없이 처리합니다.



제12조 (회원의 의무)

1.회원은 관계법령, 이 약관의 규정, 이용안내 및 주의사항 등 'DGN'이 통지하는 사항을 준수하여야 하며, 기타 'DGN'의 업무에 방해되는 행위를 하여서는 안됩니다.

2.회원은 'DGN'의 사전 승낙 없이 서비스를 이용하여 어떠한 영리 행위도 할 수 없습니다.

3.회원은 서비스를 이용하여 얻은 정보를 '갑'의 사전 승낙 없이 복사, 복제, 변경, 번역, 출판,방송 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없습니다.

4.회원은 이용신청서의 기재내용 중 변경된 내용이 있는 경우 서비스를 통하여 그 내용을 'DGN'에게 통지하여야 합니다.

5.회원은 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 안됩니다. 
  ①다른 회원의 아이디(ID)를 부정 사용하는 행위 
  ②범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 행위 
  ③선량한 풍속, 기타 사회질서를 해하는 행위
  ④타인의 명예를 훼손하거나 모욕하는 행위  
  ⑤타인의 지적재산권 등의 권리를 침해하는 행위 
  ⑥해킹행위 또는 컴퓨터바이러스의 유포행위  
  ⑦타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로 전송 또는 타 사이트를 링크하는 행위  
  ⑧서비스의 안전적인 운영에 지장을 주거나 줄 우려가 있는 일체의 행위
  ⑨기타 관계법령에 위배되는 행위  
  ⑩게시판 등 커뮤니티를 통한 상업적 광고홍보 또는 상거래 행위


제13조 (게시물 또는 내용물의 삭제) 

'DGN'은 서비스의 게시물 또는 내용물이 제12조의 규정에 위반되거나 'DGN' 소정의 게시기간을 초과하는 경우 사전 통지나 동의 없이 이를 삭제할 수 있습니다.


제14조 (게시물에 대한 권리·의무)

게시물에 대한 저작권을 포함한 모든 권리 및 책임은 이를 게시한 회원에게 있습니다.


제15조 (양도금지)

회원이 서비스의 이용권한, 기타 이용계약상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.


제16조 (계약해지 및 이용제한) 

1.회원이 이용계약을 해지하고자 하는 때에는 본인이 서비스 또는 전자 우편을 통하여 해지하고자 하는 날의 1일전까지 (단, 해지일이 법정 공휴일인 경우 공휴일 개시 2일전까지)이를 'DGN'에게 신청하여야 합니다.

2.'DGN'은 해지 및 탈퇴를 한 회원이 다시 이용신청을 하는 경우 일정기간 그 승낙을 제한할 수 있습니다.




제17조 (면책·배상)

1.'DGN'은 회원이 서비스에 게재한 정보, 자료, 사실의 정확성, 신뢰성 등 그 내용에 관하여는 어떠한 책임을 부담하지 아니하고,  회원은 자기의 책임아래 서비스를 이용하며, 서비스를 이용하여 게시 또는 전송한 자료 등에 관하여 손해가 발생하거나 자료의 취사 선택, 기타서비스 이용과 관련하여 어떠한 불이익이 발생 하더라도 이에 대한 모든 책임은 회원에게 있습니다.

2.'DGN'은 제12조의 규정에 위반하여 회원간 또는 회원과 제3자간에 서비스를 매개로 하여 물품거래 등과 관련하여 어떠한 책임도 부담하지 아니하고, 회원이 서비스의 이용과 관련하여 기대하는 이익에 관하여 책임을 부담하지 않습니다. 

3.회원 아이디(ID)와 비밀번호의 관리 및 이용상의 부주의로 인하여 발생 되는 손해 또는 제3자에 의한 부정사용 등에 대한 책임은 모두 회원에게 있습니다.

4.회원이 제12조, 기타 이 약관의 규정을 위반함으로 인하여 'DGN'이 회원 또는 제3자에 대하여 책임을 부담하게 되고, 이로써 'DGN'에게 손해가 발생하게 되는 경우, 이 약관을 위반한 회원은 'DGN'에게  발생하는 모든 손해를 배상하여야 하며, 동 손해로부터 'DGN'을 면책시켜야 합니다.




제18조 (분쟁의 해결) 

1.'DGN'과 회원은 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 하여야 합니다.

2.1항의 규정에도 불구하고 분쟁으로 인하여 소송이 제기될 경우 소송은 '갑'의 소재지를 관할하는 법원의 관할로 합니다.`;
terms.style.width = "100em";
terms.style.height = "5em";
terms.style.overflow = "scroll";
document.querySelector('body').appendChild(terms);

/*
    박성철 / 전체 inline-block이므로 br태그로 구분
*/
const br = document.createElement('br');

/*
    박성철 / 회원가입 시 form태그의 정보를 ajax로 전송하기 위함
*/
const form =  document.createElement('form');

/*
    박성철 / 체크박스 구현 후 약관동의 여부 form 데이터에 append / Start
*/
const label = document.createElement('LABEL');

const checkbox = document.createElement('input');
checkbox.setAttribute("type", "checkbox");

const allow = document.createElement('p');
allow.className = "inline-block";
allow.innerHTML="동의합니다";

label.appendChild(checkbox);
label.appendChild(allow);
form.appendChild(label);
/*
    End
*/

/*
    박성철 / 아이디 입력 후 중복체크 / Start
*/
const id_1 = document.createElement('p');
id_1.className = "inline-block";
id_1.innerHTML="아이디";

const id_2 = document.createElement('input');
id_2.className = "inline-block";
id_2.setAttribute('type', 'text');
id_2.setAttribute('placeholder', '아이디를 입력해주세요');

// id 중복체크 했는지 검증하는 변수
let id_confirm = false;
// id 정규표현식 검증하는 변수
let id_Regex = false;
const id_3 = document.createElement('button');
id_3.innerHTML="중복체크";

const id_4 = document.createElement('p');
id_4.innerHTML="아이디는 영어 대소문자 / 숫자 4-12자리로 구성되어야 합니다.";
id_4.style.display = "none";
id_4.style.color = "red";

// 중복체크 클릭 시 입력한 id의 value 값이 존재한다면 true 부여 & 정규표현식 통과가 안되었다면 alert
id_3.addEventListener("click", (event)=>{
    event.preventDefault();
    if(!id_2.value || !id_Regex) {
        alert("아이디를 확인해주세요!");
        return;
    }
        /* 통신에 사용 될 XMLHttpRequest 객체 정의 */
		httpRequest = new XMLHttpRequest();
		/* httpRequest의 readyState가 변화했을때 함수 실행 */
	    httpRequest.onreadystatechange = () => {
	    	/* readyState가 Done이고 응답 값이 200일 때, 받아온 response로 name과 age를 그려줌 */
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
			if (httpRequest.status === 200) {
			    result = httpRequest.response;
                console.log(result);
                for(let i = 0; i < result.length; i++) {
                    if(id_2.value == result[i].user_id) {
                        alert("중복된 아이디입니다!");
                        return;
                    }
                }
                id_confirm = true;
                alert("중복되지 않은 아이디입니다.");
			    } else {
			        alert('request에 뭔가 문제가 있어요.');
			    }
			}
	    };
	    /* Post 방식으로 요청 */
	    httpRequest.open('GET', 'http://127.0.0.1:3000/list', true);
	    /* Response Type을 Json으로 사전 정의 */
	    httpRequest.responseType = "json";
	    /* 요청 Header에 컨텐츠 타입은 Json으로 사전 정의 */
	    httpRequest.setRequestHeader('Content-Type', 'application/json');
	    /* 정의된 서버에 Json 형식의 요청 Data를 포함하여 요청을 전송 */
	    httpRequest.send();
});

// id의 value 값이 변경된다면 false 부여 & 정규표현식 검증 후 통과하면 id_4 display none으로 id_Regex true로 설정
id_2.addEventListener("change", ()=>{
    id_confirm = false;
    let regex = /^[A-Za-z0-9+]{4,12}$/;
    if(regex.test(id_2.value)) {
        id_Regex = true;
        id_4.style.display = "none";
        return;
    }
    id_4.style.display = "block";
    id_Regex = false;
});

form.appendChild(horizon.cloneNode(true));
form.appendChild(id_1);
form.appendChild(id_2);
form.appendChild(id_3);
form.appendChild(id_4);
/*
    End
*/

/*
    박성철 / 비밀번호 입력 / Start
*/
const pw_1 = document.createElement('p');
pw_1.className = "inline-block";
pw_1.innerHTML="비밀번호";

const pw_2 = document.createElement('input');
pw_2.className = "inline-block";
pw_2.setAttribute('type', 'password');
pw_2.setAttribute('placeholder', '비밀번호를 입력해주세요');

// 대현 : 비밀번호 정규표현식 검증하는 변수
let pw_Regex = false;

// 대현 : 비밀번호 정규표현식 문구 출력
const pw_3 = document.createElement('p');
pw_3.innerHTML="비밀번호는 영어 대소문자 / 숫자 4-12자리로 구성되어야 합니다.";
pw_3.style.display = "none";
pw_3.style.color = "red";

// 대현 : 비밀번호 정규표현식 
pw_2.addEventListener("change", ()=>{
    let regex = /^[A-Za-z0-9+]{4,12}$/;
    if(regex.test(pw_2.value)) {
        email_Regex = true;
        pw_3.style.display = "none";
        return;
    }
    pw_3.style.display = "block";
    pw_Regex = false;
});

form.appendChild(br.cloneNode(true));
form.appendChild(pw_1);
form.appendChild(pw_2);

// 대현 : 비밀번호 문구 출력 
form.appendChild(pw_3);

/*
    End
*/

/*
    박성철 / 비밀번호 확인 입력 / Start
*/
const pw_confirm_1 = document.createElement('p');
pw_confirm_1.className = "inline-block";
pw_confirm_1.innerHTML="비밀번호확인";

const pw_confirm_2 = document.createElement('input');
pw_confirm_2.className = "inline-block";
pw_confirm_2.setAttribute('type', 'password');
pw_confirm_2.setAttribute('placeholder', '비밀번호를 다시 입력해주세요');

form.appendChild(br.cloneNode(true));
form.appendChild(pw_confirm_1);
form.appendChild(pw_confirm_2);
/*
    End
*/

/*
    박성철 / 이름 입력 / Start
*/
const name_1 = document.createElement('p');
name_1.className = "inline-block";
name_1.innerHTML="이름";

const name_2 = document.createElement('input');
name_2.className = "inline-block";
name_2.setAttribute('type', 'text');
name_2.setAttribute('placeholder', '이름을 입력해주세요');

form.appendChild(br.cloneNode(true));
form.appendChild(name_1);
form.appendChild(name_2);
/*
    End
*/

/*
    박성철 / 이메일 입력 / Start
*/
const email_1 = document.createElement('p');
email_1.className = "inline-block";
email_1.innerHTML= "이메일";

const email_2 = document.createElement('input');
email_2.className = "inline-block";
email_2.setAttribute('type', 'text');
email_2.setAttribute('placeholder', '이메일을 입력해주세요');

const email_3 = document.createElement('p');
email_3.className = "inline-block";
email_3.innerHTML="@";

form.appendChild(br.cloneNode(true));
form.appendChild(email_1);
form.appendChild(email_2);
form.appendChild(email_3);

// email_array에 특정 이메일 주소를 저장
email_array = ["naver.com", "daum.com", "google.com", "hanmail.net", "직접입력"];

// value 초기값을 email_array[0]로 지정
const email_4 = document.createElement('input');
email_4.className = "inline-block";
email_4.setAttribute('type', 'text');
email_4.setAttribute('value', email_array[0]);

const email_5 = document.createElement('select');
email_5.className = "inline-block";
// select 태그가 변경되었을 때 선택한 값으로 email 후반부의 value를 변경
email_5.addEventListener('change', function() {
    email_4.value = email_5.value;
    if(email_5.value === "직접입력") {
        email_4.value = "";
        email_4.setAttribute('placeholder', "직접입력");
    }
});

//  대현 : 이메일 정규표현식 검증하는 변수
let email_Regex = false;

// 대현 : 이메일 정규표현식 문구 출력
const email_6 = document.createElement('p');
email_6.innerHTML="이메일은 영어 대소문자 / 숫자 4-12자리로 구성되어야 합니다.";
email_6.style.display = "none";
email_6.style.color = "red";

// 대현 : 이메일 정규표현식 
email_2.addEventListener("change", ()=>{
    let regex = /^[A-Za-z0-9+]{4,12}$/;
    if(regex.test(email_2.value)) {
        email_Regex = true;
        email_6.style.display = "none";
        return;
    }
    email_6.style.display = "block";
    email_Regex = false;
});

// email_array의 원소개수만큼 for문을 돌려서 option 태그에 value와 innerHTML에 해당 원소 값을 저장하고 select의 option태그로 append
for(let i = 0; i < email_array.length; i++) {
    let option = document.createElement('option');
    option.value = email_array[i];
    option.innerHTML = email_array[i];
    email_5.appendChild(option);
}

form.appendChild(email_4);
form.appendChild(email_5);

// 대현 : email 문구 출력 
form.appendChild(email_6);

/*
    End
*/

/*
    박성철 / 그동안 만들었던 form 태그를 body태그에 추가
*/
document.querySelector('body').appendChild(form);

/*
    박성철 / 회원가입버튼 구현
*/
const confirm = document.createElement('button');
confirm.innerHTML="회원가입";
// 버튼 클릭 시 모든 요소를 체크 후 정상적으로 작성되었다면 data 객체에 저장
confirm.addEventListener("click", ()=>{
    if(! form.elements[0].checked) {
        alert("약관에 동의해주세요!")
        return;
    }
    if(form.elements[3].value != form.elements[4].value) {
        alert("비밀번호가 다릅니다!")
        return;
    }
    if(!form.elements[1].value) {
        alert("아이디를 입력해주세요!")
        return;
    }
    if(!form.elements[3].value) {
        alert("비밀번호를 입력해주세요!")
        return;
    }
    if(!form.elements[5].value) {
        alert("이름을 입력해주세요!")
        return;
    }
    if(!form.elements[6].value || !form.elements[7].value) {
        alert("이메일을 입력해주세요!")
        return;
    }
    if(!id_confirm) {
        alert("아이디 중복체크를 해주세요!")
        return;
    }
    // for(let i = 0; i < form.elements.length; i++) {
    //     console.log(form.elements[i]);
    // }
    const data = {
        id : form.elements[1].value,
        pw : form.elements[3].value,
        name : form.elements[5].value,
        email : form.elements[6].value + "@" + form.elements[7].value,
    }
    console.log(data);

        /* 통신에 사용 될 XMLHttpRequest 객체 정의 */
		httpRequest = new XMLHttpRequest();
		/* httpRequest의 readyState가 변화했을때 함수 실행 */
	    httpRequest.onreadystatechange = () => {
	    	/* readyState가 Done이고 응답 값이 200일 때, 받아온 response로 name과 age를 그려줌 */
		if (httpRequest.readyState === XMLHttpRequest.DONE) {
			if (httpRequest.status === 200) {
			    let result = httpRequest.response;
                console.log(result);
                alert("회원가입을 축하합니다!");
                location.reload();
			    } else {
			        alert('request에 뭔가 문제가 있어요.');
			    }
			}
	    };
	    /* Post 방식으로 요청 */
	    httpRequest.open('POST', 'http://127.0.0.1:3000/test', true);
	    /* Response Type을 Json으로 사전 정의 */
	    httpRequest.responseType = "json";
	    /* 요청 Header에 컨텐츠 타입은 Json으로 사전 정의 */
	    httpRequest.setRequestHeader('Content-Type', 'application/json');
        // 1은 쿠키에서 가져오는 값
        httpRequest.setRequestHeader('data', JSON.stringify(data));
	    /* 정의된 서버에 Json 형식의 요청 Data를 포함하여 요청을 전송 */
	    httpRequest.send();
})
document.querySelector('body').appendChild(horizon.cloneNode(true));
document.querySelector('body').appendChild(br.cloneNode(true));
document.querySelector('body').appendChild(confirm);
/*
    End
*/