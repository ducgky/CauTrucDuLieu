// Thay đổi màu sắc tiêu đề theo thời gian
const title = document.querySelector("h1");
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#33FFF2"];
let colorIndex = 0;

function changeTitleColor() {
    title.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeTitleColor, 1000); // Thay đổi màu mỗi giây

// Hiển thị thông báo chào mừng
window.onload = function () {
    alert("Chào mừng bạn đến với trang web phủ màu!");
};
