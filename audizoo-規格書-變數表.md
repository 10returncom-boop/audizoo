# audizoo 音樂動物園 — 完整規格書 ＆ 變數表

> 用途：作為全站樣式、主題、元件、響應式與導覽的**唯一參考依據**，方便直接修改。
> 目錄：`D:\_WWW_325_public\audizoo`　線上：`https://audizoo.com/`（GitHub Pages）
> 最後更新：2026-10-04

---

## 1. 專案概覽

- **性質**：音樂主題教育網站「聲音／音樂動物園」，把「音樂」拆成古樂器、音樂家、數學、節奏遊戲與聲紋辨識等玩法。
- **技術**：純靜態 HTML + CSS + JavaScript（Web Audio API），無後端、無追蹤碼。
- **首頁 slogan**：
  - 第一行：`在audizoo，音樂不只用聽的`
  - 第二行：`在音樂動物園，是用玩、用看、用找的`（桌面一行；手機在「用玩」後斷行，`用看、用找的` 不拆）
- **全站風格基調**：淺藍底、按鈕淺藍底黑字、水彩插畫 hero。

---

## 2. 檔案／目錄結構

```
audizoo/
├── index.html                    首頁（audizoo.com/）
├── audizoo_about.html            關於「音樂動物園」
├── audizoo_audizoo.html          品牌說明
├── audizoo_contact.html          聯絡
├── audizoo_index2.html           子頁 2
├── audizoo_index3.html           子頁 3
├── audizoo_index11.html          子頁 11（舊文案，未同步）
├── audizoo_journey.html          音樂之旅
├── audizoo_sites.html            網站地圖（全部音樂站）
├── audizoo_ways.html             玩法
├── index_.html                   舊版首頁（保留未刪）
├── assets/                       首頁圖檔（flag-0X-*.png 等）
├── zeng-hou-yi-bells/index.html  站 1｜曾侯乙編鐘（古樂器）
├── EccentricMusicians/index.html 站 2｜音樂家都很怪
├── MusicMath/index.html          站 3｜音樂就是數學
├── MusicGames20/index.html       站 4｜20 款音樂遊戲
├── ComposerId/index.html         站 5｜用音訊找音樂家
└── MusicProdLab/index.html       站 6｜音樂製作實驗室
```

**6 站共同元件（本規格書統一套用）：**
| 元件 | 內容 |
|---|---|
| `#audizoo-backnav` | 左下角 3 鈕：`← 回上頁`（`javascript:history.back()`）、`返回首頁`（`../index.html`）、`☰ sitemap`（`../audizoo_sites.html`） |
| 標題 button（站 3–6） | hero 標題改為淺藍底黑字藥丸 button |
| 說明文字面板 | 白色半透明面板墊底，水彩圖上仍可讀 |

---

## 3. 主題機制總表（重要）

| 頁面 | 主題機制 | 預設 | 切換方式 | 變數所在 |
|---|---|---|---|---|
| 首頁 index.html | 僅淺色（無切換） | 白天 | — | `:root` |
| 站1 曾侯乙編鐘 | 僅深銅紅色 | 深色 | — | `:root` |
| 站2 音樂家都很怪 | 僅淺米色 | 白天 | — | `:root` |
| 站3 MusicMath | `data-theme="light"/"dark"` | **白天**（`<body data-theme="light">`） | `toggleTheme()` 切 `body.dataset.theme` | `:root`(白天) ＋ `[data-theme="dark"]` |
| 站4 MusicGames20 | **無主題系統**（固定霓虹暗色） | 深色 | — | 無 `:root`，用內嵌 `--accent/--glow` |
| 站5 ComposerId | 僅淺紫白 | 白天 | — | `:root` |
| 站6 MusicProdLab | `body` 加/去 `.light` class | **白天**（`<body class="light">`、按鈕 ☀️） | `toggleTheme()` 切 `body.classList` | `:root`(夜晚) ＋ `body.light` |

> ⚠️ 站4 MusicGames20 若要白天預設，需自行設計一套淺色主題（目前固定暗色霓虹）。

---

## 4. 全站變數表（CSS Custom Properties）

### 4.1 首頁 index.html（白天，23 個變數）

| 變數 | 值 | 用途 |
|---|---|---|
| `--bg` | `#E3F0FA` | 頁面主背景（淺藍） |
| `--bg-soft` | `#D3E6F5` | 淺藍（次背景） |
| `--surface` | `#FFFFFF` | 卡片／面板表面 |
| `--surface-2` | `#E3F0FA` | 次要表面 |
| `--ink` | `#2E2A25` | 主要文字（深棕黑） |
| `--ink-soft` | `#5C534A` | 次要文字 |
| `--mute` | `#8A8072` | 弱化文字 |
| `--line` | `#C3D9EC` | 邊框線 |
| `--accent` | `#C97B4E` | 強調色（橘棕） |
| `--accent-soft` | `#F2DDC9` | 強調淺底 |
| `--sage` | `#7E9C7A` | 鼠尾草綠 |
| `--sage-soft` | `#E3EDE1` | 綠淺底 |
| `--mist` | `#7E93A8` | 霧藍 |
| `--mist-soft` | `#E1E8EF` | 霧藍淺底 |
| `--sky` | `#B6DCF6` | **按鈕主色（淺藍）** |
| `--sky-2` | `#9FCBE9` | 按鈕邊框／hover |
| `--sun` | `#D9A441` | 金色強調 |
| `--sun-soft` | `#F3E6C8` | 金淺底 |
| `--shadow` | `0 1px 2px rgba(46,42,37,.06),0 6px 24px rgba(46,42,37,.06)` | 陰影 |
| `--radius` | `22px` | 卡片圓角 |
| `--serif` | `"Noto Serif SC",Georgia,"Songti SC","PMingLiU",serif` | 標題字型 |
| `--sans` | `"Noto Sans SC","PingFang TC","Microsoft JhengHei",system-ui,sans-serif` | 內文字型 |
| `--ease` | `cubic-bezier(.22,.61,.36,1)` | 動畫曲線 |

### 4.2 站1 曾侯乙編鐘（深銅紅，14 個變數）

| 變數 | 值 | 用途 |
|---|---|---|
| `--bronze-deep` | `#1a0808` | 最深底（近黑紅） |
| `--bronze-dark` | `#2a0c0c` | 深銅紅底 |
| `--bronze-mid` | `#3a1010` | 中銅紅 |
| `--bronze-light` | `#4a1818` | 亮銅紅 |
| `--patina` | `#8b1a1a` | 鏽紅 |
| `--patina-light` | `#a83030` | 鏽紅亮 |
| `--vermilion` | `#b91c1c` | 硃紅 |
| `--vermilion-bright` | `#ef4444` | 亮硃紅 |
| `--gold` | `#c9a961` | 古銅金 |
| `--gold-bright` | `#e0c878` | 亮金 |
| `--ivory` | `#f5ede4` | 象牙白（文字） |
| `--ivory-dim` | `#c8b8a0` | 象牙暗 |
| `--ink` | `#1a0808` | 深墨 |
| `--sidebar-w` | `280px` | 側欄寬度 |

### 4.3 站2 音樂家都很怪（淺米色，18 個變數）

| 變數 | 值 | 用途 |
|---|---|---|
| `--bg` | `#F7EFDC` | 主背景（米） |
| `--bg-2` | `#FBF6E8` | 次背景 |
| `--bg-3` | `#EFE3C6` | 第三層 |
| `--ink` | `#232A33` | 主要文字 |
| `--muted` | `#6B6F5F` | 次要文字 |
| `--faint` | `#999B8C` | 弱化文字 |
| `--accent` | `#E05E2B` | 強調（橘紅） |
| `--accent-soft` | `#F6D7C2` | 橘紅淺底 |
| `--accent-2` | `#1F5F5B` | 次強調（墨綠） |
| `--accent-2-soft` | `#C9E0DC` | 墨綠淺底 |
| `--gold` | `#C88A1E` | 金色 |
| `--gold-soft` | `#F3E3BC` | 金淺底 |
| `--line` | `rgba(35,42,51,.14)` | 邊框 |
| `--card` | `#FFFCF2` | 卡片面 |
| `--shadow` | `0 10px 30px -18px rgba(60,45,20,.35)` | 陰影 |
| `--radius` | `14px` | 圓角 |
| `--serif` | `"Noto Serif TC",…` | 標題字型 |
| `--sans` | `"Noto Sans TC",…` | 內文字型 |

### 4.4 站3 MusicMath（白天 10 ＋ 夜晚 9 個變數）

**白天 `:root`（預設）：**

| 變數 | 值 | | 變數 | 值 |
|---|---|---|---|---|
| `--bg` | `#f5f3ff` | | `--primary` | `#6366f1` |
| `--panel` | `#fff` | | `--accent` | `#ec4899` |
| `--panel2` | `#ede9fe` | | `--green` | `#10b981` |
| `--border` | `#ddd6fe` | | `--yellow` | `#f59e0b` |
| `--text` | `#1e1b4b` | | `--muted` | `#6b7280` |

**夜晚 `[data-theme="dark"]`：**

| 變數 | 值 | | 變數 | 值 |
|---|---|---|---|---|
| `--bg` | `#0f0d1f` | | `--primary` | `#818cf8` |
| `--panel` | `#1a1832` | | `--accent` | `#f472b6` |
| `--panel2` | `#252244` | | `--green` | `#34d399` |
| `--border` | `#35315e` | | `--muted` | `#9ca3af` |
| `--text` | `#e0e7ff` | | | |

### 4.5 站4 MusicGames20（無 CSS 變數，內嵌配色）

- **body**：`background:#0a0a1a; color:#fff`（深藍底、白字）
- **標題漸層**：`linear-gradient(90deg,#0ff,#f0f,#ff0,#0f0)`（青→紫→黃→綠，動畫）
- **卡片**：半透明白 `rgba(255,255,255,.05)`、圓角 16px
- 每張卡內嵌 `--accent`（主題色）與 `--glow`（光暈），共 20 張卡 → 改色在卡片 `<a class="card" style="--accent:…;--glow:…">` 內嵌改。

### 4.6 站5 ComposerId（淺紫白，11 個變數）

| 變數 | 值 | 用途 |
|---|---|---|
| `--primary` | `#6d28d9` | 主色（紫） |
| `--primary-dark` | `#5b21b6` | 深紫 |
| `--primary-light` | `#f5f3ff` | 淺紫白（body 背景） |
| `--primary-lighter` | `#ede9fe` | 更淺紫 |
| `--accent` | `#8b5cf6` | 強調紫 |
| `--gold` | `#f59e0b` | 金 |
| `--ink` | `#1f2937` | 文字 |
| `--muted` | `#6b7280` | 次要文字 |
| `--card-bg` | `#ffffff` | 卡片 |
| `--shadow` | `0 4px 24px rgba(109,40,217,0.08)` | 陰影 |
| `--shadow-hover` | `0 12px 40px rgba(109,40,217,0.15)` | hover 陰影 |

### 4.7 站6 MusicProdLab（夜晚 21 ＋ 白天 8 個變數）

**夜晚 `:root`（預設改白天後仍保留）：**

| 變數 | 值 | 用途 |
|---|---|---|
| `--bg-deep` | `#070714` | 深底 |
| `--bg-mid` | `#0f0f24` | 中底 |
| `--bg-card` | `rgba(20,20,45,.7)` | 卡片 |
| `--bg-card-hover` | `rgba(30,30,60,.85)` | 卡片 hover |
| `--border` | `rgba(120,120,200,.15)` | 邊框 |
| `--border-bright` | `rgba(140,140,255,.35)` | 亮邊框 |
| `--text-primary` | `#e8e8f5` | 主文字 |
| `--text-secondary` | `#9898b8` | 次文字 |
| `--text-muted` | `#686888` | 弱文字 |
| `--cyan` | `#00e5ff` | 青 |
| `--purple` | `#b388ff` | 紫 |
| `--pink` | `#ff6b9d` | 粉 |
| `--orange` | `#ffab40` | 橘 |
| `--green` | `#69f0ae` | 綠 |
| `--red` | `#ff5252` | 紅 |
| `--yellow` | `#ffd740` | 黃 |
| `--blue` | `#448aff` | 藍 |
| `--radius` | `12px` | 圓角 |
| `--font-sans` | `'Noto Sans TC',…` | 字型 |
| `--sidebar-w` | `240px` | 側欄寬 |
| `--header-h` | `60px` | 頂欄高 |

**白天 `body.light`（目前預設）：**

| 變數 | 值 |
|---|---|
| `--bg-deep` | `#f4f6fb` |
| `--bg-mid` | `#fff` |
| `--bg-card` | `rgba(255,255,255,.9)` |
| `--bg-card-hover` | `#fff` |
| `--border` | `rgba(80,90,140,.18)` |
| `--border-bright` | `rgba(80,90,200,.4)` |
| `--text-primary` | `#1a1a2e` |
| `--text-secondary` | `#4a4a68` |

> 白天改色只動 `body.light{…}` 區塊；切換按鈕在 `.header-actions` 最後一個 `<button onclick="toggleTheme()">☀️/🌙</button>`。

---

## 5. 元件規格

### 5.1 統一按鈕（首頁）
- 樣式：`--sky` 淺藍底、`#000` 黑字、圓角 `999px`、邊框 `1px solid var(--sky-2)`、hover 轉 `--sky-2` 並上移 2px。
- 套用 class：`.btn-primary`、`.flag-go`、`.chip`、`.site .s-go`、`.fd-btn`、`.sms-fab`。

### 5.2 6 站返回導覽（`#audizoo-backnav`）
- **位置**：`position:fixed; left:24px; bottom:24px; z-index:99999; display:flex; gap:8px; flex-wrap:wrap; justify-content:flex-start;`
- **3 個按鈕**（黑底白字）：`background:#000; color:#fff; border:1px solid #000; border-radius:999px; padding:9px 15px; font-size:13px; box-shadow:0 2px 8px rgba(0,0,0,.2)`
  - `← 回上頁` → `javascript:history.back()`
  - `返回首頁` → `../index.html`
  - `☰ sitemap` → `../audizoo_sites.html`
- 移動到右上／右下／左下：改 `left/right` 與 `bottom/top`、`justify-content`（`flex-start`=靠左、`flex-end`=靠右）。

### 5.3 標題 button（站3–6 hero）
- 樣式：`background:#B6DCF6; color:#111; border-radius:999px; padding:.5em 1.1em; border:1.5px solid rgba(0,0,0,.12); box-shadow:0 6px 18px rgba(0,0,0,.2);` 並 `-webkit-background-clip:initial;-webkit-text-fill-color:#111;background-image:none`（覆蓋原漸層字）。
- 注入位置：各站 `</head>` 前的新 `<style>`（註解 `audizoo hero title as button`）。
- 套用 selector：`.header h1`（站3/4）、`.hero h1`（站5/6）。

### 5.4 說明文字面板
- `background:rgba(255,255,255,.85); color:#1a1a2e; border-radius:14px; display:inline-block; padding:.5em 1.2em; box-shadow:0 4px 14px rgba(0,0,0,.14)`。

### 5.5 浮動導覽總位置（目前全在左下）
| 元素 | 位置 |
|---|---|
| 首頁 `sms-fab`（sitemap） | `left:24px;bottom:24px`（手機 `left:16px;bottom:16px`） |
| 6 站 `audizoo-backnav` | `left:24px;bottom:24px` |
| 站2 原生 `sm-fab`（站內地圖） | `left:20px;bottom:20px` |

> ⚠️ 站2 同時有返回導覽＋原生 `sm-fab`，左下會重疊，建議二擇一。

### 5.6 hero 背景圖
- 站3–6 的 hero/header 以 `background-image:url('assets/hero.webp')` 當背景（該站首頁旗艦圖副本）。
- **手機（≤760px）**：隱藏背景圖，與文字分開（`background-image:none!important`）。

---

## 6. 響應式／手機規格

| 項目 | 規則 |
|---|---|
| 首頁 hero 背景 | `@media(max-width:760px){.hero-bg{display:none}}` |
| 首頁 hero 標題 | `@media(max-width:640px){.hero h1{font-size:clamp(24px,6.8vw,34px);line-height:1.2;max-width:100%}}` |
| 首頁品牌 | `@media(max-width:640px){.brand{white-space:nowrap}}` |
| 首頁 lead | `@media(max-width:640px){.lead{font-size:15px;max-width:100%}}` |
| 站3–6 hero 背景 | `@media(max-width:760px){.header,.hero{background-image:none!important}}` |
| 首頁標題斷行 | 桌面第二句一行；手機在「用玩」後斷行，`用看、用找的` 不拆 |

---

## 7. 導覽／連結規格

- 根頁均已加 `audizoo_` 前綴；`canonical`/`og:url` 對應 `https://audizoo.com/audizoo_*.html`。
- 6 站返回首頁：`../index.html`；sitemap：`../audizoo_sites.html`。
- 首頁 6 站旗艦卡「開啟主題站」連結：`./zeng-hou-yi-bells/index.html`、`./EccentricMusicians/index.html`、`./MusicMath/index.html`、`./MusicGames20/index.html`、`./ComposerId/index.html`、`./MusicProdLab/index.html`。

---

## 8. 修改指引（速查）

- **改全站按鈕顏色**：首頁改 `--sky`／`--sky-2`；站內按鈕若用內嵌 style，改各站對應 `background:#B6DCF6` 等。
- **改返回導覽顏色**：6 站 `#audizoo-backnav` 內 3 個 `<a>` 的 `background:#000;color:#fff;border:1px solid #000`。
- **改某站主題色**：改該站 `:root`／`body.light`／`[data-theme="dark"]` 區塊變數。
- **改背景圖**：站3–6 的 hero 背景指向 `assets/hero.webp`（換圖直接替換該檔）。
- **改手機顯示**：改第 6 節媒體查詢。

---

## 9. 已知事項／待決

- 站4 MusicGames20 無主題系統，白天需另設計。
- `audizoo_index11.html` lead 仍為舊文案（「…五種玩法」＋「28 座」數字），未同步。
- 站2 左下浮動導覽重疊（返回導覽＋原生站內地圖）待二擇一。
- 本機改動需 `git add -A && git commit && git push` 才會上線；依你的規則，**未確認不 push**。
