
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductList from "./components/ProductList";
import UpdateProfile from "./components/UpdateProfile";
import Articles from "./components/Articles";
import HistoriqueArticle from "./components/HistoriqueArticle";
import Redactionarticle from "./components/Redactionarticle";
import Achatcredits from "./components/payments/Achatcredits";


/*Routes is used to be Switch*/
const Router = () => {
    /* nesting routes*/
    return (
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/updateprofil" element={<UpdateProfile />} />
        <Route path="/historique" element={<HistoriqueArticle />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/redaction" element={<Redactionarticle />} />
        <Route path="/achatcredits" element={<Achatcredits />} />
    </Routes>
     
    );
  
    /* object-based routes
    return useRoutes([
      { path: "/", element: <LandingPage /> },
      { path: "games", element: <Games /> },
      { path: "game-details/:id", element: <GameDetails /> },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { path: "/", element: <DashboardDefaultContent /> },
          { path: "inbox", element: <Inbox /> },
          { path: "settings-and-privacy", element: <SettingsAndPrivacy /> },
          { path: "*", element: <NotFound /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ]);
  */
  };
  export default Router;
  