import type { ItemsType } from '../types';
import { IoMdClose } from 'react-icons/io';
import { icons } from '../utils/icon';

interface Props {
    stack: ItemsType[];
    onRemove: (item: ItemsType) => void;
    onRemoveAll: () => void;
}

export default function AddedStack({ stack, onRemove, onRemoveAll }: Props) {
    return (
        <>
            <div className="w-full max-w-62.5 rounded-2xl border border-[#edf0f4] bg-white px-4.25 py-5 shadow-[0_2px_8px_rgba(20,40,70,0.04)]">
                {/* Header */}
                <div className="mb-3.25">
                    <h2 className="text-[15px] font-semibold leading-5 text-[#182236]">
                        Your Stack
                    </h2>

                    <p className="mt-0.75 text-[11px] font-normal text-[#9aa8bd]">
                        {stack.length === 0
                            ? 'No technologies selected yet.'
                            : `${stack.length} Technology Selected`}
                    </p>
                </div>

                {/* Stack Items */}
                {stack.length === 0 ? (
                    <div className="font-plus text-[12px] text-[#94A3B8] px-12 py-6 border border-dashed rounded-xl">
                        Your stack is empty.
                    </div>
                ) : (
                    <div className="space-y-1.5">
                        {stack.map((item) => {
                            const lowerCase = item.icon;
                            const iconSrc = icons[lowerCase.toLowerCase()];
                            return (
                                <div
                                    key={item.id}
                                    className="flex h-11.5 items-center justify-between rounded-[7px] border border-[#dce4ee] bg-white px-2.5 py-7"
                                >
                                    <div className="flex items-center gap-2.25">
                                        {/* Logo */}
                                        <img
                                            src={iconSrc}
                                            alt={iconSrc}
                                            className="flex h-8 w-8 items-center justify-center"
                                        />

                                        {/* Text */}
                                        <div className="">
                                            <p className="text-[18px] font-semibold text-[#172033]">
                                                {item.title}
                                            </p>

                                            <p className="mt-0.75 text-[10px] font-normal text-[#9aa8bd]">
                                                {item.category}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Close */}
                                    <button
                                        onClick={() => onRemove(item)}
                                        className="flex h-6 w-6 items-center justify-center rounded-full text-[#91a0b4] transition hover:bg-[#f5f7fa] hover:text-[#68778c] cursor-pointer"
                                    >
                                        <IoMdClose className="size-5" />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Remove All */}
                {stack.length !== 0 && (
                    <button
                        onClick={onRemoveAll}
                        className="mt-10.5 h-7 w-full rounded-[7px] border border-[#ffaaa3] bg-white text-[12px] font-medium text-[#f04438] transition hover:bg-[#fff5f4] cursor-pointer"
                    >
                        Remove All
                    </button>
                )}
            </div>
        </>
    );
}
