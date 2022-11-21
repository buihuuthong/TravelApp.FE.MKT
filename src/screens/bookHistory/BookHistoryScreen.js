import { NormalHeader } from '@base-components/Headers';
import { NormalScreen } from '@base-components/Screen';
import BookHisToryTab from '@navigations/BookHisToryTab';

const BookHistoryScreen = () => {

    return (
        <NormalScreen>
            <NormalHeader title="Tour đã đặt" />
            <BookHisToryTab/>
        </NormalScreen>
    );
};

export default BookHistoryScreen;