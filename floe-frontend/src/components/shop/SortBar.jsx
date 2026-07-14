export default function SortBar({ count }) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 border-b border-ink/10 pb-6 md:flex-row md:items-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-inkMuted">
          Showroom
        </p>
        <p className="mt-2 text-2xl font-display text-ink">
          {count} mẫu đã có dữ liệu
        </p>
      </div>
      <p className="max-w-md text-sm leading-6 text-inkMuted">
        Bộ lọc chỉ dùng dữ liệu thật. Giá, review và tồn kho chưa được công bố nên không hiển thị.
      </p>
    </div>
  )
}
