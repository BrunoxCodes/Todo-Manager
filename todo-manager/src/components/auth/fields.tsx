interface fieldInput{
    label?: string;
    children: React.ReactNode;
}

export default function Fields({ label, children }: fieldInput) {
  return (
    <label className="w-full">
      {label}
      {children}
    </label>
  );
};