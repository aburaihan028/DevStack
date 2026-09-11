import { use } from 'react';
import type { ItemsType } from '../types';

interface Props {
    data: Promise<ItemsType[]>;
}

const ExploreCard = ({ data }: Props) => {
    const res = use(data);
    console.log(res);
    return (
        <div className="grid grid-cols-3 gap-y-6">
            {res.map((item) => (
                <div className="max-w-xs rounded-2xl bg-white p-6 shadow-sm flex flex-col justify-between">
                    <div>
                        {/* Header Icon & Badge */}
                        <div className="flex items-center justify-between">
                            <div className="flex h-10 w-10 items-center justify-center">
                                <svg
                                    className="h-9 w-9 text-cyan-400"
                                    viewBox="-11.5 -10.23174 23 20.46348"
                                    fill="currentColor"
                                >
                                    <circle r="2.05" fill="currentColor" />
                                    <g
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        fill="none"
                                    >
                                        <ellipse rx="11" ry="4.2" />
                                        <ellipse
                                            rx="11"
                                            ry="4.2"
                                            transform="rotate(60)"
                                        />
                                        <ellipse
                                            rx="11"
                                            ry="4.2"
                                            transform="rotate(120)"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <span className="rounded-full bg-sky-100/70 px-3 py-1 text-xs font-semibold text-sky-500">
                                Popular
                            </span>
                        </div>

                        {/* Title & Description */}
                        <h3 className="mt-5 text-2xl font-bold text-slate-900">
                            React
                        </h3>
                        <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                            A declarative, component-based JavaScript library
                            for building modern user interfaces.
                        </p>
                    </div>

                    {/* Footer Section */}
                    <div className="mt-8">
                        <div className="flex items-center justify-between text-xs">
                            <span className="rounded-md bg-slate-100 px-2.5 py-1 font-semibold text-slate-600">
                                Frontend
                            </span>
                            <span className="font-medium text-slate-500">
                                Beginner-Friendly
                            </span>
                            <div className="flex items-center gap-1 font-bold text-slate-800">
                                <span className="text-amber-400">★</span>
                                <span>4.9</span>
                            </div>
                        </div>

                        <button className="mt-5 w-full rounded-xl bg-[#090D16] py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                            Add to Stack
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExploreCard;
