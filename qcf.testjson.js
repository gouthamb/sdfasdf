// sample test data
function testStreamData() {
  return stream_layers(3,128,.1).map(function(data, i) {
    return { 
      key: 'Stream' + i,
      values: data
    };
  });
};

function testBoxPlotData() {
 return  [
    {
      label: "Sample A",
      values: {
	Q1: 120,
	Q2: 150,
	Q3: 200,
	whisker_low: 115,
	whisker_high: 210,
	outliers: [50, 100, 225]
      },
    },
    {
      label: "Sample B",
      values: {
	Q1: 300,
	Q2: 350,
	Q3: 400,
	whisker_low: 225,
	whisker_high: 425,
	outliers: [175]
      },
    },
    {
      label: "Sample C",
      values: {
	Q1: 50,
	Q2: 100,
	Q3: 125,
	whisker_low: 25,
	whisker_high: 175,
	outliers: [0]
      },
    }
  ];
};
