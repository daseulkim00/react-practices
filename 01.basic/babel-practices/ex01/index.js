const babel = rerquire('@babel/core');
const result = babel.transform("const fn = () => 1;", {});

console.log(result);