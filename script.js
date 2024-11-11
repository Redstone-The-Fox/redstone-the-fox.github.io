let clct = ""

function AppendClct(with_) {
    clct = clct + with_
    document.getElementById("calculation").innerHTML = clct
}

function Calculate() {
    clct = eval(clct)
    document.getElementById("calculation").innerHTML = clct
}

function ClearClct() {
    clct = ""
    document.getElementById("calculation").innerHTML = 0
}