$(document).on("ready",function(){var s=$("#slides"),o=s.offset(),i=$("img.focus").offset(),t=$(window).width()<1200?"left":"top";s.slideOn(slides=s,initPos=o,goalPos=i,t=t);var n;$.getJSON("assets/js/modules/formation.json",function(s){n=s.formation}),s.find("img").on("click",function(){var s=$(".focus").attr("src").split("/").pop().split(".").shift();$(".formation").find(".lead").html(n[s].lead),$(".formation").find(".descriptor").html(n[s].descriptor)})}),function(s){s.fn.slideOn=function(o,i,t,n){return s(window).resize(function(){console.log(n),n=s(window).width()<1200?"left":"top"}),s(this).find("img").on("click touch",function(){console.log(n);var f="top"==n?-150:250,e="top"==n?0:190;if(s(this).hasClass("chevron"))o.find("img").removeClass("focus"),o.css(n,i[n]+f),o.find("img.second").addClass("focus");else if(!s(this).hasClass("focus")){o.find("img").removeClass("focus");var c=s(this).offset(),l=t[n]-c[n]+e,d=o.offset()[n]+l;console.log(d),o.css(n,d),s(this).addClass("focus")}}),this}}(jQuery);