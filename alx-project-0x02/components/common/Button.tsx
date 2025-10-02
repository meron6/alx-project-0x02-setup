import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  size = "medium",
  shape = "rounded-md",
}) => {
  const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const shapeClasses: Record<NonNullable<ButtonProps["shape"]>, string> = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClasses[size]} ${shapeClasses[shape]} hover:bg-blue-700 transition`}
    >
      {label}
    </button>
  );
};

export default Button;
