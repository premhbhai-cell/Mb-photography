var WA=String((window.SETTINGS&&SETTINGS.contact&&SETTINGS.contact.whatsapp)||'919826398764').replace(/\D/g,'');
(function(){function __mb(){
(function(){
var h=document.querySelector('header');
function s(){h.classList.toggle('solid',scrollY>10)}s();addEventListener('scroll',s);
var b=document.querySelector('.burger'),m=document.querySelector('.menu');
b.onclick=function(){m.classList.toggle('open');b.textContent=m.classList.contains('open')?'✕':'☰'};
var sl=document.querySelectorAll('.slide'),i=0;
if(sl.length>1)setInterval(function(){sl[i].classList.remove('on');i=(i+1)%sl.length;sl[i].classList.add('on')},5500);
document.documentElement.classList.add('js');
document.querySelectorAll('.band h2,.rimg,.rtx,.box,.watch a,.faq details,.gr-head,.tag,.cinfo,.two>*,.gal img').forEach(function(e){e.classList.add('rv')});
document.querySelectorAll('.cards,.cols,.gal,.watch,.rows').forEach(function(g){Array.prototype.forEach.call(g.querySelectorAll('.rv'),function(e,k){e.style.transitionDelay=((k%3)*0.15)+'s'})});
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
var lb=document.createElement('div');lb.className='lb';lb.innerHTML='<img alt="">';document.body.appendChild(lb);
lb.onclick=function(){lb.classList.remove('on')};
document.querySelectorAll('.gal img').forEach(function(im){im.onclick=function(){lb.firstChild.src=im.src;lb.classList.add('on')}});
var f=document.getElementById('enq');
if(f)f.onsubmit=function(e){e.preventDefault();var d=new FormData(f);
var t='Hello MB Photography,%0AName: '+encodeURIComponent(d.get('name'))+'%0APhone: '+encodeURIComponent(d.get('phone'))+'%0AService: '+encodeURIComponent(d.get('service'))+'%0AEvent Date: '+encodeURIComponent(d.get('date')||'-')+'%0AMessage: '+encodeURIComponent(d.get('msg')||'-');
window.open('https://wa.me/'+WA+'?text='+t,'_blank')};

/* Admin-managed contact numbers (Admin -> Contact & Details) */
(function(){var c=(window.SETTINGS||{}).contact;if(!c)return;
var P1=String(c.phone1||'').trim(),P2=String(c.phone2||'').trim(),W=String(c.whatsapp||'').replace(/\D/g,''),NUM=/\d[\d\s+-]{6,}\d/;
function dg(x){return String(x).replace(/\D/g,'')}function full(x){var d=dg(x);return(d.length>10?'':'91')+d}
function setTxt(a,v){[].slice.call(a.childNodes).forEach(function(n){if(n.nodeType==3&&NUM.test(n.textContent))n.textContent=n.textContent.replace(NUM,v)})}
document.querySelectorAll('a[href^="tel:"]').forEach(function(a){var k=a.getAttribute('data-ph');if(!k){var h=dg(a.getAttribute('href'));k=/9826398764$/.test(h)?'1':/9131327973$/.test(h)?'2':'';if(k)a.setAttribute('data-ph',k)}
var v=k=='1'?P1:k=='2'?P2:'';if(v){a.setAttribute('href','tel:+'+full(v));setTxt(a,v)}});
document.querySelectorAll('a[href*="wa.me/"]').forEach(function(a){var k=a.getAttribute('data-wa');if(!k&&/wa\.me\/\d*9826398764/.test(a.getAttribute('href'))){k='1';a.setAttribute('data-wa',k)}
if(k&&W){a.setAttribute('href',a.getAttribute('href').replace(/wa\.me\/\d+/,'wa.me/'+W));setTxt(a,W.slice(-10))}});
})();
})();

}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',__mb);else __mb()})();
