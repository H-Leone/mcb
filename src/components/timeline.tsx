import Image from "next/image"

type TimelineItem = {
  year: string
  title: string
  description: string
  image: string
}

type Props = {
  items: TimelineItem[]
}

export default function Timeline({ items }: Props) {
  return (
    <div className="relative overflow-x-auto pb-20">
      {/* Linha */}
      <div className="absolute top-10 left-0 w-full h-px bg-gray-300" />

      <div className="flex gap-16 min-w-max px-8">
        {items.map((item) => (
          <div key={item.year} className="relative w-72 flex-shrink-0">
            {/* Ano */}
            <p className="text-center text-green font-semibold mb-4">
              {item.year}
            </p>

            {/* Ponto */}
            <div className="flex justify-center">
              <div className="w-6 h-6 rounded-full bg-green border-4 border-white shadow-md z-10" />
            </div>

            {/* Card */}
            <div className="mt-10 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-36">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 space-y-2">
                <h3 className="font-semibold text-sm text-green">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
