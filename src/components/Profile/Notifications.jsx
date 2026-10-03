import { Card, Setting } from "./ProfileParts";

export default function Notifications() {
  return <Card>
    <div className="grid gap-6 lg:grid-cols-[32%_1fr]"><h2 className="font-semibold">Email</h2><div className="divide-y divide-[#F2F4F7]"><Setting title="Product updates" description="News, announcements, and product updates." checked /><Setting title="Security updates" description="Important notifications about your account security." checked /></div></div>
    <div className="mt-6 grid gap-6 border-t border-[#F2F4F7] pt-6 lg:grid-cols-[32%_1fr]"><h2 className="font-semibold">Phone notifications</h2><Setting title="Security updates" description="Important notifications about your account security." /></div>
  </Card>;
}
