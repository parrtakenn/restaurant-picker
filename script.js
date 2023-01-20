function chooseRestaurant() {
    const restaurants = [
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
        

    ];

    const random = Math.floor(Math.random() * restaurants.length);

    document.getElementById('your-restaurant-picked').innerHTML = (restaurants[random]);
    
}