let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let allWords = [
  "the",
  "a",
  "an",
  "and",
  "or",
  "but",
  "if",
  "then",
  "so",
  "because",
  "of",
  "in",
  "on",
  "at",
  "by",
  "with",
  "from",
  "to",
  "into",
  "through",
  "I",
  "you",
  "he",
  "she",
  "it",
  "we",
  "they",
  "me",
  "him",
  "her",
  "us",
  "them",
  "this",
  "that",
  "these",
  "those",
  "my",
  "your",
  "his",
  "her",
  "its",
  "our",
  "their",
  "who",
  "what",
  "when",
  "where",
  "why",
  "how",
  "which",
  "is",
  "are",
  "was",
  "were",
  "be",
  "being",
  "been",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "can",
  "could",
  "will",
  "would",
  "shall",
  "should",
  "may",
  "might",
  "must",
  "go",
  "come",
  "walk",
  "run",
  "fly",
  "sit",
  "stand",
  "lie",
  "sleep",
  "dream",
  "eat",
  "drink",
  "see",
  "look",
  "watch",
  "hear",
  "listen",
  "feel",
  "touch",
  "smell",
  "taste",
  "think",
  "know",
  "believe",
  "understand",
  "remember",
  "forget",
  "want",
  "need",
  "love",
  "hate",
  "like",
  "enjoy",
  "make",
  "build",
  "create",
  "find",
  "lose",
  "give",
  "take",
  "bring",
  "send",
  "keep",
  "hold",
  "open",
  "close",
  "start",
  "stop",
  "begin",
  "end",
  "laugh",
  "cry",
  "sing",
  "dance",
  "play",
  "work",
  "rest",
  "live",
  "die",
  "wait",
  "hope",
  "fear",
  "burn",
  "shine",
  "rise",
  "fall",
  "break",
  "fix",
  "clean",
  "dirty",
  "soft",
  "hard",
  "strong",
  "weak",
  "fast",
  "slow",
  "cold",
  "hot",
  "warm",
  "cool",
  "wet",
  "dry",
  "big",
  "small",
  "long",
  "short",
  "tall",
  "low",
  "high",
  "deep",
  "shallow",
  "light",
  "dark",
  "bright",
  "dull",
  "heavy",
  "thin",
  "thick",
  "red",
  "blue",
  "green",
  "yellow",
  "white",
  "black",
  "gray",
  "orange",
  "purple",
  "brown",
  "happy",
  "sad",
  "angry",
  "calm",
  "kind",
  "mean",
  "funny",
  "serious",
  "quiet",
  "loud",
  "early",
  "late",
  "always",
  "never",
  "sometimes",
  "often",
  "now",
  "then",
  "soon",
  "again",
  "before",
  "after",
  "today",
  "tomorrow",
  "yesterday",
  "morning",
  "night",
  "day",
  "week",
  "year",
  "man",
  "woman",
  "boy",
  "girl",
  "child",
  "friend",
  "stranger",
  "person",
  "family",
  "team",
  "dog",
  "cat",
  "bird",
  "fish",
  "animal",
  "tree",
  "flower",
  "grass",
  "rock",
  "river",
  "ocean",
  "mountain",
  "sky",
  "cloud",
  "rain",
  "snow",
  "wind",
  "fire",
  "sun",
  "moon",
  "star",
  "space",
  "room",
  "house",
  "home",
  "school",
  "city",
  "street",
  "door",
  "window",
  "car",
  "bus",
  "train",
  "bike",
  "road",
  "path",
  "chair",
  "table",
  "bed",
  "wall",
];
let words = ["s", "the", "but", "a"];
let amount = 40;
let draggingWord = null;
let offsetX = 0;
let offsetY = 0;

function setup() {
  createCanvas(windowWidth, window.visualViewport.height);
  background("#FFFFFF");

  for (let i = 0; i < amount; i++) {
    let char = random(allWords);
    let x = random(20, width - 60);
    let y = random(20, 120);
    words.push({ char, x, y });
  }
}

function drawFridge(x, y, w, h) {
  let borderRadius = 20;
  let dividerY = y + h * 0.4;
  let handleWidth = 6;
  let handleHeight = h * 0.15;

  stroke(0);
  fill("#a2d9ce");
  rect(x, y, w, h, borderRadius);

  // Divider line between top and bottom doors
  line(x, dividerY, x + w, dividerY);

  // Top door handle
  let topHandleX = x + w * 0.1;
  let topHandleY = y + h * 0.15;
  fill("#C0C0C0");
  rect(topHandleX, topHandleY, handleWidth, handleHeight, 3);

  // Bottom door handle
  let bottomHandleY = y + h * 0.6;
  rect(topHandleX, bottomHandleY, handleWidth, handleHeight, 3);
}

function draw() {
  background("#FFFFFF");

  let fridgeWidth = 300;
  let fridgeHeight = 550;
  let x = (width - fridgeWidth) / 2;
  let y = height - fridgeHeight - 30;

  drawFridge(x, y, fridgeWidth, fridgeHeight);

  // Draw words
  textAlign(CENTER, CENTER);
  textSize(15);
  for (let word of words) {
    let padding = 20;
    let wordWidth = textWidth(word.char) + padding;
    let wordHeight = 30;

    if (word === draggingWord) {
      word.x = mouseX - offsetX;
      word.y = mouseY - offsetY;
    }

    fill(0);
    rect(word.x + 3, word.y + 3, wordWidth, wordHeight, 5);

    fill(255);
    rect(word.x, word.y, wordWidth, wordHeight, 5);

    fill(0);
    text(word.char, word.x + wordWidth / 2, word.y + wordHeight / 2);
  }
}

function mousePressed() {
  for (let i = words.length - 1; i >= 0; i--) {
    // check from top to bottom
    let word = words[i];
    let padding = 20;
    let wordWidth = textWidth(word.char) + padding;
    let wordHeight = 40;

    if (
      mouseX > word.x &&
      mouseX < word.x + wordWidth &&
      mouseY > word.y &&
      mouseY < word.y + wordHeight
    ) {
      draggingWord = word;
      offsetX = mouseX - word.x;
      offsetY = mouseY - word.y;
      break;
    }
  }
}

function mouseReleased() {
  draggingWord = null;
}

function windowResized() {
  resizeCanvas(windowWidth, window.visualViewport.height);
}
