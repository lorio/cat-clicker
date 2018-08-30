
const counter = document.createElement('p');
const card1 = document.getElementById('card1');
card1.appendChild(counter);
let likes = 0;
counter.textContent = `${likes}`;

const counter2 = document.createElement('p');
const card2 = document.getElementById('card2');
card2.appendChild(counter2);
let likes2 = 0;
counter2.textContent = `${likes2}`;

/*counter.textContent = '1';*/
class Cat {
  constructor(name, likes, card) {
    this.name = name;
    this.likes = 0;
    this.card = 'card';
    this.pic = 'pic';
  }
  buildProfile() {
    /*let cards = [card1, card2].map(card => {*/
      this.pic = document.querySelector('img');
      pic.addEventListener('click', function() {
      likes++;
               
      });
   /* })*/
  }
}
/*cat = new Cat;
cat.buildProfile(
  name = 'lou', 
  likes = 0, 
  pic = 'img/cat.jpg', 
  card = 'card[0]'
  );*/
/*let allCats.forEach(cat => {

});
let allCats = [...Array(2)].map((cat,name,pic) =>  new Cat(name,pic));
  cat.buildProfile();
*/

cat1 = new Cat('lou', 0, 'img/cat.jpg' );
cat2 = new Cat('lily',0, 'img/cat2.jpg');



/*allCats.forEach(cat) {
articleHead1.appendChild(counter);
const pic1 = document.querySelector('.one img');
pic1.addEventListener('click', function() {
  likes++;
  counter.textContent = `${likes}`;
});
}
articleHead2.appendChild(counter);
const pic2 = document.querySelector('.two img');
pic2.addEventListener('click', function() {
  likes++;
  counter.textContent = `${likes}`;
});*/