$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(console.log("cliiick"),location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=$(this.hash);if(o=o.length?o:$("[name="+this.hash.slice(1)+"]"),o.length)return $("html, body").animate({scrollTop:o.offset().top},400),!1}})}),$(document).on("ready",function(){var o=$("#work"),e=o.find("img");window.labels={"well-ce":"2014 | Start up Well-CE <br/> Stage technicien Développeur Web",MH:"2015 | Autoentrepreneur Web","blu-e":"2016 | ENGIE Blu.e <br/> Développeur visualisation de données Web","my-esiee":"2015 | ESIEE Paris <br/> App. Web et Android MyESIEE de suivi temps réel",kaggle:"2016 | Compétitions Kaggle d'analyse de données <br/> Expedia, NY Times",dsg:"2016 | Compétition international Data Science Game"},e.on("mouseenter",function(){var o=$(this).data("label");console.log(labels[o]),$(this).siblings("label").html(labels[o])})}),$(document).on("ready",function(){var o={data:{labels:["HTML5","CSS3","JavaScript","Photoshop","AngularJS","Web Design"],datasets:[{label:"Design FrontEnd",backgroundColor:"rgba(0,128,255,0.2)",borderColor:"rgba(255,255,255,1)",pointBackgroundColor:"rgba(255,255,255,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[100,90,80,70,80,90]}]}},e={data:{labels:["NodeJS","PHP7","(No)SQL","Symfony2","API REST","Gulp"],datasets:[{label:"Développement BackEnd",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,255,255,1)",pointBackgroundColor:"rgba(255,255,255,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[95,80,90,70,100,90]}]}},t={scale:{angleLines:{lineWidth:2},pointLabels:{fontSize:17,pointLabel:{fontColor:"fff"}},ticks:{showLabelBackdrop:!1,maxTicksLimit:8,min:50}},legend:{labels:{fontColor:"#fff"}},responsive:!0},a=document.getElementById("webFrontEndChart"),n=new Chart(a,{type:"radar",data:o.data,options:t}),r=document.getElementById("webBackEndChart"),i=new Chart(r,{type:"radar",data:e.data,options:t}),s=document.getElementById("programmationChart"),l={data:{labels:["Python2&3","R Programming","Text Mining","Classification","Régression","SVM","Decision Trees","Neural Nets"],datasets:[{label:"Outils pour l'analyse de données",backgroundColor:"rgba(255,223,0,0.2)",borderColor:"rgba(255,255,255,1)",borderWidth:1,hoverBackgroundColor:"rgba(210,105,30,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[90,90,85,80,80,70,70,65]}]}},d=new Chart(s,{type:"bar",data:l.data,options:{responsive:!0,legend:{labels:{fontColor:"#fff"}}}}),c=$(".tabLink");c.on("click",function(){console.log("click"),n.render(1e3,!0),i.render(1e3,!0),d.render(1e3,!0)})}),$(document).on("ready",function(){var o=$(".tabLink"),e=$(".tabContent");o.on("click",function(t){t.preventDefault(),o.removeClass("active"),$(this).addClass("active");var a=$(this).data("tab");e.removeClass("active"),$(".tabContent#"+a).addClass("active")})}),$(document).on("ready",function(){var o=$("#slides"),e=o.offset(),t=$("img.focus").offset(),a=$(window).width()<1200?"left":"top";o.slideOn(slides=o,initPos=e,goalPos=t,a=a);var n;$.getJSON("assets/js/modules/formation.json",function(o){n=o.formation}),o.find("img").on("click",function(){var o=$(".focus").attr("src").split("/").pop().split(".").shift();$(".formation").find(".lead").html(n[o].lead),$(".formation").find(".descriptor").html(n[o].descriptor)})}),function(o){o.fn.slideOn=function(e,t,a,n){return o(window).resize(function(){console.log(n),n=o(window).width()<1200?"left":"top"}),o(this).find("img").on("click touch",function(){console.log(n);var r="top"==n?-150:250,i="top"==n?0:190;if(o(this).hasClass("chevron"))e.find("img").removeClass("focus"),e.css(n,t[n]+r),e.find("img.second").addClass("focus");else if(!o(this).hasClass("focus")){e.find("img").removeClass("focus");var s=o(this).offset(),l=a[n]-s[n]+i,d=e.offset()[n]+l;console.log(d),e.css(n,d),o(this).addClass("focus")}}),this}}(jQuery);