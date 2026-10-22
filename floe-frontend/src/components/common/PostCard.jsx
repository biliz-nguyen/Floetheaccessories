import { Link } from "react-router-dom"
import { getPostStatus } from "../../utils/postStatus.js"

export default function PostCard({ post }) {
  const status = getPostStatus(post)

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-print">
      <Link to={`/posts/${post.slug}`} className="group block bg-petal" tabIndex={-1} aria-hidden="true">
        <img
          src={post.image}
          alt=""
          className="aspect-square w-full object-contain transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
          width="600"
          height="600"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <span className="text-pinkDeep">{post.category}</span>
          <span className={`rounded-full px-3 py-1 ${status.id === "ended" ? "bg-paperWarm text-inkMuted" : "bg-mint text-ink"}`}>
            {status.label}
          </span>
        </div>
        <p className="mt-3 text-xs leading-5 text-inkMuted">{post.dateLabel}</p>
        <h2 className="mt-3 text-3xl font-display leading-tight text-ink">
          <Link to={`/posts/${post.slug}`} className="transition hover:text-pinkDeep">
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 text-sm leading-7 text-inkMuted">{post.excerpt}</p>
        <Link
          to={`/posts/${post.slug}`}
          className="mt-auto inline-flex min-h-12 w-fit items-center gap-2 pt-5 text-sm font-semibold text-pinkDeep hover:underline"
          aria-label={`Đọc bài: ${post.title}`}
        >
          Đọc bài viết <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  )
}
