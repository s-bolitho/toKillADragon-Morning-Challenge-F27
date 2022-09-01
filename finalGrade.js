const finalGrade = (test, proj) => {
    if (test > 90 || proj > 10) {
        return 100
    } else if (test > 75 && proj >= 5) {
        return 90
    } else if (test > 50 && proj >= 2) {
        return 75
    } else {
        return 0
    }
}

console.log(finalGrade(51, 2))


