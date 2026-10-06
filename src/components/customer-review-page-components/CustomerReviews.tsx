"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  X,
} from "lucide-react";

type Review = {
  name: string;
  source: string;
  review: string;
};

const reviews: Review[] = [
  {
    name: "Virginia Kostisin",
    source: "Google Customer",
    review:
      "Anes came promptly and cleaned out a huge clump of hair that has bedeviled me for weeks. Praises for his expertise, personable demeanor and the cleanliness of the bathtub when he was finished. It's all good!",
  },
  {
    name: "Annie Chen",
    source: "Google Customer",
    review:
      "My tenant sent me pictures of clogged sewer line, toilet bowl, shower full of water. I called Drain Solutions Plus. Dennis came within one hour and unclogged the pipe during snowing day. Prompt response, excellent service, reasonable price. I wasn't on the site, but he told me if I had same problem in 2 months, he will come back to fix it for free. He must do a great job in order to give word of promise, which leaves me no worry. Definitely save his number in my contact list.",
  },
  {
    name: "Dr. Shah",
    source: "Google Customer",
    review:
      "We had a nasty main line clog at our surgical center in Clifton. Dennis and his crew were right out within 90 minutes and had us back up and running within 45 mins. They are very professional, kept everything clean and were reasonable given the circumstances and response time. I would highly recommend them to anyone.",
  },
  {
    name: "Andreysis R",
    source: "Customer Yelp",
    review:
      "Amazing company!!! We're new home buyers and needed to pass inspection. Main sewage line was uncapped, clogged, and the entire pipe was cracked everywhere. Kitchen was clogged and had leaking pipes and bathroom as well. After being stood up by another plumbing company 'Drain Doctor,' the plumbers from Drain Solutions Plus came to our house the same day. Not only were they very knowledgeable, respectful and well spoken, they were able to fix everything. They stayed at the house until 9.30 pm. The best part was when we got the bill — very very fair prices!",
  },
  {
    name: "Michael Anderson",
    source: "Google Customer",
    review:
      "Drain Solutions Plus responded quickly when we had a serious drain problem. The technician explained everything clearly, worked efficiently and left the area completely clean. The entire experience was professional from the first call to the completed repair.",
  },
  {
    name: "Jennifer Miller",
    source: "Google Customer",
    review:
      "We had an emergency sewer issue and were extremely impressed with how quickly the team arrived. They found the problem, explained the options and got everything working again. Very professional service and excellent communication throughout the job.",
  },
];

const StarRating = () => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className="h-4 w-4 fill-[#f5b400] text-[#f5b400]"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
};

const CustomerAvatar = ({ name }: { name: string }) => {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .slice(0, 2);

  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#014484] text-sm font-bold text-white">
      {initials}
    </div>
  );
};

export default function CustomerReviews() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  /* ---------------------------------------------
     Slider Navigation
  --------------------------------------------- */

  const scrollSlider = (direction: "next" | "prev") => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card = slider.querySelector<HTMLElement>(
      "[data-review-card]"
    );

    if (!card) return;

    const gap = 24;
    const scrollAmount = card.offsetWidth + gap;

    slider.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  /* ---------------------------------------------
     Slider Scroll Position
  --------------------------------------------- */

  const handleScroll = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card = slider.querySelector<HTMLElement>(
      "[data-review-card]"
    );

    if (!card) return;

    const gap = 24;

    const index = Math.round(
      slider.scrollLeft / (card.offsetWidth + gap)
    );

    setActiveIndex(Math.min(index, reviews.length - 1));
  };

  /* ---------------------------------------------
     Auto Slider
  --------------------------------------------- */

  useEffect(() => {
    const interval = window.setInterval(() => {
      const slider = sliderRef.current;

      if (!slider) return;

      const card = slider.querySelector<HTMLElement>(
        "[data-review-card]"
      );

      if (!card) return;

      const gap = 24;
      const scrollAmount = card.offsetWidth + gap;

      const maxScroll =
        slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft >= maxScroll - 10) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  /* ---------------------------------------------
     Lock Body Scroll When Modal Opens
  --------------------------------------------- */

  useEffect(() => {
    if (!selectedReview) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedReview]);

  /* ---------------------------------------------
     Escape Key
  --------------------------------------------- */

  useEffect(() => {
    if (!selectedReview) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedReview(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedReview]);

  /* ---------------------------------------------
     Go To Specific Review
  --------------------------------------------- */

  const goToReview = (index: number) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card = slider.querySelector<HTMLElement>(
      "[data-review-card]"
    );

    if (!card) return;

    const gap = 24;

    slider.scrollTo({
      left: index * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =====================================================
          CUSTOMER REVIEWS
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7f9fc] py-20 sm:py-24 lg:py-28">
        {/* Background Decoration */}

        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#014484]/[0.035]" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#c02f2d]/[0.025]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* =================================================
              SECTION HEADER
          ================================================= */}

          <div className="mb-12 grid gap-8 lg:mb-14 lg:grid-cols-[1fr_430px] lg:items-end lg:gap-16">
            {/* Heading */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#c02f2d]" />

                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                  Customer Reviews
                </span>
              </div>

              <h2 className="max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-[#014484] sm:text-4xl lg:text-[48px]">
                Our Clients Reviews Speak For The Quality Of Our{" "}
                <span className="text-[#c02f2d]">
                  Drain &amp; Sewer Services
                </span>
              </h2>
            </div>

            {/* Description */}

            <div>
              <p className="text-[16px] leading-7 text-slate-500">
                At Drain Solutions Plus, customer satisfaction is our
                top priority on every job—whether it&apos;s a routine
                drain cleaning or an emergency sewer repair. We take
                pride in delivering prompt, professional service backed
                by honest communication and long-term solutions.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <StarRating />

                <span className="hidden h-5 w-px bg-slate-300 sm:block" />

                <span className="text-sm font-semibold text-[#014484]">
                  Trusted across North Jersey
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              REVIEW SLIDER
          ================================================= */}

          <div className="relative">
            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {reviews.map((review, index) => {
                const isLongReview = review.review.length > 300;

                return (
                  <article
                    key={`${review.name}-${index}`}
                    data-review-card
                    className="group relative flex h-[410px] w-full shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#014484]/20 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)] sm:h-[425px] sm:p-8 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  >
                    {/* Top */}

                    <div className="flex shrink-0 items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#014484]/[0.07]">
                        <Quote
                          className="h-5 w-5 text-[#014484]"
                          strokeWidth={2.5}
                        />
                      </div>

                      <StarRating />
                    </div>

                    {/* Review */}

                    <div className="mt-7 min-h-0 flex-1 overflow-hidden">
                      <p className="line-clamp-7 text-[15.5px] leading-7 text-slate-500">
                        &quot;{review.review}&quot;
                      </p>

                      {isLongReview && (
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedReview(review)
                          }
                          className="mt-4 text-sm font-bold text-[#014484] underline decoration-[#c02f2d] decoration-2 underline-offset-4 transition-colors duration-200 hover:text-[#c02f2d]"
                        >
                          Read More
                        </button>
                      )}
                    </div>

                    {/* Customer */}

                    <div className="mt-6 shrink-0 border-t border-slate-100 pt-5">
                      <div className="flex items-center gap-3">
                        <CustomerAvatar name={review.name} />

                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-bold text-[#014484]">
                            {review.name}
                          </h3>

                          <p className="mt-1 text-xs text-slate-400">
                            {review.source}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Hover Accent */}

                    <span className="absolute bottom-0 left-7 right-7 h-[2px] origin-left scale-x-0 bg-[#c02f2d] transition-transform duration-300 group-hover:scale-x-100" />
                  </article>
                );
              })}
            </div>

            {/* =================================================
                SLIDER CONTROLS
            ================================================= */}

            <div className="mt-7 flex items-center justify-between">
              {/* Dots */}

              <div className="flex items-center gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show review ${index + 1}`}
                    onClick={() => goToReview(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-8 bg-[#014484]"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollSlider("prev")}
                  aria-label="Previous reviews"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#014484] shadow-sm transition-all duration-200 hover:border-[#014484] hover:bg-[#014484] hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollSlider("next")}
                  aria-label="Next reviews"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#014484] text-white shadow-sm transition-all duration-200 hover:bg-[#c02f2d]"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* =================================================
              GOOGLE REVIEW / TRUST BAR
          ================================================= */}

          <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Trust Content */}

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c02f2d]">
                <Quote
                  className="h-5 w-5 text-white"
                  strokeWidth={2.5}
                />
              </div>

              <div>
                <p className="font-bold text-[#014484]">
                  Real customers. Real experiences.
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <StarRating />

                  <span className="hidden h-4 w-px bg-slate-300 sm:block" />

                  <span className="text-sm text-slate-400">
                    Trusted across North Jersey
                  </span>
                </div>
              </div>
            </div>

            {/* Google CTA */}

            <a
              href="https://www.google.com/search?q=drainsolutionplus&oq=drainsolutionplus&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyBggCEEUYPDIGCAMQRRg8MgYIBBBFGDzSAQgzMjg1ajBqN6gCCLACAfEF3mJXU43wbZo&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x89c2fec0a1be21d7:0x6ada0e47a6c1cb2f,3,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#014484] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c02f2d] hover:shadow-lg"
            >
              {/* Google G */}

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[16px] font-bold text-[#4285F4]">
                G
              </span>

              <span>Review Us on Google</span>

              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* =======================================================
          FULL REVIEW MODAL
      ======================================================= */}

      {selectedReview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 px-5 py-8 backdrop-blur-sm"
          onClick={() => setSelectedReview(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedReview.name}'s review`}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-7 shadow-2xl sm:p-10"
          >
            {/* Close */}

            <button
              type="button"
              aria-label="Close review"
              onClick={() => setSelectedReview(null)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-200 hover:bg-[#c02f2d] hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Quote */}

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#014484]/[0.07]">
              <Quote
                className="h-6 w-6 text-[#014484]"
                strokeWidth={2.5}
              />
            </div>

            {/* Rating */}

            <div className="mt-7">
              <StarRating />
            </div>

            {/* Full Review */}

            <p className="mt-7 text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              &quot;{selectedReview.review}&quot;
            </p>

            {/* Customer */}

            <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6">
              <CustomerAvatar name={selectedReview.name} />

              <div>
                <h3 className="font-bold text-[#014484]">
                  {selectedReview.name}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {selectedReview.source}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}