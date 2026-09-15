import { Route, Routes } from "react-router-dom";
import EditedSidebar from "./components/editedSidebar/EditedSidebar";
import Account from "./pages/Account";

function App() {
  return (
    <div className="flex">
      <aside className="min-h-screen">
        <EditedSidebar />
      </aside>
      <main className="flex-1 bg-gray-100 p-8">
        <Routes>
          <Route path="/" element={<Account />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
