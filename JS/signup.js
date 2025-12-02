// let isLogged = false;

const inputId = document.getElementById("id");
const inputPassword = document.getElementById("password");
const signupButton = document.getElementById("signup-btn");

signupButton.addEventListener("click", () => {
  const userId = inputId.value;
  const userPassword = inputPassword.value;
  if (localStorage.getItem(userId)) {
    alert("이미 있는 계정입니다");
  } else {
    localStorage.setItem(`${userId}`, JSON.stringify(userPassword));
    alert("회원가입 성공");
    inputId.value = "";
    inputPassword.value = "";
    window.location.assign("./login.html");
  }
});
