import Slider from "react-slick";

const Client = () => {

      var settings = {
        dots: false,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };
      return (
        <section className="client-area">
            <div className="container">
                <h2 className="hidden">client</h2>
                <div className="client-item">
                    <div className="client-carousel">
                        <Slider {...settings}>
                            <img src='/images/client/img-1.png' alt="clinet"/>
                            <img src='/images/client/img-2.png' alt="clinet"/>
                            <img src='/images/client/img-3.png' alt="clinet"/>
                            <img src='/images/client/img-4.png' alt="clinet"/>
                            <img src='/images/client/img-5.png' alt="clinet"/>
                            <img src='/images/client/img-1.png' alt="clinet"/>
                            <img src='/images/client/img-2.png' alt="clinet"/>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
      );
  }

export default Client;