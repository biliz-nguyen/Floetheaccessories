export const approvedPrices = {
  novaKeychain: 49000,
  eluneWaistChain: 49000
}

export const packagingCopy = {
  included: "Đã bao gồm bao bì Standard (Hộp Floé, tem niêm phong, card cảm ơn).",
  premiumNote: "Có thể nâng cấp bao bì premium từ 10.000 ₫."
}

export const careInstructionsDefault =
  "Tránh tiếp xúc trực tiếp với nước hoa, cồn, mỹ phẩm và chất tẩy rửa mạnh. Dùng khăn khô mềm lau nhẹ sau khi sử dụng. Cất trong hộp Floé hoặc túi zip kín khí để giữ độ trong của hoa resin và độ sáng của kim loại."

export const orderingGuideDefault =
  "Chọn số lượng, nhập ghi chú yêu cầu riêng (nếu có), bấm 'Sao chép thông tin đặt hàng' và gửi qua Messenger fanpage Floé để được tư vấn kích thước và chốt đơn nhanh nhất."

export const products = [
  {
    id: "nova-keychain",
    code: "MK-01",
    name: "Nova Keychain",
    category: "keychain",
    categoryLabel: "Móc khóa",
    price: approvedPrices.novaKeychain,
    packagingIncluded: "Standard",
    coverImage: "/media/products/keychain/nova-keychain-cover.webp",
    gallery: [
      "/media/products/keychain/nova-keychain-cover.webp",
      "/media/products/keychain/nova-keychain-blue-detail.webp",
      "/media/products/keychain/nova-keychain-blue-bag.webp",
      "/media/products/keychain/nova-keychain-red-studio.webp",
      "/media/products/keychain/nova-keychain-red-bag.webp",
      "/media/products/keychain/nova-keychain-white-bag.webp",
      "/media/products/keychain/nova-keychain-trio-studio.webp"
    ],
    imageAlt: "Nova Keychain của Floé với hoa tím xanh và chi tiết dây trang trí",
    materials: "Hoa resin thủ công phủ bóng, hạt cườm ngọc trai nhân tạo, khoen và dây kim loại chống gỉ nhẹ.",
    colors: "Tím xanh ombre, bạc sáng",
    dimensions: "Dài tổng thể ~11 cm (bao gồm móc khoen)",
    styleOptions: "Khoen cài chìa khóa / Móc càng cua gắn quai túi",
    isTrialProduct: true,
    catalogStatus: "current",
    badgeLabel: "Mẫu thử nghiệm EXE201",
    materialNote: "Móc khóa hoa thủ công với sắc tím xanh và chi tiết kim loại.",
    careInstructions: careInstructionsDefault,
    packaging: packagingCopy.included,
    orderingInstructions: orderingGuideDefault,
    socialUrl: ""
  },
  {
    id: "pink-flower-keychain",
    code: "MK-02",
    name: "Móc khóa hoa hồng",
    category: "keychain",
    categoryLabel: "Móc khóa",
    price: approvedPrices.novaKeychain,
    packagingIncluded: "Standard",
    coverImage: "/media/products/keychain/pink-keychain-cover.webp",
    gallery: [
      "/media/products/keychain/pink-keychain-cover.webp",
      "/media/products/keychain/pink-keychain-card.webp"
    ],
    imageAlt:
      "Móc khóa hoa hồng Floé màu hồng phấn, điểm xuyết ngọc trai và chi tiết dây kim loại trên túi trắng",
    materials: "Hoa resin cánh hồng phấn thủ công, hạt ngọc trai nhân tạo, chi tiết charm xích kim loại.",
    colors: "Hồng phấn pastel, trắng ngọc trai, bạc",
    dimensions: "Dài tổng thể ~10.5 cm",
    styleOptions: "Móc càng cua linh hoạt cài túi xách hoặc ốp điện thoại",
    isTrialProduct: false,
    catalogStatus: "current",
    badgeLabel: "BST Hiện tại",
    materialNote:
      "Thiết kế hoa hồng thủ công với sắc hồng phấn, bề mặt bóng cùng chi tiết ngọc trai và dây kim loại tạo điểm nhấn cá tính.",
    careInstructions: careInstructionsDefault,
    packaging: packagingCopy.included,
    orderingInstructions: orderingGuideDefault,
    socialUrl: ""
  },
  {
    id: "nova-keychain-brown",
    code: "MK-03",
    name: "Nova Keychain",
    category: "keychain",
    categoryLabel: "Móc khóa",
    price: approvedPrices.novaKeychain,
    packagingIncluded: "Standard",
    coverImage: "/media/products/keychain/keychain-02-cover.webp",
    gallery: [
      "/media/products/keychain/keychain-02-cover.webp",
      "/media/products/keychain/keychain-02-detail-01.webp",
      "/media/products/keychain/keychain-02-detail-02.webp"
    ],
    imageAlt:
      "Nova Keychain của Floé hình hoa tông nâu tím, điểm xuyết hạt ngọc và dây kim loại trên túi trắng",
    materials: "Hoa resin màu nâu tím trầm, hạt ngọc acrylic cao cấp, xích hợp kim kim loại.",
    colors: "Nâu tím mauve trầm, ánh kim cổ điển",
    dimensions: "Dài tổng thể ~11.5 cm",
    styleOptions: "Móc càng cua bản lớn, thích hợp cài balo, túi canvas hoặc thắt lưng",
    isTrialProduct: false,
    catalogStatus: "current",
    badgeLabel: "BST Hiện tại",
    materialNote:
      "Thiết kế hoa thủ công mang tông nâu tím trầm, kết hợp hạt ngọc và chi tiết kim loại để tạo vẻ nổi bật, cá tính.",
    careInstructions: careInstructionsDefault,
    packaging: packagingCopy.included,
    orderingInstructions: orderingGuideDefault,
    socialUrl: ""
  },
  {
    id: "elune-waist-chain",
    code: "VE-01",
    name: "Elune Waist Chain",
    category: "waist",
    categoryLabel: "Vòng eo",
    price: approvedPrices.eluneWaistChain,
    packagingIncluded: "Standard",
    coverImage: "/media/products/waist/elune-waist-chain-cover.webp",
    gallery: [
      "/media/products/waist/elune-waist-chain-cover.webp",
      "/media/products/waist/elune-waist-chain-detail-01.webp",
      "/media/products/waist/elune-waist-chain-detail-02.webp",
      "/media/products/waist/elune-waist-chain-detail-03.webp"
    ],
    imageAlt: "Elune Waist Chain của Floé với hoa hồng nhạt và dây hạt thả",
    materials: "Hoa resin hồng nhạt đổ khuôn thủ công, chuỗi xích kim loại đa tầng, hạt ngọc trai nhỏ và khóa cài.",
    colors: "Hồng nhạt, ánh bạc, ngọc trai",
    dimensions: "Chiều dài dây chính 75 cm + 15 cm xích nối mở rộng (hỗ trợ tùy chỉnh số đo eo riêng)",
    styleOptions: "Đeo ôm eo với croptop / Thả trễ nhẹ trên nền váy suông hoặc quần cạp trễ",
    isTrialProduct: false,
    catalogStatus: "current",
    badgeLabel: "BST Hiện tại",
    materialNote: "Vòng eo hoa hồng nhạt với dây hạt thả và điểm nhấn mềm.",
    careInstructions: careInstructionsDefault,
    packaging: packagingCopy.included,
    orderingInstructions: orderingGuideDefault,
    socialUrl: ""
  }
]

// Ghi nhận lịch sử sản phẩm thử nghiệm EXE201 đã ngừng cung cấp (Discontinued Trial Products)
// Phù hợp với yêu cầu: "The EXE201 report includes Nova Keychain and Lunara Choker, while the current website catalog includes keychains and Elune Waist Chain. Do not automatically add discontinued products. Clearly distinguish historical trial products from the current catalog when appropriate."
export const historicalTrialProducts = [
  {
    id: "lunara-choker",
    code: "DC-01",
    name: "Lunara Choker",
    category: "necklace",
    categoryLabel: "Dây chuyền",
    status: "discontinued",
    statusLabel: "Mẫu thử nghiệm đã ngừng sản xuất",
    reportNote: "Mẫu thử nghiệm ban đầu trong báo cáo EXE201; hiện không nằm trong catalog mở bán chính thức.",
    coverImage: "/media/products/necklace/lunara-choker-studio.webp",
    gallery: [
      "/media/products/necklace/lunara-choker-studio.webp",
      "/media/products/necklace/lunara-choker-detail.webp",
      "/media/products/necklace/lunara-choker-model.webp",
      "/media/products/necklace/lunara-choker-lookbook.webp"
    ]
  }
]

export const productContentStatus = {
  emptyTitle: "Bộ sưu tập đầu tiên đang dần hé nở.",
  emptyDescription:
    "Theo dõi các mẫu mới nhất và khám phá các dòng phụ kiện của Floé."
}
