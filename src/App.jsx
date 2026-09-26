import { Route, Routes } from "react-router-dom";
import EditedSidebar from "./components/editedSidebar/EditedSidebar";
import Account from "./pages/account/Account";
import Header from "./components/header/Header";
import BlogOne from "./pages/blogOne/BlogOne";
import BlogTwo from "./pages/blogTwo/BlogTwo";
import BlogThree from "./pages/blogThree/BlogThree";
import SocialMeadiaOne from "./pages/socialMediaOne/SocialMeadiaOne";
import SocialMediaTwo from "./pages/socialMediaTwo/SocialMediaTwo";
import Analytics from "./pages/analytics/Analytics";
import Order from "./pages/order/Order";
import OrderTwo from "./pages/orderTwo/OrderTwo";
import Invoices from "./pages/invoices/Invoices";
import InvoicesTwo from "./pages/invociesTwo/InvoicesTwo";

function App() {
  return (
    <div className="flex h-full w-full">
      <aside>
        <EditedSidebar />
      </aside>
      <main className="flex-1 bg-[#FFFFFF]">
        <Header />
        <Routes>
          <Route path="/" element={<Account />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/blogOne" element={<BlogOne />} />
          <Route path="/blogTwo" element={<BlogTwo />} />
          <Route path="/blogThree" element={<BlogThree />} />
          <Route path="/socialMediaOne" element={<SocialMeadiaOne />} />
          <Route path="/socialMediaTwo" element={<SocialMediaTwo />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orderTwo" element={<OrderTwo />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/invoicesTwo" element={<InvoicesTwo />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
