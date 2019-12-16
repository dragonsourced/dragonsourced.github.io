var sounds = {
    "ticking"   : new Audio("assets/audio/ticking.mp3"),
    "heartbeat" : new Audio("assets/audio/heartbeat.wav")
}

var MINUTE = 60
var HOUR   = MINUTE * 60
var DAY    = HOUR * 24
var YEAR   = DAY * 365

var lifespan = 80
var birth = (new Date(2004,            2, 2)).getTime()
var death = (new Date(2004 + lifespan, 2, 2)).getTime()
var delim = "<label class='delim'>:</label>"

var getmori = function() {
    var time  = (new Date()).getTime()
    var seconds = Math.round((death - time) / 1000)
    var days    = Math.floor(seconds / DAY)
    seconds -= days * DAY
    var hours   = Math.floor(seconds / HOUR)
    seconds -= hours * HOUR
    var minutes = Math.floor(seconds / MINUTE)
    seconds -= minutes * MINUTE
    return days + ":" + hours + ":" + minutes + ":" + seconds
}

var clock = document.getElementById("clock")
var beats = document.getElementById("heartbeat")

var setmori = function() {
    var age = (new Date()).getTime() - birth // Miliseconds of age
    var bps = (72/60)/1000 // Heartbeats per milisecond
    var total = 2600000000

    clock.innerHTML = getmori().replace(/:/g, delim)
    beats.innerHTML = Math.floor(total - (bps * age))
}

var playsounds = function() {
    var loop = ["ticking", "heartbeat"]
    for (var i = 0; i < loop.length; ++i) {
        sounds[loop[i]].loop = true
        sounds[loop[i]].play()
    }
}

setmori()
playsounds()
setInterval(setmori, 1)

// vi: et sw=4
