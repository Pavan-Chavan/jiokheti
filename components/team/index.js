import React from "react";
import Slider from "react-slick";
import Link from 'next/link'


const TeamSection = () => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  var settings = {
    dots: false,
    arrows: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };


  const Teams = [
    {
      tImg: '/images/team/img-1.jpg',
      title: 'Chris Fletcher',
      des: 'Ceo Beximo',
    },
    {
      tImg: '/images/team/img-2.jpg',
      title: 'Ema Aliana',
      des: 'Marketing Manager',
    },
    {
      tImg: '/images/team/img-3.jpg',
      title: 'John Clyne',
      des: 'Marketing Officer',
    },
    {
      tImg: '/images/team/img-4.jpg',
      title: 'Lily Jameson',
      des: 'Marketing Manager',
    },
  ]

  return (
    <section className="team-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-title">
              <h2>Our Expart <span>Team</span></h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                industry has been the industry's standard consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <div className="team-grids team-slider owl-carousel">
              <Slider {...settings}>
                {Teams.map((team, tms) => (
                  <div className="grid" key={tms}>
                    <div className="img-holder">
                      <img src={team.tImg} alt="" />
                    </div>
                    <div className="details">
                      <h4>{team.title}</h4>
                      <p>{team.des}</p>
                      <ul>
                        <li><Link onClick={ClickHandler} href="/about"><i className="ti-facebook"></i></Link></li>
                        <li><Link onClick={ClickHandler} href="/about"><i className="ti-twitter-alt"></i></Link></li>
                        <li><Link onClick={ClickHandler} href="/about"><i className="ti-linkedin"></i></Link></li>
                        <li><Link onClick={ClickHandler} href="/about"><i className="ti-instagram"></i></Link></li>
                      </ul>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection;