/* ===== Unified Navigation System for _WWW_dynamic =====
 * 功能：Header / Footer / 麵包屑(自動讀網址) / 下拉選單 / 側邊欄收合 / RWD手機摺疊 / 全域搜尋 / 語言切換
 */
(function () {
  'use strict';

  /* ========== I18N 中英文切換 ========== */
  var I18N = {
    zh: {
      brand: '欣矩陣 ∞ 欣媒體 9️⃣ 舒安境空間',
      home: '首頁',
      sites: '網站導覽',
      quickLinks: '快速連結',
      searchPlaceholder: '搜尋網站或頁面...',
      toggleSidebar: '展開/收合側邊欄',
      backToPortal: '返回 Portal 首頁',
      current: '目前',
      sitesCount: '個網站',
      pagesCount: '個頁面',
      siteCollection: '網站集合',
      hotSites: '熱門網站',
      relatedSites: '相關網站',
      allSites: '全部網站',
      expandAll: '展開全部',
      collapseAll: '收起全部',
      backToPortalBtn: '返回欣矩陣門戶',
      noResults: '找不到符合的結果',
      developer: '<i class="fab fa-line" style="color:#06c755"></i> Line: 331.today  📞0968222201  🌎規劃/設計/開發/行銷：舒安境工作室  <a href="{base}bio_張書欣/index.html" style="color:inherit;text-decoration:none;"><i class="fas fa-user girl-avatar"></i>張書欣</a>',
      langSwitch: 'EN',
      langName: '繁體中文',
      scrollTop: '回到頂部',
      portal: 'Portal',
      top: '頂端',
      version: '統一導航 v2.0'
    },
    en: {
      brand: '∞Matrix 9️⃣ Susi Space',
      home: 'Home',
      sites: 'Sites',
      quickLinks: 'Quick Links',
      searchPlaceholder: 'Search sites or pages...',
      toggleSidebar: 'Toggle sidebar',
      backToPortal: 'Back to Portal',
      current: 'Current',
      sitesCount: 'sites',
      pagesCount: 'pages',
      siteCollection: 'Site Collection',
      hotSites: 'Hot Sites',
      relatedSites: 'Related Sites',
      allSites: 'All Sites',
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      backToPortalBtn: 'Back to Portal',
      noResults: 'No results found',
      developer: '<i class="fab fa-line" style="color:#06c755"></i> Line: 331.today  📞0968222201  🌎Plan/Design/Dev/Marketing: Shu An Jing Studio  <a href="{base}bio_張書欣/index.html" style="color:inherit;text-decoration:none;"><i class="fas fa-user girl-avatar"></i>Chang Shu-Hsin</a>',
      langSwitch: '中',
      langName: 'English',
      scrollTop: 'Back to Top',
      portal: 'Portal',
      top: 'Top',
      version: 'Unified Nav v2.0'
    }
  };

  var currentLang = 'zh';
  try {
    currentLang = localStorage.getItem('xinmatrix_lang') || 'zh';
  } catch (e) { /* ignore */ }

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || key;
  }

  /* ========== SITES 資料庫 ========== */
  var SITES = [
    /* ===== 工作生產力 ===== */
    {
      id: 'bio-susi', name: '張書欣個人網站', folder: 'bio_張書欣',
      icon: 'fa-user-tie', color: '#6366f1', category: '工作生產力',
      pages: [
        { name: '個人首頁', path: 'index.html', icon: 'fa-house' },
        { name: '關於我', path: 'about.html', icon: 'fa-user' },
        { name: '工作經歷', path: 'experience.html', icon: 'fa-briefcase' },
        { name: '專業技能', path: 'skills.html', icon: 'fa-cogs' },
        { name: '作品展示', path: 'portfolio.html', icon: 'fa-star' },
        { name: '聯絡我', path: 'contact.html', icon: 'fa-envelope' }
      ]
    },
    {
      id: 'freelance', name: '接案管理系統', folder: '接案管理系統',
      icon: 'fa-briefcase', color: '#6366f1', category: '工作生產力',
      pages: [{ name: '系統首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'quote-compare', name: '報價單比較網', folder: '報價單比較網',
      icon: 'fa-scale-balanced', color: '#f59e0b', category: '工作生產力',
      pages: [{ name: '報價比較', path: 'index.html', icon: 'fa-scale-balanced' }]
    },
    {
      id: 'quote-gen', name: '報價網', folder: '報價網',
      icon: 'fa-file-invoice-dollar', color: '#10b981', category: '工作生產力',
      pages: [{ name: '報價產生器', path: 'index.html', icon: 'fa-file-invoice' }]
    },
    {
      id: 'media-publish', name: '多媒體發布系統', folder: '多媒體發布系統',
      icon: 'fa-photo-film', color: '#ec4899', category: '工作生產力',
      pages: [
        { name: '前台首頁', path: 'public/index.html', icon: 'fa-house' },
        { name: '後台管理', path: 'public/admin.html', icon: 'fa-gear' }
      ]
    },
    {
      id: 'dynamic-db', name: '動態資料庫', folder: 'dynamic-db',
      icon: 'fa-database', color: '#0ea5e9', category: '工作生產力',
      pages: [{ name: '資料庫首頁', path: 'website/index.html', icon: 'fa-database' }]
    },
    {
      id: 'dynamic-portal', name: '動態入口平台', folder: 'dynamic-portal',
      icon: 'fa-door-open', color: '#8b5cf6', category: '工作生產力',
      pages: [{ name: '入口首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'easy-builder', name: 'Easy Builder 網站產生器', folder: 'easy-builder',
      icon: 'fa-wand-magic-sparkles', color: '#f43f5e', category: '工作生產力',
      pages: [
        { name: '管理後台', path: 'admin.html', icon: 'fa-gear' },
        { name: '產生首頁', path: 'output/index.html', icon: 'fa-house' },
        { name: '關於頁', path: 'output/about.html', icon: 'fa-circle-info' },
        { name: '產品頁', path: 'output/products.html', icon: 'fa-box' },
        { name: '最新消息', path: 'output/news.html', icon: 'fa-newspaper' },
        { name: '藝術頁', path: 'output/art.html', icon: 'fa-palette' },
        { name: '聯絡頁', path: 'output/contact.html', icon: 'fa-envelope' }
      ]
    },
    {
      id: 'excel-nav', name: 'Excel網站導覽產生器', folder: 'Excel網站導覽與變數清單自動生成靜態網頁',
      icon: 'fa-file-excel', color: '#16a34a', category: '工作生產力',
      pages: [
        { name: '導覽首頁', path: 'dist/index.html', icon: 'fa-house' },
        { name: '分類1', path: 'dist/category-cat-1.html', icon: 'fa-folder' },
        { name: '分類2', path: 'dist/category-cat-2.html', icon: 'fa-folder' },
        { name: '分類3', path: 'dist/category-cat-3.html', icon: 'fa-folder' },
        { name: '分類4', path: 'dist/category-cat-4.html', icon: 'fa-folder' },
        { name: '分類5', path: 'dist/category-cat-5.html', icon: 'fa-folder' }
      ]
    },
    {
      id: 'freelance-site', name: '接案網站', folder: '接案網站',
      icon: 'fa-handshake', color: '#0284c7', category: '工作生產力',
      pages: [
        { name: '接案首頁', path: 'index.html', icon: 'fa-house' },
        { name: '資料庫', path: 'database.html', icon: 'fa-database' }
      ]
    },
    {
      id: 'barter-site', name: '以物易物網站', folder: '製作以物易物網站',
      icon: 'fa-arrows-rotate', color: '#65a30d', category: '工作生產力',
      pages: [{ name: '以物易物首頁', path: 'public/index.html', icon: 'fa-house' }]
    },
    {
      id: 'unified-db', name: '統一動態資料庫', folder: '統一動態資料庫',
      icon: 'fa-database', color: '#0ea5e9', category: '工作生產力',
      pages: [{ name: '資料庫首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'realestate-db', name: '不動產智能資料庫', folder: '不動產智能資料庫',
      icon: 'fa-building', color: '#6366f1', category: '工作生產力',
      pages: [{ name: '儀表板首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'line-analytics', name: 'LINE數據分析平台', folder: 'LINE數據分析平台',
      icon: 'fa-comment-dots', color: '#06b6d4', category: '工作生產力',
      pages: [{ name: '分析首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'tools-suite', name: '綜合平台與工具集', folder: '綜合平台與工具集',
      icon: 'fa-toolbox', color: '#8b5cf6', category: '工作生產力',
      pages: [{ name: '工具集首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'lark-tools', name: 'Lark平台工具', folder: 'Lark平台工具',
      icon: 'fa-feather', color: '#10b981', category: '工作生產力',
      pages: [{ name: '總導覽', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'cliphouse', name: 'ClipHouse視頻管理', folder: 'ClipHouse視頻管理',
      icon: 'fa-video', color: '#ef4444', category: '工作生產力',
      pages: [{ name: '視頻首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: '9rhouse', name: '9RHouse房屋資訊', folder: '9RHouse房屋資訊',
      icon: 'fa-house-chimney', color: '#f59e0b', category: '工作生產力',
      pages: [{ name: '房屋首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'emba-realestate', name: '東海大學EMBA不動產管理組', folder: '東海大學EMBA不動產管理組',
      icon: 'fa-graduation-cap', color: '#7c3aed', category: '工作生產力',
      pages: [{ name: 'EMBA首頁', path: 'index.html', icon: 'fa-house' }]
    },

    /* ===== 生活應用 ===== */
    {
      id: 'pet-care', name: '寵物養護叮嚀追蹤', folder: '寵物養護叮嚀追蹤網站',
      icon: 'fa-paw', color: '#f97316', category: '生活應用',
      pages: [{ name: '養護追蹤', path: 'index.html', icon: 'fa-paw' }]
    },
    {
      id: 'pet-care-tracker', name: '毛孩守護寵物追蹤', folder: '毛孩守護」寵物自動養護叮嚀追蹤網站pet-care-tracker',
      icon: 'fa-dog', color: '#06b6d4', category: '生活應用',
      pages: [{ name: '毛孩守護', path: 'index.html', icon: 'fa-dog' }]
    },
    {
      id: 'petlogic', name: 'Petlogic 寵物知識百科', folder: 'petlogic.org 寵物知識百科網站',
      icon: 'fa-cat', color: '#84cc16', category: '生活應用',
      pages: [
        { name: '百科首頁', path: 'index.html', icon: 'fa-house' },
        { name: '部落格', path: 'blog.html', icon: 'fa-blog' },
        { name: '貓咪行為實驗室', path: 'cat-behavior-lab.html', icon: 'fa-cat' },
        { name: '狗狗訓練科學', path: 'dog-training-science.html', icon: 'fa-dog' },
        { name: '異寵物種紀事', path: 'exotic-species-chronicles.html', icon: 'fa-dragon' },
        { name: '寵物文化', path: 'pet-culture.html', icon: 'fa-landmark' },
        { name: '寵物好物精選', path: 'pet-goods-picks.html', icon: 'fa-cart-shopping' },
        { name: '寵物營養實驗室', path: 'pet-nutrition-lab.html', icon: 'fa-bowl-food' },
        { name: '寵物產品科學', path: 'pet-product-science.html', icon: 'fa-flask' },
        { name: '寵物與城市', path: 'pets-and-city.html', icon: 'fa-city' },
        { name: '方案價格', path: 'pricing.html', icon: 'fa-tags' },
        { name: '幼寵成長紀錄', path: 'puppy-kitten-growth.html', icon: 'fa-baby' },
        { name: '高齡寵物研究', path: 'senior-pet-studies.html', icon: 'fa-heart-pulse' }
      ]
    },
    {
      id: 'zootecture', name: 'Zootecture 寵物生活誌', folder: 'Zootecture.com',
      icon: 'fa-house-chimney', color: '#dc2626', category: '生活應用',
      pages: [
        { name: '網站首頁', path: 'index.html', icon: 'fa-house' },
        { name: '部落格', path: 'blog.html', icon: 'fa-blog' },
        { name: '貓咪故事', path: 'cat-story.html', icon: 'fa-cat' },
        { name: '狗狗日記', path: 'dog-diary.html', icon: 'fa-dog' },
        { name: '居家設計', path: 'home-design.html', icon: 'fa-couch' },
        { name: '戶外探險', path: 'outdoor-adventure.html', icon: 'fa-mountain-sun' },
        { name: '寵物藝術', path: 'pet-art.html', icon: 'fa-palette' },
        { name: '寵物日常', path: 'pet-daily.html', icon: 'fa-sun' },
        { name: '寵物教育', path: 'pet-education.html', icon: 'fa-graduation-cap' },
        { name: '寵物健康', path: 'pet-health.html', icon: 'fa-heart-pulse' },
        { name: '寵物空間', path: 'pet-space.html', icon: 'fa-vector-square' },
        { name: '方案價格', path: 'pricing.html', icon: 'fa-tags' }
      ]
    },
    {
      id: '331today', name: '331.today 藝廊圖庫', folder: '331.today',
      icon: 'fa-images', color: '#a855f7', category: '生活應用',
      pages: [
        { name: '藝廊首頁', path: 'index.html', icon: 'fa-house' },
        { name: '作品庫 (165件)', path: 'artwork/AW-0001.html', icon: 'fa-image' },
        { name: '分類瀏覽', path: 'category/index.html', icon: 'fa-folder-tree' }
      ]
    },
    {
      id: 'economics', name: '經濟學文章庫', folder: '經濟學',
      icon: 'fa-chart-line', color: '#1d4ed8', category: '生活應用',
      pages: [
        { name: '經濟學首頁', path: 'index.html', icon: 'fa-house' },
        { name: '文章列表 (31篇)', path: 'articles/index.html', icon: 'fa-newspaper' }
      ]
    },
    {
      id: 'interior-config', name: '裝潢模組選配', folder: '装潢模块选配网站',
      icon: 'fa-couch', color: '#14b8a6', category: '生活應用',
      pages: [{ name: '裝潢選配', path: 'index.html', icon: 'fa-couch' }]
    },
    {
      id: 'pet-industry', name: '寵物知識與產業平台', folder: '寵物知識與產業平台',
      icon: 'fa-paw', color: '#ec4899', category: '生活應用',
      pages: [{ name: '平台首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'puer-tea', name: '普洱茶王國', folder: '普洱茶王國',
      icon: 'fa-mug-hot', color: '#92400e', category: '生活應用',
      pages: [{ name: '普洱茶首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'zootecture-blog', name: 'Zootecture寵物博客', folder: 'Zootecture寵物博客',
      icon: 'fa-blog', color: '#14b8a6', category: '生活應用',
      pages: [{ name: '博客首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: '9return-pet', name: '9return寵物百科', folder: '9return寵物百科',
      icon: 'fa-book', color: '#0d9488', category: '生活應用',
      pages: [{ name: '百科首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'tianwei-garden', name: '田尾公路花園', folder: '田尾公路花園',
      icon: 'fa-seedling', color: '#22c55e', category: '生活應用',
      pages: [{ name: '攻略首頁', path: 'index.html', icon: 'fa-house' }]
    },

    {
      id: 'yijing-stretching', name: '64卦拉伸操', folder: '【64卦拉伸操】',
      icon: 'fa-person-running', color: '#C41E3A', category: '生活應用',
      pages: [{ name: '首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'home-medicine-box', name: '生活醫藥箱', folder: '【生活醫藥箱】',
      icon: 'fa-kit-medical', color: '#059669', category: '生活應用',
      pages: [{ name: '首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'blind-toolbox', name: '看不到卻知道盲人工具箱', folder: '【看不到卻知道】盲人工具箱',
      icon: 'fa-eye-low-vision', color: '#0891b2', category: '生活應用',
      pages: [{ name: '首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'nutrition-analyzer', name: '營養成分分析器', folder: '營養成分分析器',
      icon: 'fa-apple-whole', color: '#ca8a04', category: '生活應用',
      pages: [{ name: '首頁', path: 'index.html', icon: 'fa-house' }]
    },
    /* ===== 文化展覽 ===== */
    {
      id: 'bio-chen', name: '陳亦豐個人網站', folder: 'bio_陳亦豐',
      icon: 'fa-music', color: '#991b1b', category: '文化展覽',
      pages: [
        { name: '個人首頁', path: 'index.html', icon: 'fa-house' },
        { name: '關於我', path: 'about.html', icon: 'fa-user' },
        { name: '學習經歷', path: 'experience.html', icon: 'fa-graduation-cap' },
        { name: '得獎記錄', path: 'awards.html', icon: 'fa-trophy' },
        { name: '音樂會演出', path: 'concerts.html', icon: 'fa-microphone-alt' },
        { name: '音樂作品', path: 'works.html', icon: 'fa-music' },
        { name: '聯絡我', path: 'contact.html', icon: 'fa-envelope' }
      ]
    },
    {
      id: 'sanguo-strategy', name: '三國演義戰略博弈系統', folder: '三國演義戰略博弈系統',
      icon: 'fa-chess', color: '#b91c1c', category: '文化展覽',
      pages: [{ name: '三國演義首頁', path: 'index.html', icon: 'fa-chess-board' }]
    },
    {
      id: 'ancient-arch', name: '古代經典建築還原', folder: '從10大古代經典還原建築',
      icon: 'fa-landmark', color: '#b45309', category: '文化展覽',
      pages: [
        { name: '展覽首頁', path: 'index.html', icon: 'fa-house' },
        { name: '關於展覽', path: 'about.html', icon: 'fa-circle-info' },
        { name: '網站地圖', path: 'sitemap.html', icon: 'fa-sitemap' },
        { name: '圓明園', path: 'arch-01-yuanmingyuan.html', icon: 'fa-monument' },
        { name: '大明宮', path: 'arch-02-daminggong.html', icon: 'fa-monument' },
        { name: '阿房宮', path: 'arch-03-epanggong.html', icon: 'fa-monument' },
        { name: '雷峰塔', path: 'arch-04-leifengta.html', icon: 'fa-monument' },
        { name: '滕王閣', path: 'arch-05-tengwangge.html', icon: 'fa-monument' },
        { name: '黃鶴樓', path: 'arch-06-huanghelou.html', icon: 'fa-monument' },
        { name: '岳陽樓', path: 'arch-07-yueyanglou.html', icon: 'fa-monument' },
        { name: '永樂宮', path: 'arch-08-yonglegong.html', icon: 'fa-monument' },
        { name: '大報恩寺', path: 'arch-09-baoensi.html', icon: 'fa-monument' },
        { name: '銅雀台', path: 'arch-10-tongquetai.html', icon: 'fa-monument' }
      ]
    },
    {
      id: 'jinyong', name: '金庸人物與心理學', folder: '金庸人物與心理學',
      icon: 'fa-book', color: '#475569', category: '文化展覽',
      pages: [{ name: '金庸人物心理學', path: 'index.html', icon: 'fa-book' }]
    },
    {
      id: 'honglou', name: '紅樓夢建築志', folder: '紅樓夢建築志',
      icon: 'fa-torii-gate', color: '#b91c1c', category: '文化展覽',
      pages: [{ name: '建築志首頁', path: 'index.html', icon: 'fa-torii-gate' }]
    },
    {
      id: 'oriental-aesthetics', name: '東方生活美學平台', folder: '東方生活美學平台',
      icon: 'fa-yin-yang', color: '#a855f7', category: '文化展覽',
      pages: [{ name: '美學首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'art-auction', name: '藝術品交流與拍賣', folder: '藝術品交流與拍賣',
      icon: 'fa-gavel', color: '#dc2626', category: '文化展覽',
      pages: [{ name: '拍賣首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'honglou-db', name: '紅樓夢文化資料庫', folder: '紅樓夢文化資料庫',
      icon: 'fa-book-open', color: '#be185d', category: '文化展覽',
      pages: [{ name: '資料庫首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'world-music', name: '世界音樂資料庫', folder: '世界音樂資料庫',
      icon: 'fa-music', color: '#7c3aed', category: '文化展覽',
      pages: [{ name: '音樂首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'xinmedia-portal', name: '欣媒體PORTAL', folder: '欣媒體PORTAL',
      icon: 'fa-tower-broadcast', color: '#0891b2', category: '文化展覽',
      pages: [
        { name: 'PORTAL首頁', path: 'index.html', icon: 'fa-house' },
        { name: '關於我們', path: 'pages/about.html', icon: 'fa-circle-info' },
        { name: '知識庫', path: 'pages/knowledge.html', icon: 'fa-book-open' },
        { name: '方案價格', path: 'pricing.html', icon: 'fa-tags' }
      ]
    },
    {
      id: 'composers-db', name: '331.fyi作曲家資料庫', folder: '331.fyi作曲家資料庫',
      icon: 'fa-guitar', color: '#6d28d9', category: '文化展覽',
      pages: [{ name: '作曲家首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: '331gallery-grid', name: '三三藝Grid圖庫', folder: '三三藝Grid圖庫',
      icon: 'fa-border-all', color: '#ca8a04', category: '文化展覽',
      pages: [
        { name: '圖庫首頁', path: 'index.html', icon: 'fa-house' },
        { name: '作品庫', path: 'artwork.html', icon: 'fa-palette' },
        { name: '關於', path: 'pages/about.html', icon: 'fa-circle-info' }
      ]
    },
    {
      id: 'honglou-costume', name: '紅樓夢人物服飾志', folder: '紅樓夢人物服飾志',
      icon: 'fa-shirt', color: '#9d174d', category: '文化展覽',
      pages: [{ name: '服飾志首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'ziwei-doushu', name: '紫微斗數主題站', folder: '紫微斗數主題站',
      icon: 'fa-star', color: '#d97706', category: '文化展覽',
      pages: [{ name: '紫微首頁', path: 'index.html', icon: 'fa-house' }]
    },

    {
      id: 'ancient-architecture', name: '古代建篑結構', folder: '【古代建篑結構】',
      icon: 'fa-landmark', color: '#b45309', category: '文化展覽',
      pages: [{ name: '首頁', path: 'index.html', icon: 'fa-house' }]
    },
    {
      id: 'audio-composer-finder', name: '用音頻找作曲家', folder: '【用音頻找作曲家】',
      icon: 'fa-music', color: '#6d28d9', category: '文化展覽',
      pages: [{ name: '首頁', path: 'index.html', icon: 'fa-house' }]
    },
    /* ===== 網站集合 ===== */
    {
      id: 'downloaded-sites', name: 'Downloaded 網站備份', folder: 'downloaded_sites',
      icon: 'fa-floppy-disk', color: '#64748b', category: '網站集合',
      pages: [
        { name: '331.today 備份', path: '331-today/index.html', icon: 'fa-images' },
        { name: '9return 寵物百科', path: '9return-com-tw/index.html', icon: 'fa-dog' },
        { name: 'Petlogic 備份', path: 'petlogic-org/index.html', icon: 'fa-cat' },
        { name: 'Zootecture 備份', path: 'zootecture-com/index.html', icon: 'fa-house-chimney' }
      ]
    }
  ];

  var CATEGORIES = ['文化展覽', '生活應用', '工作生產力', '網站集合'];
  var HOT_SITE_IDS = ['freelance', 'sanguo-strategy', 'petlogic', '331today', 'economics', 'realestate-db'];

  /* ========== 工具函式 ========== */

  /** 偵測目前頁面所屬網站與頁面 */
  function detectCurrent() {
    var path = window.location.pathname.replace(/\\/g, '/');
    var rootIdx = path.indexOf('_WWW_dynamic/');
    var relPath = rootIdx >= 0 ? path.substring(rootIdx + '_WWW_dynamic/'.length) : path;
    var parts = relPath.split('/').filter(Boolean);

    var site = null;
    var page = null;
    var pagePath = '';
    var rootPageName = '';

    if (parts.length >= 2) {
      var folder = decodeURIComponent(parts[0]);
      site = SITES.find(function (s) { return s.folder === folder; });
      if (site) {
        pagePath = parts.slice(1).join('/');
        page = site.pages.find(function (p) { return p.path === pagePath; });
      }
    } else if (parts.length === 1) {
      var fname = decodeURIComponent(parts[0]).toLowerCase();
      if (fname === 'portal.html') {
        rootPageName = 'Portal 網站入口';
      } else if (fname.indexOf('root') >= 0 || fname.indexOf('index') >= 0) {
        rootPageName = '網站首頁';
      } else {
        rootPageName = parts[0].replace(/\.html?$/i, '');
      }
    }
    return { site: site, page: page, relPath: relPath, pagePath: pagePath, rootPageName: rootPageName };
  }

  /** 計算回到 _WWW_dynamic 根目錄的相對路徑 */
  function getBasePath() {
    var relPath = detectCurrent().relPath;
    var depth = relPath.split('/').filter(Boolean).length - 1;
    return depth > 0 ? '../'.repeat(depth) : './';
  }

  function totalPageCount() {
    return SITES.reduce(function (sum, site) { return sum + site.pages.length; }, 0);
  }

  /* ========== 渲染 Header ========== */
  function renderHeader(current, base) {
    var header = document.createElement('header');
    header.className = 'unified-header';

    var breadcrumbHtml;
    if (current.site) {
      var siteFirstPage = current.site.pages[0] ? current.site.pages[0].path : 'index.html';
      var currentPageName = current.page ? current.page.name : '頁面';
      breadcrumbHtml =
        '<a href="' + base + 'portal.html"><i class="fas fa-house"></i> ' + t('home') + '</a>' +
        '<span class="bc-sep"><i class="fas fa-chevron-right"></i></span>' +
        '<a href="' + base + current.site.folder + '/' + siteFirstPage + '">' + current.site.name + '</a>' +
        '<span class="bc-sep"><i class="fas fa-chevron-right"></i></span>' +
        '<span class="bc-current">' + currentPageName + '</span>';
    } else {
      breadcrumbHtml =
        '<a href="' + base + 'portal.html"><i class="fas fa-house"></i> ' + t('home') + '</a>' +
        '<span class="bc-sep"><i class="fas fa-chevron-right"></i></span>' +
        '<span class="bc-current">' + (current.rootPageName || '頁面') + '</span>';
    }

    /* 目前網站頁面快速連結 */
    var currentSitePagesHtml = '';
    if (current.site) {
      currentSitePagesHtml = current.site.pages.map(function (p) {
        var isCur = current.page && current.page.path === p.path;
        return '<a href="' + base + current.site.folder + '/' + p.path + '">' +
          '<i class="fas ' + p.icon + '"></i> ' + p.name +
          (isCur ? '<span class="dd-badge">' + t('current') + '</span>' : '') +
          '</a>';
      }).join('');
    } else {
      currentSitePagesHtml = '<div style="padding:8px 10px;font-size:12px;color:#94a3b8;">無</div>';
    }

    header.innerHTML =
      '<button class="nav-menu-btn" id="navMenuBtn" title="' + t('toggleSidebar') + '">' +
        '<i class="fas fa-bars"></i>' +
      '</button>' +
      '<a href="' + base + 'portal.html" class="nav-logo" title="' + t('backToPortal') + '">' +
        '<div class="nav-logo-icon">W</div>' +
        '<div class="nav-logo-text nav-logo-single">' + t('brand') + '</div>' +
      '</a>' +
      '<nav class="unified-breadcrumb" id="navBreadcrumb">' + breadcrumbHtml + '</nav>' +
      '<div class="unified-header-actions">' +
        /* 語言切換 */
        '<button class="nav-dropdown-btn lang-switch-btn" id="navLangBtn" title="' + t('langName') + '">' +
          '<i class="fas fa-language"></i> <span>' + t('langSwitch') + '</span>' +
        '</button>' +
        /* 搜尋 */
        '<div class="nav-search-box" id="navSearchBox">' +
          '<i class="fas fa-search search-icon"></i>' +
          '<input type="text" id="navSearchInput" placeholder="' + t('searchPlaceholder') + '">' +
          '<button class="nav-dropdown-btn" id="navSearchBtn" title="' + t('searchPlaceholder') + '"><i class="fas fa-search"></i></button>' +
          '<div class="nav-search-results" id="navSearchResults"></div>' +
        '</div>' +
        /* 網站導覽下拉 */
        '<div class="nav-dropdown">' +
          '<button class="nav-dropdown-btn" id="navSitesBtn"><i class="fas fa-globe"></i> <span>' + t('sites') + '</span> <i class="fas fa-chevron-down"></i></button>' +
          '<div class="nav-dropdown-menu" id="navSitesMenu" style="min-width:260px;"></div>' +
        '</div>' +
        /* 快速連結下拉 */
        '<div class="nav-dropdown">' +
          '<button class="nav-dropdown-btn" id="navQuickBtn"><i class="fas fa-link"></i> <span>' + t('quickLinks') + '</span> <i class="fas fa-chevron-down"></i></button>' +
          '<div class="nav-dropdown-menu" id="navQuickMenu">' +
            '<a href="' + base + 'portal.html"><i class="fas fa-house"></i> Portal 首頁</a>' +
            '<a href="' + base + '接案管理系統/index.html"><i class="fas fa-briefcase"></i> 接案管理系統</a>' +
            '<div class="dd-divider"></div>' +
            '<div class="dd-group-title">當前網站頁面</div>' +
            currentSitePagesHtml +
            '<div class="dd-divider"></div>' +
            '<a href="#" id="navScrollTop"><i class="fas fa-arrow-up"></i> ' + t('scrollTop') + '</a>' +
          '</div>' +
        '</div>' +
      '</div>';

    document.body.prepend(header);

    /* 填充網站導覽下拉選單（依分類） */
    var sitesMenu = header.querySelector('#navSitesMenu');
    var menuHtml = '';
    CATEGORIES.forEach(function (cat) {
      var catSites = SITES.filter(function (s) { return s.category === cat; });
      if (!catSites.length) return;
      menuHtml += '<div class="dd-group-title">' + cat + '</div>';
      catSites.forEach(function (s) {
        var isActive = current.site && current.site.id === s.id;
        menuHtml += '<a href="' + base + s.folder + '/' + s.pages[0].path + '">' +
          '<i class="fas ' + s.icon + '" style="color:' + s.color + '"></i> ' + s.name +
          (isActive ? '<span class="dd-badge">' + t('current') + '</span>' : '') +
          '<span style="margin-left:auto;font-size:10px;color:#cbd5e1;">' + s.pages.length + '頁</span>' +
          '</a>';
      });
    });
    menuHtml += '<div class="dd-divider"></div>';
    menuHtml += '<div style="padding:8px 12px;font-size:11px;color:#94a3b8;line-height:1.6;text-align:center;">規劃。設計。開發：張書欣 | 舒安境工作室</div>';
    sitesMenu.innerHTML = menuHtml;
  }

  /* ========== 渲染 Sidebar ========== */
  function renderSidebar(current, base) {
    var totalPages = totalPageCount();
    var sidebar = document.createElement('aside');
    sidebar.className = 'unified-sidebar';
    sidebar.id = 'unifiedSidebar';

    var html = '<div class="sidebar-inner">';

    /* Sitemap 標題區 */
    html +=
      '<div class="sidebar-sitemap-header">' +
        '<div class="sidebar-sitemap-title"><i class="fas fa-sitemap"></i> 網站地圖 Sitemap</div>' +
        '<div class="sidebar-sitemap-stats">' +
          '<span><i class="fas fa-globe-asia"></i> ' + SITES.length + ' ' + t('sitesCount') + '</span>' +
          '<span class="sidebar-dot">|</span>' +
          '<span><i class="fas fa-file-alt"></i> ' + totalPages + ' ' + t('pagesCount') + '</span>' +
        '</div>' +
        '<div class="sidebar-sitemap-actions">' +
          '<button class="sidebar-btn-expand" id="sidebarExpandAll" title="' + t('expandAll') + '"><i class="fas fa-plus-square"></i> ' + t('expandAll') + '</button>' +
          '<button class="sidebar-btn-collapse" id="sidebarCollapseAll" title="' + t('collapseAll') + '"><i class="fas fa-minus-square"></i> ' + t('collapseAll') + '</button>' +
        '</div>' +
      '</div>';

    /* 熱門網站 */
    var hotSites = HOT_SITE_IDS.map(function (id) { return SITES.find(function (s) { return s.id === id; }); }).filter(Boolean);
    html += '<div class="sidebar-section-title"><i class="fas fa-fire" style="color:#f59e0b"></i> ' + t('hotSites') + '</div>';
    html += '<div class="sidebar-hot-grid">';
    hotSites.forEach(function (s) {
      var shortName = s.name.length > 8 ? s.name.substring(0, 8) + '…' : s.name;
      html += '<a href="' + base + s.folder + '/' + s.pages[0].path + '" class="sidebar-hot-item" title="' + s.name + '">' +
        '<div class="sidebar-hot-icon" style="background:' + s.color + '"><i class="fas ' + s.icon + '"></i></div>' +
        '<span>' + shortName + '</span>' +
        '</a>';
    });
    html += '</div>';

    /* 全部網站（依分類，可展開收合） */
    html += '<div class="sidebar-section-title"><i class="fas fa-folder-tree" style="color:#6366f1"></i> ' + t('allSites') + '</div>';
    CATEGORIES.forEach(function (cat) {
      var catSites = SITES.filter(function (s) { return s.category === cat; });
      if (!catSites.length) return;
      html += '<div class="sidebar-category-title"><i class="fas fa-folder-open"></i> ' + cat + ' <span class="sidebar-category-count">' + catSites.length + '</span></div>';
      catSites.forEach(function (s) {
        var isActive = current.site && current.site.id === s.id;
        var expanded = isActive ? 'expanded' : '';
        html +=
          '<div class="sidebar-site ' + expanded + '" data-site="' + s.id + '">' +
            '<div class="sidebar-site-icon" style="background:' + s.color + '"><i class="fas ' + s.icon + '"></i></div>' +
            '<div class="sidebar-site-info">' +
              '<div class="sidebar-site-name">' + s.name + '</div>' +
              '<div class="sidebar-site-pages">' + s.pages.length + ' ' + t('pagesCount') + '</div>' +
            '</div>' +
            '<i class="fas fa-chevron-right chev"></i>' +
          '</div>' +
          '<div class="sidebar-pages">' +
            s.pages.map(function (p) {
              var pageActive = isActive && current.page && current.page.path === p.path;
              return '<a href="' + base + s.folder + '/' + p.path + '" class="sidebar-page-link ' + (pageActive ? 'active' : '') + '">' +
                '<i class="fas ' + p.icon + '"></i> ' + p.name +
                '</a>';
            }).join('') +
          '</div>';
      });
    });

    /* 相關網站推薦 */
    if (current.site) {
      var related = SITES.filter(function (s) { return s.category === current.site.category && s.id !== current.site.id; }).slice(0, 4);
      if (related.length) {
        html += '<div class="sidebar-section-title"><i class="fas fa-link" style="color:#6366f1"></i> ' + t('relatedSites') + '</div>';
        related.forEach(function (s) {
          html += '<a href="' + base + s.folder + '/' + s.pages[0].path + '" class="sidebar-related-link">' +
            '<div class="sidebar-site-icon" style="background:' + s.color + ';width:28px;height:28px;font-size:12px"><i class="fas ' + s.icon + '"></i></div>' +
            '<span>' + s.name + '</span>' +
            '</a>';
        });
      }
    }

    /* 底部返回門戶 */
    html +=
      '<div class="sidebar-footer">' +
        '<a href="' + base + 'portal.html" class="sidebar-portal-link"><i class="fas fa-th-large"></i> ' + t('backToPortalBtn') + '</a>' +
      '</div>';

    html += '</div>';
    sidebar.innerHTML = html;
    document.body.appendChild(sidebar);

    /* 遮罩層（手機版） */
    var overlay = document.createElement('div');
    overlay.className = 'unified-sidebar-overlay';
    overlay.id = 'sidebarOverlay';
    document.body.appendChild(overlay);
  }

  /* ========== 渲染 Footer ========== */
  function renderFooter(current, base) {
    var totalPages = totalPageCount();
    var hotSites = HOT_SITE_IDS.map(function (id) { return SITES.find(function (s) { return s.id === id; }); }).filter(Boolean);

    var footer = document.createElement('footer');
    footer.className = 'unified-footer';

    var hotLinksHtml = hotSites.map(function (s) {
      var shortName = s.name.length > 6 ? s.name.substring(0, 6) + '…' : s.name;
      return '<a href="' + base + s.folder + '/' + s.pages[0].path + '" title="' + s.name + '">' +
        '<i class="fas ' + s.icon + '" style="color:' + s.color + '"></i> ' + shortName +
        '</a>';
    }).join('');

    var currentSiteHtml = current.site
      ? '<span class="footer-dot"></span><span style="color:#6366f1;font-weight:600;"><i class="fas ' + current.site.icon + '"></i> ' + t('current') + '：' + current.site.name + '</span>'
      : '';

    footer.innerHTML =
      '<div class="footer-left">' +
        '<div class="footer-line1">' +
          '<span><i class="fas fa-globe" style="color:#6366f1"></i> ' + t('siteCollection') + '</span>' +
          '<span class="footer-dot"></span>' +
          '<span class="footer-hide-mobile"><i class="fas fa-folder"></i> ' + SITES.length + ' ' + t('sitesCount') + '</span>' +
          '<span class="footer-dot footer-hide-mobile"></span>' +
          '<span class="footer-hide-mobile"><i class="fas fa-file"></i> ' + totalPages + ' ' + t('pagesCount') + '</span>' +
          currentSiteHtml +
        '</div>' +
        '<div class="footer-line2">' +
          '<span>' + t('developer').replace(/\{base\}/g, base) + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="footer-right">' +
        '<div class="footer-hot-links footer-hide-mobile">' + hotLinksHtml + '</div>' +
        '<a href="' + base + 'portal.html"><i class="fas fa-house"></i> ' + t('portal') + '</a>' +
        '<a href="#" id="footerScrollTop"><i class="fas fa-arrow-up"></i> ' + t('top') + '</a>' +
        '<span class="footer-dot"></span>' +
        '<span>' + t('version') + '</span>' +
      '</div>';

    document.body.appendChild(footer);
  }

  /* ========== 綁定互動事件 ========== */
  function bindInteractions(base) {
    var sidebar = document.getElementById('unifiedSidebar');
    var overlay = document.getElementById('sidebarOverlay');
    var menuBtn = document.getElementById('navMenuBtn');

    /* 側邊欄開關 */
    function toggleSidebar(force) {
      var open = force !== undefined ? force : !sidebar.classList.contains('open');
      sidebar.classList.toggle('open', open);
      overlay.classList.toggle('show', open);
      document.body.classList.toggle('nav-sidebar-open', open);
    }

    menuBtn.addEventListener('click', function () { toggleSidebar(); });
    overlay.addEventListener('click', function () { toggleSidebar(false); });

    /* 側邊欄網站展開/收合 */
    sidebar.querySelectorAll('.sidebar-site').forEach(function (el) {
      el.addEventListener('click', function (e) {
        if (e.target.closest('a')) return;
        this.classList.toggle('expanded');
      });
    });

    /* 展開全部 / 收起全部 */
    var expandAllBtn = document.getElementById('sidebarExpandAll');
    var collapseAllBtn = document.getElementById('sidebarCollapseAll');
    if (expandAllBtn) {
      expandAllBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        sidebar.querySelectorAll('.sidebar-site').forEach(function (el) { el.classList.add('expanded'); });
      });
    }
    if (collapseAllBtn) {
      collapseAllBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        sidebar.querySelectorAll('.sidebar-site').forEach(function (el) { el.classList.remove('expanded'); });
      });
    }

    /* 下拉選單（點擊切換，點外部關閉） */
    document.querySelectorAll('.nav-dropdown').forEach(function (dd) {
      var btn = dd.querySelector('.nav-dropdown-btn');
      var menu = dd.querySelector('.nav-dropdown-menu');
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var wasOpen = menu.classList.contains('show');
        document.querySelectorAll('.nav-dropdown-menu').forEach(function (m) { m.classList.remove('show'); });
        if (!wasOpen) menu.classList.add('show');
      });
    });

    /* 語言切換 */
    var langBtn = document.getElementById('navLangBtn');
    if (langBtn) {
      langBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        window.__xinmatrix_toggleLang && window.__xinmatrix_toggleLang();
      });
    }

    /* 回到頂部 */
    var scrollTopBtn = document.getElementById('navScrollTop');
    var footerTopBtn = document.getElementById('footerScrollTop');
    function scrollTop(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (scrollTopBtn) scrollTopBtn.addEventListener('click', scrollTop);
    if (footerTopBtn) footerTopBtn.addEventListener('click', scrollTop);

    /* 全域搜尋 */
    var searchBox = document.getElementById('navSearchBox');
    var searchBtn = document.getElementById('navSearchBtn');
    var searchInput = document.getElementById('navSearchInput');
    var searchResults = document.getElementById('navSearchResults');

    searchBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      searchBox.classList.toggle('open');
      if (searchBox.classList.contains('open')) searchInput.focus();
    });

    searchInput.addEventListener('input', function () {
      var q = this.value.toLowerCase().trim();
      if (!q) { searchResults.classList.remove('show'); return; }
      var results = [];
      SITES.forEach(function (site) {
        if (site.name.toLowerCase().indexOf(q) >= 0) {
          results.push({ type: 'site', name: site.name, icon: site.icon, color: site.color, path: base + site.folder + '/' + site.pages[0].path });
        }
        site.pages.forEach(function (p) {
          if (p.name.toLowerCase().indexOf(q) >= 0) {
            results.push({ type: 'page', name: site.name + ' - ' + p.name, icon: p.icon, color: '#94a3b8', path: base + site.folder + '/' + p.path });
          }
        });
      });
      if (!results.length) {
        searchResults.innerHTML = '<div style="padding:16px;text-align:center;font-size:13px;color:#94a3b8;">' + t('noResults') + '</div>';
      } else {
        searchResults.innerHTML = results.slice(0, 10).map(function (r) {
          return '<a href="' + r.path + '" style="display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:6px;font-size:13px;color:#334155;text-decoration:none;">' +
            '<i class="fas ' + r.icon + '" style="width:16px;text-align:center;color:' + r.color + '"></i>' +
            '<span>' + r.name + '</span>' +
            '<span style="margin-left:auto;font-size:10px;color:#cbd5e1;">' + (r.type === 'site' ? '網站' : '頁面') + '</span>' +
            '</a>';
        }).join('');
      }
      searchResults.classList.add('show');
    });

    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        searchBox.classList.remove('open');
        searchResults.classList.remove('show');
      }
    });

    /* 點外部關閉所有下拉與搜尋 */
    document.addEventListener('click', function () {
      document.querySelectorAll('.nav-dropdown-menu').forEach(function (m) { m.classList.remove('show'); });
      searchBox.classList.remove('open');
      searchResults.classList.remove('show');
    });
  }

  /* ========== 語言切換（全域） ========== */
  window.__xinmatrix_toggleLang = function () {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    try { localStorage.setItem('xinmatrix_lang', currentLang); } catch (e) { /* ignore */ }
    document.documentElement.setAttribute('data-lang', currentLang);
    /* 移除舊元素並重新初始化 */
    document.querySelectorAll('.unified-header, .unified-sidebar, .unified-footer, .unified-sidebar-overlay').forEach(function (el) { el.remove(); });
    document.body.classList.remove('has-unified-nav', 'nav-sidebar-open');
    init();
  };

  /* ========== 主初始化 ========== */
  function init() {
    document.documentElement.setAttribute('data-lang', currentLang);
    if (document.body.classList.contains('has-unified-nav')) return;
    document.body.classList.add('has-unified-nav');

    var current = detectCurrent();
    var base = getBasePath();

    renderHeader(current, base);
    renderSidebar(current, base);
    renderFooter(current, base);
    bindInteractions(base);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
