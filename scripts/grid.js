let gridArray = {
    1:{ 1:"0",
        2:"0",
        3:"0",
        4:"0",
        5:"0",
        6:"0",
        7:"0",
        8:"0",
        9:"0",
        10:"0",
        11:"0",
        12:"0",
        13:"0",
        14:"0"
    },
    2:{ 1:"0",
        2:"0",
        3:"0",
        4:"0",
        5:"0",
        6:"0",
        7:"0",
        8:"0",
        9:"0",
        10:"0",
        11:"0",
        12:"0",
        13:"0",
        14:"0"
    },
    3:{ 1:"0",
        2:"0",
        3:"0",
        4:"0",
        5:"0",
        6:"0",
        7:"0",
        8:"0",
        9:"0",
        10:"0",
        11:"0",
        12:"0",
        13:"0",
        14:"0"
    },
    4:{ 1:"0",
        2:"0",
        3:"0",
        4:"0",
        5:"0",
        6:"0",
        7:"0",
        8:"0",
        9:"0",
        10:"0",
        11:"0",
        12:"0",
        13:"0",
        14:"0"
    },
    5:{ 1:"0",
        2:"0",
        3:"0",
        4:"0",
        5:"0",
        6:"0",
        7:"0",
        8:"0",
        9:"0",
        10:"0",
        11:"0",
        12:"0",
        13:"0",
        14:"0"
    },
    6:{ 1:"0",
        2:"0",
        3:"0",
        4:"0",
        5:"0",
        6:"0",
        7:"0",
        8:"0",
        9:"0",
        10:"0",
        11:"0",
        12:"0",
        13:"0",
        14:"0"
    },
    7:{ 1:"0",
        2:"0",
        3:"0",
        4:"0",
        5:"0",
        6:"0",
        7:"0",
        8:"0",
        9:"0",
        10:"0",
        11:"0",
        12:"0",
        13:"0",
        14:"0"
    },
    8:{ 1:"0",
        2:"0",
        3:"0",
        4:"0",
        5:"0",
        6:"0",
        7:"0",
        8:"0",
        9:"0",
        10:"0",
        11:"0",
        12:"0",
        13:"0",
        14:"0"
    },
    9:{ 1:"0",
        2:"0",
        3:"0",
        4:"0",
        5:"0",
        6:"0",
        7:"0",
        8:"0",
        9:"0",
        10:"0",
        11:"0",
        12:"0",
        13:"0",
        14:"0"
    },
    10:{ 1:"0",
        2:"0",
        3:"0",
        4:"0",
        5:"0",
        6:"0",
        7:"0",
        8:"0",
        9:"0",
        10:"0",
        11:"0",
        12:"0",
        13:"0",
        14:"0"
    },
    11:{ 1:"0",
        2:"0",
        3:"0",
        4:"0",
        5:"0",
        6:"0",
        7:"0",
        8:"0",
        9:"0",
        10:"0",
        11:"0",
        12:"0",
        13:"0",
        14:"0"
    },
    12:{ 1:"0",
        2:"0",
        3:"0",
        4:"0",
        5:"0",
        6:"0",
        7:"0",
        8:"0",
        9:"0",
        10:"0",
        11:"0",
        12:"0",
        13:"0",
        14:"0"
    },
    13:{ 1:"0",
        2:"0",
        3:"0",
        4:"0",
        5:"0",
        6:"0",
        7:"0",
        8:"0",
        9:"0",
        10:"0",
        11:"0",
        12:"0",
        13:"0",
        14:"0"
    },
    14:{ 1:"0",
        2:"0",
        3:"0",
        4:"0",
        5:"0",
        6:"0",
        7:"0",
        8:"0",
        9:"0",
        10:"0",
        11:"0",
        12:"0",
        13:"0",
        14:"0"
    },
};

// home button function
const goHome = () => {
    window.location.href = "index.html";
}

// print function
const printGrid = () => {
    console.log("Print now")
}

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

// Will a word fit
const measure = (start,dir,word) => {

    let len = word.length -1;

    let leftRight = len * dir[0];

    let upDown = len * dir[1];

    let xTot = start[0] + leftRight;

    let yTot = start[1] + upDown;

    if (xTot < 1 || xTot > 14 || yTot < 1 || yTot > 14){
        return "out of chart";
    }
    else{
        return "Good to go";
    }
}

console.log(measure([14,5],[1,0],["S","A","R","A","H"]));

// compare new letter to existing spot
// const compare = (v,c,r,array) => {
//     if(isNan(array[c][r]) && v == array[c][r])
// }

fillGrid(gridArray);

//create on click events for buttons
document.getElementById("home").addEventListener("click", goHome);
document.getElementById("print").addEventListener("click", printGrid);
