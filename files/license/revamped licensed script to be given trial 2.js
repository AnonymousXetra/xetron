var ckBox=document.querySelector("#ckBox"),ckAcptBtn=document.querySelector("#ckAcptBtn"),ckErrMes="Cookie can't be set! Please unblock this site from the cookie setting of your browser.";if(null!=ckBox){ckAcptBtn.onclick=()=>{document.cookie="Cookies-Consent=Accepted; max-age=2592000; path=/",document.cookie?ckBox.classList.add("acptd"):alert(ckErrMes)};let e=document.cookie.indexOf("Cookies-Consent=Accepted");-1!=e?ckBox.classList.add("hidden"):ckBox.classList.remove("hidden")}
for(var preClick=document.getElementsByTagName("pre"),i=0;i<preClick.length;i++)preClick[i].addEventListener("dblclick",function(){var e=getSelection(),o=document.createRange();o.selectNodeContents(this),e.removeAllRanges(),e.addRange(o),document.execCommand("copy"),e.removeAllRanges(),document.querySelector("#toastNotif").innerHTML="<span>Copied to clipboard!</span>"},!1);
var music = document.querySelector('.music-element')
var playBtn = document.querySelector('.play')
var seekbar = document.querySelector('.seekbar')
var currentTime = document.querySelector('.current-time')
var duration = document.querySelector('.duration')
function handlePlay() {
    if (music.paused) {
        music.play();
        playBtn.className = 'pause'
        playBtn.innerHTML = '<i class="material-icons">pause</i>'
    } else {
        music.pause();
        playBtn.className = 'play'
        playBtn.innerHTML = '<i class="material-icons">play_arrow</i>'
    }
    music.addEventListener('ended', function () {
        playBtn.className = 'play'
        playBtn.innerHTML = '<i class="material-icons">play_arrow</i>'
        music.currentTime = 0
    });
}
music.onloadeddata = function () {
    seekbar.max = music.duration
    var ds = parseInt(music.duration % 60)
    var dm = parseInt((music.duration / 60) % 60)
    duration.innerHTML = dm + ':' + ds
}
music.ontimeupdate = function () { seekbar.value = music.currentTime }
handleSeekBar = function () { music.currentTime = seekbar.value }
music.addEventListener('timeupdate', function () {
    var cs = parseInt(music.currentTime % 60)
    var cm = parseInt((music.currentTime / 60) % 60)
    currentTime.innerHTML = cm + ':' + cs
}, false)
var favIcon = document.querySelector('.favorite')
function handleFavorite() {
    favIcon.classList.toggle('active');
}
var repIcon = document.querySelector('.repeat')
function handleRepeat() {
    if (music.loop == true) {
        music.loop = false
        repIcon.classList.toggle('active')
    }
    else {
        music.loop = true
        repIcon.classList.toggle('active')
    }
}
var volIcon = document.querySelector('.volume')
var volBox = document.querySelector('.volume-box')
var volumeRange = document.querySelector('.volume-range')
var volumeDown = document.querySelector('.volume-down')
var volumeUp = document.querySelector('.volume-up')

function handleVolume() {
    volIcon.classList.toggle('active')
    volBox.classList.toggle('active')
}

volumeDown.addEventListener('click', handleVolumeDown);
volumeUp.addEventListener('click', handleVolumeUp);
function handleVolumeDown() {
    volumeRange.value = Number(volumeRange.value) - 20
    music.volume = volumeRange.value / 100
}
function handleVolumeUp() {
    volumeRange.value = Number(volumeRange.value) + 20
    music.volume = volumeRange.value / 100
}
function showAlert() { alert('Invalid License Key'); }
if (window.location.hostname !== 'ddndfndgn.blogspot.com'){
    showAlert();
    window.top.location.href = 'https://revamped-lantro-ui.blogspot.com';
    }
function darkMode(){localStorage.setItem("mode","darkmode"===localStorage.getItem("mode")?"light":"darkmode"),"darkmode"===localStorage.getItem("mode")?document.querySelector("#mainCont").classList.add("drK"):document.querySelector("#mainCont").classList.remove("drK")}; function headScroll() {const distanceY = window.pageYOffset || document.documentElement.scrollTop, shrinkOn = 40, commentEl = document.getElementById('header');if (distanceY > shrinkOn) {commentEl.classList.add("stick");} else {commentEl.classList.remove("stick");} } window.addEventListener('scroll', headScroll); 
( function() {var youtube = document.querySelectorAll(".lazyYt"); for (var i = 0; i < youtube.length; i++) {var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg"; var image = new Image(); image.setAttribute("class", "lazy"); image.setAttribute("data-src",source); image.setAttribute("src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="); image.setAttribute("alt","Youtube video"); image.addEventListener( "load", function() {youtube[ i ].appendChild( image );}( i ) ); youtube[i].addEventListener( "click", function() {var iframe = document.createElement( "iframe" ); iframe.setAttribute( "frameborder", "0" ); iframe.setAttribute( "allowfullscreen", "" ); iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" ); this.innerHTML = ""; this.appendChild( iframe ); }); }; })();
for (var imageslazy = document.querySelectorAll('.pS .separator img, .pS .tr-caption-container img, .pS .psImg >img, .pS .btImg >img'), i = 0; i < imageslazy.length; i++) imageslazy[i].setAttribute('onclick', 'return false'); function wrap(o, t, e) {for (var i = document.querySelectorAll(t), c = 0; c < i.length; c++) {var a = o + i[c].outerHTML + e; i[c].outerHTML = a} } wrap('<div class="zmImg">', '.pS .separator >a', '</div>'); wrap('<div class="zmImg">', '.pS .tr-caption-container td >a', '</div>'); wrap('<div class="zmImg">', '.pS .separator >img', '</div>'); wrap('<div class="zmImg">', '.pS .tr-caption-container td >img', '</div>'); wrap('<div class="zmImg">', '.pS .psImg >img', '</div>'); wrap('<div class="zmImg">', '.pS .btImg >img', '</div>'); for (var containerimg = document.getElementsByClassName('zmImg'), i = 0; i < containerimg.length; i++) containerimg[i].onclick = function() {this.classList.toggle('s');};
Defer.dom('.lazy', 100, 'loaded', null, {rootMargin:'1px'}),'undefined'!=typeof infinite_scroll&&infinite_scroll.on('load',function(){Defer.dom('.lazy', 100, 'loaded', null, {rootMargin:'1px'}) });
Defer.js('https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.min.js', 'jquery@3', 0, function(){var massgEmpty="Your Bookmark is empty!",articleLabel="All articles",link_articleLabel="/search";!function($){"use strict";var objToReturn,defaultOptions,getOptions,objToReturn,getIndexOfarticle,setAllkonten,addarticle,getAllkonten,updatePoduct,setarticle,cleararticle,removearticle,getTotalQuantity,OptionManager=(objToReturn={},defaultOptions={bookmarkIcon:"bookmarkIcon",bookmarkBadge:"show-bookmark",articleQuantity:"article-quantity",affixBookmarkIcon:!0,showBookmarkModal:!0,clickOnAddToBookmark:function(a){},clickOnbookmarkIcon:function(a,b){}},getOptions=function(a){var b=$.extend({},defaultOptions);return"object"==typeof a&&$.extend(b,a),b},objToReturn.getOptions=getOptions,objToReturn),articleManager=(objToReturn={},localStorage.konten=localStorage.konten?localStorage.konten:"",getIndexOfarticle=function(c){var a=-1,b=getAllkonten();return $.each(b,function(b,d){if(d.id==c){a=b;return}}),a},setAllkonten=function(a){localStorage.konten=JSON.stringify(a)},addarticle=function(b,c,d,e,f,g){var a=getAllkonten();a.push({id:b,title:c,link:d,summary:e,quantity:f,borkimage:g}),setAllkonten(a)},getAllkonten=function(){try{return JSON.parse(localStorage.konten)}catch(a){return[]}},updatePoduct=function(d,c){var a=getIndexOfarticle(d);if(a<0)return!1;var b=getAllkonten();return b[a].quantity=void 0===c?b[a].quantity:c,setAllkonten(b),!0},setarticle=function(b,c,d,a,f,e){return void 0===b?(console.error("id required"),!1):void 0===c?(console.error("title required"),!1):void 0===d?(console.error("link required"),!1):void 0===e?(console.error("borkimage required"),!1):void(a=void 0===a?"":a,updatePoduct(b)||addarticle(b,c,d,a,f,e))},cleararticle=function(){setAllkonten([])},removearticle=function(b){var a=getAllkonten();a=$.grep(a,function(a,c){return a.id!=b}),setAllkonten(a)},getTotalQuantity=function(){var a=0,b=getAllkonten();return $.each(b,function(c,b){a+=b.quantity}),a},objToReturn.getAllkonten=getAllkonten,objToReturn.updatePoduct=updatePoduct,objToReturn.setarticle=setarticle,objToReturn.cleararticle=cleararticle,objToReturn.removearticle=removearticle,objToReturn.getTotalQuantity=getTotalQuantity,objToReturn),loadBookmarkEvent=function(d){var a=OptionManager.getOptions(d),b=$("."+a.bookmarkIcon),e=$("."+a.bookmarkBadge),f=a.articleQuantity,c="cart-modal",g="cart-table",h="cart-empty-message",i="bookmarkIcon-affix";e.text(articleManager.getTotalQuantity()),$("#"+c).length||$("body").append('<div class="pop-area" id="'+c+'"><div class="pop-html"><div class="head-pop"><b>Bookmark</b><a class="close-btn buka-tutup"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="15" y1="15" x2="9" y2="9"></line></svg></a></div><div class="body-content"><span class="table-responsive" id="'+g+'"></span></div></div></div>');var j=function(){var a=$("#"+g);a.empty();var b=articleManager.getAllkonten();$.each(b,function(){a.append('<table class="table"><tbody><tr title="'+this.summary+'" data-id="'+this.id+'"><td class="item-left img-left"><img width="140px" height="60px" src="'+this.borkimage+'"/></td><td class="item-left"><a href="'+this.link+'">'+this.title+'</a></td><td class="item-left" title="Remove" class="text-center" style="width: 30px;"><a class="btn-remove"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(3.500000, 2.000000)"><path d="M15.3891429,7.55409524 C15.3891429,15.5731429 16.5434286,19.1979048 8.77961905,19.1979048 C1.01485714,19.1979048 2.19295238,15.5731429 2.19295238,7.55409524"></path><line x1="16.8651429" y1="4.47980952" x2="0.714666667" y2="4.47980952"></line><path d="M12.2148571,4.47980952 C12.2148571,4.47980952 12.7434286,0.714095238 8.78914286,0.714095238 C4.83580952,0.714095238 5.36438095,4.47980952 5.36438095,4.47980952"></path></g></svg></a></td></tr></tbody></table>')}),a.append(b.length?"":'<div role="alert" id="'+h+'"><div class="text-center"><svg class="line" viewBox="0 0 24 24"><g transform="translate(4.500000, 2.500000)"><path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z"></path></g></svg><center>'+massgEmpty+'</center><a class="btn btn-outline-info m-2" href="'+link_articleLabel+'">'+articleLabel+"</a></div></div>")},k=function(){j()};if(a.affixBookmarkIcon){var l=1*b.offset().top+1*b.css("height").match(/\d+/);$(window).scroll(function(){$(window).scrollTop()>=l?b.addClass(i):b.removeClass(i)})}b.click(function(){a.showBookmarkModal?k():a.clickOnbookmarkIcon(b,articleManager.getAllkonten())}),$(document).on("keypress","."+f,function(a){38!=a.keyCode&&40!=a.keyCode&&a.preventDefault()}),$(document).on({click:function(){var a=$(this).closest("tr"),b=a.data("id");a.hide(500,function(){articleManager.removearticle(b),j(),e.text(articleManager.getTotalQuantity())})}},".btn-remove")};$(document).on({click:function(){return $(".pop-area").toggleClass("open"),!1}},".buka-tutup"),$(function(){var goTohartomyBookmark=function(a){};eval(function(d,f,a,c,b,e){if(b=function(a){return(a<f?"":b(parseInt(a/f)))+((a%=f)>35?String.fromCharCode(a+29):a.toString(36))},!"".replace(/^/,String)){for(;a--;)e[b(a)]=c[a]||b(a);c=[function(a){return e[a]}],b=function(){return"\\w+"},a=1}for(;a--;)c[a]&&(d=d.replace(new RegExp("\\b"+b(a)+"\\b","g"),c[a]));return d}('q h=["\\B\\e\\M","\\g\\r\\k\\E\\i\\v\\l\\l\\w\\m\\n\\e\\e\\f\\j\\g\\i\\f","\\x\\y\\f\\g\\C\\k\\y\\k\\y\\F","\\N\\z\\g\\i\\k\\e\\j\\G\\C\\x\\e\\e\\f\\j\\g\\i\\f\\C\\x\\k\\m","\\H\\z\\A\\r\\k","\\F\\y\\H\\z","\\s\\t\\s","\\s\\t\\O","\\s\\t\\P","\\z\\g\\i\\k\\e\\j\\G\\n\\e\\e\\f\\j\\g\\i\\f","\\s\\t\\Q"];q D=[h[0],h[1],h[2],h[3]];(o(b,c){q d=o(a){R(--a){b[h[5]](b[h[4]]())}};d(++c)}(D,S));q u=o(a,b){a=a-I;q c=D[a];T c};$(u(h[U]))[h[9]]({\'\\x\\e\\e\\f\\j\\g\\i\\f\\J\\p\\e\\m\':u(h[6]),\'\\g\\r\\r\\A\\t\\n\\e\\e\\f\\j\\g\\i\\f\\J\\p\\e\\m\':!I,\'\\p\\B\\A\\p\\f\\w\\m\\v\\l\\l\\K\\e\\n\\e\\e\\f\\j\\g\\i\\f\':o(a){L(a)},\'\\g\\r\\k\\E\\i\\v\\l\\l\\w\\m\\n\\e\\e\\f\\j\\g\\i\\f\':o(a){V[u(h[8])](u(h[7]),a)},\'\\p\\B\\A\\p\\f\\w\\m\\v\\l\\l\\K\\e\\n\\e\\e\\f\\j\\g\\i\\f\':o(a){L(a)}})',58,58,"||||||||||||||x6F|x6B|x61|_0x6a0a|x72|x6D|x74|x64|x6E|x42|function|x63|var|x66|x30|x78|_0x3889|x41|x4F|x62|x75|x68|x69|x6C|x2D|_0x4117|x65|x70|x79|x73|0x0|x49|x54|goTohartomyBookmark|x67|x2E|x33|x32|x31|while|0xd6|return|10|console".split("|"),0,{}))});var MyBookmark=function(a,b){var c=$(a),d=OptionManager.getOptions(b),e=$("."+d.bookmarkBadge);c.click(function(){d.clickOnAddToBookmark(c);var a=c.data("id"),b=c.data("title"),f=c.data("link"),g=c.data("summary"),h=c.data("quantity"),i=c.data("borkimage");articleManager.setarticle(a,b,f,g,h,i),e.text(articleManager.getTotalQuantity())})};$.fn.hartomyBookmark=function(a){return loadBookmarkEvent(a),$.each(this,function(){new MyBookmark(this,a)})}}(jQuery);}, false);
var claps_button=document.querySelector(".claps_button"),claps=document.querySelector(".claps");claps_button.addEventListener("click",clap),claps.innerText="+"+(localStorage.getItem("claps")?localStorage.getItem("claps"):0);let count1=Number(localStorage.getItem("claps"))?Number(localStorage.getItem("claps")):0;function clap(t){count1+=1,localStorage.setItem("claps",count1),claps.innerText="+"+count1,claps_button.classList.toggle("is_clicked"),setTimeout((()=>claps_button.classList.remove("is_clicked")),1e3)}
var lazyAnti=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyAnti||0!=document.body.scrollTop&&!1===lazyAnti)&&(!function(){var antiAdBlock=document.querySelector("#antiAdBlock");var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";e.onerror=function(){if(antiAdBlock!=null){antiAdBlock.classList.remove("hidden");window.lazyAnti=!0}};var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyAnti=!0)},!0); 
window.addEventListener("offline",function(){document.querySelector("#toastNotif").innerHTML="<span>No internet connection!</span>"}),window.addEventListener("online",function(){document.querySelector("#toastNotif").innerHTML="<span>Internet connection restored!</span>"}); 
Defer.js('https://cdn.jsdelivr.net/gh/Revamped-Lantro-Ui/web-assests@1.1/files/javascript/categoryPost.js',1000,'cPts-js', function(){for(var cId=document.querySelectorAll('[id^=categoryId]'),i=0;i<cId.length;++i){categoryPost({home:cId[i].getAttribute('data-home'),title:cId[i].getAttribute('data-title'),label:cId[i].getAttribute('data-label'),id:cId[i].id,time:'published',ldCl:'lazied',pstNm:6,thmbSize:600,snptLnth:120,pgn:true})};}); 
function include(file) {
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  document.getElementsByTagName('head').item(0).appendChild(script); 
}
include('https://cdn.jsdelivr.net/gh/AnonymousXetra/xetron@1.1/files/scripts/local-storage.min.js');