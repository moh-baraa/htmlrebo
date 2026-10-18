const T=[
["Text Elements",[
{s:'<h1> … <h6>',c:`<body>
<h1>عنوان رئيسي</h1>
<h2>عنوان فرعي</h2>
<h6>أصغر عنوان</h6>
</body>`,d:'عناوين من المستوى 1 (الأكبر) إلى 6 (الأصغر). يفضل h1 واحد فقط وترتيب المستويات بلا قفز.',a:[],l:"Element/Heading_Elements"},
{s:'<p> </p>',c:`<body>
<p>هذه فقرة نصية.</p>
</body>`,d:'فقرة نصية؛ يضيف المتصفح مسافة قبلها وبعدها.',a:[],l:"Element/p"},
{s:'<br>',c:`<body>
<p>سطر أول<br>سطر ثان</p>
</body>`,d:'فاصل سطر. وسم فارغ بلا إغلاق.',a:[],l:"Element/br"},
{s:'<hr>',c:`<body>
<p>قبل</p>
<hr>
<p>بعد</p>
</body>`,d:'خط أفقي يفصل بين محتويين موضوعياً.',a:[],l:"Element/hr"},
{s:'<span> </span>',c:`<body>
<p>لوني <span style="color:red">أحمر</span></p>
</body>`,d:'حاوية نصية مضمنة (inline) بلا معنى، للتنسيق أو JS.',a:[],l:"Element/span"},
{s:'<strong> <em> <b> <i> <mark> <small> <u> <s>',c:`<body>
<strong>مهم</strong> <em>مؤكد</em>
<b>غليظ</b> <i>مائل</i>
<mark>مظلل</mark> <small>صغير</small>
<u>تحته خط</u> <s>مشطوب</s>
</body>`,d:'وسوم تنسيق النص: strong وem لهما معنى دلالي (أهمية/تأكيد)، وb وi شكلية.',a:[],l:"Element/strong"},
{s:'<blockquote> </blockquote>',c:`<body>
<blockquote cite="https://example.com">
  اقتباس طويل من مصدر.
</blockquote>
</body>`,d:'اقتباس طويل مقتبس من مصدر آخر، ويظهر بإزاحة.',a:[
["cite","رابط مصدر الاقتباس.",["*|رابط"]]],l:"Element/blockquote"},
{s:'<pre> </pre>',c:`<body>
<pre>
سطر    بمسافات
   كما كتب
</pre>
</body>`,d:'نص منسق مسبقاً: يحافظ على المسافات والأسطر، وبخط ثابت العرض.',a:[],l:"Element/pre"}
]],
["Links & Media",[
{s:'<a> </a>',c:`<body>
<a href="https://example.com" target="_blank" rel="noopener">رابط</a>
</body>`,d:'رابط تشعبي لصفحة أو ملف أو بريد أو موقع داخل الصفحة.',a:[
["href","وجهة الرابط.",["https://…|رابط مطلق","page.html|نسبي","#id|عنصر داخل الصفحة","mailto:a@b.com|بريد","tel:+962…|اتصال"]],
["target","مكان الفتح.",["_self|نفس النافذة","_blank|تبويب جديد","_parent|الإطار الأب","_top|أعلى مستوى"]],
["download","تنزيل الملف بدل فتحه.",["*|اسم الملف (اختياري)"]],
["rel","علاقة الرابط.",["noopener|noreferrer|nofollow|external|prev|next|…"]],
["hreflang","لغة الصفحة المرتبطة.",["ar|en|…"]],
["type","نوع MIME للهدف.",["*|مثل application/pdf"]],
["ping","روابط تُخطر عند النقر.",["*|روابط مفصولة بمسافة"]],
["referrerpolicy","سياسة الإحالة.",["no-referrer|origin|same-origin|strict-origin|unsafe-url|…"]]],l:"Element/a"},
{s:'<img>',c:`<body>
<img src="pic.png" alt="وصف" width="300" height="200" loading="lazy">
</body>`,d:'لعرض صورة. وسم فارغ، و<code>alt</code> مهم لإمكانية الوصول.',a:[
["src","مسار الصورة.",["*|رابط"]],
["alt","نص بديل.",["*|نص"]],
["width / height","الأبعاد.",["*|رقم بالبكسل"]],
["srcset","صور متعددة الدقة.",["*|مثل img2x.png 2x"]],
["sizes","أحجام العرض مع srcset.",["*|مثل (max-width:600px) 100vw"]],
["loading","وقت التحميل.",["eager|فوراً","lazy|عند الاقتراب"]],
["decoding","طريقة فك الترميز.",["sync|async|auto"]],
["crossorigin","طلب CORS.",["anonymous|use-credentials"]],
["usemap","ربط بخريطة صور.",["#name"]],
["ismap","خريطة من جهة الخادم.",["ismap"]],
["fetchpriority","أولوية التحميل.",["high|low|auto"]]],l:"Element/img"},
{s:'<video> </video>',c:`<body>
<video src="a.mp4" controls width="320" poster="p.png">
  متصفحك لا يدعم الفيديو.
</video>
</body>`,d:'لتشغيل الفيديو، ويمكن وضع عدة مصادر بـ <code>&lt;source&gt;</code>.',a:[
["src","ملف الفيديو.",["*|رابط"]],
["controls","أزرار التحكم.",["controls"]],
["autoplay","تشغيل تلقائي (غالباً مع muted).",["autoplay"]],
["loop","إعادة التشغيل.",["loop"]],
["muted","بدون صوت.",["muted"]],
["poster","صورة قبل التشغيل.",["*|رابط"]],
["preload","تحميل مسبق.",["none|metadata|auto"]],
["width / height","الأبعاد.",["*|بكسل"]],
["playsinline","تشغيل داخل الصفحة على iOS.",["playsinline"]],
["crossorigin","طلب CORS.",["anonymous|use-credentials"]]],l:"Element/video"},
{s:'<audio> </audio>',c:`<body>
<audio src="a.mp3" controls></audio>
</body>`,d:'لتشغيل الصوت.',a:[
["src","ملف الصوت.",["*|رابط"]],
["controls","أزرار التحكم.",["controls"]],
["autoplay","تشغيل تلقائي.",["autoplay"]],
["loop","تكرار.",["loop"]],
["muted","كتم.",["muted"]],
["preload","تحميل مسبق.",["none|metadata|auto"]]],l:"Element/audio"},
{s:'<iframe> </iframe>',c:`<body>
<iframe src="https://example.com" width="400" height="300" loading="lazy"></iframe>
</body>`,d:'تضمين صفحة أخرى داخل صفحتك.',a:[
["src","عنوان الصفحة.",["*|رابط"]],
["srcdoc","كود HTML مباشر.",["*|كود"]],
["name","اسم الإطار لـ target.",["*|نص"]],
["width / height","الأبعاد.",["*|بكسل"]],
["loading","وقت التحميل.",["eager|lazy"]],
["allow","صلاحيات الجهاز.",["fullscreen|camera|microphone|geolocation|…"]],
["allowfullscreen","السماح بملء الشاشة.",["allowfullscreen"]],
["sandbox","تقييد الأمان.",["(فارغ)|أقصى تقييد","allow-scripts|allow-forms|allow-same-origin|allow-popups|…"]],
["referrerpolicy","سياسة الإحالة.",["no-referrer|origin|…"]]],l:"Element/iframe"},
{s:'<link>',c:`<head>
<link rel="stylesheet" href="style.css">
<link rel="icon" href="icon.png">
</head>`,d:'يربط الصفحة بمورد خارجي: أنماط، أيقونة، خطوط.',a:[
["href","مسار المورد.",["*|رابط"]],
["rel","نوع العلاقة.",["stylesheet|icon|preload|prefetch|preconnect|canonical|alternate|manifest|apple-touch-icon"]],
["type","نوع MIME.",["text/css|image/png|…"]],
["media","شرط التطبيق.",["screen|print|(max-width:600px)"]],
["as","نوع المورد مع preload.",["style|script|font|image|fetch"]],
["sizes","أحجام الأيقونة.",["16x16|32x32|any"]],
["crossorigin","طلب CORS.",["anonymous|use-credentials"]],
["integrity","بصمة SRI.",["sha384-…"]],
["hreflang","لغة المورد.",["ar|en"]]],l:"Element/link"}
]],
["Lists & Tables",[
{s:'<ul> <li>',c:`<body>
<ul>
  <li>عنصر</li>
  <li>عنصر</li>
</ul>
</body>`,d:'قائمة غير مرتبة (نقاط).',a:[],l:"Element/ul"},
{s:'<ol> <li>',c:`<body>
<ol type="A" start="3" reversed>
  <li>ثالث</li>
  <li value="10">عشرة</li>
</ol>
</body>`,d:'قائمة مرتبة (ترقيم). وفي <code>li</code> الخاصية value.',a:[
["type","نوع الترقيم.",["1|أرقام","a|حروف صغيرة","A|حروف كبيرة","i|رومانية صغيرة","I|رومانية كبيرة"]],
["start","رقم البداية.",["*|رقم صحيح"]],
["reversed","ترقيم عكسي.",["reversed"]]],l:"Element/ol"},
{s:'<table> <tr> <th> <td>',c:`<body>
<table>
  <tr><th>الاسم</th><th>العمر</th></tr>
  <tr><td>أحمد</td><td colspan="1">20</td></tr>
</table>
</body>`,d:'جدول بيانات: tr صف، th رأس، td خلية. (وهناك thead وtbody وtfoot وcaption).',a:[
["colspan (td/th)","دمج أعمدة.",["*|رقم"]],
["rowspan (td/th)","دمج صفوف.",["*|رقم"]],
["headers (td)","ربط الخلية برؤوسها.",["*|معرفات th"]],
["scope (th)","نطاق الرأس.",["col|row|colgroup|rowgroup"]],
["abbr (th)","اختصار الرأس.",["*|نص"]]],l:"Element/table"}
]],
["Forms",[
{s:'<form> </form>',c:`<body>
<form action="/send" method="post" autocomplete="on">
  <input name="u">
  <button>إرسال</button>
</form>
</body>`,d:'نموذج لجمع بيانات المستخدم وإرسالها.',a:[
["action","وجهة الإرسال.",["*|رابط"]],
["method","طريقة الإرسال.",["get|في الرابط","post|في الجسم","dialog|إغلاق dialog"]],
["enctype","ترميز البيانات.",["application/x-www-form-urlencoded|multipart/form-data|text/plain"]],
["target","مكان عرض الرد.",["_self|_blank|_parent|_top"]],
["autocomplete","إكمال تلقائي.",["on|off"]],
["novalidate","تعطيل التحقق.",["novalidate"]],
["accept-charset","ترميز الإرسال.",["UTF-8"]],
["name","اسم النموذج.",["*|نص"]],
["rel","علاقة الرابط.",["noopener|noreferrer|…"]]],l:"Element/form"},
{s:'<input>',c:`<body>
<input type="email" name="mail" placeholder="بريدك" required maxlength="50">
</body>`,d:'حقل إدخال، ويتغير شكله حسب <code>type</code>.',a:[
["type","نوع الحقل.",["text|password|email|number|tel|url|search|date|time|datetime-local|month|week|color|range|file|checkbox|radio|hidden|submit|reset|button|image"]],
["name / id","اسم الحقل ومعرفه.",["*|نص"]],
["value","القيمة الابتدائية.",["*|نص"]],
["placeholder","نص إرشادي.",["*|نص"]],
["required","إلزامي.",["required"]],
["disabled","معطل.",["disabled"]],
["readonly","للقراءة فقط.",["readonly"]],
["checked","محدد (checkbox/radio).",["checked"]],
["min / max / step","حدود وخطوة الأرقام والتواريخ.",["*|قيمة"]],
["minlength / maxlength","طول النص.",["*|رقم"]],
["pattern","نمط تحقق Regex.",["*|تعبير نمطي"]],
["multiple","عدة قيم (file/email).",["multiple"]],
["accept","أنواع الملفات.",["image/*|.pdf|…"]],
["autocomplete","إكمال تلقائي.",["on|off|name|email|username|new-password|…"]],
["autofocus","تركيز تلقائي.",["autofocus"]],
["list","ربط بـ datalist.",["*|id"]],
["size","عدد الأحرف الظاهرة.",["*|رقم"]],
["form","ربط بنموذج بمعرفه.",["*|id"]]],l:"Element/input"},
{s:'<button> </button>',c:`<body>
<button type="submit" onclick="alert(1)">حفظ</button>
</body>`,d:'زر قابل للنقر.',a:[
["type","وظيفة الزر.",["submit|إرسال (افتراضي)","reset|تصفير","button|بلا وظيفة"]],
["name / value","بيانات تُرسل.",["*|نص"]],
["disabled","تعطيل.",["disabled"]],
["form","ربط بنموذج.",["*|id"]],
["formaction","وجهة بديلة.",["*|رابط"]],
["formmethod","طريقة بديلة.",["get|post"]],
["formtarget","هدف بديل.",["_self|_blank|…"]],
["formnovalidate","تجاوز التحقق.",["formnovalidate"]],
["popovertarget","فتح popover.",["*|id"]]],l:"Element/button"},
{s:'<label> </label>',c:`<body>
<label for="u">الاسم</label>
<input id="u">
</body>`,d:'نص يرتبط بحقل؛ النقر عليه يركز الحقل.',a:[
["for","معرف الحقل المرتبط.",["*|id"]]],l:"Element/label"},
{s:'<select> <option>',c:`<body>
<select name="c" required>
  <optgroup label="دول">
    <option value="jo" selected>الأردن</option>
    <option value="sa" disabled>السعودية</option>
  </optgroup>
</select>
</body>`,d:'قائمة منسدلة. option خيار، وoptgroup تجمع خيارات.',a:[
["name","اسم الحقل.",["*|نص"]],
["multiple","اختيار متعدد.",["multiple"]],
["size","عدد الخيارات الظاهرة.",["*|رقم"]],
["required","إلزامي.",["required"]],
["disabled","معطلة.",["disabled"]],
["value (option)","قيمة الخيار.",["*|نص"]],
["selected (option)","محدد افتراضياً.",["selected"]],
["label (optgroup)","عنوان المجموعة.",["*|نص"]]],l:"Element/select"},
{s:'<textarea> </textarea>',c:`<body>
<textarea rows="4" cols="30" placeholder="رسالتك" maxlength="200"></textarea>
</body>`,d:'حقل نص متعدد الأسطر.',a:[
["rows / cols","عدد الأسطر والأعمدة.",["*|رقم"]],
["wrap","التفاف النص.",["soft|hard"]],
["placeholder","نص إرشادي.",["*|نص"]],
["maxlength / minlength","حدود الطول.",["*|رقم"]],
["required / disabled / readonly","حالات الحقل.",["الخاصية بلا قيمة"]],
["spellcheck","تدقيق إملائي.",["true|false"]]],l:"Element/textarea"}
]],
["Other",[
{s:'<noscript> </noscript>',c:`<body>
<noscript>فعّل الجافا سكربت</noscript>
</body>`,d:'محتوى يظهر عند تعطيل الجافا سكربت.',a:[],l:"Element/noscript"}
]]];

const anchor=document.getElementById("global-one").parentNode.previousElementSibling;
T.forEach(([title,list])=>{
  const h=document.createElement("h2");h.textContent="<"+title+">";
  const m=document.createElement("main");
  const a=document.createElement("div");a.className="divOne";
  const b=document.createElement("div");b.className="divTwo";
  m.append(a,b);
  const half=Math.ceil(list.length/2);
  list.forEach((t,i)=>(i<half?a:b).appendChild(item(t)));
  anchor.before(h,m);
});
