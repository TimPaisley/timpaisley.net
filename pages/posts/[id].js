import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import Header from '../../components/header'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <Header />

      <main>
        <article className="p-4">
          <div class="mb-8">
            <h2 className="font-bold text-2xl mb-2">{postData.title}</h2>
            <time><Date dateString={postData.date} /></time>
          </div>

          <div
            className="prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
      </main>

      <Link href="/">
        <a>
          <div className="p-4 lg:text-xl text-blue-500 hover:text-blue-800">
            ← Back to home
          </div>
        </a>
      </Link>
    </Layout>
  )
}
