import { PRIVATE_LABEL } from '../../lib/constants'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimatedSection } from '../ui/AnimatedSection'
import { CTAButton } from '../ui/CTAButton'

export function PrivateLabel() {
  return (
    <SectionWrapper id="private-label">
      <div className="blur-orb blur-orb-cyan w-[350px] h-[350px] -left-40 bottom-0 absolute" />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <AnimatedSection>
          <img
            src="/images/portada.png"
            alt="Branded Cube Relief product"
            className="w-full rounded-2xl glow-ring"
          />
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <SectionHeading
            label="Customization"
            title={PRIVATE_LABEL.headline}
            align="left"
          />
          <p className="text-lg text-text-muted leading-relaxed">{PRIVATE_LABEL.body}</p>
          <div className="mt-8">
            <CTAButton label="Ask About Private Label" variant="secondary" />
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  )
}
