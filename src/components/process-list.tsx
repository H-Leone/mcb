import { CheckCircle } from "lucide-react";

interface ProcessListProps {
  items: string[];
}

export default function ProcessList({ items }: ProcessListProps) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3">
          <CheckCircle className="text-green-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
