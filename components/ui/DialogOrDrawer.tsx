import { ReactNode } from "react"
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./dialog"
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./drawer"
import { cn } from "@/lib/utils"
import { Button } from "./button"

interface Props {
    children: ReactNode
    content: ReactNode
    className?: string
}

const DialogOrDrawer: React.FC<Props> = ({ children, content, className }) => {

    return (
        <>
            <span className="hidden md:inline-block">
                <Dialog>
                    <DialogTrigger>
                        {children}
                    </DialogTrigger>
                    <DialogContent className={cn(className)}>
                        {content}
                    </DialogContent>
                </Dialog>
            </span>
            <span className="md:hidden">
                <Drawer>
                    <DrawerTrigger>
                        {children}
                    </DrawerTrigger>
                    <DrawerContent className={cn(className)}>
                        {content}
                    </DrawerContent>
                </Drawer>
            </span>
        </>
    )
}

export default DialogOrDrawer;