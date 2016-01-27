var vis = function() {
  var width = 900;
  var data = [];
  var div = null;

  var wordScale = d3.scale.linear()
    .range([10,100]);

  var chart = function(text) {
    var words = getWords(text.toLowerCase());
    data = countWords(words);

    div = d3.select("#vis").append("div")
      .style("width", width + "px");

    update();
  }

  function update() {

    var dataExtent = d3.extent(data, function(d) { return d.count; });
    wordScale.domain(dataExtent);

    var word = div.selectAll('.word')
      .data(data)

    word.enter()
      .append('p')
      .style('font-size', function(d) { return wordScale(d.count); })
      .style('padding-right', 15)
      .style('padding-bottom', 15)
      .style('float', 'left')
      .text(function(d) { return d.word; });
  }

  return chart;
}

var textVis = vis();

function display(error, text) {
  if(error) {
    console.log(error)
  }

  textVis(text);
}

d3.text("data/alice.txt", display);
