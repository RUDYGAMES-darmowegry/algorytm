// date
const date = new Date();
const day = date.getDate();
let month = date.getMonth();
month ++;

const  day1 = day%10;
const day10 = parseInt(day/10);


// console.log("day:",day)
console.log("day1:",day1)
console.log("day10:",day10)

let askNumber = 0;
const numbers = document.getElementById("numbers");

// drugi program
const numbersOther = document.getElementById("numbers-other");
let dayOther = document.getElementById("day");
let monthOther = document.getElementById("month") ;
let roomOther = document.getElementById("room-other");


document.getElementById("send").onclick = function () {
    const newRoom = document.getElementById("room").value.trim();

    if (newRoom != "" && isNaN(newRoom) == false ){
        document.getElementById("room").textContent = "";

        let room = newRoom;
        let room1 = room%10;
        let room10 = parseInt(room/10)
        const algorytm = [day1 + day10 + room1 + room10 - month, day1 + day10 + room1 + room10 + month, 
                            day1 * day10 + room1 + room10 + month, day1 * day10 + room1 + room10 - month,
                            day1 + day10]

        console.log("sala:",room)

        document.getElementById("alert").textContent = "";
        numbers.innerHTML += `<h3>Możliwe numery do pytania (w sali: ${room}):</h3>`;

        for(i=0; i<algorytm.length; i++){
            askNumber = algorytm[i];
            console.log(askNumber);
            if(askNumber> 0 && askNumber<= 34){
                numbers.innerHTML +=  "<li>" + askNumber +"</li>";
            }
            
        }

        
    }

    else{
        document.getElementById("alert").textContent = "Podaj prawidłowe dane";
    }
}

// send-other

// tutaj będzie kod

document.getElementById("send-other").onclick = function () {
    const newRoom = document.getElementById("room-other").value.trim();
    const newDay = document.getElementById("day").value.trim();
    const newMonth = document.getElementById("month").value.trim();
    let askNumber = 0;
    
    


    if (newRoom != "" && isNaN(newRoom) == false && newDay != "" && isNaN(newDay) == false && newMonth != "" && isNaN(newMonth) == false){
        document.getElementById("room-other").textContent = "";
        document.getElementById("day").textContent = "";
        document.getElementById("month").textContent = "";

        roomOther = newRoom;
        dayOther = newDay;
        monthOther= newMonth;

        let room1Other = roomOther%10;
        let room10Other = parseInt(roomOther/10)

        let day1Other = dayOther%10;
        let day10Other = parseInt(dayOther/10);


        const algorytm = [day1Other + day10Other + room1Other + room10Other - monthOther, day1Other + day10Other + room1Other + room10Other + monthOther, 
                            day1Other * day10Other + room1Other + room10Other + monthOther, day1Other * day10Other + room1Other + room10Other - monthOther,
                            day1Other + day10Other]

        console.log("sala 10:",room1Other)
        console.log("sala 10:",room10Other)
        console.log("miesiąć:",monthOther)
        console.log("dzień:",dayOther)
        console.log("dzień:",day1Other)
        console.log("dzień:",day10Other)
        

        document.getElementById("alert-other").textContent = "";
        numbersOther.innerHTML += `<h3>Możliwe numery do pytania (w dniu ${dayOther}, w miesiącu ${monthOther}, w sali ${roomOther}): </h3>`;

        for(i=0; i<algorytm.length; i++){
            askNumber = algorytm[i];
            console.log(askNumber);
            if(askNumber> 0 && askNumber<= 34){
                numbersOther.innerHTML +=  "<li>" + askNumber +"</li>";
            }
            
        }

        
    }

    else{
        document.getElementById("alert-other").textContent = "Podaj prawidłowe dane";
    }
}


