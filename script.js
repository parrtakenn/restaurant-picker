const favRestaurants = [
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
    "Café Zupas",
    "Culver's",
    "Nielsen's Frozen Custard",
    "Costa Vida",
    "Cafe Rio",
    "Plates & Palates",
    "The Cheesecake Factory",
    "China Platter",
    "The Mandarin",
    "Blacksmith Ice Cream Co.",
    "Chik-fil-A",
    "Super Chix",
    "Del Taco",
    "Atlantis Burgers",
    "Crown Burger",
    "Apollo Burger",
    "Five Guys",
    "RJ Grill",
    "Janet's Sunshine Café",
    "Chipotle",
    "Costco Food Court",
    "Vito's",
    "Bountiful Greek Café",
    "Cubby's",
    "Panda Express",
    "Sushi Burrito",
    "CHOM Burger",
    "Texas Roadhouse",
    "Zao Cafe",
    "Burger Bar",
    "Rosa's Cafe",
    "Cupbop",
    "Maddox",
    "Morty's Cafe",
    "Tandoori Oven",
    "In-N-Out",
    "Himalayan Flavor-Logan",
    "MayMoes Cajun Grill",
    "Royal Express Logan",
    "Shake Shack",
    "Cafe Sabor",
    "Fuji Sushi",
    "Kokonut Island Grill",
    "Nico's Restaurant",
    "Chubby's Mexican",
    "El Rocoto Peruvian",
    "Chunga's",
    "Banbury Cross Donuts",
    "Rancho Market",
    "Andinitas Restaurant (Colombian)"
];

const newRestaurants = [
    
    // New Restaurants recommended by ChatGPT
    "Log Haven",
    "Handle",
    "The Copper Onion",
    "Sawadee Thai Restaurant",
    "Costa del Sol",
    "Takashi",
    "Tupelo",
    "Hungry Hawaiian",
    "Santorini's Greek Grill",
    "The Paris",
    "Royal India Bountiful",
    "Garage on Beck",
    "Alice's Kitchen",
    "Current Fish & Oyster",
    "Red Iguana",
    "Ramblin Roads",
    "Hell's Backbone Grill",
    "Z Brothers Pizza",
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
    "Valter's Osteria",

    // Recommended by m website
    "Shooting Star Saloon",
    "Wimpy and Fritz",
    "Pretty Bird",
    "Siegfried's Delicatessen",
    "Beer Bar/Bar X",
    "HSL",
    "Caputo's Market & Deli",
    "Chanon Thai Café",
    "Freshie’s Lobster Salt Lake City",
    "Laziz Kitchen",
    "Pacific Seas Restaurant",
    "Kyoto Japanese Restaurant",
    "The Park Café",
    "Mahider Ethiopian",
    "Finca",
    "Mazza",
    "Sweet Lake Biscuits & Limeade",
    "Saffron Valley",
    "11 Hauz",
    "Feldman's Deli",
    "Table X",
    "Slackwater Pizzeria & Pub",

    // Other new
    "Global Place Somali Restaurant",
    "El Tacazo Taco Stand",
    "Cafe Shambala",
    "Old Bridge Cafe",
    "W Thai Chef",
    "Lean Thai"
];

var listSelection = document.getElementById('restaurant')

function countRestaurants(list) {
    let restaurantCount = list.length;
        document.getElementById('count-string').innerHTML = `${restaurantCount} total restaurants...you're going to: `;
}

function generateRandomVar(list) {
    randomNum = Math.floor(Math.random() * list.length);
}

function generateRandomRestaurant(list, listposition) {
    document.getElementById('your-restaurant-picked').innerHTML = (list[listposition]);
}

function chooseRestaurant() {
    if (listSelection.value == 'Favorites') {
        countRestaurants(favRestaurants);
        generateRandomVar(favRestaurants);
        generateRandomRestaurant(favRestaurants, randomNum);
    }

    if (listSelection.value == 'New') {
        countRestaurants(newRestaurants);
        generateRandomVar(newRestaurants);
        generateRandomRestaurant(newRestaurants, randomNum);
        
    };

    if (listSelection.value == '') {
        alert( 'Select Favorites or New' );
    }
}