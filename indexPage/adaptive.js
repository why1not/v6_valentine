window.onload = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        let createlin = document.getElementById('abaptive');
        createlin.href = "./indexPage/stule_mobile.css";
        let createlin2 = document.getElementById('CrossAdapt');
        createlin2.href = "./Crooss/CrossMobileS.css";
    }
    else{
        let createlin = document.getElementById('abaptive');
        createlin.href = "./indexPage/stule_desc.css";
        let createlin2 = document.getElementById('CrossAdapt');
        createlin2.href = "./Crooss/CrossDescS.css";
    }
};
