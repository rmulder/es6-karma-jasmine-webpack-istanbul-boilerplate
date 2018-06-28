var testsContext = require.context('../src', true, /(^index)\.js$/);
console.log('============================================================');
console.log('testsContext:', testsContext.keys());
testsContext.keys().forEach(testsContext);

var srcContext = require.context('./', true, /\.js$/);
console.log('============================================================');
console.log('srcContext:', srcContext.keys());
srcContext.keys().forEach(srcContext);
