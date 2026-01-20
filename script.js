//
const shoes = [
  // --- 1. NIKE (Giữ nguyên 5 mẫu đầu) ---
  { id: 1, name: "Nike Air Force 1 '07", price: 2490000, brand: "Nike", image: "./imgweb/nike_1.png", desc: "Biểu tượng thời trang đường phố." },
  { id: 2, name: "Nike Air Max Pulse", price: 4500000, brand: "Nike", image: "./imgweb/nike_2.png", desc: "Sự kết hợp hoàn hảo giữa êm ái và phong cách." },
  { id: 3, name: "Nike Pegasus 40", price: 3200000, brand: "Nike", image: "./imgweb/nike_3.png", desc: "Dòng giày chạy bộ huyền thoại." },
  { id: 4, name: "Nike Court Legacy", price: 1900000, brand: "Nike", image: "./imgweb/nike_4.png", desc: "Phong cách tennis cổ điển." },
  { id: 5, name: "Nike Dunk Low Retro", price: 3500000, brand: "Nike", image: "./imgweb/nike_5.png", desc: "Cực kỳ cá tính và nổi bật." },

  // --- 2. ADIDAS (5 mẫu) ---
  { id: 6, name: "Adidas Samba OG", price: 2800000, brand: "Adidas", image: "./imgweb/adidas_1.png", desc: "Mẫu giày 'quốc dân' hiện nay." },
  { id: 7, name: "Adidas Gazelle Bold", price: 3100000, brand: "Adidas", image: "./imgweb/adidas_2.png", desc: "Đế cao tôn dáng cho các bạn nữ." },
  { id: 8, name: "Adidas Campus 00s", price: 2300000, brand: "Adidas", image: "./imgweb/adidas_3.png", desc: "Vẻ đẹp vượt thời gian." },
  { id: 9, name: "Adidas Ultraboost Light", price: 5000000, brand: "Adidas", image: "./imgweb/adidas_4.png", desc: "Công nghệ đệm Boost êm nhất thế giới." },
  { id: 10, name: "Adidas Forum Low", price: 2500000, brand: "Adidas", image: "./imgweb/adidas_5.png", desc: "Phong cách bóng rổ thập niên 80." },

  // --- 3. JORDAN (Đã thêm 1 mẫu mới - ID 15) ---
  { id: 11, name: "Jordan 1 Low Panda", price: 3800000, brand: "Jordan", image: "./imgweb/jordan_1.png", desc: "Phối màu trắng đen dễ mặc nhất." },
  { id: 12, name: "Jordan 1 Mid Grey", price: 4200000, brand: "Jordan", image: "./imgweb/jordan_2.png", desc: "Màu xám thanh lịch, sang trọng." },
  { id: 13, name: "Jordan Stay Loyal 2", price: 3600000, brand: "Jordan", image: "./imgweb/jordan_3.png", desc: "Hỗ trợ bảo vệ cổ chân cực tốt." },
  { id: 14, name: "Jordan 1 High OG", price: 5500000, brand: "Jordan", image: "./imgweb/jordan_4.png", desc: "Đẳng cấp từ dòng High-top huyền thoại." },
  { id: 15, name: "Jordan 4 Retro", price: 6200000, brand: "Jordan", image: "./imgweb/jordan_5.png", desc: "Thiết kế hầm hố, phong cách hip-hop mạnh mẽ." },

  // --- 4. PUMA (Đã thêm 4 mẫu mới - ID 16 -> 20) ---
  { id: 16, name: "Puma Suede Classic", price: 2100000, brand: "Puma", image: "./imgweb/puma_3.png", desc: "Chất liệu da lộn mềm mại, lịch lãm." },
  { id: 17, name: "Puma RS-X Efekt", price: 3200000, brand: "Puma", image: "./imgweb/puma_1.png", desc: "Thiết kế Chunky hiện đại, phá cách." },
  { id: 18, name: "Puma Cali Dream", price: 2600000, brand: "Puma", image: "./imgweb/puma_2.png", desc: "Mang lại vẻ ngoài trẻ trung và năng động." },
  { id: 19, name: "Puma MB.01 Lamelo", price: 3900000, brand: "Puma", image: "./imgweb/puma_4.png", desc: "Dòng giày bóng rổ hiệu năng cao." },
  { id: 20, name: "Puma Mayze Wedge", price: 2900000, brand: "Puma", image: "./imgweb/puma_5.png", desc: "Đế xuồng cá tính dành riêng cho phái đẹp." }
];

// --- LOGIC TRANG CHỦ ---
// --- LOGIC TRANG CHỦ ---
function renderShoes(list) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML =
      "<p style='grid-column: 1/-1; text-align:center'>Không tìm thấy sản phẩm nào.</p>";
    return;
  }
  grid.innerHTML = list
    .map(
      (s) => `
    <div class="shoe-card">
      <img src="${s.image}" onclick="location.href='detail.html?id=${s.id}'" alt="${s.name}">
      <h4>${s.name}</h4>
      <p style="color: #2563eb; font-weight: bold;">${s.price.toLocaleString()}đ</p>
      <button class="add-cart-btn" onclick="addToCart(${s.id})">Thêm vào giỏ</button>
    </div>
  `
    )
    .join("");
}
// --- LOGIC TRANG CHI TIẾT (FIX LỖI THIẾU HÀM) ---
function renderDetailPage() {
  const container = document.getElementById("productDetailContainer");
  if (!container) return;

  // Lấy ID từ URL (ví dụ: detail.html?id=1)
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const product = shoes.find((s) => s.id === id);

  if (!product) {
    container.innerHTML = "<h2>Sản phẩm không tồn tại!</h2>";
    return;
  }

  container.innerHTML = `
    <div class="detail-wrapper">
      <div class="detail-img">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="detail-info">
        <h2 class="detail-title">${product.name}</h2>
        <p class="detail-brand">Thương hiệu: <strong>${product.brand}</strong></p>
        <p class="detail-price">${product.price.toLocaleString()}đ</p>
        <p class="detail-desc">${product.desc}</p>
        
        <div class="detail-actions">
           <button class="add-cart-btn" onclick="addToCart(${product.id})">Thêm vào giỏ ngay</button>
           <button class="back-btn" onclick="history.back()">← Quay lại</button>
        </div>
      </div>
    </div>
  `;
}

function addToCart(id) {
  // Kiểm tra xem đã đăng nhập chưa
  const userLogin = localStorage.getItem("userLogin");

  if (!userLogin) {
    alert("Bạn cần đăng nhập để có thể mua hàng!");
    window.location.href = "login.html";
    return;
  }

  // Logic thêm hàng như cũ
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = shoes.find((s) => s.id === id);
  let item = cart.find((i) => i.id === id);

  if (item) item.qty++;
  else cart.push({ ...product, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
  updateCartBadge();
}
// --- SỰ KIỆN ---
if (document.getElementById("productGrid")) renderShoes(shoes);

// Lọc theo Brand (Thêm hiệu ứng active)
// Lọc theo Brand dựa trên chữ cái đầu tiên của tên sản phẩm
const brandLinks = document.querySelectorAll("[data-brand]");
brandLinks.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();

    // Xử lý hiệu ứng Active cho menu
    brandLinks.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const brand = btn.dataset.brand; // Lấy giá trị như "Nike", "Adidas"...
    
    // Cập nhật tiêu đề hiển thị
    document.getElementById("categoryTitle").innerText =
      brand === "Tất cả" ? "Tất cả sản phẩm" : `Giày ${brand}`;

    // LOGIC MỚI: Kiểm tra xem tên sản phẩm có bắt đầu bằng chữ của Brand không
    const filtered = shoes.filter((s) => {
      if (brand === "Tất cả") return true;
      // Chuyển cả hai về chữ thường và so sánh chữ đầu tiên
      return s.name.toLowerCase().startsWith(brand.toLowerCase());
    });

    renderShoes(filtered); // Hiển thị danh sách đã lọc
  };
});

// Tìm kiếm
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.oninput = () => {
    const key = searchInput.value.toLowerCase();
    renderShoes(shoes.filter((s) => s.name.toLowerCase().includes(key)));
  };
}
// Thay thế hoặc cập nhật hàm addToCart trong script.js
function addToCart(id) {
  // 1. Kiểm tra đăng nhập
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));

  if (!userLogin) {
    alert("Vui lòng đăng nhập để thực hiện mua hàng!");
    window.location.href = "login.html"; // Chuyển hướng sang trang đăng nhập
    return;
  }

  // 2. Nếu đã đăng nhập, thực hiện thêm vào giỏ hàng như cũ
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = shoes.find((s) => s.id === id);
  let item = cart.find((i) => i.id === id);

  if (item) {
    item.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`Đã thêm "${product.name}" vào giỏ hàng của ${userLogin.username}!`);
  updateCartBadge();
}
function checkLoginStatus() {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const navActions = document.querySelector(".nav-actions");
  
  if (userLogin && navActions) {
    // Tìm link đăng nhập cũ để thay thế
    const loginLink = navActions.querySelector("a[href='login.html']");
    if (loginLink) {
      loginLink.innerHTML = `Hi, ${userLogin.username} | <span id="logoutBtn" style="cursor:pointer; color: #38bdf8;">Thoát</span>`;
      
      // Thêm sự kiện đăng xuất
      document.getElementById("logoutBtn").onclick = () => {
        localStorage.removeItem("userLogin");
        location.reload();
      };
    }
  }
}

// Gọi hàm kiểm tra ngay khi load trang
checkLoginStatus();