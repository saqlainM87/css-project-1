'use client';

import React from 'react';
import BookCarousal from '../BookCarousal/BookCarousal';
import { Col, Row, Typography } from 'antd';
import BookCard from '../BookCard/BookCard';

const BookList = () => {
    const renderSelectedBooks = () => {
        return Array.from({ length: 5 }).map((_, index) => (
            <BookCard key={index} />
        ));
    };

    const renderMustBuyBooks = () => {
        return Array.from({ length: 5 }).map((_, index) => (
            <BookCard key={index} />
        ));
    };

    return (
        <Row>
            <Col xs={24} className="mb-10 mt-4">
                <Typography.Text className="text-2xl md:text-4xl font-semibold">
                    Selected for you
                </Typography.Text>
            </Col>
            <Col xs={24}>
                <BookCarousal>{renderSelectedBooks()}</BookCarousal>
            </Col>

            <Col xs={24} className="mb-10 mt-14">
                <Typography.Text className="text-2xl md:text-4xl font-semibold">
                    You must buy it now
                </Typography.Text>
            </Col>
            <Col>
                <BookCarousal>{renderMustBuyBooks()}</BookCarousal>
            </Col>
        </Row>
    );
};

export default BookList;
