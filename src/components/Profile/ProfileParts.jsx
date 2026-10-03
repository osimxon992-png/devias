export function Card({ children, className = "" }) {
  return <section className={`rounded-2xl border border-[#F2F4F7] bg-white p-6 shadow-[0_5px_18px_rgba(17,25,39,0.04)] ${className}`}>{children}</section>;
}

export function Toggle({ label, defaultChecked = false }) {
  return <label className="relative mt-1 inline-flex shrink-0 items-center"><input type="checkbox" aria-label={label} defaultChecked={defaultChecked} disabled className="peer sr-only" /><span className="h-3 w-8 rounded-full bg-[#9DA4AE] peer-checked:bg-[#B7B2FF]" /><span className="absolute -left-0.5 size-[18px] rounded-full bg-[#6C737F] peer-checked:left-4 peer-checked:bg-[#635BFF]" /></label>;
}

export function Setting({ title, description, checked = false }) {
  return <div className="flex items-start justify-between gap-5 py-5 first:pt-0 last:pb-0"><div><h3>{title}</h3><p className="mt-2 text-xs leading-5 text-[#6C737F]">{description}</p></div><Toggle label={title} defaultChecked={checked} /></div>;
}
