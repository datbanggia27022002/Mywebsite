var i=0;
var m=0;
var n=0;
var p=0;
var q=0;
var z=0;
var vid=document.getElementById("section-video");
var sound=document.getElementById("section-sound");
var noiDung1="Hi chị Thúy,là bé Đạt của chị nè 😛😛😛.Chịu khó đọc hết nhé  đây là công sức ngày tháng vật vã mấy tháng nay mà bé Đạt đã mày mò để chúc mừng sinh nhật chị đấy *♫♫*. • . ☆ ...";
var noiDung2="Hôm nay ngày 16/8/2021 ,tất cả những người sinh ra vào ngày này 20 năm trước đều vô cùng tuyệt vời nhưng có lẽ đối với em chị Thúy là người tuyệt vời nhất đấy 😍😍😍";
var noiDung3="Vì vậy nên ngày hôm nay hãy cho em xem nụ cười tuyệt vời trong ngày sinh nhật của chị nè (¯`v´¯)😝😝😝😝";
var noiDung4=" CHÚC MỪNG SINH NHẬT CHỊ ✖‿✖!!!";
var noiDung5="🎂";
//var noiDung6="520 <3";
var tocdo=70;
function hieuungdanhchu(){
    if(i<noiDung1.length){
        document.getElementById("section-first").innerHTML+=noiDung1.charAt(i);
        i++;
        setTimeout(hieuungdanhchu,tocdo);
    }

}

function hieuungdanhchu1(){
    if(m<noiDung2.length){
        document.getElementById("section-second").innerHTML+=noiDung2.charAt(m);
        m++;
        setTimeout(hieuungdanhchu1,tocdo);
    }

}

function hieuungdanhchu3(){
    if(n<noiDung3.length){
        document.getElementById("section-third").innerHTML+=noiDung3.charAt(n);
        n++;
        setTimeout(hieuungdanhchu3,tocdo);
    }

}

function hieuungdanhchu4(){
    if(p<noiDung4.length){
        document.getElementById("section-fourth").innerHTML+=noiDung4.charAt(p);
        p++;
        setTimeout(hieuungdanhchu4,tocdo);
    }

}

function hieuungdanhchu5(){
    if(q<noiDung5.length){
        document.getElementById("section-fifth").innerHTML+=noiDung5.charAt(q);
        q++;
        setTimeout(hieuungdanhchu5,tocdo);
    }

}
function hieuungdanhchu6(){
    if(z<noiDung6.length){
        document.getElementById("section-sixth").innerHTML+=noiDung6.charAt(z);
        z++;
        setTimeout(hieuungdanhchu6,tocdo);
    }

}

function videoappear(){
    vid.play();
    document.getElementById('video').style.display="block";
    document.getElementById('section-start1').style.opacity=1;
    
    
    
}

function playvideo(){
    
    sound.play();
    hieuungdanhchu();
    document.getElementById('section-start').setAttribute("id","section-start1");
    setTimeout(hieuungdanhchu1,(tocdo*noiDung1.length)*1.5);
setTimeout(hieuungdanhchu3,(tocdo*noiDung1.length+tocdo*noiDung2.length)*1.4);
setTimeout(hieuungdanhchu4,(tocdo*noiDung1.length+tocdo*noiDung2.length+tocdo*noiDung3.length)*1.3+1000);
setTimeout(hieuungdanhchu5,(tocdo*noiDung1.length+tocdo*noiDung2.length+tocdo*noiDung3.length+tocdo*noiDung4.length)*1.3);
//setTimeout(hieuungdanhchu6,(tocdo*noiDung1.length+tocdo*noiDung2.length+tocdo*noiDung3.length+tocdo*noiDung4.length+tocdo*noiDung5.length)*1.3);
///*setTimeout(*/document.getElementById('section-start').style.display="none"/*,10000);*/
setTimeout(videoappear,45000);
document.getElementById('image-gift').setAttribute("id","disappear");
}




