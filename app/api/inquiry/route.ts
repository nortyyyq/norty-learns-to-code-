import {NextRequest,NextResponse} from 'next/server';
export async function POST(req:NextRequest){
 const origin=req.headers.get('origin');if(origin&&origin!==req.nextUrl.origin)return NextResponse.json({error:'Invalid request origin.'},{status:403});
 if(Number(req.headers.get('content-length'))>16000)return NextResponse.json({error:'Your message is too long.'},{status:413});
 let data:Record<string,unknown>;try{data=await req.json()}catch{return NextResponse.json({error:'Invalid request.'},{status:400})}
 if(typeof data.website==='string'&&data.website)return NextResponse.json({error:'Submission could not be accepted.'},{status:400});
 const fields=['name','email','brand','location','type','timeline','details'];
 if(fields.some(k=>data[k]!==undefined&&typeof data[k]!=='string'))return NextResponse.json({error:'Please check your form entries.'},{status:400});
 const text=(key:string)=>String(data[key]||'').trim();
 if(!text('name')||text('name').length>120||!/^\S+@\S+\.\S+$/.test(text('email'))||text('email').length>254||!text('type')||text('details').length<20||text('details').length>5000||['brand','location','timeline','type'].some(k=>text(k).length>180))return NextResponse.json({error:'Please enter a valid name, email, project type, and at least 20 characters describing your project.'},{status:400});
 const endpoint=process.env.INQUIRY_WEBHOOK_URL;
 if(!endpoint)return NextResponse.json({error:'Inquiry delivery is not connected yet. No message has been sent. Please use the contact email if one is listed.'},{status:503});
 try{if(new URL(endpoint).protocol!=='https:')throw new Error('HTTPS required');const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json',...(process.env.INQUIRY_WEBHOOK_TOKEN?{Authorization:`Bearer ${process.env.INQUIRY_WEBHOOK_TOKEN}`}:{})},body:JSON.stringify(Object.fromEntries(fields.map(k=>[k,text(k)]))),signal:AbortSignal.timeout(10000)});if(!response.ok)throw new Error('Delivery failed');return NextResponse.json({success:true})}catch{return NextResponse.json({error:'The delivery service is currently unavailable. Your inquiry was not confirmed. Please try again later.'},{status:502})}
}
