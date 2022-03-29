import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/authentication";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home />} />  {/** The reason of using index props on the left , if url just localhost:3000 it working */}
        <Route path="auth" element={<Authentication/>} />
      </Route>
    </Routes>
  );
};

export default App;
