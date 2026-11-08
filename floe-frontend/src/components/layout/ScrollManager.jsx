import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { brand } from "../../data/siteContent.js"

const routeTitles = {
  "/": `${brand.name} — ${brand.primaryLine}`,
  "/shop": `Sản phẩm & Catalog — ${brand.name}`,
  "/custom": `Thiết kế riêng (Custom) — ${brand.name}`,
  "/posts": `Nhật ký & Hoạt động — ${brand.name}`
}

export default function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (routeTitles[location.pathname]) {
      document.title = routeTitles[location.pathname]
    } else if (location.pathname.startsWith("/posts/")) {
      document.title = `Nhật ký — ${brand.name}`
    } else {
      document.title = `404 Không tìm thấy — ${brand.name}`
    }

    if (location.hash) {
      window.setTimeout(() => {
        const target = document.getElementById(location.hash.slice(1))
        target?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 50)
      return
    }

    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return null
}
