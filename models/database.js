const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@database-uyoe8.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Connect Database Success');

    } else {
        console.log('Connect Database Fail');
    }
})

require('./scheduleModel')
require('./productModel')
require('./orderModel')
require('./locationModel')
require('./serviceModel')
require('./stylistModel')
require('./userModel')

const Product = mongoose.model('Product');
const Order = mongoose.model('Order');
const Location = mongoose.model('Location');
const Stylist = mongoose.model('Stylist');
const Service = mongoose.model('Service');
const User = mongoose.model('User');

// User.remove({}, (err) => {
//     console.log("complete")
// })

// User.create([
//     {
//         "nameUser": "Đào Việt Dũng",
//         "phoneUser": "0911830496"
//     },
//     {
//         "nameUser": "Lê Huy Anh",
//         "phoneUser": "0973535353"
//     }
// ])

// Stylist.remove({}, (err) => {
//     console.log("complete")
// })

// Service.remove({}, (err) => {
//     console.log("complete")
// })

// Stylist.create([
//     {
//         "nameStylist": "Đào Việt Dũng",
//         "ratingStylist": "4"
//     },
//     {
//         "nameStylist": "Hoàng Đức Long",
//         "ratingStylist": "5"
//     }

// ])

// Service.create([
//     {
//         "nameService": "BARBER COMBO",
//         "detailService": "Trẻ trung hơn sau 30 phút dành riêng cho bạn với quy trình 8 bước",
//         "priceService": "99000"
//     },
//     {
//         "nameService": "VIP COMBO",
//         "detailService": "Lịch lãm, phong độ hơn với mái tóc được uốn phồng kèm dịch vụ đắp mặt nạ",
//         "priceService": "359000"
//     }
// ])

// // Location.remove({},(err)=>{
// //     console.log("complete")
// // })

// // Location.create([
// //     {
// //         "addressLocation":"1028 Đường Láng",
// //         "districtLocation":"Đống Đa",
// //         "districtDetailLocation":"P.Láng Thượng, Q.Đống Đa",
// //         "cityLocation":"Hà Nội"
// //     },
// //     {
// //         "addressLocation":"56 Nguyễn Huy Tưởng",
// //         "districtLocation":"Thanh Xuân",
// //         "districtDetailLocation":"P. TX Trung, Q. Thanh Xuân",
// //         "cityLocation":"Hà Nội"
// //     },
// //     {
// //         "addressLocation":"407 Trường Chinh",
// //         "districtLocation":"Thanh Xuân",
// //         "districtDetailLocation":"P. Khương Trung, Q. Thanh Xuân",
// //         "cityLocation":"Hà Nội"
// //     },
// //     {
// //         "addressLocation":"163 Hàng Bông",
// //         "districtLocation":"Hoàn Kiếm",
// //         "districtDetailLocation":"P. Hàng Bông, Q. Hoàn Kiếm",
// //         "cityLocation":"Hà Nội"
// //     },
// //     {
// //         "addressLocation":"391 Trương Định",
// //         "districtLocation":"Hoàng Mai",
// //         "districtDetailLocation":"P. Tân Mai, Q. Hoàng Mai",
// //         "cityLocation":"Hà Nội"
// //     },
// //     {
// //         "addressLocation":"82 Trần Đại Nghĩa",
// //         "districtLocation":"Hai Bà Trưng",
// //         "districtDetailLocation":"P. Đồng Tâm, Q. Hai Bà Trưng",
// //         "cityLocation":"Hà Nội"
// //     },

// // ])



// // Order.create([
// //     {
// //         "imageProduct":"https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%2FS%C3%A1p%20Bed%20Head%20for%20Men-Matt%20Separation.jpg?alt=media&token=9a4c8704-0ab2-4cb0-8aee-e55302ff6364",
// //         "nameProduct":"Sáp Bed Head for Men-Matt Separation",
// //         "priceProduct":"460000",
// //         "fullName":"Huy Anh",
// //         "phoneNumber":"0911830999",
// //         "address":"Trần Duy Hưng"
// //     }
// // ])

// // Order.remove({},(err)=>{
// //     console.log("complete")
// // })

// Product.remove({}, (err) => {
//     console.log("complete")
// })

// Product.create([
//     {
//         "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%20Chu%E1%BA%A9n%2FBed%20Head%20for%20Men.png?alt=media&token=2c3f1ca9-cc66-429d-98d2-13ba2089cdb7",
//         "nameProduct": "Sáp Bed Head for Men-Matt Separation",
//         "priceProduct": "460000",
//         "typeProduct": "Sáp",
//         "descriptionProduct": "Dòng sản phẩm chăm sóc tóc của Tigi là một trong những dòng sản phẩm chăm sóc tóc hàng đầu hiện nay. Được thành lập bởi hai anh em Giuseppe (Toni) và Gaetano (Guy) Mascolo, thương hiệu này đã có mặt tại hơn 400 salon trên toàn thế giới và nhận được 50 giải thưởng trong ngành công nghiệp chăm sóc tóc.",
//         "ratingProduct": "4"
//     },
//     {
//         "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%20Chu%E1%BA%A9n%2FGlayzen%20Clay%20100g.jpg?alt=media&token=b65e04e1-c8b6-424c-97b7-8ed22046c8e0",
//         "nameProduct": "Sáp Glanzen Clay 100g",
//         "priceProduct": "340000",
//         "typeProduct": "Sáp",
//         "descriptionProduct": "Apestomen là một thương hiệu về các sản phẩm chăm sóc tóc và tạo kiểu tóc dành cho nam giới hàng đầu tại Singapore. Không chỉ \"chế ngự\" được mồ hôi dầu mà còn ít bị tác động bởi ngoại cảnh. Vì thế dù nắng hay mưa thì Apestomen Volcanic Clay vẫn sẽ giúp tóc bạn giữ nếp đẹp chuẩn cả ngày.",
//         "ratingProduct": "4"
//     },
//     {
//         "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%20Chu%E1%BA%A9n%2FGlazen%20Prime%20Floral.png?alt=media&token=d1f6dca7-87db-4b5f-acc6-18ec92653a9b",
//         "nameProduct": "Sáp Glanzen Prime - Floral",
//         "priceProduct": "329000",
//         "typeProduct": "Sáp",
//         "descriptionProduct": "Glanzen Prime - Floral mang đến hương hoa cho cảm giác sảng khoải, trẻ trung mà vẫn cuốn hút. Glanzen Prime - Floral là sự kết hợp của hơn 15 loại hương hoa từ melon, đinh hương, lô hội, hoa nhài, cẩm chướng, bạch thiên hương ... và kết hợp với hương trái cây mang đến cảm giác thoải mái.",
//         "ratingProduct": "5"
//     },
//     {
//         "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%20Chu%E1%BA%A9n%2FGold%20Digger.png?alt=media&token=8b66d3e4-d2ac-4ea8-9f44-25138ce81501",
//         "nameProduct": "Sáp By Vilain Gold Digger",
//         "priceProduct": "499000",
//         "typeProduct": "Sáp",
//         "descriptionProduct": "By Vilain là một ông lớn trong lĩnh vực phát triển các sản phẩm về chăm sóc và tạo kiểu tóc, thương hiệu này đình đám đến nỗi sở hữu 1 kênh Youtube riêng về tóc nam và các sản phẩm By Vilain liên quan và có tới 2 triệu subscriber.By Vilain là một ông lớn trong lĩnh vực phát triển các sản phẩm về chăm sóc và tạo kiểu tóc, thương hiệu này đình đám đến nỗi sở hữu 1 kênh Youtube riêng về tóc nam và các sản phẩm By Vilain liên quan và có tới 2 triệu subscriber.",
//         "ratingProduct": "4"
//     },
//     {
//         "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%20Chu%E1%BA%A9n%2FKevin%20Murphy.png?alt=media&token=123666b8-f7fe-4c1b-8095-1414f120d1a9",
//         "nameProduct": "Sáp Kevin Murphy - Rough Rider",
//         "priceProduct": "690000",
//         "typeProduct": "Sáp",
//         "descriptionProduct": "Kenvin Murphy là thương hiệu sáp hàng đầu thế giới được ưa chuộng bậc nhất. Siêu phẩm Rough Rider của hãng này được mệnh danh là ông vua của các loại sáp vì độ giữ nếp và miễn dịch với mồ hôi dầu cực cao của nó.",
//         "ratingProduct": "5"
//     },
//     {
//         "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%20Chu%E1%BA%A9n%2FTEA%20Tr%C3%AA%20Shaping.jpg?alt=media&token=0afb0f7f-c747-48ab-beeb-0b44824262e2",
//         "nameProduct": "Sáp TEA TREE SHAPING CREAMáp TIGI Headlimer",
//         "priceProduct": "729000",
//         "typeProduct": "Sáp",
//         "descriptionProduct": "Sáp TEA TREE SHAPING CREAM  cao cấp được nhập khẩu. Hiện nay để nói về sáp vuốt tóc nam tốt, không chỉ đánh giá qua độ giữ nếp, thương hiệu, độ bóng hay độ làm sạch. Mà chúng ta còn phải nói đến khối lượng & độ volume, độ texture mà sản phẩm mang lại cho kiểu tóc. Sáp TEA TREE SHAPING CREAM mang trong mình tất cả đặc điểm đó, bạn sẽ bị lôi cuốn bởi mùi hương thơm thực vật từ trà xanh nhẹ nhàng, sảng khoái., hay độ giữ nếp cao mà sản phẩm mang lại.",
//         "ratingProduct": "4"
//     },
//     {
//         "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%20Chu%E1%BA%A9n%2FTIGI%20Headlimer.png?alt=media&token=068c78ac-a72e-49c8-82d0-04c54e2b1d49",
//         "nameProduct": "Sáp TIGI Headlimer",
//         "priceProduct": "285000",
//         "typeProduct": "Sáp",
//         "descriptionProduct": "Dòng sản phẩm chăm sóc tóc của Tigi là một trong những dòng sản phẩm chăm sóc tóc hàng đầu hiện nay. Được thành lập bởi hai anh em Giuseppe (Toni) và Gaetano (Guy) Mascolo, thương hiệu này đã có mặt tại hơn 400 salon trên toàn thế giới và nhận được 50 giải thưởng trong ngành công nghiệp chăm sóc tóc.Sáp TEA TREE SHAPING CREAM  cao cấp được nhập khẩu. Hiện nay để nói về sáp vuốt tóc nam tốt, không chỉ đánh giá qua độ giữ nếp, thương hiệu, độ bóng hay độ làm sạch. Mà chúng ta còn phải nói đến khối lượng & độ volume, độ texture mà sản phẩm mang lại cho kiểu tóc. Sáp TEA TREE SHAPING CREAM mang trong mình tất cả đặc điểm đó, bạn sẽ bị lôi cuốn bởi mùi hương thơm thực vật từ trà xanh nhẹ nhàng, sảng khoái., hay độ giữ nếp cao mà sản phẩm mang lại.",
//         "ratingProduct": "4"
//     },
//     {
//         "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/S%C3%A1p%20Chu%E1%BA%A9n%2FVolcanic%20clay.jpg?alt=media&token=2f2aeda9-c35a-4322-b094-f4ba02c5c2c2",
//         "nameProduct": "Sáp Volcanic Clay",
//         "priceProduct": "359000",
//         "typeProduct": "Sáp",
//         "descriptionProduct": "Apestomen Volcanic Clay được đánh giá là một sản phẩm sáp vuốt tóc chất lượng và luôn nằm trong danh sách các sản phẩm bán chạy nhất với giá cả cực kỳ phù hợp.Điểm mạnh của sản phẩm nằm ở khả năng giữ nếp vượt trội, tạo độ phồng cao và đem đến một mái tóc tự nhiên, bồng bềnh. Chưa kể đó, Volcanic thấm hút dầu rất tốt và cho cảm giác rất sạch sẽ không bết dính tay mỗi khi vuốt",
//         "ratingProduct": "5"
//     },
//     {
//         "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/D%E1%BA%A7u%20g%E1%BB%99i%2Fattitude.jpg?alt=media&token=351bb29b-455d-4587-a453-42abf15a8a84",
//         "nameProduct": "Dầu gội cao cấp Romano Attitude 650g",
//         "priceProduct": "119000",
//         "typeProduct": "Shampoo",
//         "descriptionProduct": "Dầu Gội Cao Cấp Cho Nam Romano Attitude (650g) với công thức cải tiến giúp làm sạch da đầu hiệu quả và và mang đến cho bạn một mái tóc mềm mượt và khỏe mạnh cả ngày dài với thành phần Pro Vitamin B5.Dầu gội cao cấp Romano Attitude có công thức chuyên biệt dành cho nam với thành phần Pro Vitamin B5 cho mái tóc sạch, mát và chắc khỏe.",
//         "ratingProduct": "4"
//     },
//     {
//         "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/D%E1%BA%A7u%20g%E1%BB%99i%2Fclear%20men.jpg?alt=media&token=9fc97d54-fe8a-4efe-bdf6-4469098cdf12",
//         "nameProduct": "Dầu Gội Clear Men Mát Lạnh Bạc Hà 650g",
//         "priceProduct": "109000",
//         "typeProduct": "Shampoo",
//         "descriptionProduct": "Dầu Gội Clear Men Mát Lạnh Bạc Hà 650g là dầu gội được đặc chế dành riêng cho nam giới do các chuyên gia về tóc đã đào sâu nghiên cứu. Trong dầu gội có chứa các hoạt chất Nutrium 10 và tinh chất bạc hà, không chỉ nuôi dưỡng da đầu khỏe mạnh, ngăn chặn tình trạng gàu quay trở lại mà còn giúp mang đến cảm giác mát lạnh sảng khoái để bạn luôn tự tin khi xuất hiện trước mọi người. Thiết kế chai lớn tiện dụng, tiết kiệm thời gian và chi phí mua sắm.",
//         "ratingProduct": "5"
//     },{
//         "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/D%E1%BA%A7u%20g%E1%BB%99i%2Fnivea.jpg?alt=media&token=ff11aa5b-b7e3-42f2-9f95-2d1534ad487c",
//         "nameProduct": "Dầu gội đầu Nivea Men - Bùn khoáng",
//         "priceProduct": "90000",
//         "typeProduct": "Shampoo",
//         "descriptionProduct": "NIVEA Men Ice Mud Cool And Clean chứa hàng trăm ngàn phân tử bùn khoáng siêu nhỏ hoạt động như các thỏi nam châm có khả năng hút các bụi bẩn và nhờn bám trên da đầu có khối lượng lớn gấp 200 lần so với nó, giúp xoáy bay mọi bụi bẩn, đồng thời xoa dịu và nuôi dưỡng da đầu góp phần ngăn nhờn ngứa cả ngày. Đặc biệt, tinh chất trà và bạc hà mang tới cho bạn cảm giác mát lạnh tức thì cùng hương thơm nam tính đầy lôi cuốn.",
//         "ratingProduct": "4"
//     },{
//         "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/D%E1%BA%A7u%20g%E1%BB%99i%2Fromano%20classic.jpg?alt=media&token=00e415fe-1dfa-45c8-a338-77ec39197600",
//         "nameProduct": "Dầu Gội Cao Cấp Romano Classic 900g",
//         "priceProduct": "185000",
//         "typeProduct": "Shampoo",
//         "descriptionProduct": "Dầu Gội Cao Cấp Romano Classic 900g với công thức giàu chất giữ ẩm và màng chống tia UV giúp bảo vệ tóc và da đầu. Sản phẩm là sự kết hợp tinh tế giữa những hương gỗ tự nhiên, đặc biệt là gỗ đàn hương, tinh dầu thơm từ cây hoắc hương mang đến hương thơm cổ điển độc đáo, cho bạn phong cách lịch lãm cùng chất trẻ trung hiện đại, mang đến mùi hương nam tính, mạnh mẽ cho phái mạnh.",
//         "ratingProduct": "5"
//     },{
//         "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/D%E1%BA%A7u%20g%E1%BB%99i%2Fromano%20force.jpg?alt=media&token=3e571a9a-2182-4a14-bcb1-606ad3f48c36",
//         "nameProduct": "Dầu Gội Cao Cấp Cho Nam Romano Force",
//         "priceProduct": "139000",
//         "typeProduct": "Shampoo",
//         "descriptionProduct": "Dầu Gội Cao Cấp Cho Nam Romano Force (650g) không chỉ nhẹ nhàng làm sạch da đầu, tạo cảm giác mát lạnh, sảng khoái mà còn bổ sung thành phần Pro Vitamin B5 nuôi dưỡng mái tóc thẳng mượt và giúp da đầu luôn khỏe mạnh. Hương thơm mát lạnh, sảng khoái giúp phái nam luôn tự tin và cuốn hút.        ",
//         "ratingProduct": "5"
//     },{
//         "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/D%E1%BA%A7u%20g%E1%BB%99i%2Fromano_dau_goi_cao_cap_vip_650g.jpg?alt=media&token=ce845ad8-269e-464a-8a2f-64760072ce3d",
//         "nameProduct": "Dầu Gội Romano VIP 650g",
//         "priceProduct": "127000",
//         "typeProduct": "Shampoo",
//         "descriptionProduct": "Dầu Gội Cao Cấp Cho Nam Romano VIP 650g có công thức dành riêng cho người đàn ông cá tính giúp mái tóc bạn sẽ trở nên mượt mà, dễ dàng vào nếp và không còn dấu hiệu của gàu, đem lại cảm giác sảng khoái cùng mùi hương nam tính lưu lại trên tóc sau khi sử dụng.",
//         "ratingProduct": "4"
//     },{
//         "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/D%E1%BA%A7u%20g%E1%BB%99i%2Ftresemme%20keratin.jpg?alt=media&token=ab5e7f38-e78d-49b9-9c3b-3a387b205fd8",
//         "nameProduct": "Dầu Gội TRESemmé Keratin Smooth",
//         "priceProduct": "179000",
//         "typeProduct": "Shampoo",
//         "descriptionProduct": "Dầu Gội TRESemmé Keratin Smooth (340g) thích hợp sử dụng cho tóc khô xơ và tóc nhuộm. Nhờ các thành phần giàu dưỡng chất sẽ nuôi dưỡng mái tóc bạn trở nên khỏe mạnh hơn. Đồng thời, Keratin Smooth giúp mái tóc bạn mượt  mà lên đến 48 giờ.",
//         "ratingProduct": "5"
//     },{
//         "imageProduct": "https://firebasestorage.googleapis.com/v0/b/authenticationsms.appspot.com/o/D%E1%BA%A7u%20g%E1%BB%99i%2Fxnen%20for%20bos%20motion.jpg?alt=media&token=cabb24dd-1d7c-4bd0-98ed-8560ca389664",
//         "nameProduct": "Dầu Gội Nước Hoa X-Men For Boss Motion",
//         "priceProduct": "169000",
//         "typeProduct": "Shampoo",
//         "descriptionProduct": "Dầu Gội Nước Hoa X-Men For Boss Motion (650g) có thiết kế dạng chai, sản phẩm được điều chế từ nhà điều hương Anne-Sophie Chapuis-Cariou.Kết hợp thành phần cao cấp Citrus và gỗ Đàn Hương tạo nên hương nước hoa tươi mát dành cho người đàn ông năng động, dám đưa ra những quyết định táo bạo để đạt được thành công.",
//         "ratingProduct": "4"
//     },

// ])
