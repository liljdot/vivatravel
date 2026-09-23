"use client"

import Section from "@/components/layout/Section"
import Image from "next/image";
import mapImage from "@/public/assets/images/dot-map.png"
import centerImage from "@/public/assets/images/girl-with-phone.png"
import centerImageText from "@/public/assets/images/we-move-text.png"
import studentImageText from "@/public/assets/images/from-visa-text.png"
import studentImage from "@/public/assets/images/student-image.png"
import workerImage from "@/public/assets/images/worker-image.png"
import workerImageText from "@/public/assets/images/worker-image-text.png"
import healthImage from "@/public/assets/images/health-image.png"
import healthImageText from "@/public/assets/images/health-image-text.png"
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const MapSection: React.FC = () => {

    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [4, 1, 4]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5],
        [0.3, 1, 1]
    );

    const y = useTransform(
        scrollYProgress,
        [0, 0.5],
        [80, 0]
    );

    const rotateY = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [180, 0, -180]
    )

    // for mobile 
    const x = useTransform(
        scrollYProgress,
        [-0.5, 1, 1.25],
        ["50vw", "0vw", "-100vw"]
    )

    return (
        <Section className="relative mt-10 h-59 md:h-screen overflow-hidden">
            <div
                ref={sectionRef}
                className="relative h-full w-full"
            >
                {/* for desktop, hidden on mobile */}
                <motion.div
                    className="hidden md:flex absolute inset-0"
                    style={{
                        scale,
                        opacity,
                        y,
                        rotateY,
                    }}
                >
                    <Image
                        src={mapImage}
                        alt="Map"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* for mobile, hidden on desktop */}
                <motion.div
                    className="flex md:hidden absolute inset-0"
                    style={{
                        x
                    }}
                >
                    <Image
                        src={mapImage}
                        alt="Map"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>

            <Orbit
                scrollYProgress={scrollYProgress}
                bubbles={[
                    {}, {
                        className: "bg-secondary"
                    }
                ]}
            />
            <Orbit
                scrollYProgress={scrollYProgress}
                sizeClassName="size-33 md:size-102"
                bubbles={[{ className: "hidden" }]}
            />
            <Orbit
                scrollYProgress={scrollYProgress}
                sizeClassName="size-23 md:size-72"
                borderClassName="border-primary"
                bubbles={[{ className: "bg-primary" }]}
            />
            <Orbit
                scrollYProgress={scrollYProgress}
                sizeClassName="size-67.5 md:size-204"
                borderClassName="border-none"
                bubbles={[{ className: "bg-primary" }]}
            />

            <CenterImage scrollYProgress={scrollYProgress} />
            <StudentImage />
            <WorkerImage />
            <HealthImage />
        </Section>
    )
}

interface OrbitProps {
    sizeClassName?: string
    borderClassName?: string
    bubbles?: {
        className?: string
    }[]
    scrollYProgress: MotionValue<number>
}


const Orbit: React.FC<OrbitProps> = ({ sizeClassName, bubbles, scrollYProgress, borderClassName }) => {
    const opacity = useTransform(
        scrollYProgress,
        [0.25, 0.5, 1],
        [0, 1, 1]
    )

    const translateY = useTransform(
        scrollYProgress,
        [0, 0.5],
        [-500, 0]
    );

    const [startingPosition] = useState(() => Math.floor(Math.random() * 361))

    return (
        <>
            <div
                className={cn("absolute left-1/2 top-1/2 size-43 md:size-133 -translate-x-1/2 -translate-y-1/2 mx-auto",
                    sizeClassName
                )}
            >
                <motion.div
                    className="absolute inset-0"
                    style={{
                        opacity,
                        translateY
                    }}
                >
                    {/* Orbit */}
                    {
                        bubbles?.length ?
                            bubbles.map((bubble, index) => (<motion.div
                                key={index}
                                className={cn("absolute inset-0", index == 0 && "border-[0.5px] md:border", "border-[#E3E3E3] rounded-full", borderClassName)}
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 6,
                                    ease: "linear",
                                    repeat: Infinity,
                                }}
                            >
                                <div className="size-full relative"
                                    style={{
                                        // rotate: `${0 + (90 * index)}deg`
                                        rotate: `${startingPosition + (90 * index)}deg`
                                    }}
                                >
                                    {/* Bubble */}

                                    <div className={cn("absolute left-1/2 -top-[1.5px] md:-top-2 -translate-x-1/2 size-1 md:size-3.5 rounded-full bg-primary",
                                        bubble.className
                                    )}>
                                    </div>
                                </div>
                            </motion.div>))

                            : (<motion.div
                                className="absolute inset-0 border-[0.5px] md:border border-[#E3E3E3] rounded-full"
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 6,
                                    ease: "linear",
                                    repeat: Infinity,
                                }}
                            >
                                {/* Bubble */}

                                <div className={"absolute left-1/2 -top-[1.5px] md:-top-2 -translate-x-1/2 size-1 md:size-3.5 rounded-full bg-primary z-20"}>
                                </div>
                            </motion.div>)
                    }

                    {/* Center / axis */}
                    <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                </motion.div>
            </div >
        </>
    )
}

interface CenterImageProps {
    scrollYProgress: MotionValue<number>
}

const CenterImage: React.FC<CenterImageProps> = ({ scrollYProgress }) => {
    const scale = useTransform(
        scrollYProgress,
        [0.25, 0.5],
        [0, 1]
    )

    return (
        <motion.div
            className="absolute size-20 md:size-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
                scale
            }}
        >
            <Image
                src={centerImage}
                alt="girl with phone"
                fill
            />
            <Image
                src={centerImageText}
                alt="girl with phone"
                className="w-46 -translate-y-10 md:-translate-y-18 translate-x-6 md:translate-x-10 scale-150 hover:scale-180 transition-all ease-in-out duration-300"
            />
        </motion.div>
    )
}

const StudentImage: React.FC = () => {

    return (
        <motion.div
            className="absolute size-15 md:size-30 right-5 md:right-24 top-20 md:top-49"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                stiffness: 180,
                damping: 12,
                delay: 0.15,
                duration: 0.5
            }}
        >
            <Image
                src={studentImage}
                alt="happy student"
                fill
            />
            <Image
                src={studentImageText}
                alt="girl with phone"
                className="-translate-y-10 md:-translate-y-18 scale-150 hover:scale-180 transition-all ease-in-out duration-300"
            />
        </motion.div>
    )
}

const WorkerImage: React.FC = () => {

    return (
        <motion.div
            className="absolute size-15 md:size-30 left-18 bottom-10 md:left-66 md:bottom-49"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                stiffness: 180,
                damping: 12,
                delay: 0.15,
                duration: 0.5
            }}
        >
            <Image
                src={workerImage}
                alt="working migrant"
                fill
            />
            <Image
                src={workerImageText}
                alt="text cloud"
                className="-translate-y-10 md:-translate-y-18 scale-150 hover:scale-180 transition-all ease-in-out duration-300"
            />
        </motion.div>
    )
}

const HealthImage: React.FC = () => {

    return (
        <motion.div
            className="absolute size-15 md:size-30 left-9 md:left-36 top-10 md:top-33"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                stiffness: 180,
                damping: 12,
                delay: 0.15,
                duration: 0.5
            }}
        >
            <Image
                src={healthImage}
                alt="medical tourist"
                fill
            />
            <Image
                src={healthImageText}
                alt="text cloud"
                className="-translate-y-10 md:-translate-y-18 scale-150 hover:scale-180 transition-all ease-in-out duration-300"
            />
        </motion.div>
    )
}

export default MapSection;