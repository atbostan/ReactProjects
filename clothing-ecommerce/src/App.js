import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/authentication";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home />} />  {/** The reason of using index props on the left , if url just localhost:3000 it working */}
        <Route path="shop/*" element={<Shop/>} /> {/*By doing shop/* we made this nestible component.As long as the url match shop it is ok. */}
        <Route path="auth" element={<Authentication/>} />
        <Route path="checkout" element={<Checkout/>}/>
      </Route>
    </Routes>
  );
};

export default App;
