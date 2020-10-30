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

// restart the single word placement process
const restart = (word) => {

    let start = startPlace();

    let dir = direction();

    measure(start,dir,word);

    console.log("restart");
}


// CK if word fits and then call write to screen
const measure = (start,dir,word) => {

    let x = start[0];

    let y = start[1];
    
    for(let i = 0; i < word.length; i++){
        if (x < 15 && x > 0 && y < 15 && y > 0){
            if(gridArray[x][y] === word[i] || gridArray[x][y] === "0"){
                
                console.log("letter is OK");

                x += dir[0];

                y += dir[1];
            }
            else{
                console.log("Not ok, restart");
                return(measure(startPlace(),direction(),word));
            }
        }
        else{
            console.log("Not ok, restart");
            return(measure(startPlace(),direction(),word));
        }
    };
    console.log("Write the word, it's all ok")
    writer(start,dir,word);
};

// put word on screen
const writer = (start,dir,word) => {

    let x = start[0];
    let y = start[1];
    
    for (let i = 0; i < word.length; i++){
        
       gridArray[x][y] = word[i];

        x += dir[0];

        y += dir[1];
    }
}

// measure([1,1],[1,0],["S","A","R","A","H"]);
// measure([1,1],[0,-1],["S","A","R","A","H"]);
// measure([14,14],[0,-1],["S","A","R","A","H"]);
measure([14,14],[0,1],["S","A","R","A","H"]);

fillGrid(gridArray);

//create on click events for buttons
document.getElementById("home").addEventListener("click", goHome);
document.getElementById("print").addEventListener("click", printGrid);
