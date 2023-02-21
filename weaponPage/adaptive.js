window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        let createlin = document.getElementById('abaptive');
        createlin.href = "./weaponPage/stule_mobile.css";
        let createlin2 = document.getElementById('CrossAdapt');
        createlin2.href = "./Crooss/CrossMobileS.css";
        let logotext = document.getElementById('logo');
        logotext.style.fontSize = "3vh";
    }
    else{
        let createlin = document.getElementById('abaptive');
        createlin.href = "./weaponPage/stule_desc.css";
        let createlin2 = document.getElementById('CrossAdapt');
        createlin2.href = "./Crooss/CrossDescS.css";
    }
    //if (isOn == false) {
    //    document.getElementById('snowJs').src = "./assets/snow/snowstorm-min.js";
    //    isOn = true;
    //}
    
    
};

