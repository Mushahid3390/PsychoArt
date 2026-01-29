const varientStyle = {
    gradient: "hover:opacity-85 rounded-[10px] bg-linear-to-tr from-[#671AE4] to-[#B75CFF]",
    default: "py-2.5 px-5 hover:opacity-85 rounded-[10px] bg-[#FFFFFF1A]",
    gradientBorder: "p-[1px] rounded-[10px] bg-linear-to-tr from-[#671AE4] to-[#B75CFF]"
}

const Button = ({ label, style, OnClick, id, varient = "default"}) => {
 
  return (
    <>
       <button
         name = {label}
         onClick = {OnClick}
         key = {id}
         className={`${varientStyle[varient]} ${style}`}
       >{label}</button>
    </>
  );
};

export default Button;