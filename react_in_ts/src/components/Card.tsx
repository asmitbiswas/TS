import type { PropsWithChildren, ReactNode } from "react";

interface props extends PropsWithChildren{
    title: string;
    footer?: ReactNode
}
export function card({title, children, footer}:props){
    return(
        <section>
            <h2>{title}</h2>
            <div>{children}</div>
            {footer && <footer>{footer}</footer>}
        </section>
    );
}

