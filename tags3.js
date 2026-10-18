const T3=[
["Document & Sections",[
{s:'<html> <head> <body>',c:`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>…</head>
<body>…</body>
</html>`,d:'html الجذر، وhead للبيانات الوصفية غير المرئية، وbody لمحتوى الصفحة.',a:[
["xmlns (html)","فضاء الأسماء (قديم).",["http://www.w3.org/1999/xhtml"]],
["manifest (html)","ملف الكاش (محذوف).",["*|رابط"]],
["profile (head)","(محذوفة).",["*|رابط"]],
["bgcolor / text / link / vlink / alink / background (body)","ألوان قديمة، استخدم CSS.",["*|لون أو رابط"]],
["onload / onunload / onresize / onbeforeunload (body)","أحداث النافذة.",["*|كود JS"]]],l:"Element/html"},
{s:'<article> </article>',c:`<article>
  <h2>خبر</h2><p>نص…</p>
</article>`,d:'محتوى مستقل قابل للتوزيع منفرداً: مقال، تدوينة، تعليق.',a:[],l:"Element/article"},
{s:'<hgroup> </hgroup>',c:`<hgroup>
  <h1>العنوان</h1>
  <p>العنوان الفرعي</p>
</hgroup>`,d:'يجمع عنواناً مع عنوان فرعي.',a:[],l:"Element/hgroup"},
{s:'<address> </address>',c:`<address>
  <a href="mailto:a@b.com">a@b.com</a>
</address>`,d:'معلومات الاتصال بصاحب الصفحة أو المقال.',a:[],l:"Element/address"},
{s:'<search> </search>',c:`<search>
  <form>…</form>
</search>`,d:'منطقة البحث أو التصفية في الصفحة.',a:[],l:"Element/search"},
{s:'<menu> </menu>',c:`<menu>
  <li><button>نسخ</button></li>
</menu>`,d:'قائمة أوامر تفاعلية (تشبه ul).',a:[],l:"Element/menu"}
]],
["Text Semantics",[
{s:'<code> <kbd> <samp> <var>',c:`<code>let x=1;</code>
<kbd>Ctrl</kbd>+<kbd>C</kbd>
<samp>خرج البرنامج</samp>
<var>x</var>`,d:'code كود، kbd مفاتيح، samp ناتج برنامج، var متغير.',a:[],l:"Element/code"},
{s:'<abbr> <acronym>',c:`<abbr title="HyperText Markup Language">HTML</abbr>`,d:'اختصار؛ التلميح في title. وacronym محذوف.',a:[],l:"Element/abbr"},
{s:'<q> <cite> <dfn>',c:`<q cite="https://x.com">اقتباس قصير</q>
<cite>اسم كتاب</cite>
<dfn>المصطلح</dfn>`,d:'q اقتباس قصير، cite عنوان عمل، dfn تعريف مصطلح.',a:[
["cite (q)","مصدر الاقتباس.",["*|رابط"]]],l:"Element/q"},
{s:'<time> <data>',c:`<time datetime="2026-10-11T10:00">اليوم</time>
<data value="12">اثنا عشر</data>`,d:'time تاريخ/وقت مقروء آلياً، وdata قيمة آلية.',a:[
["datetime (time)","التاريخ والوقت.",["2026-10-11|2026-10-11T10:00|PT2H|…"]],
["value (data)","القيمة الآلية.",["*|نص"]]],l:"Element/time"},
{s:'<sub> <sup> <del> <ins>',c:`H<sub>2</sub>O  x<sup>2</sup>
<del datetime="2026-01-01">قديم</del>
<ins cite="url">جديد</ins>`,d:'sub منخفض، sup مرتفع، del محذوف، ins مضاف.',a:[
["cite (del/ins)","رابط سبب التغيير.",["*|رابط"]],
["datetime (del/ins)","وقت التغيير.",["*|تاريخ"]]],l:"Element/del"},
{s:'<ruby> <rt> <rp>',c:`<ruby>漢<rp>(</rp><rt>han</rt><rp>)</rp></ruby>`,d:'نص نطق فوق الأحرف (آسيوية): rt النطق، rp أقواس احتياطية.',a:[],l:"Element/ruby"},
{s:'<bdi> <bdo>',c:`<bdi>مستخدم</bdi>
<bdo dir="rtl">abc</bdo>`,d:'bdi يعزل اتجاه النص، وbdo يفرضه.',a:[
["dir (bdo)","الاتجاه المفروض.",["ltr|rtl"]]],l:"Element/bdo"},
{s:'<wbr>',c:`super<wbr>cali<wbr>fragilistic`,d:'نقطة كسر سطر مسموحة داخل الكلمة الطويلة.',a:[],l:"Element/wbr"},
{s:'<dl> <dt> <dd>',c:`<dl>
  <dt>HTML</dt>
  <dd>لغة الترميز</dd>
</dl>`,d:'قائمة وصف: dt المصطلح وdd الوصف.',a:[],l:"Element/dl"}
]],
["Embedded & Graphics",[
{s:'<picture> <source>',c:`<picture>
  <source srcset="a.webp" type="image/webp" media="(min-width:600px)">
  <img src="a.jpg" alt="">
</picture>`,d:'صور متجاوبة حسب الجهاز أو الصيغة.',a:[
["srcset","مصادر الصورة.",["*|ملفات ودقات"]],
["sizes","أحجام العرض.",["*|شروط"]],
["media","شرط الاستخدام.",["*|media query"]],
["type","نوع MIME.",["image/webp|image/avif|video/mp4|audio/mp3|…"]],
["src (مع audio/video)","مسار الملف.",["*|رابط"]],
["width / height","الأبعاد.",["*|بكسل"]]],l:"Element/picture"},
{s:'<track>',c:`<video src="v.mp4" controls>
  <track src="ar.vtt" kind="subtitles" srclang="ar" label="عربي" default>
</video>`,d:'ترجمة أو وصف لوسائط video وaudio.',a:[
["src","ملف WebVTT.",["*|رابط"]],
["kind","نوع المسار.",["subtitles|captions|descriptions|chapters|metadata"]],
["srclang","لغة المسار.",["ar|en|…"]],
["label","اسم المسار.",["*|نص"]],
["default","افتراضي.",["default"]]],l:"Element/track"},
{s:'<canvas> </canvas>',c:`<canvas id="c" width="300" height="150"></canvas>
<script>
  c.getContext("2d").fillRect(10,10,50,50);
</script>`,d:'لوحة رسم بالجافا سكربت (2D أو WebGL).',a:[
["width / height","أبعاد اللوحة.",["*|بكسل"]]],l:"Element/canvas"},
{s:'<svg> </svg>',c:`<svg width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" fill="red"/>
</svg>`,d:'رسوم متجهة داخل الصفحة (وسم من SVG).',a:[
["width / height","الأبعاد.",["*|رقم"]],
["viewBox","نظام الإحداثيات.",["minX minY width height"]],
["xmlns","فضاء الأسماء.",["http://www.w3.org/2000/svg"]],
["preserveAspectRatio","ضبط التناسب.",["none|xMidYMid meet|xMidYMid slice|…"]]],l:"Element/svg"},
{s:'<math> </math>',c:`<math><mfrac><mi>a</mi><mi>b</mi></mfrac></math>`,d:'معادلات رياضية (MathML).',a:[
["display","طريقة العرض.",["block|inline"]]],l:"Element/math"},
{s:'<map> <area>',c:`<img src="m.png" usemap="#m" alt="">
<map name="m">
  <area shape="rect" coords="0,0,50,50" href="a.html" alt="أ">
</map>`,d:'خريطة صور بمناطق قابلة للنقر.',a:[
["name (map)","اسم الخريطة.",["*|نص"]],
["shape","شكل المنطقة.",["rect|circle|poly|default"]],
["coords","الإحداثيات.",["*|أرقام مفصولة بفاصلة"]],
["href / target / download / rel / alt","كما في a.",["*|حسب a"]]],l:"Element/map"},
{s:'<embed> <object> <param>',c:`<embed src="a.pdf" type="application/pdf" width="400" height="300">
<object data="a.swf" type="application/x-shockwave-flash">
  <param name="play" value="true">
</object>`,d:'تضمين مورد خارجي (PDF، إضافات).',a:[
["src / data","مسار المورد.",["*|رابط"]],
["type","نوع MIME.",["*|نص"]],
["width / height","الأبعاد.",["*|بكسل"]],
["name (param/object)","الاسم.",["*|نص"]],
["value (param)","القيمة.",["*|نص"]],
["usemap / form (object)","خريطة أو نموذج.",["*|مرجع"]]],l:"Element/object"}
]],
["Tables (More)",[
{s:'<caption> <thead> <tbody> <tfoot>',c:`<table>
  <caption>المبيعات</caption>
  <thead><tr><th>شهر</th></tr></thead>
  <tbody><tr><td>1</td></tr></tbody>
  <tfoot><tr><td>المجموع</td></tr></tfoot>
</table>`,d:'عنوان الجدول ورأسه وجسمه وذيله.',a:[],l:"Element/thead"},
{s:'<colgroup> <col>',c:`<colgroup>
  <col span="2" style="background:#eee">
</colgroup>`,d:'تنسيق أعمدة كاملة.',a:[
["span","عدد الأعمدة المشمولة.",["*|رقم"]]],l:"Element/col"}
]],
["Forms (More)",[
{s:'<fieldset> <legend>',c:`<fieldset disabled>
  <legend>بياناتك</legend>
  <input name="a">
</fieldset>`,d:'تجميع حقول مع عنوان.',a:[
["disabled","تعطيل الحقول بداخله.",["disabled"]],
["name","اسم المجموعة.",["*|نص"]],
["form","ربط بنموذج.",["*|id"]]],l:"Element/fieldset"},
{s:'<datalist>',c:`<input list="l">
<datalist id="l">
  <option value="عمان">
</datalist>`,d:'اقتراحات لحقل إدخال.',a:[],l:"Element/datalist"},
{s:'<progress> <meter>',c:`<progress value="40" max="100"></progress>
<meter value="0.6" min="0" max="1" low="0.3" high="0.8" optimum="0.9"></meter>`,d:'progress تقدم مهمة، meter قياس ضمن نطاق.',a:[
["value","القيمة الحالية.",["*|رقم"]],
["max","الأعلى.",["*|رقم"]],
["min (meter)","الأدنى.",["*|رقم"]],
["low / high / optimum (meter)","حدود المستويات.",["*|رقم"]]],l:"Element/meter"},
{s:'<output>',c:`<form oninput="r.value=a.value*2">
  <input name="a" type="number">
  <output name="r" for="a"></output>
</form>`,d:'يعرض نتيجة عملية حسابية.',a:[
["for","الحقول المشاركة.",["*|معرفات"]],
["name / form","الاسم والنموذج.",["*|نص"]]],l:"Element/output"},
{s:'<optgroup> <option>',c:`<optgroup label="دول" disabled>
  <option value="1" label="الأردن">الأردن</option>
</optgroup>`,d:'تجميع خيارات القائمة.',a:[
["label","العنوان.",["*|نص"]],
["disabled","تعطيل.",["disabled"]]],l:"Element/optgroup"}
]],
["Interactive",[
{s:'<details> <summary>',c:`<details open name="g">
  <summary>العنوان</summary>
  المحتوى
</details>`,d:'محتوى قابل للطي، ينقر على summary لفتحه.',a:[
["open","مفتوح افتراضياً.",["open"]],
["name","مجموعة حصرية (واحد مفتوح).",["*|نص"]]],l:"Element/details"},
{s:'<dialog> </dialog>',c:`<dialog id="d" open>
  <form method="dialog"><button>إغلاق</button></form>
</dialog>`,d:'نافذة حوار؛ تفتح بـ showModal() من JS.',a:[
["open","ظاهرة.",["open"]],
["closedby","طريقة الإغلاق.",["any|closerequest|none"]]],l:"Element/dialog"},
{s:'<template> <slot>',c:`<template id="t"><p>قالب</p></template>
<slot name="x"></slot>`,d:'template محتوى لا يعرض حتى ينسخ بـ JS، وslot نقطة إدراج في Web Components.',a:[
["shadowrootmode","إنشاء shadow DOM.",["open|closed"]],
["name (slot)","اسم الفتحة.",["*|نص"]]],l:"Element/template"}
]],
["Syntax & Others",[
{s:'<!DOCTYPE html>',c:`<!DOCTYPE html>`,d:'تعريف نوع المستند؛ يفعل وضع المعايير. يوضع في السطر الأول.',a:[],l:"Glossary/Doctype"},
{s:'<!-- Comment -->',c:`<!-- تعليق لا يظهر -->`,d:'تعليق لا يعرضه المتصفح.',a:[],l:"Guides/Comments"},
{s:'HTML Entities &...;',c:`&lt; &gt; &amp; &quot; &nbsp; &copy; &#169; &#xA9;`,d:'رموز لإظهار أحرف محجوزة: lt أصغر، gt أكبر، amp &، quot ", nbsp مسافة غير منقسمة، copy ©. وبالأرقام &#169; أو &#xA9;.',a:[],l:"Glossary/Character_reference"},
{s:'<frameset> <frame> <font> <center> <marquee>',c:`<center><font color="red" size="5">قديم</font></center>
<marquee direction="left" scrollamount="6">نص</marquee>`,d:'وسوم قديمة مهملة؛ استخدم CSS وiframe بدلها.',a:[
["color / face / size (font)","لون وخط وحجم.",["*|قيمة"]],
["direction (marquee)","اتجاه الحركة.",["left|right|up|down"]],
["behavior (marquee)","نوع الحركة.",["scroll|slide|alternate"]],
["scrollamount / scrolldelay / loop","السرعة والتأخير والتكرار.",["*|رقم"]]],l:"Element/marquee"}
]]];
const anc3=document.getElementById("global-one").parentNode.previousElementSibling;
T3.forEach(([title,list])=>{
  const h=document.createElement("h2");h.textContent="<"+title+">";
  const m=document.createElement("main");
  const a=document.createElement("div");a.className="divOne";
  const b=document.createElement("div");b.className="divTwo";
  m.append(a,b);
  const half=Math.ceil(list.length/2);
  list.forEach((t,i)=>(i<half?a:b).appendChild(item(t)));
  anc3.before(h,m);
});
