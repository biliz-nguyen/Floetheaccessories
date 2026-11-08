import { Link } from "react-router-dom"
import { activeProducts, approvedPrices } from "../../data/products.js"
import { formatVnd } from "../../utils/formatCurrency.js"

export default function TheFloeCollection() {
  const priceFormatted = formatVnd(approvedPrices.novaKeychain)

  const supportingCards = [
    {
      id: "pink-rose-charm",
      code: "MK-02",
      name: "Móc khóa hoa hồng phấn",
      badge: "BST Hiện tại",
      price: priceFormatted,
      categoryLabel: "Móc khóa & Bag Charm",
      image: "/media/products/keychain/pink-keychain-cover.webp",
      imageAlt: "Móc khóa hoa hồng Floé đính ngọc trai phối quai túi phao thắt nơ",
      description: "Cánh hoa hồng đa tầng mềm mại đính ngọc trai chìm và charm nơ bạc.",
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
      description: "Hoa hồng pastel viền ren trắng kết hợp chuỗi xích kim loại đa tầng tôn dáng.",
      to: "/shop?category=waist"
    },
    {
      id: "lunara-choker-archive",
      code: "DC-01",
      name: "Lunara Choker",
      badge: "Lưu trữ thiết kế EXE201",
      price: "Lưu trữ thiết kế",
      categoryLabel: "Dây chuyền / Vòng cổ",
      image: "/media/products/necklace/lunara-choker-studio.webp",
      imageAlt: "Dây chuyền hoa lan Lunara Choker thử nghiệm của Floé",
      description: "Mẫu thử nghiệm vòng cổ hoa lan viền ren satin và chuỗi cườm tím lavender.",
      to: "/shop?view=archive"
    },
    {
      id: "custom-design-floe",
      code: "CUSTOM",
      name: "Thiết kế theo yêu cầu",
      badge: "Cá nhân hóa",
      price: "Tư vấn riêng",
      categoryLabel: "Dịch vụ độc bản",
      image: "/media/brand/custom-design.webp",
      imageAlt: "Dịch vụ thiết kế phụ kiện handmade riêng của Floé",
      description: "Biến đóa hoa mang câu chuyện của bạn thành phụ kiện độc bản theo số đo riêng.",
      to: "/custom"
    }
  ]

  const novaProduct = activeProducts.find((p) => p.designId === "nova-keychain")

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      {/* Editorial Section Header */}
      <div className="flex flex-col gap-4 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pinkDeep">
            THE FLOÉ COLLECTION • THIẾT KẾ ĐỘC BẢN
          </p>
          <h2 className="mt-3 text-4xl font-display text-ink md:text-5xl lg:text-6xl">
            The Floé Collection
          </h2>
          <p className="mt-4 text-base leading-7 text-inkMuted md:text-lg md:leading-8">
            Mỗi thiết kế đại diện cho một cấu trúc tạo hình hoa độc bản — từ móc khóa lan resin đính khuyên cá tính đến vòng eo đa tầng thanh lịch. Từng tác phẩm mang dấu ấn phong cách riêng.
          </p>
        </div>

        <div className="shrink-0">
          <Link
            to="/shop"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-paper transition duration-300 hover:bg-pinkDeep"
          >
            Khám phá trọn bộ Catalog →
          </Link>
        </div>
      </div>

      {/* Asymmetric Editorial Grid */}
      <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Large Featured Product Card (Left / 7 cols) */}
        <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-white shadow-print lg:col-span-7">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-petal sm:aspect-[16/13] lg:aspect-auto lg:h-[35rem]">
            <img
              src="/media/products/keychain/nova-keychain-cover.webp"
              alt="Nova Keychain của Floé với hoa tím xanh ombre và chi tiết dây trang trí trên túi da"
              className="h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent pointer-events-none" />

            {/* Badges on Hero Image */}
            <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/30 bg-white/90 px-3 py-1 text-xs font-semibold text-ink shadow-sm backdrop-blur-xs">
                Mẫu thử nghiệm EXE201
              </span>
              <span className="rounded-full bg-pinkDeep px-3 py-1 text-xs font-semibold text-paper shadow-sm">
                4 Phiên bản màu
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
                Cánh hoa lan resin đổ khuôn thủ công đính khuyên bấm mắt cáo, charm an toàn kim loại, nhụy ngọc trai và chuỗi cườm buông rủ mang phong cách Y2K tinh tế.
              </p>

              {/* Color variant dots preview */}
              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs text-paperMuted">Các phiên bản:</span>
                {novaProduct?.variants.map((v) => (
                  <span
                    key={v.id}
                    title={v.name}
                    className="inline-block h-4 w-4 rounded-full border border-white/40 shadow-xs"
                    style={{ backgroundColor: v.colorCode }}
                  />
                ))}
                <span className="text-xs text-paperMuted/80 ml-1">
                  (Tím xanh, Nâu tím, Đỏ, Trắng)
                </span>
              </div>

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
                  Xem chi tiết & Chọn màu →
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Supporting Distinct Designs Grid (Right / 5 cols, 2x2 grid) */}
        <div className="grid grid-cols-2 gap-4 lg:col-span-5 lg:gap-5">
          {supportingCards.map((item) => (
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

              <div className="flex flex-1 flex-col justify-between p-3.5 sm:p-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-inkMuted">
                    {item.categoryLabel}
                  </p>
                  <h4 className="mt-1 text-sm font-semibold text-ink line-clamp-1 sm:text-base">
                    {item.name}
                  </h4>
                  <p className="mt-0.5 text-xs text-inkMuted line-clamp-1">
                    {item.description}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-pinkDeep sm:text-sm">
                    {item.price}
                  </p>
                </div>

                <Link
                  to={item.to}
                  className="mt-3 inline-flex min-h-9 w-full items-center justify-center rounded-lg border border-line bg-paper px-2.5 text-xs font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-paper"
                >
                  Xem chi tiết
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
