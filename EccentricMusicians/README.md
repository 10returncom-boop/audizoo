# 音樂家都很怪 / EccentricMusicians（多頁靜態站）

- 版本：1.0.0
- 建置日期：2026-10-04
- 性質：由單頁 SPA 重建而來的多頁靜態站，全站繁中（zh-Hant）。
- 原 SPA 備份：`D:\_WWW_325_public\_ops\backups\EccentricMusicians_index_SPA_backup.html`

## 目錄結構
```
EccentricMusicians/
├─ index.html            # 樞紐頁（取代原 SPA）
├─ categories/           # 4 個分類頁
│  ├─ classical.html
│  ├─ piano.html
│  ├─ pop.html
│  └─ jazz.html
├─ musicians/            # 200 位音樂家頁（<slug>.html）
├─ assets/               # 既有素材（hero.webp / hero_src.jpg，未更動）
├─ og-image.png          # 1200×630 品牌 OG 圖
├─ sitemap.xml
├─ robots.txt
└─ README.md
```

## 重建方式
```
python D:\_WWW_325_public\_ops\scripts\_build_eccentricmusicians.py
```

## SEO 清單（每頁 head 必備）
- `<html lang="zh-Hant">`
- `<title>`：全站唯一（音樂家頁／分類頁／樞紐頁三種範本）
- `<meta name="description">`（120–160 字，出自真實資料）
- `<meta name="robots" content="index,follow">`
- `<link rel="canonical">`
- Open Graph 全套：og:type / og:title / og:description / og:image / og:url / og:site_name=Audizoo / og:locale=zh_TW
- Twitter Card：twitter:card=summary_large_image / title / description / image
- 內聯 SVG favicon data URI
- JSON-LD：音樂家頁 @graph（Article+Person+BreadcrumbList+FAQPage+Speakable）；分類頁（BreadcrumbList+ItemList+FAQPage）；樞紐頁（WebSite+ItemList+Speakable）

## slug 對照表（id | name | cat | slug | url）

| id | name | cat | slug | url |
|---|---|---|---|---|
| 1 | 貝多芬 | classical | ludwig-van-beethoven | https://audizoo.com/EccentricMusicians/musicians/ludwig-van-beethoven.html |
| 2 | 莫札特 | classical | wolfgang-amadeus-mozart | https://audizoo.com/EccentricMusicians/musicians/wolfgang-amadeus-mozart.html |
| 3 | 巴哈 | classical | johann-sebastian-bach | https://audizoo.com/EccentricMusicians/musicians/johann-sebastian-bach.html |
| 4 | 韓德爾 | classical | george-frideric-handel | https://audizoo.com/EccentricMusicians/musicians/george-frideric-handel.html |
| 5 | 海頓 | classical | joseph-haydn | https://audizoo.com/EccentricMusicians/musicians/joseph-haydn.html |
| 6 | 舒伯特 | classical | franz-schubert | https://audizoo.com/EccentricMusicians/musicians/franz-schubert.html |
| 7 | 蕭邦 | classical | fr-d-ric-chopin | https://audizoo.com/EccentricMusicians/musicians/fr-d-ric-chopin.html |
| 8 | 李斯特 | classical | franz-liszt | https://audizoo.com/EccentricMusicians/musicians/franz-liszt.html |
| 9 | 帕格尼尼 | classical | niccol-paganini | https://audizoo.com/EccentricMusicians/musicians/niccol-paganini.html |
| 10 | 舒曼 | classical | robert-schumann | https://audizoo.com/EccentricMusicians/musicians/robert-schumann.html |
| 11 | 白遼士 | classical | hector-berlioz | https://audizoo.com/EccentricMusicians/musicians/hector-berlioz.html |
| 12 | 華格納 | classical | richard-wagner | https://audizoo.com/EccentricMusicians/musicians/richard-wagner.html |
| 13 | 布拉姆斯 | classical | johannes-brahms | https://audizoo.com/EccentricMusicians/musicians/johannes-brahms.html |
| 14 | 柴可夫斯基 | classical | pyotr-ilyich-tchaikovsky | https://audizoo.com/EccentricMusicians/musicians/pyotr-ilyich-tchaikovsky.html |
| 15 | 威爾第 | classical | giuseppe-verdi | https://audizoo.com/EccentricMusicians/musicians/giuseppe-verdi.html |
| 16 | 普契尼 | classical | giacomo-puccini | https://audizoo.com/EccentricMusicians/musicians/giacomo-puccini.html |
| 17 | 羅西尼 | classical | gioachino-rossini | https://audizoo.com/EccentricMusicians/musicians/gioachino-rossini.html |
| 18 | 聖桑 | classical | camille-saint-sa-ns | https://audizoo.com/EccentricMusicians/musicians/camille-saint-sa-ns.html |
| 19 | 德弗札克 | classical | anton-n-dvo-k | https://audizoo.com/EccentricMusicians/musicians/anton-n-dvo-k.html |
| 20 | 葛利格 | classical | edvard-grieg | https://audizoo.com/EccentricMusicians/musicians/edvard-grieg.html |
| 21 | 穆索斯基 | classical | modest-mussorgsky | https://audizoo.com/EccentricMusicians/musicians/modest-mussorgsky.html |
| 22 | 林姆斯基-高沙可夫 | classical | nikolai-rimsky-korsakov | https://audizoo.com/EccentricMusicians/musicians/nikolai-rimsky-korsakov.html |
| 23 | 鮑羅定 | classical | alexander-borodin | https://audizoo.com/EccentricMusicians/musicians/alexander-borodin.html |
| 24 | 巴蘭基列夫 | classical | mily-balakirev | https://audizoo.com/EccentricMusicians/musicians/mily-balakirev.html |
| 25 | 普羅高菲夫 | classical | sergei-prokofiev | https://audizoo.com/EccentricMusicians/musicians/sergei-prokofiev.html |
| 26 | 拉赫曼尼諾夫 | classical | sergei-rachmaninoff | https://audizoo.com/EccentricMusicians/musicians/sergei-rachmaninoff.html |
| 27 | 史特拉汶斯基 | classical | igor-stravinsky | https://audizoo.com/EccentricMusicians/musicians/igor-stravinsky.html |
| 28 | 德布西 | classical | claude-debussy | https://audizoo.com/EccentricMusicians/musicians/claude-debussy.html |
| 29 | 拉威爾 | classical | maurice-ravel | https://audizoo.com/EccentricMusicians/musicians/maurice-ravel.html |
| 30 | 薩提 | classical | erik-satie | https://audizoo.com/EccentricMusicians/musicians/erik-satie.html |
| 31 | 史克里亞賓 | classical | alexander-scriabin | https://audizoo.com/EccentricMusicians/musicians/alexander-scriabin.html |
| 32 | 約翰·凱吉 | classical | john-cage | https://audizoo.com/EccentricMusicians/musicians/john-cage.html |
| 33 | 蕭士塔高維奇 | classical | dmitri-shostakovich | https://audizoo.com/EccentricMusicians/musicians/dmitri-shostakovich.html |
| 34 | 馬勒 | classical | gustav-mahler | https://audizoo.com/EccentricMusicians/musicians/gustav-mahler.html |
| 35 | 西貝流士 | classical | jean-sibelius | https://audizoo.com/EccentricMusicians/musicians/jean-sibelius.html |
| 36 | 艾爾加 | classical | edward-elgar | https://audizoo.com/EccentricMusicians/musicians/edward-elgar.html |
| 37 | 泰勒曼 | classical | georg-philipp-telemann | https://audizoo.com/EccentricMusicians/musicians/georg-philipp-telemann.html |
| 38 | 維瓦第 | classical | antonio-vivaldi | https://audizoo.com/EccentricMusicians/musicians/antonio-vivaldi.html |
| 39 | 史麥塔納 | classical | bed-ich-smetana | https://audizoo.com/EccentricMusicians/musicians/bed-ich-smetana.html |
| 40 | 法朗克 | classical | c-sar-franck | https://audizoo.com/EccentricMusicians/musicians/c-sar-franck.html |
| 41 | 董尼采第 | classical | gaetano-donizetti | https://audizoo.com/EccentricMusicians/musicians/gaetano-donizetti.html |
| 42 | 奧芬巴哈 | classical | jacques-offenbach | https://audizoo.com/EccentricMusicians/musicians/jacques-offenbach.html |
| 43 | 布魯克納 | classical | anton-bruckner | https://audizoo.com/EccentricMusicians/musicians/anton-bruckner.html |
| 44 | 普賽爾 | classical | henry-purcell | https://audizoo.com/EccentricMusicians/musicians/henry-purcell.html |
| 45 | 顧爾德 | piano | glenn-gould | https://audizoo.com/EccentricMusicians/musicians/glenn-gould.html |
| 46 | 李希特 | piano | sviatoslav-richter | https://audizoo.com/EccentricMusicians/musicians/sviatoslav-richter.html |
| 47 | 霍洛維茲 | piano | vladimir-horowitz | https://audizoo.com/EccentricMusicians/musicians/vladimir-horowitz.html |
| 48 | 魯賓斯坦 | piano | arthur-rubinstein | https://audizoo.com/EccentricMusicians/musicians/arthur-rubinstein.html |
| 49 | 阿格麗希 | piano | martha-argerich | https://audizoo.com/EccentricMusicians/musicians/martha-argerich.html |
| 50 | 郎朗 | piano | lang-lang | https://audizoo.com/EccentricMusicians/musicians/lang-lang.html |
| 51 | 徹爾尼 | piano | carl-czerny | https://audizoo.com/EccentricMusicians/musicians/carl-czerny.html |
| 52 | 史納貝爾 | piano | artur-schnabel | https://audizoo.com/EccentricMusicians/musicians/artur-schnabel.html |
| 53 | 帕德瑞夫斯基 | piano | ignacy-jan-paderewski | https://audizoo.com/EccentricMusicians/musicians/ignacy-jan-paderewski.html |
| 54 | 基辛 | piano | evgeny-kissin | https://audizoo.com/EccentricMusicians/musicians/evgeny-kissin.html |
| 55 | 布梭尼 | piano | ferruccio-busoni | https://audizoo.com/EccentricMusicians/musicians/ferruccio-busoni.html |
| 56 | 阿勞 | piano | claudio-arrau | https://audizoo.com/EccentricMusicians/musicians/claudio-arrau.html |
| 57 | 霍夫曼 | piano | josef-hofmann | https://audizoo.com/EccentricMusicians/musicians/josef-hofmann.html |
| 58 | 李雲迪 | piano | yundi-li | https://audizoo.com/EccentricMusicians/musicians/yundi-li.html |
| 59 | 中村紘子 | piano | hiroko-nakamura | https://audizoo.com/EccentricMusicians/musicians/hiroko-nakamura.html |
| 60 | 基爾斯 | piano | emil-gilels | https://audizoo.com/EccentricMusicians/musicians/emil-gilels.html |
| 61 | 米開朗傑利 | piano | arturo-benedetti-michelangeli | https://audizoo.com/EccentricMusicians/musicians/arturo-benedetti-michelangeli.html |
| 62 | 阿什肯納齊 | piano | vladimir-ashkenazy | https://audizoo.com/EccentricMusicians/musicians/vladimir-ashkenazy.html |
| 63 | 麥可·傑克森 | pop | michael-jackson | https://audizoo.com/EccentricMusicians/musicians/michael-jackson.html |
| 64 | 貓王 | pop | elvis-presley | https://audizoo.com/EccentricMusicians/musicians/elvis-presley.html |
| 65 | 大衛·鮑伊 | pop | david-bowie | https://audizoo.com/EccentricMusicians/musicians/david-bowie.html |
| 66 | 佛萊迪·墨裘瑞 | pop | freddie-mercury | https://audizoo.com/EccentricMusicians/musicians/freddie-mercury.html |
| 67 | 約翰·藍儂 | pop | john-lennon | https://audizoo.com/EccentricMusicians/musicians/john-lennon.html |
| 68 | 吉米·罕醉克斯 | pop | jimi-hendrix | https://audizoo.com/EccentricMusicians/musicians/jimi-hendrix.html |
| 69 | 王子 | pop | prince | https://audizoo.com/EccentricMusicians/musicians/prince.html |
| 70 | 法蘭克·札帕 | pop | frank-zappa | https://audizoo.com/EccentricMusicians/musicians/frank-zappa.html |
| 71 | 雷·查爾斯 | pop | ray-charles | https://audizoo.com/EccentricMusicians/musicians/ray-charles.html |
| 72 | 史蒂夫·汪達 | pop | stevie-wonder | https://audizoo.com/EccentricMusicians/musicians/stevie-wonder.html |
| 73 | 巴布·狄倫 | pop | bob-dylan | https://audizoo.com/EccentricMusicians/musicians/bob-dylan.html |
| 74 | 阿姆 | pop | eminem | https://audizoo.com/EccentricMusicians/musicians/eminem.html |
| 75 | 泰勒絲 | pop | taylor-swift | https://audizoo.com/EccentricMusicians/musicians/taylor-swift.html |
| 76 | 艾爾頓·強 | pop | elton-john | https://audizoo.com/EccentricMusicians/musicians/elton-john.html |
| 77 | 女神卡卡 | pop | lady-gaga | https://audizoo.com/EccentricMusicians/musicians/lady-gaga.html |
| 78 | 周杰倫 | pop | jay-chou | https://audizoo.com/EccentricMusicians/musicians/jay-chou.html |
| 79 | 五月天阿信 | pop | ashin-mayday | https://audizoo.com/EccentricMusicians/musicians/ashin-mayday.html |
| 80 | 保羅·麥卡尼 | pop | paul-mccartney | https://audizoo.com/EccentricMusicians/musicians/paul-mccartney.html |
| 81 | 艾薇兒 | pop | avril-lavigne | https://audizoo.com/EccentricMusicians/musicians/avril-lavigne.html |
| 82 | 火星人布魯諾 | pop | bruno-mars | https://audizoo.com/EccentricMusicians/musicians/bruno-mars.html |
| 83 | 碧昂絲 | pop | beyonc | https://audizoo.com/EccentricMusicians/musicians/beyonc.html |
| 84 | 塞隆尼斯·孟克 | jazz | thelonious-monk | https://audizoo.com/EccentricMusicians/musicians/thelonious-monk.html |
| 85 | 艾靈頓公爵 | jazz | duke-ellington | https://audizoo.com/EccentricMusicians/musicians/duke-ellington.html |
| 86 | 查理·帕克 | jazz | charlie-parker | https://audizoo.com/EccentricMusicians/musicians/charlie-parker.html |
| 87 | 路易斯·阿姆斯壯 | jazz | louis-armstrong | https://audizoo.com/EccentricMusicians/musicians/louis-armstrong.html |
| 88 | 邁爾士·戴維斯 | jazz | miles-davis | https://audizoo.com/EccentricMusicians/musicians/miles-davis.html |
| 89 | 約翰·柯川 | jazz | john-coltrane | https://audizoo.com/EccentricMusicians/musicians/john-coltrane.html |
| 90 | 赫比·漢考克 | jazz | herbie-hancock | https://audizoo.com/EccentricMusicians/musicians/herbie-hancock.html |
| 91 | 帕爾曼 | jazz | itzhak-perlman | https://audizoo.com/EccentricMusicians/musicians/itzhak-perlman.html |
| 92 | 卡拉揚 | jazz | herbert-von-karajan | https://audizoo.com/EccentricMusicians/musicians/herbert-von-karajan.html |
| 93 | 伯恩斯坦 | jazz | leonard-bernstein | https://audizoo.com/EccentricMusicians/musicians/leonard-bernstein.html |
| 94 | 托斯卡尼尼 | jazz | arturo-toscanini | https://audizoo.com/EccentricMusicians/musicians/arturo-toscanini.html |
| 95 | 阿巴多 | jazz | claudio-abbado | https://audizoo.com/EccentricMusicians/musicians/claudio-abbado.html |
| 96 | 小澤征爾 | jazz | seiji-ozawa | https://audizoo.com/EccentricMusicians/musicians/seiji-ozawa.html |
| 97 | 杜普蕾 | jazz | jacqueline-du-pr | https://audizoo.com/EccentricMusicians/musicians/jacqueline-du-pr.html |
| 98 | 傅聰 | jazz | fou-ts-ong | https://audizoo.com/EccentricMusicians/musicians/fou-ts-ong.html |
| 99 | 基東·克雷默 | jazz | gidon-kremer | https://audizoo.com/EccentricMusicians/musicians/gidon-kremer.html |
| 100 | 卡薩爾斯 | jazz | pablo-casals | https://audizoo.com/EccentricMusicians/musicians/pablo-casals.html |
| 101 | 孟德爾頌 | classical | felix-mendelssohn | https://audizoo.com/EccentricMusicians/musicians/felix-mendelssohn.html |
| 102 | 葛路克 | classical | christoph-willibald-gluck | https://audizoo.com/EccentricMusicians/musicians/christoph-willibald-gluck.html |
| 103 | 蒙特威爾第 | classical | claudio-monteverdi | https://audizoo.com/EccentricMusicians/musicians/claudio-monteverdi.html |
| 104 | 柯瑞里 | classical | arcangelo-corelli | https://audizoo.com/EccentricMusicians/musicians/arcangelo-corelli.html |
| 105 | 拉摩 | classical | jean-philippe-rameau | https://audizoo.com/EccentricMusicians/musicians/jean-philippe-rameau.html |
| 106 | 古諾 | classical | charles-gounod | https://audizoo.com/EccentricMusicians/musicians/charles-gounod.html |
| 107 | 佛瑞 | classical | gabriel-faur | https://audizoo.com/EccentricMusicians/musicians/gabriel-faur.html |
| 108 | 德利布 | classical | l-o-delibes | https://audizoo.com/EccentricMusicians/musicians/l-o-delibes.html |
| 109 | 韋伯 | classical | carl-maria-von-weber | https://audizoo.com/EccentricMusicians/musicians/carl-maria-von-weber.html |
| 110 | 梅耶貝爾 | classical | giacomo-meyerbeer | https://audizoo.com/EccentricMusicians/musicians/giacomo-meyerbeer.html |
| 111 | 馬斯卡尼 | classical | pietro-mascagni | https://audizoo.com/EccentricMusicians/musicians/pietro-mascagni.html |
| 112 | 雷昂卡發洛 | classical | ruggero-leoncavallo | https://audizoo.com/EccentricMusicians/musicians/ruggero-leoncavallo.html |
| 113 | 雷斯畢基 | classical | ottorino-respighi | https://audizoo.com/EccentricMusicians/musicians/ottorino-respighi.html |
| 114 | 哈察都量 | classical | aram-khachaturian | https://audizoo.com/EccentricMusicians/musicians/aram-khachaturian.html |
| 115 | 卡巴列夫斯基 | classical | dmitri-kabalevsky | https://audizoo.com/EccentricMusicians/musicians/dmitri-kabalevsky.html |
| 116 | 帕赫貝爾 | classical | johann-pachelbel | https://audizoo.com/EccentricMusicians/musicians/johann-pachelbel.html |
| 117 | 阿爾比諾尼 | classical | tomaso-albinoni | https://audizoo.com/EccentricMusicians/musicians/tomaso-albinoni.html |
| 118 | 塔替尼 | classical | giuseppe-tartini | https://audizoo.com/EccentricMusicians/musicians/giuseppe-tartini.html |
| 119 | 薩拉沙泰 | classical | pablo-de-sarasate | https://audizoo.com/EccentricMusicians/musicians/pablo-de-sarasate.html |
| 120 | 沃爾夫 | classical | hugo-wolf | https://audizoo.com/EccentricMusicians/musicians/hugo-wolf.html |
| 121 | 雷格 | classical | max-reger | https://audizoo.com/EccentricMusicians/musicians/max-reger.html |
| 122 | 布魯赫 | classical | max-bruch | https://audizoo.com/EccentricMusicians/musicians/max-bruch.html |
| 123 | 拉羅 | classical | douard-lalo | https://audizoo.com/EccentricMusicians/musicians/douard-lalo.html |
| 124 | 克萊曼蒂 | classical | muzio-clementi | https://audizoo.com/EccentricMusicians/musicians/muzio-clementi.html |
| 125 | 史卡拉第 | classical | domenico-scarlatti | https://audizoo.com/EccentricMusicians/musicians/domenico-scarlatti.html |
| 126 | 庫普蘭 | classical | fran-ois-couperin | https://audizoo.com/EccentricMusicians/musicians/fran-ois-couperin.html |
| 127 | 波里尼 | piano | maurizio-pollini | https://audizoo.com/EccentricMusicians/musicians/maurizio-pollini.html |
| 128 | 內田光子 | piano | mitsuko-uchida | https://audizoo.com/EccentricMusicians/musicians/mitsuko-uchida.html |
| 129 | 巴倫波因 | piano | daniel-barenboim | https://audizoo.com/EccentricMusicians/musicians/daniel-barenboim.html |
| 130 | 布蘭德爾 | piano | alfred-brendel | https://audizoo.com/EccentricMusicians/musicians/alfred-brendel.html |
| 131 | 齊瑪曼 | piano | krystian-zimerman | https://audizoo.com/EccentricMusicians/musicians/krystian-zimerman.html |
| 132 | 普雷特涅夫 | piano | mikhail-pletnev | https://audizoo.com/EccentricMusicians/musicians/mikhail-pletnev.html |
| 133 | 涅高茲 | piano | heinrich-neuhaus | https://audizoo.com/EccentricMusicians/musicians/heinrich-neuhaus.html |
| 134 | 波戈雷利奇 | piano | ivo-pogorelich | https://audizoo.com/EccentricMusicians/musicians/ivo-pogorelich.html |
| 135 | 佩拉西亞 | piano | murray-perahia | https://audizoo.com/EccentricMusicians/musicians/murray-perahia.html |
| 136 | 索科洛夫 | piano | grigory-sokolov | https://audizoo.com/EccentricMusicians/musicians/grigory-sokolov.html |
| 137 | 殷承宗 | piano | yin-chengzong | https://audizoo.com/EccentricMusicians/musicians/yin-chengzong.html |
| 138 | 劉詩昆 | piano | liu-shikun | https://audizoo.com/EccentricMusicians/musicians/liu-shikun.html |
| 139 | 巫漪麗 | piano | wu-yili | https://audizoo.com/EccentricMusicians/musicians/wu-yili.html |
| 140 | 基里爾·格斯坦 | piano | kirill-gerstein | https://audizoo.com/EccentricMusicians/musicians/kirill-gerstein.html |
| 141 | 瑪丹娜 | pop | madonna | https://audizoo.com/EccentricMusicians/musicians/madonna.html |
| 142 | 惠妮·休斯頓 | pop | whitney-houston | https://audizoo.com/EccentricMusicians/musicians/whitney-houston.html |
| 143 | 席琳·狄翁 | pop | c-line-dion | https://audizoo.com/EccentricMusicians/musicians/c-line-dion.html |
| 144 | 艾黛兒 | pop | adele | https://audizoo.com/EccentricMusicians/musicians/adele.html |
| 145 | 紅髮艾德 | pop | ed-sheeran | https://audizoo.com/EccentricMusicians/musicians/ed-sheeran.html |
| 146 | 怪奇比莉 | pop | billie-eilish | https://audizoo.com/EccentricMusicians/musicians/billie-eilish.html |
| 147 | 亞莉安娜 | pop | ariana-grande | https://audizoo.com/EccentricMusicians/musicians/ariana-grande.html |
| 148 | 蕾哈娜 | pop | rihanna | https://audizoo.com/EccentricMusicians/musicians/rihanna.html |
| 149 | 凱蒂·佩芮 | pop | katy-perry | https://audizoo.com/EccentricMusicians/musicians/katy-perry.html |
| 150 | 小賈斯汀 | pop | justin-bieber | https://audizoo.com/EccentricMusicians/musicians/justin-bieber.html |
| 151 | 艾克索·羅斯 | pop | axl-rose | https://audizoo.com/EccentricMusicians/musicians/axl-rose.html |
| 152 | 米克·傑格 | pop | mick-jagger | https://audizoo.com/EccentricMusicians/musicians/mick-jagger.html |
| 153 | 吉米·佩吉 | pop | jimmy-page | https://audizoo.com/EccentricMusicians/musicians/jimmy-page.html |
| 154 | 大衛·吉爾摩 | pop | david-gilmour | https://audizoo.com/EccentricMusicians/musicians/david-gilmour.html |
| 155 | 查斯特·班寧頓 | pop | chester-bennington | https://audizoo.com/EccentricMusicians/musicians/chester-bennington.html |
| 156 | 波諾 | pop | bono | https://audizoo.com/EccentricMusicians/musicians/bono.html |
| 157 | 克里斯·馬汀 | pop | chris-martin | https://audizoo.com/EccentricMusicians/musicians/chris-martin.html |
| 158 | 連恩·蓋勒格 | pop | liam-gallagher | https://audizoo.com/EccentricMusicians/musicians/liam-gallagher.html |
| 159 | 亞當·李維 | pop | adam-levine | https://audizoo.com/EccentricMusicians/musicians/adam-levine.html |
| 160 | 張惠妹 | pop | a-mei | https://audizoo.com/EccentricMusicians/musicians/a-mei.html |
| 161 | 林俊傑 | pop | jj-lin | https://audizoo.com/EccentricMusicians/musicians/jj-lin.html |
| 162 | 蔡依林 | pop | jolin-tsai | https://audizoo.com/EccentricMusicians/musicians/jolin-tsai.html |
| 163 | 李宗盛 | pop | jonathan-lee | https://audizoo.com/EccentricMusicians/musicians/jonathan-lee.html |
| 164 | 羅大佑 | pop | lo-ta-yu | https://audizoo.com/EccentricMusicians/musicians/lo-ta-yu.html |
| 165 | 伍佰 | pop | wu-bai | https://audizoo.com/EccentricMusicians/musicians/wu-bai.html |
| 166 | 蔡琴 | pop | tsai-chin | https://audizoo.com/EccentricMusicians/musicians/tsai-chin.html |
| 167 | 鄧麗君 | pop | teresa-teng | https://audizoo.com/EccentricMusicians/musicians/teresa-teng.html |
| 168 | 費玉清 | pop | fei-yu-ching | https://audizoo.com/EccentricMusicians/musicians/fei-yu-ching.html |
| 169 | 林憶蓮 | pop | sandy-lam | https://audizoo.com/EccentricMusicians/musicians/sandy-lam.html |
| 170 | 王菲 | pop | faye-wong | https://audizoo.com/EccentricMusicians/musicians/faye-wong.html |
| 171 | 陳奕迅 | pop | eason-chan | https://audizoo.com/EccentricMusicians/musicians/eason-chan.html |
| 172 | 孫燕姿 | pop | stefanie-sun | https://audizoo.com/EccentricMusicians/musicians/stefanie-sun.html |
| 173 | 陳綺貞 | pop | cheer-chen | https://audizoo.com/EccentricMusicians/musicians/cheer-chen.html |
| 174 | 庾澄慶 | pop | harlem-yu | https://audizoo.com/EccentricMusicians/musicians/harlem-yu.html |
| 175 | 劉若英 | pop | ren-liu | https://audizoo.com/EccentricMusicians/musicians/ren-liu.html |
| 176 | 艾拉·費茲潔拉 | jazz | ella-fitzgerald | https://audizoo.com/EccentricMusicians/musicians/ella-fitzgerald.html |
| 177 | 妮娜·西蒙 | jazz | nina-simone | https://audizoo.com/EccentricMusicians/musicians/nina-simone.html |
| 178 | 比莉·哈樂黛 | jazz | billie-holiday | https://audizoo.com/EccentricMusicians/musicians/billie-holiday.html |
| 179 | 狄吉·葛雷斯比 | jazz | dizzy-gillespie | https://audizoo.com/EccentricMusicians/musicians/dizzy-gillespie.html |
| 180 | 查理·明格斯 | jazz | charles-mingus | https://audizoo.com/EccentricMusicians/musicians/charles-mingus.html |
| 181 | 史坦·蓋茲 | jazz | stan-getz | https://audizoo.com/EccentricMusicians/musicians/stan-getz.html |
| 182 | 溫頓·馬沙利斯 | jazz | wynton-marsalis | https://audizoo.com/EccentricMusicians/musicians/wynton-marsalis.html |
| 183 | 諾拉·瓊絲 | jazz | norah-jones | https://audizoo.com/EccentricMusicians/musicians/norah-jones.html |
| 184 | 戴安娜·克瑞兒 | jazz | diana-krall | https://audizoo.com/EccentricMusicians/musicians/diana-krall.html |
| 185 | 凱斯·傑瑞特 | jazz | keith-jarrett | https://audizoo.com/EccentricMusicians/musicians/keith-jarrett.html |
| 186 | 派特·麥席尼 | jazz | pat-metheny | https://audizoo.com/EccentricMusicians/musicians/pat-metheny.html |
| 187 | 馬友友 | jazz | yo-yo-ma | https://audizoo.com/EccentricMusicians/musicians/yo-yo-ma.html |
| 188 | 穆特 | jazz | anne-sophie-mutter | https://audizoo.com/EccentricMusicians/musicians/anne-sophie-mutter.html |
| 189 | 諏訪內晶子 | jazz | akiko-suwanai | https://audizoo.com/EccentricMusicians/musicians/akiko-suwanai.html |
| 190 | 鄭京和 | jazz | kyung-wha-chung | https://audizoo.com/EccentricMusicians/musicians/kyung-wha-chung.html |
| 191 | 肯尼·G | jazz | kenny-g | https://audizoo.com/EccentricMusicians/musicians/kenny-g.html |
| 192 | 約翰·威廉斯 | jazz | john-williams | https://audizoo.com/EccentricMusicians/musicians/john-williams.html |
| 193 | 漢斯·季默 | jazz | hans-zimmer | https://audizoo.com/EccentricMusicians/musicians/hans-zimmer.html |
| 194 | 坂本龍一 | jazz | ryuichi-sakamoto | https://audizoo.com/EccentricMusicians/musicians/ryuichi-sakamoto.html |
| 195 | 久石讓 | jazz | joe-hisaishi | https://audizoo.com/EccentricMusicians/musicians/joe-hisaishi.html |
| 196 | 譚盾 | jazz | tan-dun | https://audizoo.com/EccentricMusicians/musicians/tan-dun.html |
| 197 | 尹伊桑 | jazz | isang-yun | https://audizoo.com/EccentricMusicians/musicians/isang-yun.html |
| 198 | 艾薩克·史登 | jazz | isaac-stern | https://audizoo.com/EccentricMusicians/musicians/isaac-stern.html |
| 199 | 弗里茨·克萊斯勒 | jazz | fritz-kreisler | https://audizoo.com/EccentricMusicians/musicians/fritz-kreisler.html |
| 200 | 帕華洛帝 | jazz | luciano-pavarotti | https://audizoo.com/EccentricMusicians/musicians/luciano-pavarotti.html |
