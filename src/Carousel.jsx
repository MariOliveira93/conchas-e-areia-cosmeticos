import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// 1. Importe as imagens com os nomes exatos que estão na sua pasta assets
import bannerOlhos from './assets/pagination.png'; 
import bannerConchas from './assets/navigation.png'; 

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css';

function Carousel() {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        <SwiperSlide>
          <div 
            className="slide-content" 
            style={{ backgroundImage: `url(${bannerConchas})` }}
          >
            <div className="slide-text">
              <h2>Beleza Natural</h2>
              <p>Inspirada nas texturas do mar e da areia.</p>
              <button>Descubra a Coleção</button>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div 
            className="slide-content" 
            style={{ backgroundImage: `url(${bannerOlhos})` }}
          >
            <div className="slide-text">
              <h2>Olhar Marcante</h2>
              <p>Conheça nossa nova linha de delineadores e rímeis.</p>
              <button>Comprar Agora</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;