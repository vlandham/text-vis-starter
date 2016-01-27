
//
function removePunctuation(text) {
  return text.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g," ").replace(/\s{2,}/g," ");
}

//
function getLines(text) {
  var lines = text.split("\n");

  var data = lines.map(function(s) {
    var d = {};
    d.line = s.replace(/ /g, '\u00a0');
    d.length = s.length;
    return d;
  });

  return data;
}

//
function getWords(text) {
  text = text.replace(/['\"\‘\’]/gm,"");
  text = removePunctuation(text);

  var allWords = text.split(" ").filter(function(w) { return w !== ""; });

  allWords = allWords.map(function(w,i) { return {"word": w, "index": i};});

  return allWords;
}

//
function countWords(words) {
  var wordNest = d3.nest()
    .key(function(w) { return w.word; })
    .rollup(function(l) { return l.length; })
    .entries(words);

  var wordCounts = wordNest.map(function(n) { return {"word": n.key, "count": n.values}; });
  wordCounts.sort(function(a,b) { return b.count - a.count; });

  return wordCounts;
}
