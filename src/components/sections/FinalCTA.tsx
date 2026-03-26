import { FINAL_CTA } from '../../lib/constants'
import { AnimatedSection } from '../ui/AnimatedSection'
import { CTAButton } from '../ui/CTAButton'

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">
      <div className="blur-orb blur-orb-blue w-[500px] h-[500px] -left-40 top-0 absolute" />
      <div className="blur-orb blur-orb-cyan w-[400px] h-[400px] -right-40 bottom-0 absolute" />
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <AnimatedSection>
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-6">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-shimmer tracking-tight max-w-3xl mx-auto leading-tight">
            {FINAL_CTA.headline}
          </h2>
          <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto">
            {FINAL_CTA.body}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CTAButton label={FINAL_CTA.cta} />
            <CTAButton label="Request Information" variant="secondary" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
