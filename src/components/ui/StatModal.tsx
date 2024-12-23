import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StatModalProps {
  stat: any;
  isOpen: boolean;
  onClose: () => void;
}

export function StatModal({ stat, isOpen, onClose }: StatModalProps) {
  if (!stat) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-x-4 top-[10%] md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg w-full bg-white dark:bg-gray-800 rounded-2xl p-6 z-50 shadow-xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <stat.icon className="w-8 h-8 text-[#FF7757]" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.label}
              </h3>
            </div>

            <div className="space-y-4">
              {stat.details.map((detail: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-[#FF7757]" />
                  <p className="text-gray-700 dark:text-gray-200">{detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}