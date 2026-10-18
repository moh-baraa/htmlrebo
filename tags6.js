const T6=[
["Remaining Tags",[
{s:'<figcaption>',c:`<figure><img src="a.png" alt=""><figcaption>الشكل 1</figcaption></figure>`,d:'شرح للـ figure أو لـ details داخل figure.',a:[],l:"Element/figcaption"},
{s:'<rb> <rtc>',c:`<ruby><rb>漢</rb><rt>han</rt><rtc>…</rtc></ruby>`,d:'rb نص الأساس في ruby، وrtc نص ترجمة إضافي (مهملان تقريباً).',a:[
["rbspan (rtc)","دمج الأعمدة.",["*|رقم"]]],l:"Element/ruby"},
{s:'<ms> <mmultiscripts> <mprescripts> <none/> <mglyph>',c:`<math><ms>نص حرفي</ms>
<mmultiscripts><mi>X</mi><mi>a</mi><mi>b</mi><mprescripts/><mi>c</mi><mi>d</mi></mmultiscripts></math>`,d:'ms سلسلة نصية، mmultiscripts أدلة وأسس متعددة، mprescripts قبل الرمز.',a:[
["lquote / rquote (ms)","علامات الاقتباس.",["*|رمز"]],
["src / alt / width / height (mglyph)","الصورة.",["*|قيمة"]]],l:"Element/mmultiscripts"},
{s:'<maction> <merror> <mlongdiv> <mscarries> <mstack>',c:`<math><merror><mtext>خطأ</mtext></merror></math>`,d:'عناصر MathML خاصة بالتفاعل والأخطاء والحساب الطويل.',a:[
["actiontype / selection (maction)","نوع الفعل.",["statusline|toggle|tooltip"]]],l:"Element/merror"},
{s:'SVG Events',c:`<circle r="5" onbegin="f()" onend="f()" onrepeat="f()" onload="f()"/>`,d:'أحداث SVG الخاصة.',a:[
["onbegin / onend / onrepeat","أحداث الحركة.",["*|كود JS"]],
["onload / onunload / onabort / onerror / onresize / onscroll / onzoom","أحداث المستند.",["*|كود JS"]]],l:"Element/svg"},
{s:'SVG Text & Style Attributes',c:`<text font-family="Cairo" font-size="16" font-weight="bold" letter-spacing="1" text-decoration="underline">نص</text>`,d:'خصائص النص في SVG.',a:[
["font-family / font-size / font-style / font-weight","الخط.",["*|قيمة"]],
["text-decoration","الزينة.",["none|underline|overline|line-through"]],
["letter-spacing / word-spacing","التباعد.",["*|قيمة"]],
["writing-mode","اتجاه الكتابة.",["horizontal-tb|vertical-rl|vertical-lr"]],
["direction / unicode-bidi","الاتجاه.",["ltr|rtl|normal|embed|bidi-override"]],
["color / class / style / lang / id","عامة.",["*|قيمة"]],
["pointer-events / cursor","التفاعل.",["none|auto|all|visiblePainted|…"]],
["vector-effect / shape-rendering / paint-order","عرض.",["non-scaling-stroke|crispEdges|geometricPrecision|optimizeSpeed|stroke|…"]]],l:"Element/text"}
]],
["Value Reference",[
{s:'rel values (link, a, area, form)',c:`<link rel="preload" href="f.woff2" as="font" crossorigin>
<a href="x" rel="noopener noreferrer nofollow">…</a>`,d:'القيم الممكنة لخاصية rel.',a:[
["link rel","علاقات الربط.",["stylesheet|alternate|icon|apple-touch-icon|manifest|canonical|preload|prefetch|prerender|preconnect|dns-prefetch|modulepreload|next|prev|search|license|author|help|pingback|me|expect|compression-dictionary"]],
["a / area / form rel","علاقات الروابط.",["noopener|noreferrer|nofollow|sponsored|ugc|external|bookmark|tag|help|license|alternate|author|opener|next|prev|search"]]],l:"Attributes/rel"},
{s:'autocomplete tokens',c:`<input autocomplete="shipping street-address">
<input autocomplete="one-time-code">`,d:'قيم الإكمال التلقائي.',a:[
["القيم العامة","حالة.",["on|off"]],
["الاسم","حقول الاسم.",["name|honorific-prefix|given-name|additional-name|family-name|honorific-suffix|nickname"]],
["الحساب","دخول.",["username|new-password|current-password|one-time-code|email|tel|tel-country-code|tel-national|tel-extension|url|impp"]],
["العنوان","عنوان.",["street-address|address-line1|address-line2|address-line3|address-level1|address-level2|address-level3|address-level4|country|country-name|postal-code"]],
["الدفع","بطاقات.",["cc-name|cc-given-name|cc-family-name|cc-number|cc-exp|cc-exp-month|cc-exp-year|cc-csc|cc-type|transaction-currency|transaction-amount"]],
["أخرى","متفرقة.",["organization|organization-title|bday|bday-day|bday-month|bday-year|sex|language|photo"]],
["بادئات","تحدد السياق.",["shipping|billing|section-*|home|work|mobile|fax|pager"]]],l:"Attributes/autocomplete"},
{s:'URL Schemes',c:`<a href="mailto:a@b.com?subject=hi">بريد</a>
<a href="tel:+96279…">اتصال</a>
<img src="data:image/png;base64,…">`,d:'البروتوكولات في الروابط.',a:[
["href / src","البروتوكولات.",["http:|https:|file:|ftp:|mailto:|tel:|sms:|geo:|data:|blob:|javascript:|about:|view-source:|ws:|wss:|#id|//host|../x.html|./x.html|/x.html"]]],l:"Web/URI/Schemes"},
{s:'MIME Types',c:`<script type="application/json"></script>
<link type="text/css">`,d:'أنواع المحتوى الشائعة.',a:[
["text/*","نصوص.",["text/html|text/css|text/javascript|text/plain|text/csv|text/vtt|text/markdown"]],
["image/*","صور.",["image/png|image/jpeg|image/gif|image/webp|image/avif|image/svg+xml|image/x-icon|image/bmp"]],
["audio/* / video/*","وسائط.",["audio/mpeg|audio/ogg|audio/wav|audio/webm|audio/aac|video/mp4|video/webm|video/ogg"]],
["application/*","تطبيقات.",["application/json|application/xml|application/pdf|application/zip|application/octet-stream|application/javascript|application/x-www-form-urlencoded|multipart/form-data"]],
["font/*","خطوط.",["font/woff|font/woff2|font/ttf|font/otf"]]],l:"Web/HTTP/Guides/MIME_types"},
{s:'Boolean Attributes',c:`<input disabled>
<input disabled="">
<input disabled="disabled">`,d:'خصائص منطقية: وجودها يكفي، والكتابات الثلاث متساوية. أما <code>disabled="false"</code> فتبقى مفعلة!',a:[
["القائمة","كل الخصائص المنطقية.",["allowfullscreen|async|autofocus|autoplay|checked|controls|default|defer|disabled|formnovalidate|hidden|inert|ismap|itemscope|loop|multiple|muted|nomodule|novalidate|open|playsinline|readonly|required|reversed|selected|shadowrootclonable|shadowrootdelegatesfocus|shadowrootserializable"]]],l:"Attributes"},
{s:'More HTML Entities',c:`&nbsp; &ensp; &emsp; &lt; &gt; &amp; &quot; &apos; &copy; &reg; &trade; &euro; &pound; &yen; &cent; &laquo; &raquo; &hellip; &mdash; &ndash; &times; &divide; &deg; &plusmn; &larr; &rarr; &uarr; &darr; &hearts; &check;`,d:'أشهر رموز HTML.',a:[
["الأساسية","محجوزة.",["&lt; <|&gt; >|&amp; &|&quot; \"|&apos; '|&nbsp; مسافة صلبة|&ensp; مسافة متوسطة|&emsp; مسافة طويلة"]],
["رموز","حقوق وعملات.",["&copy; ©|&reg; ®|&trade; ™|&euro; €|&pound; £|&yen; ¥|&cent; ¢"]],
["رياضيات","عمليات.",["&times; ×|&divide; ÷|&plusmn; ±|&deg; °|&ne; ≠|&le; ≤|&ge; ≥|&infin; ∞|&sum; ∑|&radic; √"]],
["أسهم","اتجاهات.",["&larr; ←|&rarr; →|&uarr; ↑|&darr; ↓|&harr; ↔"]],
["علامات","ترقيم.",["&laquo; «|&raquo; »|&hellip; …|&mdash; —|&ndash; –"]],
["أرقام","عددية.",["&#65; (عشري)|&#x41; (ست عشري)"]]],l:"Glossary/Character_reference"},
{s:'Common lang Codes',c:`<html lang="ar-JO">`,d:'رموز اللغة (BCP47).',a:[
["اللغات","شائعة.",["ar|en|fr|de|es|it|pt|ru|zh|ja|ko|hi|tr|fa|ur|he|id|nl|pl|sv"]],
["مع الدولة","لهجات.",["ar-JO|ar-SA|ar-EG|ar-AE|en-US|en-GB|fr-CA|pt-BR|zh-CN|zh-TW"]]],l:"Global_attributes/lang"},
{s:'HTML Comments & Conditional',c:`<!--[if IE]><p>IE فقط</p><![endif]-->
<![CDATA[ … ]]>`,d:'التعليقات الشرطية للمتصفحات القديمة، وCDATA في XHTML/SVG/MathML.',a:[],l:"Guides/Comments"}
]]];
const anc6=document.getElementById("global-one").parentNode.previousElementSibling;
T6.forEach(([title,list])=>{
  const h=document.createElement("h2");h.textContent="<"+title+">";
  const m=document.createElement("main");
  const a=document.createElement("div");a.className="divOne";
  const b=document.createElement("div");b.className="divTwo";
  m.append(a,b);
  const half=Math.ceil(list.length/2);
  list.forEach((t,i)=>(i<half?a:b).appendChild(item(t)));
  anc6.before(h,m);
});
