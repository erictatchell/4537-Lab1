let cardgroup;

function draw() {
    let cardContainer = document.getElementById(`${elements.CARDCONTAINER}`);
    cardContainer.innerHTML = msg.EMPTY;

    // for each was chatgpt's idea
    cardgroup.list.forEach(card => {
        let card_el = document.createElement(elements.DIV);
        card_el.classList.add(elements.CARD);

        let textarea = document.createElement('textarea');
        textarea.value = card.text;
        textarea.id = `textarea-${card.id}`; // appending card id to each textarea was chatgpts idea
        card_el.appendChild(textarea);

        let remove_button = document.createElement(elements.BUTTON);
        remove_button.innerText = msg.REMOVE;
        remove_button.addEventListener("click", () => cardgroup.remove(card));
        card_el.appendChild(remove_button);

        cardContainer.appendChild(card_el);

        textarea.addEventListener("input", () => cardgroup.update(card));
    });
}

function form() {
    let card = new Card('', cardgroup.list.length);
    cardgroup.add(card);
}

document.addEventListener('DOMContentLoaded', function () {
    let cardContainer = document.createElement(elements.DIV);
    cardContainer.id = elements.CARDCONTAINER;
    document.body.appendChild(cardContainer);

    let time = document.createElement(elements.H6);
    time.id = 'time';
    document.body.appendChild(time);

    let add_button = document.createElement(elements.BUTTON);
    add_button.textContent = msg.ADD;
    add_button.addEventListener('click', () => form());
    document.body.appendChild(add_button);

    let return_button = document.createElement(elements.BUTTON);
    return_button.textContent = msg.RETURN;
    return_button.addEventListener('click', () => window.location.href = '/index.html');
    document.body.appendChild(return_button);

    init();
    //setInterval(() => init(), 2000);
});