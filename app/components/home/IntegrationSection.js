import AnimatedIntegrationList from './AnimatedIntegrationList'

const IntegrationSection = () => {
  return (
    <section>
      {/* Section Header */}
      <div className="mb-[100px] text-center">
        <p className="mb-4 font-medium uppercase">TOP INTEGRATION</p>
        <h2 className="mb-10 max-lg:mb-10">
          Make productivity easier with 50+
          <br />
          Integrations
        </h2>
        <p className="mx-auto mb-12 max-w-[590px] max-lg:mb-10">
          Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin
          though it looks like nothing.
        </p>
      </div>

      {/* Integration List Section */}
      <section className="relative pb-150">
        <div className="container">
          <AnimatedIntegrationList />
        </div>
      </section>
    </section>
  )
}

export default IntegrationSection
