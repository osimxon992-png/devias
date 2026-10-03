import { FiMail, FiMoreHorizontal } from "react-icons/fi";
import cao from "../../assets/profile-cao-yu.png";
import siegbert from "../../assets/profile-siegbert.png";
import { Card } from "./ProfileParts";

export default function Team() {
  const members = [{ name: "Cao Yu", email: "cao.yu@devias.io", role: "Owner", avatar: cao }, { name: "Siegbert Gottfried", email: "siegbert.gottfried@devias.io", role: "Standard", avatar: siegbert }];

  return <Card className="!overflow-hidden !p-0">
    <div className="grid items-center gap-6 p-6 lg:grid-cols-[32%_1fr]"><div><h2 className="font-semibold">Invite members</h2><p className="mt-1 text-xs text-[#6C737F]">You currently pay for 2 Editor Seats.</p></div><div className="flex flex-wrap items-center gap-4"><label className="min-w-[160px] flex-1 rounded-lg border border-[#E5E7EB] px-3 py-1.5 text-[10px] text-[#6C737F]">Email address<span className="flex items-center gap-2"><FiMail className="size-4" /><input type="email" aria-label="Invite email address" className="w-full bg-transparent text-xs text-[#111927] outline-none" /></span></label><button className="cursor-pointer rounded-lg bg-[#635BFF] px-4 py-2.5 text-xs text-white">Send Invite</button></div></div>
    <div className="overflow-x-auto"><table className="w-full min-w-[480px] text-left text-xs"><thead className="bg-[#F8F9FA] text-[10px] uppercase text-[#384250]"><tr><th className="px-4 py-3">Member</th><th className="px-4 py-3">Role</th><th aria-label="Actions" /></tr></thead><tbody>{members.map((member) => <tr key={member.email} className="border-t border-[#F2F4F7]"><td className="px-4 py-4"><div className="flex items-center gap-3"><img src={member.avatar} alt="" className="size-9 rounded-full object-cover" /><div>{member.name}<p className="mt-1 text-[#6C737F]">{member.email}</p></div></div></td><td className="px-4 py-4">{member.role === "Owner" ? <span className="rounded-full bg-[#EDEAFF] px-2 py-1 text-[10px] font-semibold uppercase text-[#635BFF]">Owner</span> : member.role}</td><td className="px-4 py-4 text-right"><button aria-label={`Actions for ${member.name}`} className="cursor-pointer text-[#6C737F]"><FiMoreHorizontal className="size-5" /></button></td></tr>)}</tbody></table></div>
  </Card>;
}
