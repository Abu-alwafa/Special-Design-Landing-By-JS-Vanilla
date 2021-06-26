
const dObj = [
    {
        imgSrc: 'products-imgs/1.png',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    },
    {
        imgSrc: 'products-imgs/2.png',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    },
    {
        imgSrc: 'products-imgs/3.png',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    },
    {
        imgSrc: 'products-imgs/4.png',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    },
    {
        imgSrc: 'products-imgs/5.png',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    },
    {
        imgSrc: 'products-imgs/6.png',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    },
    {
        imgSrc: 'products-imgs/7.png',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    },
    {
        imgSrc: 'products-imgs/8.png',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    },
    {
        imgSrc: 'products-imgs/9.png',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    },
    {
        imgSrc: 'products-imgs/10.png',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    }
   
];

const cards = document.querySelector('.products-page .cards');

for (let i of dObj) {
    let card = `
            <div class="card">
                <div class="img-container">
                    <img src="${dObj[dObj.indexOf(i)].imgSrc}" alt="">
                </div>
                <div class="details">
                    <div class="text">
                        <h3>${dObj[dObj.indexOf(i)].title}</h3>
                        <p>${dObj[dObj.indexOf(i)].describe}</p>
                    </div>
                    <div class="request">
                        <input type="button" value="Request">
                    </div>
                </div>
            </div>
`;
    cards.innerHTML += card;
}
