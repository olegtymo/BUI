/**
 * TASK-04
 *
 * Користуючись отриманними знаннями на даний момент, написати функцонал для створення опитувань.
 * На екрані має зʼявлятись питання, варіантти відповідей з можливістю вибору лише однієї відповіді.
 * Після натискання на кнопку "Наступне питання" має зʼявлятись наступне питання.
 * Після натискання на кнопку "Завершити опитування" має зʼявлятись повідомлення про кількість правильних відповідей.
 *
 * Спосіб виконання довільний, єдина вимога - передавати _QUESTIONS як аргумент, а не використовувати як глобальну змінну.
 */

import data from './data.js';

function Quiz(arr, parent) {
  this.parent = parent;
  this.activeQuestion = 0;
  this.errorCounter = 0;
  this.errorStatus = false;
  this.elements = {
    wrapper: document.createElement('div'),
    question: document.createElement('h3'),
    listAnswers: document.createElement('ul'),
    nextQuestionBtn: document.createElement('button'),
    showResult: document.createElement('button'),
    parent: document.querySelector(this.parent),
    resetQuiz: document.createElement('button'),
    modal: document.createElement('dialog'),
  };

  this.render = () => {
    const parent = document.querySelector(`${this.parent}`);
    this.elements.question.textContent = data[this.activeQuestion].question;
    this.elements.nextQuestionBtn.textContent = 'Наступне запитання';

    data[this.activeQuestion].answers.forEach((a) => {
      const answer = document.createElement('li');
      answer.textContent = a;
      this.elements.listAnswers.append(answer);
    });
    this.elements.nextQuestionBtn.style.display = 'block';

    this.elements.nextQuestionBtn.addEventListener('click', this.nextQuestionClick);
    this.elements.listAnswers.addEventListener('click', this.chooseAnswerClick);
    parent.append(this.elements.question, this.elements.listAnswers, this.elements.nextQuestionBtn);
  };

  this.clearListAnswers = () => {
    while (this.elements.listAnswers.firstChild) {
      this.elements.listAnswers.removeChild(this.elements.listAnswers.firstChild);
    }
  };

  this.nextQuestionClick = (e) => {
    if (this.activeQuestion === data.length - 1) {
      this.elements.listAnswers.innerHTML = '';
      this.elements.question.textContent = '';
      this.elements.nextQuestionBtn.style.display = 'none';
      const modal = this.elements.modal;
      this.elements.showResult.textContent = 'Show result';
      this.elements.showResult.addEventListener('click', this.showAmountOfErrors);
      this.elements.resetQuiz.textContent = 'Reset Quiz';
      this.elements.resetQuiz.addEventListener('click', this.resetQuiz);
      modal.append(this.elements.showResult, this.elements.resetQuiz);
      this.elements.parent.append(modal);
      this.activeQuestion = 0;
      modal.showModal();
    }

    if (!this.elements.listAnswers.querySelector('.chosen')) {
      throw new Error('Choose option');
    }
    this.errorStatus === false ? this.errorCounter++ : null;
    this.activeQuestion += 1;

    this.clearListAnswers();
    this.render();
  };

  this.resetQuiz = (e) => {
    this.elements.modal.close();
    this.activeQuestion = 0;

    this.render();
  };

  this.showAmountOfErrors = () => {
    const amountOfErrors = document.createElement('h4');
    amountOfErrors.textContent = `Errors: ${this.errorCounter}`;
    this.elements.modal.append(amountOfErrors);
    this.elements.showResult.disabled = true;
  };

  this.chooseAnswerClick = (e) => {
    const clickedLi = e.target;
    const lastClickedLi = e.currentTarget.querySelector('.chosen');
    if (lastClickedLi !== clickedLi) {
      lastClickedLi?.classList.remove('chosen');
    }
    clickedLi.classList.add('chosen');
    this.errorStatus = this.checkAnswer(e.target.textContent);
  };
  this.checkAnswer = (userAnswer) => {
    return data[this.activeQuestion].correctAnswer.includes(userAnswer);
  };
}

const quizlet = new Quiz(data, 'main');
quizlet.render();
