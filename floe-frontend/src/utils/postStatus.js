export function getPostStatus(post, now = new Date()) {
  // Explicit UTC+7 boundaries keep campaign dates consistent across visitors' timezones.
  const startsAt = new Date(`${post.startsOn}T00:00:00+07:00`)
  const endsAt = new Date(`${post.endsOn}T23:59:59.999+07:00`)

  if (now < startsAt) return { id: "upcoming", label: "Dự kiến" }
  if (now > endsAt) return { id: "ended", label: "Đã kết thúc" }
  return {
    id: "active",
    label: post.planned ? "Theo lịch dự kiến" : "Trong thời gian chương trình"
  }
}

export function getOrderedPosts(posts, now = new Date()) {
  const priority = { active: 0, upcoming: 1, ended: 2 }
  return [...posts].sort((left, right) => {
    const leftStatus = getPostStatus(left, now).id
    const rightStatus = getPostStatus(right, now).id
    const difference = priority[leftStatus] - priority[rightStatus]
    if (difference !== 0) return difference
    return leftStatus === "ended"
      ? right.startsOn.localeCompare(left.startsOn)
      : left.startsOn.localeCompare(right.startsOn)
  })
}
