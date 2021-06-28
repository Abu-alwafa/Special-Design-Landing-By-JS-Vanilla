
const dObj = [
    {
        imgSrc: 'imgs/1.jpg',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    },
    {
        imgSrc: 'imgs/2.jpg',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    },
    {
        imgSrc: 'imgs/3.jpg',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    },
    {
        imgSrc: 'imgs/4.jpg',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    },
    {
        imgSrc: 'imgs/5.jpg',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    },
    {
        imgSrc: 'imgs/6.jpg',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    },
    {
        imgSrc: 'imgs/7.jpg',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    },
    {
        imgSrc: 'imgs/8.jpg',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    },
    {
        imgSrc: 'imgs/9.jpg',
        title: 'Dress',
        describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sed?'
    },
    {
        imgSrc: 'imgs/10.jpg',
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
