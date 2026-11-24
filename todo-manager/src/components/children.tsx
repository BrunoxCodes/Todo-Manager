interface Props{
    children: React.ReactNode
}

export default function Children({ children }: Props) {
  return (
    <div className="bg-indigo-950 w-[30%] p-10 rounded-2xl text-white">
      {children}
    </div>
  );
};