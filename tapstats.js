/* Tap Stats Lite — counts taps on Linkline links, stored only in this browser (no server, no tracking). */
(function(){
  var KEY='ll_tapstats_v1';
  function load(){try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}}}
  function save(d){try{localStorage.setItem(KEY,JSON.stringify(d))}catch(e){}}
  function page(){return (location.pathname+location.search+location.hash).slice(0,300)||'/'}
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a.link');if(!a)return;
    var d=load(),p=page(),t=(a.querySelector('.tx')||a).textContent.trim().slice(0,80)||a.href;
    d[p]=d[p]||{name:(document.getElementById('name')||{}).textContent||p,links:{}};
    var l=d[p].links[t]=d[p].links[t]||{url:a.href,taps:0,last:0};
    l.taps++;l.last=Date.now();l.url=a.href;save(d);
  },true);
})();
