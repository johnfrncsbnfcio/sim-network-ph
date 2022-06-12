const inputField = document.querySelector('.search')
const url = 'https://johnfrncsbnfcio.github.io/project-ph-network-finder-json-storage/written.json'

var arr = []

const smart = 'blob/master/resources/Dito.png'
const globe = 'blob/master/resources/Dito.png'
const sun = 'blob/master/resources/Dito.png'
const dito = 'blob/master/resources/Dito.png'
const unknown = 'blob/master/resources/Dito.png'

$.getJSON(url, function (data) {
    arr.push.apply(arr, data)
})

input.oninput = function () {
    input.value = input.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
    const index = arr.find(arr => arr.number == input.value)


    if (index !== undefined) {

        //const str = index.network.slice(1)
        //const capitalizeFirstLetter = index.network.charAt(0).toUpperCase() + str

        
        switch (index.network) {

            case "smart":
                // return result.innerHTML = capitalizeFirstLetter + " / Talk n` Text"
                document.querySelector('#image').src = smart;

                break;
            case "globe":
                // return result.innerHTML = capitalizeFirstLetter + " / Touch Mobile"
                document.querySelector('#image').src = globe;

                break;
            case "sun":
                // return result.innerHTML = capitalizeFirstLetter + " Cellular"
                document.querySelector('#image').src = sun;

                break;
            case "dito":
                // return result.innerHTML = capitalizeFirstLetter + " Telecommunity"
                document.querySelector('#image').src = dito;

                break;
            default:
                // return result.innerHTML = "Error getting data in server."
                document.querySelector('#image').src = unknown;

        }

    } else {
        // return result.innerHTML = "No record found."
        document.querySelector('#image').src = 'blob/master/resources/Dito.png';
    }
}
