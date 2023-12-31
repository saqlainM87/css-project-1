import BookList from '@/components/BookList/BookList';
import HeroCarousal from '@/components/HeroCarousal/HeroCarousal';
import SubscribeUs from '@/components/SubscribeUs/SubscribeUs';

export default function Home() {
    return (
        <div className="min-h-screen px-4 py-8 md:px-5 md:py-16 lg:px-8 xl:px-0 xl:py-24">
            <HeroCarousal />
            <BookList />
            <SubscribeUs />
        </div>
    );
}
