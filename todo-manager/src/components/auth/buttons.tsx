interface buttonProps{
    children: React.ReactNode,
    disable?: boolean,
    className?: string
}

export default function Buttons({ children, disable, className }: buttonProps) {
  return (
    <button disabled={disable} type="submit" className={className}>{children}</button>
  );
};