import type React from "react";

export function WrapperForInputFromAuthForms({ children }: { children: React.ReactNode }) {
    return <div className={" border-2 w-full  border-slate-500/50 rounded-lg p-1 flex"}>{children}</div>;
}
