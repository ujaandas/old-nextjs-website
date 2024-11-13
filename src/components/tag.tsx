export interface TagProps {
  text: string;
  color: string;
}

export default function Tag({ text, color }: TagProps) {
  const colorClasses: { [key: string]: string } = {
    red: "bg-red-100 text-red-800",
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    yellow: "bg-yellow-100 text-yellow-800",
    purple: "bg-purple-100 text-purple-800",
    pink: "bg-pink-100 text-pink-800",
    indigo: "bg-indigo-100 text-indigo-800",
  };

  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mr-2 mb-2 ${
        colorClasses[color] || "bg-gray-100 text-gray-800"
      }`}
    >
      {text}
    </span>
  );
}
