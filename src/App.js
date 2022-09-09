import Sidebar from "./components/topbar/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import {
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./pages/home/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
function App() {
  return (
    <div >
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />}>
          </Route>
          <Route path="/users" element={<UserList />}>
          </Route>
          <Route path="/user/:userId" element={<User />}>
          </Route>
          <Route path="/newUser" element={<NewUser />}>
          </Route>
          <Route path="/products" element={<ProductList />}>
          </Route>
          <Route path="/product/:productId" element={<Product />}>
          </Route>
          <Route path="/newproduct" element={<NewProduct />}>
          </Route>
        </Routes>
      
      </div>
    </div>
  );
}

export default App;
