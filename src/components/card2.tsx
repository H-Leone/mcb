type CardProps = {
    value: string;
    label: string;
  };
  
  export default function Card({ value, label }: CardProps) {
    return (
      <div className="text-center space-y-2">
        <p className="text-4xl font-bold text-blue-600">{value}</p>
        <p className="text-gray-600">{label}</p>
      </div>
    );
  }
  