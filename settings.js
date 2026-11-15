/* Site settings (content/settings.json) - Admin panel -> Contact & Details se badle jate hain */
(function(){var S=null;try{if(+localStorage.getItem('cms_admin')>Date.now())S=JSON.parse(localStorage.getItem('cms_settings')||'null')}catch(e){}
if(!S)try{var x=new XMLHttpRequest();x.open('GET','content/settings.json',false);x.send();if(x.status==200)S=JSON.parse(x.responseText)}catch(e){}
window.SETTINGS=S||{}})();
