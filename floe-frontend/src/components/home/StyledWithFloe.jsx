import { Link } from "react-router-dom"
import { contact, externalLinkProps } from "../../data/siteContent.js"

export default function StyledWithFloe() {
  const editorialCards = [
    {
      id: "cafe-city-chic",
      image: "/media/lifestyle/styled-cafe-lookbook.webp",
      imageAlt: "Người mẫu diện outfit dạo phố cùng túi da metallic gắn móc khóa hoa lan đỏ Floé tại quán cafe",
      tag: "Everyday Muse",
      title: "City Chic & Vintage Accent",
      description:
        "Móc khóa hoa đỏ rực rỡ biến chiếc túi da metallic vintage thành điểm nhấn đầy sức hút cho buổi dạo phố hoặc cafe cuối tuần.",
      stylingTip: "Phối cùng túi da tối màu, denim jeans và áo ôm sáng màu"
    },
    {
      id: "pastel-handbag",
      image: "/media/lifestyle/styled-handbag-blue-orchid.webp",
      imageAlt: "Nova Keychain sắc xanh pastel của Floé phối quai túi xách xanh da trời nhẹ nhàng",
      tag: "Soft Pastels",
      title: "Pastel Harmony on Soft Leather",
      description:
        "Sự hòa quyện dịu mát của sắc lam trên cánh hoa resin cùng chuỗi cườm buông rủ trên nền da túi xanh pastel trang nhã.",
      stylingTip: "Phù hợp với túi kẹp nách mini, túi tote sáng màu hoặc ốp lưng"
    },
    {
      id: "romantic-lace",
      image: "/media/lifestyle/styled-lace-dress-orchid.webp",
      imageAlt: "Người mẫu diện đầm ren trắng thanh lịch kết hợp cùng phụ kiện hoa thủ công Floé",
      tag: "Romantic Bloom",
      title: "Lace Romance & Floral Elegance",
      description:
        "Cánh hoa thủ công mong manh trở thành nét chấm phá đậm chất thơ khi kết hợp cùng váy ren tiểu thư hay những dịp kỷ niệm.",
      stylingTip: "Phối cùng trang phục ren trắng, áo trễ vai hoặc tone cream"
    },
    {
      id: "metallic-contrast",
      image: "/media/lifestyle/styled-handbag-red-orchid.webp",
      imageAlt: "Cận cảnh móc khóa hoa lan đỏ Floé đính khuyên kim loại trên nền túi da",
      tag: "Bold Romance",
      title: "Contrast of Petals & Hardware",
      description:
        "Vẻ đối lập độc đáo giữa sự mềm mại tự nhiên của cánh hoa và nét góc cạnh từ khoen kim loại, khuyên bấm và charm bạc.",
      stylingTip: "Tạo điểm nhấn cá tính cho phong cách Y2K và grunge chic"
    }
  ]

  return (
    <section className="border-t border-line bg-paperWarm/60 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Editorial Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pinkDeep">
            FASHION EDITORIAL • PHỤ KIỆN TRONG ĐỜI THỰC
          </p>
          <h2 className="mt-3 text-4xl font-display text-ink md:text-5xl lg:text-6xl">
            Styled with Floé
          </h2>
          <p className="mt-4 text-base leading-7 text-inkMuted md:text-lg md:leading-8">
            Không chỉ là những đóa hoa trưng bày, phụ kiện Floé đồng hành cùng bạn trong từng outfit xuống phố, nhịp sống thường nhật và trên chiếc túi xách thân thương nhất.
          </p>
        </div>

        {/* Fashion Lookbook Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {editorialCards.map((card, idx) => (
            <article
              key={card.id}
              className={`group flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-white shadow-print transition duration-500 hover:-translate-y-1.5 hover:shadow-lg ${
                idx % 2 === 1 ? "lg:translate-y-4" : ""
              }`}
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-petal">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-ink/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-xs">
                  {card.tag}
                </span>
              </div>

              {/* Editorial Card Content */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="text-xl font-display font-semibold text-ink sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-5 text-inkMuted sm:text-sm sm:leading-6">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-line/70 pt-3.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-pinkDeep">
                    Gợi ý phối đồ
                  </p>
                  <p className="mt-0.5 text-xs text-ink">
                    {card.stylingTip}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Lookbook Callout & Community Connection */}
        <div className="mt-16 rounded-3xl border border-line bg-white p-6 shadow-print md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full bg-petal px-3 py-1 text-xs font-semibold uppercase tracking-wider text-pinkDeep">
                Cùng Floé tỏa sáng
              </span>
              <h3 className="mt-3 text-2xl font-display text-ink sm:text-3xl">
                Bạn đã sẵn sàng phối phụ kiện Floé cùng outfit của mình?
              </h3>
              <p className="mt-2 text-sm leading-6 text-inkMuted">
                Chia sẻ hình ảnh chiếc túi xách hay bộ cánh được điểm xuyết bởi Floé qua Fanpage để cùng xuất hiện trong lookbook cộng đồng nhé!
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-ink px-6 text-sm font-semibold text-paper transition hover:bg-pinkDeep"
              >
                Chọn phụ kiện trong Shop →
              </Link>
              <a
                href={contact.facebookUrl}
                {...externalLinkProps}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-line bg-paper px-6 text-sm font-semibold text-ink transition hover:bg-petal"
              >
                Ghé thăm Facebook Floé ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
