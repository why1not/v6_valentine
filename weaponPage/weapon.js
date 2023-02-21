var xhr = new XMLHttpRequest();
xhr.open('GET', '../assets/data.json', false);
xhr.send();
var text = JSON.parse(xhr.responseText);
var resulted = text.list;

var isLoadedTop = false;

var q_name = "";
var q_dm = "";
var q_dmf = "";
var q_cl = "";
var q_clf = "";
var q_bx = "";
var q_bxf = "";
var q_tm = "";
var q_rn = "";
var q_re = "";
var q_pr = "";
var q_tp = "";
var q_dtp = "";
var q_se = "";

let saveBack = 0;
var col_weapon = resulted.length;


function standartSeach(tButton) {
    tButton.value = "Подождите.."
    let inZone = document.getElementById('inneredSeach');
    let headInZone = document.getElementById('inneredSeachHead');
    if (isLoadedInList == false || isLoadedInbig == false) {
        let index = 0; // нулевое Количество оружия ( не скинов! )
        headInZone.innerHTML = "";
        inZone.innerHTML = "";
		while (index < col_weapon) {
			let createOpt = document.createElement('option'); //Создаёться элемент списка
			createOpt.value = index; //значение Value присваиваеться = номер оружия
			createOpt.innerHTML = resulted[index].name; // в список вставляется название оружия
			
			inZone.insertBefore(createOpt, inZone.children[index]); //Элементы ижут по порядку

            let createOpt2 = document.createElement('option'); //Создаёться элемент списка
			createOpt2.value = index; //значение Value присваиваеться = номер оружия
			createOpt2.innerHTML = resulted[index].name; // в список вставляется название оружия

            headInZone.insertBefore(createOpt2, headInZone.children[index]);
			index = index + 1; //Берём следующее оружее
            
		}
        isLoadedInbig = true;
        isLoadedInList = true;
    }
    tButton.value = "Стандартный cписок";
    document.getElementById('helloArea').style.display = "none";
    document.getElementById('StandartSeach').style.display = "flex";
    document.getElementById('weaponArea').style.display = "none";

}























function openMainTTX() {
    document.getElementById("mainTTX").style.display = "flex";
    document.getElementById("otherTTX").style.display = "none";

    document.getElementById("mainTTX_button").style.borderTop = "0.5vh solid white";
    document.getElementById("otherTTX_button").style.borderTop = "none";
}
function openOtherTTX() {
    document.getElementById("otherTTX").style.display = "flex";
    document.getElementById("mainTTX").style.display = "none";
    
    document.getElementById("otherTTX_button").style.borderTop = "0.5vh solid white";
    document.getElementById("mainTTX_button").style.borderTop = "none";
    
}
function extiTopPanel() {
    document.getElementById("TopPanelSettings").style.display = "none";
    
    //document.getElementById('StandartSeach').style.display = "none";
}


















































function calcTime() {
    //btn.value = "Подсчёт.."

    let q_damage = 0;
	let q_speed = 0;


	//Проверка Защиты
	let resist = document.getElementById('res').value;
	if(resist == ""){ resist = 0; }

	//Проверка Доп.Урона
	let updamage = document.getElementById('upDm').value;
	if(updamage == ""){ updamage = 0; }

	//Проверка Брони Тело
	let armBody = Number(document.getElementById('armBody').value);
	if (armBody == 2) {armBody = 50;}
	else if (armBody == 1) {armBody = 25;}
	else if (armBody == 0) {armBody = 0;}




	//Проверка Брони Голова
	let armHead = Number(document.getElementById('armHead').value);
	if (armHead == 2) {armHead = 1.5;}
	else if (armHead == 1) {armHead = 1.75;}
	else if (armHead == 0) {armHead = 2;}
	//Проверка Прокачки
	if (xhr.status != 200) {
        // обработать ошибку
        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
    } 
	else {
		let pump = document.getElementById('pump').value;
		if (pump == "stok") {
			q_damage = resulted[numberWeapon].damage;
			q_speed = resulted[numberWeapon].speed;
		}
		else{
			q_damage = resulted[numberWeapon].full_damage;
			q_speed = resulted[numberWeapon].speed;
		}
	}
	
	let cofupdm = 1+(updamage/100)+(-resist/100);
    
	//Считаем.
	console.log(cofupdm);
	//голова
	document.getElementById('headNUM').innerText = Math.ceil((100+armBody)/((q_damage*armHead)*cofupdm));
	let headTimeKill = Math.round(1000*(60/q_speed*(Math.ceil((100+armBody)/((q_damage*armHead)*cofupdm))-1)));
	if (headTimeKill <= 0) { headTimeKill = "Ваншот"}
	document.getElementById('headTIME').innerText = headTimeKill+" мс";

	//тело
	document.getElementById('bodyNUM').innerText = Math.ceil((100+armBody)/(q_damage*cofupdm));
	let bodyTimeKill = Math.round(1000*(60/q_speed*(Math.ceil((100+armBody)/(q_damage*cofupdm))-1)));
	if (bodyTimeKill <= 0) { bodyTimeKill = "Ваншот"}
	document.getElementById('bodyTIME').innerText = bodyTimeKill+" мс";


    //Плечо 
    document.getElementById('UpstikNUM').innerText = Math.ceil((100+armBody)/((q_damage*0.95)*cofupdm));
	let uparmTimeKill = Math.round(1000*(60/q_speed*(Math.ceil((100+armBody)/((q_damage*0.95)*cofupdm)-1))));
	if (uparmTimeKill <= 0) { uparmTimeKill = "Ваншот"}
	document.getElementById('UpstikTIME').innerText = uparmTimeKill+" мс";
	
	//руки (Предплечие)
	document.getElementById('stikNUM').innerText = Math.ceil((100+armBody)/((q_damage*0.9)*cofupdm));
	let armTimeKill = Math.round(1000*(60/q_speed*(Math.ceil((100+armBody)/((q_damage*0.9)*cofupdm)-1))));
	if (armTimeKill <= 0) { armTimeKill = "Ваншот"}
	document.getElementById('stikTIME').innerText = armTimeKill+" мс";


    //Кисть
	document.getElementById('DownstikNUM').innerText = Math.ceil((100+armBody)/((q_damage*0.85)*cofupdm));
	let downarmTimeKill = Math.round(1000*(60/q_speed*(Math.ceil((100+armBody)/((q_damage*0.85)*cofupdm)-1))));
	if (downarmTimeKill <= 0) { downarmTimeKill = "Ваншот"}
	document.getElementById('DownstikTIME').innerText = downarmTimeKill+" мс";
	
    //Бедро
	document.getElementById('bedroNUM').innerText = Math.ceil((100+armBody)/((q_damage*0.6)*cofupdm));
	let upnogiTimeKill = Math.round(1000*((60/q_speed)*(Math.ceil((100+armBody)/((q_damage*0.6)*cofupdm))-1)));
	if (upnogiTimeKill <= 0) { upnogiTimeKill = "Ваншот"}
	document.getElementById('bedroTIME').innerText = upnogiTimeKill+" мс";

    //Голень
	document.getElementById('golenNUM').innerText = Math.ceil((100+armBody)/Math.round((q_damage*0.5)*cofupdm));
	let nogiTimeKill = Math.round(1000*((60/q_speed)*(Math.ceil((100+armBody)/Math.round((q_damage*0.5)*cofupdm))-1)));
	if (nogiTimeKill <= 0) {nogiTimeKill = "Ваншот"}
	document.getElementById('golenTIME').innerText = nogiTimeKill+" мс";


	//ноги (Ступня)
    console.log(Math.round((q_damage*0.4)*cofupdm));
	document.getElementById('nogiNUM').innerText = Math.ceil((100+armBody)/Math.round((q_damage*0.4)*cofupdm));
	let downnogiTimeKill = Math.round(1000*((60/q_speed)*(Math.ceil((100+armBody)/Math.round((q_damage*0.4)*cofupdm))-1)));
	if (downnogiTimeKill <= 0) { downnogiTimeKill = "Ваншот"}
	document.getElementById('nogiTIME').innerText = downnogiTimeKill+" мс";














    
    //btn.value = "Пересчитать таблицу"

    document.getElementById("TimeButton").style.display = "none";
    document.getElementById("TimePanel").style.display = "flex";
    document.getElementById("TimePanel").scrollIntoView()
}


function GetWeapon(obj) {
    document.getElementById("logo").innerText = "Загрузка...";
    //document.getElementById('weaponArea').innerHTML = '';

    if (obj.tagName == "DIV" ) {
        numberWeapon = Number(obj.id);
    } 
    else if(obj.tagName == "SELECT"){
        numberWeapon = Number(obj.value);
    } 
    else if(obj.tagName == "LABEL"){
        numberWeapon = Number(obj.id);
        console.log("12311gggggg");
    }
    console.log("12311");
    q_name = resulted[numberWeapon].name;
    q_dm = resulted[numberWeapon].damage;
    q_dmf = resulted[numberWeapon].full_damage;
    q_cl = resulted[numberWeapon].clip;
    q_clf = resulted[numberWeapon].full_clip;
    q_bx = resulted[numberWeapon].box;
    q_bxf = resulted[numberWeapon].full_box;
    q_tm = resulted[numberWeapon].speed;
    q_rn = resulted[numberWeapon].range;
    q_re = resulted[numberWeapon].reload;
    q_pr = resulted[numberWeapon].price;
    q_tp = resulted[numberWeapon].type;
    q_dtp = resulted[numberWeapon].dm_type;
    q_se = resulted[numberWeapon].series;

    
    
    console.log(numberWeapon);
    //document.getElementById('inneredSeachHead').children[numberWeapon].selected = true;











    document.getElementById('damage').innerText= q_dm;
    document.getElementById('damage2').innerText= q_dm;
    
    document.getElementById('damage_f').innerText = q_dmf;
    document.getElementById('damage_f2').innerText = q_dmf;
    
    document.getElementById('clip').innerText = q_cl;
    document.getElementById('clip2').innerText = q_cl;
    
    
    document.getElementById('clip_f').innerText = q_clf;
    document.getElementById('clip_f2').innerText = q_clf;
    
    
    document.getElementById('box').innerText = q_bx;
    document.getElementById('box2').innerText = q_bx;
    
    
    document.getElementById('box_f').innerText = q_bxf;
    document.getElementById('box_f2').innerText = q_bxf;
    
    document.getElementById('temp').innerText = q_tm;
    document.getElementById('temp2').innerText = q_tm;
    document.getElementById('temp3').innerText = q_tm;
    document.getElementById('temp4').innerText = q_tm;
    
    
    document.getElementById('range').innerText = q_rn;
    document.getElementById('range2').innerText = q_rn;
    document.getElementById('range3').innerText = q_rn;
    document.getElementById('range4').innerText = q_rn;
    
    
    document.getElementById('reload').innerText = q_re;
    document.getElementById('reload2').innerText = q_re;
    document.getElementById('reload3').innerText = q_re;
    
    

    document.getElementById('price').innerText = q_pr;
    document.getElementById('type').innerText = q_tp;
    document.getElementById('type_dm').innerText = q_dtp;
    document.getElementById('serias').innerText = q_se;
    
    

    document.getElementById("skin").src = "../screenshots/"+resulted[numberWeapon].numder+".png";
    document.getElementById("skin").name = numberWeapon;



    
    document.getElementById('helloArea').style.display = "none";
    document.getElementById('StandartSeach').style.display = "none";
    document.getElementById('typeArea').style.display = "none";
    document.getElementById("viewList").style.display = "none";
    //document.getElementById("skinAreaList").style.display = "none";

    
    //document.getElementById("skinArea").style.display = "block";
    document.getElementById("viewWeapon").style.display = "flex";
    //document.getElementById("TimeButton").style.display = "block";
    
    
    document.getElementById("TimePanel").style.display = "none";
    extiTopPanel()
    //document.getElementById("logo").innerText = "Справочник > "+ resulted[numberWeapon].name;

    
    document.getElementById("TimeButton").style.display = "block";
    LoadSkin();
    
    document.getElementById("logo").innerText = " < Назад"
}









var tops = [];

function opentoppanel(){
    document.getElementById("TopPanelSettings").style.display = "flex";
    
    document.getElementById('WPSkinPanel').style.display = 'none';
}

function LoadTopXNR() {
    if (isLoadedTop != true) {
        xhr.open('GET', '../assets/tops.json', false);
        xhr.send();
        text = JSON.parse(xhr.responseText);
        tops = text.top[0];  
        isLoadedTop = true;
    }
}

let topType = "";
let wpType = "Отключено";

function OpenTheTop(getbutton) {
    LoadTopXNR();
    switch (getbutton.name) {
        case "toplist_1":
            topType = getbutton.id;
            document.getElementById('TOP_StandartTopButton').value = getbutton.value;
            document.getElementById('TOP_unStandartTopButton').value = "Расширенные топы";

            
            document.getElementById('WPTYPEOFF').className = "SettingPan_MAIN";
            document.getElementById('TOP_wpTypeButton').className = "SettingPan_MAIN_Button";
            //alert(topType);
            break;
        case "toplist_2":
            topType = getbutton.id;
            document.getElementById('TOP_unStandartTopButton').value = getbutton.value;
            document.getElementById('TOP_StandartTopButton').value = "Стандартные топы";
            

            document.getElementById('WPTYPEOFF').className = "SettingPan_MAIN";
            document.getElementById('TOP_wpTypeButton').className = "SettingPan_MAIN_Button";
            //alert(topType);
            break;
        case "topWPtype":
            wpType = getbutton.id;
            document.getElementById('TOP_wpTypeButton').value = getbutton.id;
            break;
    
        default:
            alert("Возникла ошибка, сообщите администратору КОД- 1221kq")
            break;
    }
    
    let toplist = [];
    switch (topType) {
        case "top_damage":
            toplist = tops.top_damage;
            document.getElementById('TopTypeText').innerText = "Топ по урону";
            break;
        case "top_f_damage":
            toplist = tops.top_f_damage;
            document.getElementById('TopTypeText').innerText = "Топ по фулл урону";
            break;
        case "top_clip":
            toplist = tops.top_clip;
            document.getElementById('TopTypeText').innerText = "Топ по обойме";
            break;
        case "top_f_clip":
            toplist = tops.top_f_clip;
            //alert(top_f_clip);
            document.getElementById('TopTypeText').innerText = "Топ по фулл обойме";
            break;
        case "top_box":
            toplist = tops.top_box;
            document.getElementById('TopTypeText').innerText = "Топ по запасу";
            break;
        case "top_f_box":
            toplist = tops.top_f_box;
            document.getElementById('TopTypeText').innerText = "Топ по фулл запасу";
            break;
        case "top_temp":
            toplist = tops.top_temp;
            document.getElementById('TopTypeText').innerText = "Топ по темпу";
            break;
        case "top_range":
            toplist = tops.top_range;
            document.getElementById('TopTypeText').innerText = "Топ по дальности";
            break;
        //Время килов ниже
        case "top100st":
            toplist = tops.top100st;
            document.getElementById('TopTypeText').innerText = "Топ: 100хп [ Без брони ], Сток. Прокачка";
            break;
        case "top100fl":
            toplist = tops.top100fl;
            document.getElementById('TopTypeText').innerText = "Топ: 100хп [ Без брони ], Фулл. Прокачка";
            break;
        case "top150st":
            toplist = tops.top150st;
            document.getElementById('TopTypeText').innerText = "Топ: 100хп [ Укреп. ], Сток. Прокачка";
            break;
        case "top150fl":
            toplist = tops.top150fl;
            document.getElementById('TopTypeText').innerText = "Топ: 100хп [ Укреп ], Фулл. Прокачка";
            break;
        default:
            break;
        }


    //console.log(tops.top_damage);
    let TopZone = document.getElementById('TOP_Zone');
    TopZone.innerHTML = "";
    if (wpType == "Отключено") {
        for (let TopIndex = 0; TopIndex < toplist.length; TopIndex++) {
            let TopTypeCart =  document.createElement('div');
                TopTypeCart.className = "weaponCart weaponCart_h";
                TopTypeCart.id = toplist[TopIndex];
                TopTypeCart.setAttribute('onclick',"GetWeapon(this)");
                TopZone.append(TopTypeCart);
    
            let TOP_image = document.createElement('img');
                TOP_image.src = "../screenshots/"+resulted[toplist[TopIndex]].numder+".png";
                TOP_image.className = "imageOnCart";
                TopTypeCart.prepend(TOP_image);
    
            let TOP_name = document.createElement('label');
                TOP_name.className = "textOnCart";
                TOP_name.innerText = resulted[toplist[TopIndex]].name;
                TopTypeCart.append(TOP_name);
            
    
    
            let TOP_dopInfo = document.createElement('div');
                TOP_dopInfo.className = "dopInfo";
                switch (topType) {
                    case "top100st":
                        TOP_dopInfo.innerText = String("Урон: "+resulted[toplist[TopIndex]].damage+" Темп: "+resulted[toplist[TopIndex]].speed);
                        break;
                    case "top150st":
                        TOP_dopInfo.innerText = String("Урон: "+resulted[toplist[TopIndex]].damage+" Темп: "+resulted[toplist[TopIndex]].speed);
                        break;
                    case "top100fl":
                        TOP_dopInfo.innerText = String("Ф. Урон: "+resulted[toplist[TopIndex]].full_damage+" Темп: "+resulted[toplist[TopIndex]].speed);
                        break
                    case "top150fl":
                        TOP_dopInfo.innerText = String("Ф. Урон: "+resulted[toplist[TopIndex]].full_damage+" Темп: "+resulted[toplist[TopIndex]].speed);
                        break
                    case "top_damage":
                        TOP_dopInfo.innerText = String("Урон: "+resulted[toplist[TopIndex]].damage);
                        break;
                    case "top_f_damage":
                        TOP_dopInfo.innerText = String("Ф. Урон: "+resulted[toplist[TopIndex]].full_damage);
                        break;
                    case "top_clip":
                        TOP_dopInfo.innerText = String("Обойма: "+resulted[toplist[TopIndex]].clip);
                        break;
                    case "top_f_clip":
                        TOP_dopInfo.innerText = String("Ф. Обойма: "+resulted[toplist[TopIndex]].full_clip);
                        break;
                    case "top_box":
                        TOP_dopInfo.innerText = String("Запас: "+resulted[toplist[TopIndex]].box);
                        break;
                    case "top_f_box":
                        TOP_dopInfo.innerText = String("Ф. Запас: "+resulted[toplist[TopIndex]].full_box);
                        break;
                    case "top_temp":
                        TOP_dopInfo.innerText = String("Темп: "+resulted[toplist[TopIndex]].speed);
                        break;
                    case "top_range":
                        TOP_dopInfo.innerText = String("Дальность: "+resulted[toplist[TopIndex]].range);
                        break;
                    default:
                        break;
                }
                
                TopTypeCart.append(TOP_dopInfo);
        }
    }
    else {
        for (let TopIndex = 0; TopIndex < toplist.length; TopIndex++) {
            if (resulted[toplist[TopIndex]].type == wpType) {
                let TopTypeCart =  document.createElement('div');
                TopTypeCart.className = "weaponCart weaponCart_h";
                TopTypeCart.id = toplist[TopIndex];
                TopTypeCart.setAttribute('onclick',"GetWeapon(this)");
                TopZone.append(TopTypeCart);
    
            let TOP_image = document.createElement('img');
                TOP_image.src = "../screenshots/"+resulted[toplist[TopIndex]].numder+".png";
                TOP_image.className = "imageOnCart";
                TopTypeCart.prepend(TOP_image);
    
            let TOP_name = document.createElement('label');
                TOP_name.className = "textOnCart";
                TOP_name.innerText = resulted[toplist[TopIndex]].name;
                TopTypeCart.append(TOP_name);
            
    
    
            let TOP_dopInfo = document.createElement('div');
                TOP_dopInfo.className = "dopInfo";
                switch (topType) {
                    case "top100st", "top150st":
                        TOP_dopInfo.innerText = String("Урон: "+resulted[toplist[TopIndex]].damage+" Темп: "+resulted[toplist[TopIndex]].speed);
                        break;
                    case "top100fl", "top150fl":
                        TOP_dopInfo.innerText = String("Ф. Урон: "+resulted[toplist[TopIndex]].full_damage+" Темп: "+resulted[toplist[TopIndex]].speed);
                        break
                    case "top_damage":
                        TOP_dopInfo.innerText = String("Урон: "+resulted[toplist[TopIndex]].damage);
                        break;
                    case "top_f_damage":
                        TOP_dopInfo.innerText = String("Ф. Урон: "+resulted[toplist[TopIndex]].full_damage);
                        break;
                    case "top_clip":
                        TOP_dopInfo.innerText = String("Обойма: "+resulted[toplist[TopIndex]].clip);
                        break;
                    case "top_f_clip":
                        TOP_dopInfo.innerText = String("Ф. Обойма: "+resulted[toplist[TopIndex]].full_clip);
                        break;
                    case "top_box":
                        TOP_dopInfo.innerText = String("Запас: "+resulted[toplist[TopIndex]].box);
                        break;
                    case "top_f_box":
                        TOP_dopInfo.innerText = String("Ф. Запас: "+resulted[toplist[TopIndex]].full_box);
                        break;
                    case "top_temp":
                        TOP_dopInfo.innerText = String("Темп: "+resulted[toplist[TopIndex]].speed);
                        break;
                    case "top_range":
                        TOP_dopInfo.innerText = String("Дальность: "+resulted[toplist[TopIndex]].range);
                        break;
                    default:
                        break;
                }
                
                TopTypeCart.append(TOP_dopInfo);
            }
            
        }
    }
    


    
    document.getElementById("viewList").style.display = "flex";
    document.getElementById('viewWeapon').style.display = "none";
    document.getElementById('iventArea').style.display = 'none';
    document.getElementById('helloArea').style.display = 'none';
    document.getElementById('typeArea').style.display = 'none';
    document.getElementById('topArea').style.display = 'flex';
    document.getElementById('WPSkinPanel').style.display = 'none';

    saveBack = 1;
}












var sizeCard = [];
let main_height = 25;
let main_width = 40;

let editSise = false;
function loadSize(isEdit, mas) {
    if (isEdit == true) {
        carts2 = document.querySelectorAll('div > .weaponCart');
        texts2 = document.getElementsByClassName("textOnCart");
        f_hei_font = 2.5;
        _f_hei_font = Math.ceil(f_hei_font*1.5);
        aa1 = 0;
        while (aa1 < carts2.length) {
            carts2[aa1].style.height = String(mas[0]) + "vh";
            carts2[aa1].style.width = String(mas[1]) + "vh";
            texts2[aa1].style.fontSize = String(mas[2]) + "vh";
            aa1 = aa1 + 1;
        }
    }
}

function remsize(slider) {
    sizeCard = [];
    //console.log(slider.value);
    //let carts = document.getElementsByClassName("weaponCart");
    
    let carts = document.querySelectorAll('div > .weaponCart');
    let texts = document.getElementsByClassName("textOnCart");
        f_hei_font = 2.5;
        _f_hei_font = Math.ceil(f_hei_font*1.5);
        aa1 = 0;
        while (aa1 < carts.length) {
            //carts[aa1].style.minHeight = 0;
            //carts[aa1].style.minHeight = 0;
            //carts[aa1].style.height = String(main_height*slider.value) + "vh";
            //carts[aa1].style.width = String(main_width*slider.value) + "%";
            carts[aa1].style.height = String(main_height*slider.value + "vh");
            carts[aa1].style.width = String(main_width*slider.value + "vh");
            aa1 = aa1 + 1;
        }
        aa1 = 0;
        let tosavefontheight = 0;
        if (slider.value < 1.5) {
            
            while (aa1 < texts.length) {
                texts[aa1].style.fontSize = String(f_hei_font*slider.value) + "vh";
                aa1 = aa1 + 1;
            }
            tosavefontheight = f_hei_font*slider.value;
        }
        else{
            while (aa1 < texts.length) {
                texts[aa1].style.fontSize = String(_f_hei_font) + "vh";
                aa1 = aa1 + 1;
            }
            tosavefontheight = _f_hei_font;
        }
    editSise = true;
    sizeCard.push(main_height*slider.value);
    sizeCard.push(main_width*slider.value);
    sizeCard.push(tosavefontheight);
    //console.table(sizeCard);
}











var IsLoadIventList = false;
var load_ivent = "";


//console.table(resulted)
function GetIventWP(IventButton) {
    
    let btNameIv = IventButton.id;
    if (IsLoadIventList != true) {
        xhr.open('GET', '../assets/tops.json', false);
        xhr.send();
        text = JSON.parse(xhr.responseText);
        load_ivent = text.ivent[0];
        IsLoadIventList = true;
    }

    let loadWpList = "";
    let inZoneIvent = document.getElementById('IV_Zone');
    inZoneIvent.innerHTML = '';
    switch (btNameIv) {
        case "sezon1":
            loadWpList = load_ivent.sezon1;
            break;
        case "sezon2":
            loadWpList = load_ivent.sezon2;
            break;
        case "sezon3":
            loadWpList = load_ivent.sezon3;
            break;
        case "ny1":
            loadWpList = load_ivent.ny1;
            break;
        case "ny2":
            loadWpList = load_ivent.ny2;
            break;
        case "hell1":
            loadWpList = load_ivent.hell1;
            break;
        case "hell2":
            loadWpList = load_ivent.hell2;
            break;
        case "hell3":
            loadWpList = load_ivent.hell3;
            break;
        case "hell4":
            loadWpList = load_ivent.hell4;
            break;
        case "zombie":
            loadWpList = load_ivent.zombie;
            break;
        case "snowIV":
            loadWpList = load_ivent.snowIV;
            break;
        case "militari":
            loadWpList = load_ivent.militari;
            break;
        case "galo":
            loadWpList = load_ivent.galo;
            break;
        default:
            alert("Ошибка, сообщите администратору справочника. #221xs")
            break;
    }
    if (btNameIv == "sezon1" || btNameIv == "sezon2") {
        for (let iventIndex = 0; iventIndex < loadWpList.length; iventIndex++) {
        
            let IventCard =  document.createElement('div');
                IventCard.className = "weaponCart";
                IventCard.id = loadWpList[iventIndex];
                IventCard.setAttribute('onclick',"GetWeapon(this)");
                inZoneIvent.append(IventCard);
    
            let IV_image = document.createElement('img');
                IV_image.src = "../screenshots/"+resulted[loadWpList[iventIndex]].numder+".png";
                IV_image.className = "imageOnCart";
                IventCard.prepend(IV_image);
    
            let IV_name = document.createElement('label');
                IV_name.className = "textOnCart";
                IV_name.innerText = resulted[loadWpList[iventIndex]].name;
                IventCard.append(IV_name);
            
            
        }
    } else {
        
        LoadTopXNRSkins();
        for (let iventIndex = 0; iventIndex < loadWpList.length; iventIndex++) {
        
            let IventCard =  document.createElement('div');
                IventCard.className = "weaponCart";
                IventCard.id = loadWpList[iventIndex];
                IventCard.setAttribute('onclick',"GetWeapon(this)");
                inZoneIvent.append(IventCard);
    
            let IV_image = document.createElement('img');
                for (let SkinIndexTBX = 0; SkinIndexTBX < wpSkins.length; SkinIndexTBX++) {
                    if (resulted[loadWpList[iventIndex]].numder == wpSkins[SkinIndexTBX].name) {
                        switch (btNameIv) {
                            case "sezon3":
                                IV_image.src = "../screenshots/skins/"+wpSkins[SkinIndexTBX].sez3+".png";
                                break;
                            case "ny1":
                                IV_image.src = "../screenshots/skins/"+wpSkins[SkinIndexTBX].ny2122+".png";
                                break;
                            case "ny2":
                                IV_image.src = "../screenshots/skins/"+wpSkins[SkinIndexTBX].ny2223+".png";
                                break;
                            case "hell1":
                                IV_image.src = "../screenshots/skins/"+wpSkins[SkinIndexTBX].hell2019+".png";
                                break;
                            case "hell2":
                                IV_image.src = "../screenshots/skins/"+wpSkins[SkinIndexTBX].hell2020+".png";
                                break;
                            case "hell3":
                                IV_image.src = "../screenshots/skins/"+wpSkins[SkinIndexTBX].hell2021+".png";
                                break;
                            case "hell4":
                                IV_image.src = "../screenshots/skins/"+wpSkins[SkinIndexTBX].hell2022+".png";
                                break;
                            case "zombie":
                                IV_image.src = "../screenshots/skins/"+wpSkins[SkinIndexTBX].zombie+".png";
                                break;
                            case "snowIV":
                                IV_image.src = "../screenshots/skins/"+wpSkins[SkinIndexTBX].snow+".png";
                                break;
                            case "militari":
                                IV_image.src = "../screenshots/skins/"+wpSkins[SkinIndexTBX].may9_military+".png";
                                break;
                            case "galo":
                                IV_image.src = "../screenshots/skins/"+wpSkins[SkinIndexTBX].galo+".png";
                                break;
                            default:
                                alert("Ошибка, сообщите администратору справочника. #221x222s")
                                break;
                        }
                    }
                    
                }
                
                //IV_image.src = "../screenshots/"+resulted[loadWpList[iventIndex]].numder+".png";
                if (resulted[loadWpList[iventIndex]].name == "Метла") {
                    IV_image.src = "../screenshots/"+resulted[loadWpList[iventIndex]].numder+".png";
                }
                IV_image.className = "imageOnCart";
                IventCard.prepend(IV_image);
    
            let IV_name = document.createElement('label');
                IV_name.className = "textOnCart";
                IV_name.innerText = resulted[loadWpList[iventIndex]].name;
                IventCard.append(IV_name);
            
            
        }
    }
    
    








    if (editSise == true) {
        loadSize(editSise,sizeCard);
    }
    
    document.getElementById("viewList").style.display = "flex";
    document.getElementById('viewWeapon').style.display = "none";
    document.getElementById('iventArea').style.display = 'flex';
    document.getElementById('helloArea').style.display = 'none';
    document.getElementById('typeArea').style.display = 'none';
    document.getElementById('topArea').style.display = 'none';
    document.getElementById('WPSkinPanel').style.display = 'none';
    
    saveBack = 2;
}
function sort_type(Inp){
    let inZone = document.getElementById('ST_Zone');
    let _type = Inp.name;
    inZone.innerHTML = "";
    
    for (let typeIndex = 0; typeIndex < col_weapon; typeIndex++) {
        if (_type == resulted[typeIndex].type) {
            let SortTypeCart =  document.createElement('div');
                SortTypeCart.className = "weaponCart";
                SortTypeCart.id = typeIndex;
                SortTypeCart.setAttribute('onclick',"GetWeapon(this)");
                inZone.append(SortTypeCart);

            let ST_image = document.createElement('img');
                ST_image.src = "../screenshots/"+resulted[typeIndex].numder+".png";
                ST_image.className = "imageOnCart";
                SortTypeCart.prepend(ST_image);

            let ST_name = document.createElement('label');
                ST_name.className = "textOnCart";
                ST_name.innerText = resulted[typeIndex].name;
                SortTypeCart.append(ST_name);
        }
        
    }
    if (Inp.value == "Пистолет-\nпулемёты ") {
        document.getElementById('SortNameTypeText').innerText = "Пистолет-пулемёты";
    } else {
        document.getElementById('SortNameTypeText').innerText = Inp.value;
    }


    if (editSise == true) {
        loadSize(editSise,sizeCard);
    }







    
    document.getElementById("viewList").style.display = "flex";
    document.getElementById('viewWeapon').style.display = "none";
    document.getElementById('topArea').style.display = 'none';
    document.getElementById('iventArea').style.display = 'none';
    document.getElementById('helloArea').style.display = 'none';
    document.getElementById('typeArea').style.display = 'flex';
    
    document.getElementById('WPSkinPanel').style.display = 'none';

    
    saveBack = 3;
}








function search(TextInput) {
    let text = TextInput.value.toLowerCase();
    let _weaponName = [];
    for (let sindex = 0; sindex < col_weapon; sindex++) {
        _weaponName.push(resulted[sindex].name.toLowerCase());
    }
    let matchingWords = _weaponName.filter(_weaponName => _weaponName.includes(text));
    
    
    
    
    
    
    









    if (matchingWords.length == 0) {
        document.getElementById('SearchResuilts').innerHTML = "";
        let createBadRes =  document.createElement('label');
        createBadRes.className = "inres_bad";
        createBadRes.innerHTML = "Оружия с таким названием не найдено..<br>Попробуйте изменить запрос или сменить язык";
        document.getElementById('SearchResuilts').append(createBadRes);
        

    } 
    else {

        let _MW_RES_INDEX = [];
        for (let tpIndex = 0; tpIndex < matchingWords.length; tpIndex++) {
            for (let ResInd = 0; ResInd < resulted.length; ResInd++) {
                if (matchingWords[tpIndex] == resulted[ResInd].name.toLowerCase()) {
                    _MW_RES_INDEX.push(ResInd);
                    ResInd = (resulted.length) + 1;
                }   
            }


        }
        if (_MW_RES_INDEX.length == resulted.length) {
            _MW_RES_INDEX = [];
        }





        let zone = document.getElementById('SearchResuilts');
        if (matchingWords.length == col_weapon) {
            zone.innerHTML = "";
        } 
        else {
            zone.innerHTML = "";
            for (let good_index = 0; good_index < matchingWords.length; good_index++) {
                let createGoodRes =  document.createElement('label');
                createGoodRes.className = "inres";
                createGoodRes.id = _MW_RES_INDEX[good_index];
                createGoodRes.setAttribute('onclick',"GetWeapon(this)");
                createGoodRes.innerHTML = String(matchingWords[good_index]) +"<span>"+resulted[_MW_RES_INDEX[good_index]].type+"</span>";
                zone.append(createGoodRes);
                
            
            }
        }
        
    }
    
    
    
    //console.log(matchingWords.length);
    
    saveBack = 4;
}





let PanSkinList = false;
function Open_CloseSkins(){
    if (PanSkinList == false) {
        document.getElementById('WPSkinPanel').style.display = 'flex';
        PanSkinList = true;
    } else {
        document.getElementById('WPSkinPanel').style.display = 'none';
        PanSkinList = false;
        
    }
}


function LoadSkin() {
    LoadTopXNRSkins();
    _loadNum = Number(document.getElementById("skin").name);
    SkinPanel = document.getElementById('WPSkinPanel');
    SkinPanel.innerHTML = "<label class=\"SkinListButton\" style=\"color: var(--blue);text-align: center;\">Доступные скины</label>";
    _Standartskin = document.getElementById('StandertModel').cloneNode(true);
    if (resulted[_loadNum].skins > 1) {
        _Standartskin.name = _loadNum;
        SkinPanel.append(_Standartskin);
        //for (let SkinId = 0; SkinId < resulted[_loadNum].skins; SkinId++) {
        let IventSkinsId = [];
        let IventSkinsShort = [];


        let wpS_id;
        for (let wpSkinID_index = 0; wpSkinID_index < wpSkins.length; wpSkinID_index++) {
            if (resulted[_loadNum].numder == wpSkins[wpSkinID_index].name) {
                wpS_id = wpSkinID_index;
            }
            
        }


        let hell2019 = false;
        let hell2020 = false;
        let hell2021 = false;
        let hell2022 = false;
        let zombie = false;
        let snow = false;
        let may9_military = false;
        let galo = false;
        let ny2122 = false;
        let ny2223 = false;
        let sez1 = false;
        let sez2 = false;
        let sez3 = false;
        
        for (let IventIndexCol = 0; IventIndexCol <  resulted[_loadNum].skins; IventIndexCol++) {
            if (wpSkins[wpS_id].hell2019 != "" && hell2019 == false) {
                IventSkinsId.push(wpSkins[wpS_id].hell2019);
                IventSkinsShort.push(wpSkinsShortcut.hell2019);
                hell2019 = true;
                //IventIndexCol++;
            }
            else if (wpSkins[wpS_id].hell2020 != "" && hell2020 == false) {
                IventSkinsId.push(wpSkins[wpS_id].hell2020);
                IventSkinsShort.push(wpSkinsShortcut.hell2020);
                hell2020 = true;
                //IventIndexCol++;
            }
            else if (wpSkins[wpS_id].hell2021 != "" && hell2021 == false) {
                IventSkinsId.push(wpSkins[wpS_id].hell2021);
                IventSkinsShort.push(wpSkinsShortcut.hell2021);
                hell2021 = true;
                //IventIndexCol++;
            }
            else if (wpSkins[wpS_id].hell2022 != "" && hell2022 == false) {
                IventSkinsId.push(wpSkins[wpS_id].hell2022);
                IventSkinsShort.push(wpSkinsShortcut.hell2022);
                hell2022 = true;
                //IventIndexCol++;
            }
            else if (wpSkins[wpS_id].zombie != "" && zombie == false) {
                IventSkinsId.push(wpSkins[wpS_id].zombie);
                IventSkinsShort.push(wpSkinsShortcut.zombie);
                zombie = true;
                //IventIndexCol++;
            }
            else if (wpSkins[wpS_id].snow != "" && snow == false) {
                IventSkinsId.push(wpSkins[wpS_id].snow);
                IventSkinsShort.push(wpSkinsShortcut.snow);
                snow = true;
                //IventIndexCol++;
            }
            else if (wpSkins[wpS_id].may9_military != "" && may9_military == false) {
                IventSkinsId.push(wpSkins[wpS_id].may9_military);
                IventSkinsShort.push(wpSkinsShortcut.may9_military);
                may9_military = true;
                //IventIndexCol++;
            }
            else if (wpSkins[wpS_id].galo != "" && galo == false ){
                IventSkinsId.push(wpSkins[wpS_id].galo);
                IventSkinsShort.push(wpSkinsShortcut.galo);
                galo = true;
                //IventIndexCol++;
            }
            else if (wpSkins[wpS_id].ny2122 != "" && ny2122 == false) {
                IventSkinsId.push(wpSkins[wpS_id].ny2122);
                IventSkinsShort.push(wpSkinsShortcut.ny2122);
                ny2122 = true;
                //IventIndexCol++;
            }
            else if (wpSkins[wpS_id].ny2223 != "" && ny2223 == false) {
                IventSkinsId.push(wpSkins[wpS_id].ny2223);
                IventSkinsShort.push(wpSkinsShortcut.ny2223);
                ny2223 = true;
                //IventIndexCol++;
            }
            else if (wpSkins[wpS_id].sez1 != "" && sez1 == false) {
                IventSkinsId.push(wpSkins[wpS_id].sez1);
                IventSkinsShort.push(wpSkinsShortcut.sez1);
                sez1 = true;
                //IventIndexCol++;
            }
            else if (wpSkins[wpS_id].sez2 != "" && sez2 == false) {
                IventSkinsId.push(wpSkins[wpS_id].sez2);
                IventSkinsShort.push(wpSkinsShortcut.sez2);
                sez2 = true;
                //IventIndexCol++;
            }
            else if (wpSkins[wpS_id].sez3 != "" && sez3 == false) {
                IventSkinsId.push(wpSkins[wpS_id].sez3);
                IventSkinsShort.push(wpSkinsShortcut.sez3);
                sez3 = true;
                //IventIndexCol++;
            }
            
        }
            



            console.log("ffffffffffffff1");
            console.log(IventSkinsId);
            console.log(IventSkinsShort);
            console.log("ffffffffffffff2");

            for (let BtnIndexSkin = 0; BtnIndexSkin < IventSkinsId.length; BtnIndexSkin++) {
                let SkinRowBtn =  document.createElement('input');
                    SkinRowBtn.className = "SkinListButton";
                    SkinRowBtn.type = 'button';
                    SkinRowBtn.id = "moreskin"
                    SkinRowBtn.setAttribute('wpNumber',"_loadNum");
                    SkinRowBtn.value = IventSkinsShort[BtnIndexSkin];
                    SkinRowBtn.name = IventSkinsId[BtnIndexSkin];
                    
                    SkinRowBtn.setAttribute('onclick',"ChangeSkin(this)");
                    SkinPanel.append(SkinRowBtn);
                
            }
            //let SkinRowBtn =  document.createElement('input');
             //   SkinRowBtn.className = "SkinListButton";
            //    SkinRowBtn.type = 'button';
            //    //SkinRowBtn.name = resulted[_loadNum].skin_links[SkinId];
            //    SkinRowBtn.id = "moreskin"
            //   SkinRowBtn.setAttribute('wpNumber',"_loadNum");
                //SkinRowBtn.value = resulted[_loadNum].skin_name[SkinId];
                
            //    SkinRowBtn.setAttribute('onclick',"ChangeSkin(this)");
             //   SkinPanel.append(SkinRowBtn);
        
        //}
    }
    
    else if (resulted[_loadNum].skins == 1) {
        _Standartskin.name = _loadNum;
        SkinPanel.append(_Standartskin);


        
        
        
            let SkinRowBtn =  document.createElement('input');
                SkinRowBtn.className = "SkinListButton";
                SkinRowBtn.type = 'button';
                SkinRowBtn.id = "moreskin"
                SkinRowBtn.setAttribute('wpNumber',"_loadNum");
                //SkinRowBtn.name = resulted[_loadNum].skin_links;
                //SkinRowBtn.value = resulted[_loadNum].skin_name;
                for (let SkinSVP = 0; SkinSVP < wpSkins.length; SkinSVP++) {
                    if (resulted[_loadNum].numder == wpSkins[SkinSVP].name) {
                        if (wpSkins[SkinSVP].hell2019 != "") {
                            SkinRowBtn.value = wpSkinsShortcut.hell2019;
                            SkinRowBtn.name = wpSkins[SkinSVP].hell2019;
                        }
                        else if (wpSkins[SkinSVP].hell2020 != "") {
                            SkinRowBtn.value = wpSkinsShortcut.hell2020;
                            SkinRowBtn.name = wpSkins[SkinSVP].hell2020;
                        }
                        else if (wpSkins[SkinSVP].hell2021 != "") {
                            SkinRowBtn.value = wpSkinsShortcut.hell2021;
                            SkinRowBtn.name = wpSkins[SkinSVP].hell2021;
                        }
                        else if (wpSkins[SkinSVP].hell2022 != "") {
                            SkinRowBtn.value = wpSkinsShortcut.hell2022;
                            SkinRowBtn.name = wpSkins[SkinSVP].hell2022;
                        }
                        else if (wpSkins[SkinSVP].zombie != "") {
                            SkinRowBtn.value = wpSkinsShortcut.zombie;
                            SkinRowBtn.name = wpSkins[SkinSVP].zombie;
                        }
                        else if (wpSkins[SkinSVP].snow != "") {
                            SkinRowBtn.value = wpSkinsShortcut.snow;
                            SkinRowBtn.name = wpSkins[SkinSVP].snow;
                        }
                        else if (wpSkins[SkinSVP].may9_military != "") {
                            SkinRowBtn.value = wpSkinsShortcut.may9_military;
                            SkinRowBtn.name = wpSkins[SkinSVP].may9_military;
                        }
                        else if (wpSkins[SkinSVP].galo != "") {
                            SkinRowBtn.value = wpSkinsShortcut.galo;
                            SkinRowBtn.name = wpSkins[SkinSVP].galo;
                        }
                        else if (wpSkins[SkinSVP].ny2122 != "") {
                            SkinRowBtn.value = wpSkinsShortcut.ny2122;
                            SkinRowBtn.name = wpSkins[SkinSVP].ny2122;
                        }
                        else if (wpSkins[SkinSVP].ny2223 != "") {
                            SkinRowBtn.value = wpSkinsShortcut.ny2223;
                            SkinRowBtn.name = wpSkins[SkinSVP].ny2223;
                        }
                        else if (wpSkins[SkinSVP].sez1 != "") {
                            SkinRowBtn.value = wpSkinsShortcut.sez1;
                            SkinRowBtn.name = wpSkins[SkinSVP].sez1;
                        }
                        else if (wpSkins[SkinSVP].sez2 != "") {
                            SkinRowBtn.value = wpSkinsShortcut.sez2;
                            SkinRowBtn.name = wpSkins[SkinSVP].sez2;
                        }
                        else if (wpSkins[SkinSVP].sez3 != "") {
                            SkinRowBtn.value = wpSkinsShortcut.sez3;
                            SkinRowBtn.name = wpSkins[SkinSVP].sez3;
                        }
                        else {
                            alert("Ошибка 021ю.2 Сообщите администрации групы")
                        }
                    }
                    //console.log("kk" + resulted[_loadNum].numder + " " + wpSkins[SkinSVP].name);
        
                }
                SkinRowBtn.setAttribute('onclick',"ChangeSkin(this)");
                SkinPanel.append(SkinRowBtn);
        
    
    }

    else if (resulted[_loadNum].skins == 0) {
        SkinPanel.innerHTML = "<label class=\"SkinListButton\" style=\"color: var(--blue);text-align: center;\">Скины отсутствуют</label>";
    

}
}
function ChangeSkin(skinrowr) {
    let itemImage = document.getElementById("skin");
    if (skinrowr.id == "StandertModel") {
		itemImage.src = "../screenshots/"+resulted[skinrowr.name].numder+".png";
	} 
	else if (skinrowr.id != "StandertModel"){
		itemImage.src = "../screenshots/skins/"+skinrowr.name+".png";
	}
}


function back() {
    switch (saveBack) {
        case 1:
            document.getElementById("logo").innerHTML = "Справочник > Оружия";
            document.getElementById("viewList").style.display = "flex";
            document.getElementById('viewWeapon').style.display = "none";
            document.getElementById('iventArea').style.display = 'none';
            document.getElementById('helloArea').style.display = 'none';
            document.getElementById('typeArea').style.display = 'none';
            document.getElementById('topArea').style.display = 'flex';
            document.getElementById('WPSkinPanel').style.display = 'none';
            break;
        case 2:
            document.getElementById("logo").innerHTML = "Справочник > Оружия";
            document.getElementById("viewList").style.display = "flex";
            document.getElementById('viewWeapon').style.display = "none";
            document.getElementById('iventArea').style.display = 'flex';
            document.getElementById('helloArea').style.display = 'none';
            document.getElementById('typeArea').style.display = 'none';
            document.getElementById('topArea').style.display = 'none';
            document.getElementById('WPSkinPanel').style.display = 'none';
            break;
        case 3:
            
            document.getElementById("logo").innerHTML = "Справочник > Оружия";
            document.getElementById("viewList").style.display = "flex";
            document.getElementById('viewWeapon').style.display = "none";
            document.getElementById('topArea').style.display = 'none';
            document.getElementById('iventArea').style.display = 'none';
            document.getElementById('helloArea').style.display = 'none';
            document.getElementById('typeArea').style.display = 'flex';

            document.getElementById('WPSkinPanel').style.display = 'none';
            break;
        case 4:
            
            document.getElementById("logo").innerHTML = "Справочник > Оружия";
            document.getElementById("viewList").style.display = "flex";
            document.getElementById('viewWeapon').style.display = "none";
            document.getElementById('topArea').style.display = 'none';
            document.getElementById('iventArea').style.display = 'none';
            document.getElementById('helloArea').style.display = 'flex';
            document.getElementById('typeArea').style.display = 'none';
            document.getElementById('WPSkinPanel').style.display = 'none';
            break;
        

        default:
            break;
    }
}




var isLoadedSkins = false;
var wpSkins = [];
var wpSkinsShortcut = [];
function LoadTopXNRSkins() {
    if (isLoadedSkins != true) {
        xhr.open('GET', '../assets/wp_skins.json', false);
        xhr.send();
        text = JSON.parse(xhr.responseText);
        wpSkins = text.weaponskins;  
        wpSkinsShortcut = text.SezonShortcut[0];  
        isLoadedSkins = true;
    }
}
/*
function a(SearchS){
    LoadTopXNRSkins();
    console.log(wpSkins);
    console.log(wpSkinsShortcut);

    for (let sss = 0; sss < wpSkins.length; sss++) {
        switch (SearchS) {
            case "hell2019":
                console.log(wpSkins[sss].hell2019);
                break;
            case "hell2020":
                console.log(wpSkins[sss].hell2020);
                break;
            case "hell2021":
                console.log(wpSkins[sss].hell2021);
                break;
            case "hell2022":
                console.log(wpSkins[sss].hell2022);
                break;
            case "zombie":
                console.log(wpSkins[sss].zombie);
                break;
            case "snow":
                console.log(wpSkins[sss].snow);
                break;
            case "may9_military":
                console.log(wpSkins[sss].may9_military);
                break;
            case "galo":
                console.log(wpSkins[sss].galo);
                break;
            case "ny2122":
                console.log(wpSkins[sss].ny2122);
                break;
            case "ny2223":
                console.log(wpSkins[sss].hell2021);
                break;
            case "sez1":
                console.log(wpSkins[sss].hell2021);
                break;
            case "sez2":
                console.log(wpSkins[sss].hell2021);
                break;
            case "sez3":
                console.log(wpSkins[sss].hell2021);
                break;
            default:
                break;
        }
        
    }
}
*/