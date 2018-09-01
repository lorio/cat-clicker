
const counter = document.createElement('p');
const card1 = document.getElementById('card1');
card1.appendChild(counter);
let likes = 0;
counter.textContent = `${name} has ${likes} likes.`;

const counter2 = document.createElement('p');
const card2 = document.getElementById('card2');
card2.appendChild(counter2);
let likes2 = 0;
counter2.textContent = `${name} has ${likes2} likes.`;

/*counter.textContent = '1';*/
class Cat {
  constructor(name = 'lou', likes = 0, card = 'card1') {
    this.name = 'name';
    this.likes = 0;
    this.card = 'card';
    this.pic = 'pic';
    }
  getCaption()  {
    return `${name} has ${likes} likes.`
    }
  buildProfile() {
    /*let cards = [card1, card2].map(card => {*/
      let pic = document.querySelector('img');
      pic.addEventListener('click', function() {
      this.likes++;             
      });
  }
}

let cat1 = new Cat('lou', 0, 'card1', 'img/cat.jpg' );
let cat2 = new Cat('lily', 0, 'card2', 'img/cat2.jpg');
cat1.getCaption();
cat1.buildProfile();
cat2.getCaption();
cat2.buildProfile();

