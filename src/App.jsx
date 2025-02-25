import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { ThemeProvider } from 'styled-components';
import Video from './components/Video';
import FAQ from './components/Faq';
import WhatsAppButton from './components/Whatsappbutton';
import Content from './components/content';
import New from './components/new';
import SectionsPage from './components/sectionpage';
import BlogPage from './components/blogpage';
import Ola from './blog/ola';
import Zerodha from './blog/ref';
import Fest from './blog/festival';
import It from './blog/it';
import Bj from './blog/bjaj';
import Bj2 from './blog/bjaj2';
import Five from './blog/five';
import Franchise from './components/Franchise/Franchise';

const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    text: "#febb12;",
    white: "#fff",
    yellow: "#febb12",
    black: "#212529",
    helper: "#8490ff",
    bg: "rgb(249 249 255)",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98, 84, 243, 0.5)",
    hr: "#ffffff",
    gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  media: { mobile: "768px", tab: "998px" },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WhatsAppButton />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/video" element={<Video />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/content" element={<Content />} />
          <Route path="/new" element={<New />} />
          <Route path="/sect" element={<SectionsPage />} />
          <Route path="/ola" element={<Ola />} />
          <Route path="/ref" element={<Zerodha />} />
          <Route path="/festival" element={<Fest />} />
          <Route path="/it" element={<It />} />
          <Route path="/bjaj" element={<Bj />} />
          <Route path="/bjaj2" element={<Bj2 />} />
          <Route path="/five" element={<Five />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
