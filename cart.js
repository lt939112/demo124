//
const list = document.getElementById("cartList");
const actionDiv = document.getElementById("cartActions"); // Lấy div chứa nút
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  if (cart.length === 0) {
    list.innerHTML =
      "<p style='text-align:center'>Giỏ hàng của bạn đang trống.</p>";
    if (actionDiv) actionDiv.style.display = "none"; // Ẩn nút thanh toán
    return;
  }

  if (actionDiv) actionDiv.style.display = "flex"; // Hiện nút thanh toán

  let total = 0;

  list.innerHTML = cart
    .map((item, index) => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;

      return `
      <li>
        <div style="display:flex; justify-content:space-between; align-items:center">
            <div>
                <strong>${item.name}</strong> <br>
                <small>Size: 42 (Mặc định)</small>
            </div>
            <button class="remove-btn" onclick="removeItem(${index})" style="background:#ef4444; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">Xóa</button>
        </div>
        
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px">
            <div class="qty-control">
                <button onclick="changeQty(${index}, -1)">−</button>
                <span>${item.qty}</span>
                <button onclick="changeQty(${index}, 1)">+</button>
            </div>
            <div>
                <span style="color:#64748b">${item.price.toLocaleString()}đ x ${item.qty}</span>
                <br>
                <strong style="color:#2563eb">${itemTotal.toLocaleString()}đ</strong>
            </div>
        </div>
      </li>
    `;
    })
    .join("");

  list.innerHTML += `
    <div class="cart-total" style="margin-top:20px; padding-top:20px; border-top:1px solid #eee">
        Tổng cộng: <span style="color:#dc2626; font-size:24px">${total.toLocaleString()}đ</span>
    </div>`;
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    if (confirm("Bạn muốn xóa sản phẩm này?")) cart.splice(index, 1);
    else cart[index].qty = 1; // Hoàn tác nếu không xóa
  }
  update();
}

function removeItem(index) {
  if (confirm("Xóa sản phẩm này khỏi giỏ?")) {
    cart.splice(index, 1);
    update();
  }
}

function update() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// --- TÍNH NĂNG THANH TOÁN MỚI ---
function checkout() {
  if (cart.length === 0) return;

  // Giả lập thanh toán
  if (
    confirm(
      `Xác nhận thanh toán tổng tiền: ${document.querySelector(".cart-total span").innerText}?`
    )
  ) {
    alert("Thanh toán thành công! Cảm ơn bạn đã mua hàng.");
    cart = []; // Xóa giỏ hàng
    update();
    window.location.href = "index.html"; // Quay về trang chủ
  }
}

renderCart();
