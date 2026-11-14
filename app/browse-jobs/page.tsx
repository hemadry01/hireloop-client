
import { getJobs } from "@/lib/api/job"
import JobCard from "../components/JobCard"
import { JobFiltersPanel } from "./_components/job-filters-panel"
import { JobSearchBar } from "./_components/job-search-bar"

type BrowseJobsPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

const BrowseJobsPage = async ({ searchParams }: BrowseJobsPageProps) => {
  const params = await searchParams

  const queryParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => queryParams.append(key, item))
    } else if (value !== undefined) {
      queryParams.set(key, value)
    }
  })

  const query = queryParams.toString()
  const jobs = await getJobs(query)

  return (
    <>

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <JobSearchBar />

        <div className="mt-6 flex flex-col gap-6 lg:grid lg:grid-cols-[296px_minmax(0,1fr)] lg:gap-8">
          <aside>
            <JobFiltersPanel jobs={jobs} />
          </aside>

          <section>
            <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-[#EDEDEF]">
              Found {jobs.length} Professional Jobs
            </h2>

            <ul className="mt-4 flex list-none flex-col gap-3">
              {jobs.length > 0 ? (
                jobs.map((job) => <JobCard key={job._id} job={job} />)
              ) : (
                <li className="surface-card p-10 text-center text-sm text-[#6E6E78]">
                  No jobs match your current search.
                </li>
              )}
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}

export default BrowseJobsPage
