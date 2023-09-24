'use client';

import { useRef } from 'react';
import { useSignal } from '@preact/signals-react';
import { Button, Col, Row, Typography } from 'antd';
import Slider, { Settings } from 'react-slick';
import cx from 'classnames';
import Image from 'next/image';

import styles from './heroCarousal.module.scss';

import LeftIcon from '@/assets/icons/Chevron left.svg';
import RightIcon from '@/assets/icons/Chevron right.svg';
import BookImage from '@/assets/images/book.png';

const SLIDE_COUNT = 4;

const HeroCarousal = () => {
    const currentSlideIndex = useSignal<number>(0);
    const sliderRef = useRef<Slider>(null);

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <></>,
        nextArrow: <></>,
        afterChange(currentSlide) {
            currentSlideIndex.value = currentSlide;
        },
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const renderSlide = () => {
        return Array.from({ length: SLIDE_COUNT }).map((_, index) => (
            <Row key={index} gutter={[0, 16]}>
                <Col md={10} lg={10} xl={11}>
                    <Row gutter={[0, { xs: 16, md: 16, lg: 24 }]}>
                        <Col>
                            <Button
                                type="default"
                                className="rounded-sm text-base px-3 w-auto h-full text-custom-purple-2 border-custom-purple-2"
                            >
                                <span className="text-xs">
                                    Author of august
                                </span>
                            </Button>
                        </Col>
                        <Col>
                            <Typography.Text
                                className={cx(
                                    styles.carousalHeader,
                                    'font-bold text-text-color-4'
                                )}
                            >
                                Eric-Emanuel Schmitt
                            </Typography.Text>
                            <Typography.Paragraph className="text-sm md:text-base m-0 mt-4 text-text-color-5">
                                Eric-Emmanuel Schmitt has been awarded more than
                                20 literary prizes and distinctions, and in 2001
                                he received the title of Chevalier des Arts et
                                des Lettres. His books have been translated into
                                over 40 languages.
                            </Typography.Paragraph>
                        </Col>

                        <Col xs={12}>
                            <Button
                                type="primary"
                                className="rounded-sm text-base px-8 py-3 w-auto h-full text-white border-custom-purple-1 bg-custom-purple-1"
                            >
                                View his boooks
                            </Button>
                        </Col>
                    </Row>
                </Col>

                <Col
                    xs={24}
                    md={14}
                    xl={12}
                    className="flex justify-center lg:flex-wrap"
                >
                    <Typography.Text className="hidden lg:block basis-1/3 mr-auto text-text-color-5 text-lg tracking-widest pl-8 xl:pl-16 uppercase">
                        Autographed books + 30% discount
                    </Typography.Text>
                    <Image
                        src={BookImage}
                        alt="book"
                        className="h-auto w-2/3 md:w-5/6 lg:basis-2/3 mx-auto object-contain"
                    />
                    <Typography.Text className="hidden lg:block basis-full text-end text-base text-text-color-6 xl:mr-[-5rem]">
                        *within the stock limit
                    </Typography.Text>
                </Col>
            </Row>
        ));
    };

    const renderSliderIndicator = () => {
        return Array.from({ length: SLIDE_COUNT }).map((_, index) => (
            <div
                key={index}
                className={cx('bg-custom-purple-1 w-[1px]', {
                    'opacity-30': currentSlideIndex.value !== index,
                })}
            />
        ));
    };

    return (
        <Row gutter={[{ xl: 36 }, 12]} justify="center">
            <Col className="hidden xl:flex gap-4 flex-wrap items-stretch basis-1 h-[19.5rem]">
                {renderSliderIndicator()}
            </Col>

            <Col xs={24} xl={23}>
                <Slider ref={sliderRef} {...settings} className={styles.slider}>
                    {renderSlide()}
                </Slider>
            </Col>

            <Col xs={24} className="flex justify-center items-center gap-7">
                <Button
                    className="rounded-full"
                    icon={<Image src={LeftIcon} alt="prev-slide-button" />}
                    onClick={() => sliderRef.current?.slickPrev()}
                />
                <Button
                    className="rounded-full"
                    icon={<Image src={RightIcon} alt="prev-slide-button" />}
                    onClick={() => sliderRef.current?.slickNext()}
                />
            </Col>
        </Row>
    );
};

export default HeroCarousal;
