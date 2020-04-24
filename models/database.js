const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@database-uyoe8.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true} , (err )=>{
    if(!err){
        console.log('Connect Database Success');
        
    }else{
        console.log('Connect Database Fail');
    }
})

require('./scheduleModel')
require('./productModel')
require('./orderModel')
require('./locationModel')
require('./serviceModel')
require('./stylistModel')

const Product = mongoose.model('Product');
const Order = mongoose.model('Order');
const Location = mongoose.model('Location');
const Stylist = mongoose.model('Stylist');
const Service = mongoose.model('Service');

Stylist.remove({},(err)=>{
    console.log("complete")
})

Service.remove({},(err)=>{
    console.log("complete")
})

Stylist.create([
    {
        "nameStylist":"Đào Việt Dũng",
        "ratingStylist":"4"
    },
    {
        "nameStylist":"Hoàng Đức Long",
        "ratingStylist":"5"
    }

])

Service.create([
    {
        "nameService":"BARBER COMBO",
        "detailService":"Trẻ trung hơn sau 30 phút dành riêng cho bạn với quy trình 8 bước",
        "priceService":"99000"
    },
    {
        "nameService":"VIP COMBO",
        "detailService":"Lịch lãm, phong độ hơn với mái tóc được uốn phồng kèm dịch vụ đắp mặt nạ",
        "priceService":"359000"
    }
])

// Location.remove({},(err)=>{
//     console.log("complete")
// })

// Location.create([
//     {
//         "addressLocation":"1028 Đường Láng",
//         "districtLocation":"Đống Đa",
//         "districtDetailLocation":"P.Láng Thượng, Q.Đống Đa",
//         "cityLocation":"Hà Nội"
//     },
//     {
//         "addressLocation":"56 Nguyễn Huy Tưởng",
//         "districtLocation":"Thanh Xuân",
//         "districtDetailLocation":"P. TX Trung, Q. Thanh Xuân",
//         "cityLocation":"Hà Nội"
//     },
//     {
//         "addressLocation":"407 Trường Chinh",
//         "districtLocation":"Thanh Xuân",
//         "districtDetailLocation":"P. Khương Trung, Q. Thanh Xuân",
//         "cityLocation":"Hà Nội"
//     },
//     {
//         "addressLocation":"163 Hàng Bông",
//         "districtLocation":"Hoàn Kiếm",
//         "districtDetailLocation":"P. Hàng Bông, Q. Hoàn Kiếm",
//         "cityLocation":"Hà Nội"
//     },
//     {
//         "addressLocation":"391 Trương Định",
//         "districtLocation":"Hoàng Mai",
//         "districtDetailLocation":"P. Tân Mai, Q. Hoàng Mai",
//         "cityLocation":"Hà Nội"
//     },
//     {
//         "addressLocation":"82 Trần Đại Nghĩa",
//         "districtLocation":"Hai Bà Trưng",
//         "districtDetailLocation":"P. Đồng Tâm, Q. Hai Bà Trưng",
//         "cityLocation":"Hà Nội"
//     },
    
// ])



// Order.create([
//     {
//         "imageProduct":"https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%2FS%C3%A1p%20Bed%20Head%20for%20Men-Matt%20Separation.jpg?alt=media&token=9a4c8704-0ab2-4cb0-8aee-e55302ff6364",
//         "nameProduct":"Sáp Bed Head for Men-Matt Separation",
//         "priceProduct":"460000",
//         "fullName":"Huy Anh",
//         "phoneNumber":"0911830999",
//         "address":"Trần Duy Hưng"
//     }
// ])

// Order.remove({},(err)=>{
//     console.log("complete")
// })

Product.remove({},(err)=>{
    console.log("complete")
})

Product.create([
          {
            "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%2FS%C3%A1p%20Bed%20Head%20for%20Men-Matt%20Separation.jpg?alt=media&token=9a4c8704-0ab2-4cb0-8aee-e55302ff6364",
            "nameProduct": "Sáp Bed Head for Men-Matt Separation",
            "priceProduct": "460000",
            "typeProduct": "Sáp",
            "descriptionProduct": "Dòng sản phẩm chăm sóc tóc của Tigi là một trong những dòng sản phẩm chăm sóc tóc hàng đầu hiện nay. Được thành lập bởi hai anh em Giuseppe (Toni) và Gaetano (Guy) Mascolo, thương hiệu này đã có mặt tại hơn 400 salon trên toàn thế giới và nhận được 50 giải thưởng trong ngành công nghiệp chăm sóc tóc.",
            "ratingProduct":"4"
          },
          {
            "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%2FS%C3%A1p%20Volcanic%20Clay.jpg?alt=media&token=744394d0-cec8-4937-a2ce-3fc872610cc8",
            "nameProduct": "Sáp Volcanic Clay - Giữ nếp bất chấp",
            "priceProduct": "340000",
            "typeProduct": "Sáp",
            "descriptionProduct": "Apestomen là một thương hiệu về các sản phẩm chăm sóc tóc và tạo kiểu tóc dành cho nam giới hàng đầu tại Singapore. Không chỉ \"chế ngự\" được mồ hôi dầu mà còn ít bị tác động bởi ngoại cảnh. Vì thế dù nắng hay mưa thì Apestomen Volcanic Clay vẫn sẽ giúp tóc bạn giữ nếp đẹp chuẩn cả ngày."
          },
          {
            "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%2FS%C3%A1p%20Glanzen%20Clay.jpg?alt=media&token=8fed22ff-5da9-4fb5-b908-088cbdf946f6",
            "nameProduct": "Sáp Glanzen Clay - Sáp Chính Hãng",
            "priceProduct": "229000",
            "typeProduct": "Sáp",
            "descriptionProduct": "Glanzen - Sáp Vuốt Tóc Nam Chính Hãng Bán Chạy Nhất Thị Trường . Được sản xuất theo công nghệ cao cấp của Đức, thách thức thời gian với độ giữ nếp lên đến 12h, thấm hút mồ hôi dầu cực tốt, sáp Glanzen đang là dòng sáp bán chạy nhất thị trường hiện nay. ",
            "ratingProduct":"5"
        },
          {
            "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%2FS%C3%A1p%20By%20Vilain%20Dynamite%20Clay.jpg?alt=media&token=b99650e5-16e9-4fc8-a4c5-19b94e26d299",
            "nameProduct": "Sáp By Vilain Dynamite Clay",
            "priceProduct": "500000",
            "typeProduct": "Sáp",
            "descriptionProduct": "By Vilain là một ông lớn trong lĩnh vực phát triển các sản phẩm về chăm sóc và tạo kiểu tóc, thương hiệu này đình đám đến nỗi sở hữu 1 kênh Youtube riêng về tóc nam và các sản phẩm By Vilain liên quan và có tới 2 triệu subscriber.",
            "ratingProduct":"4"
          },
          {
            "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%2FS%C3%A1p%20Kevin%20Murphy%20-%20Rough%20Rider.jpg?alt=media&token=ec7f2ad7-9697-4675-851f-195f21dffe29",
            "nameProduct": "Sáp Kevin Murphy - Rough Rider",
            "priceProduct": "690000",
            "typeProduct": "Sáp",
            "descriptionProduct": "Kenvin Murphy là thương hiệu sáp hàng đầu thế giới được ưa chuộng bậc nhất. Siêu phẩm Rough Rider của hãng này được mệnh danh là ông vua của các loại sáp vì độ giữ nếp và miễn dịch với mồ hôi dầu cực cao của nó.",
            "ratingProduct":"5"
          },
          {
            "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%2FS%C3%A1p%20TIGI%20Headlimer%20-%20Ch%E1%BA%A5t%20ngh%E1%BB%87%20t%C3%B3c%20r%E1%BB%91i.jpg?alt=media&token=6fb893f3-51d3-40a1-b35e-d1f110f4e99f",
            "nameProduct": "Sáp TIGI Headlimer - Chất nghệ tóc rối",
            "priceProduct": "999999",
            "typeProduct": "Sáp",
            "descriptionProduct": "Sáp TIGI Headlimer được mệnh danh là cặp đôi hoàn hảo với tóc mềm. Với độ cứng vừa phải, không nặng tóc nó rất phù hợp với các kiểu tóc rối, bồng bềnh, giúp cho tóc vào nếp nhưng vẫn giữ được sự bay bổng, tự nhiên vốn có.",
            "ratingProduct":"3"
          }        
])
