// Card Props Interface
export interface CardProps {
  title: string;
  description: string;
  content: string;
}

// Button Props Interface
export interface ButtonProps {
  label: string;
  onClick: () => void;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
}
