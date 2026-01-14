interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    align?: "center" | "left";
  }
  
  export default function SectionHeader({
    title,
    subtitle,
    align = "center",
  }: SectionHeaderProps) {
    return (
      <div
        className={`space-y-4 ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        <h2 className="text-3xl font-semibold">{title}</h2>
  
        {subtitle && (
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    );
  }
  