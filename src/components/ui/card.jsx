export function Card({ children, ...props }) {
  return (
    <div
      {...props}
      className="rounded-2xl shadow-md overflow-hidden"
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div {...props} className={`p-4 ${className}`}>
      {children}
    </div>
  );
}
