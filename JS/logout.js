const LogoutButton = document.getElementById("logout-btn");
LogoutButton.addEventListener("click", () => {
  localStorage.setItem("isLogged", "false");
  //   console.log("로그아웃 성공");
  window.location.reload();
});
