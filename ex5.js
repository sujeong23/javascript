console.log("for문");
const colors = ["orange", "yellow", "pink"];
for(let i=0; i<colors.length; i++){
    console.log(colors[i]);
}
console.log("for문2");
for(let key in colors){
    console.log(key+":"+colors[key]);
}
console.log("while문");
var i=0;
while(colors[i] != null){
    console.log(colors[i]);
    i++;
}
console.log("forEach문");
colors.forEach(function(value){
 console.log(value);
});
console.log("forEach문2");
colors.forEach(value => console.log(value));