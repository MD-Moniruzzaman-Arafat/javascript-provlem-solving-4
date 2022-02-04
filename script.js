// 1.seerToMon
/* function seerToMon(seer) {
    if (seer > 0) {
        const mon = (seer / 40);
        return mon.toFixed(1);
    } else {
        return "plz include positive number";
    }
}
const seerToMonResult = seerToMon(100);
// const seerToMonResult = seerToMon(-80);
console.log(seerToMonResult); */

// 2.totalSales
/* function totalSales(shirt, pants, shose) {
    if (shirt > 0 && pants > 0 && shose > 0) {
        const shirtPrice = shirt * 100;
        const pantsPrice = pants * 200;
        const shosePrice = shose * 500;
        const totalPrice = shirtPrice + pantsPrice + shosePrice;
        return totalPrice;
    } else {
        return "plz include positive number";
    }
}
const product = totalSales(5, 4, 3);
// const product = totalSales(5, -4, 3);
console.log(product); */

// 3.deliveryCost
/* function deliveryCost(shirt) {
    if (shirt > 0 && shirt <= 100) {
        const delivaryCharge = shirt * 100;
        return delivaryCharge;
    } else if (shirt > 100 && shirt <= 200) {
        const first100DelivaryCharge = 100 * 100;
        const restCharge = shirt - 100;
        const second200DelivaryCharge = 80 * restCharge;
        const totalCharge = first100DelivaryCharge + second200DelivaryCharge;
        return totalCharge;
    } else if (shirt > 200 && shirt <= 500) {
        const first100DelivaryCharge = 100 * 100;
        const second200DelivaryCharge = 100 * 80;
        const restCharge = shirt - 200;
        const third300DelivaryCharge = 50 * restCharge;
        const totalCharge = first100DelivaryCharge + second200DelivaryCharge + third300DelivaryCharge;
        return totalCharge;
    } else {
        return "plz include positive number";
    }
}
const totalcharge = deliveryCost(500);
// const totalcharge = deliveryCost(-100);
console.log(totalcharge); */

// 4.perfectFriend
/* function perfectFriend(friend) {
    if (friend != '') {
        for (let i = 0; i < friend.length; i++) {
            let element = friend[i];
            if (element.length == 5) {
                return element;
            }
        }
    } else {
        return "plz include string";
    }
}
const friends = ["atik", "salman", "mohit", "titus", "mozumdar"];
// const friends = [];
const favaritFriend = perfectFriend(friends);
console.log(favaritFriend); */