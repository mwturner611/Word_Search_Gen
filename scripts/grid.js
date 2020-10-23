let gridArray = {
    1:{ 1:"11",
        2:"12",
        3:"13",
        4:"14",
        5:"15",
        6:"16",
        7:"17",
        8:"18",
        9:"19",
        10:"110",
        11:"111",
        12:"112",
        13:"113",
        14:"114"
    },
    2:{ 1:"21",
        2:"22",
        3:"23",
        4:"24",
        5:"25",
        6:"26",
        7:"27",
        8:"28",
        9:"29",
        10:"210",
        11:"211",
        12:"212",
        13:"213",
        14:"214"
    },
    3:{ 1:"31",
        2:"32",
        3:"33",
        4:"34",
        5:"35",
        6:"36",
        7:"37",
        8:"38",
        9:"39",
        10:"310",
        11:"311",
        12:"312",
        13:"313",
        14:"314"
    },
    4:{ 1:"41",
        2:"42",
        3:"43",
        4:"44",
        5:"45",
        6:"46",
        7:"47",
        8:"48",
        9:"49",
        10:"410",
        11:"411",
        12:"412",
        13:"413",
        14:"414"
    },
    5:{ 1:"51",
        2:"52",
        3:"53",
        4:"54",
        5:"55",
        6:"56",
        7:"57",
        8:"58",
        9:"59",
        10:"510",
        11:"511",
        12:"512",
        13:"513",
        14:"514"
    },
    6:{ 1:"61",
        2:"62",
        3:"63",
        4:"64",
        5:"65",
        6:"66",
        7:"67",
        8:"68",
        9:"69",
        10:"610",
        11:"611",
        12:"612",
        13:"613",
        14:"614"
    },
    7:{ 1:"71",
        2:"72",
        3:"73",
        4:"74",
        5:"75",
        6:"76",
        7:"77",
        8:"78",
        9:"79",
        10:"710",
        11:"711",
        12:"712",
        13:"713",
        14:"714"
    },
    8:{ 1:"81",
        2:"82",
        3:"83",
        4:"84",
        5:"85",
        6:"86",
        7:"87",
        8:"88",
        9:"89",
        10:"810",
        11:"811",
        12:"812",
        13:"813",
        14:"814"
    },
    9:{ 1:"91",
        2:"92",
        3:"93",
        4:"94",
        5:"95",
        6:"96",
        7:"97",
        8:"98",
        9:"99",
        10:"910",
        11:"911",
        12:"912",
        13:"913",
        14:"914"
    },
    10:{ 1:"101",
        2:"102",
        3:"103",
        4:"104",
        5:"105",
        6:"106",
        7:"107",
        8:"108",
        9:"109",
        10:"1010",
        11:"1011",
        12:"1012",
        13:"1013",
        14:"1014"
    },
    11:{ 1:"111",
        2:"112",
        3:"113",
        4:"114",
        5:"115",
        6:"116",
        7:"117",
        8:"118",
        9:"119",
        10:"1110",
        11:"1111",
        12:"1112",
        13:"1113",
        14:"1114"
    },
    12:{ 1:"1",
        2:"2",
        3:"3",
        4:"4",
        5:"5",
        6:"6",
        7:"7",
        8:"8",
        9:"9",
        10:"10",
        11:"11",
        12:"12",
        13:"13",
        14:"14"
    },
    13:{ 1:"1",
        2:"2",
        3:"3",
        4:"4",
        5:"5",
        6:"6",
        7:"7",
        8:"8",
        9:"9",
        10:"10",
        11:"11",
        12:"12",
        13:"13",
        14:"14"
    },
    14:{ 1:"1",
        2:"2",
        3:"3",
        4:"4",
        5:"5",
        6:"6",
        7:"7",
        8:"8",
        9:"9",
        10:"10",
        11:"11",
        12:"12",
        13:"13",
        14:"14"
    },
};

// fill the grid with content of full array
const fillGrid = (array) => {
    for (let i = 1; i < 15; i++){
        
        for (let j = 1; j < 15; j++){
            let li = document.createElement("LI");

            let letter = document.createTextNode(array[i][j])

            li.appendChild(letter)

            document.getElementById("col"+i).appendChild(li);
        };

    };
};

// generate random letter
const randomLetter = () => {
    const alphaArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    let nbr = Math.floor((Math.random() * 26) + 0);

    return alphaArray[nbr];
}

// find a random starting place on the grid
const startPlace = () => {
    let x = Math.floor((Math.random() * 15) + 0);

    let y = Math.floor((Math.random() * 15) + 0);

    return([x,y]);
}

// random direction
const direction = () => {
    const navDir = [[1,0],
                    [-1,0],
                    [0,1],
                    [0,-1],
                    [1,1],
                    [1,-1],
                    [-1,1],
                    [-1,-1]    
                    ];
    
    let nbr = Math.floor((Math.random() * 8) + 0);

    return navDir[nbr];
}

console.log(startPlace());

console.log(direction());

// compare new letter to existing spot
// const compare = (v,c,r,array) => {
//     if(isNan(array[c][r]) && v == array[c][r])
// }

fillGrid(gridArray);


