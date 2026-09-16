import { Route, Routes } from "react-router-dom";
import EditedSidebar from "./components/editedSidebar/EditedSidebar";
import Account from "./pages/Account";
import Header from "./components/header/Header";
import BlogOne from './pages/blogOne/BlogOne';
import BlogTwo from './pages/blogTwo/BlogTwo';
import BlogThree from './pages/blogThree/BlogThree';
import SocialMeadiaOne from './pages/socialMediaOne/SocialMeadiaOne';
import SocialMediaTwo from './pages/socialMediaTwo/SocialMediaTwo';

function App() {
  return (
    <div className="flex h-full w-full">
      <aside>
        <EditedSidebar />
      </aside>
      <main className="flex-1 bg-[#FFFFFFCC]">
        <Header />
        <Routes>
          <Route path="/" element={<Account />} />
          <Route path="/blogOne" element={<BlogOne/>}/>
          <Route path="/blogTwo" element={<BlogTwo/>}/>
          <Route path="/blogThree" element={<BlogThree/>}/>
          <Route path="/socialMediaOne" element={<SocialMeadiaOne/>}/>
          <Route path="/socialMediaTwo" element={<SocialMediaTwo/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
