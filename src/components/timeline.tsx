import { TimelineItem } from "@/domain/company"

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ul className="space-y-6 border-l pl-6">
      {items.map((item) => (
        <li key={item.year} className="relative">
          <span className="absolute -left-3 top-1 w-2 h-2 bg-blue-600 rounded-full" />
          <p className="font-semibold">{item.year}</p>
          <p className="text-gray-600">{item.text}</p>
        </li>
      ))}
    </ul>
  )
}
