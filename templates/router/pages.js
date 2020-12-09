export  function staticPages(){ 

    let exportDATA = []
    let dataPAGES = [
        'header.html',
        'footer.html',
        // import  pages 
    ]
    if((dataPAGES.length != 0 ) && (dataPAGES.constructor == Array)){  





        // for (let i = 0; i < dataPAGES.length; i++) {
        //     let xhr = new XMLHttpRequest();
        //     xhr.open('GET', 'pages/stattic/' + dataPAGES[i]);
        //     xhr.responseType = 'html';
        //     xhr.async = false;
        //     xhr.onload = function () {
        //         if (this.status >= 200 && this.status < 300) {
        //         } else {
        //             reject({
        //                 status: this.status,
        //                 statusText: xhr.statusText
        //             });
        //         }
        //     };
        //     xhr.onprogress = function(event) { 
        //         console.log(event.currentTarget.response)


        //     }
        //     xhr.onerror = function () {
        //         reject({
        //             status: this.status,
        //             statusText: xhr.statusText
        //         });
        //     };
        //     xhr.send();  
        // }





    }else{
        return 'be connect js in scripts.js '
    }
    dataPAGES = null
    return exportDATA
}




