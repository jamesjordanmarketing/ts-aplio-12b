import AnimatedFAQImages from './AnimatedFAQImages'
import Accordion from './Accordion'

const FAQSection = () => {
  return (
    <div className="container relative z-10 pb-[150px]">
      <div className="grid grid-cols-2 items-start gap-8 max-lg:grid-cols-1">
        {/* Left side with animated images */}
        <AnimatedFAQImages />

        {/* Right side with FAQ content */}
        <div className="lg:pl-15 xl:pl-25">
          <div>
            <p className="section-tagline">FAQ&apos;s</p>
            <h2 className="mb-8">
              Frequently Asked Question
              <br />
              From Clients
            </h2>
          </div>
          <Accordion />
        </div>
      </div>
    </div>
  )
}

export default FAQSection
