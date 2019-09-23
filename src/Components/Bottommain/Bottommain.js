import React from 'react';
import './Bottommain.css';
function Bottommain() {
  return (
  <div>
    <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                              <div class="carousel-item active" data-interval="2000">
                                    <img src="https://images.unsplash.com/photo-1535462169218-aadfe41bda09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1326&q=80" class="d-block w-100" alt="..."/>
                                </div>
                              <div class="carousel-item" data-interval="2000">
                                <img src="https://images.unsplash.com/photo-1519888121805-7747f5bba75b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80" class="d-block w-100" alt="..."/>
                              </div>
                            </div>
                            <a class="carousel-control-prev" href="#" role="button" data-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="sr-only">Next</span>
                            </a>
                          </div>
  </div>
  );
}

export default Bottommain;

