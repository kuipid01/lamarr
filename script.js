const items = document.querySelectorAll('.item');

const products  = [
    {
        id:1,
        popular:false,
        title:'Voignor Apache Dress',
        price:23,
        desc:'The best Clothe oline mainana mainana',
        imgUrl : '/assets/sweatshirt1.png',
    },
    {
        id:2,
        popular:true,
        title:'Facecap BasketBall',
        price:13,
        desc:'The best Clothe oline mainana mainana',
        imgUrl : '/assets/capball.png',
    },
    {
        id:3,
        popular:true,
        title:'Track Shirt',
        price:18,
        desc:'The best Clothe oline mainana mainana',
        imgUrl : '/assets/track1.png',
    },
    
    {
        id:4,
        popular:false,
        title:'Voignor Apache Dress',
        price:23,
        desc:'The best Clothe oline mainana mainana',
        imgUrl : '/assets/sweatshirt2.png',
    },
    {
        id:5,
        popular:true,
        title:'Facecap BasketBall',
        price:13,
        desc:'The best Clothe oline mainana mainana',
        imgUrl : '/assets/capotf.png',
    },
    {
        id:6,
        popular:false,
        title:'Track Shirt',
        price:18,
        desc:'The best Clothe oline mainana mainana',
        imgUrl : '/assets/short2.png',
    },
]


const itemHolder = document.querySelector(".items__list");
const itemHolder2 = document.querySelector(".items__list2");

products.forEach(product => {
   
    const item  = document.createElement('div');
    item.classList.add('item','flexor');
    const overlay  = document.createElement('div');
    overlay.classList.add('overlay','flexor');
    item.appendChild(overlay)
    const desc  = document.createElement('h4');
    desc.classList.add('desc','flexor');
    desc.innerText=product.title
    const h3  = document.createElement('h3');
    desc.appendChild(h3)
    h3.innerText=product.price + '$';
    const newDesc  = document.createElement('h4');
    newDesc.classList.add('desc','flexor');
    newDesc.innerText=product.title;
   
    const imgTag  = document.createElement('img');
    imgTag.src=product.imgUrl;
    item.appendChild(imgTag)
      item.appendChild(newDesc)
    overlay.appendChild(desc)
    itemHolder.appendChild(item)
    
    

});

let popularProducts = products.filter(product=> product.popular===true);

popularProducts.forEach(product => {
   
    const item  = document.createElement('div');
    item.classList.add('item','flexor');
    item.style.backgroundColor="#b3d98f85";
    const overlay  = document.createElement('div');
    
    overlay.classList.add('overlay','flexor');
    overlay.style.backgroundColor="grey";
    
    item.appendChild(overlay)
    const desc  = document.createElement('h4');
    desc.classList.add('desc','flexor');
    desc.innerText=product.title
    const h3  = document.createElement('h3');
    desc.appendChild(h3)
    h3.innerText=product.price + '$';
    const newDesc  = document.createElement('h4');
    newDesc.classList.add('desc','flexor');
    newDesc.innerText=product.title;
   
    const imgTag  = document.createElement('img');
    imgTag.src=product.imgUrl;
    item.appendChild(imgTag)
      item.appendChild(newDesc)
    overlay.appendChild(desc)
    itemHolder2.appendChild(item)
    
    

});
