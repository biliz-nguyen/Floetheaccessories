import { Link, useParams } from "react-router-dom"
import { posts } from "../data/posts.js"
import { contact, externalLinkProps } from "../data/siteContent.js"
import { getPostStatus } from "../utils/postStatus.js"
import NotFoundPage from "./NotFoundPage.jsx"

export default function PostPage() {
  const { slug } = useParams()
  const post = posts.find((entry) => entry.slug === slug)
  if (!post) return <NotFoundPage />

  const status = getPostStatus(post)

  return (
    <article className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-16">
      <Link to="/posts" className="inline-flex min-h-11 items-center text-sm font-semibold text-pinkDeep hover:underline">
        ← Tất cả bài viết
      </Link>
      <header className="mt-5 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-pinkDeep">{post.category}</p>
        <h1 className="mt-4 text-5xl font-display leading-tight text-ink md:text-6xl">{post.title}</h1>
        <p className="mt-5 text-sm leading-7 text-inkMuted">{post.dateLabel}</p>
      </header>

      <div className="mt-7 rounded-2xl border border-line bg-paperWarm px-5 py-4 text-sm leading-7" role="note">
        <p className="font-semibold text-ink">{status.label}</p>
        <p className="mt-1 text-inkMuted">
          {status.id === "ended"
            ? "Bài viết được lưu để bạn xem lại. Thời gian chương trình đã kết thúc; các ưu đãi trong bài không còn áp dụng."
            : "Hoạt động theo lịch dự kiến. Theo dõi Fanpage Floé để xác nhận thông tin và thể lệ mới nhất trước khi tham gia."}
        </p>
      </div>

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div className="overflow-hidden rounded-2xl border border-line bg-petal">
          <img src={post.image} alt={post.imageAlt} className="max-h-[48rem] w-full object-contain" />
        </div>
        <div>
          <p className="text-base leading-8 text-inkMuted md:text-lg">{post.intro}</p>
          {post.sections.map((section) => (
            <section key={section.title} className="mt-8">
              <h2 className="text-3xl font-display text-ink">{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-base leading-8 text-inkMuted">{paragraph}</p>
              ))}
              {section.items && (
                <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-8 text-inkMuted marker:text-pinkDeep">
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </section>
          ))}
          <div className="mt-10 border-t border-line pt-6">
            <p className="text-sm leading-7 text-inkMuted">
              Theo dõi Floé để xem bài đăng chương trình và trao đổi trực tiếp với chúng mình.
            </p>
            <a
              href={contact.facebookUrl}
              className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-paper transition hover:bg-pinkDeep"
              {...externalLinkProps}
            >
              {status.id === "ended" ? "Theo dõi hoạt động mới" : "Xem cập nhật trên Fanpage"}
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
