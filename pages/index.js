import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'
import Card from '../components/card'
import { getSortedPostsData } from '../lib/posts'
import Socials from '../components/socials'

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Tim Paisley | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h2 className="text-center px-8 mb-4 text-lg">
        I'm a developer/designer working in Wellington, NZ.
      </h2>

      <ul className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {allPostsData.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a className="h-full"><Card post={post} /></a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}