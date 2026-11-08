export const approvedPrices = {
  novaKeychain: 49000,
  pinkRoseCharm: 49000,
  eluneWaistChain: 49000,
  lunaraChokerHistorical: 130000
}

export const packagingCopy = {
  included: "Đã bao gồm bao bì Standard (Hộp Floé, tem niêm phong, card cảm ơn).",
  premiumNote: "Có thể nâng cấp bao bì premium từ 10.000 ₫."
}

export const careInstructionsDefault =
  "Tránh tiếp xúc trực tiếp với nước hoa, cồn, mỹ phẩm và chất tẩy rửa mạnh. Dùng khăn khô mềm lau nhẹ sau khi sử dụng. Cất trong hộp Floé hoặc túi zip kín khí để giữ độ trong của hoa resin và độ sáng của kim loại."

export const orderingGuideDefault =
  "Chọn phiên bản màu, số lượng, nhập ghi chú yêu cầu riêng (nếu có), bấm 'Sao chép thông tin đặt hàng' và gửi qua Messenger fanpage Floé để được tư vấn kích thước và chốt đơn nhanh nhất."

/**
 * Danh mục thiết kế thực tế đang mở bán chính thức (Active Orderable Designs).
 * NGUYÊN TẮC QUAN TRỌNG: 1 thiết kế vật lý độc bản = 1 thẻ sản phẩm duy nhất.
 * Các phiên bản màu sắc (variants) được lựa chọn bên trong chi tiết sản phẩm,
 * tuyệt đối không nhân bản thành nhiều thẻ sản phẩm trùng lặp.
 */
export const activeProducts = [
  {
    designId: "nova-keychain",
    id: "nova-keychain",
    code: "MK-01",
    productName: "Nova Keychain",
    name: "Nova Keychain",
    subtitle: "Móc khóa hoa lan resin đính khuyên & cườm thủ công",
    category: "keychain",
    categoryLabel: "Móc khóa",
    price: approvedPrices.novaKeychain,
    packagingIncluded: "Standard",
    availability: "available",
    availabilityLabel: "Có thể đặt hàng",
    isArchived: false,
    isTrialProduct: true,
    catalogStatus: "current",
    badgeLabel: "Mẫu thử nghiệm EXE201",
    coverImage: "/media/products/keychain/nova-keychain-cover.webp",
    imageAlt: "Nova Keychain của Floé với hoa lan tím xanh ombre và chi tiết dây trang trí trên túi da",
    materials:
      "Cánh hoa lan hồ điệp đổ khuôn resin thủ công phủ bóng gương, bấm khoen mắt cáo (grommets) kim loại, đính kim băng an toàn/khuyên xỏ phá cách, hạt ngọc trai trung tâm và các chuỗi cườm hạt ngọc/đá nhân tạo buông rủ.",
    dimensions: "Dài tổng thể ~11 cm (bao gồm móc khoen càng cua)",
    styleOptions:
      "Móc càng cua linh hoạt cài quai túi xách, balo, móc cạp quần/thắt lưng hoặc móc chìa khóa",
    materialNote:
      "Thiết kế hoa lan thủ công nổi bật với kỹ thuật đổ bóng resin, kết hợp nét mềm mại nữ tính và chi tiết kim loại góc cạnh phong cách Y2K/grunge chic.",
    careInstructions: careInstructionsDefault,
    packaging: packagingCopy.included,
    orderingInstructions: orderingGuideDefault,
    socialUrl: "",
    variants: [
      {
        id: "blue-purple",
        name: "Tím xanh ombre",
        colorCode: "#8A9EA7",
        coverImage: "/media/products/keychain/nova-keychain-cover.webp",
        badge: "Bản gốc lookbook",
        description:
          "Cánh hoa lan chuyển sắc tím xanh ombre kết hợp chuỗi cườm xanh ngọc và khuyên xỏ bạc.",
        gallery: [
          "/media/products/keychain/nova-keychain-cover.webp",
          "/media/products/keychain/nova-keychain-blue-detail.webp",
          "/media/products/keychain/nova-keychain-blue-bag.webp"
        ]
      },
      {
        id: "mauve-brown",
        name: "Nâu tím mauve",
        colorCode: "#6E4D58",
        coverImage: "/media/products/keychain/keychain-02-cover.webp",
        badge: "Tone trầm cổ điển",
        description:
          "Hoa resin tông nâu tím mauve trầm, đính khuyên tròn, chuỗi xích kim loại kép và hạt đá tự nhiên.",
        gallery: [
          "/media/products/keychain/keychain-02-cover.webp",
          "/media/products/keychain/keychain-02-detail-01.webp",
          "/media/products/keychain/keychain-02-detail-02.webp"
        ]
      },
      {
        id: "ruby-red",
        name: "Đỏ ruby",
        colorCode: "#B82E3B",
        coverImage: "/media/products/keychain/nova-keychain-red-studio.webp",
        badge: "Điểm nhấn rực rỡ",
        description:
          "Hoa lan đỏ rực rỡ đính khoen mắt cáo, kim băng charm 'Made With Love' và hạt ngọc trai rơi.",
        gallery: [
          "/media/products/keychain/nova-keychain-red-studio.webp",
          "/media/products/keychain/nova-keychain-red-bag.webp"
        ]
      },
      {
        id: "pure-white",
        name: "Trắng ngọc trai",
        colorCode: "#F0F0F2",
        coverImage: "/media/products/keychain/nova-keychain-white-bag.webp",
        badge: "Thanh khiết",
        description:
          "Hoa lan trắng ngọc trai đính khuyên xỏ bạc, giọt ngọc nhân tạo và chuỗi cườm buông rủ thanh lịch.",
        gallery: [
          "/media/products/keychain/nova-keychain-white-bag.webp",
          "/media/products/keychain/nova-keychain-trio-studio.webp"
        ]
      }
    ],
    gallery: [
      "/media/products/keychain/nova-keychain-cover.webp",
      "/media/products/keychain/nova-keychain-blue-detail.webp",
      "/media/products/keychain/nova-keychain-blue-bag.webp",
      "/media/products/keychain/keychain-02-cover.webp",
      "/media/products/keychain/nova-keychain-red-studio.webp",
      "/media/products/keychain/nova-keychain-red-bag.webp",
      "/media/products/keychain/nova-keychain-white-bag.webp"
    ]
  },
  {
    designId: "pink-rose-charm",
    id: "pink-flower-keychain",
    code: "MK-02",
    productName: "Móc khóa hoa hồng phấn",
    name: "Móc khóa hoa hồng phấn",
    subtitle: "Hoa hồng nhiều tầng phủ ngọc trai phối quai túi phao",
    category: "keychain",
    categoryLabel: "Móc khóa",
    price: approvedPrices.pinkRoseCharm,
    packagingIncluded: "Standard",
    availability: "available",
    availabilityLabel: "Có thể đặt hàng",
    isArchived: false,
    isTrialProduct: false,
    catalogStatus: "current",
    badgeLabel: "BST Hiện tại",
    coverImage: "/media/products/keychain/pink-keychain-cover.webp",
    imageAlt:
      "Móc khóa hoa hồng Floé màu hồng phấn, điểm xuyết ngọc trai và xích kim loại trên túi phao thắt nơ",
    materials:
      "Cánh hoa hồng tạo hình đa tầng đổ khuôn thủ công, hạt ngọc trai nhân tạo chìm, xích kim loại mảnh và charm nơ bạc.",
    dimensions: "Dài tổng thể ~10.5 cm",
    styleOptions:
      "Khoen tròn kèm móc càng cua linh hoạt cài túi xách da, túi phao, balo hoặc ốp điện thoại",
    materialNote:
      "Thiết kế hoa hồng thủ công với cánh hoa xòe nhiều lớp mềm mại, bề mặt bóng mờ cùng chi tiết ngọc trai và dây kim loại tạo điểm nhấn nữ tính.",
    careInstructions: careInstructionsDefault,
    packaging: packagingCopy.included,
    orderingInstructions: orderingGuideDefault,
    socialUrl: "",
    variants: [
      {
        id: "blush-pink",
        name: "Hồng phấn pastel",
        colorCode: "#F5C3CF",
        coverImage: "/media/products/keychain/pink-keychain-cover.webp",
        badge: "Phiên bản chuẩn",
        description:
          "Sắc hồng phấn pastel kết hợp ngọc trai sáng và dây charm nơ bạc tinh tế.",
        gallery: [
          "/media/products/keychain/pink-keychain-cover.webp",
          "/media/products/keychain/pink-keychain-card.webp"
        ]
      }
    ],
    gallery: [
      "/media/products/keychain/pink-keychain-cover.webp",
      "/media/products/keychain/pink-keychain-card.webp"
    ]
  },
  {
    designId: "elune-waist-chain",
    id: "elune-waist-chain",
    code: "VE-01",
    productName: "Elune Waist Chain",
    name: "Elune Waist Chain",
    subtitle: "Vòng eo hoa thủ công phối chuỗi xích đa tầng",
    category: "waist",
    categoryLabel: "Vòng eo",
    price: approvedPrices.eluneWaistChain,
    packagingIncluded: "Standard",
    availability: "available",
    availabilityLabel: "Có thể đặt hàng",
    isArchived: false,
    isTrialProduct: false,
    catalogStatus: "current",
    badgeLabel: "BST Hiện tại",
    coverImage: "/media/products/waist/elune-waist-chain-cover.webp",
    imageAlt: "Elune Waist Chain của Floé với hoa hồng nhạt và dây hạt thả trên váy pastel",
    materials:
      "Mặt hoa resin hồng nhạt đổ khuôn thủ công có viền ren trắng, chuỗi xích kim loại đa tầng, hạt ngọc trai nhỏ và khóa cài càng cua.",
    dimensions:
      "Chiều dài dây chính 75 cm + 15 cm xích nối mở rộng (hỗ trợ tùy chỉnh số đo eo riêng khi đặt hàng)",
    styleOptions:
      "Đeo ôm eo với áo croptop / Thả trễ nhẹ trên nền đầm suông, váy ren hoặc quần cạp trễ",
    materialNote:
      "Vòng eo phụ kiện hoa độc bản, tạo điểm nhấn tôn đường cong silhouette nhẹ nhàng và thanh lịch.",
    careInstructions: careInstructionsDefault,
    packaging: packagingCopy.included,
    orderingInstructions: orderingGuideDefault,
    socialUrl: "",
    variants: [
      {
        id: "soft-pink-silver",
        name: "Hồng pastel ánh bạc",
        colorCode: "#F8D7E0",
        coverImage: "/media/products/waist/elune-waist-chain-cover.webp",
        badge: "Phiên bản chuẩn",
        description:
          "Hoa hồng pastel viền ren trắng phối cùng chuỗi xích kim loại bạc sáng và ngọc trai nhân tạo.",
        gallery: [
          "/media/products/waist/elune-waist-chain-cover.webp",
          "/media/products/waist/elune-waist-chain-detail-01.webp",
          "/media/products/waist/elune-waist-chain-detail-02.webp",
          "/media/products/waist/elune-waist-chain-detail-03.webp"
        ]
      }
    ],
    gallery: [
      "/media/products/waist/elune-waist-chain-cover.webp",
      "/media/products/waist/elune-waist-chain-detail-01.webp",
      "/media/products/waist/elune-waist-chain-detail-02.webp",
      "/media/products/waist/elune-waist-chain-detail-03.webp"
    ]
  }
]

/**
 * Khu vực Lưu Trữ Thiết Kế (Design Archive).
 * Chứa các mẫu thử nghiệm lịch sử ghi nhận trong báo cáo EXE201, hiện không mở bán trực tiếp.
 * Phục vụ trưng bày lookbook và tư vấn thiết kế theo yêu cầu riêng (Custom Design).
 */
export const archivedDesigns = [
  {
    designId: "lunara-choker",
    id: "lunara-choker",
    code: "DC-01",
    productName: "Lunara Choker",
    name: "Lunara Choker",
    subtitle: "Vòng cổ hoa lan ruy băng & chuỗi cườm (Bản thử nghiệm)",
    category: "necklace",
    categoryLabel: "Dây chuyền",
    price: null,
    historicalPrice: approvedPrices.lunaraChokerHistorical,
    availability: "archived",
    availabilityLabel: "Lưu trữ thiết kế • Đã ngừng sản xuất",
    isArchived: true,
    isTrialProduct: true,
    catalogStatus: "archived",
    badgeLabel: "Lưu trữ thiết kế EXE201",
    coverImage: "/media/products/necklace/lunara-choker-studio.webp",
    imageAlt: "Dây chuyền hoa lan Lunara Choker thử nghiệm của Floé",
    materials:
      "Hoa lan tím resin bóng kèm chân ren trắng, dây cườm hạt thủy tinh đính ngọc trai nhân tạo, ruy băng satin kép và khóa càng cua mở rộng.",
    dimensions: "Vòng cổ 34 cm + 6 cm xích nối mở rộng",
    styleOptions: "Đeo sát cổ (choker) phối áo trễ vai, đầm ren hoặc corset",
    reportNote:
      "Mẫu thử nghiệm giai đoạn đầu được ghi nhận trong báo cáo dự án EXE201. Hiện tại Floé không mở bán đại trà mẫu này để tập trung nguồn lực vào dòng móc khóa và vòng eo chủ lực.",
    variants: [
      {
        id: "purple-orchid",
        name: "Tím pastel viền ren",
        colorCode: "#9B8AB4",
        coverImage: "/media/products/necklace/lunara-choker-studio.webp",
        badge: "Bản thử nghiệm gốc",
        description:
          "Hoa lan màu tím lavender viền ren trắng, dây cườm tím trắng và ruy băng thắt nơ đôi.",
        gallery: [
          "/media/products/necklace/lunara-choker-studio.webp",
          "/media/products/necklace/lunara-choker-detail.webp",
          "/media/products/necklace/lunara-choker-model.webp",
          "/media/products/necklace/lunara-choker-lookbook.webp"
        ]
      }
    ],
    gallery: [
      "/media/products/necklace/lunara-choker-studio.webp",
      "/media/products/necklace/lunara-choker-detail.webp",
      "/media/products/necklace/lunara-choker-model.webp",
      "/media/products/necklace/lunara-choker-lookbook.webp"
    ]
  }
]

export const allDesigns = [...activeProducts, ...archivedDesigns]

// Backward compatibility alias for existing component imports
export const products = activeProducts
export const historicalTrialProducts = archivedDesigns

export const productContentStatus = {
  emptyTitle: "Bộ sưu tập đầu tiên đang dần hé nở.",
  emptyDescription:
    "Theo dõi các mẫu mới nhất và khám phá các dòng phụ kiện của Floé."
}
