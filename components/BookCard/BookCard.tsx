'use client';

import { Button, Card, Col, Row } from 'antd';
import cx from 'classnames';
import Image from 'next/image';

import DownloadWhiteIcon from '@/assets/icons/DownloadWhite.svg';
import heartOutlinedIcon from '@/assets/icons/ant-design_heart-outlined.svg';

import harlemShuffleImage from '@/assets/images/9781982185824 2.png';

import styles from './bookCard.module.scss';

const { Meta } = Card;

// TODO: Implement props
const BookCard = () => {
    return (
        <div>
            <Card
                className={cx('w-[17.125rem]', styles.bookCard)}
                hoverable
                cover={<Image alt="example" src={harlemShuffleImage} />}
            >
                <Meta title="Harlem Shuffle" description="Colson Whitehead" />
                <Row className="mt-4" justify="space-between">
                    <Col className="text-xl font-semibold">$26.92</Col>
                    <Col>
                        <Button
                            type="text"
                            icon={<Image src={heartOutlinedIcon} alt="like" />}
                        />
                    </Col>
                </Row>
            </Card>
            <Button
                type="primary"
                className="rounded-sm text-2xl font-medium px-8 py-3 w-full h-full text-white border-custom-purple-1 bg-custom-purple-1 flex justify-center items-center"
                icon={
                    <Button
                        type="text"
                        icon={<Image src={DownloadWhiteIcon} alt="cart" />}
                    />
                }
            >
                Add to cart
            </Button>
        </div>
    );
};

export default BookCard;
