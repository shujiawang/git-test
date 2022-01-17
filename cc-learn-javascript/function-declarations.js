function getReminder() {
    console.log("Water the plants.");
}

function greetInSpanish() {
    console.log('Buenas Tardes.');
}

getReminder();
greetInSpanish();

function sayThanks() {
    console.log('Thank you for your purchase. We appreciate your business.');
}


function monitorCount(rows, columns) {
    return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost);