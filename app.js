

$(document).ready(function()
{
    url_base = "http://localhost:8888/Rick/clase-laravel/public/index.php";

    $("button").click(function(){
        register();
    });
});
// window.onload = cargar;

//     function cargar() 
//     {
//         document.getElementById("btn").onclick = register;
//     }
    

    function get_user() 
    {
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();

        var data_user = {
            "name":name,
            "email":email,
            "password":password
        }
        return data_user;
    }

    function register() 
    {
        var data = get_user();
        
        $.ajax({
            url: url_base + "/api/userStore",
            type: 'POST',
            data: data,
            dataType: 'json',
            success: function(response){
                console.log('trace');
            }
          });
    }

    
