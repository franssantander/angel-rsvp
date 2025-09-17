"use client";

import React, {
  useEffect,
  useState,
  cloneElement,
  isValidElement,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiFlowerFill } from "react-icons/ri";

interface PreloaderProps {
  images: string[];
  children: React.ReactNode;
}

export default function Preloader({ images, children }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;

    function handleLoad() {
      loadedCount++;
      setProgress(Math.round((loadedCount / images.length) * 100));
      if (loadedCount === images.length) {
        setTimeout(() => setLoaded(true), 600); // delay before reveal
      }
    }

    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = handleLoad;
      img.onerror = handleLoad;
    });
  }, [images]);

  useEffect(() => {
    if (!loaded) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loaded]);

  return (
    <>
      {/* Fade wrapper for children */}
      <motion.div>
        {isValidElement(children)
          ? cloneElement(children as React.ReactElement<{ loaded?: boolean }>, {
              loaded,
            })
          : children}
      </motion.div>

      {/* Preloader overlay */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-rose-500 text-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center space-y-5 font-geist">
              <h1 className="text-4xl font-black flex items-center gap-x-2">
                <RiFlowerFill size={36} />
                Angel
              </h1>
              <p className="text-sm font-medium">Loading {progress}%</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
