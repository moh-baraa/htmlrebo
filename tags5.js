/* ===== ARIA (خصائص عامة: سماوي) ===== */
const G3=[
{s:'role (Landmark & Structure)',c:`<div role="navigation" aria-label="الرئيسية">…</div>`,d:'يحدد دور العنصر لقارئات الشاشة.',a:[
["role (Landmarks)","مناطق الصفحة.",["banner|navigation|main|complementary|contentinfo|region|search|form"]],
["role (Document)","هيكل المحتوى.",["article|heading|list|listitem|table|row|cell|columnheader|rowheader|grid|gridcell|figure|img|separator|term|definition|note|paragraph|group|toolbar|none|presentation"]],
["role (Widgets)","عناصر تفاعلية.",["button|checkbox|radio|switch|link|textbox|searchbox|combobox|listbox|option|menu|menubar|menuitem|menuitemcheckbox|menuitemradio|slider|spinbutton|scrollbar|tab|tablist|tabpanel|tree|treeitem|treegrid"]],
["role (Live regions / Windows)","تنبيهات ونوافذ.",["alert|alertdialog|dialog|status|log|marquee|timer|progressbar|tooltip"]]],l:"Reference/Global_attributes/role"},
{s:'aria-* (States)',c:`<button aria-expanded="false" aria-pressed="true" aria-disabled="true">…</button>`,d:'خصائص الحالة.',a:[
["aria-expanded","موسع.",["true|false"]],
["aria-pressed","مضغوط (زر تبديل).",["true|false|mixed"]],
["aria-checked","محدد.",["true|false|mixed"]],
["aria-selected","مختار.",["true|false"]],
["aria-disabled","معطل.",["true|false"]],
["aria-hidden","مخفي عن القارئ.",["true|false"]],
["aria-invalid","قيمة خاطئة.",["true|false|grammar|spelling"]],
["aria-busy","قيد التحديث.",["true|false"]],
["aria-current","العنصر الحالي.",["page|step|location|date|time|true|false"]],
["aria-modal","حوار نمطي.",["true|false"]],
["aria-readonly / aria-required","للقراءة / إلزامي.",["true|false"]]],l:"Reference/Attributes"},
{s:'aria-* (Labels & Relations)',c:`<input aria-labelledby="l" aria-describedby="h" aria-controls="p" aria-owns="x">`,d:'التسميات والعلاقات بين العناصر.',a:[
["aria-label","اسم نصي.",["*|نص"]],
["aria-labelledby","اسم من عناصر.",["*|معرفات"]],
["aria-describedby","وصف من عناصر.",["*|معرفات"]],
["aria-description","وصف نصي.",["*|نص"]],
["aria-controls","عنصر يتحكم به.",["*|معرفات"]],
["aria-owns","ملكية الأبناء.",["*|معرفات"]],
["aria-flowto","ترتيب القراءة التالي.",["*|معرفات"]],
["aria-details / aria-errormessage","تفاصيل ورسالة خطأ.",["*|معرف"]],
["aria-activedescendant","الابن النشط.",["*|معرف"]]],l:"Reference/Attributes"},
{s:'aria-* (Widgets & Live)',c:`<div role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" aria-live="polite">…</div>`,d:'خصائص العناصر والتحديثات الحية.',a:[
["aria-valuemin / aria-valuemax / aria-valuenow / aria-valuetext","نطاق وقيمة.",["*|رقم أو نص"]],
["aria-live","إعلان التغيير.",["off|polite|assertive"]],
["aria-atomic","قراءة المنطقة كاملة.",["true|false"]],
["aria-relevant","نوع التغيير.",["additions|removals|text|all"]],
["aria-haspopup","يفتح قائمة.",["true|false|menu|listbox|tree|grid|dialog"]],
["aria-orientation","الاتجاه.",["horizontal|vertical"]],
["aria-multiselectable","اختيار متعدد.",["true|false"]],
["aria-autocomplete","إكمال تلقائي.",["none|inline|list|both"]],
["aria-sort","الفرز.",["none|ascending|descending|other"]],
["aria-level / aria-posinset / aria-setsize","المستوى والترتيب والعدد.",["*|رقم"]],
["aria-colcount / aria-rowcount / aria-colindex / aria-rowindex / aria-colspan / aria-rowspan","أبعاد الجداول.",["*|رقم"]],
["aria-keyshortcuts / aria-roledescription","اختصارات ووصف الدور.",["*|نص"]]],l:"Reference/Attributes"}
];
G3.forEach((t,i)=>document.getElementById(i%2?"global-two":"global-one").appendChild(item(t)));

const T5=[
["MathML Elements",[
{s:'<mrow> <mi> <mn> <mo> <mtext>',c:`<math>
  <mrow><mi>x</mi><mo>=</mo><mn>5</mn></mrow>
</math>`,d:'mrow تجميع، mi متغير، mn رقم، mo عملية، mtext نص.',a:[
["mathvariant (mi)","نمط الخط.",["normal|bold|italic|double-struck|script|fraktur|…"]],
["fence / separator / stretchy / symmetric / lspace / rspace (mo)","سلوك المعامل.",["true|false"]],
["mathcolor / mathbackground / mathsize","اللون والخلفية والحجم.",["*|قيمة"]]],l:"Element/mrow"},
{s:'<mfrac> <msqrt> <mroot>',c:`<mfrac><mn>1</mn><mn>2</mn></mfrac>
<msqrt><mi>x</mi></msqrt>
<mroot><mi>x</mi><mn>3</mn></mroot>`,d:'كسر وجذر تربيعي وجذر بدليل.',a:[
["linethickness (mfrac)","سماكة الخط.",["*|قيمة","0|بلا خط"]]],l:"Element/mfrac"},
{s:'<msup> <msub> <msubsup> <mover> <munder> <munderover>',c:`<msup><mi>x</mi><mn>2</mn></msup>
<munderover><mo>∑</mo><mn>0</mn><mi>n</mi></munderover>`,d:'أسس وأدلة وحدود فوق وتحت.',a:[
["accent / accentunder","شكل علامة.",["true|false"]]],l:"Element/msup"},
{s:'<mtable> <mtr> <mtd>',c:`<mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>2</mn></mtd></mtr></mtable>`,d:'مصفوفة أو جدول رياضي.',a:[
["columnspan / rowspan (mtd)","دمج الخلايا.",["*|رقم"]]],l:"Element/mtable"},
{s:'<mfenced> <menclose> <mpadded> <mphantom> <mspace> <mstyle>',c:`<mpadded width="50px"><mi>a</mi></mpadded>
<mspace width="1em"/>`,d:'فواصل وإحاطة وحشو وفراغ وتنسيق.',a:[
["width / height / depth / lspace / voffset (mpadded, mspace)","الأبعاد.",["*|قيمة"]],
["open / close / separators (mfenced)","أقواس وفواصل (مهمل).",["*|رمز"]],
["notation (menclose)","شكل الإحاطة.",["box|circle|longdiv|updiagonalstrike|…"]]],l:"Element/mpadded"},
{s:'<semantics> <annotation>',c:`<semantics>
  <mi>x</mi>
  <annotation encoding="application/x-tex">x</annotation>
</semantics>`,d:'ربط المعادلة بصيغة بديلة مثل TeX.',a:[
["encoding (annotation)","نوع الصيغة.",["application/x-tex|text/html|application/mathml+xml|…"]]],l:"Element/semantics"}
]],
["SVG Filters (fe*)",[
{s:'<feGaussianBlur> <feOffset> <feDropShadow>',c:`<filter id="s"><feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#000"/></filter>`,d:'تمويه وإزاحة وظل.',a:[
["in","مدخل المرشح.",["SourceGraphic|SourceAlpha|BackgroundImage|FillPaint|StrokePaint|*|اسم result"]],
["stdDeviation","شدة التمويه.",["*|رقم"]],
["dx / dy","الإزاحة.",["*|رقم"]],
["flood-color / flood-opacity","لون وشفافية الظل.",["*|قيمة"]]],l:"Element/feGaussianBlur"},
{s:'<feColorMatrix> <feComponentTransfer> <feFuncR/G/B/A>',c:`<feColorMatrix type="saturate" values="0"/>`,d:'تعديل الألوان.',a:[
["type","النوع.",["matrix|saturate|hueRotate|luminanceToAlpha"]],
["values","القيم.",["*|أرقام"]],
["type (feFunc)","دالة النقل.",["identity|table|discrete|linear|gamma"]],
["slope / intercept / amplitude / exponent / offset","معاملات الدالة.",["*|رقم"]]],l:"Element/feColorMatrix"},
{s:'<feBlend> <feComposite> <feMerge> <feMergeNode> <feFlood> <feImage> <feTile>',c:`<feBlend in="SourceGraphic" in2="b" mode="multiply"/>
<feComposite operator="in" in2="m"/>`,d:'دمج الطبقات.',a:[
["mode (feBlend)","نمط الدمج.",["normal|multiply|screen|darken|lighten|overlay|color-dodge|color-burn|hard-light|soft-light|difference|exclusion"]],
["operator (feComposite)","العملية.",["over|in|out|atop|xor|arithmetic"]],
["k1 / k2 / k3 / k4","معاملات arithmetic.",["*|رقم"]],
["in2 / result","مدخل ثان ونتيجة.",["*|اسم"]]],l:"Element/feBlend"},
{s:'<feMorphology> <feConvolveMatrix> <feTurbulence> <feDisplacementMap>',c:`<feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="1"/>`,d:'تشويه وضوضاء وتحويلات.',a:[
["operator (feMorphology)","العملية.",["erode|dilate"]],
["radius","نصف القطر.",["*|رقم"]],
["type (feTurbulence)","نوع الضوضاء.",["fractalNoise|turbulence"]],
["baseFrequency / numOctaves / seed / stitchTiles","معاملات الضوضاء.",["*|رقم","stitch|noStitch"]],
["scale / xChannelSelector / yChannelSelector (feDisplacementMap)","الإزاحة.",["R|G|B|A","*|رقم"]],
["order / kernelMatrix / divisor / bias / edgeMode (feConvolveMatrix)","مصفوفة الالتفاف.",["duplicate|wrap|none","*|رقم"]]],l:"Element/feTurbulence"},
{s:'<feDiffuseLighting> <feSpecularLighting> <feDistantLight> <fePointLight> <feSpotLight>',c:`<feDiffuseLighting lighting-color="white"><feDistantLight azimuth="45" elevation="60"/></feDiffuseLighting>`,d:'إضاءة المرشحات.',a:[
["surfaceScale / diffuseConstant / specularConstant / specularExponent","خصائص السطح.",["*|رقم"]],
["azimuth / elevation (feDistantLight)","زاوية الضوء.",["*|درجات"]],
["x / y / z (point/spot)","موضع الضوء.",["*|رقم"]],
["pointsAtX / Y / Z / limitingConeAngle (spot)","اتجاه ومخروط.",["*|رقم"]]],l:"Element/feDiffuseLighting"},
{s:'<switch> <mpath> <view> <metadata> <desc> <title> <style> <script> <a> (SVG)',c:`<svg><title>رسم</title><desc>وصف</desc>
<switch><text systemLanguage="ar">مرحبا</text><text>Hi</text></switch></svg>`,d:'عناصر مساعدة داخل SVG.',a:[
["systemLanguage / requiredExtensions (switch children)","شروط الاختيار.",["ar|en|*|رابط"]],
["href (mpath / a)","مرجع.",["#id|رابط"]],
["viewBox (view)","منظور محدد.",["*|4 أرقام"]]],l:"Element/switch"}
]]];
const anc5=document.getElementById("global-one").parentNode.previousElementSibling;
T5.forEach(([title,list])=>{
  const h=document.createElement("h2");h.textContent="<"+title+">";
  const m=document.createElement("main");
  const a=document.createElement("div");a.className="divOne";
  const b=document.createElement("div");b.className="divTwo";
  m.append(a,b);
  const half=Math.ceil(list.length/2);
  list.forEach((t,i)=>(i<half?a:b).appendChild(item(t)));
  anc5.before(h,m);
});
