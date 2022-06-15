const inputField = document.querySelector('.search')

// Get data from github repo, json file.
const url = 'https://johnfrncsbnfcio.github.io/project-ph-network-finder-json-storage/written.json'

// Written.json data to arr[]
var arr = []

const smart = './resources/SmartTNT.png'
const globe = './resources/GlobeTM.png'
const sun = './resources/Sun.png'
const dito = './resources/Dito.png'
const unknown = './resources/Unknown.png'

// Fetching data from URL 
$.getJSON(url, function (data) {
    arr.push.apply(arr, data) // Inserting the data
})


// Receive every input type from user
input.oninput = function () {
    input.value = input.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
    const index = arr.find(arr => arr.number == input.value)

    // Validate if received undefined from data
    if (index !== undefined) {


        // To capitalize first letter if result want to be TEXT
        //const str = index.network.slice(1)
        //const capitalizeFirstLetter = index.network.charAt(0).toUpperCase() + str

        // Check what network receive
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
        document.querySelector('#image').src = unknown;
    }
}

// End of script