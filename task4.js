mass = [1,2,4,5];

mass.filter(x=>x%2 !== 0 ).reduce((a,b)=>a+b,0);
