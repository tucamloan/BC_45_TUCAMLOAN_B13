//Bài tập 1: Tính tiền lương nhân viên
document.getElementById('tinh-tien-luong').onclick = function() {
    //input:  soNgay: number
    var soNgay = +document.getElementById('nhap-so-ngay').value;
    //output
    var tongTienLuong=0;
    //process:
   tongTienLuong= (soNgay * 100000).toLocaleString();
    document.getElementById('ket-qua-b1').innerHTML=tongTienLuong 
    + ' VND ';
    }
    //Bài 2: Tính giá trị trung bình
    document.getElementById('btnTrungBinh').onclick =function(){
       //input so=number
        var so1 = +document.getElementById('so-1').value;
        var so2 = +document.getElementById('so-2').value;
        var so3 = +document.getElementById('so-3').value;
        var so4 = +document.getElementById('so-4').value;
        var so5 = +document.getElementById('so-5').value;
        //output
        var tinhTrungBinh =0;
        //process
         tinhTrungBinh =(so1+so2+so3+so4+so5)/5;
         document.getElementById('ket-qua-b2').innerHTML= tinhTrungBinh;
    }

    //Bài tập 3: Quy đổi tiền
document.getElementById('tinhTienQuyDoi').onclick = function() {
    //input:  soTien: number
    var soTienUSD = +document.getElementById('nhap-so-tien-usd').value;
    //output
    var soTienQuyDoi=0;
    //process:
   soTienQuyDoi= (soTienUSD * 23500).toLocaleString();
    document.getElementById('ket-qua-b3').innerHTML=soTienQuyDoi 
    + ' VND ';
    }
    //Bài tập 4: Tính diện tích, chu vi hình chữ nhật
    document.getElementById('btnKetQua').onclick = function() {
        //input:  chieuDai, chieuRong: number
        var chieuDai = +document.getElementById('chieu-dai').value;
        var chieuRong = +document.getElementById('chieu-rong').value;
        //output
        var dienTich=0;
        var chuVi=0;
        //process
        dienTich= (chieuDai*chieuRong);
        chuVi=(chieuDai+chieuRong)*2;

        document.getElementById('ket-qua-b4').innerHTML=`
Diện tích hình chữ nhật: ${dienTich} <br/>
Chu vi hình chữ nhật: ${chuVi}`;
}
//Bài 5:
document.getElementById('tinh-tong').onclick=function(){
//input:  number
var so2CS= +document.getElementById('nhap-chu-so').value;
//output
var tong2CS=0;
//process
var soHDV = so2CS%10;
var soHC = Math.floor(so2CS/10);
tong2CS= soHDV + soHC; 

document.getElementById('ket-qua-b5').innerHTML=tong2CS;}