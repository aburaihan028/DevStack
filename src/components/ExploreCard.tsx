import { use } from 'react';
import type { ItemsType } from '../types';
import { FaStar } from 'react-icons/fa';
import { icons } from '../utils/icon';

interface Props {
    data: Promise<ItemsType[]>;
    handleAddStack: (item: ItemsType) => void;
    addStack: ItemsType[];
}

const ExploreCard = ({ data, handleAddStack, addStack }: Props) => {
    const res = use(data);

    return (
        <section className="grid justify-center md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-y-6">
            {res.map((item) => {
                // dynamic Icon
                const lowerCase = item.icon;
                const iconSrc = icons[lowerCase.toLowerCase()];

                // isAdded true disable button
                const isAdded = addStack.some((stack) => stack.id === item.id);

                return (
                    <div
                        key={item.id}
                        className={`w-full max-w-xs rounded-2xl p-6 shadow-sm flex flex-col justify-between ${isAdded ? 'border border-red-400' : 'bg-white'}`}
                    >
                        <div>
                            {/* Header Icon & Badge */}
                            <div className="flex items-center justify-between">
                                <div className="flex h-9 w-9 items-center justify-center">
                                    <img src={iconSrc} alt={iconSrc} />
                                </div>
                                {item.badge && (
                                    <span
                                        className={`rounded-full bg-sky-100/70 px-3 py-1 text-xs font-semibold text-sky-500`}
                                    >
                                        {item.badge}
                                    </span>
                                )}
                            </div>

                            {/* Title & Description */}
                            <h3 className="mt-5 text-2xl font-bold text-slate-900">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        {/* Footer Section */}
                        <div className="mt-8">
                            <div className="flex items-center justify-between text-xs">
                                <span className="rounded-md bg-slate-100 px-2.5 py-1 font-semibold text-slate-600">
                                    {item.category}
                                </span>
                                <span className="font-medium text-slate-500">
                                    {item.level}
                                </span>
                                <div className="flex items-center gap-1 font-bold text-slate-800">
                                    <FaStar className="text-amber-400" />
                                    <span>{item.rating}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    handleAddStack(item);
                                }}
                                className={`mt-5 w-full rounded-xl  py-3 text-sm font-semibold  transition  cursor-pointer ${isAdded ? ' bg-slate-300 text-slate-500' : 'bg-[#090D16] text-white hover:bg-slate-800'}`}
                                disabled={isAdded}
                            >
                                {isAdded ? 'Added to Stack' : 'Add to Stack'}
                            </button>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default ExploreCard;
