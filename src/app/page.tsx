import FiveStar from "@/components/FiveStar";
import Heading from "@/components/Heading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "../components/ui/button";
import { ArrowRight, Check, Image } from "lucide-react";
import Link from "next/link";
import Phone from "@/components/Phone";
import Reviews from "@/components/Reviews";
import NextImage from "next/image";

export default function Home() {
  return (
    <div>
      {/* top section */}
      <section className="bg-slate-50">
        <MaxWidthWrapper
          className="pb-32 px-20 pt-10
      lg:gap-x-0 xl:gap-x-8 text-lg"
        >
          <div className="flex flex-col gap-4 items-center pt-10 lg:flex-row lg:justify-between">
            <div>
              <div
                className="relative mx-auto col-span-2 flex flex-col items-center
          text-center w-full gap-4"
              >
                <Heading>
                  {" "}
                  Your Image on a{" "}
                  <span
                    className="bg-green-600
              px-2 text-white rounded"
                  >
                    Custom
                  </span>{" "}
                  Phone Case
                </Heading>
                <p className="text-balance">
                  Capture your favorite memories with your own,{" "}
                  <span
                    className="font-bold
              "
                  >
                    one-of-one
                  </span>{" "}
                  phone case. CaseCobra allows you to protect your memories, not
                  just your phone case.
                </p>
              </div>
              <div className="flex flex-col items-center pt-10">
                <div className="flex flex-col items-start pt-5 gap-1">
                  <div className="flex gap-2">
                    <Check className="text-green-500" />
                    <p>High-quality, durable material</p>
                  </div>
                  <div className="flex gap-2">
                    <Check className="text-green-500" />
                    <p>5 year print guarantee</p>
                  </div>
                  <div className="flex gap-2">
                    <Check className="text-green-500" />
                    <p>Modern iPhone models supported</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center -space-x-3 select-none pt-10">
                <div className="relative rounded-full size-14">
                  <NextImage
                    alt="customers"
                    src="/customer1.png"
                    className="ring-2 ring-slate-100 rounded-full size-14
                  object-cover"
                    fill
                  />
                </div>
                <div className="relative rounded-full size-14">
                  <NextImage
                    fill
                    alt="/customers"
                    src="/customer2.png"
                    className="ring-2 ring-slate-100 rounded-full size-14
                object-cover"
                  />
                </div>
                <div className="relative rounded-full size-14">
                  <NextImage
                    fill
                    alt="/customers"
                    src="/customer3.png"
                    className="ring-2 ring-slate-100 rounded-full size-14
                  object-cover"
                  />
                </div>
                <div className="relative rounded-full size-14">
                  <NextImage
                    fill
                    alt="/customers"
                    src="/customer4.png"
                    className="ring-2 ring-slate-100 rounded-full size-14
                  object-cover"
                  />
                </div>
                <div className="relative rounded-full size-14">
                  <NextImage
                    fill
                    alt="/customers"
                    src="/happy4.jpg"
                    className="ring-2 ring-slate-100 rounded-full size-14
                  object-cover"
                  />
                </div>
              </div>
              <div className="pt-5 flex flex-col items-center">
                <FiveStar />
                <p>
                  <span className="font-semibold">1,250+</span> happy customers
                </p>
              </div>
            </div>
            <div className="pt-16 lg:py-5 lg:right-0">
              <Phone imgScr="/doggy1.jpeg" width={64} />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* middle section */}
      <section className="bg-slate-200">
        <MaxWidthWrapper
          className="pb-32 px-20 pt-10
      lg:gap-x-0 xl:gap-x-8 text-lg"
        >
          <div className="flex flex-col items-center justify-center md:flex-row md:gap-4">
            <Heading className="order-2">What our Customers think?</Heading>
            <div className="relative bg-inherit size-44 order-1 md:order-3">
              <NextImage
                alt="butterfly"
                src="/butterfly.png"
                className="order-1 md:order-3"
                fill
              />
            </div>
          </div>
          <div className="flex flex-col pt-16 gap-10 lg:flex-row">
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-3">
                <div className="relative rounded-full size-14">
                  <NextImage
                    alt="butterfly"
                    src="/customer3.png"
                    className="relative rounded-full size-14 ring-2 ring-slate-100
                  object-cover"
                    fill
                  />
                </div>
                <div className="flex flex-col items-start">
                  <p className="font-semibold text-lg">Laura</p>
                  <div className="flex items-center gap-1 text-sm">
                    <Check className="text-green-600" />
                    Verified Purchase
                  </div>
                </div>
              </div>
              <FiveStar />
              <p className="text-lg text-wrap">
                "The case feels durable and I even got a compliment on the
                design. Had the case for two and a half months now and{" "}
                <span className="bg-green-600 text-white px-1">
                  the image is super clear,
                </span>{" "}
                on the case I had before, the image started fading into
                yellow-ish color after a couple weeks. Love it."
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-3">
                <div className="relative rounded-full size-14">
                  <NextImage
                    alt="butterfly"
                    src="/happy4.jpg"
                    className="relative rounded-full size-14 ring-2 ring-slate-100
                  object-cover"
                    fill
                  />
                </div>
                <div className="flex flex-col items-start">
                  <p className="font-semibold text-lg">Peter</p>
                  <div className="text-sm flex items-center gap-1">
                    <Check className="text-green-600" />
                    Verified Purchase
                  </div>
                </div>
              </div>
              <FiveStar />
              <p className="text-lg text-wrap">
                "I usually keep my phone together with my keys in my pocket and
                that led to some pretty heavy scratchmarks on all of my last
                phone cases. This one, besides a barely noticeable scratch on
                the corner,{" "}
                <span className="bg-green-600 text-white px-1">
                  looks brand new after about half a year.
                </span>{" "}
                I dig it."
              </p>
            </div>
          </div>
          <div className="mt-36">
            <Reviews />
          </div>
        </MaxWidthWrapper>
      </section>
      {/* bottom section */}
      <section>
        <MaxWidthWrapper
          className="pb-32 px-20 pt-10
      lg:gap-x-0 xl:gap-x-8 text-lg"
        >
          <Heading className="pt-16 leading-[70px]">
            Upload your photo and{" "}
            <span className="rounded-lg bg-green-600 text-white px-2">
              and get your own case
            </span>{" "}
            now
          </Heading>
          <div className="flex flex-col items-center pt-20 lg:flex-row justify-center transition-all w-full h-fit gap-16 lg:gap-1">
            <NextImage
              width={96 * 4}
              height={160 * 4}
              alt="butterfly"
              src="/girl1-blue.jpeg"
              className="rounded max-w-96"
            />

            <NextImage
              width={(36 * 126) / 31}
              height={36}
              alt="butterfly"
              src="/arrow.png"
              className="rotate-90 lg:rotate-0 transition-all"
            />

            <Phone width={64} imgScr="/girl1-blue.jpeg" />
          </div>
          <div className="flex flex-col items-center pt-16">
            <div className="flex flex-col items-start gap-1 text-lg">
              <div className="flex gap-2">
                <Check className="text-green-500" />
                <p>High-quality silicone material</p>
              </div>
              <div className="flex gap-2">
                <Check className="text-green-500" />
                <p>Scratch- and fingerprint resistant coating</p>
              </div>
              <div className="flex gap-2">
                <Check className="text-green-500" />
                <p>Wireless charging compatible</p>
              </div>
              <div className="flex gap-2">
                <Check className="text-green-500" />
                <p>5 year print warranty</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-16">
            <Link
              href="/configure/upload"
              className={buttonVariants({
                size: "lg",
                className: "flex",
              })}
            >
              Create your case now
              <ArrowRight />
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
