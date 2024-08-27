"use client";
import { useRef, useEffect, useState, TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({
  value: externalValue,
  onChange: externalOnChange,
  className: externalClassName,
  ...rest
}: TextAreaProps) => {
  const [internalValue, setInternalValue] = useState<string>(
    externalValue || "",
  );
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // 动态调整文本区域的高度
  const adjustHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${Math.min(
        Math.max(textAreaRef.current.scrollHeight, 24), // 最小行高
        208, // 最大行高
      )}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [internalValue, externalValue]); // 每次文本值更新时调整高度

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    if (externalOnChange) {
      externalOnChange(event); // 调用外部的 onChange 函数
    } else {
      setInternalValue(newValue); // 使用内部状态
    }
  };

  return (
    <textarea
      ref={textAreaRef}
      value={externalValue !== undefined ? externalValue : internalValue}
      onChange={handleChange}
      rows={1}
      className={
        "relative w-full resize-none overflow-hidden bg-transparent text-white placeholder-slate-500 outline-none" +
        ` ${externalClassName}`
      }
      placeholder="hihihi"
      style={{ minHeight: "24px", maxHeight: "208px" }}
      {...rest}
    />
  );
};

export default TextArea;
