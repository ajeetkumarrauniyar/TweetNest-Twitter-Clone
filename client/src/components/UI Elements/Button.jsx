export const Button = ({ onClick, className, children }) => (
  <button onClick={onClick} className={`focus:outline-none ${className}`}>
    {children}
  </button>
);


