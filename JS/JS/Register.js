const login = document.createElement('button');
login.className = "inline-block";
login.innerHTML="로그인";

const register = document.createElement('button');
register.className = "inline-block";
register.innerHTML="회원가입";

const register1 = document.createElement('p');
register1.innerHTML="회원가입";

const horizon = document.createElement('hr');

const terms = document.createElement('p');
terms.innerHTML=`여러분을 환영합니다.
Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.여러분을 환영합니다.
Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.여러분을 환영합니다.
Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.여러분을 환영합니다.
Digital Game Nomad 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 
본 약관은 다양한 Digital Game Nomad 서비스의 이용과 관련하여 Digital Game Nomad 서비스를 제공하는 Digital Game Nomad 주식회사(이하 ‘Digital Game Nomad’)와 
이를 이용하는 Digital Game Nomad 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 
아울러 여러분의 Digital Game Nomad 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.`;
terms.style.width = "100em";
terms.style.height = "5em";
terms.style.overflow = "scroll";

const br = document.createElement('br');

const form =  document.createElement('form');

const label = document.createElement('LABEL');

const checkbox = document.createElement('input');
checkbox.setAttribute("type", "checkbox");

const allow = document.createElement('p');
allow.className = "inline-block";
allow.innerHTML="동의합니다";

const id_1 = document.createElement('p');
id_1.className = "inline-block";
id_1.innerHTML="아이디";

const id_2 = document.createElement('input');
id_2.className = "inline-block";
id_2.setAttribute('type', 'text');
id_2.setAttribute('placeholder', '내용을 입력해주세요');

let id_confirm = false;
const id_3 = document.createElement('button');
id_3.innerHTML="중복체크";
id_3.addEventListener("click", (event)=>{
    event.preventDefault();
    if(!id_2.value) {
        alert("아이디를 입력해주세요!");
        return;
    }
    id_confirm = true;
});
id_2.addEventListener("change", ()=>{
    id_confirm = false;
});

const pw_1 = document.createElement('p');
pw_1.className = "inline-block";
pw_1.innerHTML="비밀번호";

const pw_2 = document.createElement('input');
pw_2.className = "inline-block";
pw_2.setAttribute('type', 'password');
pw_2.setAttribute('placeholder', '내용을 입력해주세요');

const pw_confirm_1 = document.createElement('p');
pw_confirm_1.className = "inline-block";
pw_confirm_1.innerHTML="비밀번호확인";

const pw_confirm_2 = document.createElement('input');
pw_confirm_2.className = "inline-block";
pw_confirm_2.setAttribute('type', 'password');
pw_confirm_2.setAttribute('placeholder', '내용을 입력해주세요');

const name_1 = document.createElement('p');
name_1.className = "inline-block";
name_1.innerHTML="이름";

const name_2 = document.createElement('input');
name_2.className = "inline-block";
name_2.setAttribute('type', 'text');
name_2.setAttribute('placeholder', '내용을 입력해주세요');

const email_1 = document.createElement('p');
email_1.className = "inline-block";
email_1.innerHTML="이메일";

const email_2 = document.createElement('input');
email_2.className = "inline-block";
email_2.setAttribute('type', 'text');
email_2.setAttribute('placeholder', '내용을 입력해주세요');

const email_3 = document.createElement('p');
email_3.className = "inline-block";
email_3.innerHTML="@";

document.querySelector('body').appendChild(login);
document.querySelector('body').appendChild(register);
document.querySelector('body').appendChild(register1);
document.querySelector('body').appendChild(horizon);
document.querySelector('body').appendChild(terms);
label.appendChild(checkbox);
label.appendChild(allow);
form.appendChild(label);
form.appendChild(horizon.cloneNode(true));
form.appendChild(id_1);
form.appendChild(id_2);
form.appendChild(id_3);
form.appendChild(br.cloneNode(true));
form.appendChild(pw_1);
form.appendChild(pw_2);
form.appendChild(br.cloneNode(true));
form.appendChild(pw_confirm_1);
form.appendChild(pw_confirm_2);
form.appendChild(br.cloneNode(true));
form.appendChild(name_1);
form.appendChild(name_2);
form.appendChild(br.cloneNode(true));
form.appendChild(email_1);
form.appendChild(email_2);
form.appendChild(email_3);

email_array = ["naver.com", "daum.com", "google.com", "hanmail.net", "직접입력"];

const email_4 = document.createElement('input');
email_4.className = "inline-block";
email_4.setAttribute('type', 'text');
email_4.setAttribute('value', email_array[0]);

const email_5 = document.createElement('select');
email_5.className = "inline-block";
email_5.addEventListener('change', function() {
    email_4.value = email_5.value;
    if(email_5.value === "직접입력") {
        email_4.value = "";
        email_4.setAttribute('placeholder', "직접입력");
    }
});

form.appendChild(email_4);
form.appendChild(email_5);
document.querySelector('body').appendChild(form);

for(let i = 0; i < email_array.length; i++) {
    let option = document.createElement('option');
    option.value = email_array[i];
    option.innerHTML = email_array[i];
    email_5.appendChild(option);
}

const confirm = document.createElement('button');
confirm.innerHTML="회원가입";
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
})
document.querySelector('body').appendChild(horizon.cloneNode(true));
document.querySelector('body').appendChild(br.cloneNode(true));
document.querySelector('body').appendChild(confirm);
