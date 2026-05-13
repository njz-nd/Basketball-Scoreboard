let homeScoreBtnOne = document.getElementById("home-btn-1")
let homeScoreBtnTwo = document.getElementById("home-btn-2")
let homeScoreBtnThree = document.getElementById("home-btn-3")
let homeScoreEl = document.getElementById("home-score")

let homeScore = 0

function homeScoreIncreaseOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homeScoreIncreaseTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homeScoreIncreaseThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

let guestScoreBtnOne = document.getElementById("guest-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-btn-2")
let guestScoreBtnThree = document.getElementById("guest-btn-3")
let guestScoreEl = document.getElementById("guest-score")

let guestScore = 0

function guestScoreIncreaseOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestScoreIncreaseTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestScoreIncreaseThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function resetBothScore() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}