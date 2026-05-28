const WORDS = [
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
    keys: ["短暫","消逝","凋謝","落葉","花落","時間","流逝","無常","結束","轉瞬","不久","結束了","散了","謝了","煙火","落花","飄零"]
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
    keys: ["渴望","嚮往","說不清","缺少","不完整","想要","說不出","隱隱","好像少了","無法言說","心裡有個洞","什麼都有但"]
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

// ── UI ────────────────────────────────────────────────────
const inputSection   = document.getElementById("input-section");
const loadingSection = document.getElementById("loading-section");
const resultSection  = document.getElementById("result-section");
const textarea       = document.getElementById("feeling-input");
const remaining      = document.getElementById("remaining");

textarea.addEventListener("input", () => {
  remaining.textContent = 400 - textarea.value.length;
});

document.getElementById("search-btn").addEventListener("click", () => {
  const input = textarea.value.trim();
  if (!input) return;
  search(input);
});

document.getElementById("again-btn").addEventListener("click", reset);

function search(input) {
  inputSection.classList.add("hidden");
  loadingSection.classList.remove("hidden");

  setTimeout(() => {
    const result = findBestMatch(input);
    showResult(result);
  }, 2200);
}

function showResult(result) {
  loadingSection.classList.add("hidden");

  document.getElementById("result-word").textContent    = result.word;
  document.getElementById("result-origin").textContent  = result.origin;
  document.getElementById("result-quote").textContent   = result.quote;
  document.getElementById("result-summary").textContent = `出來了一個${result.lang}詞`;

  resultSection.classList.remove("hidden");
}

function reset() {
  resultSection.classList.add("hidden");
  textarea.value      = "";
  remaining.textContent = "400";
  inputSection.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
