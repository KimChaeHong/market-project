document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("login");
  console.log(isLoggedIn);

  const loggedOutLinks = document.getElementById("logged-out-links");
  const loggedInLinks = document.getElementById("logged-in-links");
  const adminLinks = document.getElementById("admin-link");
  const adminHide = document.querySelectorAll(".admin-hide"); // admin 계정일 때, 숨길 것

  if (isLoggedIn != "false") {
    // 로그인 상태
    loggedOutLinks.style.display = "none";
    loggedInLinks.style.display = "flex";
    if (isLoggedIn == "user") {
      adminLinks.style.display = "none"; // user
    } else {
      for (let e of adminHide) e.style.display = "none"; // admin
    }
  } else {
    // 로그아웃 상태
    loggedOutLinks.style.display = "flex";
    loggedInLinks.style.display = "none";
  }

  // 로그아웃 시 예시 이벤트
  document.getElementById("logout-link").addEventListener("click", function () {
    if (confirm("로그아웃하시겠습니까?")) {
      localStorage.setItem("login", "false");
      location.reload();
    }
  });
});
