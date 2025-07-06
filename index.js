
let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById('guest-score-el')
let resetBtnEl = document.getElementById('reset-btn')
let homeScore = 0
let guestScore = 0


//for home team
function score1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore

}

function score2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore

}

function score3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore

}

//for guest team

function gscore1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore

}

function gscore2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore

}

function gscore3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore

}

//reset button

function reset() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}

// Expose functions to global scope for onclick handlers
window.score1 = score1
window.score2 = score2
window.score3 = score3
window.gscore1 = gscore1
window.gscore2 = gscore2
window.gscore3 = gscore3
window.reset = reset