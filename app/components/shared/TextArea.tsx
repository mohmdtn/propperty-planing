import { Input as AntDInput } from "antd";

interface Props {
  placeholder?: string;
}

const TextArea = ({ placeholder }: Props) => {
  return (
    <AntDInput.TextArea
      className={`
        bg-transparent 
        text-base 
        font-poppins 
        border-x-0 
        border-t-0 
        border-b 
        border-gray-200 
        px-0 
        rounded-none
        hover:bg-transparent 
        hover:border-b-gray-400
        focus:bg-transparent 
        focus:border-b-gray-300
        placeholder:text-gray-400 
    `}
      rows={3}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
