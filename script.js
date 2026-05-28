const WORDS = [
  // ── 原有 20 個 ──────────────────────────────────────────
  {
    word: "木漏れ日",
    lang: "日語",
    origin: "來自日語",
    quote: "「光與葉的共謀——陽光不願直地傾瀉，於是借樹葉的掌紋，將自己碎成細碎的金，輕輕灑落在你的肩頭與地面。」",
    keys: ["陽光","光","樹葉","葉","樹","森林","縫隙","照射","光線","葉縫","透過","光影","大樹","枝椏","光斑"]
  },
  {
    word: "Saudade",
    lang: "葡萄牙語",
    origin: "來自葡萄牙語",
    quote: "「一種甜蜜的憂傷——對某個已逝去之物的渴望，那個東西也許永遠不會回來，也許從未真正存在過。」",
    keys: ["思念","懷念","想念","離開","離別","失去","過去","回憶","鄉愁","想你","想起","不在了","已經","再也","遠方"]
  },
  {
    word: "Forelsket",
    lang: "挪威語",
    origin: "來自挪威語",
    quote: "「那種墜入愛河時的幸福感——世界突然變得更鮮豔，空氣更輕盈，連陌生人的臉都變得可愛。」",
    keys: ["愛","喜歡","心跳","戀愛","喜悅","幸福","快樂","雀躍","心動","在一起","喜歡一個人","戀愛的感覺"]
  },
  {
    word: "Hygge",
    lang: "丹麥語",
    origin: "來自丹麥語",
    quote: "「不是奢華，而是剛剛好的溫暖——一杯熱茶，一條毯子，一個你不必說話也自在的人。」",
    keys: ["溫暖","舒適","家","安心","被窩","溫馨","安全","窩","室內","下雨","毯子","熱茶","咖啡","圍爐","平靜","恬靜"]
  },
  {
    word: "物の哀れ",
    lang: "日語",
    origin: "來自日語",
    quote: "「知道美麗短暫，反而看得更清晰——那種因事物終將消逝而生出的溫柔憂傷。」",
    keys: ["短暫","消逝","凋謝","落葉","花落","時間","流逝","無常","結束","轉瞬","不久","散了","謝了","煙火","落花","飄零"]
  },
  {
    word: "Fernweh",
    lang: "德語",
    origin: "來自德語",
    quote: "「一種對從未去過之地的渴望——不是思鄉，而是思念一個你還不認識的家。」",
    keys: ["遠方","旅行","流浪","嚮往","逃離","遠行","異鄉","外面","世界","想走","想去","陌生","他鄉","遊蕩"]
  },
  {
    word: "Sehnsucht",
    lang: "德語",
    origin: "來自德語",
    quote: "「對某種更深層存在的渴望——那個東西沒有名字，但你一直覺得自己在等它。」",
    keys: ["渴望","說不清","缺少","不完整","想要","說不出","隱隱","好像少了","無法言說","心裡有個洞","什麼都有但"]
  },
  {
    word: "Mamihlapinatapai",
    lang: "雅甘語",
    origin: "來自南美雅甘語",
    quote: "「兩個人的眼神相遇，都希望對方先開口——那個安靜的瞬間，裡面裝著一整個沒說出口的世界。」",
    keys: ["眼神","對視","彼此","心動","想說","說不出口","等待","先開口","沉默","默契","互看","都想","都等","沒說"]
  },
  {
    word: "Iktsuarpok",
    lang: "因紐特語",
    origin: "來自因紐特語",
    quote: "「不斷走到門口張望——那種期待某人到來時，身體比心更先知道的焦急。」",
    keys: ["等待","等人","盼望","一直看","期待","焦急","有沒有來","快來了","還沒來","望向","門口","窗口","一直想","忍不住看"]
  },
  {
    word: "懐かしい",
    lang: "日語",
    origin: "來自日語",
    quote: "「不只是懷念，而是一種甜蜜的痛——那個過去的瞬間重新浮現，你同時感到快樂與失落。」",
    keys: ["懷舊","童年","小時候","以前","久違","老歌","老照片","想起以前","從前","那時候","好久沒","記憶","記得當時","回到"]
  },
  {
    word: "Meraki",
    lang: "希臘語",
    origin: "來自希臘語",
    quote: "「把一部分的自己留在你做的事情裡——不是為了結果，而是因為這個過程本身就值得你全部的心。」",
    keys: ["用心","投入","創作","做事","靈魂","熱情","全心全意","享受","喜歡做","沉浸","專注","忘我","廢寢忘食","做到最好"]
  },
  {
    word: "Cafuné",
    lang: "巴西葡萄牙語",
    origin: "來自巴西葡萄牙語",
    quote: "「用手指慢慢穿過某人的頭髮——那個動作裡，有一種不需要語言的全部溫柔。」",
    keys: ["撫摸","頭髮","輕柔","愛撫","親密","安慰","溫柔","觸碰","摸","靠著","躺","依偎","輕撫","安靜陪著"]
  },
  {
    word: "幽玄",
    lang: "日語",
    origin: "來自日語",
    quote: "「一種對宇宙深邃之美的感知——不是理解，而是在浩瀚面前，靜靜感受自己有多渺小，卻又多麼完整。」",
    keys: ["宇宙","深邃","說不清楚","遼闊","神秘","夜空","大海","無限","敬畏","渺小","浩瀚","星空","面對自然","震撼"]
  },
  {
    word: "Hiraeth",
    lang: "威爾斯語",
    origin: "來自威爾斯語",
    quote: "「對一個再也回不去的地方的渴望——也許那個地方從未真的存在，只活在你的記憶裡，比現實更真實。」",
    keys: ["思鄉","想回去","無法回去","家不見了","那個地方","回不去","找不到","消失了","不再是","變了","故鄉","故居","老家","以前的地方"]
  },
  {
    word: "生き甲斐",
    lang: "日語",
    origin: "來自日語",
    quote: "「讓你每天早上願意起床的那個東西——不一定偉大，但一定是你的。」",
    keys: ["意義","活著的理由","目的","為何","存在","值得","熱愛","為了","支撐","讓我繼續","讓我想活","讓我起床","動力"]
  },
  {
    word: "侘寂",
    lang: "日語",
    origin: "來自日語",
    quote: "「在不完整裡看見美——那道裂縫，那個缺口，那片褪色，都是時間留下的簽名。」",
    keys: ["不完美","破損","殘缺","舊","歲月","痕跡","裂縫","褪色","樸素","歷史感","斑駁","缺角","用舊了","有歲月感","滄桑"]
  },
  {
    word: "Schadenfreude",
    lang: "德語",
    origin: "來自德語",
    quote: "「看著別人摔跤時那一瞬間悄悄升起的愉悅——你知道這不好，但你還是笑了。」",
    keys: ["別人倒楣","有點開心","幸災樂禍","忍不住笑","壞壞","見不得別人好","竟然有點爽","不應該但是","活該"]
  },
  {
    word: "L'esprit de l'escalier",
    lang: "法語",
    origin: "來自法語",
    quote: "「『樓梯上的靈感』——離開之後，完美的話才終於出現，而那個說出口的時機，已經不在了。」",
    keys: ["太晚了","走了才想到","後來才想到","最佳回應","錯過時機","早知道","當時應該","那時候應該說","想到了但來不及","後悔沒說"]
  },
  {
    word: "Ya'aburnee",
    lang: "阿拉伯語",
    origin: "來自阿拉伯語",
    quote: "「『願你埋葬我』——因為太愛一個人，寧願自己先死，也不願在世上承受沒有他的那天。」",
    keys: ["愛你","希望你先走","不想失去你","捨不得","比你先離開","你若離開","沒有你","先走","想在你之前","深愛","此生","只有你"]
  },
  {
    word: "Ubuntu",
    lang: "班圖語",
    origin: "來自班圖語",
    quote: "「『我的存在，因你而完整』——不是依賴，而是一種深刻的認知：我們是彼此的一部分。」",
    keys: ["人與人","連結","因為有你","共同體","彼此","我因你","陪伴","在一起","有你才有我","互相","群體","我們","不是一個人","有人陪"]
  },

  // ── 新增 10 個 ──────────────────────────────────────────
  {
    word: "Retrouvailles",
    lang: "法語",
    origin: "來自法語",
    quote: "「久別重逢的那一刻——時間好像折疊起來，所有的距離突然變得不重要了。」",
    keys: ["久別重逢","重逢","再次見面","久違","好久不見","終於見到","又見面了","終於回來","等了好久","見到你了"]
  },
  {
    word: "Toska",
    lang: "俄語",
    origin: "來自俄語",
    quote: "「一種沒有對象的渴望——你不知道自己在等什麼，只是隱隱覺得有什麼應該在這裡，卻不在。」",
    keys: ["空虛","茫然","說不上來","悶","無所事事","心裡不踏實","焦躁","莫名","不知道為什麼","說不清楚難過","就是不對勁"]
  },
  {
    word: "恋の予感",
    lang: "日語",
    origin: "來自日語",
    quote: "「第一次見面，卻已預感自己會愛上這個人——那個直覺，比理智更早抵達。」",
    keys: ["直覺","第一次見面","一見","就知道","會喜歡","命中注定","一眼","見到就","第一眼","預感","冥冥之中","感覺以後"]
  },
  {
    word: "積ん読",
    lang: "日語",
    origin: "來自日語",
    quote: "「買下一本書，是一個承諾——不一定要讀，但要讓它知道，你相信有一天你們會相遇。」",
    keys: ["書","買了沒看","堆著","收藏","捨不得看","囤積","又買書","書太多","想看但","還沒看的書","積了好多"]
  },
  {
    word: "Chrysalism",
    lang: "英語",
    origin: "來自英語（現代造詞）",
    quote: "「外面的雷聲讓室內更安靜——那種被壞天氣包裹著的踏實感，像是世界把你暫時藏起來了。」",
    keys: ["下雨","打雷","在室內","窗外在下雨","雷聲","躲在裡面","雨聲","大雨","暴雨","雷雨","聽著雨聲","外面在下雨但我在裡面"]
  },
  {
    word: "Vellichor",
    lang: "英語",
    origin: "來自英語（現代造詞）",
    quote: "「翻開一本舊書，看見陌生人的字跡——那個人在哪裡？他們現在還記得這本書嗎？」",
    keys: ["舊書","二手書","書店","別人的書","翻到別人的字跡","舊書店","泛黃","舊紙","書裡的字","有人寫過","別人留下的"]
  },
  {
    word: "Jouska",
    lang: "英語",
    origin: "來自英語（現代造詞）",
    quote: "「那場在腦海裡反覆排練的對話——你一遍遍修改台詞，但真實的那場，永遠不會完全一樣。」",
    keys: ["腦海中","想像中的對話","反覆想","如果當時說","如果他說","一直在想","想過很多次","應該說什麼","排練","要說的話","想好了怎麼說"]
  },
  {
    word: "Liberosis",
    lang: "英語",
    origin: "來自英語（現代造詞）",
    quote: "「多麼希望自己可以少在意一點——讓事情就只是事情，而不是一個需要反覆咀嚼的謎。」",
    keys: ["不想在意","不想那麼在意","希望能放下","輕鬆一點","不那麼計較","想開了","太敏感","太在意","想太多","放不下","如果我不在乎就好了"]
  },
  {
    word: "Mudita",
    lang: "梵語",
    origin: "來自梵語",
    quote: "「看著你好，我也跟著好——不是嫉妒，而是你的快樂真的讓我快樂。」",
    keys: ["為你高興","替別人開心","好為你高興","朋友成功","真心替你快樂","看你幸福我也幸福","你好我就好","替你開心","為你驕傲","真的很替你高興"]
  },
  {
    word: "Déjà vu",
    lang: "法語",
    origin: "來自法語",
    quote: "「這個瞬間好像曾經發生過——你明明知道是第一次，身體卻說：我們來過這裡。」",
    keys: ["好像來過","似曾相識","感覺見過","感覺發生過","這裡來過","好像做過","以前好像","熟悉感","有種熟悉","感覺很熟","好像夢到過"]
  }
];

// ── Matching ──────────────────────────────────────────────
function findBestMatch(input) {
  let best = null;
  let bestScore = 0;

  for (const w of WORDS) {
    let score = 0;
    for (const key of w.keys) {
      if (input.includes(key)) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      best = w;
    }
  }

  return best ?? WORDS[Math.floor(Math.random() * WORDS.length)];
}

// ── Wisteria petals ───────────────────────────────────────
const PETAL_COLORS = [
  "#c4a0e8","#b57bee","#d0aaf5","#e9d5ff",
  "#a78bfa","#c084fc","#ddd6fe","#cab4f0"
];

let petalInterval = null;

function createPetal() {
  const container = document.getElementById("petal-container");
  const petal = document.createElement("div");
  petal.className = "petal";

  const size     = 6 + Math.random() * 6;
  const left     = Math.random() * 100;
  const duration = 4.5 + Math.random() * 5;
  const delay    = Math.random() * 1.5;
  const color    = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];

  petal.style.cssText = `
    left: ${left}%;
    width: ${size}px;
    height: ${size * 1.75}px;
    background: ${color};
    opacity: ${0.55 + Math.random() * 0.35};
    animation-name: petal-fall;
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  `;

  container.appendChild(petal);

  // When petal lands, create ripple then remove
  const totalMs = (duration + delay) * 1000;
  setTimeout(() => {
    createRipple(left);
    setTimeout(() => petal.remove(), 600);
  }, totalMs - 400);
}

function createRipple(leftPercent) {
  const ripple = document.createElement("div");
  ripple.className = "ripple";
  ripple.style.left = leftPercent + "%";
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 1400);
}

function startPetals() {
  document.getElementById("water-surface").classList.add("visible");
  for (let i = 0; i < 10; i++) setTimeout(createPetal, i * 250);
  petalInterval = setInterval(createPetal, 700);
}

function stopPetals() {
  clearInterval(petalInterval);
  petalInterval = null;
  setTimeout(() => {
    document.getElementById("water-surface").classList.remove("visible");
    document.getElementById("petal-container").innerHTML = "";
  }, 7000);
}

// ── Typewriter ────────────────────────────────────────────
function typewrite(el, text, speed = 90) {
  el.innerHTML = "";
  [...text].forEach((ch, i) => {
    const span = document.createElement("span");
    span.className = "word-char";
    span.textContent = ch;
    span.style.animationDelay = `${i * speed}ms`;
    el.appendChild(span);
  });
}

// ── UI refs ───────────────────────────────────────────────
const inputSection   = document.getElementById("input-section");
const loadingSection = document.getElementById("loading-section");
const resultSection  = document.getElementById("result-section");
const textarea       = document.getElementById("feeling-input");
const remaining      = document.getElementById("remaining");

textarea.addEventListener("input", () => {
  remaining.textContent = 400 - textarea.value.length;
});

// Enter to submit (Shift+Enter = new line)
textarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    triggerSearch();
  }
});

document.getElementById("search-btn").addEventListener("click", triggerSearch);
document.getElementById("again-btn").addEventListener("click", reset);

// ── Core flow ─────────────────────────────────────────────
function triggerSearch() {
  const input = textarea.value.trim();
  if (!input) return;
  search(input);
}

function search(input) {
  inputSection.classList.add("hidden");
  loadingSection.classList.remove("hidden");
  startPetals();

  setTimeout(() => {
    const result = findBestMatch(input);
    loadingSection.classList.add("hidden");
    showResult(result);
  }, 2400);
}

function showResult(result) {
  document.getElementById("result-origin").textContent  = result.origin;
  document.getElementById("result-quote").textContent   = result.quote;
  document.getElementById("result-summary").textContent = `出來了一個${result.lang}詞`;

  resultSection.classList.remove("hidden");

  // Typewriter on the word after section fades in
  setTimeout(() => {
    typewrite(document.getElementById("result-word"), result.word, 110);
  }, 400);

  // Slow down petals after result appears
  setTimeout(stopPetals, 3000);
}

function reset() {
  resultSection.classList.add("hidden");
  textarea.value = "";
  remaining.textContent = "400";
  inputSection.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
