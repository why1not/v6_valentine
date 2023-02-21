var xhr = new XMLHttpRequest();
xhr.open('GET', '../assets/data.json', false);
xhr.send();
var text = JSON.parse(xhr.responseText);
var resulted = text.list;

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




function standartSeach(tButton) {
    tButton.value = "Подождите.."
    let inZone = document.getElementById('inneredSeach');
    let headInZone = document.getElementById('inneredSeachHead');

    let index = 0; // нулевое Количество оружия ( не скинов! )
		while (index < 202) {
			let createOpt = document.createElement('option'); //Создаёться элемент списка
			createOpt.value = index; //значение Value присваиваеться = номер оружия
			createOpt.innerHTML = resulted[index].name; // в список вставляется название оружия
			
			inZone.insertBefore(createOpt, inZone.children[index]); //Элементы ижут по порядку

            let createOpt2 = document.createElement('option'); //Создаёться элемент списка
			createOpt2.value = index; //значение Value присваиваеться = номер оружия
			createOpt2.innerHTML = resulted[index].name; // в список вставляется название оружия

            headInZone.insertBefore(createOpt2, headInZone.children[index]);
			index = index + 1; //Берём следующее оружее
            console.log('asd');
		}
    tButton.value = "Стандартный cписок";
    document.getElementById('helloArea').style.display = "none";
    document.getElementById('StandartSeach').style.display = "flex";
    document.getElementById('weaponArea').style.display = "none";

}

function sotrByType(list) {
    var oldText = list.options[list.selectedIndex].text;
    list.options[list.selectedIndex].text = "Подождите..";
    var cartZone = document.getElementById('weaponArea');
    let headInZone = document.getElementById('inneredSeachHead');
    var type = String(list.value);
    cartZone.innerHTML = '';
    let index = 0; // нулевое Количество оружия ( не скинов! )
		while (index < 202) {
            let createOpt2 = document.createElement('option'); //Создаёться элемент списка
			createOpt2.value = index; //значение Value присваиваеться = номер оружия
			createOpt2.innerHTML = resulted[index].name; // в список вставляется название оружия

            headInZone.insertBefore(createOpt2, headInZone.children[index]);



            if (resulted[index].type == type) {
            
                
                let createCart =  document.createElement('div');
                createCart.className += "weaponCart";
                createCart.id = index;
                createCart.setAttribute('onclick',"GetWeapon(this)");
                cartZone.append(createCart);

                let createImg = document.createElement('img');
                createImg.src = "../screenshots/"+resulted[index].numder+".png";
                createImg.className += "imageOnCart";
                createCart.prepend(createImg);

                let createName = document.createElement('label');
                createName.className += "textOnCart";
                createName.innerText = resulted[index].name;
                createCart.append(createName);

                

                //<div class="weaponCart">
                        //<img src="q109_1.png" class="imageOnCart">
                        //<label class="textOnCart">Deagle</label>
                    //</div>
                    index = index + 1;
            } 
            else {
                index = index + 1;
            }
			//Берём следующее оружее
		}
        
        document.getElementById('helloArea').style.display = "none";
        document.getElementById('weaponArea').style.display = "flex";
        document.getElementById('StandartSeach').style.display = "none";

        list.options[list.selectedIndex].text = oldText;

}



function GetWeapon(obj) {
    document.getElementById("logo").innerText = "Загрузка...";
    document.getElementById('weaponArea').innerHTML = '';

    if (obj.tagName == "DIV" ) {
        numberWeapon = Number(obj.id);
    } 
    else if(obj.tagName == "SELECT"){
        numberWeapon = Number(obj.value);
    }
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

    
    
    
    document.getElementById('inneredSeachHead').children[numberWeapon].selected = true;












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
    
    

    document.getElementById("skin").src = "../screenshots/"+resulted[numberWeapon].numder+".png"




    
    document.getElementById('helloArea').style.display = "none";
    document.getElementById('StandartSeach').style.display = "none";
    document.getElementById('weaponArea').style.display = "none";
    document.getElementById("viewList").style.display = "none";
    document.getElementById("skinAreaList").style.display = "none";

    
    document.getElementById('buttonTime').style.display = "flex";
    document.getElementById("skinArea").style.display = "flex";
    document.getElementById('headSelect').style.display = "flex";
    document.getElementById("viewWeapon").style.display = "flex";
    document.getElementById("TimeButton").style.display = "block";

    document.getElementById("logo").innerText = "Справочник > "+ resulted[numberWeapon].name;

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


function skinList() {
    let ColSkins = Number(resulted[numberWeapon].skins);
    let inner = document.getElementById("innerSkin");
	//alert(ColSkins);
	if (ColSkins == 0) {
            inner.innerHTML = '<option disabled selected>Скинов нет</option>';
		}


    
	if (ColSkins == 1) {
		let SkinIndex = 0;
		while (SkinIndex < ( ColSkins + 1 )) {
			let createOpt = document.createElement('option');
			if (SkinIndex == 1){
				createOpt.value = "standartSkin";
				createOpt.selected = true;
				createOpt.innerHTML = resulted[numberWeapon].name;
				}
			else{
				createOpt.value = "OneSkin";
				createOpt.innerHTML = resulted[numberWeapon].skin_name;
				}
            inner.insertBefore(createOpt, inner.children[SkinIndex]);
			SkinIndex = SkinIndex +1;
			}
		}


    
	if (ColSkins > 1){ 
		let SkinIndex = 0;
		while (SkinIndex < ( ColSkins + 1 )) {
			let createOpt = document.createElement('option');
			if (SkinIndex == ColSkins){
				createOpt.value = "standartSkin";
				createOpt.selected = true;
				createOpt.innerHTML = resulted[numberWeapon].name;
				
				}
			else{
				createOpt.value = SkinIndex;
				createOpt.innerHTML = resulted[numberWeapon].skin_name[SkinIndex];
				}
            inner.insertBefore(createOpt, inner.children[SkinIndex]);
			SkinIndex = SkinIndex +1;
			}
		} 
	if (ColSkins > 4) {
		alert("Ошибка: Ошибка подсчёта скинов(4), или иная проблема. Обратитесь в группу.")
		}
    document.getElementById("skinArea").style.display = "none";
    document.getElementById("skinAreaList").style.display = "flex";
}


function ChangeSkin(list) {
    let itemImage = document.getElementById("skin");
    if (list.value == "standartSkin") {
		itemImage.src = "../screenshots/"+resulted[numberWeapon].numder+".png";
	} 
	else if (list.value == "OneSkin"){
		itemImage.src = "../screenshots/skins/"+resulted[numberWeapon].skin_links+".png";

	}
	else {
		itemImage.src = "../screenshots/skins/"+resulted[numberWeapon].skin_links[Number(list.value)]+".png";
		}
}

function calcTime(btn) {
    btn.value = "Подсчёт.."

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
	let headTimeKill = Math.trunc(1000*(60/q_speed*(Math.ceil((100+armBody)/((q_damage*armHead)*cofupdm))-1)));
	if (headTimeKill <= 0) { headTimeKill = "Ваншот"}
	document.getElementById('headTIME').innerText = headTimeKill+" мс";

	//тело
	document.getElementById('bodyNUM').innerText = Math.ceil((100+armBody)/q_damage*cofupdm);
	let bodyTimeKill = Math.trunc(1000*(60/q_speed*(Math.ceil((100+armBody)/q_damage*cofupdm)-1)));
	if (bodyTimeKill <= 0) { bodyTimeKill = "Ваншот"}
	document.getElementById('bodyTIME').innerText = bodyTimeKill+" мс";
	
	//руки (Предплечие)
	document.getElementById('stikNUM').innerText = Math.ceil((100+armBody)/((q_damage*0.9)*cofupdm));
	let armTimeKill = Math.trunc(1000*(60/q_speed*(Math.ceil((100+armBody)/((q_damage*0.9)*cofupdm)-1))));
	if (armTimeKill <= 0) { armTimeKill = "Ваншот"}
	document.getElementById('stikTIME').innerText = armTimeKill+" мс";
	
	//ноги (Ступня)
	document.getElementById('nogiNUM').innerText = Math.ceil((100+armBody)/((q_damage*0.4)*cofupdm));
	let nogiTimeKill = Math.trunc(1000*((60/q_speed)*(Math.ceil((100+armBody)/((q_damage*0.4)*cofupdm))-1)));
	if (nogiTimeKill <= 0) { nogiTimeKill = "Ваншот"}
	document.getElementById('nogiTIME').innerText = nogiTimeKill+" мс";














    
    btn.value = "Пересчитать таблицу"

    document.getElementById("TimeButton").style.display = "none";
    document.getElementById("TimePanel").style.display = "flex";
    document.getElementById("TimePanel").scrollIntoView()
}