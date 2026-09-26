"use client"

import { ReactNode } from "react";
import { Button, DialogTrigger, DrawerTrigger } from "@/components/ui";
import DialogOrDrawer from "./DialogOrDrawer";
import { IoArrowForward } from "react-icons/io5";
import { cn } from "cn";
import { Form, useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"

interface Props {
    className?: string
    invert?: boolean
}

interface Inputs {
    name: string
    email: string
    message: string
}

const InquireButton: React.FC<Props> = ({ className, invert }) => {
    const { register, control, formState: { isLoading } } = useForm<Inputs>()
    const { register: desktopRegister, control: desktopControl, formState: { isLoading: desktopIsLoading } } = useForm<Inputs>()

    const popUpContent: ReactNode = (
        <>
            <Form
                action={"/api/send"}
                encType="application/json"
                onSuccess={() => toast.success("Message has been sent")}
                onError={() => toast.error("Something went wrong")}
                className="hidden md:block"
                control={desktopControl}
            >
                <div className="grid gap-1.5">
                    <h2 className="text-lg leading-none font-semibold">
                        Send us a message
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Have a question or feedback? Fill out the form below and
                        we&apos;ll get back to you as soon as we can.
                    </p>
                </div>

                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <label
                            htmlFor="name-1"
                            className="text-sm leading-none font-medium select-none"
                        >
                            Name
                        </label>
                        <input
                            {...desktopRegister("name", {
                                required: true
                            })}
                            placeholder="Jane Doe"
                            className="flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label
                            htmlFor="email-1"
                            className="text-sm leading-none font-medium select-none"
                        >
                            Email
                        </label>
                        <input
                            {...desktopRegister("email", {
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                }
                            })}
                            type="email"
                            placeholder="jane@example.com"
                            className="flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                        />
                    </div>
                    <div className="grid gap-2">
                        <label
                            htmlFor="message-1"
                            className="text-sm leading-none font-medium select-none"
                        >
                            Message
                        </label>
                        <textarea
                            {...desktopRegister("message", {
                                required: true
                            })}
                            placeholder="How can we help?"
                            rows={4}
                            className="flex w-full min-w-0 resize-none rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                        />
                    </div>
                </div>


                <div className="flex justify-end gap-2">
                    <DialogTrigger>
                        <Button type="button" variant="outline">
                            Cancel
                        </Button>
                    </DialogTrigger>
                    <Button disabled={desktopIsLoading} type="submit" className={"flex items-center justify-center min-w-30"}>
                        {
                            desktopIsLoading ?
                                <span className="loading loading-spinner loading-xl"></span>
                                : "Send message"
                        }
                    </Button>
                </div>
            </Form>

            <Form
                action={"/api/send"}
                encType="application/json"
                onSuccess={() => toast.success("Message has been sent")}
                onError={() => toast.error("Something went wrong")} className="fixed inset-0 z-50 md:hidden"
                control={control}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-x-0 bottom-0 rounded-t-lg border-t bg-background">
                    <div className="mx-auto w-full max-w-sm">
                        <div className="mx-auto mt-4 h-2 w-25 rounded-full bg-muted" />
                        <div className="grid gap-1.5 p-4">
                            <h2 className="text-lg leading-none font-semibold">
                                Send us a message
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                Have a question or feedback? Fill out the form below and
                                we&apos;ll get back to you as soon as we can.
                            </p>
                        </div>

                        <div className="grid gap-4 px-4">
                            <div className="grid gap-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm leading-none font-medium select-none"
                                >
                                    Name
                                </label>
                                <input
                                    {...register("name", {
                                        required: true
                                    })}
                                    placeholder="Jane Doe"
                                    className="flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm leading-none font-medium select-none"
                                >
                                    Email
                                </label>
                                <input
                                    {...register("email", {
                                        required: true,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address",
                                        }
                                    })}
                                    type="email"
                                    placeholder="jane@example.com"
                                    className="flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm leading-none font-medium select-none"
                                >
                                    Message
                                </label>
                                <textarea
                                    {...register("message", {
                                        required: true
                                    })}
                                    placeholder="How can we help?"
                                    rows={4}
                                    className="flex w-full min-w-0 resize-none rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 p-4">
                            <Button disabled={isLoading} type="submit" className={"flex items-center justify-center"}>
                                {
                                    isLoading ?
                                        <span className="loading loading-spinner loading-xl"></span>
                                        : "Send message"
                                }
                            </Button>
                            <DrawerTrigger type="button" className={"outline-1 rounded-sm"}>
                                Cancel
                            </DrawerTrigger>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    )

    return (
        <>
            <DialogOrDrawer content={popUpContent}>
                <button className={cn("btn rounded-full bg-primary font-normal px-8 py-4 transition-all duration-300 ease-in-out hover:scale-105", className)} rel="noopener noreferrer">
                    Make an Inquiry
                    <IoArrowForward className={cn("ml-2 size-4.5 text-secondary", `${invert && "text-primary"}`)} />
                </button>
            </DialogOrDrawer>
            <Toaster />
        </>
    )
}

export default InquireButton