window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        let createlin = document.getElementById('abaptive');
        createlin.href = "./mapsPage/stule_mobile.css";
    }
    else{
        let createlin = document.getElementById('abaptive');
        createlin.href = "./mapsPage/stule_desc.css";
    }
    
    loadAvtors();
};
