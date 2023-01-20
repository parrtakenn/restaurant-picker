function chooseRestaurant() {
    const restaurants = [
        // Favorites
        "Joy Luck",
        "Boba World",
        "Pizza Hut",
        "The Pie Pizzeria",
        "Dominos",
        "MOD Pizza", 
        "Mo' Bettahs", 
        "Ichiro Ramen House",
        "Rancheritos",
        "Taggart's Grill",
        "Sweeto Burrito",
        "Zupas",
        "Culver's",
        "Nielsen's Frozen Custard",
        "Costa Vida",
        "Cafe Rio",
        "Plates & Palates",
        "The Cheesecake Factory",
        "China Platter",
        "The Mandarin",
        "Blacksmith Ice Cream Co.",

        // New Restaurants recommended by ChatGPT
        "Log Haven",
        "Handle",
        "The Copper Onion",
        "Takashi",
        "Tupelo",
        "The Paris",
        "Current Fish & Oyster",
        "Red Iguana",
        "Hell's Backbone Grill",
        "The Farm",
        "Bambara",
        "The Front",
        "The Rest",
        "Alamexo",
        "Pago",
        "The Tin Angel",
        "The Eating Establishment",
        "The Vertical Diner",
        "The Red Moose Lodge",
        "The Wild Grape",
        "The Blue Lemon",
        "The Red Stone",
        "The Red Chair",
        "The Market Street Grill",
        "The Bistro at Red Butte Garden",
        "The Snow Garden",
        "The Swallow",
        "The Tree Room",
        "The Riverhorse on Main",
        "The Wasatch Brew Pub",
        "Pallet",
        "Valter's Osteria"
    ];

    const random = Math.floor(Math.random() * restaurants.length);
    document.getElementById('your-restaurant-picked').innerHTML = (restaurants[random]);

    let restaurantCount = restaurants.length;
    document.getElementById("count-string").innerHTML = `There are currently ${restaurantCount} restaurants in the list. You're going to: `;
}
