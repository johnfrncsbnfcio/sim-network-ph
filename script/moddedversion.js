const inputField = document.querySelectorAll('.search')
const url = 'https://johnfrncsbnfcio.github.io/project-ph-network-finder/written.json'

var arr = []
var firstNum;
var secondNum;
var thirdNum;
var total;
var indexx;

const smart = '/resources/SmartTNT.png'
const globe = '/resources/GlobeTM.png'
const sun = '/resources/Sun.png'
const dito = '/resources/Dito.png'
const unknown = '/resources/Unknown.png'

$.getJSON(url, function (data) {
    arr.push.apply(arr, data)
})

inputField.forEach((item, index) => {

    

    item.addEventListener('keydown', (event) => {

        
        if(index == 0) {
            item.setAttribute('oninput', `this.value = this.value.replace(/[^8-9]/g, '').replace(/(\..*?)\..*/g, '$1')`)
            
        }

        if(index == 1 && event.keyCode === 8) {
            item.setAttribute('oninput', `this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1')`)
            
        }

        if(index == 2 && (event.keyCode === 9 || event.keyCode === 8)) {
            item.setAttribute('oninput', `this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1')`)

        }

    })

    item.addEventListener('keyup', (event) => {

        if (index == 0) firstNum = item.value 

        if (index == 1) secondNum = item.value
            
        if (index == 2) thirdNum = item.value



        total =  firstNum + secondNum + thirdNum
        total = Number(total)
        
        indexx = arr.find(arr => arr.number == total)
        
        
        if (indexx !== undefined) {

            //const str = indexx.network.slice(1)
            //const capitalizeFirstLetter = indexx.network.charAt(0).toUpperCase() + str
            switch (indexx.network) {
                
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
            document.querySelector('#image').src = '/resources/Unknown.png'; 
        }
    })

})


