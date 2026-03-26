import { motion } from 'framer-motion'
import { HERO } from '../../lib/constants'
import { CTAButton } from '../ui/CTAButton'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="blur-orb blur-orb-blue w-[500px] h-[500px] -top-40 -left-40" />
      <div className="blur-orb blur-orb-cyan w-[400px] h-[400px] top-20 right-0" />
      <div className="blur-orb blur-orb-blue w-[300px] h-[300px] bottom-0 left-1/3" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-6">
              Cube Relief&#8482;
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              <span className="text-shimmer">{HERO.headline}</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-muted leading-relaxed max-w-xl">
              {HERO.subheadline}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton label={HERO.cta} />
              <CTAButton label="Learn More" variant="secondary" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="animate-hero-float"
          >
            <img
              src="/images/product_demo.png"
              alt="Cube Relief product"
              className="max-w-lg mx-auto w-full drop-shadow-2xl rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
