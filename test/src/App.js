import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import MainPage from "./MainPage"; 
import PageOne from "./PageOne"; 
import PageTwo from "./PageTwo" 
; 
function App() { 
return ( 
<div className="App" > 
<BrowserRouter> 
<Routes> 
<Route exact path='/' element={<MainPage />}/> 
<Route path='/page-1' element={<PageOne />}/> 
<Route path='/page-2' element={<PageTwo />}/> 
</Routes> 
</BrowserRouter> 
</div> 
); 
} 
export default App; 