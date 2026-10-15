const crypto=require('crypto');
// Linkline Premium keys: LL-AAAA-BBBB-SSSS where SSSS is an HMAC of AAAABBBB with LL_PRO_SECRET (server only).
module.exports=(req,res)=>{
  const s=process.env.LL_PRO_SECRET;res.setHeader('Cache-Control','public, max-age=300');
  if(!s)return res.status(503).json({ok:false,error:'not configured'});
  const k=String((req.query&&req.query.k)||'').toUpperCase().trim();
  const m=/^LL-([A-Z0-9]{4})-([A-Z0-9]{4})-([A-Z0-9]{4})$/.exec(k);
  if(!m)return res.status(200).json({ok:false});
  const h=crypto.createHmac('sha256',s).update(m[1]+m[2]).digest().readUInt32BE(0)%1679616;
  const want=h.toString(36).toUpperCase().padStart(4,'0');
  res.status(200).json({ok:crypto.timingSafeEqual(Buffer.from(want),Buffer.from(m[3]))});
};
