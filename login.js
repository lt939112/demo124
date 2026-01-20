// Thêm logic này vào phần xử lý đăng nhập trong login.js
document.getElementById("loginForm").onsubmit = (e) => {
  e.preventDefault();
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;

  // Giả sử đăng nhập thành công với bất kỳ tài khoản nào (bạn có thể thêm điều kiện check pass ở đây)
  if (user && pass) {
    localStorage.setItem("userLogin", JSON.stringify({ username: user }));
    alert("Đăng nhập thành công!");
    window.location.href = "index.html"; // Quay về trang chủ sau khi đăng nhập
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const loginBlock = document.getElementById("loginFormBlock");
  const regBlock = document.getElementById("registerFormBlock");

  // Chuyển sang bảng Đăng ký
  document.getElementById("btnShowRegister").onclick = (e) => {
    e.preventDefault();
    loginBlock.style.display = "none";
    regBlock.style.display = "block";
  };

  // Chuyển sang bảng Đăng nhập
  document.getElementById("btnShowLogin").onclick = (e) => {
    e.preventDefault();
    regBlock.style.display = "none";
    loginBlock.style.display = "block";
  };

  // Xử lý Đăng ký: Lưu vào localStorage
  document.getElementById("registerForm").onsubmit = (e) => {
    e.preventDefault();
    const user = document.getElementById("regUser").value;
    const pass = document.getElementById("regPass").value;

    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    if (accounts.some((acc) => acc.username === user)) {
      alert("Tên tài khoản đã tồn tại!");
      return;
    }

    accounts.push({ username: user, password: pass });
    localStorage.setItem("accounts", JSON.stringify(accounts));
    alert("Đăng ký thành công! Mời bạn đăng nhập.");
    location.reload(); 
  };

  // Xử lý Đăng nhập
  document.getElementById("loginForm").onsubmit = (e) => {
    e.preventDefault();
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    const found = accounts.find((acc) => acc.username === user && acc.password === pass);
    if (found) {
      localStorage.setItem("userLogin", JSON.stringify(found));
      alert("Đăng nhập thành công!");
      window.location.href = "index.html";
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };
});