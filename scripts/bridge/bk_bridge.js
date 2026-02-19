(function(){
var d=document,q=d.querySelector.bind(d),qa=d.querySelectorAll.bind(d);

// === Add bk- classes to structural elements ===
var m={'.bv2-hero':'bk-hero','.bv2-hero-title':'bk-hero-title','.bv2-form-section':'bk-form-section','.bv2-form-header':'bk-form-card-header','.bv2-form-body':'bk-form-card-body','.bv2-step-nav':'bk-step-nav','.bv2-field-row':'bk-field-row'};
for(var s in m){var els=qa(s);els.forEach(function(el){el.classList.add(m[s]);});}

// === Form header ID ===
var fh=q('.bv2-form-header');if(fh)fh.id='form-header';

// === Step progress items ===
var si=qa('.bv2-step-item');
si.forEach(function(item,i){item.classList.add('bk-step-progress-item');item.dataset.step=(i+1).toString();});
qa('.bv2-step-num').forEach(function(n){n.classList.add('bk-step-progress-num');});
qa('.bv2-step-num-inactive').forEach(function(n){n.classList.add('bk-step-progress-num');});
qa('.bv2-step-label').forEach(function(l){l.classList.add('bk-step-progress-label');});
qa('.bv2-step-label-inactive').forEach(function(l){l.classList.add('bk-step-progress-label');});
var sc=q('.bv2-step-connector');if(sc)sc.classList.add('bk-step-progress-connector');

// === Make form body wrapper a step panel ===
var fb=q('.bv2-form-body');
if(fb){fb.classList.add('bk-step-panel');fb.dataset.step='1';}

// === Input IDs and classes ===
var inputs=qa('.bv2-field-input');
var imap={'text|Kovács Péter':'field-name','email|kovacs.peter@ceg.hu':'field-email','tel|+36 30 123 4567':'field-phone','text|Példa Kft.':'field-company','number|pl. 15':'field-employees'};
inputs.forEach(function(inp){
  if(inp.tagName==='SELECT'){
    inp.id='field-industry';
    inp.classList.add('bk-field-select');
    inp.innerHTML='<option value="" disabled selected>Válassz iparágat...</option><option value="ecommerce">E-commerce</option><option value="szolgaltatas">Szolgáltatás</option><option value="gyartas">Gyártás</option><option value="penzugy">Pénzügy / Számvitel</option><option value="egeszsegugy">Egészségügy</option><option value="it">IT / Szoftverfejlesztés</option><option value="marketing">Marketing / Média</option><option value="logisztika">Logisztika</option><option value="egyeb">Egyéb</option>';
    inp.addEventListener('change',function(){this.classList.add('has-value');});
    return;
  }
  var t=inp.getAttribute('type'),p=inp.getAttribute('placeholder');
  var key=t+'|'+p;
  if(imap[key]){inp.id=imap[key];inp.classList.add('bk-field-input');}
});

// === Field group wrapper IDs ===
var groups=qa('.bv2-field-group');
var wm=['field-name-wrap','field-email-wrap','field-phone-wrap','field-company-wrap','field-industry-wrap','field-employees-wrap'];
groups.forEach(function(g,i){if(wm[i])g.id=wm[i];});

// === Button class ===
var bp=q('.bv2-btn-primary');if(bp)bp.classList.add('bk-btn-primary');

// === Prevent form submit ===
var fm=q('form');if(fm)fm.addEventListener('submit',function(e){e.preventDefault();});

// === Inject base layout CSS for Step 2, Confirmation, Toast ===
var css=d.createElement('style');
css.textContent=
'.bk-cal-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}'+
'.bk-cal-nav-btn{width:34px;height:34px;border-top-left-radius:50%;border-top-right-radius:50%;border-bottom-left-radius:50%;border-bottom-right-radius:50%;border-top-width:1.5px;border-top-style:solid;border-top-color:rgba(0,0,0,0.08);border-right-width:1.5px;border-right-style:solid;border-right-color:rgba(0,0,0,0.08);border-bottom-width:1.5px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,0.08);border-left-width:1.5px;border-left-style:solid;border-left-color:rgba(0,0,0,0.08);background-color:transparent;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#0F1923;font-size:16px}'+
'.bk-cal-nav-btn:hover{background-color:rgba(0,0,0,0.04)}'+
'.bk-cal-nav-btn:disabled{opacity:0.3;cursor:not-allowed}'+
'.bk-cal-nav-title{font-size:15px;font-weight:600;color:#0F1923}'+
'.bk-calendar-days{display:flex;column-gap:8px;margin-bottom:24px}'+
'.bk-selected-summary{display:none;align-items:center;column-gap:12px;padding-top:14px;padding-right:18px;padding-bottom:14px;padding-left:18px;background-color:rgba(195,247,58,0.08);border-top-width:1px;border-top-style:solid;border-top-color:rgba(195,247,58,0.15);border-right-width:1px;border-right-style:solid;border-right-color:rgba(195,247,58,0.15);border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(195,247,58,0.15);border-left-width:1px;border-left-style:solid;border-left-color:rgba(195,247,58,0.15);border-top-left-radius:12px;border-top-right-radius:12px;border-bottom-left-radius:12px;border-bottom-right-radius:12px;margin-top:24px;margin-bottom:24px}'+
'.bk-selected-summary.visible{display:flex}'+
'.bk-selected-summary-icon{width:20px;height:20px;color:#C3F73A;flex-shrink:0}'+
'.bk-summary-text{font-size:14px;font-weight:600;color:#0F1923}'+
'.bk-summary-sub{font-size:12px;color:#8399A2}'+
'.bk-colleagues-section{border-top-width:1px;border-top-style:solid;border-top-color:#EAEAE8;padding-top:28px;margin-top:28px}'+
'.bk-colleagues-title{font-size:15px;font-weight:700;color:#0F1923;margin-bottom:4px}'+
'.bk-colleagues-desc{font-size:13px;color:#8399A2;margin-bottom:16px}'+
'.bk-btn-add-colleague{display:flex;align-items:center;justify-content:center;column-gap:8px;width:100%;padding-top:12px;padding-right:16px;padding-bottom:12px;padding-left:16px;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-top-width:1.5px;border-top-style:dashed;border-top-color:rgba(0,0,0,0.12);border-right-width:1.5px;border-right-style:dashed;border-right-color:rgba(0,0,0,0.12);border-bottom-width:1.5px;border-bottom-style:dashed;border-bottom-color:rgba(0,0,0,0.12);border-left-width:1.5px;border-left-style:dashed;border-left-color:rgba(0,0,0,0.12);background-color:transparent;color:#8399A2;font-size:14px;cursor:pointer}'+
'.bk-btn-add-colleague:hover{border-top-color:rgba(0,0,0,0.2);border-right-color:rgba(0,0,0,0.2);border-bottom-color:rgba(0,0,0,0.2);border-left-color:rgba(0,0,0,0.2);color:#0F1923}'+
'.bk-btn-back{display:inline-flex;align-items:center;column-gap:6px;padding-top:12px;padding-right:24px;padding-bottom:12px;padding-left:24px;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;border-top-width:1.5px;border-top-style:solid;border-top-color:rgba(0,0,0,0.1);border-right-width:1.5px;border-right-style:solid;border-right-color:rgba(0,0,0,0.1);border-bottom-width:1.5px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,0.1);border-left-width:1.5px;border-left-style:solid;border-left-color:rgba(0,0,0,0.1);background-color:transparent;color:#8399A2;font-size:14px;font-weight:500;cursor:pointer}'+
'.bk-btn-back:hover{border-top-color:rgba(0,0,0,0.2);border-right-color:rgba(0,0,0,0.2);border-bottom-color:rgba(0,0,0,0.2);border-left-color:rgba(0,0,0,0.2);color:#0F1923}'+
'.bk-confirmation{display:none;text-align:center;padding-top:48px;padding-bottom:48px}'+
'.bk-confirmation.active{display:block;animation:stepIn .6s cubic-bezier(.22,1,.36,1)}'+
'.bk-confirm-icon-wrap{width:64px;height:64px;border-top-left-radius:50%;border-top-right-radius:50%;border-bottom-left-radius:50%;border-bottom-right-radius:50%;background-color:rgba(195,247,58,0.12);display:flex;align-items:center;justify-content:center;margin-left:auto;margin-right:auto;margin-bottom:24px}'+
'.bk-confirm-icon-wrap svg{width:32px;height:32px}'+
'.bk-confirm-title{font-size:24px;font-weight:700;color:#0F1923;margin-bottom:8px}'+
'.bk-confirm-subtitle{font-size:15px;color:#8399A2;margin-bottom:32px}'+
'.bk-confirm-details{max-width:320px;margin-left:auto;margin-right:auto;margin-bottom:32px}'+
'.bk-confirm-detail-row{display:flex;align-items:center;column-gap:12px;padding-top:12px;padding-bottom:12px;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,0.06)}'+
'.bk-confirm-detail-icon{width:20px;height:20px;color:#8399A2;flex-shrink:0}'+
'.bk-confirm-detail-label{font-size:13px;color:#8399A2;flex-shrink:0}'+
'.bk-confirm-detail-value{font-size:14px;font-weight:600;color:#0F1923;margin-left:auto;text-align:right}'+
'.bk-confirm-prep-title{font-size:16px;font-weight:700;color:#0F1923;margin-bottom:16px}'+
'.bk-confirm-prep-list{list-style:none;padding-left:0;max-width:360px;margin-left:auto;margin-right:auto;margin-bottom:32px;text-align:left}'+
'.bk-confirm-prep-item{display:flex;align-items:flex-start;column-gap:10px;padding-top:8px;padding-bottom:8px;font-size:14px;color:#0F1923}'+
'.bk-btn-home{display:inline-flex;align-items:center;column-gap:8px;padding-top:14px;padding-right:32px;padding-bottom:14px;padding-left:32px;border-top-left-radius:50px;border-top-right-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:#C3F73A;color:#0F1923;font-size:15px;font-weight:600;text-decoration:none;cursor:pointer}'+
'.bk-btn-home:hover{background-color:#d4ff5a}'+
'.bk-activity-toast{position:fixed;bottom:24px;left:24px;z-index:90;display:flex;align-items:center;column-gap:12px;padding-top:12px;padding-right:20px;padding-bottom:12px;padding-left:12px;border-top-left-radius:12px;border-top-right-radius:12px;border-bottom-left-radius:12px;border-bottom-right-radius:12px;background-color:rgba(15,25,35,0.92);border-top-width:1px;border-top-style:solid;border-top-color:rgba(131,153,162,0.12);border-right-width:1px;border-right-style:solid;border-right-color:rgba(131,153,162,0.12);border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(131,153,162,0.12);border-left-width:1px;border-left-style:solid;border-left-color:rgba(131,153,162,0.12);box-shadow:0 8px 32px rgba(0,0,0,0.2);transform:translateY(120%);opacity:0;transition:all 0.5s cubic-bezier(0.22,1,0.36,1)}'+
'.bk-activity-toast.visible{transform:translateY(0);opacity:1}'+
'.bk-activity-avatar{width:32px;height:32px;border-top-left-radius:50%;border-top-right-radius:50%;border-bottom-left-radius:50%;border-bottom-right-radius:50%;background:linear-gradient(135deg,rgba(195,247,58,0.3),rgba(195,247,58,0.1));display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#C3F73A}'+
'.bk-activity-text{font-size:13px;color:#8399A2}'+
'.bk-activity-text strong{color:#fff;font-weight:600}'+
'#time-periods{margin-top:8px}'+
'#colleagues-list{margin-bottom:12px}';
d.head.appendChild(css);
})();
