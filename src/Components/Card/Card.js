import React from 'react';
import "./Card.css"
function Card() {
  return (
  <div class="Mar">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
            <div class="card mb-3 shadow-sm">
                <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2Ogje?ver=bdc6&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title text-dark font-weight-bolder">This is your 365</h5>
                <p class="card-text"><small class="text-muted">Discover what's possible every day with Office 365.</small></p>
                <div class="d-flex justify-content-between align-items-center">
                <a class="text-primary" href="home.html">Shop Now  </a>
                </div>
                </div>
            </div>
            </div>

            <div class="col-md-3">
            <div class="card mb-3 shadow-sm">
                <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWfbJT?ver=8259&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title text-dark font-weight-bolder">Surface Book 2</h5>
                <p class="card-text"><small class="text-muted">Powerhouse performance in the ultimate laptop.</small></p>
                <div class="d-flex justify-content-between align-items-center">
                <a class="text-primary" href="home.html">Shop Now  </a>
                </div>
                </div>
            </div>
            </div>

            <div class="col-md-3">
            <div class="card mb-3 shadow-sm">
                <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE37bh1?ver=33cd&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title text-dark font-weight-bolder">Xbox Game Pass Ultimate</h5>
                <p class="card-text"><small class="text-muted">Xbox Live Gold and Over 100 high</small></p>
                <div class="d-flex justify-content-between align-items-center">
                    <a class="text-primary" href="home.html">Shop Now  </a>
                </div>
                </div>
            </div>
            </div>

            <div class="col-md-3">
            <div class="card mb-3 shadow-sm">
                <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1uWfh?ver=0868&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title text-dark font-weight-bolder">Xbox One S</h5>
                <p class="card-text"><small class="text-muted">The ultimate games and 4K entertainment system.</small></p>
                <div class="d-flex justify-content-between align-items-center">
                <a class="text-primary" href="home.html">Learn More </a>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  </div>
  );
}

export default Card;
