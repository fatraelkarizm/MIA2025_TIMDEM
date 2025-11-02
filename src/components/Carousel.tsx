import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue,  type PanInfo, type Transition } from "framer-motion";
import {
  Circle,
  Code,
  FileText,
  Layers,
  Layout
} from "lucide-react";

export interface CarouselItem {
  title: string;
  description?: string;
  id?: number;
  icon?: React.ReactNode;
  image?: string; // tambahkan props image
  alt?: string;
}

export interface CarouselProps {
  items: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
  children?: React.ReactNode; // for custom usage, but not required
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    title: "Text Animations",
    description: "Cool text animations for your projects.",
    id: 1,
    icon: <FileText className="h-4 w-4 text-white" />,
    image: undefined,
  },
  {
    title: "Animations",
    description: "Smooth animations for your projects.",
    id: 2,
    icon: <Circle className="h-4 w-4 text-white" />,
    image: undefined,
  },
  {
    title: "Components",
    description: "Reusable components for your projects.",
    id: 3,
    icon: <Layers className="h-4 w-4 text-white" />,
    image: undefined,
  },
  {
    title: "Backgrounds",
    description: "Beautiful backgrounds and patterns for your projects.",
    id: 4,
    icon: <Layout className="h-4 w-4 text-white" />,
    image: undefined,
  },
  {
    title: "Common UI",
    description: "Common UI components are coming soon!",
    id: 5,
    icon: <Code className="h-4 w-4 text-white" />,
    image: undefined,
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS: Transition = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}: CarouselProps) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const carouselItems = loop ? [...items, items[0]] : items;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  // Pause on hover
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  // Autoplay
  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === carouselItems.length - 1) return loop ? 0 : prev;
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, pauseOnHover, carouselItems.length]);

  const effectiveTransition: Transition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${
        round
          ? "rounded-full border border-white"
          : "rounded-3xl border border-[#222]"
      }`}
      style={{
        width: "100%",
        maxWidth: baseWidth ? `${baseWidth}px` : "100%",
        ...(round && { height: baseWidth ? `${baseWidth}px` : undefined }),
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          // If you want 3D effect:
          // const range = [
          //   -(index + 1) * trackItemOffset,
          //   -index * trackItemOffset,
          //   -(index - 1) * trackItemOffset,
          // ];
          // const outputRange = [90, 0, -90];
          // const rotateY = useTransform(x, range, outputRange, { clamp: false });

          return (
            <motion.div
              key={index}
              className={`relative shrink-0 flex flex-row items-center gap-8 bg-[#292d32] rounded-xl overflow-hidden shadow-lg px-10 py-8`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : "100%",
                ...(round && { borderRadius: "50%" }),
              }}
              transition={effectiveTransition}
            >
              {/* Gambar utama */}
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.alt || item.title}
                  className="w-36 h-36 object-contain select-none mr-8 shrink-0"
                  draggable={false}
                />
              ) : (
                item.icon && (
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#060010] mr-8">
                    {item.icon}
                  </span>
                )
              )}
              {/* Konten */}
              <div>
                <h2 className="text-white text-2xl lg:text-3xl font-extrabold mb-2">{item.title}</h2>
                <p className="text-slate-300 text-base lg:text-lg font-normal">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Dots */}
      <div
        className={`flex w-full justify-center`}
      >
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                currentIndex % items.length === index
                  ? round
                    ? "bg-white"
                    : "bg-[#333333]"
                  : round
                    ? "bg-[#555]"
                    : "bg-[rgba(51,51,51,0.4)]"
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}