// Bài 1: Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ). Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.
// Mô hình 3 khối
// Khối 1: inputs
/*
    - Ngày: inputDay
    - Tháng: inputMonth
    - Năm: inputYear
*/

// Khối 2: Xử lý
/*
    - B1: Tạo biến và lấy giá trị từ form
    - B2: Kiểm tra ngày tháng hợp lệ
    - B3: Tính ngày tháng năm tiếp theo
    - B4: Tính ngày tháng năm trước đó
    - B5: Hiển thị kết quả lên UI
*/

// Khối 3: outputs
/*
    - Ngày tháng năm tiếp theo: nextDay, nextMonth, nextYear
    - Ngày tháng năm trước đó: prevDay, prevMonth, prevYear
*/

// Tạo hàm xử lý sự kiện
function dayOfMonth(inputMonth, inputYear) {
  switch (inputMonth) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 2:
      if (inputYear % 4 == 0) {
        return 29;
      } else {
        return 28;
      }
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return -1;
  }
}

function calcNextPreDayHandle() {
  var inputDay = +document.getElementById("inputDay").value;
  var inputMonth = +document.getElementById("inputMonth").value;
  var inputYear = +document.getElementById("inputYear").value;

  // Kiểm tra ngày tháng hợp lệ
  if (
    inputDay < 1 ||
    inputDay > 31 ||
    inputMonth < 1 ||
    inputMonth > 12 ||
    inputYear < 1
  ) {
    alert("Ngày, tháng không hợp không hợp lệ");
    return;
  }

  preDayMonthYear(inputDay, inputMonth, inputYear);
  nextDayMonthYear(inputDay, inputMonth, inputYear);
}

function preDayMonthYear(inputDay, inputMonth, inputYear) {
  // Tính ngày tháng năm trước đó
  if (inputDay == 1) {
    if (inputMonth == 1) {
      inputDay = 31;
      inputMonth = 12;
      inputYear--;
    } else {
      inputMonth--;
      inputDay = dayOfMonth(inputMonth, inputYear);
    }
  } else {
    inputDay--;
  }

  document.querySelector(".result__preDayMonthYear").innerHTML =
    inputDay + "/" + inputMonth + "/" + inputYear;
}

function nextDayMonthYear(inputDay, inputMonth, inputYear) {
  // Tính ngày tháng năm tiếp theo
  if (inputDay == dayOfMonth(inputMonth, inputYear)) {
    if (inputMonth == 12) {
      inputDay = 1;
      inputMonth = 1;
      inputYear++;
    } else {
      inputDay = dayOfMonth(inputMonth, inputYear);
      inputMonth++;
    }
  } else {
    inputDay++;
  }

  document.querySelector(".result__nextDayMonthYear").innerHTML =
    inputDay + "/" + inputMonth + "/" + inputYear;
}

// Bài 2: Viết chương trình nhập vào tháng, năm. Tìm số ngày của tháng đó. (bao gồm cả năm nhuận)
// Mô hình 3 khối
// Khối 1: inputs
/*
    - Tháng: inputMonth2
    - Năm: inputYear2
*/

// Khối 2: Xử lý
/*
    - B1: Tạo biến và lấy giá trị từ form
    - B2: Kiểm tra ngày tháng hợp lệ
    - B3: Tính số ngày của tháng đó
    - B4: Hiển thị kết quả lên UI
*/

// Khối 3: outputs
/*
    - Số ngày của tháng đó: dayOfMonth
*/

// Tạo hàm xử lý sự kiện
function checkDayOfMonth(inputMonth2, inputYear2) {
  switch (inputMonth2) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 2:
      if (inputYear2 % 4 == 0) {
        return 29;
      } else {
        return 28;
      }
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return -1;
  }
}

function calcDayOfMonthHandle() {
  var inputMonth2 = +document.getElementById("inputMonth2").value;
  var inputYear2 = +document.getElementById("inputYear2").value;

  // Kiểm tra ngày tháng hợp lệ
  if (
    inputDay < 1 ||
    inputDay > 31 ||
    inputMonth < 1 ||
    inputMonth > 12 ||
    inputYear < 1
  ) {
    alert("Ngày, tháng không hợp không hợp lệ");
    return;
  }

  var dayOfMonth = checkDayOfMonth(inputMonth2, inputYear2);
  document.querySelector(
    ".result__dayOfMonth"
  ).innerHTML = `Số ngày của tháng ${inputMonth2} trong năm ${inputYear2}: ${dayOfMonth}`;
}

// Bài 3: Viết chương trình nhập vào số nguyên có 3 chữ số. In ra các đọc của số đó.
// Mô hình 3 khối
// Khối 1: inputs
/*
    - Số nguyên có 3 chữ số: inputNumber
*/

// Khối 2: Xử lý
/*
    - B1: Tạo biến và lấy giá trị từ form
    - B2: Tách số hàng trăm, chục, đơn vị
    - B3: Tìm đọc của số đó
    - B4: Hiển thị kết quả lên UI
*/

// Khối 3: outputs
/*
    - Đọc của số đó: readNumber
*/

// Tạo hàm xử lý sự kiện
function printReadNumber() {
  var inputNumber = +document.getElementById("inputNumber").value;

  // Tách số hàng trăm, chục, đơn vị
  var hundred = Math.floor(inputNumber / 100);
  var dozen = Math.floor((inputNumber % 100) / 10);
  var unit = inputNumber % 10;

  // Tìm đọc của số đó
  var readNumber = "";
    switch (hundred) {
        case 1:
            readNumber += "Một trăm ";
            break;
        case 2:
            readNumber += "Hai trăm ";
            break;
        case 3:
            readNumber += "Ba trăm ";
            break;
        case 4:
            readNumber += "Bốn trăm ";
            break;
        case 5:
            readNumber += "Năm trăm ";
            break;
        case 6:
            readNumber += "Sáu trăm ";
            break;
        case 7:
            readNumber += "Bảy trăm ";
            break;
        case 8:
            readNumber += "Tám trăm ";
            break;
        case 9:
            readNumber += "Chín trăm ";
            break;
        default:
            break;
    }

    switch (dozen) {
        case 0:
            if (dozen == 0) {
                readNumber += "lẻ ";
            }
            break;
        case 1:
            readNumber += "mười ";
            break;
        case 2:
            readNumber += "hai mươi ";
            break;
        case 3:
            readNumber += "ba mươi ";
            break;
        case 4:
            readNumber += "bốn mươi ";
            break;
        case 5:
            readNumber += "năm mươi ";
            break;
        case 6:
            readNumber += "sáu mươi ";
            break;
        case 7:
            readNumber += "bảy mươi ";
            break;
        case 8:
            readNumber += "tám mươi ";
            break;
        case 9:
            readNumber += "chín mươi ";
            break;
        default:
            break;
    }

    switch (unit) {
        case 0:
            if (dozen == 0) {
                readNumber += "không";
            }
            break;
        case 1:
            if (dozen == 0) {
                readNumber += "một";
            } else if (dozen == 1) {
                readNumber += "một";
            } else {
                readNumber += "mốt";
            }
            break;
        case 2:
            readNumber += "hai";
            break;
        case 3:
            readNumber += "ba";
            break;
        case 4:
            readNumber += "bốn";
            break;
        case 5:
            if (dozen == 0) {
                readNumber += "năm";
            } else {
                readNumber += "lăm";
            }
            break;
        case 6:
            readNumber += "sáu";
            break;
        case 7:
            readNumber += "bảy";
            break;
        case 8:
            readNumber += "tám";
            break;
        case 9:
            readNumber += "chín";
            break;
        default:
            break;
    }

  document.querySelector(
    ".result__printReadNumber"
  ).innerHTML = `Đọc của số ${inputNumber}: ${readNumber}`;
}

// Bài 4: Cho biết tên và tọa độ nhà của 3 sinh viên và tọa độ của trường đại học. Viết chương trình in tên sinh viên xa trường nhất.
// Mô hình 3 khối
// Khối 1: inputs
/*
    - Tên sinh viên 1: inputName1
    - Tọa độ nhà sinh viên 1: inputX1, inputY1
    - Tên sinh viên 2: inputName2
    - Tọa độ nhà sinh viên 2: inputX2, inputY2
    - Tên sinh viên 3: inputName3
    - Tọa độ nhà sinh viên 3: inputX3, inputY3
*/

// Khối 2: Xử lý
/*
    - B1: Tạo biến và lấy giá trị từ form
    - B2: Tính khoảng cách từ nhà đến trường của 3 sinh viên
    - B3: Tìm sinh viên xa trường nhất
    - B4: Hiển thị kết quả lên UI
*/

// Khối 3: outputs
/*
    - Tên sinh viên xa trường nhất: nameFarthest
*/

// Tạo hàm xử lý sự kiện
function calcStudentFar(){
    var inputName1 = document.getElementById("inputStudent1").value;
    var inputName2 = document.getElementById("inputStudent2").value;
    var inputName3 = document.getElementById("inputStudent3").value;
    
    var inputX1 = +document.getElementById("inputX1").value;
    var inputY1 = +document.getElementById("inputY1").value;
    var inputX2 = +document.getElementById("inputX2").value;
    var inputY2 = +document.getElementById("inputY2").value;
    var inputX3 = +document.getElementById("inputX3").value;
    var inputY3 = +document.getElementById("inputY3").value;

    // Tính khoảng cách từ nhà đến trường của 3 sinh viên
    var distance1 = student1(inputX1, inputY1);
    var distance2 = student2(inputX2, inputY2);
    var distance3 = student3(inputX3, inputY3);

    // Tìm sinh viên xa trường nhất
    var nameFarthest = "";
    if (distance1 > distance2 && distance1 > distance3) {
        nameFarthest = inputName1;
    } else if(distance1 == distance2 && distance2 == distance3 && distance3 == distance1 ){
        nameFarthest = "ba sinh viên cách trường bằng nhau";
    } else if(distance2 > distance1 && distance2 > distance3){
        nameFarthest = inputName2;
    } else{
        nameFarthest = inputName3;
    }

    document.querySelector(".result__studentFar").innerHTML = `Sinh viên xa trường nhất là: ${nameFarthest}`;
}

function student1(inputX1, inputY1) {
    var distance1 = Math.sqrt(inputX1 * inputX1 + inputY1 * inputY1);
    return distance1;
}

function student2(inputX2, inputY2) {
    var distance2 = Math.sqrt(inputX2 * inputX2 + inputY2 * inputY2);
    return distance2;
}

function student3(inputX3, inputY3) {
    var distance3 = Math.sqrt(inputX3 * inputX3 + inputY3 * inputY3);
    return distance3;
}
