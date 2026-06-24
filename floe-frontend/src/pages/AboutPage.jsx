import { Link } from "react-router-dom"

const values = [
  {
    icon: "✦",
    title: "Handcrafted with intention",
    desc: "Mỗi sản phẩm của FLOÉ được hoàn thiện thủ công. Không hàng loạt, không vội vã — chỉ có sự tỉ mỉ trong từng đường nét."
  },
  {
    icon: "◈",
    title: "Limited, always",
    desc: "Chúng mình ra mắt theo batch nhỏ hàng tuần. Không phải để tạo khan hiếm nhân tạo — mà vì chất lượng cần thời gian."
  },
  {
    icon: "❋",
    title: "Style is personal",
    desc: "Không có một công thức duy nhất cho vẻ đẹp. FLOÉ cung cấp những mảnh ghép — bạn tự chọn cách kể chuyện của mình."
  }
]

const timeline = [
  { year: "2023", event: "Ý tưởng bắt đầu từ một buổi chiều ở xưởng làm gốm — và câu hỏi: 'Tại sao phụ kiện đẹp lại phải đắt đến vậy?'" },
  { year: "Q1 2024", event: "Nguyên mẫu đầu tiên ra đời — một chiếc kẹp tóc hình cánh hoa bằng resin và đồng mạ vàng. Cả nhóm đều đeo thử và không muốn trả lại." },
  { year: "Q3 2024", event: "FLOÉ ra mắt Instagram với 0 follower và một bộ ảnh chụp bằng điện thoại. Bộ sưu tập đầu tiên cháy hàng sau 48 giờ." },
  { year: "2025", event: "Mở rộng sang phụ kiện thắt lưng và dây chuyền. Ra mắt cửa hàng online chính thức với hệ thống drop theo tuần." },
  { year: "2026 →", event: "Vẫn đang trên đường. Vẫn làm thủ công. Vẫn chỉ ra batch nhỏ. Vẫn là FLOÉ." }
]

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blush/25 blur-3xl animate-float" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-80 w-80 rounded-full bg-sage/20 blur-3xl animate-float delay-2" />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-black/50 animate-fade-up">Câu chuyện của chúng mình</p>
        <h1 className="mt-4 text-5xl font-display text-black lg:text-7xl animate-fade-up delay-1">
          Từ một câu hỏi nhỏ<br/>đến một thương hiệu.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-black/60 leading-relaxed animate-fade-up delay-2">
          FLOÉ không bắt đầu từ một bản kế hoạch kinh doanh hay một bài pitch deck.
          Nó bắt đầu từ câu hỏi mà bốn người bạn tự hỏi nhau vào một chiều thứ Bảy:
          <em className="text-black/80"> "Tại sao mình không tự làm?"</em>
        </p>
        <div className="mx-auto mt-8 h-px w-20 bg-black/15 animate-fade-up delay-2" />
      </section>

      {/* Story block */}
      <section className="mx-auto max-w-3xl px-6 pb-20 animate-fade-up delay-2">
        <div className="rounded-3xl border border-black/8 bg-white/60 p-10 backdrop-blur-sm shadow-soft">
          <p className="text-base text-black/70 leading-8">
            Chúng mình đều là những người yêu thẩm mỹ — mỗi người theo cách riêng của mình.
            Có người học thiết kế, có người làm tech, có người từng làm content. Nhưng điểm chung là
            tất cả đều cảm thấy thị trường phụ kiện trong nước đang thiếu đi điều gì đó: sự <strong>tinh tế</strong>, 
            sự <strong>có chủ ý</strong>, và quan trọng hơn là — một câu chuyện đáng để kể.
          </p>
          <p className="mt-6 text-base text-black/70 leading-8">
            FLOÉ ra đời không phải để cạnh tranh với các thương hiệu xa xỉ quốc tế. Chúng mình muốn
            tạo ra một thứ gì đó <em>gần hơn</em> — phụ kiện được làm bởi những người trẻ Việt Nam, 
            cho những người trẻ muốn mặc đẹp mỗi ngày mà không cần lý do đặc biệt.
          </p>
          <p className="mt-6 text-base text-black/70 leading-8">
            Tên "FLOÉ" lấy cảm hứng từ chữ <em>fleur</em> (hoa — tiếng Pháp) kết hợp với cách phát âm
            nhẹ nhàng, hiện đại. Dấu É không chỉ là dấu thanh — nó là dấu ấn riêng, một sự khác biệt
            nhỏ nhưng có chủ đích, giống như mỗi chiếc phụ kiện chúng mình làm ra.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <h2 className="mb-12 text-center text-3xl font-display text-black animate-fade-up">Hành trình của FLOÉ</h2>
        <div className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:h-full before:w-px before:bg-black/10">
          {timeline.map((item, i) => (
            <div key={i} className="relative pl-8 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-black/30 bg-sand" />
              <p className="text-[10px] uppercase tracking-[0.35em] text-black/40 mb-1">{item.year}</p>
              <p className="text-sm text-black/70 leading-relaxed">{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-white/40 backdrop-blur-sm border-y border-black/8 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-3xl font-display text-black animate-fade-up">Những gì chúng mình tin vào</h2>
          <div className="grid gap-6 sm:grid-cols-3 animate-fade-up delay-1">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-black/8 bg-white/70 p-7 shadow-soft">
                <span className="text-2xl text-black/40">{v.icon}</span>
                <h3 className="mt-4 text-lg font-display text-black">{v.title}</h3>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-24 text-center animate-fade-up">
        <p className="text-xs uppercase tracking-[0.4em] text-black/40">Sẵn sàng chưa?</p>
        <h2 className="mt-4 text-4xl font-display text-black">Đây là câu chuyện của bạn cũng vậy.</h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-black/60">
          Mỗi chiếc phụ kiện FLOÉ bạn chọn là một chương trong câu chuyện của chính bạn. 
          Hãy bắt đầu từ đây.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/shop"
            className="rounded-full bg-black px-8 py-3 text-xs uppercase tracking-[0.3em] text-white transition hover:bg-black/85"
          >
            Khám phá bộ sưu tập
          </Link>
          <Link
            to="/#team"
            className="rounded-full border border-black/20 px-8 py-3 text-xs uppercase tracking-[0.3em] text-black/70 transition hover:border-black/40"
          >
            Gặp đội ngũ
          </Link>
        </div>
      </section> */}
    </div>
  )
}
