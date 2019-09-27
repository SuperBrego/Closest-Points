class UI {

    constructor() {
        this.letters = [];
        this.lettersToDisplay = [];
        this.lettersInput = document.getElementsByName("code-input");
    }

    cleanYourMess() {
        const lettersContainer = document.getElementsByName('memory-container')[0];
        while (lettersContainer.hasChildNodes()) {
            lettersContainer.removeChild(lettersContainer.firstChild);
            this.lettersToDisplay = [];
        }
    }

    messWithDOM() {
        this.letters = this.lettersInput[0].value
        this.letters = this.letters.split("\n");

        this.letters.forEach(letter => {
            const aux = letter.split(" ");
            this.lettersToDisplay = this.lettersToDisplay.concat(aux);
        });

        this.lettersToDisplay.forEach(letter => {
            let newElement = document.createElement('div');
            newElement.id = letter + ' ' + this.lettersToDisplay.findIndex((e)=>{return e==letter});
            newElement.className = "slot-container";
            newElement.innerHTML = letter;
            const lettersContainer = document.getElementsByName('memory-container')[0];
            lettersContainer.appendChild(newElement);
        });
    }

    helloWorld() {
        console.log("Deviamos usar aspas unicas ou duplas? sugiro duplas.")
        console.log("Com ou sem ; no final?")
    }
}