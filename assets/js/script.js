const boardGame = document.getElementById("BoardGame");
const cards = [
    {
        name: 'burger',
        img: 'assets/img/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'assets/img/fries.png'
    },
    {
        name: 'hotdog',
        img: 'assets/img/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'assets/img/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'assets/img/pizza.png'
    },
    {
        name: 'shake',
        img: 'assets/img/milkshake.png'
    },
    {
        name: 'burger',
        img: 'assets/img/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'assets/img/fries.png'
    },
    {
        name: 'hotdog',
        img: 'assets/img/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'assets/img/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'assets/img/pizza.png'
    },
    {
        name: 'shake',
        img: 'assets/img/milkshake.png'
    }
];
cardsChoosen = [];
cardsChoosenId = [];
cardsWon = [];
cards.sort(()=> 0.5 - Math.random());

const createBoardGame = ()=>{
    for(let i = 0;i < cards.length ; i++)
    {
        const gameCard = document.createElement('img');
        gameCard.setAttribute('src','assets/img/blank.png');
        gameCard.setAttribute('data-id',i);
        boardGame.appendChild(gameCard);
        gameCard.addEventListener('click',flipCard);
    }
}
function flipCard()
{
    let cardId = this.getAttribute('data-id');
    if(cardsChoosenId != null)
    {
        if(cardsChoosenId[0] == cardId || cardsWon.includes(cardId) || cardsChoosenId.length == 2)
            return;    
    }
    cardsChoosenId.push(cardId);
    cardsChoosen.push(cards[cardId].name);
    const images = document.querySelectorAll('img');
    images.forEach((image,i) =>{
        if(cardId == image.getAttribute('data-id'))
            image.setAttribute('src',cards[cardId].img);
    })
    if(cardsChoosenId.length == 2)
        setTimeout(cardChecker,500);
}
const cardChecker = ()=>{
    if(cardsChoosen[0] == cardsChoosen[1])
    {
        const images = document.querySelectorAll('img');
        images.forEach((image)=>{
            if(image.getAttribute('data-id') == cardsChoosenId[0] || image.getAttribute('data-id') == cardsChoosenId[1])
            {
                image.setAttribute('src','assets/img/white.png');
            }
        })
        cardsWon.push(cardsChoosenId[0]);
        cardsWon.push(cardsChoosenId[1]);
    }
    else{
        const images = document.querySelectorAll('img');
        images.forEach((image)=>{
            if(image.getAttribute('data-id') == cardsChoosenId[0] || image.getAttribute('data-id') == cardsChoosenId[1])
            {
                image.setAttribute('src','assets/img/blank.png');
            }
        })
    }
    cardsChoosen = [];
    cardsChoosenId = [];
    checkWinner();
}
const checkWinner = ()=>{
    if(cardsWon.length == cards.length)
    {
        alert('You win !!!');
        location.reload();
    }
}
createBoardGame();