export default function Reveal({ children, className = "" }) {
  return <div className={`animate-fade-up ${className}`}>{children}</div>;
}