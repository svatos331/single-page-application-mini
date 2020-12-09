
import { conntectCSS } from '../router/styles.js'
import { conntectJS } from '../router/scripts.js'

let head = window.document.getElementsByTagName('head')[0]
let item = conntectCSS()
// connect CSS
//______________________________________________________________________________________________//
if (typeof (item) != 'string') {
    item.forEach(element => {
        head.appendChild(element)
    });
} else {
    console.log(item)
}
//______________________________________________________________________________________________ //

item = conntectJS()
// connect js
//______________________________________________________________________________________________//
if (typeof (item) != 'string') {
    document.addEventListener('DOMContentLoaded', function () {
        item.forEach(element => {
            head.appendChild(element)
        });
    })
    
} else {
    console.log(item)
}
//______________________________________________________________________________________________ //













