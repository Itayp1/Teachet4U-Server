const popo = {};
popo.p = "p";

const popa = {};
popa.a = "ttt";

let obj = {};
obj.p = "6666";

const ppp = { ...popo, ...popa, ...obj };
console.log(ppp);
