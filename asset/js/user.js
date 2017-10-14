$(document).ready(function () {
    console.log('load users.');

    //Load user ทั้งหมด
    function getUsers() {
        $.ajax({
            type: 'get',
            url: 'https://reqres.in/api/users?per_page=12',
            success: function (response) {

                var users = response.data;//เก็บ users ทั้งหมดไว้ในตัวแปร users
                console.log(users);//write log ดู users ทั้งหมด


                // console.log(template);
                

                $.each(users, function (i, user) {

                    var template = $('.template').clone();//copy template ที่ต้องใช้งานมา

                    $(template).find('.txt_firstname').val(user.first_name);//ค้นหา html id ที่ชื่อ txt_firstname และใส่ชื่อ ลงไป
                    $(template).find('.txt_lastname').val(user.last_name);//ค้นหา html id ที่ชื่อ txt_lastname และใส่นามสกุล ลงไป
                    $(template).find('.img').attr('src',user.avatar);
                    
                    $(template)
                    .attr('id','user_'+user.id)
                    .removeClass('template-hide')
                    .removeClass('template')
                    .appendTo('.container');
                });

            }
        });
    };

    getUsers();
});
