
function lastDate() {
    
    let dateInMs = Date.parse(document.getElementById("date-input").value);
    let sexvalue = document.getElementById("sex").value;
    if (sexvalue == 1) {
        canDoDate = dateInMs + 5270400000;
    } else {
        canDoDate = dateInMs + 7862400000;
    }
    let answer = new Date(canDoDate);
    const bloodday1 = "Saat luovuttaa verta seuraavan kerran:";
    let bloodday2 = `${answer.getDate()}.${answer.getMonth()+1}.${answer.getFullYear()}`;
    document.getElementById("date-output1").innerHTML = bloodday1;
    document.getElementById("date-output2").innerHTML = bloodday2;
}

document.getElementById("date-button").addEventListener("click", lastDate);