import EmptyData from "@/components/Shared/EmptyData/EmptyData";


export default function page({searchParams}) {
  console.log(searchParams.category)
  return (
    <div>
        <EmptyData />
    </div>
  )
}
