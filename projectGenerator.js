const message = {
    project: ["useful", "decorative", "to gift", "fashionable", "you've wanted for a while"],
    special: ["very large or very small", "low-budget", "monochromatic", "antique-looking"],
    medium: ["cardboard", "metal", "wood", "clay", "fabric", "something you have little to no experience with, but want to learn"],
};


for (let key in message) {
    for (let i = 0; i < message[key].length; i++){
        console.log(message[key][i]);
    }
}






