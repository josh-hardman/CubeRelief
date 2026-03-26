import { CheckCircle2, Users, Building2 } from 'lucide-react'
import { KEY_BENEFITS } from '../../lib/constants'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimatedSection } from '../ui/AnimatedSection'

export function KeyBenefits() {
  return (
    <SectionWrapper id="key-benefits">
      <AnimatedSection>
        <SectionHeading
          label="Benefits"
          title={KEY_BENEFITS.headline}
          shimmer
        />
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        <AnimatedSection delay={0}>
          <div className="glass-card rounded-2xl p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-subtle">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white">For Donors</h3>
            </div>
            <ul className="space-y-4">
              {KEY_BENEFITS.forDonors.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div className="glass-card rounded-2xl p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-subtle">
                <Building2 className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white">For Plasma Centers</h3>
            </div>
            <ul className="space-y-4">
              {KEY_BENEFITS.forCenters.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  )
}
