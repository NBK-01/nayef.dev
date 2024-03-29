import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "../comps/links";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    linkOne: string;
    linkTwo: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-emerald-800 block  rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle className="my-auto">{item.title} </CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardLinks
              className="mt-3"
              linkOne={item.linkOne}
              linkTwo={item.linkTwo}
            />
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-md h-full w-full p-4 overflow-hidden bg-white border border-neutral-600 relative z-50",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h6 className={cn("text-neutral-700 tracking-wide", className)}>
      {children}
    </h6>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-neutral-400 tracking-wide leading-relaxed text-xs mt-3",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardLinks = ({
  className,
  linkOne,
  linkTwo,
}: {
  className?: string;
  linkOne?: string;
  linkTwo?: string;
}) => {
  if (linkOne && linkTwo) {
    return (
      <div className={cn("flex space-x-5", className)}>
        <Link
          href={linkOne as string}
          className="text-neutral-500"
          target="_blank"
        >
          <ExternalLink name="preview" />
        </Link>

        <Link
          href={linkTwo as string}
          className="text-neutral-500"
          target="_blank"
        >
          <ExternalLink name="source" />
        </Link>
      </div>
    );
  } else if (linkOne && !linkTwo) {
    return (
      <div className={cn("flex space-x-5", className)}>
        <Link
          href={linkOne as string}
          className="text-neutral-500"
          target="_blank"
        >
          <ExternalLink name="preview" />
        </Link>
      </div>
    );
  } else if (!linkOne && linkTwo) {
    return (
      <div className={cn("flex space-x-5", className)}>
        <Link
          href={linkTwo as string}
          className="text-neutral-500"
          target="_blank"
        >
          <ExternalLink name="source" />
        </Link>
      </div>
    );
  } else return <div className={cn("flex space-x-5", className)}></div>;
};
