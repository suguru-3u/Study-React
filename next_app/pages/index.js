const h1 = {
    fontSize:'72pt',
    fontWeight:'bold',
    textAlign:'right',
    letterSpacing:'-8px',
    color:'#0f0f0',
    margin:'-40px 0px'
}

const p = {
    fontSize:'16pt',
    color:'#666',
    margin:'0px'
}

export default () => <div>
    <style jsx>{`
         h1{
            font-size:68pt;
            font-weight:bold;
            text-align:right;
            letter-spacing:-8px;
            color:#0f0f0;
            margin:-32px 0px;
        }
        p{
            font-size:16pt;
            color:#666;
            margin:0px;
        }
    `}</style>
    <h1>Next.js</h1>
    <p>Welcome to next</p>
</div>