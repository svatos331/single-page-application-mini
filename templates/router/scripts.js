export  function conntectJS(){ 
    let exportDATA = []
    let dataJS = [
        // 'jquery.js',
        // 'semantic.js',
        // 'bootstrap.js',
        'script.js',
        // import  js 
    ]

    if((dataJS.length != 0 ) && (dataJS.constructor == Array)){
        dataJS.forEach(element => {
            var scriptLink = document.createElement('script');
            scriptLink.src = 'assets/js/' + element;
            scriptLink.async = false; // чтобы гарантировать порядок

        exportDATA.push(scriptLink)
        });
    }else{
        return 'be connect js in scripts.js '
    }
    dataJS = null
    return exportDATA
}
