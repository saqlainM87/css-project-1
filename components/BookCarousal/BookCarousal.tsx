'use client';

import { ReactElement, useRef, useState } from 'react';
import { Button, Col, Row, Typography } from 'antd';
import Slider, { Settings } from 'react-slick';
import cx from 'classnames';
import Image from 'next/image';

import styles from './bookCarousal.module.scss';

import LeftIcon from '@/assets/icons/Chevron left.svg';
import RightIcon from '@/assets/icons/Chevron right.svg';

export interface BookCarousalProps {
    children?: ReactElement[];
}

const BookCarousal = ({ children }: BookCarousalProps) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
    const sliderRef = useRef<Slider>(null);

    const settings: Settings = {
        rows: 1,
        dots: false,
        infinite: true,
        speed: 500,
        initialSlide: 0,
        prevArrow: <></>,
        nextArrow: <></>,
        afterChange(currentSlide) {
            setCurrentSlideIndex(currentSlide);
        },
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
        swipeToSlide: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const renderSliderIndicator = () => {
        return Array.from({ length: children?.length || 0 }).map((_, index) => (
            <div
                key={index}
                className={cx('bg-custom-purple-1 w-3 h-3 rounded-full', {
                    'opacity-30': currentSlideIndex !== index,
                })}
            />
        ));
    };

    return (
        <Row
            gutter={[{ xl: 36 }, 12]}
            justify="center"
            align="middle"
            className="relative"
        >
            <div className="hidden absolute left-[-2rem] xl:flex justify-center">
                <Button
                    className="rounded-full"
                    icon={<Image src={LeftIcon} alt="prev-slide-button" />}
                    onClick={() => sliderRef.current?.slickPrev()}
                />
            </div>
            <Col xs={24} xl={22} className="xl:p-0">
                <Slider ref={sliderRef} {...settings} className={styles.slider}>
                    {children}
                </Slider>
            </Col>
            <div className="hidden absolute right-[-1.5rem] xl:flex justify-center">
                <Button
                    className="rounded-full"
                    icon={<Image src={RightIcon} alt="next-slide-button" />}
                    onClick={() => sliderRef.current?.slickNext()}
                />
            </div>

            <Col
                xs={24}
                className="flex justify-center items-center gap-6 mt-6"
            >
                {renderSliderIndicator()}
            </Col>
        </Row>
    );
};

export default BookCarousal;
