var xhr = new XMLHttpRequest();
xhr.open('GET', '../assets/skins.json', false);
xhr.send();
var text = JSON.parse(xhr.responseText);
var resulted = text.Skins;
var s_name = "";
var s_number = "";
var s_skinCode = "";
var s_price = "";
var s_claimBust = "";
var s_seria = "";
var s_type = "";
var s_resistBust = "";
var s_bustDm = "";
var s_bustWeapon = "";
console.log(resulted.length);
//var tops;
var colSkins = resulted.length;

var isLoadBig = false;
var isLoadhead = false;


let saveBack = 0;


function standartSeach(tButton) {
    tButton.value = "Подождите.."
    
    let inZone = document.getElementById('inneredSeach');
    let headInZone = document.getElementById('inneredSeachHead');

    let index = 0; // нулевое Количество оружия ( не скинов! )
    if (isLoadBig == false || isLoadhead == false) {
        isLoadBig.innerHTML = "";
        isLoadhead.innerHTML = "";

		while (index < colSkins) {
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
        isLoadBig = true;
        isLoadhead = true;
    }
    
    tButton.value = "Стандартный cписок";
    document.getElementById('helloArea').style.display = "none";
    document.getElementById('StandartSeach').style.display = "flex";
    document.getElementById('weaponArea').style.display = "none";

}






function GetSkin(obj) {
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
        //console.log("12311gggggg");
    }
    /*
    s_name
    s_number
    s_skinCode
    s_price
    s_claimBust
    s_seria
    s_type
    s_resistBust
    s_bustDm
    s_bustWeapon
    */
    let damageString = "";
    s_name = resulted[numberWeapon].name;
    s_number = resulted[numberWeapon].number;
    s_price = resulted[numberWeapon].price;
    s_claimBust = resulted[numberWeapon].claimBust;
    s_seria = resulted[numberWeapon].seria;
    
    s_type = resulted[numberWeapon].type;
    if (s_claimBust == "Да") {
        s_resistBust = resulted[numberWeapon].resistBust;
        s_bustDm = resulted[numberWeapon].bustDm;
        s_bustWeapon = resulted[numberWeapon].bustWeapon;
        if (s_bustDm == "Нет") {
            damageString = "Нет доп. свойств"
        } else {
            damageString = "Даёт +"+s_bustDm+" к: "+s_bustWeapon;
        }
        
    } else {
        s_resistBust = "Нет доп. защиты";
        damageString = "Нет доп. свойств";
    }


    
    
    //console.log(numberWeapon);
    //document.getElementById('inneredSeachHead').children[numberWeapon].selected = true;












    //document.getElementById('damage').innerText= s_price;
    document.getElementById('damage_f').innerText= s_name;
    
    //document.getElementById('damage_f').innerText = q_dmf;
    document.getElementById('clip_f').innerHTML = s_price;
    
    //document.getElementById('clip').innerText = q_cl;
    document.getElementById('box_f').innerText = s_seria;
    
    
    document.getElementById('temp').innerText = s_type;
    //document.getElementById('clip_f2').innerText = q_clf;
    
    
    document.getElementById('range').innerText = s_resistBust;
    //document.getElementById('box2').innerText = q_bx;
    
    
    document.getElementById('reload').innerText = damageString;
    //document.getElementById('box_f2').innerText = q_bxf;
    
    //document.getElementById('temp').innerText = q_tm;
    //document.getElementById('temp2').innerText = q_tm;
    //document.getElementById('temp3').innerText = q_tm;
    //document.getElementById('temp4').innerText = q_tm;
    
    
    //document.getElementById('range').innerText = q_rn;
    //document.getElementById('range2').innerText = q_rn;
    //document.getElementById('range3').innerText = q_rn;
    //document.getElementById('range4').innerText = q_rn;
    
    
    //document.getElementById('reload').innerText = q_re;
    //document.getElementById('reload2').innerText = q_re;
    //document.getElementById('reload3').innerText = q_re;
    
    

    //document.getElementById('price').innerText = q_pr;
    //document.getElementById('type').innerText = q_tp;
    //document.getElementById('type_dm').innerText = q_dtp;
    //document.getElementById('serias').innerText = q_se;
    
    

    document.getElementById("skin").src = "../skinSH/"+resulted[numberWeapon].skinCode+".png";


    
    isLoadhead = true;

    
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

    
    //document.getElementById("TimeButton").style.display = "block";
    //LoadSkin();
    
    document.getElementById("logo").innerText = " < Назад"

}












function opentoppanel(){
    document.getElementById("TopPanelSettings").style.display = "flex";
    
    document.getElementById('WPSkinPanel').style.display = 'none';
}
function extiTopPanel() {
    document.getElementById("TopPanelSettings").style.display = "none";
    
    //document.getElementById('StandartSeach').style.display = "none";
}

/*
function sotrByType(list) {
    var oldText = list.options[list.selectedIndex].text;
    list.options[list.selectedIndex].text = "Подождите..";
    var cartZone = document.getElementById('weaponArea');
    //let headInZone = document.getElementById('inneredSeachHead');
    //var type = String(list.value);
    //cartZone.innerHTML = '';
    let index = 0; // нулевое Количество оружия ( не скинов! )
        
            while (index < colSkins) {
                if (isLoadhead == false) {
            let createOpt2 = document.createElement('option'); //Создаёться элемент списка
			createOpt2.value = index; //значение Value присваиваеться = номер оружия
			createOpt2.innerHTML = resulted[index].name; // в список вставляется название оружия

            headInZone.insertBefore(createOpt2, headInZone.children[index]);
        }
        



            if (type == resulted[index].seria) {
            
                
                let createCart =  document.createElement('div');
                createCart.className += "weaponCart";
                createCart.id = index;
                createCart.setAttribute('onclick',"GetSkin(this)");
                cartZone.append(createCart);

                let createImg = document.createElement('img');
                createImg.src = "../skinSH/"+resulted[index].skinCode+".png";
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
            else if(type == "Всё") {
                let createCart =  document.createElement('div');
                createCart.className += "weaponCart";
                createCart.id = index;
                createCart.setAttribute('onclick',"GetSkin(this)");
                cartZone.append(createCart);

                let createImg = document.createElement('img');
                createImg.src = "../skinSH/"+resulted[index].skinCode+".png";
                createImg.className += "imageOnCart";
                createCart.prepend(createImg);

                let createName = document.createElement('label');
                createName.className += "textOnCart";
                createName.innerText = resulted[index].name;
                createCart.append(createName);
                index = index + 1;
            }
            else  {
                index = index + 1;
            }
			//Берём следующее оружее
		}
        
        document.getElementById('helloArea').style.display = "none";
        document.getElementById('weaponArea').style.display = "flex";
        document.getElementById('StandartSeach').style.display = "none";
        
        isLoadhead = true;
        list.options[list.selectedIndex].text = oldText;

}
*/
function GetIventWP(IventButton) {
    //var type = String(list.value);
    let type = IventButton.id;
    //if (IsLoadIventList != true) {
    //    xhr.open('GET', '../assets/tops.json', false);
    //    xhr.send();
    //    text = JSON.parse(xhr.responseText);
    //    load_ivent = text.ivent[0];
    //    IsLoadIventList = true;
    //}

    let loadWpList = "";
    let inZoneIvent = document.getElementById('IV_Zone');
    inZoneIvent.innerHTML = '';
    
    var cartZone = document.getElementById('weaponArea');
    











    for (let index = 0; index < colSkins; index++) {
        
        
    
        if (type == resulted[index].seria) {
                
                    
            let IventCard =  document.createElement('div');
                IventCard.className = "weaponCart";
                IventCard.id = index;
                IventCard.setAttribute('onclick',"GetSkin(this)");
                inZoneIvent.append(IventCard);

            let IV_image = document.createElement('img');
                IV_image.src = "../skinSH/"+resulted[index].skinCode+".png"
                IV_image.className = "imageOnCart";
                IventCard.prepend(IV_image);

            let IV_name = document.createElement('label');
                IV_name.className = "textOnCart";
                IV_name.innerText = resulted[index].name;
                IventCard.append(IV_name);

            

            //<div class="weaponCart">
                    //<img src="q109_1.png" class="imageOnCart">
                    //<label class="textOnCart">Deagle</label>
                //</div>
                index = index + 1;
        } 
        else if(type == "Всё") {
            let IventCard =  document.createElement('div');
                IventCard.className = "weaponCart";
                IventCard.id = index;
                IventCard.setAttribute('onclick',"GetSkin(this)");
                inZoneIvent.append(IventCard);

            let IV_image = document.createElement('img');
                IV_image.src = "../skinSH/"+resulted[index].skinCode+".png"
                IV_image.className = "imageOnCart";
                IventCard.prepend(IV_image);

            let IV_name = document.createElement('label');
                IV_name.className = "textOnCart";
                IV_name.innerText = resulted[index].name;
                IventCard.append(IV_name);
            index = index + 1;
        }
        else  {
            index = index + 1;
        }
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






function search(TextInput) {
    let text = TextInput.value.toLowerCase();
    let _weaponName = [];
    for (let sindex = 0; sindex < colSkins; sindex++) {
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
        if (matchingWords.length == colSkins) {
            zone.innerHTML = "";
        } 
        else {
            zone.innerHTML = "";
            for (let good_index = 0; good_index < matchingWords.length; good_index++) {
                let createGoodRes =  document.createElement('label');
                createGoodRes.className = "inres";
                createGoodRes.id = _MW_RES_INDEX[good_index];
                createGoodRes.setAttribute('onclick',"GetSkin(this)");
                createGoodRes.innerHTML = String(matchingWords[good_index]) +"<span>"+resulted[_MW_RES_INDEX[good_index]].type+"</span>";
                zone.append(createGoodRes);
                
            
            }
        }
        
    }
    
    
    
    //console.log(matchingWords.length);
    
    saveBack = 4;
}




function back() {
    switch (saveBack) {
        case 1:
            document.getElementById("logo").innerHTML = "Справочник > Cкины";
            document.getElementById("viewList").style.display = "flex";
            document.getElementById('viewWeapon').style.display = "none";
            document.getElementById('iventArea').style.display = 'none';
            document.getElementById('helloArea').style.display = 'none';
            document.getElementById('typeArea').style.display = 'none';
            document.getElementById('topArea').style.display = 'flex';
            document.getElementById('WPSkinPanel').style.display = 'none';
            break;
        case 2:
            document.getElementById("logo").innerHTML = "Справочник > Cкины";
            document.getElementById("viewList").style.display = "flex";
            document.getElementById('viewWeapon').style.display = "none";
            document.getElementById('iventArea').style.display = 'flex';
            document.getElementById('helloArea').style.display = 'none';
            document.getElementById('typeArea').style.display = 'none';
            document.getElementById('topArea').style.display = 'none';
            document.getElementById('WPSkinPanel').style.display = 'none';
            break;
        case 3:
            
            document.getElementById("logo").innerHTML = "Справочник > Cкины";
            document.getElementById("viewList").style.display = "flex";
            document.getElementById('viewWeapon').style.display = "none";
            document.getElementById('topArea').style.display = 'none';
            document.getElementById('iventArea').style.display = 'none';
            document.getElementById('helloArea').style.display = 'none';
            document.getElementById('typeArea').style.display = 'flex';

            document.getElementById('WPSkinPanel').style.display = 'none';
            break;
        case 4:
            
            document.getElementById("logo").innerHTML = "Справочник > Cкины";
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