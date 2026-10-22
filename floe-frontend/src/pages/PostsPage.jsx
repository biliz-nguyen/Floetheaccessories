import PostCard from "../components/common/PostCard.jsx"
import { posts } from "../data/posts.js"
import { getOrderedPosts } from "../utils/postStatus.js"

export default function PostsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pinkDeep">Chuyện nhà Floé</p>
        <h1 className="mt-4 text-5xl font-display text-ink md:text-7xl">Những cuộc hẹn nhỏ.</h1>
        <p className="mt-5 text-base leading-8 text-inkMuted md:text-lg">
          Hoạt động, quà tặng và những khoảnh khắc cùng Floé. Lưu lại lịch hẹn bạn yêu thích
          và xem lại những chương trình đã qua.
        </p>
      </header>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {getOrderedPosts(posts).map((post) => <PostCard key={post.slug} post={post} />)}
      </div>
    </div>
  )
}
