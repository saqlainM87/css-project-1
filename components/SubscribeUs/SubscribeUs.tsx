'use client';

import { Button, Col, Form, Input, Row } from 'antd';
import Image from 'next/image';

import MapImage from '@/assets/images/map.png';

import styles from './subscribeUs.module.scss';

const SubscribeUs = () => {
    return (
        <Row className="mt-16 xl:mt-24" justify="space-between">
            <Col xs={24} xl={12} className="self-end">
                <Row>
                    <Col xs={24} md={18} xl={21} className="mb-6">
                        <span className="text-color-6 text-2xl font-semibold md:text-4xl">
                            Did you know us?
                        </span>
                    </Col>

                    <Col
                        xs={24}
                        md={18}
                        xl={21}
                        className="text-text-color-7 text-sm md:text-base"
                    >
                        <p>
                            We are about books and our purpose is to show you
                            the book who can chage your life or distract you
                            from the real world în a better one. BWorld works
                            with the must popular publishs just for your
                            delight.
                            <br />
                            <br />
                            If you are about books, you must to subscribe to
                            <strong> our newsletter.</strong>
                        </p>
                    </Col>

                    <Col xs={24} md={18} xl={21} className="mt-4">
                        <Form autoComplete="off">
                            <Form.Item name="name">
                                <Input
                                    placeholder="Your name"
                                    className="border-0 border-b rounded-none border-custom-purple-1 border-opacity-40 shadow-none placeholder:text-custom-purple-1 placeholder:text-opacity-40 placeholder:text-base"
                                />
                            </Form.Item>
                            <Form.Item name="email">
                                <Input
                                    placeholder="Your e-mail"
                                    className="border-0 border-b rounded-none border-custom-purple-1 border-opacity-40 shadow-none placeholder:text-custom-purple-1 placeholder:text-opacity-40 placeholder:text-base"
                                />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{ span: 24 }}
                                className="mt-12 mb-0"
                            >
                                <Button
                                    type="primary"
                                    className="rounded-sm text-base px-8 py-3 w-full h-full text-white border-custom-purple-1 bg-custom-purple-1"
                                    htmlType="submit"
                                >
                                    Subscribe
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Col>

            <Col xs={24} xl={12} className="mt-8">
                <Image src={MapImage} alt="map" className={styles.map} />
            </Col>
        </Row>
    );
};

export default SubscribeUs;
