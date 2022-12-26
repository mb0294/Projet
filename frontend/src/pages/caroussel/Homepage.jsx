import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/actions/actionsUser';
import './carousel.css'
const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userinfo = useSelector((state)=>state.userReducer.user)
  return (
    <div>
 <div>
  <header>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" style={{backgroundImage: 'url("https://source.unsplash.com/RCAhiGJsUUE/1920x1080")'}}>
          <img src='./img/lsok.jpg'/>
          <div className="carousel-caption">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item" style={{backgroundImage: 'url("https://source.unsplash.com/wfh8dDlNFOk/1920x1080")'}}>
          <div className="carousel-caption">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item" style={{backgroundImage: 'url("https://source.unsplash.com/lHGeqh3XhRY/1920x1080")'}}>
          <div className="carousel-caption">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </header>
  {/* Page Content */}
  <section className="py-5">
    <div className="container">
      <h1 className="fw-light">Half Page Image Slider</h1>
      <p className="lead">The background images for the slider are set directly in the HTML using inline CSS. The images
        in this snippet are from <a href="https://unsplash.com">Unsplash</a>!</p>
    </div>
  </section>
</div>

</div>
  )
}

export default Homepage