import { Link } from "react-router-dom";

const Button = ({
  text,
  type = "button",
  onClick,
  className = "",
  to,
}) => {
  const classes = `
    relative overflow-hidden
    inline-flex items-center justify-center
    px-10 py-3.5
    rounded-full
    border border-[#D4AF37]
    bg-transparent
    text-[#D4AF37]
    text-sm md:text-base
    font-semibold
    tracking-[2px]
    uppercase
    transition-all
    duration-500
    ease-out
    hover:bg-[#D4AF37]
    hover:text-black
    hover:tracking-[3px]
    hover:shadow-[0_0_35px_rgba(212,175,55,0.5)]
    hover:-translate-y-0.5
    active:scale-95
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {text}
    </button>
  );
};

export default Button;