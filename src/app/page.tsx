"use client";

import { useState, useEffect, useRef } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { LuHeartHandshake } from "react-icons/lu";
import { GiFootprint } from "react-icons/gi";
import { TbMassage } from "react-icons/tb";
import { TbMoodSpark } from "react-icons/tb";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const items = [
    {
      icon: <TbMassage />,
      title: "Massage",
      text: "Relax, recover, and recharge with a customized massage tailored to your specific needs by a skilled therapist.",
    },
    {
      icon: <GiFootprint />,
      title: "Foot Massage",
      text: "Soothe tired feet and restore balance with targeted foot massage techniques that melt away tension.",
    },
    {
      icon: <LuHeartHandshake />,
      title: "Body Care",
      text: "Enhance your wellness routine with advanced services like Total Body Stretch and Rapid Tension Relief.",
    },
    {
      icon: <TbMoodSpark />,
      title: "Facials",
      text: "Achieve your skin goals with personalized facials and treatments designed for visible, lasting results.",
    },
  ];

  const handleNavigate = (path: string) => {
    setDrawerOpen(false);
    router.push(path);
  };

  const cards = [
    {
      title: "Summer Specials",
      headline: "Chill vibes, hot deals",
      description:
        "Enjoy exclusive summer discounts on your favorite experiences. Limited time only.",
      image: "/images/card-image1.jpg",
    },
    {
      title: "Group Massage",
      headline: "Relax Together, Save Together",
      description:
        "Our spacious facility can accommodate group massages for up to 15 people. Groups of 5 or more enjoy a 10% discount—perfect for friends, families, and coworkers. Come unwind, bond, and feel rejuvenated together!",
      image: "/images/card-image2.jpeg",
    },
    {
      title: "Dining Delights",
      headline: "Flavors worth savoring",
      description:
        "Discover the best local cuisines with our hand-picked dining options.",
      image: "/images/card-image3.jpeg",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const children = scrollRef.current.children;
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = children[0].clientWidth + (isMobile ? 12 : 24); // includes gap
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(index);
    };

    const ref = scrollRef.current;
    ref?.addEventListener("scroll", handleScroll);
    return () => ref?.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between py-4 px-4 bg-white">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1 sm:gap-3">
            <div className="relative w-7 h-7 sm:w-12 sm:h-12">
              <Image
                src="/images/logo.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <div
              className="text-3xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-birthstone)" }}
            >
              May Blossom Spa
            </div>
          </div>

          {isMobile ? (
            <>
              <div className="flex items-center gap-3">
                <a href="tel:9059448666">
                  <button
                    className="text-white text-base lg:text-2xl bg-purple-400 font-semibold sm:px-4 sm:py-2 px-3 py-1.5 rounded-lg"
                    style={{ fontFamily: "var(--font-open-sans)" }}
                  >
                    Book
                  </button>
                </a>

                <Button
                  type="text"
                  icon={<MenuOutlined style={{ fontSize: 24 }} />}
                  onClick={() => setDrawerOpen(true)}
                />
              </div>
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
              <a href="tel:9059448666">
                <div
                  className="text-white  text-base lg:text-lg bg-purple-400 font-semibold sm:px-4 sm:py-2 px-3 py-1.5 rounded-lg"
                  style={{ fontFamily: "var(--font-open-sans)" }}
                >
                  905-944-8666
                </div>
              </a>
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
            </nav>
          )}
        </div>
      </header>
      {/* Content */}

      <section className="relative w-full">
        <Image
          src="/images/banner.jpeg"
          alt="..."
          width={1280}
          height={644}
          className="w-full h-auto object-contain"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent pointer-events-none" />

        {/* Text overlay */}
        <div className="absolute z-20 inset-0 px-4 sm:px-6">
          <div
            className="w-full max-w-7xl mx-auto relative"
            style={{ top: isMobile ? "-5%" : "15%" }}
          >
            <div className="py-6 sm:py-8 pl-2 sm:pl-6 w-full sm:w-3/5 md:w-3/7 lg:w-3/7 space-y-4 sm:space-y-6 md:space-y-6 text-white">
              <h1
                className="text-2xl md:text-4xl lg:text-6xl font-bold"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                Relax and Rejuvenate at May Blossom Spa
              </h1>
              <p
                className="text-sm  sm:text-2xl"
                style={{ fontFamily: "var(--font-open-sans)" }}
              >
                A place where you can unwind, indulge, and renew yourself. Where
                exceptional service, skilled professionals and personalized care
                are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="z-30 relative"
        style={{
          marginTop: isMobile ? "-10px" : "-120px",
          display: "flex",
          overflowX: "auto",
          gap: isMobile ? 12 : 24,
          padding: isMobile ? "0 12px" : "0 48px",
          scrollSnapType: "x mandatory",
          scrollPadding: isMobile ? "0 12px" : "0 48px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              width: isMobile ? "100%" : 1000,
              marginBottom: isMobile ? 14 : 24,
              flexShrink: 0,
              scrollSnapAlign: "center",
              backgroundColor: "#fff",
              borderRadius: 12,
              overflow: "hidden",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              height: isMobile ? 360 : 500,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Content */}
            <div
              style={{
                flex: isMobile ? "unset" : 2,
                padding: isMobile ? 16 : 24,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h4
                style={{
                  fontSize: isMobile ? 20 : 28,
                  fontWeight: "bold",
                  marginBottom: 8,
                }}
              >
                {card.title}
              </h4>
              <h3
                style={{
                  fontSize: isMobile ? 16 : 20,
                  marginBottom: 4,
                  color: "#888",
                  paddingTop: 20,
                  paddingBottom: 10,
                }}
              >
                {card.headline}
              </h3>
              <p style={{ fontSize: isMobile ? 14 : 16, color: "#444" }}>
                {card.description}
              </p>
            </div>

            {/* Image */}
            <div
              style={{
                height: "100%",
                maxWidth: isMobile ? "100%" : 400, // <- Add this
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Indicator Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
        }}
      >
        {cards.map((_, index) => (
          <div
            key={index}
            style={{
              width: 40,
              height: 8,
              borderRadius: 25,
              backgroundColor: index === currentIndex ? "#a78bfa" : "#ccc",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </div>
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-6 text-center px-4 pt-20 sm:pt-40 pb-10 sm:pb-30 ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            style={{ fontFamily: "var(--font-open-sans)" }}
          >
            <div className="text-7xl sm:text-7xl text-purple-400">
              {item.icon}
            </div>
            <h3 className="text-lg sm:text-2xl font-bold mt-3">{item.title}</h3>
            <p className="text-base sm:text-lg text-gray-600 mt-1">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Promotion */}
      <section className="mt-10 sm:mt-20 w-full bg-purple-50 py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8 sm:space-y-12">
          <h2
            className="text-3xl sm:text-5xl font-bold text-center"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            Promotion
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="shadow-xl rounded-lg overflow-hidden "
          >
            <Image
              src="/images/banner1.jpeg"
              alt="A beautiful blossom"
              width={2506}
              height={625}
              priority
            />
          </motion.div>
          {/* Content: Images and Text */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
            {/* Left: Animated Images */}
            <div className="flex flex-col md:flex-row gap-4 md:w-1/2 w-full justify-center items-center">
              {/* Image 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="shadow-xl overflow-hidden w-full md:w-auto"
              >
                <Image
                  src="/images/image1.png"
                  alt="A beautiful blossom"
                  width={1047}
                  height={1358}
                  priority
                />
              </motion.div>

              {/* Image 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
                className="shadow-xl overflow-hidden w-full md:w-auto"
              >
                <Image
                  src="/images/image2.jpeg"
                  alt="A beautiful blossom"
                  width={1045}
                  height={1357}
                  priority
                />
              </motion.div>
            </div>
            {/* Right: Promotional Texts */}
            <div className="flex flex-col space-y-14 md:w-1/2 w-full text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ fontFamily: "var(--font-lora)" }}
                >
                  Summer Escape – Enjoy 15% Off
                </h3>
                <p
                  className="text-gray-800 text-lg"
                  style={{ fontFamily: "var(--font-lora)" }}
                >
                  Treat yourself this summer at May Blossom Spa! Enjoy 15% off
                  all services from July 9 to July 31. Relax, refresh, and make
                  the most of the season with us.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ fontFamily: "var(--font-lora)" }}
                >
                  Weekend Specials
                </h3>
                <p
                  className="text-gray-800 text-lg"
                  style={{ fontFamily: "var(--font-lora)" }}
                >
                  Treat yourself this weekend with our limited-time special:
                  enjoy a relaxing 30-minute foot massage plus a 10-minute
                  shoulder massage for only $39.99 (regularly $45). Unwind and
                  recharge at May Blossom Spa, and make your weekends a time for
                  self-care and renewal.
                </p>
              </motion.div>
            </div>
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
