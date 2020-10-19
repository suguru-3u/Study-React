import Link from 'next/link'
import Layout from '../components/Layout'

export default () =>(
    <Layout header="Next" title="Top page">
    <hr />
    <div>
        <Link href="/">
            <a>Go to index</a>
        </Link>
    </div>
    </Layout>
);