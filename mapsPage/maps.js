var xhr = new XMLHttpRequest();

xhr.open('GET', './Tmaps/maps.json', false);
xhr.send();
var text = JSON.parse(xhr.responseText);
var resulted = text.maps;




var xhr2 = new XMLHttpRequest();
xhr2.open('GET', './Tmaps/settings.json', false);
xhr2.send();
text = JSON.parse(xhr2.responseText);

var settings = text.settings[0];
console.log(resulted.length);
//var tops;
var colMaps = resulted.length;

var isLoadBig = false;
var isLoadhead = false;


var isLoadAvtors = false;


var sizeCard = [];
let main_height = 25;
let main_width = 40;

let editSise = false;
let saveBack = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function standartSeach(tButton) {
    tButton.value = "Подождите.."
    
    let inZone = document.getElementById('inneredSeach');
    let headInZone = document.getElementById('inneredSeachHead');

    let index = 0; // нулевое Количество оружия ( не скинов! )
    if (isLoadBig == false || isLoadhead == false) {
        isLoadBig.innerHTML = "";
        isLoadhead.innerHTML = "";

		while (index < colMaps) {
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
    
    document.getElementById('lb_toSozd').style.display = "none";
    document.getElementById('sel_toSozd').style.display = "none";
    document.getElementById('Listew').style.display = "none";
    closer()
}

function sotrByType(list) {
    if (list.tagName == "INPUT" ) {
        type = String(list.id);
    } 
    else if(list.tagName == "SELECT"){
        type = String(list.value);
    }


    //var oldText = list.options[list.selectedIndex].text;
    //list.options[list.selectedIndex].text = "Подождите..";
    var cartZone = document.getElementById('weaponArea');
    let headInZone = document.getElementById('inneredSeachHead');
    //var type = String(list.value);
    cartZone.innerHTML = '';
    let index = 0; // нулевое Количество оружия ( не скинов! )
        
            while (index < colMaps) {
                if (isLoadhead == false) {
                let createOpt2 = document.createElement('option'); //Создаёться элемент списка
			    createOpt2.value = index; //значение Value присваиваеться = номер оружия
			    createOpt2.innerHTML = resulted[index].name; // в список вставляется название оружия

                headInZone.insertBefore(createOpt2, headInZone.children[index]);
        }
        



            if (type == resulted[index].maker) {
            
                
                let createCart =  document.createElement('div');
                createCart.className += "weaponCart";
                createCart.id = index;
                createCart.setAttribute('onclick',"GetMap(this)");
                cartZone.append(createCart);

                let createImg = document.createElement('img');
                createImg.src = "./Tmaps/"+resulted[index].folder+"/"+resulted[index].img[1]+".jpg";
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
            else if(type == "Все") {
                let createCart =  document.createElement('div');
                createCart.className += "weaponCart";
                createCart.id = index;
                createCart.setAttribute('onclick',"GetMap(this)");
                cartZone.append(createCart);

                let createImg = document.createElement('img');
                createImg.src = "./Tmaps/"+resulted[index].folder+"/"+resulted[index].img[1]+".jpg";
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
        
        if (editSise == true) {
            loadSize(editSise,sizeCard);
        }






        document.getElementById('helloArea').style.display = "none";
        document.getElementById('weaponArea').style.display = "flex";
        document.getElementById('StandartSeach').style.display = "none";
        document.getElementById('Listew').style.display = "none";
        isLoadhead = true;
        //list.options[list.selectedIndex].text = oldText;
        closer()
        
        document.getElementById('lb_toSozd').style.display = "none";
        document.getElementById('sel_toSozd').style.display = "none";
}




function GetMap(obj) {
    document.getElementById("logo").innerText = "Загрузка...";
    document.getElementById('imgZonePrev').innerHTML = '';

    if (obj.tagName == "DIV" ) {
        numberMap = Number(obj.id);
    } 
    else if(obj.tagName == "SELECT"){
        numberMap = Number(obj.value);
    }
    else if(obj.tagName == "DD"){
        numberMap = Number(obj.id);
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
    s_name = resulted[numberMap].name;
    s_number = resulted[numberMap].number;
    s_id = resulted[numberMap].id;
    s_maker = resulted[numberMap].maker;
    s_platform = resulted[numberMap].platform;
    

    //console.log(numberWeapon);

    //document.getElementById('damage').innerText= s_price;
    document.getElementById('damage_f').innerText= s_name;
    
    //document.getElementById('damage_f').innerText = q_dmf;
    document.getElementById('clip_f').innerHTML = s_id;
    
    //document.getElementById('clip').innerText = q_cl;
    document.getElementById('box_f').innerText = s_platform;
    
    
    document.getElementById('temp').innerText = s_maker;
    //document.getElementById('clip_f2').innerText = q_clf;
    
    
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
    
    let imgNum = 0;
    while (imgNum < resulted[numberMap].img.length) {
        let createimg =  document.createElement('img');
            createimg.className += "previwImage";
            createimg.id = resulted[numberMap].img[imgNum];
            createimg.src = "./Tmaps/"+resulted[numberMap].folder+"/"+resulted[numberMap].img[imgNum]+".jpg";
            document.getElementById('imgZonePrev').append(createimg);

        imgNum = imgNum + 1;
        
    }
    
    //document.getElementById("skin").src = "../skinSH/"+resulted[numberMap].skinCode+".png";


    
    isLoadhead = true;

    
    document.getElementById('helloArea').style.display = "none";
    document.getElementById('StandartSeach').style.display = "none";
    document.getElementById('weaponArea').style.display = "none";
    document.getElementById("viewList").style.display = "none";
    //document.getElementById("skinAreaList").style.display = "none";

    
    //document.getElementById('headSelect').style.display = "flex";
    document.getElementById("viewWeapon").style.display = "flex";
    //document.getElementById("innerSkin").innerHTML="";
    document.getElementById("logo").innerText = " < Назад"
    closer()
}


function GetRandomMap(){
    let rand = getRandomInt(colMaps);
    document.getElementById("randImg").src = "./Tmaps/"+resulted[rand].folder +"/"+resulted[rand].img[1]+".jpg";
    document.getElementById("randName").innerText = resulted[rand].name
    
    document.getElementById("RandomCard").setAttribute('onclick',"GetMap(this)");
    document.getElementById("RandomCard").id = rand;

    saveBack = 5;
}

let goother = 0;
function toRight(btn){
    goother = goother + 1;
    if(goother < resulted[numberMap].img.length){
            document.getElementById(resulted[numberMap].img[goother]).scrollIntoView();
            document.getElementById('toleft').style.display = "block";
        if(goother >= (resulted[numberMap].img.length - 1 )){
                btn.style.display = "none";
        }
    }
    else if(goother >= (resulted[numberMap].img.length - 1 )){
        btn.style.display = "none";
    }
    console.log("Дл Списка = "+resulted[numberMap].img.length);
    console.log("goos = "+goother);

}

function toLeft(btn){
    if(goother <= resulted[numberMap].img.length){
        if(goother == (resulted[numberMap].img.length + 1 )){
            goother = goother - 2;
            
        }
        goother = goother - 1;
        document.getElementById(resulted[numberMap].img[goother]).scrollIntoView();
        document.getElementById('toright').style.display = "block";
        
        if(goother <= 0){
            btn.style.display = "none";
        }
    }
    
    console.log("Дл Списка = "+resulted[numberMap].img.length);
    console.log("goos = "+goother);
}


function closer() {
    document.getElementById("floatFullListPanel").style.display = 'none';
}
function scroler(val) {
    console.log(val.value);
    //let makeid = String(val+"_ide");
    let object = document.getElementById(String(val.value+ "_ide"));
    object.scrollIntoView()
}

function orTeam() {document.getElementsByName("Players")[0].options[0].selected = true;}
function orPlaer() {document.getElementsByName("Teams")[0].options[0].selected = true;}

function openSettingsCol(btne) {
    
    switch (btne.id) {
        case "col1":
            document.getElementsByName("col1pan")[0].className = "JsOnClickCollection SearchColPanel";
            if(document.getElementsByName("col2pan")[0].className == "JsOnClickCollection SearchColPanel"){
                document.getElementsByName("col2pan")[0].className = document.getElementsByName("col2pan")[0].className.replace('JsOnClickCollection SearchColPanel',''); ;
            }
            
            break;
        case "col2":
            document.getElementsByName("col2pan")[0].className = "JsOnClickCollection SearchColPanel";
            if(document.getElementsByName("col1pan")[0].className == "JsOnClickCollection SearchColPanel"){
                document.getElementsByName("col1pan")[0].className = document.getElementsByName("col1pan")[0].className.replace('JsOnClickCollection SearchColPanel',''); ;
            }
            break;
    
        default:
            break;
    }



}






















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
    console.table(sizeCard);
}





function loadAvtors() {
    if (isLoadAvtors == false) {
        let panelTeams = document.getElementById('Teams');
        let panelPlayer = document.getElementById('Players')
        for (let _avtorIndex = 0; _avtorIndex < settings.teams.length; _avtorIndex++) {
            let dp_input =  document.createElement('input');
            dp_input.type = "button";
            dp_input.className = "dp_button";
            dp_input.id = settings.teams[_avtorIndex];
            dp_input.value = settings.teams[_avtorIndex];
            dp_input.setAttribute('onclick',"GetAvtorsMaps(this)");
            panelTeams.prepend(dp_input);
        };
        
        for (let _avtorIndex = 0; _avtorIndex < settings.player.length; _avtorIndex++) {
            let dp_input =  document.createElement('input');
            dp_input.type = "button";
            dp_input.className = "dp_button";
            dp_input.id = settings.player[_avtorIndex];
            dp_input.value = settings.player[_avtorIndex];
            dp_input.setAttribute('onclick',"GetAvtorsMaps(this)");
            panelPlayer.prepend(dp_input);
        }

        isLoadAvtors = true;
    }
    
}

function GetAvtorsMaps(presser) {
    let zone = document.getElementById('weaponArea');
    zone.innerHTML = '';
    let creator = String(presser.id);
    for (let mapInd = 0; mapInd < resulted.length; mapInd++) {
        if (creator == resulted[mapInd].maker) {
                let createCart =  document.createElement('div');
                createCart.className += "weaponCart";
                createCart.id = mapInd;
                createCart.setAttribute('onclick',"GetMap(this)");
                zone.append(createCart);

                let createImg = document.createElement('img');
                createImg.src = "./Tmaps/"+resulted[mapInd].folder+"/"+resulted[mapInd].img[1]+".jpg";
                createImg.className += "imageOnCart";
                createCart.prepend(createImg);

                let createName = document.createElement('label');
                createName.className += "textOnCart";
                createName.innerText = resulted[mapInd].name;
                createCart.append(createName);
            
        }
        
    }
    
    if (editSise == true) {
        loadSize(editSise,sizeCard);
    }
    
    document.getElementById("viewList").style.display = "flex";
    document.getElementById('viewWeapon').style.display = "none";
    document.getElementById('helloArea').style.display = "none";
    document.getElementById('Listew').style.display = "none";
    document.getElementById('floatFullListPanel').style.display = "none";
    document.getElementById('weaponArea').style.display = "flex";

    saveBack = 1;
}

function AllMaps() {
    
    var setting = settings.avtors;
    console.log(setting);
    avtors_index = 0;
    maps_index = 0;
    var ListZone = document.getElementById('Listew');
    ListZone.innerHTML = " ";
    

    let createList =  document.createElement('div');
    createList.className += "AvtorArea";
    ListZone.append(createList);
    let createLabel = document.createElement('div');
    createLabel.className += "Labelix";
    createLabel.id = String(resulted[maps_index].maker+"_ide");
    //createName.className += "textOnCart";
    createLabel.innerText = resulted[avtors_index].maker;
    createList.append(createLabel);
    let createZone = document.createElement('div');
    createZone.className += "CardZones";
    //createName.className += "textOnCart";
    createList.append(createZone);




    while (avtors_index < setting.length && maps_index < resulted.length) {

        if(setting[avtors_index] == resulted[maps_index].maker){
            //console.log("индекс автора:"+avtors_index+" Карта:"+resulted[maps_index].name);
            let createCart =  document.createElement('div');
            createCart.className += "weaponCart";
            createCart.id = maps_index;
            createCart.setAttribute('onclick',"GetMap(this)");
            createZone.append(createCart);

            let createImg = document.createElement('img');
            createImg.src = "./Tmaps/"+resulted[maps_index].folder+"/"+resulted[maps_index].img[1]+".jpg";
            createImg.className += "imageOnCart";
            createCart.prepend(createImg);

            let createName = document.createElement('label');
            createName.className += "textOnCart";
            createName.innerText = resulted[maps_index].name;
            createCart.append(createName);
            



            /*
                let createCart =  document.createElement('div');
                createCart.className += "weaponCart";
                createCart.id = index;
                createCart.setAttribute('onclick',"GetMap(this)");
                cartZone.append(createCart);

                let createImg = document.createElement('img');
                createImg.src = "./Tmaps/"+resulted[index].folder+"/"+resulted[index].img[1]+".jpg";
                createImg.className += "imageOnCart";
                createCart.prepend(createImg);

                let createName = document.createElement('label');
                createName.className += "textOnCart";
                createName.innerText = resulted[index].name;
                createCart.append(createName);
            */




        }
        else{
            //console.log("Автор не совпал с картой, автор ++ индекс карт 0");
            avtors_index = avtors_index + 1;

            createList =  document.createElement('div');
            createList.className += "AvtorArea";
            ListZone.append(createList);

            createLabel = document.createElement('div');
            createLabel.className += "Labelix";
            createLabel.id = String(resulted[maps_index].maker + "_ide");
            //createName.className += "textOnCart";
            createLabel.innerText = resulted[maps_index].maker;
            createList.append(createLabel);


            createZone = document.createElement('div');
            createZone.className += "CardZones";
            //createName.className += "textOnCart";
            createList.append(createZone);
            maps_index = maps_index - 1;

        }




        maps_index = maps_index + 1;


        //avtors_index++;
        
    }
    //document.getElementById("floatFullListPanel").style.display = 'flex';
    
    document.getElementById("viewList").style.display = "flex";
    document.getElementById('viewWeapon').style.display = "none";
    document.getElementById('helloArea').style.display = "none";
    document.getElementById('Listew').style.display = "flex";
    document.getElementById('floatFullListPanel').style.display = "none";
    document.getElementById('weaponArea').style.display = "none";
    

    saveBack = 2;
}
function AllMapsAndTeam() {
    var setting = settings[0].avtors;
    console.log(setting);
    avtors_index = 0;
    maps_index = 0;
    var ListZone = document.getElementById('Listew');
    ListZone.innerHTML = " ";
    

    let createList =  document.createElement('div');
    createList.className += "AvtorArea";
    ListZone.append(createList);
    let createLabel = document.createElement('div');
    createLabel.className += "Labelix";
    createLabel.id = String(resulted[maps_index].maker+"_ide");
    //createName.className += "textOnCart";
    createLabel.innerText = resulted[avtors_index].maker;
    createList.append(createLabel);
    let createZone = document.createElement('div');
    createZone.className += "CardZones";
    //createName.className += "textOnCart";
    createList.append(createZone);




    while (avtors_index < setting.length && maps_index < resulted.length) {

        if(setting[avtors_index] == resulted[maps_index].maker){
            //console.log("индекс автора:"+avtors_index+" Карта:"+resulted[maps_index].name);
            let createCart =  document.createElement('div');
            createCart.className += "weaponCart";
            createCart.id = maps_index;
            createCart.setAttribute('onclick',"GetMap(this)");
            createZone.append(createCart);

            let createImg = document.createElement('img');
            createImg.src = "./Tmaps/"+resulted[maps_index].folder+"/"+resulted[maps_index].img[1]+".jpg";
            createImg.className += "imageOnCart";
            createCart.prepend(createImg);

            let createName = document.createElement('label');
            createName.className += "textOnCart";
            createName.innerText = resulted[maps_index].name;
            createCart.append(createName);
            



            /*
                let createCart =  document.createElement('div');
                createCart.className += "weaponCart";
                createCart.id = index;
                createCart.setAttribute('onclick',"GetMap(this)");
                cartZone.append(createCart);

                let createImg = document.createElement('img');
                createImg.src = "./Tmaps/"+resulted[index].folder+"/"+resulted[index].img[1]+".jpg";
                createImg.className += "imageOnCart";
                createCart.prepend(createImg);

                let createName = document.createElement('label');
                createName.className += "textOnCart";
                createName.innerText = resulted[index].name;
                createCart.append(createName);
            */




        }
        else{
            //console.log("Автор не совпал с картой, автор ++ индекс карт 0");
            avtors_index = avtors_index + 1;

            createList =  document.createElement('div');
            createList.className += "AvtorArea";
            ListZone.append(createList);

            createLabel = document.createElement('div');
            createLabel.className += "Labelix";
            createLabel.id = String(resulted[maps_index].maker + "_ide");
            //createName.className += "textOnCart";
            createLabel.innerText = resulted[maps_index].maker;
            createList.append(createLabel);


            createZone = document.createElement('div');
            createZone.className += "CardZones";
            //createName.className += "textOnCart";
            createList.append(createZone);
            maps_index = maps_index - 1;

        }




        maps_index = maps_index + 1;


        //avtors_index++;
        
    }
    //document.getElementById("floatFullListPanel").style.display = 'flex';
    
    document.getElementById("viewList").style.display = "flex";
    document.getElementById('viewWeapon').style.display = "none";
    document.getElementById('helloArea').style.display = "none";
    document.getElementById('Listew').style.display = "none";
    document.getElementById('floatFullListPanel').style.display = "block";
    document.getElementById('weaponArea').style.display = "none";
    

    saveBack = 3;
}

function FullList() {
    var setting = text.settings[0].avtors;
    console.log(setting);
    avtors_index = 0;
    maps_index = 0;
    var ListZone = document.getElementById('floatFullListPanel_Zone');
    ListZone.innerHTML = " ";
    

    let createList =  document.createElement('dl');
    ListZone.append(createList)
    let createLabel = document.createElement('dt');
    //createName.className += "textOnCart";
    createLabel.innerText = resulted[avtors_index].maker;
    createList.append(createLabel);




    while (avtors_index < setting.length && maps_index < resulted.length) {

        if(setting[avtors_index] == resulted[maps_index].maker){
            console.log("индекс автора:"+avtors_index+" Карта:"+resulted[maps_index].name);
            
            let createPlane = document.createElement('dd');
            createPlane.innerText = resulted[maps_index].name;
            createPlane.id = maps_index;
            createPlane.setAttribute('onclick',"GetMap(this)");
            createList.prepend(createPlane);




        }
        else{
            console.log("Автор не совпал с картой, автор ++ индекс карт 0");
            avtors_index = avtors_index + 1;

            createList =  document.createElement('dl');
            ListZone.append(createList);

            createLabel = document.createElement('dt');
            //createName.className += "textOnCart";
            createLabel.innerText = resulted[maps_index].maker;
            createList.append(createLabel);
            maps_index = maps_index -1;

        }




        maps_index = maps_index + 1;


        //avtors_index++;
        
    }
    document.getElementById("viewList").style.display = "flex";
    document.getElementById('viewWeapon').style.display = "none";
    document.getElementById('helloArea').style.display = "none";
    document.getElementById('Listew').style.display = "none";
    document.getElementById('floatFullListPanel').style.display = "block";
    document.getElementById('weaponArea').style.display = "none";

    saveBack = 4;
}

function back() {
    switch (saveBack) {
        case 1:
            document.getElementById("logo").innerHTML = "Справочник > Карты";
            document.getElementById("viewList").style.display = "flex";
            document.getElementById('viewWeapon').style.display = "none";
            document.getElementById('helloArea').style.display = "none";
            document.getElementById('Listew').style.display = "none";
            document.getElementById('floatFullListPanel').style.display = "none";
            document.getElementById('weaponArea').style.display = "flex";
            break;
        case 2:
            
            document.getElementById("logo").innerHTML = "Справочник > Карты";
            document.getElementById("viewList").style.display = "flex";
            document.getElementById('viewWeapon').style.display = "none";
            document.getElementById('helloArea').style.display = "none";
            document.getElementById('Listew').style.display = "flex";
            document.getElementById('floatFullListPanel').style.display = "none";
            document.getElementById('weaponArea').style.display = "none";
            break;
        case 3:
            document.getElementById("logo").innerHTML = "Справочник > Карты";
            document.getElementById("viewList").style.display = "flex";
            document.getElementById('viewWeapon').style.display = "none";
            document.getElementById('helloArea').style.display = "none";
            document.getElementById('Listew').style.display = "none";
            document.getElementById('floatFullListPanel').style.display = "block";
            document.getElementById('weaponArea').style.display = "none";
            break;
        case 4:
            document.getElementById("logo").innerHTML = "Справочник > Карты";
            document.getElementById("viewList").style.display = "flex";
            document.getElementById('viewWeapon').style.display = "none";
            document.getElementById('helloArea').style.display = "none";
            document.getElementById('Listew').style.display = "none";
            document.getElementById('floatFullListPanel').style.display = "block";
            document.getElementById('weaponArea').style.display = "none";
            break;
        case 5:
            document.getElementById("logo").innerHTML = "Справочник > Карты";
            document.getElementById("viewList").style.display = "flex";
            document.getElementById('viewWeapon').style.display = "none";
            document.getElementById('helloArea').style.display = "flex";
            document.getElementById('Listew').style.display = "none";
            document.getElementById('floatFullListPanel').style.display = "none";
            document.getElementById('weaponArea').style.display = "none";
            break;
    
        default:
            break;
    }
}