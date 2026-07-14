export const customProcess = [
  {
    id: "share-idea",
    number: "01",
    action: "Chia sẻ ý tưởng",
    customerPrepares: "Loại phụ kiện, màu yêu thích, vibe và dịp sử dụng.",
    floeReturns: "Floé lắng nghe và gợi ý hướng thiết kế phù hợp."
  },
  {
    id: "sketch",
    number: "02",
    action: "Floé phác thảo",
    customerPrepares: "Hình ảnh tham khảo nếu có.",
    floeReturns: "Bản phác ý tưởng hoặc mô tả hướng làm rõ hơn."
  },
  {
    id: "materials",
    number: "03",
    action: "Chọn chất liệu và màu sắc",
    customerPrepares: "Tông màu, cảm giác muốn thể hiện và chi tiết cần tránh.",
    floeReturns: "Gợi ý phối màu, charm, hạt hoặc chi tiết phù hợp."
  },
  {
    id: "handmade",
    number: "04",
    action: "Hoàn thiện thủ công",
    customerPrepares: "Xác nhận hướng thiết kế cuối cùng với Floé.",
    floeReturns: "Thiết kế được làm bằng tay theo brief đã thống nhất."
  },
  {
    id: "deliver",
    number: "05",
    action: "Giao thiết kế đến bạn",
    customerPrepares: "Thông tin nhận hàng khi Floé xác nhận đơn qua kênh tư vấn.",
    floeReturns: "Món phụ kiện hoàn thiện cùng hướng dẫn trao đổi trực tiếp."
  }
]

export const ideaBriefFields = [
  "Loại phụ kiện",
  "Màu yêu thích",
  "Vibe/phong cách",
  "Dịp sử dụng",
  "Hình ảnh tham khảo"
]

export const ideaBriefText = ideaBriefFields
  .map((field) => `${field}: `)
  .join("\n")
