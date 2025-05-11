import React from 'react'; 
import { Link } from 'react-router-dom'; 
function PageOne () { 
return ( 
<div align="center"> 
<h1>Welcome to page 1</h1> 
<Link to='/'>return</Link> 
</div> 
); 
}; 
export default PageOne; 