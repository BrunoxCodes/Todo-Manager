interface inputProps{
    name?: string;
    type: string;
    value?: string;
    placeholder?: string;
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ name, type, value, placeholder, onChange}: inputProps) {
  return (
    <input type={type} value={value} onChange={onChange} name={name} placeholder={placeholder} className="w-full border border-[#ccc] rounded-lg p-1 mb-4 outline-none"/>
  );
};