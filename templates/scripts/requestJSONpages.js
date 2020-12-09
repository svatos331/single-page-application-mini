export function requestGETPAGE(href) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/pages/router.json', false);
    xhr.send();
    if (xhr.status != 200) {
        return "ERROR"
        console.log(xhr.status + ': ' + xhr.statusText);
    } else {
        let item
        localStorage.setItem('72198A642v48621895x48621G895z3508604F614K38419', xhr.responseText)
        JSON.parse(xhr.responseText).forEach(element => {
            if (element.href == href) {
                item = element.page
            } 
        });
        return item
    }
}