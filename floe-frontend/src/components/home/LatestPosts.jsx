import { Link } from "react-router-dom"
import PostCard from "../common/PostCard.jsx"
import { posts } from "../../data/posts.js"
import { getOrderedPosts } from "../../utils/postStatus.js"

export default function LatestPosts() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pinkDeep">Chuyện nhà Floé</p>
          <h2 className="mt-4 text-5xl font-display text-ink md:text-6xl">Một chút Floé, mỗi ngày.</h2>
          <p className="mt-4 text-base leading-7 text-inkMuted">Những cuộc hẹn, món quà và khoảnh khắc nhỏ cùng bạn.</p>
        </div>
        <Link to="/posts" className="inline-flex min-h-12 w-fit shrink-0 items-center rounded-full border border-line px-6 text-sm font-semibold transition hover:bg-petal">
          Xem tất cả bài viết ↗
        </Link>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {getOrderedPosts(posts).slice(0, 2).map((post) => <PostCard key={post.slug} post={post} />)}
      </div>
    </section>
  )
}
