export const packagingMedia = {
  video: {
    poster: "/media/packaging/floe-unboxing-poster.webp",
    sources: [
      {
        src: "/media/packaging/floe-unboxing.webm",
        type: "video/webm"
      },
      {
        src: "/media/packaging/floe-unboxing.mp4",
        type: "video/mp4"
      }
    ],
    label: "Video mở hộp Floé"
  },
  collage: [
    {
      id: "brand-card",
      image: "/media/packaging/brand-card.webp",
      imageAlt: "Card thương hiệu Floé trong bộ packaging",
      className: "left-4 top-8 w-[70%] rotate-[-3deg] md:left-8 md:w-[64%]"
    },
    {
      id: "message-card",
      image: "/media/packaging/message-card.webp",
      imageAlt: "Card lời nhắn Floé trong bộ packaging",
      className: "right-2 top-28 w-[66%] rotate-[2deg] md:right-4 md:top-36"
    },
    {
      id: "round-label",
      image: "/media/packaging/round-label.webp",
      imageAlt: "",
      className: "bottom-12 left-8 w-[28%] rotate-[4deg] md:left-12"
    },
    {
      id: "long-label",
      image: "/media/packaging/long-label.webp",
      imageAlt: "",
      className: "bottom-5 right-10 w-[20%] rotate-[-2deg] md:right-16"
    }
  ],
  giftTile: {
    image: "/media/brand/gift-service.webp",
    imageAlt: "Artwork dịch vụ gói quà của Floé",
    label: "Gift service"
  }
}
