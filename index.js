var clock = document.getElementById("clock")
var sounds = {
    "ticking"   : new Audio("ticking.mp3"),
    "heartbeat" : new Audio("heartbeat.wav")
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

var setmori = () => clock.innerHTML = getmori().replace(/:/g, delim)
var playsounds = function() {
    var loop = ["ticking", "heartbeat"]
    for (var i = 0; i < loop.length(); ++i) {
        sounds[loop[i].loop] = true
        sounds[loop[i].loop].play()
    }
}

setmori()
playsounds()
setInterval(setmori, 1000)

// vi: et sw=4
