function feast(beast, dish) {
    // Extract the first and last letters of the beast and dish
    const beastFirstLetter = beast[0];
    const beastLastLetter = beast[beast.length - 1];
    const dishFirstLetter = dish[0];
    const dishLastLetter = dish[dish.length - 1];

    // Check if the first and last letters match for both the beast and dish
    return beastFirstLetter === dishFirstLetter && beastLastLetter === dishLastLetter;
}

// Example usage:
console.log(feast("great blue heron", "garlic naan")); // Returns true
console.log(feast("chickadee", "chocolate cake")); // Returns true
console.log(feast("lion", "lasagna")); // Returns false