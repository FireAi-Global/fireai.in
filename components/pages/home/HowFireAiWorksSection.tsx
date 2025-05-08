"use client";

import { useState, useEffect, useCallback, memo } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FireSmart } from "@/public/assets/icons";
import cards from "@/data/home/howFireAiWorks";
import Button from "@/components/general/buttons/index";
import { useModal } from "@/context/ModalContext";

interface CardProps {
	card: {
		image: StaticImageData;
		description: string;
		title: string;
		alt: string;
	};
}

const Card = memo(({ card }: CardProps) => {
	return (
		<Image
			src={card.image}
			alt={card.alt || card.description}
			width={350}
			height={380}
			className="h-[380px] w-full object-contain z-20"
			loading="eager"
		/>
	);
});

Card.displayName = "Card";

export default function HowFireAiWorksSection() {
	const { openDemoModal } = useModal();
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const ROTATION_INTERVAL = 5000; // 5 seconds per slide

	const nextSlide = useCallback(() => {
		setCurrentSlide((prev) => (prev + 1) % cards.length);
	}, []);

	const prevSlide = useCallback(() => {
		setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
	}, []);

	const goToSlide = useCallback((index: number) => {
		setCurrentSlide(index);
	}, []);

	// Auto rotation setup with improved performance
	useEffect(() => {
		let intervalId: NodeJS.Timeout;

		if (!isPaused) {
			intervalId = setInterval(nextSlide, ROTATION_INTERVAL);
		}

		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	}, [isPaused, nextSlide, ROTATION_INTERVAL]);

	// Animation variants with improved performance
	const slideVariants = {
		enter: { opacity: 0, x: 50, scale: 0.95 },
		center: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: {
				duration: 0.4,
				ease: [0.25, 0.1, 0.25, 1.0],
				when: "beforeChildren",
			},
		},
		exit: {
			opacity: 0,
			x: -50,
			scale: 0.95,
			transition: {
				duration: 0.3,
				ease: [0.25, 0.1, 0.25, 1.0],
			},
		},
	};

	return (
		<section
			className="max-w-[1200px] mx-auto px-4 py-16 md:py-20"
			id="how-it-works"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
			aria-label="How FireAI Works"
		>
			<div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-10 gap-6">
				<div className="w-full lg:w-fit text-center lg:text-left">
					<div className="inline-flex items-center gap-2 py-2 rounded-full mb-4 lg:mx-0">
						<Image src={FireSmart} alt="FireSmart" width={16} height={16} />
						<span className="text-sm font-medium">3 easy step process</span>
					</div>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#0600A3] to-[#0169FD]">
						How FireAI Works
					</h2>
				</div>

				<div className="hidden lg:block">
					<Button
						variant="primary"
						onClick={openDemoModal}
						className="transform hover:scale-105 transition-transform"
					>
						Get a demo
					</Button>
				</div>
			</div>

			{/* Desktop Grid */}
			<div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{cards.map((card, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<Card card={card} />
					</motion.div>
				))}
			</div>

			{/* Mobile Carousel */}
			<div className="lg:hidden">
				<div
					className="text-center w-full max-w-[320px] mx-auto rounded-[20px] relative overflow-hidden"
					style={{ height: 380 }}
				>
					<AnimatePresence initial={false} mode="wait">
						<motion.div
							key={`mobile-slide-${currentSlide}`}
							initial="enter"
							animate="center"
							exit="exit"
							variants={slideVariants}
							className="absolute inset-0"
						>
							{/* <div className="h-full flex flex-col"> */}
							<Image
								src={cards[currentSlide].image}
								alt={cards[currentSlide].alt || cards[currentSlide].description}
								width={350}
								height={380}
								className="w-full h-[380px] object-contain"
								loading="eager"
							/>
							{/* </div> */}
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Navigation Controls */}
				<div className="flex justify-center items-center gap-4 mt-8">
					<button
						onClick={prevSlide}
						aria-label="Previous slide"
						className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path
								d="M15 18L9 12L15 6"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>

					<div className="flex gap-2">
						{cards.map((_, index) => (
							<button
								key={index}
								onClick={() => goToSlide(index)}
								aria-label={`Go to slide ${index + 1}`}
								aria-current={index === currentSlide ? "true" : "false"}
								className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
									index === currentSlide ? "w-8 bg-[#2B4EE7]" : "w-2 bg-[#E5E7EB] hover:bg-gray-300"
								}`}
							/>
						))}
					</div>

					<button
						onClick={nextSlide}
						aria-label="Next slide"
						className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center hover:bg-gray-50 active:bg-gray-100 transition-colors"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path
								d="M9 18L15 12L9 6"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>

				{/* Mobile Demo Button */}
				<div className="mt-8 flex justify-center lg:hidden">
					<Button
						variant="primary"
						onClick={openDemoModal}
						className="transform hover:scale-105 transition-transform"
					>
						Get a demo
					</Button>
				</div>
			</div>
		</section>
	);
}
