function setupPopup(button, modal) {
    button.onclick = function() {
        modal.showModal();
    };

    const closeButton = modal.querySelector("button");
    closeButton.onclick = function() {
        modal.close();
    };
}

const popups = [
    { button: document.querySelector(".open-popup-1"), modal: document.querySelector(".project-1") },
    { button: document.querySelector(".open-popup-2"), modal: document.querySelector(".project-2") },
    { button: document.querySelector(".open-popup-3"), modal: document.querySelector(".project-3") },
    { button: document.querySelector(".open-popup-4"), modal: document.querySelector(".project-4") },
    { button: document.querySelector(".open-popup-5"), modal: document.querySelector(".project-5") }
];

popups.forEach(popup => {
    setupPopup(popup.button, popup.modal);
});