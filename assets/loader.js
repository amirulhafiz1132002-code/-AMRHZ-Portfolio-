// Simple loader controller: show overlay on load, then hide after delay or on manual call
document.addEventListener('DOMContentLoaded',()=>{
  const overlay = document.getElementById('loader-overlay');
  if(!overlay) return;
  // simulate boot time, allow pages to hide when ready
  setTimeout(()=>{
    overlay.classList.add('hide');
    setTimeout(()=>{overlay.remove();},450);
  },900);
});

// Optional API
window.showLoader = (ms=0)=>{
  const overlay = document.getElementById('loader-overlay');
  if(!overlay) return;
  overlay.style.display='flex';
  if(ms>0) setTimeout(()=>overlay.style.display='none',ms);
}

window.hideLoader = ()=>{
  const overlay = document.getElementById('loader-overlay');
  if(!overlay) return;
  overlay.style.display='none';
}
