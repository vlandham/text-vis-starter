var vis = function() {
  var width = 900;
  var height = 900;
  var data = [];
  var svg = null;

  var bubble = d3.layout.pack()
    .sort(null)
    .size([width, height])
    .value(function(d) { return d.count; })
    .padding(1.5);

  var wordScale = d3.scale.linear()
    .range([10,100]);

  var chart = function(text) {
    var words = getWords(text.toLowerCase());
    data = countWords(words);

    svg = d3.select("#vis").append("svg")
      .attr("width", width)
      .attr("height", height)


    update();
  }

  function update() {

    var dataExtent = d3.extent(data, function(d) { return d.count; });
    wordScale.domain(dataExtent);

    console.log(bubble.nodes({children:data}))

    var word = svg.selectAll('.word')
      .data(bubble.nodes({children:data}))

    var wordE = word.enter()
      .append('g')
      .attr('class', 'word')
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

    wordE.append('text')
      .attr('text-anchor', 'middle')
      .attr('font-size', function(d) { return wordScale(d.count); })
      .text(function(d) { return d.word; });
  }

  function makeNetwork(nodes) {
    return {children:nodes};
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
