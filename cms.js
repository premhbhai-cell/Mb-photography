(function(){var d=document,H=d.documentElement,pg=(location.pathname.split('/').pop()||'index.html').replace(/\.html$/,'')||'index',ed=/[?&]edit=1/.test(location.search)&&window.parent!==window,adm=+localStorage.getItem('cms_admin')>Date.now();
H.style.visibility='hidden';var shown=0;function show(){if(!shown){shown=1;H.style.visibility=''}}setTimeout(show,2500);
function apply(h){var b=d.body,s=b.querySelector('script'),t=d.createElement('div');t.innerHTML=h;[].slice.call(b.children).forEach(function(e){if(e.tagName!='SCRIPT')e.remove()});while(t.firstChild)b.insertBefore(t.firstChild,s)}
function login(){var m=d.querySelector('header .menu');if(m&&!m.querySelector('.cms-login')){var l=d.createElement('li');l.className='cms-login';l.innerHTML='<a href="admin.html">Login</a>';m.appendChild(l)}}
function ld(src,cb){var s=d.createElement('script');s.src=src;s.onload=cb;d.body.appendChild(s)}
function go(){var j=null;try{if(adm)j=JSON.parse(localStorage.getItem('cms_p_'+pg))}catch(e){}
if(!j)try{var x=new XMLHttpRequest();x.open('GET','content/'+pg+'.json',false);x.send();if(x.status==200)j=JSON.parse(x.responseText)}catch(e){}
if(j&&j.html)apply(j.html);
d.addEventListener('DOMContentLoaded',function(){});if(ed&&adm)ld('cms-core.js',function(){ld('editor.js')});else login();show()}
if(d.readyState=='loading')d.addEventListener('DOMContentLoaded',go);else go()})();
