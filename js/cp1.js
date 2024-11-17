const luoi = document.getElementById('grid');  
const diemSoHienTai = document.getElementById('score');  
let danhSachThe = [];  
let danhSachLatThe = []; // Đổi tên từ danhSachBiLua thành danhSachLatThe  
let diemSo = 0;  

// Tạo mảng các thẻ với tên động vật bằng tiếng Anh  
const danhSachHinhAnh = [  
    { ten: "cat", hinh: "https://via.placeholder.com/100?text=Cat" },  
    { ten: "dog", hinh: "https://via.placeholder.com/100?text=Dog" },  
    { ten: "fish", hinh: "https://via.placeholder.com/100?text=Fish" },  
    { ten: "bird", hinh: "https://via.placeholder.com/100?text=Bird" },  
    { ten: "cat", hinh: "https://via.placeholder.com/100?text=Cat" },  
    { ten: "dog", hinh: "https://via.placeholder.com/100?text=Dog" },  
    { ten: "fish", hinh: "https://via.placeholder.com/100?text=Fish" },  
    { ten: "bird", hinh: "https://via.placeholder.com/100?text=Bird" }  
];  

function khoiTaoTroChoi() {  
    // Xáo trộn mảng trước khi sử dụng  
    danhSachThe = danhSachHinhAnh.sort(() => 0.5 - Math.random()).map(the => {  
        return { ten: the.ten, hinh: the.hinh };  
    });  

    danhSachThe.forEach((the, index) => {  
        const theDiv = document.createElement('div');  
        theDiv.classList.add('card');  
        theDiv.setAttribute('data-card', the.ten);  
        theDiv.dataset.index = index;  

        theDiv.addEventListener('click', () => luaThe(theDiv, the));  

        luoi.appendChild(theDiv);  
    });  
}  

function luaThe(theDiv, the) {  
    if (danhSachLatThe.length < 2 && !theDiv.classList.contains('flipped')) {  
        theDiv.classList.add('flipped');  
        theDiv.innerHTML = `<img src="${the.hinh}" alt="${the.ten}">`;  
        danhSachLatThe.push(theDiv); // Lưu thẻ đã lật vào mảng  

        if (danhSachLatThe.length === 2) {  
            setTimeout(kiemTraKhop, 1000);  
        }  
    }  
}  

function kiemTraKhop() {  
    const [theDauTien, theThuHai] = danhSachLatThe; // Lấy các thẻ đã lật  
    if (theDauTien.dataset.card === theThuHai.dataset.card) {  
        diemSo++;  
        diemSoHienTai.textContent = diemSo;  

        // Xóa các thẻ đúng  
        theDauTien.remove();  
        theThuHai.remove();  
    } else {  
        theDauTien.classList.remove('flipped');  
        theDauTien.innerHTML = '';  
        theThuHai.classList.remove('flipped');  
        theThuHai.innerHTML = '';  
    }  
    danhSachLatThe = []; // Reset danh sách thẻ đã lật  
}  

// Bắt đầu trò chơi  
khoiTaoTroChoi();