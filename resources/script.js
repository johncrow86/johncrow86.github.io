// function to generate random message
const generateMessage = () => {
    let randomNumber = Math.floor(Math.random() * 5);
    console.log(randomNumber);
    switch (randomNumber) {
        case 0: return "Today will be an exceptional day";
        break;
        case 1: return "Today will be the worst day of the week";
        break;
        case 2: return "Today will be a rather normal day";
        break;
        case 3: return "Today will be pretty good";
        break;
        case 4: return "Today will be not great";
        break;
        default: return "ERROR";
        break;
    }
}

console.log(generateMessage());