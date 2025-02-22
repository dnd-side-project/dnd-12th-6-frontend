'use client';

import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import splashAnimation from 'public/files/splash.json';
import { useState, useEffect, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import '@/styles/onboarding.css';

const onboardingSlides = [
  {
    id: 1,
    label: '초대장 제작',
    title: '초대장을 간편하게 만들어요',
    subText: '초대장을 선택하고 정보를 입력하면 완성!\n빠르게 초대장을 만들어보세요.',
    image: '/images/service/onboarding_1.png',
  },
  {
    id: 2,
    label: '초대 공유하기',
    title: '친구를 쉽게 초대하세요',
    subText: '링크 한 번이면 초대 완료!\n원하는 방식으로 초대장을 공유하세요.',
    image: '/images/service/onboarding_2.png',
  },
  {
    id: 3,
    label: '모임 관리하기',
    title: '모임을 편하게 관리해요',
    subText: '참석 여부를 한눈에 확인!\n모임을 효율적으로 준비해보세요.',
    image: '/images/service/onboarding_3.png',
  },
];

export const Onboarding = () => {
  const router = useRouter();
  const swiperRef = useRef<SwiperType | null>(null);
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isSplashVisible]);

  const handleNext = () => {
    if (swiperRef.current) {
      if (swiperRef.current.activeIndex === onboardingSlides.length - 1) {
        router.push('/login');
      } else {
        swiperRef.current.slideNext(); // 다음 슬라이드로 이동
      }
    }
  };

  return (
    <div
      className={clsx(
        'h-dvh flex justify-center items-center relative',
        isSplashVisible ? 'bg-splashGradient' : 'bg-white',
      )}
    >
      <AnimatePresence mode='wait'>
        {isSplashVisible ? (
          <motion.div
            key='splash'
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className='absolute inset-0 flex flex-col justify-center items-center'
          >
            <div className='flex flex-col items-center justify-center'>
              <div className='absolute top-[40%] typo-label1 font-semibold text-gray-1 text-center'>
                소중한 모임, 특별한 초대
              </div>
              <Lottie animationData={splashAnimation} className='w-full h-fit' />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key='onboarding'
            initial={{ opacity: 0, transition: { duration: 0.3 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className='absolute inset-0 flex flex-col justify-center items-center'
          >
            <Swiper
              modules={[Pagination]}
              pagination={{ el: '.swiper-pagination', clickable: true }}
              loop={false}
              className='w-full max-w-md'
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {onboardingSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className='flex flex-col items-center justify-center mb-48'>
                    <div className='typo-label1 font-semibold text-primary-strong'>
                      {slide.label}
                    </div>
                    <div className='typo-title font-bold text-gray-7 mt-4 mb-[14px]'>
                      {slide.title}
                    </div>
                    <div className='typo-label1 font-normal text-gray-5 text-center'>
                      {slide.subText}
                    </div>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={360}
                      height={252}
                      className='mt-[30px]'
                    />
                  </div>
                </SwiperSlide>
              ))}
              <div className='swiper-pagination flex justify-center w-full'></div>
            </Swiper>
            <div className='absolute bottom-[40px] flex justify-between w-full px-[22px]'>
              {/* SKIP 버튼 -> 특정 페이지로 이동 */}
              <button
                onClick={() => router.push('/login')}
                className='w-[100px] rounded-[7px] py-[11px] bg-gray-1 typo-body font-semibold text-gray-5'
              >
                SKIP
              </button>
              {/* 다음 버튼 -> 다음 슬라이드로 이동 */}
              <button
                onClick={handleNext}
                className='w-[100px] rounded-[7px] py-[11px] bg-primary-strong typo-body font-semibold text-white'
              >
                다음
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
