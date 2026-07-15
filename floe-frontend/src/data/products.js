export const approvedPrices = {
  novaKeychain: 120000,
  eluneWaistChain: 160000,
  lunaraChoker: 130000
}

export const packagingCopy = {
  included: "Đã bao gồm bao bì Standard.",
  premiumNote: "Có thể nâng cấp bao bì premium từ 10.000 ₫."
}

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
      "/media/products/keychain/nova-keychain-detail-01.webp",
      "/media/products/keychain/nova-keychain-detail-02.webp",
      "/media/products/keychain/nova-keychain-detail-03.webp"
    ],
    imageAlt: "Nova Keychain của Floé với hoa tím xanh và chi tiết dây trang trí",
    materialNote: "Móc khóa hoa thủ công với sắc tím xanh và chi tiết kim loại.",
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
    coverImage: "/media/products/keychain/pink-keychain-card.webp",
    gallery: [
      "/media/products/keychain/pink-keychain-cover.webp",
      "/media/products/keychain/pink-keychain-detail.webp"
    ],
    imageAlt:
      "Móc khóa hoa hồng Floé màu hồng phấn, điểm xuyết ngọc trai và chi tiết dây kim loại trên túi trắng",
    materialNote:
      "Thiết kế hoa hồng thủ công với sắc hồng phấn, bề mặt bóng cùng chi tiết ngọc trai và dây kim loại tạo điểm nhấn cá tính.",
    socialUrl: ""
  },
  {
    id: "nova-keychain",
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
    materialNote:
      "Thiết kế hoa thủ công mang tông nâu tím trầm, kết hợp hạt ngọc và chi tiết kim loại để tạo vẻ nổi bật, cá tính.",
    socialUrl: ""
  },
  {
    id: "lunara-choker",
    code: "DC-01",
    name: "Lunara Choker",
    category: "necklace",
    categoryLabel: "Dây chuyền",
    price: approvedPrices.lunaraChoker,
    packagingIncluded: "Standard",
    coverImage: "/media/products/necklace/lunara-choker-cover.webp",
    gallery: [
      "/media/products/necklace/lunara-choker-cover.webp",
      "/media/products/necklace/lunara-choker-detail-01.webp",
      "/media/products/necklace/lunara-choker-detail-02.webp",
      "/media/products/necklace/lunara-choker-detail-03.webp",
      "/media/products/necklace/lunara-choker-detail-04.webp"
    ],
    imageAlt: "Lunara Choker của Floé với hoa xanh và dây thả hạt",
    materialNote: "Dây chuyền/choker hoa xanh với chi tiết hạt thả nhẹ.",
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
    materialNote: "Vòng eo hoa hồng nhạt với dây hạt thả và điểm nhấn mềm.",
    socialUrl: ""
  }
]

export const productContentStatus = {
  emptyTitle: "Bộ sưu tập đầu tiên đang dần hé nở.",
  emptyDescription:
    "Theo dõi các mẫu mới nhất và khám phá ba dòng phụ kiện của Floé."
}
