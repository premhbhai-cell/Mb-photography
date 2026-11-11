/* ===== Google reviews slider =====
   SAMPLE reviews - replace name/date/text with MB Photography's real Google reviews.
   Add or remove lines freely; the count ("Based on N reviews") and the slider update automatically. */
var REVIEWS=[
{n:"Rahul Patel",d:"4 November 2026",t:"Amazing photography! Every moment of our wedding was captured so beautifully. The whole team was friendly and professional."},
{n:"Priya Sharma",d:"21 October 2026",t:"Our pre-wedding shoot was a dream. They made us feel so comfortable and the pictures came out stunning."},
{n:"Amit Verma",d:"9 October 2026",t:"Best photo studio in Harda. Fast delivery, premium quality and a very cooperative team."},
{n:"Neha Joshi",d:"28 September 2026",t:"Loved our maternity shoot. Soft, natural photos that we will treasure forever. Highly recommended!"},
{n:"Vikas Yadav",d:"15 September 2026",t:"Superb work. The wedding film made our whole family emotional. Thank you MB Photography!"},
{n:"Sneha Tiwari",d:"2 September 2026",t:"Very patient with my little one. We got the cutest birthday photos ever."},
{n:"Rohit Chouhan",d:"19 August 2026",t:"Professional, creative and always on time. Our candid wedding photos are just perfect."},
{n:"Pooja Rathore",d:"6 August 2026",t:"Excellent service and great behaviour. The album quality is top class."},
{n:"Deepak Mishra",d:"24 July 2026",t:"Best place for pre-wedding and wedding shoots. Reasonable price and wonderful results."},
{n:"Kajal Agrawal",d:"11 July 2026",t:"Our baby's photoshoot was so well planned. Thank you for the lovely memories!"},
{n:"Manish Gupta",d:"30 June 2026",t:"Superb"},
{n:"Anjali Dubey",d:"14 June 2026",t:"Great lighting, great editing and a very friendly team. We loved every single frame."},
{n:"Sandeep Malviya",d:"1 June 2026",t:"They covered all our functions perfectly. Nothing was missed. Highly satisfied."},
{n:"Ritu Soni",d:"18 May 2026",t:"Best place"},
{n:"Karan Thakur",d:"3 May 2026",t:"Wonderful experience from booking to delivery. Will definitely recommend to friends and family."}
];
(function(){
var root=document.getElementById('greviews');if(!root)return;
var COL=['#1a73e8','#188038','#d93025','#f29900','#9334e6','#e8710a','#129eaf','#a52714'];
var star='<img src="assets/img/g-star.svg" alt="" width="17" height="17">';
var stars=star+star+star+star+star;
root.querySelector('.gr-count').textContent=REVIEWS.length;
var track=root.querySelector('.gr-track');
track.innerHTML=REVIEWS.map(function(r,i){
return '<div class="gr-slide"><div class="gr-card"><div class="gr-top"><div class="gr-av" style="background:'+COL[i%COL.length]+'">'+r.n.charAt(0)+'</div><div class="gr-meta"><b>'+r.n+'</b><span>'+r.d+'</span></div><img class="gr-g" src="assets/img/g-icon.svg" alt="Google" width="22" height="22"></div><div class="gr-stars">'+stars+'</div><p>'+r.t+'</p></div></div>';}).join('');
var slides=track.children,page=0,per=3,dots=root.querySelector('.gr-dots');
function calc(){var w=window.innerWidth;per=w<700?1:(w<1000?2:3);}
function pages(){return Math.max(1,slides.length-per+1)}
function build(){dots.innerHTML='';for(var i=0;i<pages();i++){var d=document.createElement('button');d.setAttribute('aria-label','Review '+(i+1));d.onclick=(function(i){return function(){go(i)}})(i);dots.appendChild(d)}}
function go(p){var n=pages();page=(p+n)%n;
for(var i=0;i<slides.length;i++)slides[i].style.flex='0 0 '+(100/per)+'%';
track.style.transform='translateX(-'+(page*100/per)+'%)';
for(var j=0;j<dots.children.length;j++)dots.children[j].className=j===page?'on':'';}
function init(){calc();build();go(Math.min(page,pages()-1))}
root.querySelector('.gr-next').onclick=function(){go(page+1)};
root.querySelector('.gr-prev').onclick=function(){go(page-1)};
var t=setInterval(function(){go(page+1)},6000);
root.onmouseenter=function(){clearInterval(t)};root.onmouseleave=function(){t=setInterval(function(){go(page+1)},6000)};
var sx=0;track.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
track.addEventListener('touchend',function(e){var dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40)go(page+(dx<0?1:-1))});
var rt;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(init,150)});
init();
})();
