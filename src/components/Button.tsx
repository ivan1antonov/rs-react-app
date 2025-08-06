interface ButtonProps {
  onClick: () => void;
  text: string;
  className: string;
}

const Button = ({ className, text, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
