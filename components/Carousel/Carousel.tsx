import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import Swiper, { Autoplay, EffectFade, Thumbs } from 'swiper';

Swiper.use([Autoplay, EffectFade, Thumbs]);

import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import styles from './carousel.module.scss';

type Props = {
  carouselItems: any;
};

const Carousel = ({ carouselItems }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const slideTo = useCallback(
    (item) => {
      swiperInstance.slideTo(item);
    },
    [swiperInstance],
  );
  console.log(activeIndex);

  return (
    <div className={styles.carousel}>
      <ReactSwiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={setSwiperInstance}
        allowTouchMove={false}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        effect="fade"
        watchSlidesProgress
        onSlideChange={() => {
          setActiveIndex(swiperInstance.activeIndex);
        }}
        thumbs={{
          swiper: thumbsSwiper,
        }}
      >
        {carouselItems.map(({ preview, logo, name, title, description, website }: any) => (
          <SwiperSlide key={title}>
            <div className={styles.carouselItem}>
              <img src={preview} className={styles.carouselItem__img} />
              <div className={styles.carouselItem__content}>
                <div className={styles.carouselItem__logo}>
                  <img src={logo} alt={`${name} logotype`} />
                  <span className={styles.carouselItem__name}>{name}</span>
                </div>
                <div className={styles.carouselItem__info}>
                  <div className={styles.carouselItem__title}>{title}</div>
                  {description ? (
                    <div className={styles.carouselItem__description}>{description}</div>
                  ) : null}
                  <div className={styles.carouselItem__button}>
                    <a href={website} target="_blank">
                      Go to Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </ReactSwiper>

      <ReactSwiper
        slidesPerView={4}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        className={styles.carouselThumbContainer}
        spaceBetween={30}
      >
        {carouselItems.map(({ logo, name, title }: any, index) => (
          <SwiperSlide key={title}>
            <div
              className={classNames(styles.carouselThumb, {
                [styles.carouselThumb_active]: activeIndex === index,
              })}
            >
              <div className={styles.carouselThumb__logo}>
                <img src={logo} alt={`${name} logotype`} />
                <span className={styles.carouselThumb__name}>{name}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </ReactSwiper>
    </div>
  );
};

export default Carousel;