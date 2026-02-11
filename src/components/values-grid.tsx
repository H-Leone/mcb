import { CompanyValue } from "@/domain/company"

export default function ValuesGrid({ values }: { values: CompanyValue[] }) {
  return (
    <div className="grid grid-cols-3 gap-8">
      {values.map((value) => (
        <div
          key={value.title}
          className="bg-blue/10 rounded-xl p-8 space-y-4"
        >
          <p className="text-xl font-semibold">{value.title}</p>
          <p className="text-gray-600">{value.description}</p>
        </div>
      ))}
    </div>
  )
}
