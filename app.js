const DATA = {
  all: {
    label: "全部样本",
    n: 126,
    purchased: 95.24,
    aware: 53.97,
    impulse: 71.43,
    wealthInfluence: 71.43,
    valueHigh: 14.29
  },
  swufe: {
    label: "西南财经大学",
    n: 82,
    purchased: 92.68,
    aware: 48.78,
    impulse: 68.29,
    wealthInfluence: 68.29,
    valueHigh: 17.07
  },
  scu: {
    label: "四川大学",
    n: 24,
    purchased: 100,
    aware: 58.33,
    impulse: 66.67,
    wealthInfluence: 75,
    valueHigh: 16.67
  },
  uestc: {
    label: "电子科技大学",
    n: 20,
    purchased: 100,
    aware: 70,
    impulse: 90,
    wealthInfluence: 80,
    valueHigh: 0
  },
  schools: [
    { label: "西南财经大学", count: 82, percent: 65.08 },
    { label: "四川大学", count: 24, percent: 19.05 },
    { label: "电子科技大学", count: 20, percent: 15.87 }
  ],
  campuses: [
    {
      key: "swufe",
      code: "SWUFE",
      label: "西南财经大学",
      count: 82,
      percent: 65.08,
      role: "财经类高校样本",
      insight: "样本占比最高，有助于分析财富观、理性消费和价值判断。",
      tone: "amber"
    },
    {
      key: "scu",
      code: "SCU",
      label: "四川大学",
      count: 24,
      percent: 19.05,
      role: "综合类高校样本",
      insight: "提供更广泛的校园生活视角，补充社交平台、内容消费和虚拟展示经验。",
      tone: "blue"
    },
    {
      key: "uestc",
      code: "UESTC",
      label: "电子科技大学",
      count: 20,
      percent: 15.87,
      role: "技术类高校样本",
      insight: "有助于观察平台规则、数字物品和网络生活之间的关系。",
      tone: "green"
    }
  ],
  grades: [
    { label: "大一", count: 12, percent: 9.52 },
    { label: "大二", count: 106, percent: 84.13 },
    { label: "大三", count: 6, percent: 4.76 },
    { label: "大四", count: 2, percent: 1.59 }
  ],
  gender: [
    { label: "男", count: 28, percent: 22.22 },
    { label: "女", count: 98, percent: 77.78 }
  ],
  awareness: [
    { label: "非常了解", count: 16, percent: 12.7 },
    { label: "比较了解", count: 52, percent: 41.27 },
    { label: "听说过但不太了解", count: 56, percent: 44.44 },
    { label: "完全不了解", count: 2, percent: 1.59 }
  ],
  channels: [
    { label: "社交媒体平台", count: 98, percent: 77.78 },
    { label: "网络游戏", count: 82, percent: 65.08 },
    { label: "短视频/直播平台", count: 80, percent: 63.49 },
    { label: "电商平台", count: 46, percent: 36.51 },
    { label: "新闻报道或课程学习", count: 28, percent: 22.22 },
    { label: "朋友或同学推荐", count: 24, percent: 19.05 },
    { label: "数字藏品/NFT平台", count: 18, percent: 14.29 }
  ],
  assets: [
    { label: "虚拟会员/平台订阅", count: 102, percent: 80.95 },
    { label: "游戏皮肤", count: 90, percent: 71.43 },
    { label: "游戏装备/道具", count: 86, percent: 68.25 },
    { label: "电子专辑、数字纪念品等", count: 78, percent: 61.9 },
    { label: "社交头像框/装扮/表情包", count: 76, percent: 60.32 },
    { label: "虚拟货币/平台币", count: 48, percent: 38.1 },
    { label: "数字藏品/NFT", count: 28, percent: 22.22 }
  ],
  spend: [
    { label: "1-50元", count: 60, percent: 47.62 },
    { label: "51-100元", count: 26, percent: 20.63 },
    { label: "101-300元", count: 22, percent: 17.46 },
    { label: "500元以上", count: 10, percent: 7.94 },
    { label: "301-500元", count: 4, percent: 3.17 },
    { label: "0元", count: 4, percent: 3.17 }
  ],
  frequency: [
    { label: "一个月1次左右", count: 58, percent: 46.03 },
    { label: "一年几次", count: 50, percent: 39.68 },
    { label: "一个月多次", count: 8, percent: 6.35 },
    { label: "每周都会购买", count: 6, percent: 4.76 },
    { label: "从未购买", count: 4, percent: 3.17 }
  ],
  purchase: [
    { label: "购买过", count: 120, percent: 95.24 },
    { label: "没有购买过", count: 6, percent: 4.76 }
  ],
  funding: [
    { label: "生活费", count: 82, percent: 65.08 },
    { label: "自己储蓄", count: 22, percent: 17.46 },
    { label: "家人额外支持", count: 10, percent: 7.94 },
    { label: "奖学金/助学金", count: 6, percent: 4.76 },
    { label: "从未购买过", count: 4, percent: 3.17 },
    { label: "兼职收入", count: 2, percent: 1.59 }
  ],
  motives: [
    { label: "娱乐体验/趣味", count: 114, percent: 90.48 },
    { label: "审美需求/装饰", count: 78, percent: 61.9 },
    { label: "收藏心理", count: 66, percent: 52.38 },
    { label: "社交需求/身份表达", count: 40, percent: 31.75 },
    { label: "投资预期", count: 20, percent: 15.87 },
    { label: "同伴影响/攀比心理", count: 4, percent: 3.17 }
  ],
  scenarios: [
    { label: "喜欢的角色/IP/作品推出相关产品", count: 82, percent: 65.08 },
    { label: "游戏活动或限时促销", count: 78, percent: 61.9 },
    { label: "平台会员优惠或充值活动", count: 76, percent: 60.32 },
    { label: "心情好或想奖励自己", count: 76, percent: 60.32 },
    { label: "节日、纪念日或特殊活动", count: 54, percent: 42.86 },
    { label: "朋友或同学也在购买", count: 22, percent: 17.46 }
  ],
  risks: [
    { label: "过度消费/冲动消费", count: 94, percent: 74.6 },
    { label: "经济损失", count: 88, percent: 69.84 },
    { label: "心理依赖/沉迷", count: 74, percent: 58.73 },
    { label: "攀比心理/社交压力", count: 60, percent: 47.62 }
  ],
  impulseTypes: [
    { label: "偶尔会", count: 62, percent: 49.21 },
    { label: "很少会", count: 34, percent: 26.98 },
    { label: "经常会", count: 28, percent: 22.22 },
    { label: "从不会", count: 2, percent: 1.59 }
  ],
  savedAssets: [
    { label: "有但不太在意", count: 64, percent: 50.79 },
    { label: "有且比较重视", count: 28, percent: 22.22 },
    { label: "没有但以后可能尝试", count: 24, percent: 19.05 },
    { label: "没有也不感兴趣", count: 10, percent: 7.94 }
  ],
  valueView: [
    { label: "部分有价值", count: 106, percent: 84.13 },
    { label: "较高价值甚至投资获利", count: 18, percent: 14.29 },
    { label: "完全没有价值", count: 2, percent: 1.59 }
  ],
  wealthImpact: [
    { label: "有一定影响", count: 84, percent: 66.67 },
    { label: "几乎没有影响", count: 36, percent: 28.57 },
    { label: "很大程度影响", count: 6, percent: 4.76 },
    { label: "完全没有影响", count: 0, percent: 0 }
  ],
  storyCards: [
    {
      title: "社交平台是入口",
      value: "77.78%",
      meta: "98 / 126",
      body: "受访者最常通过社交媒体接触数字资产，入口更像日常内容流，而不是金融交易所。",
      tone: "rose"
    },
    {
      title: "会员订阅最常见",
      value: "80.95%",
      meta: "102 / 126",
      body: "高频资产主要是会员、订阅、皮肤、道具等平台化消费品。",
      tone: "blue"
    },
    {
      title: "娱乐体验驱动",
      value: "90.48%",
      meta: "114 / 126",
      body: "虚拟消费的首要动机是娱乐体验，审美与收藏构成第二层价值。",
      tone: "green"
    },
    {
      title: "稀缺机制制造冲动",
      value: "71.43%",
      meta: "90 / 126",
      body: "限时、稀有、联名会触发购买冲动，平台规则塑造了“错过成本”。",
      tone: "violet"
    },
    {
      title: "风险意识并不缺席",
      value: "74.60%",
      meta: "94 / 126",
      body: "过度消费是最高频担忧，说明受访者并非无条件认同虚拟资产价值。",
      tone: "amber"
    },
    {
      title: "财富观发生反馈",
      value: "66.67%",
      meta: "84 / 126",
      body: "多数受访者认为虚拟消费会影响现实财富观，但影响程度以“一定影响”为主。",
      tone: "cyan"
    }
  ],
  orbitItems: [
    { label: "娱乐体验", percent: 90.48, note: "使用价值" },
    { label: "审美装饰", percent: 61.9, note: "自我表达" },
    { label: "收藏心理", percent: 52.38, note: "保存欲望" },
    { label: "社交身份", percent: 31.75, note: "展示关系" },
    { label: "平台稀缺", percent: 71.43, note: "冲动机制" },
    { label: "投资预期", percent: 15.87, note: "交换想象" }
  ],
  attitudes: [
    { label: "虚拟物品具有现实价值", score: 3.81, sd: 0.71 },
    { label: "虚拟消费提升社交地位", score: 2.89, sd: 0.84 },
    { label: "愿意为喜欢的虚拟物品花高价", score: 2.92, sd: 1.08 },
    { label: "虚拟消费影响财富认知", score: 3.11, sd: 0.72 },
    { label: "会理性规划支出", score: 4.14, sd: 0.76 }
  ],
  references: [
    { label: "国外研究：不愿或可能不愿购买数字资产", percent: 60.21 },
    { label: "国外研究：了解或可能了解加密货币", percent: 74.42 },
    { label: "国外研究：了解或可能了解 NFT", percent: 31.78 },
    { label: "本研究：接触过数字藏品或 NFT", percent: 22.22 },
    { label: "本研究：投资预期作为购买动机", percent: 15.87 }
  ]
};

const LIKERT = {
  q14: [
    { label: "A. 完全不同意", count: 0, percent: 0 },
    { label: "B. 比较不同意", count: 2, percent: 1.59 },
    { label: "C. 一般", count: 40, percent: 31.75 },
    { label: "D. 比较同意", count: 64, percent: 50.79 },
    { label: "E. 完全同意", count: 20, percent: 15.87 }
  ],
  q15: [
    { label: "A. 完全不同意", count: 10, percent: 7.94 },
    { label: "B. 比较不同意", count: 18, percent: 14.29 },
    { label: "C. 一般", count: 78, percent: 61.9 },
    { label: "D. 比较同意", count: 16, percent: 12.7 },
    { label: "E. 完全同意", count: 4, percent: 3.17 }
  ],
  q16: [
    { label: "A. 完全不同意", count: 12, percent: 9.52 },
    { label: "B. 比较不同意", count: 30, percent: 23.81 },
    { label: "C. 一般", count: 52, percent: 41.27 },
    { label: "D. 比较同意", count: 20, percent: 15.87 },
    { label: "E. 完全同意", count: 12, percent: 9.52 }
  ],
  q17: [
    { label: "A. 完全不同意", count: 2, percent: 1.59 },
    { label: "B. 比较不同意", count: 18, percent: 14.29 },
    { label: "C. 一般", count: 72, percent: 57.14 },
    { label: "D. 比较同意", count: 32, percent: 25.4 },
    { label: "E. 完全同意", count: 2, percent: 1.59 }
  ],
  q18: [
    { label: "A. 完全不同意", count: 0, percent: 0 },
    { label: "B. 比较不同意", count: 2, percent: 1.59 },
    { label: "C. 一般", count: 22, percent: 17.46 },
    { label: "D. 比较同意", count: 58, percent: 46.03 },
    { label: "E. 完全同意", count: 44, percent: 34.92 }
  ]
};

const QUESTION_GROUPS = [
  { title: "Q01 你来自哪所高校？", items: DATA.schools },
  { title: "Q02 您的年级是？", items: DATA.grades },
  {
    title: "Q03 您的性别与数字资产概念认知入口",
    items: [
      ...DATA.gender.map((item) => ({ ...item, label: `性别 / ${item.label}` })),
      ...DATA.awareness.map((item) => ({ ...item, label: `认知 / ${item.label}` }))
    ],
    summary: "原始表头中第 3 题编号重复，此处合并展示"
  },
  { title: "Q04 您主要通过哪些渠道接触数字资产或虚拟物品？", items: DATA.channels },
  { title: "Q05 您接触过以下哪些类型的数字资产或虚拟物品？", items: DATA.assets },
  { title: "Q06 您是否购买过数字资产或虚拟物品？", items: DATA.purchase },
  { title: "Q07 您购买数字资产或虚拟物品的频率是？", items: DATA.frequency },
  { title: "Q08 您平均每月花费在数字资产或虚拟物品上的金额约为多少？", items: DATA.spend },
  { title: "Q09 您购买数字资产或虚拟物品的资金来源主要是？", items: DATA.funding },
  { title: "Q10 您通常在哪些场景下更容易购买数字资产或虚拟物品？", items: DATA.scenarios },
  { title: "Q11 您是否曾因为限时、稀有、联名等因素产生购买冲动？", items: DATA.impulseTypes },
  { title: "Q12 您是否拥有可以长期保存或展示的数字资产？", items: DATA.savedAssets },
  { title: "Q13 您购买数字资产的主要动机是什么？", items: DATA.motives },
  { title: "Q14 我认为虚拟物品具有现实价值。", items: LIKERT.q14, summary: "均值 3.81 / 5" },
  { title: "Q15 虚拟消费能提升我的社交地位。", items: LIKERT.q15, summary: "均值 2.89 / 5" },
  { title: "Q16 我愿意为喜欢的虚拟物品花较高价格。", items: LIKERT.q16, summary: "均值 2.92 / 5" },
  { title: "Q17 虚拟资产消费会影响我对财富的认知。", items: LIKERT.q17, summary: "均值 3.11 / 5" },
  { title: "Q18 我会理性规划虚拟消费支出。", items: LIKERT.q18, summary: "均值 4.14 / 5" },
  { title: "Q19 您如何看待虚拟物品的“真实价值”？", items: DATA.valueView },
  { title: "Q20 您是否担心虚拟消费带来以下风险？", items: DATA.risks },
  { title: "Q21 您认为虚拟消费是否会改变您对现实财富的看法？", items: DATA.wealthImpact }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function percent(value) {
  return `${Number(value).toFixed(2).replace(".00", "")}%`;
}

function blockBar(value, total = 100) {
  const cells = 18;
  const filled = Math.max(0, Math.min(cells, Math.round((value / total) * cells)));
  return `${"█".repeat(filled)}${"░".repeat(cells - filled)}`;
}

function renderMetrics(key) {
  const item = DATA[key];
  const metrics = [
    { value: item.n, label: `${item.label} / 有效样本` },
    { value: percent(item.purchased), label: "购买过数字资产或虚拟物品" },
    { value: percent(item.aware), label: "较了解或非常了解数字资产概念" },
    { value: percent(item.wealthInfluence), label: "认为虚拟消费影响现实财富观" }
  ];

  $("#metricGrid").innerHTML = metrics.map((metric, index) => `
    <article class="metric" style="animation-delay:${index * 80}ms">
      <span class="mono-label">stat</span>
      <span class="metric-value">${metric.value}</span>
      <span class="metric-label">${metric.label}</span>
    </article>
  `).join("");

  const schoolRows = [
    { label: "购买经历", value: item.purchased },
    { label: "认知程度", value: item.aware },
    { label: "购买冲动", value: item.impulse },
    { label: "财富观影响", value: item.wealthInfluence },
    { label: "较高价值/投资想象", value: item.valueHigh }
  ];

  $("#schoolPanel").innerHTML = `
    <p class="mono-label">${item.label}</p>
    ${schoolRows.map((row) => `
      <div class="rank-line">
        <span>${row.label}</span>
        <span class="mini-track"><span class="mini-fill" style="width:${row.value}%"></span></span>
        <strong>${percent(row.value)}</strong>
      </div>
    `).join("")}
  `;
}

function renderBarList(selector, items, options = {}) {
  const max = options.max ?? 100;
  const longLabel = options.longLabel ? " long-label" : "";
  $(selector).innerHTML = items.map((item) => `
    <div class="data-row${longLabel}">
      <span class="data-label">${item.label}</span>
      <span class="block-bar" aria-label="${percent(item.percent)}">${blockBar(item.percent, max)}</span>
      <span class="data-percent">${percent(item.percent)}</span>
    </div>
  `).join("");
}

function renderAssets() {
  $("#assetWall").innerHTML = DATA.assets.map((asset, index) => `
    <article class="asset-tile" style="animation-delay:${index * 55}ms">
      <div>
        <div class="asset-name">${asset.label}</div>
        <div class="asset-count">${asset.count} / 126</div>
      </div>
      <span class="asset-value">${percent(asset.percent)}</span>
    </article>
  `).join("");
}

function renderStoryCards() {
  $("#storyCards").innerHTML = DATA.storyCards.map((card, index) => `
    <article class="story-card tone-${card.tone}" style="animation-delay:${index * 70}ms">
      <div class="story-card-top">
        <span>${card.value}</span>
        <small>${card.meta}</small>
      </div>
      <h3>${card.title}</h3>
      <p>${card.body}</p>
    </article>
  `).join("");
}

function renderValueOrbit() {
  const center = `
    <div class="orbit-center">
      <span>研究问题</span>
      <strong>虚拟物品为何被认为有价值？</strong>
    </div>
  `;
  const nodes = DATA.orbitItems.map((item, index) => {
    const angle = (360 / DATA.orbitItems.length) * index;
    return `
      <article class="orbit-node" style="--angle:${angle}deg; --delay:${index * -0.45}s;">
        <strong>${percent(item.percent)}</strong>
        <span>${item.label}</span>
        <small>${item.note}</small>
      </article>
    `;
  }).join("");
  $("#valueOrbit").innerHTML = `${center}<div class="orbit-ring"></div>${nodes}`;
}

function renderAssetMediaGallery() {
  const visuals = [
    { src: "./assets/membership_real.png", alt: "虚拟会员与平台订阅展示图" },
    { src: "./assets/gameskin_real.png", alt: "游戏皮肤展示图" },
    { src: "./assets/equipment_real.png", alt: "游戏装备与道具展示图" },
    { src: "./assets/album_real.png", alt: "电子专辑与数字纪念品展示图" },
    { src: "./assets/social_real.png", alt: "社交头像框、装扮与表情包展示图" },
    { src: "./assets/coin_real.png", alt: "虚拟货币与平台币展示图" },
    { src: "./assets/nft_real.png", alt: "数字藏品与NFT展示图" }
  ];
  $("#assetMediaGallery").innerHTML = DATA.assets.map((asset, index) => `
    <article class="media-card">
      <div class="media-visual media-photo">
        <img src="${visuals[index].src}" alt="${visuals[index].alt}" loading="lazy">
      </div>
      <div class="media-caption">
        <strong>${asset.label}</strong>
        <small>${asset.count} 人提及</small>
        <em>${percent(asset.percent)}</em>
      </div>
    </article>
  `).join("");
}

function renderValueMosaic() {
  const attitudeItems = DATA.attitudes.map((item) => ({
    label: item.label,
    value: item.score,
    max: 5,
    tag: `mean ${item.score.toFixed(2)}`
  }));
  const riskItems = DATA.risks.slice(0, 3).map((item) => ({
    label: item.label,
    value: item.percent,
    max: 100,
    tag: percent(item.percent)
  }));
  const items = [...attitudeItems, ...riskItems];
  $("#valueMosaic").innerHTML = items.map((item, index) => {
    const width = Math.max(4, (item.value / item.max) * 100);
    const isFeature = index === 4 ? " is-feature" : "";
    return `
      <article class="mosaic-tile${isFeature}" style="animation-delay:${index * 55}ms">
        <span>${item.tag}</span>
        <h3>${item.label}</h3>
        <div class="mosaic-bar"><i style="width:${width}%"></i></div>
      </article>
    `;
  }).join("");
}

function renderChannelNetwork() {
  const positions = [
    [58, 8], [18, 22], [62, 30], [30, 45], [70, 56], [12, 66], [48, 76]
  ];
  $("#channelNetwork").innerHTML = DATA.channels.map((item, index) => {
    const [left, top] = positions[index];
    return `
      <div class="signal-node" style="left:${left}%; top:${top}%">
        <strong>${percent(item.percent)}</strong>
        <span>${item.label}<br>${item.count} mentions</span>
      </div>
    `;
  }).join("");
  $$(".signal-node").forEach((node, index) => {
    node.style.setProperty("--i", index);
    node.style.animationDelay = `${index * -0.35}s`;
  });
}

function renderCampusRows() {
  const cards = $("#campusCards");
  const orbit = $("#campusOrbitScene");
  const comparison = $("#campusComparison");

  if (cards) {
    cards.innerHTML = DATA.campuses.map((campus, index) => `
      <article class="campus-card tone-campus-${campus.tone}" style="animation-delay:${index * 80}ms">
        <div class="campus-card-head">
          <span>${campus.code}</span>
          <small>${campus.count} / 126</small>
        </div>
        <h3>${campus.label}</h3>
        <p>${campus.role}</p>
        <div class="campus-meter">
          <i style="width:${campus.percent}%"></i>
        </div>
        <strong>${percent(campus.percent)}</strong>
        <em>${campus.insight}</em>
      </article>
    `).join("");
  }

  if (orbit) {
    orbit.innerHTML = `
      <div class="campus-orbit-ring"></div>
      <div class="campus-orbit-center">
        <span>Campus</span>
        <strong>3</strong>
        <small>schools</small>
      </div>
      ${DATA.campuses.map((campus, index) => `
        <div class="campus-orbit-node" style="--angle:${index * 120 - 20}deg; --delay:${index * -0.55}s;">
          <b>${campus.code}</b>
          <span>${campus.count}</span>
        </div>
      `).join("")}
    `;
  }

  if (comparison) {
    comparison.innerHTML = `
      <span class="panel-index">03</span>
      <h3>样本权重</h3>
      ${DATA.campuses.map((campus) => `
        <div class="campus-compare-row">
          <span>${campus.code}</span>
          <i><b style="width:${campus.percent}%"></b></i>
          <strong>${percent(campus.percent)}</strong>
        </div>
      `).join("")}
    `;
  }
}

function renderAttitudes() {
  $("#attitudeStrip").innerHTML = DATA.attitudes.map((item) => {
    const stars = "■".repeat(Math.round(item.score)) + "□".repeat(5 - Math.round(item.score));
    return `
      <article class="attitude-item" style="animation-delay:${Math.round(item.score * 45)}ms">
        <span class="mono-label">mean / sd ${item.sd.toFixed(2)}</span>
        <span class="score">${item.score.toFixed(2)}</span>
        <div class="stars">${stars}</div>
        <p>${item.label}</p>
      </article>
    `;
  }).join("");
}

function renderAtlas() {
  $("#resultAtlas").innerHTML = QUESTION_GROUPS.map((group, groupIndex) => `
    <article class="atlas-card" style="animation-delay:${groupIndex * 45}ms">
      <div class="atlas-head">
        <span>${String(groupIndex + 1).padStart(2, "0")}</span>
        <h3>${group.title}</h3>
      </div>
      ${group.summary ? `<p class="atlas-summary">${group.summary}</p>` : ""}
      <div class="atlas-items">
        ${group.items.map((item) => {
          const value = item.value ?? `${item.count}人 / ${percent(item.percent)}`;
          return `
            <div class="atlas-line">
              <span class="atlas-label">${item.label}</span>
              <span class="atlas-meter" aria-hidden="true"><span style="width:${Math.max(2, item.percent)}%"></span></span>
              <strong>${value}</strong>
            </div>
          `;
        }).join("")}
      </div>
    </article>
  `).join("");
}

function prepareTicker() {
  const ticker = $(".ticker-track");
  if (!ticker || ticker.dataset.ready === "true") return;
  ticker.innerHTML = `${ticker.innerHTML}${ticker.innerHTML}`;
  ticker.dataset.ready = "true";
}

function bindFilters() {
  $$(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".filter-button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderMetrics(button.dataset.school);
    });
  });
}

function bindNavigation() {
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      const target = id === "#top" ? document.querySelector("main") : document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      history.pushState(null, "", id);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}


function initSynthBackground() {
  const synth = document.querySelector('.fixed-synth-bg');
  const startEl = document.querySelector('#channels');
  const endEl = document.querySelector('#atlas');
  if (!synth || !startEl || !endEl) return;

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const update = () => {
    const y = window.scrollY || window.pageYOffset;
    const vh = window.innerHeight;
    const start = startEl.offsetTop - vh * 0.78;
    const fullyOn = startEl.offsetTop - vh * 0.2;
    const fadeOutStart = endEl.offsetTop - vh * 0.85;
    const end = endEl.offsetTop - vh * 0.2;

    let opacity = 0;
    let shiftX = 90;
    let shiftY = 26;
    let rotate = -9;
    let scale = 0.96;

    if (y >= start && y < fullyOn) {
      const p = clamp((y - start) / (fullyOn - start), 0, 1);
      opacity = 0.78 * p;
      shiftX = 90 - 90 * p;
      shiftY = 26 - 16 * p;
      rotate = -9 + 2 * p;
      scale = 0.96 + 0.04 * p;
    } else if (y >= fullyOn && y <= fadeOutStart) {
      opacity = 0.78;
      shiftX = 0;
      shiftY = 10;
      rotate = -7;
      scale = 1;
    } else if (y > fadeOutStart && y < end) {
      const p = clamp((y - fadeOutStart) / (end - fadeOutStart), 0, 1);
      opacity = 0.78 * (1 - p);
      shiftX = -8 * p;
      shiftY = 10 - 18 * p;
      rotate = -7 + 1.2 * p;
      scale = 1 - 0.03 * p;
    }

    synth.style.opacity = opacity.toFixed(3);
    synth.style.transform = `translate3d(${shiftX.toFixed(1)}px, ${shiftY.toFixed(1)}px, 0) rotate(${rotate.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  };

  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update, { passive: true });
}

function init() {
  prepareTicker();
  renderStoryCards();
  renderMetrics("all");
  renderBarList("#schoolBars", DATA.schools);
  renderBarList("#gradeBars", DATA.grades);
  renderBarList("#genderBars", DATA.gender);
  renderBarList("#awarenessBars", DATA.awareness);
  renderBarList("#channelBars", DATA.channels);
  renderChannelNetwork();
  renderValueOrbit();
  renderAssets();
  renderAssetMediaGallery();
  renderBarList("#spendBars", DATA.spend);
  renderBarList("#frequencyBars", DATA.frequency);
  renderBarList("#purchaseBars", DATA.purchase);
  renderBarList("#fundingBars", DATA.funding);
  renderBarList("#motiveBars", DATA.motives);
  renderBarList("#scenarioBars", DATA.scenarios, { longLabel: true });
  renderBarList("#riskBars", DATA.risks);
  renderBarList("#valueViewBars", DATA.valueView);
  renderBarList("#wealthImpactBars", DATA.wealthImpact);
  renderBarList("#savedAssetBars", DATA.savedAssets);
  renderBarList("#impulseBars", DATA.impulseTypes);
  renderAttitudes();
  renderValueMosaic();
  renderAtlas();
  renderCampusRows();
  renderBarList("#referenceBars", DATA.references, { longLabel: true });
  bindFilters();
  bindNavigation();
  initSynthBackground();
  const scrollToHash = () => {
    if (!location.hash) return;
    document.querySelector(location.hash)?.scrollIntoView({ block: "start" });
  };
  requestAnimationFrame(scrollToHash);
  setTimeout(scrollToHash, 120);
  window.addEventListener("load", () => setTimeout(scrollToHash, 80));
}

init();
