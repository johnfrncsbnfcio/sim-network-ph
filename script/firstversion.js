const inputField = document.querySelector('.search')
const resultfield = document.querySelector('.result')
const url = 'https://johnfrncsbnfcio.github.io/project-ph-network-finder/written.json'
var arr = []
$.getJSON(url, function (data) {
    arr.push.apply(arr, data)
})

input.oninput = function () {
    console.log(inputField === document.activeElement)
    const index = arr.find(arr => arr.number == input.value)
    const incomplete = inputField.style.borderBottom = '5px solid red'
  
    if (input.value.length != 3 || input.value == '') {
        document.querySelector('#image').src = '/resources/Unknown.png';
        incomplete
    } else {
        if (index !== undefined) {

            const str = index.network.slice(1)
            const capitalizeFirstLetter = index.network.charAt(0).toUpperCase() + str
            const complete = inputField.style.borderBottom = '5px solid green'
            switch (index.network) {
                
                case "smart":
                    // return result.innerHTML = capitalizeFirstLetter + " / Talk n` Text"
                    document.querySelector('#image').src = '/resources/SmartTNT.png';
                    complete
                    break;
                case "globe":
                    // return result.innerHTML = capitalizeFirstLetter + " / Touch Mobile"
                    document.querySelector('#image').src = '/resources/GlobeTM.png'; 
                    complete
                    break;
                case "sun":
                    // return result.innerHTML = capitalizeFirstLetter + " Cellular"
                    document.querySelector('#image').src = '/resources/Sun.png'; 
                    complete
                    break;
                case "dito":
                    // return result.innerHTML = capitalizeFirstLetter + " Telecommunity"
                    document.querySelector('#image').src = '/resources/Dito.png'; 
                    complete
                    break;
                default:
                    // return result.innerHTML = "Error getting data in server."
                    document.querySelector('#image').src = '/resources/Unknown.png'; 
                    complete
            }

        } else {
            // return result.innerHTML = "No record found."
            document.querySelector('#image').src = '/resources/Unknown.png'; 
        }
    }

}

input.onkeydown = function (event) {
    return (event.ctrlKey || event.altKey
        || (47 < event.keyCode && event.keyCode < 58 && event.shiftKey == false)
        || (95 < event.keyCode && event.keyCode < 106)
        || (event.keyCode == 8) || (event.keyCode == 9)
        || (event.keyCode > 34 && event.keyCode < 40)
        || (event.keyCode == 46))
}