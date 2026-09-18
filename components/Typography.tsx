import { cn } from "@/lib/utils"
import { Ancizar_Serif } from "next/font/google"
import { ComponentProps } from "react"

const aSerif = Ancizar_Serif({
    variable: "--font-ancizar-serif",
    subsets: ["latin"],
    display: "swap"
})

const AncizarH6: React.FC<ComponentProps<"h6">> = ({
    className,
    children,
    ...props
}) => {

    return (
        <>
            <h6
                className={cn(
                    aSerif.className,
                    "text-lg md:text-2xl",
                    className
                )}
                {...props}
            >
                {children}
            </h6>
        </>
    )
}

const AncizarH5: React.FC<ComponentProps<"h5">> = ({
    className,
    children,
    ...props
}) => {

    return (
        <h5
            className={cn(
                aSerif.className,
                "text-xl md:text-2xl",
                className
            )}
            {...props}
        >
            {children}
        </h5>
    )
}

const AncizarH4: React.FC<ComponentProps<"h4">> = ({
    className,
    children,
    ...props
}) => {

    return (
        <h4
            className={cn(
                aSerif.className,
                "text-2xl md:text-4xl",
                className
            )}
            {...props}
        >
            {children}
        </h4>
    )
}

const AncizarH1: React.FC<ComponentProps<"h1">> = ({
    className,
    children,
    ...props
}) => {

    return (
        <h1
            className={cn(
                aSerif.className,
                "text-2xl md:text-[3.4rem]/15",
                className
            )}
            {...props}
        >
            {children}
        </h1>
    )
}

export { AncizarH6, AncizarH5, AncizarH4, AncizarH1 }