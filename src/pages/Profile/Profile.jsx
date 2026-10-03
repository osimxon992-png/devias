import { useState } from "react";
import General from "../../components/Profile/General";
import Billing from "../../components/Profile/Billing";
import Team from "../../components/Profile/Team";
import Notifications from "../../components/Profile/Notifications";
import Security from "../../components/Profile/Security";

const tabs = ["General", "Billing", "Team", "Notifications", "Security"];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("General");
  return (
    <section className="px-6 py-10 text-sm text-[#111927]">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">Account</h1>
      <nav className="mb-6 flex gap-6 overflow-x-auto border-b border-[#F2F4F7]" aria-label="Account settings">
        {tabs.map((tab) => <button key={tab} type="button" onClick={() => setActiveTab(tab)} aria-current={activeTab === tab ? "page" : undefined} className={`cursor-pointer whitespace-nowrap border-b-2 pb-4 pt-2 text-xs ${activeTab === tab ? "border-[#635BFF] text-[#635BFF]" : "border-transparent text-[#6C737F]"}`}>{tab}</button>)}
      </nav>
      {activeTab === "General" && <General />}
      {activeTab === "Billing" && <Billing />}
      {activeTab === "Team" && <Team />}
      {activeTab === "Notifications" && <Notifications />}
      {activeTab === "Security" && <Security />}
    </section>
  );
}
