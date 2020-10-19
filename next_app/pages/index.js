import Link from 'next/link'
import Layout from '../components/Layout'

export default () =>(
    <Layout header="Next" title="Top page">
    <hr />
    <div>
        <Link href="/other">
            <a>Go to Other</a>
        </Link>
    </div>
    </Layout>
);