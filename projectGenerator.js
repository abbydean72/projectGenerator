const message = {
    project: ["useful", "decorative", "to gift", "fashionable", "you've wanted for a while"],
    special: ["very large or very small", "low-budget", "monochromatic", "antique-looking"],
    medium: ["cardboard", "metal", "wood", "clay", "fabric", "something you have little to no experience with, but want to learn"],
};


const findOption = (i) => {
    let num = Math.floor(Math.random() * message[i].length);
    return message[i][num];
}

const returnMessage = () => {
    let p = findOption("project");
    let s = findOption("special");
    let m = findOption("medium");
    return("Make something " + p + " that is " + s + " out of " + m + ".");
}

console.log(returnMessage());

