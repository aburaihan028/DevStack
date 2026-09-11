import BannerImg from '../assets/banner-stack.png';
const Banner = () => {
    return (
        <div className="my-16 grid md:grid-cols-2 items-center justify-center">
            {/* Left side */}
            <div className="flex flex-col gap-y-8">
                <h1 className="text-[#0F172A] font-inter font-extrabold text-3xl md:text-6xl text-center md:text-left">
                    Build Your Ideal <br />
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]">
                        Development Stack
                    </span>
                </h1>
                <p className="text-[#475569] font-plus text-center md:text-left text-[14px] md:text-[18px]">
                    Explore frontend, backend, database, and tooling options,{' '}
                    <br />
                    compare them side by side, and put together the stack that
                    fits your <br /> next project.
                </p>
                <div className="font-inter flex justify-center md:justify-start gap-3 mt-5">
                    <button className="font-semibold  text-sm p-3 bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-lg text-white">
                        Explore Technologies
                    </button>
                    <button className="py-3 px-11.5 rounded-lg border border-[#E5E7EB]">
                        Learn More
                    </button>
                </div>
            </div>
            {/* Right side */}
            <div className="w-110 h-100 md:w-172 md:h-155">
                <img
                    src={BannerImg}
                    alt="hero-banner"
                    className="w-full h-full object-center"
                />
            </div>
        </div>
    );
};

export default Banner;
