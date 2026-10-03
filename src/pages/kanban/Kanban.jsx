
import kanbanCover from '../../assets/kanban-cover.png';
import avatarBoy from '../../assets/avatar-boy.png';
import avatarBald from '../../assets/avatar-bald.png';
import avatarGreen from '../../assets/avatar-green.png';
import avatarPurple from '../../assets/avatar-purple.png';

function Kanban() {
  return (
    <div className="p-8 bg-[#f9fafb] min-h-screen text-slate-800">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Kanban</h1>
        <button className="flex items-center gap-1.5 bg-[#e0e7ff] text-[#4338ca] text-xs font-semibold px-3 py-2 rounded-lg">
          <span className="text-base leading-none">+</span> Add Column
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="bg-[#f3f4f6] p-4 rounded-2xl space-y-4">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-800">Todo</span>
              <span className="bg-[#e5e7eb] text-slate-600 text-xs px-2 py-0.5 rounded-full font-semibold">4</span>
            </div>
            <span className="text-slate-400 font-bold tracking-widest cursor-pointer">•••</span>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm space-y-3">
            <img src={kanbanCover} alt="cover" className="w-full h-28 object-cover rounded-lg" />
            <h3 className="text-xs font-bold text-slate-900 leading-snug">Call with sales of HubSpot</h3>
            <div className="flex gap-2 text-[10px]">
              <span className="bg-[#f3f4f6] text-slate-600 px-2 py-0.5 rounded-full font-medium">Business</span>
              <span className="bg-[#f3f4f6] text-slate-600 px-2 py-0.5 rounded-full font-medium">Design</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <div className="flex gap-3 text-slate-400 text-xs">
                <span>📄</span>
                <span>☰</span>
                <span>💬</span>
              </div>
              <img src={avatarBoy} alt="avatar" className="w-6 h-6 rounded-full object-cover" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm space-y-3">
            <h3 className="text-xs font-bold text-slate-900 leading-snug">Interview for the Asis. Sales Manager</h3>
            <div className="flex justify-between items-center pt-1">
              <span className="text-slate-400 text-xs">👁</span>
              <div className="flex -space-x-1.5">
                <img src={avatarGreen} alt="avatar" className="w-6 h-6 rounded-full object-cover border border-white" />
                <img src={avatarBoy} alt="avatar" className="w-6 h-6 rounded-full object-cover border border-white" />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm space-y-3">
            <h3 className="text-xs font-bold text-slate-900 leading-snug">Change the height of the top bar because it looks too chunky</h3>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm space-y-3">
            <h3 className="text-xs font-bold text-slate-900 leading-snug">Integrate Stripe API</h3>
            <div className="flex justify-end items-center pt-1">
              <div className="flex -space-x-1.5">
                <img src={avatarBald} alt="avatar" className="w-6 h-6 rounded-full object-cover border border-white" />
                <img src={avatarPurple} alt="avatar" className="w-6 h-6 rounded-full object-cover border border-white" />
              </div>
            </div>
          </div>

          <div className="bg-white py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-600 cursor-pointer shadow-sm">
            <span>+</span> Add Task
          </div>
        </div>

        <div className="bg-[#f3f4f6] p-4 rounded-2xl space-y-4">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-800">Progress</span>
              <span className="bg-[#e5e7eb] text-slate-600 text-xs px-2 py-0.5 rounded-full font-semibold">2</span>
            </div>
            <span className="text-slate-400 font-bold tracking-widest cursor-pointer">•••</span>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm space-y-3">
            <h3 className="text-xs font-bold text-slate-900 leading-snug">Update the customer API for payments</h3>
            <div className="flex justify-between items-center pt-1">
              <span className="text-slate-400 text-xs">👁</span>
              <img src={avatarBoy} alt="avatar" className="w-6 h-6 rounded-full object-cover" />
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm space-y-3">
            <h3 className="text-xs font-bold text-slate-900 leading-snug">Redesign the landing page</h3>
            <div className="flex justify-between items-center pt-1">
              <span className="text-slate-400 text-xs">👁</span>
            </div>
          </div>

          <div className="bg-white py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-600 cursor-pointer shadow-sm">
            <span>+</span> Add Task
          </div>
        </div>

        <div className="bg-[#f3f4f6] p-4 rounded-2xl space-y-4">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-800">Done</span>
              <span className="bg-[#e5e7eb] text-slate-600 text-xs px-2 py-0.5 rounded-full font-semibold">0</span>
            </div>
            <span className="text-slate-400 font-bold tracking-widest cursor-pointer">•••</span>
          </div>

          <div className="bg-white py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-600 cursor-pointer shadow-sm">
            <span>+</span> Add Task
          </div>
        </div>
      </div>

    </div>
  );
}

export default Kanban;