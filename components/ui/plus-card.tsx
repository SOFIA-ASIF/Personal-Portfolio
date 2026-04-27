"use client";

import React from "react";
import { cn } from "@/lib/utils";

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-3 -left-3" />
    <PlusIcon className="absolute -top-3 -right-3" />
    <PlusIcon className="absolute -bottom-3 -left-3" />
    <PlusIcon className="absolute -bottom-3 -right-3" />
  </>
);

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1"
    stroke="currentColor"
    className={cn("text-[#67C090] dark:text-[#67C090] size-6", className)}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

export const PlusCard: React.FC<{
  className?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}> = ({ className = "", title, description, children, icon }) => {
  return (
    <div
      className={cn(
        "relative border border-dashed border-[#67C090]/50 dark:border-[#67C090]/30 rounded-lg p-6 bg-white dark:bg-zinc-950 min-h-[200px]",
        "flex flex-col justify-between hover:border-[#67C090] transition-colors duration-300",
        className
      )}
    >
      <CornerPlusIcons />
      {/* Content */}
      <div className="relative z-10 space-y-3">
        {icon && (
          <div className="mb-3">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        {description && (
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export { CornerPlusIcons, PlusIcon };
