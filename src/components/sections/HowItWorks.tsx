import { PackageOpen, HandHeart, CircleCheckBig } from 'lucide-react'
import { HOW_IT_WORKS } from '../../lib/constants'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimatedSection } from '../ui/AnimatedSection'

const stepIcons = [PackageOpen, HandHeart, CircleCheckBig]

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="divider-gradient absolute top-0 left-0 right-0" />

      <AnimatedSection>
        <SectionHeading
          label="Implementation"
          title={HOW_IT_WORKS.headline}
          shimmer
        />
      </AnimatedSection>

      <div className="mt-4 grid sm:grid-cols-3 gap-6">
        {HOW_IT_WORKS.steps.map((step, i) => {
          const Icon = stepIcons[i]
          return (
            <AnimatedSection key={step.title} delay={i * 0.1}>
              <div className="text-center p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent/30 bg-accent-subtle transition-transform hover:scale-110">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <div className="mb-2 text-sm font-bold text-accent uppercase tracking-wider">
                  Step {i + 1}
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-text-muted">{step.description}</p>
              </div>
            </AnimatedSection>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
