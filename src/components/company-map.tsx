interface CompanyMapProps {
    title?: string
  }
  
  export default function CompanyMap({ title }: CompanyMapProps) {
    return (
      <section className="py-32">
        {title && (
          <h2 className="text-3xl font-semibold text-center mb-12">
            {title}
          </h2>
        )}
  
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=Marcobi+Tintas&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>
        </div>
      </section>
    )
  }
  