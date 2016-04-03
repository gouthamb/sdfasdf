// server connection
var cs = 'ws://localhost:1234';
var ws = new WebSocket(cs);
ws.binaryType = 'arraybuffer';

// cmds
var ohlcCmd = "select from daily where sym = `AAPL";
var lineBarCmd = "t1:select date,size,close from daily where sym = `GOOG;(enlist (`key`bar`values)!(`Volume;1b;{(x[`date];x[`size])} each t1)),((`key`bar`values)!(`Price;0b;{(x[`date];x[`close])} each t1))";
var discBarCmd = "t1:0!select retrn:100f*(first close - last close)%(first close) by sym from daily;(`key`values)!(`Returns;{(x[`sym];x[`retrn])} each t1)";
var stackAreaCmd = "t1:0!select price by sym,date from daily;{(`key`values)!(x;{(x[`date],x[`price])} each select from t1 where sym = x)}each distinct t1[`sym]";
var bubbleCmd = "t1:0!select price%sum daily[`price],move1:100f*(close-open)%open,move2:100f*(high-low)%open by sym,date from daily where sym in `AAPL`MSFT`ORCL`HPQ;{(`key`values)!(x;{(`x`y`size)!((x[`x][0];x[`y][0];x[`size][0]))} each (select x:move1,y:move2,size:price from t1 where sym=x))} each distinct t1[`sym]";
var pieCmd = "0!select notnl:sum price by sym from daily where sym in `ORCL`DOW`HPQ`AIG";
var donutCmd = "0!select notnl:sum price by sym from daily where sym in `AAPL`GOOG`IBM`MSFT";
var horizBarCmd = "t1:0!select sum size by sym,cond from trade where sym in `AAPL`GOOG`IBM`MSFT;0!raze {(enlist (enlist `key)!(enlist x))!(enlist ((enlist `values)!(enlist select cond,size-min size from t1 where sym = x)))} each (select distinct sym from t1)`sym";
var lineViewCmd = "t1:0!select sym,price from trade where sym in `MSFT`ORCL`HPQ`AIG, date = 2014.05.01;0!raze {(enlist (enlist `key)!(enlist x))!(enlist ((enlist `values)!(enlist ((select x:i,y:price-min price from (select from t1 where sym = x)))[til 80])))} each (select distinct sym from t1)`sym";
var boxPlotCmd = "0!select date,size:close by sym from daily where sym in `AAPL`MSFT`ORCL`HPQ`AIG";
var histogramCmd = "(select close from daily)`close";
var parallelCoordCmd = "select pnl,ADV,SR,spread,name:sym from 0!select pnl:1e6*(last close - first open)%first open, ADV:last price%avg price, SR:0.20, spread: 10e4*0.01%last price by sym from daily";
var tradesTableCmd = "33#select from daily"

// req timer
var progressbar = $( "#progressbar" );
var progressbar_cmdcount = 0;
var progressbar_repcount = 0;
function requestQCFData() {
  logMsg("Requesting data from QCF");
  progressbar_cmdcount = 0;
  progressbar_repcount = 0;
  progressbar.progressbar( "value", 0 );
  ws.sendcmd(ohlcCmd);
  ws.sendcmd(lineBarCmd);
  ws.sendcmd(discBarCmd);
  ws.sendcmd(stackAreaCmd);
  ws.sendcmd(bubbleCmd);
  ws.sendcmd(pieCmd);
  ws.sendcmd(donutCmd);
  ws.sendcmd(horizBarCmd);
  ws.sendcmd(lineViewCmd);
  ws.sendcmd(boxPlotCmd);
  ws.sendcmd(histogramCmd);
  ws.sendcmd(parallelCoordCmd);
  ws.sendcmd(tradesTableCmd);
  progressbar_cmdcount = 13;
};
function parseQCFResult(data) {
  progressbar_repcount = progressbar_repcount + 1;
  progressbar.progressbar ( "value" , 100*progressbar_repcount/progressbar_cmdcount );
  if (data.fname == ohlcCmd)
    onOhlcData(data);
  if (data.fname == lineBarCmd)
    onLineBarData(data);
  if (data.fname == discBarCmd)
    onDiscBarData(data);
  if (data.fname == stackAreaCmd)
    onStackAreaData(data);
  if (data.fname == bubbleCmd)
    onBubbleData(data);
  if (data.fname == pieCmd)
    onPieData(data);
  if (data.fname == donutCmd)
    onDonutData(data);
  if (data.fname == horizBarCmd)
    onHorizBarData(data);
  if (data.fname == lineViewCmd)
    onLineViewData(data);
  if (data.fname == boxPlotCmd)
    onBoxPlotData(data);
  if (data.fname == histogramCmd)
    onHistogramData(data);
  if (data.fname == parallelCoordCmd)
    onParallelCoordData(data);
  if (data.fname == tradesTableCmd)
    onTradesTableData(data);
};
setInterval(requestQCFData,10*60*1000);

// send command on the websocket  
ws.sendcmd = function (args) {
  logMsg("Sending command over websocket: " + arguments[0]);
  var len = arguments.length,data = {},i;
  data['fname'] = arguments[0];
  for (i=1;i < len;i++) 
    data['arg'+i] = arguments[i];
  ws.send(serialize(JSON.stringify(data)));
};    
// WebSocket event handlers
ws.onopen = function () {
  logMsg("Connected to crb qcf over websocket " + cs);
  requestQCFData();
};
ws.onclose = function () {
  logMsg("Disconnected from crb qcf " + cs);
};
ws.onmessage = function (event) {
  var data = JSON.parse(deserialize(event.data));
  logMsg("Received result for command [" + data.fname + "] with result count: " + data.data.length);
  parseQCFResult(data);
};
ws.onerror = function (error) {
  logMsg("Error " + error.data);
};
