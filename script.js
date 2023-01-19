// date
const date = new Date();
const day = date.getDate();
let month = date.getMonth();
let monthText;


month ++;
const year = date.getFullYear();

const  day1 = day%10;
const day10 = parseInt(day/10);


// console.log("day:",day)
console.log("Autorem strony jest: Marek Gondek")
// console.log("day1:",day1)
// console.log("day10:",day10)

let askNumber = 0;
const numbers = document.getElementById("numbers");

// drugi program
const numbersOther = document.getElementById("numbers-other");
let dayOther = document.getElementById("day");
let monthOther = document.getElementById("month") ;
let roomOther = document.getElementById("room-other");

dayOther  = Number(dayOther);

if(month < 10){
    document.getElementById("date").textContent = `Pytane numery dzisiaj: (${day}.0${month}.${year})`;
}
else{
    document.getElementById("date").textContent = `Pytane numery dzisiaj: (${day}.${month}.${year})`;
}


document.getElementById("send").onclick = () => {
    const newRoom = document.getElementById("room").value.trim();
    const winNumber = document.getElementById('win-number').value.trim();

    document.getElementById("numbers").textContent = "";

    if (newRoom != "" && isNaN(newRoom) == false ){
        document.getElementById("room").textContent = "";
        

        let room = newRoom;
        let room1 = room%10;
        let room10 = parseInt(room/10)
        let month1 = month%10
        let month10 = parseInt(month/10)

        const algorytm = [
                            day1 + day10 + room1 + room10 - month, 
                            day1 + day10 + room1 + room10 + month, 
                            day1 * day10 + room1 + room10 + month, 
                            day1 * day10 + room1 + room10 - month,
                            day1 + day10, day1 * (room1 + month10),
                            (day1 + room1) * room10 + day10 + month1 + month10
                        ]
               
        // console.log("sala:",room)

        document.getElementById("alert").textContent = "";
        numbers.innerHTML += `<h3>Możliwe numery do pytania (w sali: ${room}):</h3>`;

        for(i=0; i<algorytm.length; i++){
            askNumber = algorytm[i];
            // console.log(askNumber);
            if(askNumber> 0 && askNumber<= 37 && askNumber != winNumber){
                numbers.innerHTML +=  "<li>" + askNumber +"</li>";
            }
        }
    }

    else{
        document.getElementById("alert").textContent = "Podaj prawidłowe dane";
    }
}

// send-other

document.getElementById("send-other").onclick = () => {
    const newRoom = Number(document.getElementById("room-other").value.trim());
    const newDay = Number(document.getElementById("day").value.trim());
    const newMonth = Number(document.getElementById("month").value.trim());
    let askNumber = 0;
    
    document.getElementById("numbers-other").textContent = "";


    if (newRoom != "" && isNaN(newRoom) == false && newDay != "" && isNaN(newDay) == false && newMonth != "" && isNaN(newMonth) == false){
        document.getElementById("room-other").textContent = "";
        document.getElementById("day").textContent = "";
        document.getElementById("month").textContent = "";

        roomOther = newRoom;
        dayOther = newDay;
        monthOther= newMonth;
        console.log("======================")
        console.log("======================")
        // console.log("newRoom", newRoom)
        // console.log("newDay", newDay)
        // console.log("newMonth", newMonth)

        let room1Other = roomOther%10;
        let room10Other = parseInt(roomOther/10)

        let day1Other = dayOther%10;
        let day10Other = parseInt(dayOther/10);
        let month1Other = monthOther%10;
        let month10Other = parseInt(monthOther/10)

        const algorytm = [
                            day1Other + day10Other + room1Other + room10Other - monthOther, 
                            day1Other + day10Other + room1Other + room10Other + monthOther, 
                            day1Other * day10Other + room1Other + room10Other + monthOther, 
                            day1Other * day10Other + room1Other + room10Other - monthOther,
                            day1Other + day10Other,
                            day1Other * (room1Other + month10Other), 
                            (day1Other + room1Other) * room10Other + day10Other + month1Other + month10Other
                        ]

        // console.log("sala 1:",room1Other)
        // console.log("sala 10:",room10Other)
        // console.log("miesiąć:",monthOther)
        // console.log("dzień:",dayOther)
        // console.log("dzień1:",day1Other)
        // console.log("dzień10:",day10Other)
        

        document.getElementById("alert-other").textContent = "";
        numbersOther.innerHTML += `<h3>Możliwe numery do pytania (w dniu ${dayOther}, w miesiącu ${monthOther}, w sali ${roomOther}): </h3>`;

        for(i=0; i<algorytm.length; i++){
            askNumber = algorytm[i];
            // console.log(askNumber);
            if(askNumber> 0 && askNumber<= 34){
                numbersOther.innerHTML +=  "<li>" + askNumber +"</li>";
            }
        }  
    }

    else{
        document.getElementById("alert-other").textContent = "Podaj prawidłowe dane";
    }
}



