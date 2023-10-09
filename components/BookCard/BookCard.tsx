'use client';

import { Card } from 'antd';

const { Meta } = Card;

const BookCard = () => {
    return (
        <Card
            className="w-[17.125rem]"
            hoverable
            cover={
                <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
            }
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    );
};

export default BookCard;
