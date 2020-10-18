import Link from 'next/link'
import style from '../static/Style'

export default () => <div>
    {style}
    <h1>Next.js</h1>
    <p>Welcome to next</p>
    <hr />
    <div>
        <Link href="/other">
            <a>Go to Other</a>
        </Link>
    </div>
</div>