"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiX,
} from "react-icons/fi";
import { useEffect } from "react";

type ToastTone = "info" | "success" | "failure";

export type ToastMessage = {
  id: number;
  message: string;
  action?: string;
  type: ToastTone;
};

type ToastProps = {
  toast: ToastMessage | null;
  onDismiss: (id?: number) => void;
};

const TOAST_TTL = 5000;

const toneConfig: Record<ToastTone, { bg: string; icon: typeof FiInfo }> = {
  info: { bg: "bg-blue-600", icon: FiInfo },
  success: { bg: "bg-green-600", icon: FiCheckCircle },
  failure: { bg: "bg-red-600", icon: FiAlertCircle },
};

export const Toast = ({ toast, onDismiss }: ToastProps) => {
  useEffect(() => {
    if (!toast) return;

    const timeoutRef = setTimeout(() => {
      onDismiss(toast.id);
    }, TOAST_TTL);

    return () => clearTimeout(timeoutRef);
  }, [onDismiss, toast]);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          layout
          key={toast.id}
          initial={{ y: -15, scale: 0.9, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: -25, scale: 0.9, opacity: 0 }}
          transition={{ type: "spring" }}
          className={`fixed top-4 right-4 z-50 flex w-80 items-start gap-3 rounded-lg p-4 text-sm font-medium p-white shadow-lg ${toneConfig[toast.type].bg}`}
        >
          <div className="mt-0.5 rounded-full bg-white/15 p-1.5">
            {(() => {
              const Icon = toneConfig[toast.type].icon;
              return <Icon className="text-xl" />;
            })()}
          </div>
          <div className="flex flex-col gap-1">
            {toast.action && (
              <p className="text-xs uppercase tracking-wide p-white/80">
                {toast.action}
              </p>
            )}
            <p className="leading-relaxed">{toast.message}</p>
          </div>
          <button
            onClick={() => onDismiss(toast.id)}
            aria-label="Close notification"
            className="ml-auto mt-0.5 rounded p-1 hover:bg-white/10"
          >
            <FiX />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
