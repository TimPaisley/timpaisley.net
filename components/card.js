import Date from './date'

export default function Card({ post }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-full">
      <img className="w-full" src="/images/mountain.jpg" alt="Mountain" />
      <div className="px-6 py-4">
        <div className="text-sm text-blue-800">{post.category}</div>
        <div className="font-bold text-xl mb-2">{post.title}</div>
        <p className="text-gray-700 text-base">
          {post.description}
        </p>

        <div className="mt-4 text-gray-400">
          <Date dateString={post.date} />
        </div>
      </div>
    </div>
  )
}