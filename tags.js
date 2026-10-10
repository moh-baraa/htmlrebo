/* ===== بيانات الوسوم: s=العنوان c=المثال d=الشرح a=الخصائص [اسم, شرح, [قيمة|شرح]] l=رابط ===== */
const MDN="https://developer.mozilla.org/en-US/docs/Web/HTML/";
const NOSPEC=[];

const HEAD=[
{s:'<title> </title>',c:`<head>
<title>My Web Page</title>
</head>`,d:'لإضافة عنوان للصفحة "يظهر في تبويب المتصفح ومحركات البحث". يجب أن يكون واحداً فقط داخل الـ head ونصاً فقط.',a:NOSPEC,l:"Element/title"},

{s:'<script> </script>',c:`<head>
<script src="app.js" defer></script>
<script type="module">
  import {x} from "./m.js";
</script>
</head>`,d:'لكتابة كود الجافا سكربت داخل ملف الـ html أو ربط ملف خارجي.<br>يفضل وضعه في نهاية الـ body أو استخدام <code>defer</code>.',a:[
["src","مسار ملف الجافا سكربت الخارجي.",["*|رابط نسبي أو مطلق"]],
["type","نوع الكود داخل الوسم.",["text/javascript|الافتراضي","module|وحدة ES تدعم import/export","importmap|خريطة استيراد الوحدات","speculationrules|قواعد التحميل المسبق","*|أي نوع آخر (مثل application/json) يعامل كبيانات ولا ينفذ"]],
["async","تحميل الملف بالتوازي وتنفيذه فور جاهزيته (بدون ترتيب).",["async|خاصية منطقية بدون قيمة"]],
["defer","تحميل بالتوازي وتنفيذ بعد اكتمال تحليل الصفحة وبالترتيب.",["defer|خاصية منطقية"]],
["nomodule","يمنع التنفيذ في المتصفحات التي تدعم الوحدات (للمتصفحات القديمة).",["nomodule|خاصية منطقية"]],
["crossorigin","طريقة طلب الملف من نطاق آخر (CORS).",["anonymous|بدون بيانات اعتماد","use-credentials|مع الكوكيز وبيانات الاعتماد"]],
["integrity","بصمة الملف للتحقق من عدم تعديله (SRI).",["sha256-…|sha384-…|sha512-…"]],
["referrerpolicy","كم من عنوان الصفحة يُرسل عند طلب الملف.",["no-referrer|لا يرسل شيئاً","no-referrer-when-downgrade|الافتراضي القديم","origin|النطاق فقط","origin-when-cross-origin|كامل للنطاق نفسه والنطاق فقط لغيره","same-origin|للنطاق نفسه فقط","strict-origin|النطاق فقط بشرط HTTPS","strict-origin-when-cross-origin|الافتراضي الحالي","unsafe-url|العنوان كاملاً دائماً"]],
["fetchpriority","أولوية تحميل الملف.",["high|عالية","low|منخفضة","auto|يقرر المتصفح"]],
["blocking","منع العرض حتى انتهاء التحميل.",["render|يمنع رسم الصفحة"]],
["nonce","رمز لمرة واحدة لسياسة CSP.",["*|نص عشوائي"]]],l:"Element/script"},

{s:'<meta charset="UTF-8">',c:`<head>
<meta charset="UTF-8">
</head>`,d:'يحدد ترميز الأحرف، ويجب أن يكون ضمن أول 1024 بايت من الصفحة. يلزم <code>UTF-8</code> لعرض العربية بشكل صحيح.',a:[
["charset","اسم الترميز.",["UTF-8|الموصى به ويدعم كل اللغات","ISO-8859-1|لاتيني غربي","windows-1256|عربي قديم","windows-1252|لاتيني ويندوز","UTF-16|يونيكود 16 بت"]]],l:"Element/meta#charset"},

{s:'<meta name="application-name" content="">',c:`<head>
<meta name="application-name" content="HTML Elements">
</head>`,d:'يحدد اسم التطبيق الذي تمثله الصفحة (يستخدم عند تثبيت الموقع كتطبيق).',a:[
["name","اسم بيانات الوصف.",["application-name|اسم التطبيق","author|الكاتب","description|الوصف","generator|أداة إنشاء الصفحة","keywords|كلمات مفتاحية","referrer|سياسة الإحالة","theme-color|لون شريط المتصفح","color-scheme|الوضع الفاتح/الداكن","robots|تعليمات محركات البحث","viewport|إعدادات العرض"]],
["content","قيمة بيانات الوصف.",["*|نص حر حسب الاسم"]]],l:"Element/meta/name"},

{s:'<meta name="keywords" content="">',c:`<head>
<meta name="keywords" content="HTML, elements, Tags">
</head>`,d:'كلمات مفتاحية مفصولة بفاصلة. ملاحظة: الاسم الصحيح <code>keywords</code> (بالجمع) وأغلب محركات البحث تتجاهلها اليوم.',a:[
["name","يجب أن يكون keywords.",["keywords"]],
["content","الكلمات مفصولة بفاصلة.",["*|مثال: HTML, CSS, JS"]]],l:"Element/meta/name"},

{s:'<meta http-equiv="refresh" content="">',c:`<head>
<meta http-equiv="refresh" content="5;url=https://www.w3schools.com/">
</head>`,d:'يحاكي ترويسة HTTP. مع <code>refresh</code> يعيد تحميل الصفحة أو ينقل المستخدم لرابط آخر بعد عدد ثوان.',a:[
["http-equiv","اسم ترويسة HTTP المحاكاة.",["refresh|إعادة تحميل أو تحويل","content-type|نوع المحتوى والترميز (text/html; charset=utf-8)","default-style|ورقة الأنماط الافتراضية","x-ua-compatible|وضع التوافق (IE=edge)","content-security-policy|سياسة أمان المحتوى"]],
["content","قيمة الترويسة. مع refresh:",["5|إعادة تحميل الصفحة بعد 5 ثوان","0;url=page.html|تحويل فوري","5;url=https://…|تحويل بعد 5 ثوان"]]],l:"Element/meta/http-equiv"},

{s:'<style> </style>',c:`<head>
<style>
  h1 { color: red; }
  @media (max-width:600px){ body{font-size:14px} }
</style>
</head>`,d:'لكتابة أكواد css داخل ملف الـ html في الـ head أو الـ body.<br>كما يمكن استخدام <code>style="…"</code> كخاصية داخل أي وسم.',a:[
["media","شرط تطبيق الأنماط.",["all|كل الأجهزة (افتراضي)","screen|الشاشات","print|الطباعة","(max-width:600px)|أي media query"]],
["type","نوع المحتوى (قديمة).",["text/css|الافتراضي"]],
["blocking","منع الرسم حتى تحميل الأنماط.",["render"]],
["nonce","رمز CSP لمرة واحدة.",["*|نص عشوائي"]],
["title","اسم مجموعة الأنماط البديلة.",["*|نص"]]],l:"Element/style"},

{s:'<base href="" target="">',c:`<head>
<base href="https://www.w3schools.com/" target="_blank">
</head>
<body>
<a href="">go</a>
</body>`,d:'اللينك الأفتراضي للصفحة، بحيث أي رابط نسبي أو فارغ يتم بناؤه على هذا الأساس. يوضع مرة واحدة فقط داخل الـ head.',a:[
["href","الرابط الأساسي لكل الروابط النسبية.",["*|رابط مطلق أو نسبي"]],
["target","مكان فتح كل الروابط افتراضياً.",["_self|نفس النافذة (افتراضي)","_blank|نافذة/تبويب جديد","_parent|الإطار الأب","_top|أعلى مستوى","name|إطار مسمى"]]],l:"Element/base"},

{s:'<meta name="description" content="">',c:`<head>
<meta name="description" content="جميع عناصر الـ HTML مع الشرح.">
</head>`,d:'وصف مختصر للصفحة (حوالي 150 حرفاً) يظهر غالباً تحت العنوان في نتائج البحث.',a:[
["name","يجب أن يكون description.",["description"]],
["content","نص الوصف.",["*|نص حر"]]],l:"Element/meta/name"},

{s:'<meta name="author" content="">',c:`<head>
<meta name="author" content="Mohamad Baraa Rakouki">
</head>`,d:'يحدد اسم كاتب الصفحة.',a:[
["name","يجب أن يكون author.",["author"]],
["content","اسم الكاتب.",["*|نص حر"]]],l:"Element/meta/name"},

{s:'<meta name="viewport" content="width=device-width, initial-scale=1.0">',c:`<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`,d:'يتحكم بطريقة عرض الصفحة على الهواتف وهو أساس التصميم المتجاوب.',a:[
["name","يجب أن يكون viewport.",["viewport"]],
["content","قائمة إعدادات مفصولة بفاصلة:",["width|عرض الصفحة: رقم بالبكسل أو device-width","height|ارتفاع الصفحة: رقم أو device-height","initial-scale|التكبير الابتدائي (1.0 = بدون تكبير)","minimum-scale|أقل تكبير مسموح","maximum-scale|أكبر تكبير مسموح","user-scalable|yes أو no للسماح بتكبير المستخدم (no يضر بإمكانية الوصول)","viewport-fit|auto أو contain أو cover للتعامل مع الشاشات ذات الحواف","interactive-widget|resizes-visual أو resizes-content أو overlays-content (سلوك لوحة المفاتيح)"]]],l:"Element/meta/name/viewport"}
];

const BODY=[
{s:'<header> </header>',c:`<body>
<header>
  <h1>موقعي</h1>
  <p>شعار الموقع</p>
</header>
</body>`,d:'مقدمة الصفحة أو القسم: شعار، عنوان، أدوات بحث. يمكن استخدام أكثر من واحد (للصفحة ولكل section).',a:NOSPEC,l:"Element/header"},
{s:'<aside> </aside>',c:`<body>
<article>
  <p>نص المقال…</p>
  <aside>معلومة جانبية</aside>
</article>
</body>`,d:'محتوى جانبي غير أساسي مرتبط بما حوله: شريط جانبي، إعلان، اقتباس.',a:NOSPEC,l:"Element/aside"},
{s:'<section> </section>',c:`<body>
<section id="about">
  <h2>من نحن</h2>
  <p>نبذة…</p>
</section>
</body>`,d:'قسم موضوعي في الصفحة ويفضل أن يحتوي على عنوان (h1–h6).',a:NOSPEC,l:"Element/section"},
{s:'<figure> </figure>',c:`<body>
<figure>
  <img src="pic.png" alt="صورة">
  <figcaption>شرح الصورة</figcaption>
</figure>
</body>`,d:'محتوى مستقل (صورة، مخطط، كود) مع شرح اختياري بالوسم <code>&lt;figcaption&gt;</code>.',a:NOSPEC,l:"Element/figure"},
{s:'<nav> </nav>',c:`<body>
<nav>
  <a href="/">الرئيسية</a>
  <a href="/about">من نحن</a>
</nav>
</body>`,d:'مجموعة روابط التنقل الرئيسية. يفضل إضافة <code>aria-label</code> إذا وجد أكثر من nav.',a:NOSPEC,l:"Element/nav"},
{s:'<main> </main>',c:`<body>
<header>…</header>
<main>
  <h1>المحتوى الرئيسي</h1>
</main>
<footer>…</footer>
</body>`,d:'المحتوى الأساسي للصفحة. يسمح بواحد ظاهر فقط في الصفحة، ولا يوضع داخل header أو footer أو nav أو aside.',a:NOSPEC,l:"Element/main"},
{s:'<footer> </footer>',c:`<body>
<footer>
  <p>© 2026 جميع الحقوق محفوظة</p>
</footer>
</body>`,d:'تذييل الصفحة أو القسم: حقوق النشر، روابط، معلومات الاتصال.',a:NOSPEC,l:"Element/footer"},
{s:'<div> </div>',c:`<body>
<div class="card" id="box">
  <p>حاوية عامة للتنسيق</p>
</div>
</body>`,d:'حاوية عامة بلا معنى دلالي، تستخدم للتنسيق بـ CSS أو التحكم بـ JS عندما لا يناسب وسم دلالي آخر.',a:[
["align","محاذاة المحتوى (قديمة ومهملة، استخدم CSS).",["left|يسار","right|يمين","center|وسط","justify|ضبط"]]],l:"Element/div"}
];

const GLOBAL=[
{s:'id / class / style / title',c:`<div id="box" class="card big" style="color:red" title="تلميح">…</div>`,d:'خصائص التعريف والتنسيق.',a:[
["id","معرف فريد في الصفحة.",["*|نص بلا مسافات"]],
["class","اسم أو أكثر للتنسيق والاختيار.",["*|أسماء مفصولة بمسافة"]],
["style","تنسيق CSS مباشر.",["*|color:red; …"]],
["title","نص تلميح عند مرور الماوس.",["*|نص"]]],l:"Global_attributes"},
{s:'lang / dir / translate',c:`<div lang="ar" dir="rtl" translate="no">نص عربي</div>`,d:'خصائص اللغة والاتجاه.',a:[
["lang","لغة المحتوى.",["ar|العربية","en|الإنجليزية","*|أي رمز BCP47"]],
["dir","اتجاه النص.",["ltr|يسار لليمين","rtl|يمين ليسار","auto|حسب المحتوى"]],
["translate","هل يترجمه المتصفح.",["yes|نعم","no|لا"]]],l:"Global_attributes"},
{s:'hidden / inert / popover',c:`<div hidden>مخفي</div>
<div inert>غير تفاعلي</div>
<div popover id="p">نافذة منبثقة</div>`,d:'خصائص الإخفاء والتفاعل.',a:[
["hidden","إخفاء العنصر.",["hidden|إخفاء كامل","until-found|مخفي لكن يظهر عند العثور عليه بالبحث"]],
["inert","يعطل التفاعل والتركيز على العنصر.",["inert|خاصية منطقية"]],
["popover","يجعله نافذة منبثقة.",["auto|يغلق عند النقر خارجه","manual|يغلق يدوياً فقط"]]],l:"Global_attributes/popover"},
{s:'contenteditable / draggable / spellcheck',c:`<div contenteditable="true" spellcheck="false">عدلني</div>
<div draggable="true">اسحبني</div>`,d:'خصائص التحرير والسحب.',a:[
["contenteditable","يسمح بتعديل المحتوى.",["true|قابل للتعديل","false|غير قابل","plaintext-only|نص فقط"]],
["draggable","قابلية السحب.",["true|نعم","false|لا","auto|الافتراضي"]],
["spellcheck","التدقيق الإملائي.",["true|مفعل","false|معطل"]]],l:"Global_attributes"},
{s:'tabindex / accesskey / autofocus',c:`<div tabindex="0" accesskey="k" autofocus>يمكن التركيز عليه</div>`,d:'خصائص التركيز بلوحة المفاتيح.',a:[
["tabindex","ترتيب التركيز بزر Tab.",["0|حسب ترتيب الصفحة","-1|بالبرمجة فقط","1,2,3…|أولوية (لا ينصح)"]],
["accesskey","اختصار لوحة مفاتيح.",["*|حرف واحد أو أكثر"]],
["autofocus","تركيز تلقائي عند التحميل.",["autofocus|خاصية منطقية"]]],l:"Global_attributes"},
{s:'role / aria-* / data-*',c:`<nav role="navigation" aria-label="الرئيسية" data-id="12">…</nav>`,d:'خصائص إمكانية الوصول والبيانات المخصصة.',a:[
["role","دور العنصر لقارئات الشاشة.",["navigation|banner|main|complementary|contentinfo|button|…|حسب WAI-ARIA"]],
["aria-*","وصف الحالة لإمكانية الوصول.",["aria-label|اسم نصي","aria-hidden|true/false إخفاء عن القارئ","aria-expanded|true/false حالة التوسع"]],
["data-*","بيانات مخصصة يقرؤها JS عبر dataset.",["*|أي قيمة نصية"]]],l:"Global_attributes/data-*"},
{s:'inputmode / enterkeyhint / autocapitalize',c:`<div contenteditable inputmode="numeric" enterkeyhint="send" autocapitalize="words"></div>`,d:'خصائص لوحة المفاتيح على الجوال.',a:[
["inputmode","نوع لوحة المفاتيح.",["none|text|tel|url|email|numeric|decimal|search|لكل نوع لوحته"]],
["enterkeyhint","نص زر Enter.",["enter|done|go|next|previous|search|send|"]],
["autocapitalize","تكبير الأحرف تلقائياً.",["off|none|on|sentences|words|characters|"]]],l:"Global_attributes"},
{s:'onclick / onmouseover / onload ...',c:`<div onclick="alert('hi')" onmouseover="this.style.color='red'">اضغط</div>`,d:'خصائص الأحداث لتنفيذ جافا سكربت عند حدوث حدث.',a:[
["onclick","عند النقر.",["*|كود JS"]],
["ondblclick","عند النقر المزدوج.",["*|كود JS"]],
["onmouseover / onmouseout","دخول/خروج المؤشر.",["*|كود JS"]],
["onkeydown / onkeyup","ضغط/ترك مفتاح.",["*|كود JS"]],
["onfocus / onblur","كسب/فقد التركيز.",["*|كود JS"]],
["onload","اكتمال التحميل.",["*|كود JS"]]],l:"Global_attributes"}
];

/* ===== الرسم: نفس نمط الملف الأصلي ===== */
function hl(code){
  return code.replace(/<\/?(?:head|body|html)>|<\/?[\w-]+|\/?>|[\w-]+(?==)|"[^"]*"|[<>&]/g,m=>{
    const e=m.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    if(/^<\/?(head|body|html)>$/.test(m))return `<span class="elementA">${e}</span>`;
    if(m[0]==="<"||m.endsWith(">"))return `<span class="elementB">${e}</span>`;
    if(m[0]==='"')return `<span class="orange">${e}</span>`;
    if(/^[\w-]+$/.test(m))return `<span class="blue">${e}</span>`;
    return e;});
}
function table(a){
  if(!a.length)return `<p dir="rtl" class="noattr">لا توجد خصائص خاصة بهذا الوسم (يدعم الخصائص العامة فقط).</p>`;
  const rows=a.map(([n,d,v])=>`<tr><td><code>${n}</code></td><td>${d}</td><td>${v.length?"<ul>"+v.map(x=>{const i=x.indexOf("|");return i<0?`<li><code>${x}</code></li>`:`<li><code>${x.slice(0,i)}</code>${x.slice(i+1)?" — "+x.slice(i+1):""}</li>`}).join("")+"</ul>":"—"}</td></tr>`).join("");
  return `<div class="attrs-wrap"><p class="attrs-title" dir="rtl">الخصائص (Attributes):</p><table class="attrs" dir="rtl"><tr><th>الخاصية</th><th>الشرح</th><th>القيم الممكنة</th></tr>${rows}</table></div>`;
}
function item(t){
  const el=document.createElement("details");
  const s=t.s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  el.innerHTML=`<summary><code>${s}</code></summary>
<pre><code>
${hl(t.c)}
</code></pre>
<p dir="rtl">${t.d}</p>
${table(t.a)}
<footer><p>للمزيد من التفاصيل يرجى زيارة الرابط <a href="${MDN}${t.l}" target="_blank" rel="noopener">الذهاب</a></p></footer>`;
  return el;
}
function fill(list,one,two){
  const h=Math.ceil(list.length/2);
  list.forEach((t,i)=>document.getElementById(i<h?one:two).appendChild(item(t)));
}
fill(HEAD,"head-one","head-two");
fill(BODY,"body-one","body-two");
fill(GLOBAL,"global-one","global-two");
