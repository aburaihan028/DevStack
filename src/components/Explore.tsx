import { Suspense, useState } from 'react';
import ExploreCard from './ExploreCard';
import type { ItemsType } from '../types';
import AddedStack from './AddedStack';
import { toast } from 'react-toastify';

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
    const [dataPromise] = useState(() => fetchData());
    const [addStack, setAddStack] = useState<ItemsType[]>([]);

    const handleAddStack = (item: ItemsType) => {
        setAddStack((prev) => {
            if (prev.find((current) => current.id === item.id)) {
                return prev;
            }
            return [...prev, item];
        });
        toast.success('Added Successfull', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    const handleRemoveStack = (item: ItemsType) => {
        setAddStack((prev) => prev.filter((remove) => remove.id !== item.id));
    };

    const handleRemoveAll = () => {
        setAddStack([]);
    };

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
            <div className="md:flex items-start gap-x-2 mt-10">
                <div className="mb-2.5 md:w-[60vw]">
                    <Suspense fallback={<div>Loading...</div>}>
                        <ExploreCard
                            data={dataPromise}
                            handleAddStack={handleAddStack}
                            addStack={addStack}
                        />
                    </Suspense>
                </div>
                <AddedStack
                    stack={addStack}
                    onRemove={handleRemoveStack}
                    onRemoveAll={handleRemoveAll}
                />
            </div>
        </div>
    );
};

export default Explore;
