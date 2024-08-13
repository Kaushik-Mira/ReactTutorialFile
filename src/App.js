//import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Project/Navbar/Navbar";
//import Tabing from "./components/Tabing/Tabing";
//import TodoList from "./Project/TodoList/TodoList";
//import Faqs from "./components/Faqs/Faqs";
//import NotificationComponent from "./components/NotificationComponent/NotificationComponent";
//import Home from "./pages/Home/Home";
//import Blog from "./pages/Blog/Blog";
//import Contact from "./pages/Contact/Contact";
//import NoPage from "./pages/NoPage/NoPage";
//import Layout from "./components/Layout/Layout";
//import ImportImage from "./components/ImportImage/ImportImage";
//import FaqUsingState from "./components/FaqUsingState/FaqUsingState";
//import ModelOverlay from "./components/ModalOverlay/ModelOverlay";
//import ResponsiveMenu from "./components/ResponsiveMenu/ResponsiveMenu";
//import logo from "./assets/Manage_the_online_store.png";
//import ChildrenProps from "./components/ChildrenProps/ChildrenProps";
//import HandleClickClassComponents from "./components/EventHandling/HandleClickClassComponents";
//import ConditionalStateMent from "./components/ConditionalStateMent/ConditionalStateMent";
//import ConditionalStateMent1 from "./components/ConditionalStateMent/ConditionalStateMent1";
//import EventHandling1 from "./components/EventHandling/EventHandling1";
//import EventHandling2 from "./components/EventHandling/EventHandling2";
//import UsingBind from "./components/EventHandling/UsingBind";
//import EventHandling from "./components/EventHandling/EventHandling";
//import FontAwesome from "./components/FontAwesome/FontAwesome";
//import ImportCss from "./components/ImportCss/ImportCss";
//import ObjectChildrenComponent from "./components/ObjectChildrenComponent/ObjectChildrenComponent";
//import ReactProps from "./components/ReactProps/ReactProps";
//import UseStateHook from "./components/UseStateHook/UseStateHook";
//import CardPage from "./components/CardPage/CardPage";
//import ClassComponents from "./components/ClassComponents/ClassComponents";
//import DefaultExport from "./components/DefaultExport/DefaultExport";
//import { NamedExport as Named } from "./components/NamedExport/NamedExport";
//import TernaryOperator from "./components/TernaryOperator/TernaryOperator";
//import Example from "./ExampleFirst";
//import CommonHandling from "./components/EventHandling/CommonHandling";
//import HandleKeyPress from "./components/EventHandling/HandleKeyPress";
//import btnModule from "./Button.module.css";
//import Button from "./Button.js";
//import ShowHidePassword from "./components/ShowHidePassword/ShowHidePassword.jsx";
function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
     localStorage.setItem('current_theme', theme);
  }, [theme])
  /* const obj = {
    name: "Kaushik",
    age: 20,
    city: "New York",
    email: "k.purni89566@gmail.com",
    phone: "6290468136",
  };*/

  /* const handleClick = () => {
    alert("Button Clicked");
  };*/
  return (
    <div className={`App ${theme}`}>
      {/*   <img src={logo} alt="" /> */}
      {/* 
      <Named />
      <DefaultExport />
      <Example />
      <ClassComponents />
      <TernaryOperator name="Kaushik"/>
     <Card/>
       <CardPage/>
        <ObjectChildrenComponent/>
          <FontAwesome/>
    <ImportCss/>
    <EventHandling/>
      <UseStateHook/>
      <ConditionalStateMent/>
      <ConditionalStateMent1/>
     <EventHandling1/>
      <EventHandling2 />
       <UsingBind/>
      <HandleClickClassComponents/>
         <CommonHandling />
      <HandleKeyPress/>
         <ShowHidePassword/>*/}

      {/* React Module 
        <Button onClick={handleClick} label="Click me"></Button>
      */}
      {/*  <ReactProps obj={obj} cname="MyCompany" /> */}
      {/* <ChildrenProps>
        <h1>Welcome to Children Props Section</h1>
      </ChildrenProps> */}
      {/* React Module <>
        <button className={btnModule.error}>Error</button>
        <button className={btnModule.warning}>Error</button>
        <button className={btnModule.success}>Error</button>
      </>
     */}

      {/*  <ResponsiveMenu/> */}

      {/*   <ModelOverlay/> */}
      {/*  <FaqUsingState/> */}

      {/*  <ImportImage/> */}

     {/* <Layout/>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes> */}
    {/*   <Faqs/> */}
     {/*  <NotificationComponent/> */}
     {/* <TodoList/> */}
   {/*   <Tabing/> */}
   <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App;

/*function Card() {
  return (
    <>
     <h2>Card</h2>
    </>
  )
}*/
