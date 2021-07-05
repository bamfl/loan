export default class Diff {
  constructor(containerSelector, cardSelector, btnSelector) {
    try {
      this.container = document.querySelector(containerSelector);
      this.cards = document.querySelectorAll(cardSelector);
      this.btn = document.querySelector(btnSelector);
      this.counter = 0;
      this.length = 0;
    } catch (error) {}
  }

  hideCards() {
    this.counter = 0;

    this.cards.forEach((card) => {
      if (!isNaN(card.firstElementChild.innerHTML)) {
        card.classList.add('animated', 'fadeInLeft');
        card.style.display = 'none';

        this.length++;
      }
    });
  }

  showNextCard() {
    if (this.counter < this.length - 1) {
      this.cards[this.counter].style.display = '';
      this.counter++;
    } else if (this.counter === this.length - 1) {
      this.cards[this.counter].style.display = '';
      this.cards[this.length].remove();
    }
  }

  render() {
    try {
      this.hideCards();

      this.btn.addEventListener('click', () => {
        this.showNextCard();
      });
    } catch (error) {}
  }
}
