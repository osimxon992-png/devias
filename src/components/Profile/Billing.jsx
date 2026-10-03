import { FiEdit2, FiLayers } from "react-icons/fi";
import { Card } from "./ProfileParts";

const plans = [{ name: "Startup", price: "$0.00" }, { name: "Standard", price: "$4.99" }, { name: "Business", price: "$29.99" }];

export default function Billing() {
  const details = { "Billing name": "John Doe", "Card number": "**** 1111", Country: "Germany", "Zip / Postal code": "667123" };

  return <div className="space-y-6">
    <Card>
      <h2 className="font-semibold">Change Plan</h2><p className="text-xs text-[#6C737F]">You can upgrade and downgrade whenever you want</p>
      <div className="my-5 grid gap-5 md:grid-cols-3">{plans.map((item) => <button key={item.name} className={`cursor-pointer rounded-2xl border p-5 text-left ${item.name === "Standard" ? "border-[#635BFF]" : "border-[#F2F4F7]"}`}><FiLayers className="mb-8 size-7 text-[#635BFF]" /><div><strong className="text-2xl">{item.price}</strong><span className="text-xs text-[#6C737F]"> /mo</span></div><div className="mt-2 flex justify-between gap-2"><span className="text-[10px] font-semibold uppercase">{item.name}</span>{item.name === "Standard" && <span className="text-[10px] text-[#635BFF]">Using now</span>}</div></button>)}</div>
      <div className="flex items-center justify-between border-t border-[#F2F4F7] py-6"><h2 className="font-semibold">Billing details</h2><button className="flex cursor-pointer items-center gap-2 text-xs"><FiEdit2 />Edit</button></div>
      <div className="divide-y divide-[#F2F4F7] rounded-lg border border-[#F2F4F7]">{Object.entries(details).map(([label, value]) => <div key={label} className="flex items-center gap-4 px-4 py-3 text-xs"><span className="w-32 shrink-0">{label}</span><span className="text-[#6C737F]">{value}</span></div>)}</div>
      <p className="mt-5 text-xs text-[#6C737F]">We cannot refund once you purchased a subscription, but you can always <button className="cursor-pointer text-[#635BFF]">Cancel</button></p>
      <div className="mt-5 flex justify-end"><button className="cursor-pointer rounded-lg bg-[#635BFF] px-4 py-2.5 text-xs font-medium text-white">Upgrade Plan</button></div>
    </Card>
    <Card className="!overflow-hidden !p-0"><div className="px-5 pb-4 pt-6"><h2 className="font-semibold">Invoice history</h2><p className="text-xs leading-5 text-[#6C737F]">You can view and download all your previous invoices here. If you've just made a payment, it may take a few hours for it to appear in the table below.</p></div><div className="overflow-x-auto"><table className="w-full min-w-[450px] text-left text-xs"><thead className="bg-[#F8F9FA] text-[10px] uppercase text-[#384250]"><tr><th className="px-4 py-3">Date</th><th className="px-4 py-3">Total (incl. tax)</th><th aria-label="Invoice" /></tr></thead><tbody>{["01 Jan 2024", "01 Dec 2023", "01 Nov 2023"].map((date) => <tr key={date} className="border-t border-[#F2F4F7]"><td className="px-4 py-4">{date}</td><td className="px-4 py-4">$4.99</td><td className="px-4 py-4 text-right"><button type="button" className="underline">View Invoice</button></td></tr>)}</tbody></table></div></Card>
  </div>;
}
