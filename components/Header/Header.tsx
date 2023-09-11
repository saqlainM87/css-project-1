'use client';

import {
    Badge,
    Button,
    Col,
    Divider,
    Menu,
    MenuProps,
    Row,
    Typography,
    Input,
} from 'antd';
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
import Link from 'next/link';

const Header = () => {
    const items: MenuProps['items'] = [
        {
            label: 'Privacy policy',
            key: 'privacyPolicy',
        },
        {
            label: 'Warranty',
            key: 'warranty',
        },
        {
            label: 'Shippping',
            key: 'shipping',
        },
        {
            label: 'Returns',
            key: 'returns',
        },
    ];

    const subMenuItems: MenuProps['items'] = [
        {
            label: 'The must read',
            key: 'mustRead',
        },
        {
            label: 'News',
            key: 'news',
        },
        {
            label: 'Promotion of the mount',
            key: 'promotion',
        },
        {
            label: 'Publishes',
            key: 'publish',
        },
        {
            label: 'Subscribe to the newsletter',
            key: 'newsletter',
        },
    ];

    const renderTelephone = () => (
        <>
            <div>
                <Image src={PhoneIcon} alt="phone" />
            </div>
            <a href="tel:+445 87 999 0008">
                <Typography.Text className="text-base text-text-color-1">
                    +445 87 999 000
                </Typography.Text>
            </a>
        </>
    );

    return (
        <div>
            <div className="px-4 py-6 md:px-5 border-0 border-b border-solid border-custom-purple-1">
                <div className="flex justify-between items-center mx-auto max-w-7xl">
                    <Row align="middle" className="lg:w-32">
                        <Col>
                            <Link href="">
                                <Image src={LogoIcon} alt="logo" />
                            </Link>
                        </Col>
                        <Col>
                            <Divider
                                type="vertical"
                                className={cx(styles.divider, 'mx-1 md:mx-2')}
                            />
                        </Col>
                        <Col xs={8} lg={9}>
                            <Typography.Text className="text-custom-purple-1/[0.6] text-xs">
                                We love books
                            </Typography.Text>
                        </Col>
                        <Col className="md:hidden">
                            <div className="ml-1 md:ml-10 lg:hidden">
                                <Button
                                    type="text"
                                    icon={
                                        <Image src={SearchIcon} alt="search" />
                                    }
                                />
                            </div>
                        </Col>
                    </Row>

                    <div
                        className={cx(
                            styles.inputWrapper,
                            'hidden md:block flex-1 md:mr-8 lg:mr-0'
                        )}
                    >
                        <Input
                            size="large"
                            placeholder="Type any book here "
                            suffix={<Image src={SearchIcon} alt="search" />}
                            className="bg-bg-color-1"
                        />
                    </div>

                    <Row
                        align="middle"
                        className={cx(styles.navigationMenu, 'hidden lg:flex')}
                    >
                        <Col xs={24}>
                            <Menu
                                mode="horizontal"
                                items={items}
                                className="text-text-color-3"
                            />
                        </Col>
                    </Row>

                    <Row align="middle" className="gap-3 md:gap-0">
                        <Col className="hidden md:flex lg:hidden gap-2 mr-5">
                            {renderTelephone()}
                        </Col>

                        <Col>
                            <Badge count={0} className={styles.badge}>
                                <div>
                                    <Button
                                        type="text"
                                        icon={
                                            <Image
                                                src={DownloadIcon}
                                                alt="cart"
                                            />
                                        }
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
                                        icon={
                                            <Image
                                                src={HeartIcon}
                                                alt="favorite"
                                            />
                                        }
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
                                    icon={
                                        <Image src={UserIcon} alt="account" />
                                    }
                                />
                            </div>
                        </Col>

                        <Col className="md:ml-4 lg:hidden">
                            <div>
                                <Button
                                    type="text"
                                    icon={<Image src={MenuIcon} alt="menu" />}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="hidden xl:block px-4 py-6 md:px-5 border-0 border-b border-solid border-custom-purple-1">
                <Row
                    align="middle"
                    className={cx(
                        styles.navigationMenu,
                        'hidden xl:flex justify-between mx-auto max-w-7xl'
                    )}
                >
                    <Col xs={14}>
                        <Menu
                            mode="horizontal"
                            items={subMenuItems}
                            className="text-text-color-1 text-base"
                        />
                    </Col>
                    <Col className="hidden xl:flex gap-2 ml-10">
                        {renderTelephone()}
                    </Col>
                    <Col xs={4}>
                        <Button
                            type="default"
                            className="rounded-sm text-base px-8 py-3 w-full h-full text-custom-purple-1 border-custom-purple-1"
                        >
                            Request a call
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Header;
