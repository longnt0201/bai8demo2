$(document).ready(function () {
    var produc_list = [
        {
            id: 1,
            namee: 'SAMSUNG',
            price: 50000,
            info: 'abc',
        },
        {
            id: 2,
            namee: 'SAMSUNG',
            price: 10000,
            info: 'abc',
        },
        {
            id: 3,
            namee: 'SAMSUNG',
            price: 10000,
            info: 'abc',
        },
        {
            id: 4,
            namee: 'SAMSUNG',
            price: 10000,
            info: 'abc',
        },
        {
            id: 5,
            namee: 'SAMSUNG',
            price: 10000,
            info: 'abc',
        }
        
    ]

    for (i = 0; i < produc_list.length; i++) {
        var item = produc_list[i];
        $(".tab").append("<tr><td>"+item.id+"</td><td>"+ item.namee +"</td><td >"+item.price+"</td><td>"+item.info+"</td><td><button class='edit'>Edit</button></td><td><button class='del'>Delete</button></td></tr>");
   
            
    }
    
})
