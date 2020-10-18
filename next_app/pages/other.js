import Link from 'next/link'

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
    <h1 style={h1}>Next.js</h1>
    <p style={p}>This is Other page</p>
    <hr />
    <div>
        <Link href="/">
            <a>Go to index</a>
        </Link>
    </div>
</div>