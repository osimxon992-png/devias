import avatar from "../../assets/profile-anika.png";
import { Card, Setting } from "./ProfileParts";

export default function General() {
  return <div className="space-y-6">
    <Card className="grid gap-6 lg:grid-cols-[32%_1fr]">
      <h2 className="font-semibold">Basic details</h2>
      <div className="space-y-5">
        <div className="flex items-center gap-6"><img src={avatar} alt="Anika Visser" className="size-20 object-contain" /><button type="button" className="text-xs font-medium">Change</button></div>
        <div className="flex items-center gap-5"><label className="flex-1 rounded-lg border border-[#E5E7EB] px-3 py-2 text-[10px] text-[#6C737F]">Full Name<input className="block w-full bg-transparent pt-1 text-xs text-[#111927] outline-none" /></label><button className="w-12 cursor-pointer text-xs">Save</button></div>
        <div className="flex items-center gap-5"><label className="flex-1 rounded-lg border border-[#E5E7EB] px-3 py-2 text-[10px] text-[#6C737F]">Email Address *<input type="email" className="block w-full bg-transparent pt-1 text-xs text-[#111927] outline-none" /></label><button className="w-12 cursor-pointer text-xs">Edit</button></div>
      </div>
    </Card>
    <Card className="grid gap-6 lg:grid-cols-[32%_1fr]"><h2 className="font-semibold">Public profile</h2><div className="divide-y divide-[#F2F4F7]"><Setting title="Make Contact Info Public" description="Means that anyone viewing your profile will be able to see your contacts details." /><Setting title="Available to hire" description="Toggling this will let your teammates know that you are available for acquiring new projects." checked /></div></Card>
    <Card className="grid gap-6 lg:grid-cols-[32%_1fr]"><h2 className="font-semibold">Delete Account</h2><div><p>Delete your account and all of your source data. This is irreversible.</p><button className="mt-5 cursor-pointer rounded-lg border border-[#FDA29B] px-4 py-2 text-xs text-[#F04438]">Delete account</button></div></Card>
  </div>;
}
