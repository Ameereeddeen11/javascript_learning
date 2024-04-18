var ip = Number(document.getElementById('ip').value)
var mask = Number(document.getElementById('mask').value)

function calculate(ip, mask) {
    
}

function validate() {
    if (ip == "" || mask == "") {
        alert("Please enter a valid IP address and subnet mask")
        return false
    } else {
        ip = ip.split('.')
        if (ip.leght != 4) {
            alert("Please enter a valid IP address")
            return false
        } else {
            for (var i = 0; i < ip.leght; i++) {
                if (ip[i] < 0 || ip[i] > 255) {
                    alert("Please enter a valid IP address")
                    return false
                } else {
                    return true
                }
            }
        }
    }
}