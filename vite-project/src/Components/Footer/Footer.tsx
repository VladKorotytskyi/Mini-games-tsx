import { useState } from "react";
import React from "react";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const OpenModal = () => setIsOpen(true);
  const CloseModal = () => setIsOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>
    e.preventDefault();
  if (!email.trim()) return;

  return (
    <footer>
      <div>
        <div>
          <img alt="coding magic" />
          <div>
            <p>Тел: +38 (123) 456 78 90</p>
            <p>E-Mail: codingmagic@gmail.com</p>
            <p>Facebook: CodingMagic</p>
            <p>Twitter: CodingMagic</p>
            <p>Instagram: CodingMagic</p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type="email"
                  placeholder="Ваша ел. адреса..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button id="openModalBtn" type="button" onClick={OpenModal}>
                  Підписатись
                </button>
              </label>
            </form>
            <p>
              *Підписавшись, Ви зможете отримувати інформацію про новинки на
              сайті
            </p>
          </div>
        </div>

        {/* ==Modal==*/}

        {isOpen && (
          <div id="footerModal" className="ModalContainer">
            <div
              className="ModalContent"
              onClick={(e) => {
                e.stopPropagation;
              }}
            >
              <button className="CloseButton" onClick={CloseModal}>
                <img alt="close modal" />
              </button>
              <h3>Дякую за підписку!</h3>
              <img alt="sword" />
              <img alt="puzzle" />
              <img alt="game" />
              <img alt="tic tac" />
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

// <div id="footerModal" class="modal">
//   <div class="modal-content">
//     <button class="close-btn">
//       <img
//         class="buttonImg"
//         src="./images/closeModal.png"
//         alt="close modal"
//       />
//     </button>
//     <h3 class="modal-title">Дякую за підписку!</h3>
//     <img class="modal-imgOne" src="./images/swordModal.png" alt="sword" />
//     <img class="modal-imgTwo" src="./images/puzzleModal.png" alt="puzzle" />
//     <img class="modal-imgThree" src="./images/console.png" alt="game" />
//     <img
//       class="modal-imgFour"
//       src="./images/tic-tacModal.png"
//       alt="tic tac"
//     />
//   </div>

// const modal = document.getElementById('footerModal');
// const openBtn = document.getElementById('openModalBtn');
// const closeBtn = modal.querySelector('.close-btn');
// openBtn.addEventListener('click', () => {
//   modal.classList.toggle('active');
// });
// closeBtn.addEventListener('click', () => {
//   modal.classList.toggle('active');
// });

{
  /* <footer>
  <div class="container">
    <div class="footer__div-first">
      <img
        class="footer__img"
        src="./images/coding-magic.png"
        alt="coding magic"
      />
      <div>
        <p class="footer__text">Тел: +38 (123) 456 78 90</p>
        <p class="footer__text">E-Mail: codingmagic@gmail.com</p>
        <p class="footer__text">Facebook: CodingMagic</p>
        <p class="footer__text">Twitter: CodingMagic</p>
        <p class="footer__text">Instagram: CodingMagic</p>
      </div>
      <div class="footer__div-second">
        <form class="footer__form">
          <label class="footer__label">
            <input
              class="footer__input"
              type="email"
              placeholder="Ваша ел. адреса..."
            />
            <button id="openModalBtn" class="footer__btn" type="button">
              Підписатись
            </button>
          </label>
        </form>
        <p class="footer__input-text">
          *Підписавшись, Ви зможете отримувати інформацію про новинки на сайті
        </p>
      </div>
    </div>
    <div id="footerModal" class="modal">
      <div class="modal-content">
        <button class="close-btn">
          <img
            class="buttonImg"
            src="./images/closeModal.png"
            alt="close modal"
          />
        </button>
        <h3 class="modal-title">Дякую за підписку!</h3>
        <img class="modal-imgOne" src="./images/swordModal.png" alt="sword" />
        <img class="modal-imgTwo" src="./images/puzzleModal.png" alt="puzzle" />
        <img class="modal-imgThree" src="./images/console.png" alt="game" />
        <img
          class="modal-imgFour"
          src="./images/tic-tacModal.png"
          alt="tic tac"
        />
      </div>
    </div>
  </div>
</footer> */
}
