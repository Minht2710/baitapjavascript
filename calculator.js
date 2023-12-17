document.getElementById("myButton1").onclick  = function() {
    const luongMotNgay = 100000;
    const soNgay = document.getElementById('soNgay').value;
    const result = luongMotNgay * soNgay;
    document.getElementById('resultSalary').innerText = 'Số tiền lương nhận được là '+result.toLocaleString() + ' VND';
}
document.getElementById("myButton2").onclick = function() {
    const soThuc1 = parseFloat(document.getElementById('soThuc1').value);
    const soThuc2 = parseFloat(document.getElementById('soThuc2').value);
    const soThuc3 = parseFloat(document.getElementById('soThuc3').value);
    const soThuc4 = parseFloat(document.getElementById('soThuc4').value);
    const soThuc5 = parseFloat(document.getElementById('soThuc5').value);

    trungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
    
    document.getElementById('resultSalary2').innerText = 'Giá trị trung bình: ' + trungBinh;

}



// bai 3
document.getElementById("myButton3").onclick  = function() {
    const giaTriVND = 100000;
    const tienDola = document.getElementById('tienDola').value;
    const quyDoi = giaTriVND * tienDola;
    document.getElementById('resultSalary3').innerText = quyDoi.toLocaleString() + ' VND';
}

// bài 4
document.getElementById("myButton4").onclick  = function() {
    const chieuDai = document.getElementById('chieuDai').value;
    const chieuRong = document.getElementById('chỉeuRong').value;
    const dienTich = chieuDai * chieuRong;
    const chuVi = (chieuDai+chieuRong)*2;
    document.getElementById('dienTich').innerText = 'Diện tích là ' +  dienTich.toLocaleString();
    document.getElementById('chuVi').innerText = 'Diện tích là ' + chuVi.toLocaleString();

}
// bài 5
document.getElementById("myButton5").onclick = function() {
    const number = document.getElementById('number').value;
    const hangChuc = Math.floor(number / 10);
    const hangDv = number % 10;
    const tongCong = hangChuc + hangDv;
    document.getElementById('ketQua5').innerText = 'tổng kí số là ' + tongCong;
};
