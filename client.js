// ===========================================
// Why? Well since lua epoch is inaccurate af
function GetTimeInMiliseconds() {
    return new Date().getTime()
}

// ===========================================
// Basically return "0" when the number is smaller than 10 (private)
function leading0(number){ return number < 10 ? "0" : "" }

// Format miliseconds and return a time string
function FormatMiliseconds(ms) {
    mins = parseInt((ms / 1000) / 60)
    secs = parseInt((ms / 1000) % 60)
    huns = parseInt(ms % 1000)
    return leading0(mins) + mins + ":" + leading0(secs) + secs + "." + leading0(huns) + huns
}

// ===========================================
// Uh came from the original es_extended, some esx things use it. Although bloody useless if you ask me
function GroupDigits(number) {
    return number.toLocaleString()
}

// ===========================================
// Check weather a certain vector3 (c) is somewhere between a abd b which are also vector3's
function IsBetween(a, b, c) {
    a = JSON.parse(a)
    b = JSON.parse(b)
    c = JSON.parse(c)
    
    const sum = GetDistance(a, c) + GetDistance(c, b)

    // Basically adds compatability for faster deviation / loops that do not run every tick
    return Math.abs(GetDistance(a, b) - sum) < 0.1

    // return GetDistance(a, c) + GetDistance(c, b) == GetDistance(a, b)
}
