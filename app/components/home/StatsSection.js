import { statsData, statsConfig } from '@/app/data/statsData'
import CounterCard from '@/app/components/ui/CounterCard'
import { cn } from '@/utils/cn'

const StatsSection = ({ border = true }) => {
  return (
    <section>
      <div className="container relative">
        <div className={cn(statsConfig.container.section.base, border && statsConfig.container.section.border)}>
          {/* Title Section */}
          <div className="max-lg:col-span-full lg:col-span-6">
            <div className="max-w-[550px]">
              <p className="section-tagline">Numbers</p>
              <h2>More than 10 years experience in this industry</h2>
            </div>
          </div>

          {/* Counter Cards */}
          {statsData.map((counter) => (
            <div key={counter.id} className="py-5 max-md:col-span-full md:col-span-6 lg:col-span-3">
              <CounterCard number={counter.number} suffix={counter.suffix} label={counter.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
