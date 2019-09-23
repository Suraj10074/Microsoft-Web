import React from 'react';
import './Navbar.css';
function Navbar() {
  return (
  <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#"><img class="Logo" src="http://www.finsmes.com/wp-content/uploads/2016/02/Microsoft.jpg"/></a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href=""><small>Office</small> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#"><small>Windows</small> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#"><small>Surface</small> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#"><small>Xbox</small> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#"><small>Support</small> <span class="sr-only">(current)</span></a>
      </li> 
    </ul>
    <form class="form-inline my-2 my-lg-0">
      
      <a class="nav-link" href="#"><small class="text-dark">All Microsoft</small> <span class="sr-only">(current)</span></a>
      <a class="navbar-brand" href="#"><img class="Glass" src="https://cdn0.iconfinder.com/data/icons/business-and-office-29/512/335_search__magnifying_glass_glass_-128.png"/></a>
      <a class="navbar-brand" href="#"><img class="Cart" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/shopping_cart_empty-128.png"/></a>
      <a class="navbar-brand" href="#"><img class="Sign" src="https://cdn2.iconfinder.com/data/icons/ui-elements-23/50/Exports_account-user-person-signin-login-128.png"/></a>
    </form>
  </div>
</nav>
  </div>
  );
}

export default Navbar;
