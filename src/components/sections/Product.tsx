import { ShieldCheck, Droplets, Wind } from 'lucide-react'
import { PRODUCT } from '../../lib/constants'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimatedSection } from '../ui/AnimatedSection'

const icons = [ShieldCheck, Droplets, Wind]

export function Product() {
  return (
    <SectionWrapper id="product">
      <div className="divider-gradient absolute top-0 left-0 right-0" />
      <div className="blur-orb blur-orb-cyan w-[350px] h-[350px] -right-40 top-1/4 absolute" />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <AnimatedSection>
          <SectionHeading
            label="The Product"
            title={PRODUCT.headline}
            align="left"
          />
          <p className="text-lg text-text-muted leading-relaxed">{PRODUCT.body}</p>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <img
            src="/images/man_holding_cube_relief.png"
            alt="Donor holding Cube Relief"
            className="w-full rounded-2xl glow-ring"
          />
        </AnimatedSection>
      </div>

      <div className="mt-14 grid sm:grid-cols-3 gap-6">
        {PRODUCT.features.map((f, i) => {
          const Icon = icons[i]
          return (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent-subtle">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-text-muted text-sm">{f.description}</p>
              </div>
            </AnimatedSection>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
