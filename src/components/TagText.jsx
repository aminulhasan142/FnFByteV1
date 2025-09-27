export default function TagText({ text, children }) {
  return (
    <div className="flex px-4 py-2.5 gap-2 items-center justify-center rounded-2xl border border-border">
      {children}
      <p className="text-zinc-400 text-sm font-semibold">{text}</p>
    </div>
  );
}
