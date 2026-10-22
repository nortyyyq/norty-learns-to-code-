import assert from 'node:assert/strict';
const base=process.argv[2]||'http://localhost:3000';
for(const path of ['/','/portfolio','/about','/services','/journal','/contact','/portfolio/mediterranean-retreat','/journal/the-art-of-slow-travel','/sitemap.xml','/robots.txt','/opengraph-image','/icon.svg']){assert.equal((await fetch(base+path)).status,200,path);console.log('PASS GET',path)}
assert.equal((await fetch(base+'/no-such-page')).status,404);
const post=(body,headers={})=>fetch(base+'/api/inquiry',{method:'POST',headers:{'Content-Type':'application/json',...headers},body:JSON.stringify(body)});
assert.equal((await post({})).status,400);
const valid={name:'Test',email:'test@example.com',type:'Hotel Photography',details:'A representative hospitality photography commission for testing.'};
assert.equal((await post({...valid,website:'bot.example'})).status,400);
assert.equal((await post(valid,{Origin:'https://another-site.com'})).status,403);
// Do not send a valid request here: a configured endpoint would create a real inquiry.
console.log('PASS 404, validation, honeypot, and origin protection');
