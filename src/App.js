import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/SignIn/signIn.component";

const Shop = () => {
  return <div>hello from shop</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn/>} />
      </Route>
    </Routes>
  );
};
export default App;
