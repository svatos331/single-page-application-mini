export  function conntectCSS(){
    let exportDATA = []
    let datacss = [
        {file: 'style.css', rel: 'stylesheet'},
        // import css 
    ]

    if((datacss.length != 0 ) && (datacss.constructor == Array)){
        datacss.forEach(element => {
        let style = window.document.createElement('link')
        style.href = 'assets/css/' + element.file
        style.rel = element.rel || 'stylesheet'
        exportDATA.push(style)
        });
    }else{
        return 'be connect file css  in style.js'
    }
    datacss = null
    return exportDATA
}





