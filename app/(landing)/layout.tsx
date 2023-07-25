import {PropsWithChildren} from "react";

export default function LandingLayout({ children }: PropsWithChildren){
    return (
        <main className="h-full bg-[#111827] overflow-auto">
            <div className="mx-auto max-w-screen-xl h-full w-full">
              {children}
            </div>
        </main>
    )
}
