import './App.css';
import SignInInterface from './pages/signin';
import Header from './components/header';
import Footer from './components/footer';
import SignUpInterface from './pages/signup';
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInInterface />} />
          <Route path="/signin" element={<SignInInterface />} />
          <Route path="/signup" element={<SignUpInterface />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />

    </div>
  );
}

export default App;