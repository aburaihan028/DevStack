import { Suspense } from 'react';
import ExploreCard from './ExploreCard';
import type { ItemsType } from '../types';

const fetchData = async (): Promise<ItemsType[]> => {
    try {
        const res = await fetch('data.json');

        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

const Explore = () => {
    return (
        <div>
            {/* Heading */}
            <div>
                <h2 className="text-[36px] font-inter font-extrabold text-[#0F172A] ">
                    Explore the{' '}
                    <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>
                <p className="text-[#64748B] font-plus text-[16px]">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            {/* Explore the Technologies Section */}
            <div className="w-[65vw]">
                <Suspense>
                    <ExploreCard data={fetchData()} />
                </Suspense>
            </div>
        </div>
    );
};

export default Explore;
