import { Link } from "react-router-dom"
import { approvedPrices } from "../../data/products.js"
import { formatVnd } from "../../utils/formatCurrency.js"

export default function TheFloeCollection() {
  const priceFormatted = formatVnd(approvedPrices.novaKeychain)

  const items = [
    {
      id: "pink-flower-keychain",
      code: "MK-02",
      name: "Móc khóa hoa hồng",
      badge: "BST Hiện tại",
      price: priceFormatted,
      categoryLabel: "Móc khóa",
      image: "/media/products/keychain/pink-keychain-cover.webp",
      imageAlt: "Móc khóa hoa hồng Floé đính ngọc trai phối quai túi phao thắt nơ",
      to: "/shop?category=keychain"
    },
    {
      id: "nova-keychain-brown",
      code: "MK-03",
      name: "Nova Keychain (Nâu tím)",
      badge: "BST Hiện tại",
      price: priceFormatted,
      categoryLabel: "Móc khóa",
      image: "/media/products/keychain/keychain-02-cover.webp",
      imageAlt: "Nova Keychain tông nâu tím mauve trầm trên túi phao trắng",
      to: "/shop?category=keychain"
    },
    {
      id: "elune-waist-chain",
      code: "VE-01",
      name: "Elune Waist Chain",
      badge: "Dòng vòng eo",
      price: formatVnd(approvedPrices.eluneWaistChain),
      categoryLabel: "Vòng eo",
      image: "/media/products/waist/elune-waist-chain-cover.webp",
      imageAlt: "Vòng eo hoa hồng nhạt Elune Waist Chain đeo trên váy pastel",
      to: "/shop?category=waist"
    },
    {
      id: "lunara-choker",
      code: "DC-01",
      name: "Lunara Choker (Lưu trữ)",
      badge: "Mẫu thử nghiệm EXE201",
      price: "Lưu trữ thiết kế",
      categoryLabel: "Dây chuyền",
      image: "/media/products/necklace/lunara-choker-studio.webp",
      imageAlt: "Dây chuyền hoa lan Lunara Choker thử nghiệm của Floé",
      to: "/shop"
    }
  ]

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      {/* Editorial Section Header */}
      <div className="flex flex-col gap-4 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pinkDeep">
            THE FLOÉ COLLECTION • PHỤ KIỆN HOA THỦ CÔNG
          </p>
          <h2 className="mt-3 text-4xl font-display text-ink md:text-5xl lg:text-6xl">
            The Floé Collection
          </h2>
          <p className="mt-4 text-base leading-7 text-inkMuted md:text-lg md:leading-8">
            Những đóa hoa resin đổ khuôn thủ công, kết hợp ngọc trai nhân tạo và chi tiết kim loại cá tính — từng tác phẩm đều mang dấu ấn duy nhất dành cho phong cách của bạn.
          </p>
        </div>

        <div className="shrink-0">
          <Link
            to="/shop"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-paper transition duration-300 hover:bg-pinkDeep"
          >
            Xem tất cả trong Catalog →
          </Link>
        </div>
      </div>

      {/* Asymmetric Editorial Grid */}
      <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Large Featured Product Card (Left / 7 cols) */}
        <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-white shadow-print lg:col-span-7">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-petal sm:aspect-[16/13] lg:aspect-auto lg:h-[34rem]">
            <img
              src="/media/products/keychain/nova-keychain-cover.webp"
              alt="Nova Keychain của Floé với hoa tím xanh ombre và chi tiết dây trang trí trên túi da"
              className="h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent pointer-events-none" />

            {/* Badges on Hero Image */}
            <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/30 bg-white/90 px-3 py-1 text-xs font-semibold text-ink shadow-sm backdrop-blur-xs">
                Mẫu thử nghiệm EXE201
              </span>
              <span className="rounded-full bg-pinkDeep px-3 py-1 text-xs font-semibold text-paper shadow-sm">
                Mẫu tiêu biểu
              </span>
            </div>

            {/* Overlay Info on Hero Image */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-paperMuted">
                MÓC KHÓA THỦ CÔNG • MÃ MK-01
              </p>
              <h3 className="mt-2 text-3xl font-display leading-tight text-paper sm:text-4xl md:text-5xl">
                Nova Keychain
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-6 text-paperMuted/90 sm:text-base">
                Cánh hoa resin chuyển sắc tím xanh tự nhiên, đính ngọc trai trung tâm, khuyên kim loại bấm phá cách và dây cườm buông rủ tinh tế.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <span className="text-2xl font-bold text-paper font-display">
                  {priceFormatted}
                </span>
                <span className="text-xs text-paperMuted">
                  (Đã gồm bao bì Standard & tem niêm phong)
                </span>
                <Link
                  to="/shop?category=keychain"
                  className="ml-auto inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-ink shadow-md transition duration-300 hover:bg-pinkSoft"
                >
                  Xem chi tiết mẫu →
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Supporting Products Grid (Right / 5 cols, 2x2 grid) */}
        <div className="grid grid-cols-2 gap-4 lg:col-span-5 lg:gap-5">
          {items.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-white shadow-print transition hover:-translate-y-1"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-petal">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-2.5 top-2.5 z-10 rounded-full border border-pinkDeep/15 bg-white/95 px-2.5 py-0.5 text-[10px] font-semibold text-pinkDeep shadow-xs">
                  {item.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-3 sm:p-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-inkMuted">
                    {item.categoryLabel} • {item.code}
                  </p>
                  <h4 className="mt-1 text-sm font-semibold text-ink line-clamp-1 sm:text-base">
                    {item.name}
                  </h4>
                  <p className="mt-1 text-xs font-semibold text-pinkDeep sm:text-sm">
                    {item.price}
                  </p>
                </div>

                <Link
                  to={item.to}
                  className="mt-3 inline-flex min-h-9 w-full items-center justify-center rounded-lg border border-line bg-paper px-2.5 text-xs font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-paper"
                >
                  Xem trong catalog
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
