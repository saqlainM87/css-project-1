'use client';

import { Button, Col, Row } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

import LogoIcon from '@/assets/icons/LogoLight.svg';
import PhoneIcon from '@/assets/icons/PhoneLight.svg';
import ClockIcon from '@/assets/icons/Clock.svg';
import MailIcon from '@/assets/icons/Mail.svg';
import FacebookIcon from '@/assets/icons/raphael_facebook.svg';
import InstagramIcon from '@/assets/icons/ant-design_instagram-filled.svg';
import TwitterIcon from '@/assets/icons/fa6-brands_square-twitter.svg';
import PaypalIcon from '@/assets/icons/paipal 1.svg';
import MastercardIcon from '@/assets/icons/MasterCard-Logo-1979 1.svg';
import VisaIcon from '@/assets/icons/VISA-card-logo- 1.svg';

import styles from './footer.module.scss';

const Footer = () => {
    return (
        <div>
            <Row
                className="mt-5 px-4 py-10 md:px-5 md:py-12 bg-custom-purple-1"
                gutter={[0, 32]}
            >
                <Col xs={24} md={6}>
                    <Link href="">
                        <Image src={LogoIcon} alt="logo" />
                    </Link>
                </Col>

                <Col xs={12} md={6} className="flex flex-col gap-5">
                    <span className="text-sm md:text-base font-semibold text-white">
                        Categories
                    </span>
                    <span className="text-sm md:text-base text-white">
                        Psychology
                    </span>
                    <span className="text-sm md:text-base text-white">
                        Self-Help
                    </span>
                    <span className="text-sm md:text-base text-white">
                        Romance
                    </span>
                    <span className="text-sm md:text-base text-white">
                        Mystery
                    </span>
                </Col>

                <Col xs={12} md={6} className="flex flex-col gap-5">
                    <span className="text-sm md:text-base font-semibold text-white">
                        For kids
                    </span>
                    <span className="text-sm md:text-base text-white">
                        Games
                    </span>
                    <span className="text-sm md:text-base text-white">
                        Comics
                    </span>
                    <span className="text-sm md:text-base text-white">
                        Fantasy
                    </span>
                </Col>

                <Col xs={12} md={6} className="flex flex-col gap-5">
                    <span className="text-sm md:text-base font-semibold text-white">
                        E-Books
                    </span>
                    <span className="text-sm md:text-base text-white">
                        Fiction
                    </span>
                    <span className="text-sm md:text-base text-white">
                        Historical
                    </span>
                    <span className="text-sm md:text-base text-white">
                        Horror
                    </span>
                </Col>

                <Col xs={12} md={6} className="flex flex-col gap-5 md:order-2">
                    <span className="text-sm md:text-base font-semibold text-white">
                        Help & Contacts
                    </span>
                    <div className="flex gap-2">
                        <span>
                            <Image src={PhoneIcon} alt="phone" />
                        </span>
                        <a
                            href="tel:+445 87 999 0008"
                            className="text-sm md:text-base text-white"
                        >
                            <span>+445 87 999 000</span>
                        </a>
                    </div>
                    <div className="flex gap-2">
                        <span>
                            <Image src={ClockIcon} alt="clock" />
                        </span>
                        <span className="text-sm md:text-base text-white">
                            Mo-Fri, 9 AM - 11 PM
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <span>
                            <Image src={MailIcon} alt="mail" />
                        </span>
                        <a href="mailto:b.world@store.ro">
                            <span className="text-sm md:text-base text-white">
                                b.world@store.ro
                            </span>
                        </a>
                    </div>
                </Col>

                <Col
                    xs={12}
                    md={6}
                    className="flex flex-col md:flex-row gap-2 self-end md:order-1"
                >
                    <a href="">
                        <span className="text-sm md:text-base text-white">
                            <Image src={FacebookIcon} alt="facebook" />
                        </span>
                    </a>
                    <a href="">
                        <span className="text-sm md:text-base text-white">
                            <Image src={InstagramIcon} alt="instagram" />
                        </span>
                    </a>
                    <a href="">
                        <span className="text-sm md:text-base text-white">
                            <Image src={TwitterIcon} alt="twitter" />
                        </span>
                    </a>
                </Col>

                <Col
                    xs={12}
                    md={6}
                    className="flex flex-col md:order-3 md:ml-auto"
                >
                    <span className="text-sm text-white">
                        If you have questions, you can contact us or we will do
                        it for you.
                    </span>
                    <div className="my-6">
                        <Button
                            type="link"
                            className="rounded-sm text-base py-3 w-full h-full text-white border-white"
                        >
                            Request a call
                        </Button>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2">
                        <a href="">
                            <span className="text-sm md:text-base text-white">
                                <Image src={PaypalIcon} alt="paypal" />
                            </span>
                        </a>
                        <a href="">
                            <span className="text-sm md:text-base text-white">
                                <Image src={MastercardIcon} alt="mastercard" />
                            </span>
                        </a>
                        <a href="">
                            <span className="text-sm md:text-base text-white">
                                <Image src={VisaIcon} alt="visa" />
                            </span>
                        </a>
                    </div>
                </Col>
            </Row>

            <div
                className={cx(
                    'py-4 border-0 border-t border-solid border-white/60',
                    styles.copyright
                )}
            >
                <span className="text-xs md:text-base text-white/60">
                    © All copyrights are reserved. B-World 2022.
                </span>
            </div>
        </div>
    );
};

export default Footer;
