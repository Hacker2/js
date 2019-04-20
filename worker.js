console.log('hoho');


postMessage("hoho script");
//close();
onmessage = function(e) {
  console.log(e.data);
}