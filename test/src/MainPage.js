import React from 'react'; 
import { Link } from 'react-router-dom'; 
function MainPage() { 
return ( 
<div align="center"> 
<h1>Welcome to Main Page xxxxxxxxxxxxxx</h1> 
<Link to='/page-1'>Page 1</Link> 
<br/><br/> 
<Link to='/page-2'>Page 2</Link> 
</div> 
); 
}; 
export default MainPage; 