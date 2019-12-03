

$(document).ready(function()
{
    url_base = "http://localhost:8888/Rick/clase-laravel/public/index.php";

    $("#button").click(function(){
        register();
    });

    $("#botonLibros").click(function(){
        books();
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



        // if(name == null)
        // {

        // }

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
                console.log(response.token);
                sessionStorage.setItem('token', response.token);
            }
          });
    }

    function books()
    {
        $.ajax({
            url: url_base + "/api/show",
            type: 'GET',
            headers: {
                'Authorization': sessionStorage.getItem('token')
            },
            dataType: 'json',
            success: function(response){
                console.log(response.books);
            }
          });
    }

    
