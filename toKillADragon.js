let toKillADragon = (bullets, dragons) => {
    if(bullets >= dragons * 2) {
        return true
    } else {
        return false
    }
}

console.log(toKillADragon(8, 5))