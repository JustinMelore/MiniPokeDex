//Map that stores all of the JSON for the three pokemon
const pokemon = new Map([
    ["charmander",`{
  "abilities": [
    {
      "name": "blaze"
    },
    {
      "name": "solar-power"
    }
  ],
  "base_experience": 62,
  "height": 6,
  "id": 4,
  "is_default": true,
  "name": "charmander",
  "order": 5,
  "stats": [
    {
      "base_stat": 39,
      "effort": 0,
      "stat": {
        "name": "hp"
      }
    },
    {
      "base_stat": 52,
      "effort": 0,
      "stat": {
        "name": "attack"
      }
    },
    {
      "base_stat": 43,
      "effort": 0,
      "stat": {
        "name": "defense"
      }
    },
    {
      "base_stat": 60,
      "effort": 0,
      "stat": {
        "name": "special-attack"
      }
    },
    {
      "base_stat": 50,
      "effort": 0,
      "stat": {
        "name": "special-defense"
      }
    },
    {
      "base_stat": 65,
      "effort": 1,
      "stat": {
        "name": "speed"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "fire"
      }
    }
  ],
  "weight": 85
}
`],
    ["charmeleon",`{
  "abilities": [
    {
      "name": "blaze"
    },
    {
      "name": "solar-power"
    }
  ],
  "base_experience": 142,
  "height": 11,
  "id": 5,
  "is_default": true,
  "name": "charmeleon",
  "order": 6,
  "stats": [
    {
      "base_stat": 58,
      "effort": 0,
      "stat": {
        "name": "hp"
      }
    },
    {
      "base_stat": 64,
      "effort": 0,
      "stat": {
        "name": "attack"
      }
    },
    {
      "base_stat": 58,
      "effort": 0,
      "stat": {
        "name": "defense"
      }
    },
    {
      "base_stat": 80,
      "effort": 1,
      "stat": {
        "name": "special-attack"
      }
    },
    {
      "base_stat": 65,
      "effort": 0,
      "stat": {
        "name": "special-defense"
      }
    },
    {
      "base_stat": 80,
      "effort": 1,
      "stat": {
        "name": "speed"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "fire"
      }
    }
  ],
  "weight": 190
}`],
    ["charizard",`{
  "abilities": [
    {
      "name": "blaze"
    },
    {
      "name": "solar-power"
    }
  ],
  "base_experience": 240,
  "height": 17,
  "id": 6,
  "is_default": true,
  "name": "charizard",
  "order": 7,
  "stats": [
    {
      "base_stat": 78,
      "effort": 0,
      "stat": {
        "name": "hp"
      }
    },
    {
      "base_stat": 84,
      "effort": 0,
      "stat": {
        "name": "attack"
      }
    },
    {
      "base_stat": 78,
      "effort": 0,
      "stat": {
        "name": "defense"
      }
    },
    {
      "base_stat": 109,
      "effort": 3,
      "stat": {
        "name": "special-attack"
      }
    },
    {
      "base_stat": 85,
      "effort": 0,
      "stat": {
        "name": "special-defense"
      }
    },
    {
      "base_stat": 100,
      "effort": 0,
      "stat": {
        "name": "speed"
      }
    }
  ],
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "fire"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying"
      }
    }
  ],
  "weight": 905
}`],
]);

//Loads the pokemon when the page loads
document.addEventListener("DOMContentLoaded",loadPokemon);

//Function that loads up the information for the pokemon
function loadPokemon() {
    const jsonPokemon = JSON.parse(pokemon.get(this.title.toLowerCase()));
    
    //Creates the page title and image
    document.getElementById("cardStats").appendChild(createElement("h1","pokeName",jsonPokemon["name"].toUpperCase()));
    const image = document.createElement("img");
    image.setAttribute("src",`images/${this.title.toLowerCase()}.png`);
    document.getElementById("cardStats").appendChild(image);

    //Creates a section that holds the pokemon types
    document.getElementById("cardStats").appendChild(createElement("h2",[],"Type(s)"));
    const types = document.createElement("section");
    for(let i of jsonPokemon["types"]) types.appendChild(createElement("div",[],i["type"]["name"].toUpperCase()));
    document.getElementById("cardStats").appendChild(types);

    //Creates a section that holds the pokemon's characterisitcs (weight, height, base xp, etc.)
    document.getElementById("cardStats").appendChild(createElement("h2",[],"Characteristics"));
    const characterisitcs = document.createElement("section");
    characterisitcs.appendChild(createElement("div",[],`Weight: ${jsonPokemon["weight"]}`));
    characterisitcs.appendChild(createElement("div",[],`Height: ${jsonPokemon["height"]}`));
    characterisitcs.appendChild(createElement("div",[],`Base Experience: ${jsonPokemon["base_experience"]}`));
    characterisitcs.appendChild(createElement("div",[],`Is Default: ${jsonPokemon["is_default"]}`));
    characterisitcs.appendChild(createElement("div",[],`ID: ${jsonPokemon["id"]}`));
    characterisitcs.appendChild(createElement("div",[],`Order: ${jsonPokemon["order"]}`));
    document.getElementById("cardStats").appendChild(characterisitcs);

    //Creates a sections that holds all of the pokemon's base stats
    document.getElementById("cardStats").appendChild(createElement("h2",[],"Base Stats"));
    const stats = document.createElement("section");
    for(let i of jsonPokemon["stats"]) {
      const stat = document.createElement("div");
      stat.appendChild(createElement("p",[],`${i["stat"]["name"].toUpperCase()}`));
      stat.appendChild(createElement("p",[],`Base Stat: ${i["base_stat"]}`));
      stat.appendChild(createElement("p",[],`Effort: ${i["effort"]}`));
      stats.appendChild(stat);
    }
    document.getElementById("cardStats").appendChild(stats);

    //Creates a section that holds all of the pokemon's moves
    document.getElementById("cardStats").appendChild(createElement("h2",[],"Moves"));
    const moves = document.createElement("section");
    for(let i of jsonPokemon["abilities"]) moves.appendChild(createElement("div",[],`${i["name"].toUpperCase()}`));
    document.getElementById("cardStats").appendChild(moves);
}

//Function that creates a DOM element to be added to the page
let createElement = (elementType, classList, text) => {
  const element = document.createElement(elementType);
  for(let i of classList) element.classList.add(i);
  element.textContent = text;
  return element;
}