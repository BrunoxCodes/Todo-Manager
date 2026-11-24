interface selectProps{
    name?: string;
    priority: "Low priority" | "Medium Priority" | "High priority";
    className?: string;
    onChange?: (e:React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Select({ name, priority, className, onChange}: selectProps) {
    const priorities = [
        "Low priority",
        "Medium Priority",
        "High priority"
    ] as const;

  return (
    <select className={className} onChange={onChange} name={name}>
      {priorities.map((i) => (
        <option key={i} value={priority}>{priority}</option>
      ))}
    </select>
  );
};