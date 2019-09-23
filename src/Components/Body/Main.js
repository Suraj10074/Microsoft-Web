import React from 'react';
import './Main.css';
function Main() {
  return (
  <div>
    <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                              <div class="carousel-item active" data-interval="1500">
                                    <img src="https://images.unsplash.com/photo-1538370621607-4919ce7889b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80" class="d-block w-100" alt="..."/>
                                </div>
                              <div class="carousel-item " data-interval="1500">
                                <img src="https://images.unsplash.com/photo-1544603396-e4a163c7c658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="..."/>
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

export default Main;

