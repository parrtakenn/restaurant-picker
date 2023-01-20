function chooseRestaurant() {
    const restaurants = [
        'Joy Luck',
        'Boba World',
        'Pizza Hut',
        'The Pie Pizzeria',
        'Dominos',
        'MOD Pizza', 
        "Mo' Bettahs", 
        'Ramen House',
        'Rancheritos',
        "Taggart's Grill",
        'Sweeto Burrito',
        'Zupas',
        "Culver's"
    ];

    const random = Math.floor(Math.random() * restaurants.length);

    document.getElementById('your-restaurant-picked').innerHTML = (restaurants[random]);
    
}