const quizQuestions = [
  {
    id: 1,
    question: 'HTML açılımı nedir?',
    choices: [
      'Hyperlinks and Text Markup Language',
      'Hyper Text Markup Language',
      'Home Tool Markup Language',
      'Hiçbiri',
    ],
    answer: 'Hyper Text Markup Language',
  },
  {
    id: 2,
    question: 'Web standartlarını kim belirliyor?',
    choices: [
      'Moxilla',
      'Google',
      'The World Wide Web Consortium',
      'Microsoft',
    ],
    answer: 'The World Wide Web Consortium',
  },
  {
    id: 3,
    question: 'En büyük başlık için doğru HTML öğesini seçin:',
    choices: [
      `<pre><code>&lt;h1&gt;&lt;/h1&gt;</code></pre>`,
      `<pre><code>&lt;head&gt;&lt/head&gt</code></pre>`,
      `<pre><code>&lt;h6&gt;&lt;/h6&gt;</code></pre>`,
      `<pre><code>&lt;heading&gt;&lt;/heading&gt;</code></pre>`,
    ],
    answer: `<h1></h1>`,
  },
  {
    id: 4,
    question:
      'Satırdan bir satır aşağı geçmek için hangi HTML öğesini kullanırız?',
    choices: [
      '<pre><code>&lt;break&gt;&lt/break&gt;</code></pre>',
      '<pre><code>&lt;lb&gt;&lt/lb&gt;</code></pre>',
      '<pre><code>&lt;br&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;heading&gt;</code></pre>',
    ],
    answer: '<br>',
  },
  {
    id: 5,
    question: 'Arka plan rengi eklemek için doğru HTML nedir?',
    choices: [
      '<pre><code>&lt;background&gt;yellow&lt;/background&gt;</code></pre>',
      '<pre><code>&lt;body&ensp;style&equals;&apos;background&hyphen;color&colon;&ensp;yellow&apos;&semi;&gt;</code></pre>',
      '<pre><code>&lt;body&ensp;bg&equals;&apos;yellow&apos;&gt;</code></pre>',
      '<pre><code>&period;background&hyphen;color&colon;&ensp;yellow</code></pre>',
    ],
    answer: "<body style='background‐color: yellow';>",
  },
  {
    id: 6,
    question: 'Önemli bir metni tanımlamak için doğru HTML öğesini seçin',
    choices: [
      '<pre><code>&lt;important&gt;</code></pre>',
      '<pre><code>&lt;i&gt;&lt;&sol;i&gt;</code></pre>',
      '<pre><code>&lt;b&gt;&lt;&sol;b&gt;</code></pre>',
      '<pre><code>&lt;strong&gt;&lt;&sol;strong&gt;</code></pre>',
    ],
    answer: '<strong></strong>',
  },
  {
    id: 7,
    question: 'Hyperlink oluşturmak için doğru HTML nedir?',
    choices: [
      '<pre><code>&lt;a&gt;http&colon;&sol;&sol;www&period;w3schools&period;com&lt;&sol;a&gt;</code></pre>',
      '<pre><code>&lt;a&ensp;name&equals;&quot;http&colon;&sol;&sol;www&period;w3schools&period;com&quot;&gt;W3Schools&period;com&lt;&sol;a&gt;</code></pre>',
      '<pre><code>&lt;a&ensp;url&equals;&quot;http&colon;&sol;www&period;w3schools&period;com&quot;&gt;W3Schools&period;com&lt;&sol;a&gt;</code></pre>',
      '<pre><code>&lt;a&ensp;href&equals;&quot;http&colon;&sol;&sol;www&period;w3schools&period;com&quot;&gt;W3Schools&lt;&sol;a&gt;</code></pre>',
    ],
    answer: '<a href="http://www.w3schools.com">W3Schools</a>',
  },
  {
    id: 8,
    question: 'Vurgulanan metni tanımlamak için doğru HTML öğesini seçin',
    choices: [
      '<pre><code>&lt;i&gt;&lt;&sol;i&gt;</code></pre>',
      '<pre><code>&lt;em&gt;&lt;&sol;em&gt;</code></pre>',
      '<pre><code>&lt;italic&gt;&lt;&sol;italic&gt;</code></pre>',
      '<pre><code>&lt;strong&gt;&lt;&sol;strong&gt;</code></pre>',
    ],
    answer: '<em></em>',
  },
  {
    id: 9,
    question: 'Bir hyperlink oluşturmak için hangi etiketi kullanırsınız?',
    choices: [
      '<pre><code>&lt;a&gt;&lt;&sol;a&gt;</code></pre>',
      '<pre><code>&lt;img&gt;</code></pre>',
      '<pre><code>&lt;dl&gt;&lt;&sol;dl&gt;</code></pre>',
      '<pre><code>&lt;strong&gt;&lt;&sol;strong&gt;</code></pre>',
    ],
    answer: '<a></a>',
  },
  {
    id: 10,
    question: 'Kapanış etiketini belirtmek için hangi karakter kullanılır?',
    choices: [
      '<pre><code>&lt;</code></pre>',
      '<pre><code>&Hat;</code></pre>',
      '<pre><code>&ast;</code></pre>',
      '<pre><code>&sol;</code></pre>',
    ],
    answer: '/',
  },
  {
    id: 11,
    question:
      'Bir bağlantıyı yeni bir sekmede/tarayıcı penceresinde nasıl açabilirsiniz?',
    choices: [
      '<pre><code>&lt;a&ensp;href&equals;&quot;url&quot;&ensp;target&equals;&quot;new&quot;></code></pre>',
      '<pre><code>&lt;a&ensp;href&equals;&quot;url&quot;&ensp;new&gt;</code></pre>',
      '<pre><code>&lt;a&ensp;href&equals;&quot;url&quot;&ensp;target&equals;&quot;&UnderBar;blank&quot;&gt;</code></pre>',
      '<pre><code>&lt;a&ensp;href&equals;&quot;url&quot;&ensp;new&ensp;blank&gt;</code></pre>',
    ],
    answer: '<a href="url" target="_blank">',
  },
  {
    id: 12,
    question:
      'Satır içi/inline elementler normalde yeni bir satır başlatılmadan görüntülenir.',
    choices: ['Doğru', 'Yanlış', 'Bilmiyorum', 'Yetersiz Bilgi '],
    answer: 'Doğru',
  },
  {
    id: 13,
    question:
      'Hangi input türünde max ve min özelliği aralığında kaydırma kontrolü gösterilir?',
    choices: ['range', 'slider', 'search', 'controls'],
    answer: 'range',
  },
  {
    id: 14,
    question:
      " HTML'de <pre><code>&lt;aside&gt;</code></pre> öğesi neyi tanımlar?",
    choices: [
      'Sayfanın ana içeriği dışındaki içerik',
      'Sayfanın sol tarafında gösterilecek bir gezinme listesi',
      'ASCII karakter seti. İnternetteki bilgisayarlar arasında bilgi göndermek için',
      'Hiçbiri',
    ],
    answer: 'Sayfanın ana içeriği dışındaki içerik',
  },
  {
    id: 15,
    question:
      'HTML global özniteliği "contenteditable" şu amaçlarla kullanılır:',
    choices: [
      'Bir öğe için bir menü içeriği belirtir. Kullanıcı öğeye sağ tıkladığında menü görünür',
      'Bir etiketin değerini düzenlenebilir yapmak için kullanılır',
      'Bir dize içindeki içeriğin ilk bulunan oluşumun konumunu döndürür',
      'Sunucudan gelen içeriği günceller',
    ],
    answer: 'Bir etiketin değerini düzenlenebilir yapmak için kullanılır',
  },
  {
    id: 16,
    question: " HTML'de onblur ve onfocus:",
    choices: [
      'Stil nitelikleri',
      'Olay nitelikleri',
      'HTML elementleri',
      'Hiçbiri',
    ],
    answer: 'Olay nitelikleri',
  },
  {
    id: 17,
    question:
      ' SVG tarafından tanımlanan grafikler hangi metin formatında tanımlıdır?',
    choices: ['XML', 'HTML', 'CSS', 'JS'],
    answer: 'XML',
  },
  {
    id: 18,
    question: ' HTML canvas öğesi şunlar için kullanılır:',
    choices: [
      'Sürüklenebilir öğeler oluşturur',
      'Grafiksel şekiller çizmek için',
      "MySQL'deki verileri işlemede",
      'Veritabanı kayıtlarını göstermek için',
    ],
    answer: 'Grafiksel şekiller çizmek için',
  },
  {
    id: 19,
    question:
      " HTML'de, bir giriş alanının doldurulması gerektiğini belirtmek için hangi nitelik kullanılır?",
    choices: ['placeholder', 'required', 'validate', 'formvalidate'],
    answer: 'required',
  },
  {
    id: 20,
    question:
      " HTML'de SVG öğelerini doğrudan bir HTML sayfasına gömebilirsiniz.",
    choices: ['Doğru', 'Yanlış', 'Bilmiyorum', 'Yetersiz Bilgi'],
    answer: 'Doğru',
  },
  {
    id: 21,
    question:
      'Resim görüntülenemiyorsa hangi HTML özelliği  resim için alternatif bir metin belirtir?',
    choices: ['src', 'alt', 'title', 'longdesc'],
    answer: 'alt',
  },
  {
    id: 22,
    question:
      ' Blok elementleri normalde yeni bir satıra başlamadan görüntülenir.',
    choices: ['Yanlış', 'Doğru', 'İkisi de ', 'Emin Değilim'],
    answer: 'Yanlış',
  },
  {
    id: 23,
    question:
      ' Bir <pre><code>&lt;iframe&gt;</code></pre>  etiketi web sayfasını diğer web sayfası içinde görüntülemek için kullanılır.',
    choices: ['iframe diye etiket yoktur', 'Doğru', 'Yanlış', 'Emin Değilim'],
    answer: 'Doğru',
  },
  {
    id: 24,
    question: 'Numaralandırılmış bir listeyi nasıl yapabilirsiniz?',
    choices: [
      '<pre><code>&lt;h1&gt;&lt;&sol;h1&gt;&hyphen;&lt;h6&gt;&lt;&sol;h6&gt;</code></pre>',
      '<pre><code>&lt;ul&gt;&lt;&sol;ul&gt;</code></pre>',
      '<pre><code>&lt;ol&gt;&lt;&sol;ol&gt;</code></pre>',
      '<pre><code>&lt;list&gt;&lt;&sol;list&gt;</code></pre>',
    ],
    answer: '<ol></ol>',
  },
  {
    id: 25,
    question:
      ' HTML ________ öğesi, bir tablo içindeki bir sütunu tanımlar ve tüm ortak hücrelerde ortak semantik tanımlamak için kullanılır.',
    choices: [
      '<pre><code>&lt;th&gt;&lt;&sol;th&gt;</code></pre>',
      '<pre><code>&lt;tfoot&gt;&lt;&sol;tfoot&gt;</code></pre>',
      '<pre><code>&lt;col&gt;&lt;&sol;col&gt;</code></pre>',
      '<pre><code>&lt;article&gt;&lt;&sol;article&gt;</code></pre>',
    ],
    answer: '<col></col>',
  },
  {
    id: 26,
    question:
      ' HTML _________ öğesi, tablonun sütunlarını özetleyen bir dizi satır tanımlar.',
    choices: [
      '<pre><code>&lt;tbody&gt;&lt;&sol;tbody&gt;</code></pre>',
      '<pre><code>&lt;tfoot&gt;&lt;&sol;tfoot&gt;</code></pre>',
      '<pre><code>&lt;thead&gt;&lt;&sol;thead&gt;</code></pre>',
      '<pre><code>&lt;tr&gt;&lt;&sol;tr&gt;</code></pre>',
    ],
    answer: '<tfoot></tfoot>',
  },
  {
    id: 27,
    question: ' Açılır liste oluşturmak için doğru HTML nedir?',
    choices: [
      '<pre><code>&lt;label&gt;&lt;&sol;label&gt;</code></pre>',
      '<pre><code>&lt;input&gt;&lt;&sol;input&gt;</code></pre>',
      '<pre><code>&lt;select&gt;&lt;&sol;select&gt;</code></pre>',
      '<pre><code>&lt;form&gt;&lt;&sol;form&gt;</code></pre>',
    ],
    answer: '<select></select>',
  },
  {
    id: 28,
    question: ' Bir metin alanı oluşturmak için doğru HTML nedir?',
    choices: [
      '<pre><code>&lt;progress&gt;&lt;&sol;progress&gt;</code></pre>',
      '<pre><code>&lt;option&gt;&lt;&sol;option&gt;</code></pre>',
      '<pre><code>&lt;output&gt;&lt;&sol;output&gt;</code></pre>',
      '<pre><code>&lt;textarea&gt;&lt;&sol;textarea&gt;</code></pre>',
    ],
    answer: '<textarea></textarea>',
  },
  {
    id: 29,
    question:
      ' HTML _____________ öğesi kullanıcı arabirimindeki öğenin başlığını temsil eder.',
    choices: [
      '<pre><code>&lt;label&gt;</code></pre>',
      '<pre><code>&lt;progress&gt;</code></pre>',
      '<pre><code>&lt;input&gt;</code></pre>',
      '<pre><code>&lt;form&gt;</code></pre>',
    ],
    answer: '<label>',
  },
  {
    id: 30,
    question: ' HTML5 için hangi doküman türü doğrudur?',
    choices: [
      '<pre><code>&lt;!DOCTYPE&ensp;html&gt;</code></pre>',
      '<pre><code>&lt;doctype&ensp;HTML&gt;</code></pre>',
      '<pre><code>&lt;DOCTYPE&ensp;HTML&gt;</code></pre>',
      '<pre><code>&lt;!DOCTYPE&gt;</code></pre>',
    ],
    answer: '<!DOCTYPE html>',
  },
  {
    id: 31,
    question: ' Video dosyalarını oynatmak için doğru HTML öğesi nedir?',
    choices: [
      '<pre><code>&lt;!DOCTYPE&ensp;html&gt;</code></pre>',
      '<pre><code>&lt;video&gt;</code></pre>',
      '<pre><code>&lt;audio&gt;</code></pre>',
      '<pre><code>&lt;track&gt;</code></pre>',
    ],
    answer: '<video>',
  },
  {
    id: 32,
    question: ' Sırasız bir liste(madde işaretli) nasıl tanımlanır?',
    choices: [
      '<pre><code>&lt;h1&gt;&lt;&sol;h1&gt;&hyphen;&lt;h6&gt;&lt;&sol;h6&gt;</code></pre>',
      '<pre><code>&lt;ul&gt;&lt;&sol;ul&gt;</code></pre>',
      '<pre><code>&lt;ol&gt;&lt;&sol;ol&gt;</code></pre>',
      '<pre><code>&lt;list&gt;&lt;&sol;list&gt;</code></pre>',
    ],
    answer: '<ul></ul>',
  },
  {
    id: 33,
    question: ' Ses dosyalarını oynatmak için doğru HTML öğesi nedir?',
    choices: [
      '<pre><code>&lt;video&gt;</code></pre>',
      '<pre><code>&lt;audio&gt;</code></pre>',
      '<pre><code>&lt;mp3&gt;</code></pre>',
      '<pre><code>&lt;sound&gt;</code></pre>',
    ],
    answer: '<audio>',
  },
  {
    id: 34,
    question: ' HTML _____________ kullanır',
    choices: [
      'Kullanıcı tanımlı etiketler',
      'Önceden belirlenmiş etiketler',
      'Dil tarafından tanımlanan sabit etiketler',
      'Yalnızca bağlantı için etiketler',
    ],
    answer: 'Dil tarafından tanımlanan sabit etiketler',
  },
  {
    id: 35,
    question: ' Temel HTML Bloğu ________ olarak bilinir.',
    choices: ['HTML Body', 'HTML Tag', 'HTML Attribute', 'HTML Element'],
    answer: 'HTML Tag',
  },
  {
    id: 36,
    question:
      ' Sayfada doğrudan görüntülenmeyen etiketler ve testler ______ bölümüne yazılır.',
    choices: [
      '<pre><code>&lt;head&gt;</code></pre>',
      '<pre><code>&lt;title&gt;</code></pre>',
      '<pre><code>&lt;body&gt;</code></pre>',
      '<pre><code>&lt;html&gt;</code></pre>',
    ],
    answer: '<head>',
  },
  {
    id: 37,
    question:
      ' Hangisi sayfa yüklendiğinde  tanımlanan metin alanının otomatik olarak odaklanması gerektiğini belirtir?',
    choices: [
      '<pre><code>&lt;dirname&gt;</code></pre>',
      '<pre><code>&lt;autofocus&gt;</code></pre>',
      '<pre><code>&lt;placeholder&gt;</code></pre>',
      '<pre><code>&lt;maxlength&gt;</code></pre>',
    ],
    answer: '<autofocus>',
  },
  {
    id: 38,
    question:
      ' Hangisi doküman içeriği kullanıcı tarafından yazdırılmak istendiğinde yazdırma işlemi başladıktan sonra script ile fonksiyonellik sağlar?',
    choices: [
      '<pre><code>&lt;onbeforeunload&gt;</code></pre>',
      '<pre><code>&lt;onafterprint&gt;</code></pre>',
      '<pre><code>&lt;onerror&gt;</code></pre>',
      '<pre><code>&lt;onload&gt;</code></pre>',
    ],
    answer: '<onafterprint>',
  },
  {
    id: 39,
    question: ' HTML nedir?',
    choices: [
      'HTML, Hiper Metin İşaretleme Dili anlamına gelir ve HTML, işaretleme kullanan Web sayfalarının yapısını tanımlar',
      'HTML öğeleri, HTML sayfalarının yapı taşlarıdır ve HTML öğeleri etiketlerle temsil edilir.',
      "HTML etiketleri, 'heading', 'paragraph' gibi içerik parçalarını etiketler ve Tarayıcılar HTML etiketlerini görüntülemez. ",
      'Hepsi',
    ],
    answer: 'Hepsi',
  },
  {
    id: 40,
    question: ' HTML Paragrafları ______ etiketi ile tanımlanır: ',
    choices: [
      '<pre><code>&lt;h1&gt;</code></pre>',
      '<pre><code>&lt;p&gt;</code></pre>',
      '<pre><code>&lt;a&gt;</code></pre>',
      '<pre><code>&lt;src&gt;</code></pre>',
    ],
    answer: '<p>',
  },
  {
    id: 41,
    question:
      '_______ özniteliği, renk, yazı tipi, boyut vb. gibi bir öğenin stilini belirtmek için kullanılır.',
    choices: ['src', 'alt', 'style', 'lang'],
    answer: 'style',
  },
]
