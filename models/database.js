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

const Product = mongoose.model('Product');

Product.create([
          {
            "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%2FS%C3%A1p%20Bed%20Head%20for%20Men-Matt%20Separation.jpg?alt=media&token=9a4c8704-0ab2-4cb0-8aee-e55302ff6364",
            "nameProduct": "Sáp Bed Head for Men-Matt Separation",
            "priceProduct": "460,000",
            "typeProduct": "Sáp",
            "descriptionProduct": "Dòng sản phẩm chăm sóc tóc của Tigi là một trong những dòng sản phẩm chăm sóc tóc hàng đầu hiện nay. Được thành lập bởi hai anh em Giuseppe (Toni) và Gaetano (Guy) Mascolo, thương hiệu này đã có mặt tại hơn 400 salon trên toàn thế giới và nhận được 50 giải thưởng trong ngành công nghiệp chăm sóc tóc."
          },
          {
            "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%2FS%C3%A1p%20Volcanic%20Clay.jpg?alt=media&token=744394d0-cec8-4937-a2ce-3fc872610cc8",
            "nameProduct": "Sáp Volcanic Clay",
            "priceProduct": "340,000",
            "typeProduct": "Sáp",
            "descriptionProduct": "Apestomen là một thương hiệu về các sản phẩm chăm sóc tóc và tạo kiểu tóc dành cho nam giới hàng đầu tại Singapore. Không chỉ \"chế ngự\" được mồ hôi dầu mà còn ít bị tác động bởi ngoại cảnh. Vì thế dù nắng hay mưa thì Apestomen Volcanic Clay vẫn sẽ giúp tóc bạn giữ nếp đẹp chuẩn cả ngày."
          },
          {
            "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%2FS%C3%A1p%20Glanzen%20Clay.jpg?alt=media&token=8fed22ff-5da9-4fb5-b908-088cbdf946f6",
            "nameProduct": "Sáp Glanzen Clay",
            "priceProduct": "229,000",
            "typeProduct": "Sáp",
            "descriptionProduct": "Glanzen - Sáp Vuốt Tóc Nam Chính Hãng Bán Chạy Nhất Thị Trường . Được sản xuất theo công nghệ cao cấp của Đức, thách thức thời gian với độ giữ nếp lên đến 12h, thấm hút mồ hôi dầu cực tốt, sáp Glanzen đang là dòng sáp bán chạy nhất thị trường hiện nay. "
          },
          {
            "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%2FS%C3%A1p%20By%20Vilain%20Dynamite%20Clay.jpg?alt=media&token=b99650e5-16e9-4fc8-a4c5-19b94e26d299",
            "nameProduct": "Sáp By Vilain Dynamite Clay",
            "priceProduct": "500,000",
            "typeProduct": "Sáp",
            "descriptionProduct": "By Vilain là một ông lớn trong lĩnh vực phát triển các sản phẩm về chăm sóc và tạo kiểu tóc, thương hiệu này đình đám đến nỗi sở hữu 1 kênh Youtube riêng về tóc nam và các sản phẩm By Vilain liên quan và có tới 2 triệu subscriber."
          }    
])
