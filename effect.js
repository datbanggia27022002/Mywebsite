var i=0;
var m=0;
var n=0;
var p=0;
var q=0;
var z=0;
var vid=document.getElementById("section-video");
var sound=document.getElementById("section-sound");
var noiDung1="Chịu khó đọc hết nhé  đây là công sức ngày tháng vật vã mấy tháng nay mà bé Đạt đã mày mò để chúc mừng sinh nhật chị đấy.";
var noiDung2="Hôm nay ngày 16/8/2021 , một ngày đầy nắng và gió !Đây cũng chính là ngày mà đúng 20 năm về trước một Thiên Thần mở mắt chào đời Để rồi 20 năm sau Thiên Thần ấy giờ đây đã trở thành 1 người con gái dễ thương, xinh xắn mà còn tốt bụng nữa chứ !!!";
var noiDung3="Nhân Dịp Này em gửi lời chúc mừng sinh nhật đến chị, chúc chị luôn thành công và gặp nhiều may mắn trong cuộc sống nhé! Hí Hí!!!!";
var noiDung4=" em cũng muốn viết nhiều lắm,nhưng mà em nhạt lắm nên chả nghĩ ra điều gì cả ý.";
var noiDung5="Món quà này, riêng Nó chẳng có ý nghĩa gì cả, nhưng mà cũng là tấm lòng vô giá  của em gửi đến chị thôi :))). “Happy birthday to chị Thúy”";
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
setTimeout(videoappear,68000);
document.getElementById('image-gift').setAttribute("id","disappear");
}




