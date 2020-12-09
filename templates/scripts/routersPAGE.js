import { requestGETPAGE } from './requestJSONpages.js'

let CurrentLinks = document.getElementsByTagName('Step')
var namegetPage
for (let i = 0; i < CurrentLinks.length; i++) {
    CurrentLinks[i].addEventListener('click', function () {
        let url = this.getAttribute('to')
        if (localStorage.getItem('72198A642v48621895x48621G895z3508604F614K38419') == null) {
            namegetPage = requestGETPAGE(url);
        } else {
            let namegetPageARR = localStorage.getItem('72198A642v48621895x48621G895z3508604F614K38419')
            JSON.parse(namegetPageARR).forEach(element => {
                if (element.href == url) {
                    namegetPage = element.page
                }
            });
        }

        // get request
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/pages/' + ''+namegetPage+'.html' + '', false);
        xhr.send();
        if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText);
        } else {

            document.getElementById('App').innerHTML = xhr.responseText







        }



    })
}
CurrentLinks = null






