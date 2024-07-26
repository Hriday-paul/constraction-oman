import ProjectCarousel from "@/components/ProjectDetails/ProjectCarousel";
import ProjectDescription from "@/components/ProjectDetails/ProjectDescription";
import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";
import TopSection from "@/components/Shared/TopSection/TopSection";
import UseGetProjectDetails_by_id from "@/Hooks/UseGetProjectDetails_by_id"

export async function generateMetadata({ params }) {
  const details = await UseGetProjectDetails_by_id({ id: params.id });
  
  return {
    title: 'Nanco | project | details',
    description: details[0]?.details,
  }
}

const breadCrumbData = [{ name: 'home', link: '/' }, { name: ' / projects', link: '/projects' }, { name: ' / details', rout: "/" }]

export default async function page({ params }) {
  const details = await UseGetProjectDetails_by_id({ id: params.id });

  return (
    <div>
      <TopSection title={"Project Details"} routs={breadCrumbData} />
      <div>
        <div className="max-w-7xl mx-auto px-4 py-20">
          <ProjectCarousel images={details[0]?.images?.split(',')} />
          <ProjectDetails data={details[0]} />
          <ProjectDescription data={details[0]} />
        </div>
      </div>
    </div>
  )
}
