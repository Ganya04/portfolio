import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { articles } from "../../utils";

const CertificateCard = ({ article, onOpen }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (event) => {
    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={cardRef}
      type="button"
      onClick={() => onOpen(article)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative w-full overflow-hidden rounded-2xl border border-white/40 bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6 text-left text-gray-800 shadow-md transition-transform duration-300 hover:shadow-xl dark:border-white/10 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 dark:text-white"
    >
      <div>
        <span className="inline-flex rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200">
          Certificate
        </span>
        <h3 className="mt-4 text-2xl font-bold leading-tight text-gray-800 transition-colors group-hover:text-gray-900 dark:text-white dark:group-hover:text-white">
          {article.title}
        </h3>
      </div>

      <div className="mt-6 border-t border-gray-100 pt-4 dark:border-gray-800">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-purple-500 px-4 py-2 text-sm text-white dark:bg-purple-500">
            Preview Certificate
          </span>
        </div>
      </div>
    </motion.button>
  );
};

const Passion = () => {
  const initialCount = 3;
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const visibleArticles = articles.slice(0, visibleCount);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const handleSeeLess = () => {
    setVisibleCount(initialCount);
  };

  return (
    <section
      className="mx-auto mt-5 max-w-6xl px-4 md:px-8"
      id="certifications"
    >
      <SectionHeader
        title={"Certifications."}
        subtitle={"Recognitions of my expertise."}
      />

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleArticles.map((article) => (
          <CertificateCard
            key={article.title}
            article={article}
            onOpen={setSelectedCertificate}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-4">
        {visibleCount < articles.length && (
          <button
            onClick={handleSeeMore}
            className="rounded-full border border-purple-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-[0_0_0_1px_rgba(168,85,247,0.08)] transition-all duration-300 hover:border-purple-400 hover:text-purple-700 hover:shadow-[0_10px_30px_-12px_rgba(168,85,247,0.45)] dark:border-purple-400/30 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-purple-300 dark:hover:text-purple-200"
          >
            Show more
          </button>
        )}

        {visibleCount > initialCount && (
          <button
            onClick={handleSeeLess}
            className="rounded-full border border-purple-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-[0_0_0_1px_rgba(168,85,247,0.08)] transition-all duration-300 hover:border-purple-400 hover:text-purple-700 hover:shadow-[0_10px_30px_-12px_rgba(168,85,247,0.45)] dark:border-purple-400/30 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-purple-300 dark:hover:text-purple-200"
          >
            Show fewer
          </button>
        )}
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-950"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 border-b border-gray-100 px-6 py-5 dark:border-gray-800">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-500 dark:text-purple-300">
                    Certification Preview
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {selectedCertificate.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCertificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-purple-300 hover:text-purple-600 dark:border-gray-700 dark:text-gray-200 dark:hover:border-purple-400 dark:hover:text-purple-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open link
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(null)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-purple-300 hover:text-purple-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-purple-400 dark:hover:text-purple-300"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="max-h-[75vh] overflow-auto bg-gray-50 p-4 dark:bg-gray-900">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="mx-auto h-auto w-full rounded-2xl border border-gray-200 bg-white object-contain shadow-sm dark:border-gray-800 dark:bg-gray-950"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Passion;
