var hindi,jt;




  async function jk() {
    const j= await fetch(" https://icanhazdadjoke.com/slack");
     jt=await j.json();
      jt=await jt.attachments[0].text;
      //console.log(jt);
  
    
  const apiKey = '11|FdcdHp2U9ffmcyq0MJ4VWjOHBNyb0luU5URo5ScX2295dcfd';
const url = 'https://translator.sandarnecreations.com/api/translate';

const headers = {
  'Authorization': `Bearer ${apiKey}`,
  'Content-Type': 'application/json',
};

const body = {
  'text': jt,
  'from': 'auto',
  'to': 'hi',
};

var res=await fetch(url, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(body),
});
  res=await res.json();
  hindi=res.translation;
 const speeche = document.getElementById('spe');
    const speechh = document.getElementById('sph');
    speechh.textContent=hindi;
    speeche.textContent=jt;



}

  