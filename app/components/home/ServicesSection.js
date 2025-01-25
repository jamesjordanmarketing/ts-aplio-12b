import { servicesCards } from '@/app/data/servicesData'
import ServiceCard from '@/app/components/ui/ServiceCard'
import Link from 'next/link'

const ServicesSection = () => {
  return (
    <section className="container pt-12">
      <div className="grid grid-cols-12 max-md:gap-y-8 md:gap-8">
        {/* Text content */}
        <div className="col-span-12 md:col-span-4">
          <div className="max-md:mb-15">
            <p className="section-tagline">Our Services</p>

            <h2 className="mb-8">
              The world&apos;s best <br />
              companies trust <br />
              aplio.
            </h2>
            <p className="mb-8 max-w-[520px]">
              Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin,
              though it looks like it
            </p>
            <Link href="/services" className="btn">
              Get More Services
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="col-span-12 md:col-span-8 1xl:pl-[120px]">
          <div className="relative z-10">
            {/* Background blur effect */}
            <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-sm:hidden">
              <div className="h-[330px] w-[330px] rounded-full bg-primary-200/20 blur-[145px] xl:h-[350px] xl:w-[350px]"></div>
              <div className="lg-ml-[170px] h-[330px] w-[330px] rounded-full bg-primary-200/20 blur-[145px] xl:h-[350px] xl:w-[350px]"></div>
            </div>

            {/* Services cards grid */}
            <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
              {servicesCards.map((service) => (
                <ServiceCard
                  key={service.id}
                  svg={service.svg}
                  darkSvg={service.darkSvg}
                  title={service.title}
                  description={service.description}
                  slug={service.slug}
                  button={service.button}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
