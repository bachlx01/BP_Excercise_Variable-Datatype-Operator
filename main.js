function student() {
    var vatly = prompt('Nhập điểm môn Vật lý:');
    var hoa = prompt('Nhập điểm môn Hóa học:');
    var sinh = prompt('Nhập điểm môn Sinh học');
    var v = parseInt(vatly);
    var h = parseInt(hoa);
    var s = parseInt(sinh);

    var total = v + h + s;
    var average = total/3;
    document.write('Điểm Vật lý là: ' + v +'<br>');
    document.write('Điểm Hóa học là: ' + h +'<br>');
    document.write('Điểm Sinh học là: ' + s +'<br>' +'<br>');
    document.write('Tổng điểm 3 môn là: ' + total + '<br>');
    document.write('Điểm trung bình 3 môn là: ' + average);
}

function exchange() {
    var nhietdo = prompt('Nhập giá trị độ Celsius');
    var c = parseInt(nhietdo);

    var f = (c/5)*9+32;
    document.write('Độ F tương đương là: ' + f);
}

function area() {
    var bankinh = prompt('Nhập bán kình hình tròn');
    var r = parseInt(bankinh);
    var a = r*r*3.14;
    document.write('Diện tích hình tròn là: ' + a);
}

function premeter() {
    var bankinh = prompt('Nhập bán kình hình tròn');
    var r = parseInt(bankinh);
    var s = r*2*3.14;
    document.write('Chu vi hình tròn là: ' + s);
}