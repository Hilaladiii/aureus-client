"use client";

import { useTheme } from "next-themes";
import {
  ExternalToast,
  Toaster as Sonner,
  toast,
  type ToasterProps,
} from "sonner";
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  Loader2Icon,
  XCircleIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <XCircleIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  );
};

interface Props {
  type: "success" | "error";
  message: string;
  options?: ExternalToast;
}
function Toast({ message, type, options }: Props) {
  const baseStyle =
    "font-mono flex gap-2 items-center border border-secondary40 py-3 px-5";
  if (type === "success")
    return toast.success(message, {
      className: cn(baseStyle),
      unstyled: true,
      ...options,
    });

  if (type === "error")
    return toast.error(message, {
      className: cn(baseStyle, "text-tertiary"),
      unstyled: true,
      ...options,
    });
}

export { Toaster, Toast };
