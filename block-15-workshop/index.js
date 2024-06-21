let observedFlavors = {}

function trackObservedFlavors(userInput) {
    let froyoFlavors = userInput.split(", ") 
    froyoFlavors.forEach(flavor => {
        if (observedFlavors[flavor]) {
            observedFlavors[flavor]++;
        } else {
            observedFlavors[flavor] = 1; 
        }
    });

    console.log("Froyo Flavors:");
    for (let flavor in observedFlavors) {
        console.log(`${flavor}: ${observedFlavors[flavor]}`);
    }
}


let userPrompt = prompt("Please enter froyo flavors");

if (userPrompt) {
    trackObservedFlavors(userPrompt);
} else {
    console.log("No flavors entered.");
}