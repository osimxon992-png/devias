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
import Crypto from "./pages/crypto/Crypto";
import Ecommerce from "./pages/eCommerce/Ecommerce";
import OrderTwo from "./pages/orderTwo/OrderTwo";
import Invoices from "./pages/invoices/Invoices";
import InvoicesTwo from "./pages/invociesTwo/InvoicesTwo";
import Product from "./pages/product/Product";
import ProductTwo from "./pages/productTwo/ProductTwo";
import Kanban from "./pages/kanban/Kanban";
import Customers from "./pages/customers/Customers";
import CustomerDetails from "./pages/customers/CustomerDetails";
import CustomerEdit from "./pages/customers/CustomerEdit";
import Mail from "./pages/Mail";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile/Profile";

import FileManager from "./pages/fileManager/FileManager";
import Login from "./pages/login/Login";
import Register from './pages/register/Register';
import Forgot from './pages/forgot/Forgot';
import Reset from './pages/reset/Reset';
import Verify from './pages/verify/Verify';

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
          <Route path="/profile" element={<Profile />} />
          <Route path="/account" element={<Profile />} />

          <Route path="/analytics" element={<Analytics />} />
          <Route path="/blogOne" element={<BlogOne />} />
          <Route path="/blogTwo" element={<BlogTwo />} />
          <Route path="/blogThree" element={<BlogThree />} />
          <Route path="/socialMediaOne" element={<SocialMeadiaOne />} />
          <Route path="/socialMediaTwo" element={<SocialMediaTwo />} />
          <Route path="/order" element={<Order />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/orderTwo" element={<OrderTwo />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/invoicesTwo" element={<InvoicesTwo />} />
          <Route path="/fileManager" element={<FileManager />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgotPassword' element={<Forgot/>}/>
          <Route path='/resetPassword' element={<Reset/>}/>
          <Route path='/verifyCode' element={<Verify/>}/>
           <Route path="/product" element={<Product/>} />
           <Route path="/productTwo" element={<ProductTwo />} />
           <Route path="/kanban" element={<Kanban />} />

          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/details" element={<CustomerDetails />} />
          <Route path="/customers/edit" element={<CustomerEdit />} />
          <Route
            path="/customers/details/:id/details"
            element={<CustomerDetails />}
          />
          <Route path="/customers/edit/:id/edit" element={<CustomerEdit />} />

          <Route path="/mail" element={<Mail />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
