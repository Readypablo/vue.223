// var app = new Vue({
//     el: '#app',
//     data: {
//         product: "Socks",
//         image: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg"
//     }
// })

// app.image = "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666366634_20-mykaleidoscope-ru-p-gornoe-ozero-krasivo-24.jpg"



// https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg 
// синие носки


var app = new Vue({
    el: '#app',
    data: {
        product:[
            {
                id:0,
                name:"gray",
                link:"1.jpg",
                image:"1.jpg",
                inStock: true,
                onSale: false
        
            },
            {
                id:1,
                name:"blue",
                link:"2.jpg",
                image:"2.jpg",
                inStock: true,
                onSale: true
      
            },
            {
                id:2,
                name:"xaki",
                link:"3.jpg",
                image:"3.jpg",
                inStock: false,
                onSale: true
       
            }
         

        ]

    }
  
});

// app.product[id].inStock = false