"use client";

import { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import { useRouter } from "next/navigation";

import Image from "next/image";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const handleNavigate = (path: string) => {
    setDrawerOpen(false);
    router.push(path);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between py-4 px-4 bg-white">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <Image
              src="/images/logo.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-birthstone)" }}
          >
            May Blossom Spa
          </div>
        </div>

        {isMobile ? (
          <>
            <Button
              type="text"
              icon={<MenuOutlined style={{ fontSize: 24 }} />}
              onClick={() => setDrawerOpen(true)}
            />
            <Drawer
              title=""
              placement="top"
              onClose={() => setDrawerOpen(false)}
              open={drawerOpen}
            >
              <div
                className="flex flex-col space-y-8 text-lg font-semibold"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                <button
                  onClick={() => handleNavigate("/")}
                  className="text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavigate("/about")}
                  className="text-left"
                >
                  About
                </button>
                <button
                  onClick={() => handleNavigate("/services")}
                  className="text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => handleNavigate("/location")}
                  className="text-left"
                >
                  Location
                </button>
              </div>
            </Drawer>
          </>
        ) : (
          <nav
            className="flex space-x-6 text-lg"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Book
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Services
            </a>
            <a href="#" className="hover:underline">
              Locations
            </a>
          </nav>
        )}
      </header>

      {/* Content */}
      <section className="relative  bg-black">
        {/* Image */}
        <div className="w-full h-60 sm:h-[350px]">
          <Image
            src="/images/banner.jpeg"
            alt="A beautiful blossom"
            fill
            className="object-cover object-right"
            priority
          />
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 ">
          <div className="py-6 sm:py-8 pl-2 sm:pl-6 rounded-lg w-5/8 sm:w-2/5 sm:space-y-6 md:space-y-6 space-y-4">
            <h1
              className="text-lg sm:text-2xl md:text-3xl font-bold "
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Relax and Rejuvenate
            </h1>
            <p
              className=" text-sm md:text-base sm:text-sm font-semibold "
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Founded in 2010, May Blossom Spa has grown to six locations across
              the GTA.
            </p>
            <button
              className="hover:cursor-pointer bg-yellow-400 hover:bg-yellow-500  font-semibold sm:px-4 sm:py-2 px-3 py-1.5 rounded-full"
              style={{ fontFamily: "var(--font-open-sans)" }}
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      <section className="bg-purple-50 flex flex-col space-y-12 px-4 py-12 px-5 sm:px-40">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0">
          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h2
              className="text-3xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-birthstone)" }}
            >
              Grand Opening Offer
            </h2>
            <p className="text-gray-700 text-lg">
              Celebrate the grand opening of May Blossom Spa with us! Enjoy 15%
              off all services from July 9 to July 31 as we welcome you to
              experience relaxation and rejuvenation in our new space.
            </p>
          </div>
          {/* Image */}
          <div className="md:w-1/2 w-full  flex items-center justify-center">
            <Image
              src="/images/image1.jpeg"
              alt="A beautiful blossom"
              width={418}
              height={542}
              className="max-w-full h-auto rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8 md:space-x-reverse space-y-4 md:space-y-0">
          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h2
              className="text-3xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-birthstone)" }}
            >
              Weekend Specials
            </h2>
            <p className="text-gray-700 text-lg ">
              Treat yourself this weekend with our limited-time special: enjoy a
              relaxing 30-minute foot massage plus a 10-minute shoulder massage
              for only $39.99 (regularly $45). Unwind and recharge at May
              Blossom Spa, and make your weekends a time for self-care and
              renewal.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <Image
              src="/images/image2.jpeg"
              alt="A beautiful blossom"
              width={418}
              height={542}
              className="max-w-full h-auto rounded-3xl"
              priority
            />
          </div>
        </div>
      </section>

      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2005.722503368683!2d-79.30815323486394!3d43.82700802548296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d40be39ea2bf%3A0xd4f6e9007fca8402!2s7077%20Kennedy%20Rd%2C%20Markham%2C%20ON%20L3R%200N8!5e0!3m2!1sen!2sca!4v1752020035326!5m2!1sen!2sca"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=" border-0"
        ></iframe>
      </div>

      <footer className="bg-purple-50 text-gray-700 py-8 px-4">
        <div className="max-w-5xl mx-auto flex justify-center">
          <div className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} May Blossom Spa. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
