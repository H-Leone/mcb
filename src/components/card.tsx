import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl p-10 text-center space-y-6 shadow-sm">
      <div className="flex justify-center text-blue-600">
        {icon}
      </div>

      <h3 className="text-xl font-medium">{title}</h3>

      <p className="text-gray-600">{description}</p>
    </div>
  );
}
