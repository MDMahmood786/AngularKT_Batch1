

var updateFuncs = [];
for (var i = 0; i < 2; i++){
    updateFuncs.push(function () { return i});
}

//-------------------------

var i = updateFuncs[1]();
console.log(i);