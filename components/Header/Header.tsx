'use client';

import { Badge, Button, Col, Divider, Row, Typography } from 'antd';
import Image from 'next/image';
import cx from 'classnames';

import LogoIcon from '@/assets/icons/Logo.svg';
import SearchIcon from '@/assets/icons/Search.svg';
import DownloadIcon from '@/assets/icons/Download.svg';
import MenuIcon from '@/assets/icons/Menu.svg';
import PhoneIcon from '@/assets/icons/Phone.svg';
import HeartIcon from '@/assets/icons/Heart.svg';
import UserIcon from '@/assets/icons/User.svg';

import styles from './header.module.scss';

const Header = () => {
    return (
        <div className="px-4 py-6 md:px-5 flex justify-between items-middle border-0 border-b border-solid border-custom-purple-1">
            <Row align="middle">
                <Col>
                    <Image src={LogoIcon} alt="logo" />
                </Col>
                <Col>
                    <Divider
                        type="vertical"
                        className={cx(styles.divider, 'mx-1 md:mx-2')}
                    />
                </Col>
                <Col xs={8}>
                    <Typography.Text className="text-custom-purple-1/[0.6] text-xs">
                        We love books
                    </Typography.Text>
                </Col>
                <Col>
                    <div className="ml-1 md:ml-10 lg:hidden">
                        <Button
                            type="text"
                            icon={<Image src={SearchIcon} alt="search" />}
                        />
                    </div>
                </Col>
            </Row>

            <Row align="middle" className="gap-3 md:gap-0">
                <Col className="hidden md:flex gap-2 mr-5">
                    <div>
                        <Image src={PhoneIcon} alt="phone" />
                    </div>
                    <a href="tel:+445 87 999 0008">
                        <Typography.Text className="text-base text-text-color-1 font-">
                            +445 87 999 000
                        </Typography.Text>
                    </a>
                </Col>

                <Col>
                    <Badge count={0} className={styles.badge}>
                        <div>
                            <Button
                                type="text"
                                icon={<Image src={DownloadIcon} alt="cart" />}
                            />
                        </div>
                    </Badge>
                </Col>
                <Col className="hidden md:block">
                    <Divider
                        type="vertical"
                        className={cx(styles.divider, 'mx-3 mt-1 h-5')}
                    />
                </Col>
                <Col className="hidden md:block">
                    <Badge count={3} className={styles.badge}>
                        <div>
                            <Button
                                type="text"
                                icon={<Image src={HeartIcon} alt="favorite" />}
                            />
                        </div>
                    </Badge>
                </Col>
                <Col className="hidden md:block">
                    <Divider
                        type="vertical"
                        className={cx(styles.divider, 'mx-3 mt-1 h-5')}
                    />
                </Col>
                <Col className="hidden md:block">
                    <div>
                        <Button
                            type="text"
                            icon={<Image src={UserIcon} alt="account" />}
                        />
                    </div>
                </Col>

                <Col className="md:ml-4">
                    <div>
                        <Button
                            type="text"
                            icon={<Image src={MenuIcon} alt="menu" />}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Header;
