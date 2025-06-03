import { BrowserRouter, Route, Routes } from 'react-router';
import { ListOngs } from './pages/ListOngs';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Home } from './pages/Home';
import { Payment } from './pages/Payment';
import { AuthProvider } from './context/contextAuth';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/listongs" element={<ListOngs/>} />
          <Route path="/donation/:ongCnpj" element={<Payment/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}