$(document).ready(function() {
    $('form').submit(function(event) {
        //ngăn ngừa hành vi mặc định của thẻ
        // ví dụ với link thì ko cho chuyển trang
        // với form thì ko cho submit
        event.preventDefault();
        var email = $('input[type=email]').val();
        var name = $('#name').val();
        var phone = $('#phone').val();
        var notes = $('textarea').val();
        var no = $('input[type=number]').val();
        // console.log(email, name, phone, notes, no);
        // xử lý validate nếu tất cả đều ko nhập dữ liệu thì báo lỗi
        var result = '';
        var error = '';
        if(email == '' || name == '' || phone == '' ||
            notes == '' || no == '') {
            error = "Cần nhập đầy đủ tất cả các trường";
            $('#error').html(error);
            $('#result').html('');
            // $('#error').text(error);
        }
        else {
            result += "Email: " + email;
            result += "<br />";
            result += "Name: " + name;
            result += "<br />";
            result += "Phone: " + phone;
            result += "<br />";
            result += "Notes: " + notes;
            result += "<br />";
            result += "No of guest: " + no;
            result += "<br />";
            $('#result').html(result);
            $('#error').html('');
        }
    });
});