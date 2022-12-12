function daysOfTheWeek() {
    let day = prompt('Unesi ime dana u sedmici na engleskom jeziku:');
    let message;
    if (day === 'Monday') {
        message = `Unjeli ste ispravno dan na engleskom jeziku 'Monday' i taj dan se na bosanskom zove 'Ponedeljak'`
    } else if (day === 'Tuesday') {
        message = `Unjeli ste ispravno dan na engleskom jeziku 'Tuesday' i taj dan se na bosanskom zove 'Utorak'`
    } else if (day === 'Wednesday') {
        message = `Unjeli ste ispravno dan na engleskom jeziku 'Wednesday' i taj dan se na bosanskom zove 'Srijeda'`
    } else if (day === 'Thursday') {
        message = `Unjeli ste ispravno dan na engleskom jeziku 'Thursday' i taj dan se na bosanskom zove 'Cetvrtak'`
    } else if (day === 'Friday') {
        message = `Unjeli ste ispravno dan na engleskom jeziku 'Friday' i taj dan se na bosanskom zove 'Petak'`
    } else if (day === 'Saturday') {
        message = `Unjeli ste ispravno dan na engleskom jeziku 'Saturday' i taj dan se na bosanskom zove 'Subota'`
    } else if (day === 'Sunday') {
        message = `Unjeli ste ispravno dan na engleskom jeziku 'Sunday' i taj dan se na bosanskom zove 'Nedelja'`
    } else {
        message = `Unjeli ste nepostojeci dan u sedmici, molimo pokusajte ponovo!`
    }
    alert(message);
}