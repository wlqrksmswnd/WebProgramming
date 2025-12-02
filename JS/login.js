if (!localStorage.getItem("isLogged"))
  localStorage.setItem("isLogged", "false");

if (
  document.getElementsByClassName("header-button") &&
  document.getElementById("logout-btn")
) {
  const headerButton = document.getElementsByClassName("header-button");
  const logoutButton = document.getElementById("logout-btn");
  if (localStorage.getItem("isLogged") === "true") {
    for (let btn of headerButton) btn.style.display = "none";
    logoutButton.style.display = "block";
  } else {
    for (let btn of headerButton) btn.style.display = "block";
    logoutButton.style.display = "none";
  }
}

if (document.getElementById("login-btn")) {
  const inputId = document.getElementById("id");
  const inputPassword = document.getElementById("password");
  const loginButton = document.getElementById("login-btn");
  loginButton.addEventListener("click", () => {
    const userId = inputId.value;
    const userPassword = inputPassword.value;
    const sotrageData = localStorage.getItem(userId);
    console.log(sotrageData);
    if (sotrageData) {
      if (sotrageData === JSON.stringify(userPassword)) {
        localStorage.setItem("isLogged", "true");
        alert("로그인 성공");
        window.location.assign("./index.html");
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    } else {
      alert("존재하지 않는 회원입니다.");
    }
  });
}
