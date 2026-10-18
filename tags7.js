const G4=[
{s:'Rare Events (Form, Media, Dialog, Slot)',c:`<dialog onclose="f()" oncancel="f()"></dialog>
<div hidden="until-found" onbeforematch="f()"></div>
<slot onslotchange="f()"></slot>`,d:'أحداث أقل استخداماً.',a:[
["oncancel / onclose","إلغاء وإغلاق dialog.",["*|كود JS"]],
["onbeforematch","قبل إظهار hidden=until-found.",["*|كود JS"]],
["onslotchange","تغير محتوى slot.",["*|كود JS"]],
["onformdata","بناء FormData.",["*|كود JS"]],
["oncuechange","تغير الترجمة (track).",["*|كود JS"]],
["ondurationchange / onsuspend / onprogress / onloadstart / onloadend","أحداث التحميل.",["*|كود JS"]],
["onsecuritypolicyviolation","مخالفة CSP.",["*|كود JS"]],
["oncontextlost / oncontextrestored","فقد سياق canvas.",["*|كود JS"]],
["onfullscreenchange / onvisibilitychange / onreadystatechange","(تُسجل غالباً بـ addEventListener).",["*|كود JS"]],
["ongesturestart / ongesturechange / ongestureend","إيماءات (Safari).",["*|كود JS"]]],l:"Global_attributes#event_handler_attributes"},
{s:'contenteditable & inputmode (Details)',c:`<div contenteditable="plaintext-only" inputmode="decimal" enterkeyhint="search">…</div>`,d:'تفصيل أكثر لقيم محددة.',a:[
["contenteditable","التحرير.",["(فارغ)|=true","true|نص منسق","false|بلا تعديل","plaintext-only|نص خام فقط","inherit|(قديم)"]],
["inputmode","لوحة المفاتيح.",["none|بلا لوحة","text|عادية","decimal|أرقام وفاصلة","numeric|أرقام فقط","tel|هاتف","search|بحث","email|بريد","url|رابط"]],
["enterkeyhint","نص زر الإدخال.",["enter|done|go|next|previous|search|send"]],
["spellcheck","التدقيق.",["true|false|(فارغ)"]],
["translate","الترجمة.",["yes|no|(فارغ)"]]],l:"Global_attributes/contenteditable"}
];
G4.forEach((t,i)=>document.getElementById(i%2?"global-two":"global-one").appendChild(item(t)));

/* ===== بحث فوري بين كل الوسوم ===== */
const hdr=document.querySelector("header");
hdr.insertAdjacentHTML("afterend",'<input id="q" type="search" placeholder="🔍 ابحث عن وسم أو خاصية... مثل: input / autocomplete / aria" dir="rtl"><p id="q-count"></p>');
document.getElementById("q").addEventListener("input",e=>{
  const v=e.target.value.trim().toLowerCase();
  const all=[...document.querySelectorAll("main details")];
  let n=0;
  all.forEach(d=>{
    const ok=!v||d.textContent.toLowerCase().includes(v);
    d.style.display=ok?"":"none";
    d.open=!!v&&ok&&all.length&&v.length>1&&d.querySelector("summary").textContent.toLowerCase().includes(v);
    if(ok)n++;
  });
  document.querySelectorAll("main").forEach(m=>{
    const any=[...m.querySelectorAll("details")].some(d=>d.style.display!=="none");
    m.style.display=any?"":"none";
    if(m.previousElementSibling&&m.previousElementSibling.tagName==="H2")m.previousElementSibling.style.display=any?"":"none";
  });
  document.getElementById("q-count").textContent=v?"النتائج: "+n:"";
});
