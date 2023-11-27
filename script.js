let activ_but=1;

function id_for_num(num){
     if(num==1) return "bt_main";
     if(num==2) return "bt_skil";
     if(num==3) return "bt_exmp";
     if(num==4) return "bt_galer";
     if(num==5) return "bt_contact";
     return '';
}
function say(num){
    if(num==1) {
        document.getElementById('contact').setAttribute("style", "display: none;");
        document.getElementById('ich').setAttribute("style", "display: none;");
        document.getElementById('work').setAttribute("style", "display: none;");
        document.getElementById('main').setAttribute("style", "display: inline;");
    }
     if(num==2) {
        document.getElementById('contact').setAttribute("style", "display: none;");
        document.getElementById('main').setAttribute("style", "display: none;");
        document.getElementById('work').setAttribute("style", "display: none;");
        document.getElementById('ich').setAttribute("style", "display: inline;");
    }
     if(num==3) {
        document.getElementById('ich').setAttribute("style", "display: none;");
        document.getElementById('main').setAttribute("style", "display: none;");
        document.getElementById('contact').setAttribute("style", "display: none;");
        document.getElementById('work').setAttribute("style", "display: inline;");
    }
     if(num==4) return "bt_galer";
     if(num==5) {
        document.getElementById('ich').setAttribute("style", "display: none;");
        document.getElementById('main').setAttribute("style", "display: none;");
        document.getElementById('work').setAttribute("style", "display: none;");
        document.getElementById('contact').setAttribute("style", "display: inline;");
    }
     return '';
}
function press(num){
    let id=id_for_num(activ_but);
    if(id!=''){
        let but=document.getElementById(id);
        but.style.textDecoration="none";
    }
    activ_but=num;
    id=id_for_num(activ_but);
    if(id!=''){
        let but=document.getElementById(id);
        but.style.textDecoration="underline";
        say(activ_but);
    }
}