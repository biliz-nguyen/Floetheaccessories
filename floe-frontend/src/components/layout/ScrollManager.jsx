import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { brand } from "../../data/siteContent.js"

const routeTitles = {
  "/": `${brand.name} - ${brand.primaryLine}`,
  "/shop": `Sản phẩm - ${brand.name}`,
  "/custom": `Thiết kế riêng - ${brand.name}`
}

export default function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    document.title = routeTitles[location.pathname] || `Không tìm thấy - ${brand.name}`

    if (location.hash) {
      window.setTimeout(() => {
        const target = document.getElementById(location.hash.slice(1))
        target?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 0)
      return
    }

    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return null
}
