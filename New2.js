const product = [
    {
        id:0,
        image:'https://contents.mediadecathlon.com/p2320005/k$6e46fbd99b3381f1da3d205fbd250c3b/cw900-hr-well-being-smart-watch-blue.jpg?format=auto&quality=70&f=768x768',
        title:'Smart Watch',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        price:120,
    },
    {
        id:1,
        image:'https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg',
        title:'Shirt',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        price:120,
    },
    {
        id:2,
        image:'https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UF1000,1000_QL80_.jpg',
        title:'Phone',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        price:120,
    },
    {
        id:3,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojieV6u9aE3qUIHH0kcZwA7cxeduildL7dw&usqp=CAU',
        title:'Titan Smart Watch',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        price:120,
    },
    {
        id:4,
        image:'https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg?im=Resize=(1000,1000)',
        title:'Shoes',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        price:120,
    },
    {
        id:5,
        image:'https://www.notebookcheck.net/uploads/tx_nbc2/OppoA3s__1_.jpg',
        title:'Oppo A3s',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        price:120,
    },
    {
        id:6,
        image:'https://poshgarments.com/wp-content/uploads/2021/09/Mens-Shirt-MWS0001-450x450.jpg',
        title:'Man shirt',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        price:120,
    },
    {
        id:7,
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422992/sub/goods_422992_sub14.jpg?width=494',
        title:'T-Shirt',
        content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        price:120,
    },
]
const categories = [...new Set(product.map((item)=>{ 
    return item;
}))]
const displayItem = (items) => {
    document.querySelector(".root").innerHTML = items.map((item)=>{
        var { price , title , content , image } = item;
        return (
                `
                    <div class = 'box'>
                        <div class = 'img-box'>
                            <img class = 'image-box' src = ${image}></img>
                        </div>
                        <div class = 'bottom'>
                            <h3>${title}</h3>
                            <p>${content}</p>
                            <h4>$ ${price}.00</h4>
                        </div>
                        <div class = 'bottom2'> 
                         <i class="fa-solid fa-cart-shopping k"></i>
                         <i class="fa-solid fa-arrows-turn-right k1"></i>
                         <i class="fa-solid fa-heart" k2></i>
                        </div> 
                    </div>
                `
        )
    }).join('')
}
displayItem(categories)
const channy = document.querySelector(".searchBar");
console.log(channy)
channy.addEventListener('keyup',(e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=>{
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
})
const product2 = [
    {
        id:0,
        image:'https://contents.mediadecathlon.com/p2320005/k$6e46fbd99b3381f1da3d205fbd250c3b/cw900-hr-well-being-smart-watch-blue.jpg?format=auto&quality=70&f=768x768',
        title:'Smart Watch',
        price:120,
    },
    {
        id:1,
        image:'https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg',
        title:'Shirt',
        price:120,
    },
    {
        id:2,
        image:'https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UF1000,1000_QL80_.jpg',
        title:'Phone',
        price:120,
    },
    {
        id:3,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojieV6u9aE3qUIHH0kcZwA7cxeduildL7dw&usqp=CAU',
        title:'Titan Smart Watch',
        price:120,
    },
    {
        id:4,
        image:'https://www.jiomart.com/images/product/original/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg?im=Resize=(1000,1000)',
        title:'Shoes',
        price:120,
    },
    {
        id:5,
        image:'https://www.notebookcheck.net/uploads/tx_nbc2/OppoA3s__1_.jpg',
        title:'Oppo A3s',
        price:120,
    },
    {
        id:6,
        image:'https://poshgarments.com/wp-content/uploads/2021/09/Mens-Shirt-MWS0001-450x450.jpg',
        title:'Man shirt',
        price:120,
    },
    {
        id:7,
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422992/sub/goods_422992_sub14.jpg?width=494',
        title:'T-Shirt',
        price:120,
    },
]
const categories2 = [...new Set(product2.map((item2)=>{
    return item2;
}))]
let i = 0 ;
document.querySelector(".root2").innerHTML = categories2.map(((item2)=>{ 
    var { title , price , image } = item2 ;
    return (
        `
        <div class = 'box2 '>
        <div class = 'img-box2'>
            <img class = 'image-box2' src = ${image}></img>
        </div>
        <div class = 'bottom5'>
            <p>${title}</p>
            <h4>$ ${price}.00</h4> `+
            "<button class = 'fil_button1' onclick = 'addtocart("+(i++)+")'>Add to cart</button>"+`
        </div>
    </div>
        `
    )
})).join('')
var cart = []
function addtocart(a) {
    cart.push({...categories2[a]});
    displayfilterCard();
}
function delElement(a) {
    cart.splice(a,1)
    displayfilterCard();
}
function displayfilterCard(a) {
    let j = 0 ;
    let total = 0 ; 
    document.querySelector(".count").innerHTML = cart.length;
    if ( cart.length == 0 ) {
        document.querySelector(".your_emypt").innerHTML = 'Your card is empty'
        document.querySelector(".addPrice_allProdcts").innerHTML = "$"+0+".00"
    }
    else {
        document.querySelector(".your_emypt").innerHTML = cart.map((item2)=>{
            var { image , price , title } = item2;
            total = total + price;
            document.querySelector(".addPrice_allProdcts").innerHTML = "$" + total + ".00"
            return (
                `
                    <div class = 'em-box'>
                        <div class = 'em-img'>
                            <img class = 'em-image' src = ${image}></img>
                        </div>
                        <div class ='em-bottom'>
                            <p>${title}</p>
                            <h5>$ ${price}</h5>
                        </div>
                ` +
                "<i class='fa-solid fa-trash' onclick = 'delElement("+(j++)+")'></i></div>"
            )
        }).join('')
    }
}
const btns = [
    {
        id:0,
        name:'All'
    },
    {
        id:1,
        name:'Blazers'
    },
    {
        id:2,
        name:'Watchs'
    },
    {
        id:3,
        name:'Shoes'
    },
    {
        id:4,
        name:'Mobiles'
    },
    {
        id:5,
        name:'Accessories'
    },
]
const categoriesButtons = [...new Set(btns.map((itemBtns)=>{
    return itemBtns;
}))]
document.querySelector(".filter_buttons").innerHTML = categoriesButtons.map((itemBtns)=>{
    var { id , name } = itemBtns;
    return (
        
         " <button class = 'edit_buttons' onclick = 'filterButtons(" +(id)+`)'>${name}</button>`
    )
}).join('')
const filterButtons = (e) => {
    const itemfilterCard = categories3; 
    if ( e == 0 ) {
        function item3(value){
            value.id
        }
        displayItem2(itemfilterCard)
    }  
    else {
        const filterItemscategories3 = categories3.filter((item3)=>{
            return (
                item3.id == e 
            )
        })
        function item3(value){
            value.id
        }
        displayItem2(filterItemscategories3)
    }
}
const productFilterCard = [
    {
        id:1,
        image:'https://blackberrys.com/cdn/shop/products/Solid_Casual_Blazer_In_Grey_Ben-EJCC2092G1BA22FL-image6.jpg?v=1687871104',
        title:'Blazers',
        content:'Lorem ipsum, dolor sit amet consectetur',
        price:120
    },
    {
        id:2,
        image:'https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UY780_.jpg',
        title:'Watch',
        content:'Lorem ipsum, dolor sit amet consectetur',
        price:120
    },
    {
        id:3,
        image:'https://rukminim2.flixcart.com/image/450/500/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=90&crop=false',
        title:'Shoes',
        content:'Lorem ipsum, dolor sit amet consectetur',
        price:120
    },
    {
        id:4,
        image:'https://imageio.forbes.com/specials-images/imageserve/64e74ad803781abed13b0612/Apple--iPhone--iPhone-15--iPhone-15-Pro--iPhone-15-Pro-Max--iPhone-15-release--new/0x0.jpg?format=jpg&crop=1275,956,x113,y0,safe&width=960',
        title:'Mobiles',
        content:'Lorem ipsum, dolor sit amet consectetur',
        price:120
    },
    {
        id:5,
        image:'https://wp.missmalini.com/wp-content/uploads/2019/09/shutterstock_774362164.jpeg',
        title:'Accessories',
        content:'Lorem ipsum, dolor sit amet consectetur',
        price:120
    },
    {
        id:1,
        image:'https://aritzia.scene7.com/is/image/Aritzia/medium/s23_04_a04_107282_19572_on_a.jpg',
        title:'Blazers',
        content:'Lorem ipsum, dolor sit amet consectetur',
        price:120
    },
    {
        id:2,
        image:'https://www.watchportal.com.ph/cdn/shop/products/watches-casio-standard-men-s-black-leather-strap-watch-mtp-v001l-1b-1_b51e0843-56c6-455a-bd33-b689b8a2db33.jpg?v=1600299190',
        title:'Watch',
        content:'Lorem ipsum, dolor sit amet consectetur',
        price:120
    },
    {
        id:3,
        image:'https://images.vans.com/is/image/VansEU/VN0A3WMAVNE-HERO?$PDP-FULL-IMAGE$',
        title:'Shoes',
        content:'Lorem ipsum, dolor sit amet consectetur',
        price:120
    },
    {
        id:4,
        image:'https://9to5mac.com/wp-content/uploads/sites/6/2023/08/1-2.jpg?quality=82&strip=all&w=1600',
        title:'Mobiles',
        content:'Lorem ipsum, dolor sit amet consectetur',
        price:120
    },
    {
        id:5,
        image:'https://hips.hearstapps.com/ell.h-cdn.co/assets/16/12/980x490/landscape-1458742382-elle-matchingaccessories.jpg?resize=1200:*',
        title:'Accessories',
        content:'Lorem ipsum, dolor sit amet consectetur',
        price:120
    },
    {
        id:2,
        image:'https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg',
        title:'Watch',
        content:'Lorem ipsum, dolor sit amet consectetur',
        price:120
    },
    {
        id:3,
        image:'https://www.campusshoes.com/cdn/shop/products/FIRST_11G-787_WHT-SIL-B.ORG.jpg?v=1670326183',
        title:'Shoes',
        content:'Lorem ipsum, dolor sit amet consectetur',
        price:120
    },
]
const categories3 = [...new Set(productFilterCard.map((item3)=>{
    return item3;
}))]
const displayItem2 = (itemfilterCard) => {
    document.querySelector(".filterCard3").innerHTML = itemfilterCard.map((item3)=>{
        var { image , title , content , price } = item3 ;
        return (
            `
                <div class = 'box3'>
                    <div class = 'box3-img'>
                        <img class = 'box3-image' src = ${image}></img>
                    </div>
                    <div class = 'box3-bottom'>
                        <h2>$ ${price}.00</h2>
                        <h3>${title}</h3>
                        <p>${content}</p>
                    </div>
                </div>
            `
        )
    }).join('')
}
displayItem2(categories3)
const product4 = [
    {
        id:1,
        image:'https://blackberrys.com/cdn/shop/products/Solid_Casual_Blazer_In_Grey_Ben-EJCC2092G1BA22FL-image6.jpg?v=1687871104',
        title:'Blazers',
        price:120
    },
    {
        id:2,
        image:'https://m.media-amazon.com/images/I/71VjM5LOeYL._AC_UY780_.jpg',
        title:'Watch',
        price:120
    },
    {
        id:3,
        image:'https://rukminim2.flixcart.com/image/450/500/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=90&crop=false',
        title:'Shoes',
        price:120
    },
    {
        id:4,
        image:'https://imageio.forbes.com/specials-images/imageserve/64e74ad803781abed13b0612/Apple--iPhone--iPhone-15--iPhone-15-Pro--iPhone-15-Pro-Max--iPhone-15-release--new/0x0.jpg?format=jpg&crop=1275,956,x113,y0,safe&width=960',
        title:'Mobiles',
        price:120
    },
    {
        id:5,
        image:'https://wp.missmalini.com/wp-content/uploads/2019/09/shutterstock_774362164.jpeg',
        title:'Accessories',
        price:120
    },
    {
        id:1,
        image:'https://aritzia.scene7.com/is/image/Aritzia/medium/s23_04_a04_107282_19572_on_a.jpg',
        title:'Blazers',
        price:120
    },
    {
        id:2,
        image:'https://www.watchportal.com.ph/cdn/shop/products/watches-casio-standard-men-s-black-leather-strap-watch-mtp-v001l-1b-1_b51e0843-56c6-455a-bd33-b689b8a2db33.jpg?v=1600299190',
        title:'Watch',
        price:120
    },
    {
        id:3,
        image:'https://images.vans.com/is/image/VansEU/VN0A3WMAVNE-HERO?$PDP-FULL-IMAGE$',
        title:'Shoes',
        price:120
    },
    {
        id:4,
        image:'https://9to5mac.com/wp-content/uploads/sites/6/2023/08/1-2.jpg?quality=82&strip=all&w=1600',
        title:'Mobiles',
        price:120
    },
    {
        id:5,
        image:'https://hips.hearstapps.com/ell.h-cdn.co/assets/16/12/980x490/landscape-1458742382-elle-matchingaccessories.jpg?resize=1200:*',
        title:'Accessories',
        price:120
    },
    {
        id:2,
        image:'https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg',
        title:'Watch',
        price:120
    },
    {
        id:3,
        image:'https://www.campusshoes.com/cdn/shop/products/FIRST_11G-787_WHT-SIL-B.ORG.jpg?v=1670326183',
        title:'Shoes',
        price:120
    },
]
const categories4 = [...new Set(product4.map((item4)=>{
    return item4 ;
}))]
let i2 = 0;
document.querySelector(".root4").innerHTML = categories4.map((item4)=>{
    var { image , title , price } = item4;
    return (
        `
            <div class = 'box4'>
                <div class = 'box4-img'>
                    <img class = 'box4-image' src = ${image}></img>
                </div>
                <div class = 'box4-bottom'>
                    <p>${title}</p>
                    <h4>$ ${price}.00</h4> ` +
                    "<button class = 'butto4' onclick = 'addtocart4("+(i2++)+")'>Buy now</button>" + `
                </div>
            </div>
        `
    )
}).join('')
var cart4 = []
function delElement4(a){
    cart4.splice(a,1);
    displayItem4();
}
function addtocart4(a){
    cart4.push({...categories4[a]})
    displayItem4()
}
function displayItem4(a){ 
    let j = 0 
    let total = 0;
    document.querySelector(".cont4").innerHTML = cart4.length;
    if ( cart4.length == 0 ) {
        document.querySelector(".sum_allProducts").innerHTML = "$" + 0 + ".00"
        document.querySelector(".empty4").innerHTML = 'Your cart is empty'
    } 
    else {
        document.querySelector(".empty4").innerHTML = cart4.map((item4)=>{
            var { image , title , price } = item4;
            total = total + price
            document.querySelector(".sum_allProducts").innerHTML = "$" + total + ".00"
            return (
                `
                <div class = 'sel_box4'>
                    <div class = 'sel_img4'>
                        <img class = 'sel_image4' src = ${image}></img>
                    </div>
                    <div class = 'bottom-box4'>
                        <p>${title}</p>
                        <h4>$ ${price}.00</h4>
                    </div>
            `+
            "<i class='fa-solid fa-trash' onclick = 'delElement4("+(j++)+")'></i></div>"
                    
            )
        }).join('')
    }
}