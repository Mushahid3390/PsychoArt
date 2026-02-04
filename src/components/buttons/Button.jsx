const varientStyle = {
  gradient:
    "hover:opacity-85 rounded-[10px] bg-linear-to-tr from-[#671AE4] to-[#B75CFF]",
  default: "py-2.5 px-5 hover:opacity-85 rounded-[10px] bg-[#FFFFFF1A]",
  gradientBoder: "btn-gradient hover:opacity-85",
};

const Button = ({ label, style, OnClick, id, varient = "default" }) => {
  return (
    <>
      {varient === "gradientBoder" ? (
        <div
          className={`${varient === "gradientBoder" ? `${varientStyle[varient]}` : ""}`}
        >
          <button
            id={id}
            name={label}
            onClick={OnClick}
            key={id}
            className={`${varient !== "gradientBoder" ? `${varientStyle[varient]}` : "text-color"} ${style}`}
          >
            {label}
          </button>
        </div>
      ) : (
        <button
          id={id}
          name={label}
          onClick={OnClick}
          key={id}
          className={`${varientStyle[varient]} ${style}`}
        >
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
