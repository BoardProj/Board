const login = document.createElement('button');
login.style.display="inline-block";
login.innerHTML="로그인";

const register = document.createElement('button');
register.style.display="inline-block";
register.innerHTML="회원가입";


const detail = document.createElement('p');
detail.innerHTML="회원정보";


const hr = document.createElement('hr');


const br = document.createElement('br');

const name_1 = document.createElement('p');
name_1.style.display="inline-block";
name_1.innerHTML="이름";

const name_2 = document.createElement('p');
name_2.style.display="inline-block";
name_2.innerHTML="****";

const name_button = document.createElement('button');
name_button.style.display="inline-block";
name_button.innerHTML="변경";

/*
    박성철 / Modal창 Base
*/
const modal_background = document.createElement('div');
modal_background.style.display="none";
modal_background.className = "modal_background";

let modal_wrap = document.createElement('div');
modal_wrap.style.display="none";
modal_wrap.className = "modal_wrap";

/*
    박성철 / 이름 변경 Modal창 / Start
*/

//이름 변경 버튼 누르면 Modal창 display block
name_button.addEventListener("click", ()=> {

    const name_modal_text_1 = document.createElement('p');
    name_modal_text_1.className = "text";
    name_modal_text_1.innerHTML = "현재 이름 : " + "****";
    modal_wrap.appendChild(name_modal_text_1);

    const name_modal_text_2 = document.createElement('p');
    name_modal_text_2.classList.add("text");
    name_modal_text_2.classList.add("inline-block");
    name_modal_text_2.innerHTML = "변경할 이름 : ";
    modal_wrap.appendChild(name_modal_text_2);

    const name_modal_input_3 = document.createElement('input');
    name_modal_input_3.classList.add("text");
    name_modal_input_3.classList.add("inline-block");
    name_modal_input_3.setAttribute('type', 'text');
    name_modal_input_3.setAttribute('placeholder', '변경할 이름을 입력해주세요');
    name_modal_input_3.style.width="200px";
    modal_wrap.appendChild(name_modal_input_3);
    modal_wrap.appendChild(br.cloneNode(true));

    const name_modal_button_4 = document.createElement('button');
    name_modal_button_4.classList.add("text");
    name_modal_input_3.classList.add("inline-block");
    name_modal_button_4.innerHTML="Saved";
    modal_wrap.appendChild(name_modal_button_4);

    const name_modal_button_5 = document.createElement('button');
    name_modal_button_5.classList.add("text");
    name_modal_input_3.classList.add("inline-block");
    name_modal_button_5.innerHTML="Closed";
    modal_wrap.appendChild(name_modal_button_5);

    //Close 버튼 누르면 Modal창 display none & 자식노드 모두 제거
    name_modal_button_5.addEventListener("click", ()=> {
    modal_background.style.display="none";
    modal_wrap.style.display="none";
    //자식노드 제거
    while ( modal_wrap.hasChildNodes() ) { 
        modal_wrap.removeChild( modal_wrap.firstChild );
    }
    })

    modal_background.style.display="block";
    modal_wrap.style.display="block";
});
/*
    End
*/


const id_1 = document.createElement('p');
id_1.style.display="inline-block";
id_1.innerHTML="아이디";

const id_2 = document.createElement('p');
id_2.style.display="inline-block";
id_2.innerHTML="****";

const id_button = document.createElement('button');
id_button.style.display="inline-block";
id_button.innerHTML="변경";

/*
    박성철 / 이름 변경 Modal창 / Start
*/

//이름 변경 버튼 누르면 Modal창 display block
id_button.addEventListener("click", ()=> {

    const id_modal_text_1 = document.createElement('p');
    id_modal_text_1.className = "text";
    id_modal_text_1.innerHTML = "현재 아이디 : " + "****";
    modal_wrap.appendChild(id_modal_text_1);

    const id_modal_text_2 = document.createElement('p');
    id_modal_text_2.classList.add("text");
    id_modal_text_2.classList.add("inline-block");
    id_modal_text_2.innerHTML = "변경할 아이디 : ";
    modal_wrap.appendChild(id_modal_text_2);

    const id_modal_input_3 = document.createElement('input');
    id_modal_input_3.classList.add("text");
    id_modal_input_3.classList.add("inline-block");
    id_modal_input_3.setAttribute('type', 'text');
    id_modal_input_3.setAttribute('placeholder', '변경할 아이디를 입력해주세요');
    id_modal_input_3.style.width="200px";
    modal_wrap.appendChild(id_modal_input_3);

    const id_modal_button_4 = document.createElement('button');
    id_modal_button_4.classList.add("text");
    id_modal_button_4.classList.add("inline-block");
    id_modal_button_4.innerHTML="중복체크";
    // id 중복체크 했는지 검증하는 변수
    let id_confirm = false;
    // id 정규표현식 검증하는 변수
    let id_Regex = false;
    // 중복체크 클릭 시 입력한 id의 value 값이 존재한다면 true 부여 & 정규표현식 통과가 안되었다면 alert
    id_modal_button_4.addEventListener("click", (event)=>{
        event.preventDefault();
        if(!id_modal_input_3.value || !id_Regex) {
            alert("아이디를 확인해주세요!");
            return;
        }
        alert("중복체크 완료!");
        id_confirm = true;
    });
    modal_wrap.appendChild(id_modal_button_4);
    modal_wrap.appendChild(br.cloneNode(true));

    const id_modal_text_5 = document.createElement('p');
    id_modal_text_5.innerHTML="아이디는 영어대소문자 / 숫자로 4-12자리로 구성되어야합니다.";
    id_modal_text_5.style.display = "none";
    id_modal_text_5.style.color = "red";
    // id의 value 값이 변경된다면 false 부여 & 정규표현식 검증 후 통과하면 id_4 display none으로 id_Regex true로 설정
    id_modal_input_3.addEventListener("change", ()=>{
        id_confirm = false;
        let regex = /^[A-Za-z0-9+]{4,12}$/;
        if(regex.test(id_modal_input_3.value)) {
            id_Regex = true;
            id_modal_text_5.style.display = "none";
            return;
        }
        id_modal_text_5.style.display = "block";
        id_Regex = false;
    });
    modal_wrap.appendChild(id_modal_text_5);

    const id_modal_button_6 = document.createElement('button');
    id_modal_button_6.classList.add("text");
    id_modal_button_6.classList.add("inline-block");
    id_modal_button_6.innerHTML="Saved";
    modal_wrap.appendChild(id_modal_button_6);

    //Save 버튼 누르면 중복체크 확인 후 저장
    id_modal_button_6.addEventListener("click", ()=> {
        if(!id_confirm) {
            alert("아이디 중복체크를 해주세요!")
            return;
        }
        alert("변경완료");
    });

    const id_modal_button_7 = document.createElement('button');
    id_modal_button_7.classList.add("text");
    id_modal_button_7.classList.add("inline-block");
    id_modal_button_7.innerHTML="Closed";
    modal_wrap.appendChild(id_modal_button_7);

    //Close 버튼 누르면 Modal창 display none & 자식노드 모두 제거
    id_modal_button_7.addEventListener("click", ()=> {
    modal_background.style.display="none";
    modal_wrap.style.display="none";
    //자식노드 제거
    while ( modal_wrap.hasChildNodes() ) { 
        modal_wrap.removeChild( modal_wrap.firstChild );
    }
    })

    modal_background.style.display="block";
    modal_wrap.style.display="block";
});
/*
    End
*/


const password_1 = document.createElement('p');
password_1.style.display="inline-block";
password_1.innerHTML="비밀번호";

const password_2 = document.createElement('p');
password_2.style.display="inline-block";
password_2.innerHTML="****";

const password_button = document.createElement('button');
password_button.style.display="inline-block";
password_button.innerHTML="변경";

/*
    박성철 / 비밀번호 변경 Modal창 / Start
*/

//비밀번호 변경 버튼 누르면 Modal창 display block
password_button.addEventListener("click", ()=> {

    const pw_modal_text_1 = document.createElement('p');
    pw_modal_text_1.className = "text";
    pw_modal_text_1.innerHTML = "현재 비밀번호 : " + "****";
    modal_wrap.appendChild(pw_modal_text_1);

    const pw_modal_text_2 = document.createElement('p');
    pw_modal_text_2.classList.add("text");
    pw_modal_text_2.classList.add("inline-block");
    pw_modal_text_2.innerHTML = "변경할 비밀번호 : ";
    modal_wrap.appendChild(pw_modal_text_2);

    const pw_modal_input_3 = document.createElement('input');
    pw_modal_input_3.classList.add("text");
    pw_modal_input_3.classList.add("inline-block");
    pw_modal_input_3.setAttribute('type', 'password');
    pw_modal_input_3.setAttribute('placeholder', '변경할 비밀번호를 입력해주세요');
    pw_modal_input_3.style.width="200px";
    modal_wrap.appendChild(pw_modal_input_3);

    const pw_modal_text_4 = document.createElement('p');
    pw_modal_text_4.innerHTML="비밀번호는 영어대소문자 / 숫자로 4-12자리로 구성되어야합니다.";
    pw_modal_text_4.style.display = "none";
    pw_modal_text_4.style.color = "red";
    // id의 value 값이 변경된다면 false 부여 & 정규표현식 검증 후 통과하면 id_4 display none으로 id_Regex true로 설정
    pw_modal_input_3.addEventListener("change", ()=>{
        let regex = /^[A-Za-z0-9+]{4,12}$/;
        if(regex.test(pw_modal_input_3.value)) {
            pw_Regex = true;
            pw_modal_text_4.style.display = "none";
            return;
        }
        pw_modal_text_4.style.display = "block";
        pw_Regex = false;
    });
    modal_wrap.appendChild(pw_modal_text_4);

    const pw_modal_text_5 = document.createElement('p');
    pw_modal_text_5.classList.add("text");
    pw_modal_text_5.classList.add("inline-block");
    pw_modal_text_5.innerHTML = "변경할 비밀번호 확인 : ";
    modal_wrap.appendChild(pw_modal_text_5);

    const pw_modal_input_6 = document.createElement('input');
    pw_modal_input_6.classList.add("text");
    pw_modal_input_6.classList.add("inline-block");
    pw_modal_input_6.setAttribute('type', 'password');
    pw_modal_input_6.setAttribute('placeholder', '변경할 비밀번호를 다시 입력해주세요');
    pw_modal_input_6.style.width="200px";
    modal_wrap.appendChild(pw_modal_input_6);

    // pw 정규표현식 검증하는 변수
    let pw_Regex = false;

    modal_wrap.appendChild(br.cloneNode(true));

    const pw_modal_button_7 = document.createElement('button');
    pw_modal_button_7.classList.add("text");
    pw_modal_button_7.classList.add("inline-block");
    pw_modal_button_7.innerHTML="Saved";
    modal_wrap.appendChild(pw_modal_button_7);

    //Save 버튼 누르면 중복체크 확인 후 저장
    pw_modal_button_7.addEventListener("click", ()=> {
        if(!pw_Regex) {
            alert("비밀번호 형식을 맞춰주세요!")
            return;
        }
        if(pw_modal_input_3.value != pw_modal_input_6.value) {
            alert("비밀번호가 다릅니다.")
            return;
        }
        alert("변경완료");
    });

    const pw_modal_button_8 = document.createElement('button');
    pw_modal_button_8.classList.add("text");
    pw_modal_button_8.classList.add("inline-block");
    pw_modal_button_8.innerHTML="Closed";
    modal_wrap.appendChild(pw_modal_button_8);

    //Close 버튼 누르면 Modal창 display none & 자식노드 모두 제거
    pw_modal_button_8.addEventListener("click", ()=> {
    modal_background.style.display="none";
    modal_wrap.style.display="none";
    //자식노드 제거
    while ( modal_wrap.hasChildNodes() ) { 
        modal_wrap.removeChild( modal_wrap.firstChild );
    }
    })

    modal_background.style.display="block";
    modal_wrap.style.display="block";
});
/*
    End
*/


const email_1 = document.createElement('p');
email_1.style.display="inline-block";
email_1.innerHTML="이메일";

const email_2 = document.createElement('p');
email_2.style.display="inline-block";
email_2.innerHTML="****";

const email_button = document.createElement('button');
email_button.style.display="inline-block";
email_button.innerHTML="변경";

/*
    박성철 / 이메일 변경 Modal창 / Start
*/

//이메일 변경 버튼 누르면 Modal창 display block
email_button.addEventListener("click", ()=> {

    const email_modal_text_1 = document.createElement('p');
    email_modal_text_1.className = "text";
    email_modal_text_1.innerHTML = "현재 이메일 : " + "****";
    modal_wrap.appendChild(email_modal_text_1);

    const email_modal_text_2 = document.createElement('p');
    email_modal_text_2.classList.add("text");
    email_modal_text_2.classList.add("inline-block");
    email_modal_text_2.innerHTML = "변경할 이메일 : " + "<br/>";
    modal_wrap.appendChild(email_modal_text_2);
    modal_wrap.appendChild(br.cloneNode(true));

    const email_modal_input_3 = document.createElement('input');
    email_modal_input_3.classList.add("text");
    email_modal_input_3.classList.add("inline-block");
    email_modal_input_3.style.width="200px";
    email_modal_input_3.setAttribute('type', 'text');
    email_modal_input_3.setAttribute('placeholder', '변경할 이메일을 입력해주세요');
    modal_wrap.appendChild(email_modal_input_3);

    const email_modal_text_4 = document.createElement('p');
    email_modal_text_4.classList.add("text");
    email_modal_text_4.classList.add("inline-block");
    email_modal_text_4.innerHTML="@";
    modal_wrap.appendChild(email_modal_text_4);

    // email_array에 특정 이메일 주소를 저장
    email_array = ["naver.com", "daum.com", "google.com", "hanmail.net", "직접입력"];

    // value 초기값을 email_array[0]로 지정
    const email_modal_input_5 = document.createElement('input');
    email_modal_input_5.classList.add("text");
    email_modal_input_5.classList.add("inline-block");
    email_modal_input_5.style.width="100px";
    email_modal_input_5.setAttribute('type', 'text');
    email_modal_input_5.setAttribute('value', email_array[0]);
    modal_wrap.appendChild(email_modal_input_5);

    const email_modal_select_6 = document.createElement('select');
    email_modal_select_6.classList.add("text");
    email_modal_select_6.classList.add("inline-block");
    // select 태그가 변경되었을 때 선택한 값으로 email 후반부의 value를 변경
    email_modal_select_6.addEventListener('change', function() {
        email_modal_input_5.value = email_modal_select_6.value;
        if(email_modal_select_6.value === "직접입력") {
            email_modal_input_5.value = "";
            email_modal_input_5.setAttribute('placeholder', "직접입력");
        }
    });
    // email_array의 원소개수만큼 for문을 돌려서 option 태그에 value와 innerHTML에 해당 원소 값을 저장하고 select의 option태그로 append
    for(let i = 0; i < email_array.length; i++) {
        let option = document.createElement('option');
        option.value = email_array[i];
        option.innerHTML = email_array[i];
        email_modal_select_6.appendChild(option);
    }
    modal_wrap.appendChild(email_modal_select_6);

    // email 정규표현식 검증하는 변수
    let email_Regex = false;

    const email_modal_text_7 = document.createElement('p');
    email_modal_text_7.innerHTML="이메일은 영어대소문자 / 숫자로 4-12자리로 구성되어야합니다.";
    email_modal_text_7.style.display = "none";
    email_modal_text_7.style.color = "red";
    // id의 value 값이 변경된다면 false 부여 & 정규표현식 검증 후 통과하면 id_4 display none으로 id_Regex true로 설정
    email_modal_input_3.addEventListener("change", ()=>{
        let regex = /^[A-Za-z0-9+]{4,12}$/;
        if(regex.test(email_modal_input_3.value)) {
            email_Regex = true;
            email_modal_text_7.style.display = "none";
            return;
        }
        email_modal_text_7.style.display = "block";
        email_Regex = false;
    });
    modal_wrap.appendChild(email_modal_text_7);

    const email_modal_button_8 = document.createElement('button');
    email_modal_button_8.classList.add("text");
    email_modal_button_8.classList.add("inline-block");
    email_modal_button_8.innerHTML="Saved";
    modal_wrap.appendChild(email_modal_button_8);

    //Save 버튼 누르면 중복체크 확인 후 저장
    email_modal_button_8.addEventListener("click", ()=> {
        if(!email_Regex || !email_modal_input_5.value) {
            alert("이메일 형식을 맞춰주세요!")
            return;
        }
        alert("변경완료");
    });

    const email_modal_button_9 = document.createElement('button');
    email_modal_button_9.classList.add("text");
    email_modal_button_9.classList.add("inline-block");
    email_modal_button_9.innerHTML="Closed";
    modal_wrap.appendChild(email_modal_button_9);

    //Close 버튼 누르면 Modal창 display none & 자식노드 모두 제거
    email_modal_button_9.addEventListener("click", ()=> {
    modal_background.style.display="none";
    modal_wrap.style.display="none";
    //자식노드 제거
    while ( modal_wrap.hasChildNodes() ) { 
        modal_wrap.removeChild( modal_wrap.firstChild );
    }
    })

    modal_background.style.display="block";
    modal_wrap.style.display="block";
});
/*
    End
*/


const grade_1 = document.createElement('p');
grade_1.style.display="inline-block";
grade_1.innerHTML="회원등급";

const grade_2 = document.createElement('p');
grade_2.style.display="inline-block";
grade_2.innerHTML="****";


const main_button = document.createElement('button');
main_button.innerHTML="메인으로";

const delete_button = document.createElement('button');
delete_button.innerHTML="회원탈퇴";
delete_button.addEventListener("click", ()=> {
    alert("회원탈퇴 완료!")
})

document.querySelector('body').appendChild(modal_background);
document.querySelector('body').appendChild(modal_wrap);

document.querySelector('body').appendChild(login);
document.querySelector('body').appendChild(register);


document.querySelector('body').appendChild(detail);


document.querySelector('body').appendChild(br.cloneNode(true));


document.querySelector('body').appendChild(hr.cloneNode(true));


document.querySelector('body').appendChild(name_1);
document.querySelector('body').appendChild(name_2);
document.querySelector('body').appendChild(name_button);


document.querySelector('body').appendChild(br.cloneNode(true));


document.querySelector('body').appendChild(id_1);
document.querySelector('body').appendChild(id_2);
document.querySelector('body').appendChild(id_button);


document.querySelector('body').appendChild(br.cloneNode(true));


document.querySelector('body').appendChild(password_1);
document.querySelector('body').appendChild(password_2);
document.querySelector('body').appendChild(password_button);


document.querySelector('body').appendChild(br.cloneNode(true));


document.querySelector('body').appendChild(email_1);
document.querySelector('body').appendChild(email_2);
document.querySelector('body').appendChild(email_button);


document.querySelector('body').appendChild(br.cloneNode(true));


document.querySelector('body').appendChild(grade_1);
document.querySelector('body').appendChild(grade_2);


document.querySelector('body').appendChild(hr.cloneNode(true));


document.querySelector('body').appendChild(main_button);
document.querySelector('body').appendChild(delete_button);

//Ver#2.0


