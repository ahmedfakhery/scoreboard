guestEl = document.getElementById("guestcounter-el")
homeEl = document.getElementById("homecounter-el")

let homeScore = 0, guestScore = 0

function plusonehome() {
    homeScore += 1
    homeEl.innerText = homeScore
}

function plustwohome() {
    homeScore += 2
    homeEl.innerText = homeScore
}

function plusthreehome() {
    homeScore += 3
    homeEl.innerText = homeScore
}

function plusoneguest() {
    guestScore += 1
    guestEl.innerText = guestScore
}

function plustwoguest() {
    guestScore += 2
    guestEl.innerText = guestScore
}

function plusthreeguest() {
    guestScore += 3
    guestEl.innerText = guestScore
}