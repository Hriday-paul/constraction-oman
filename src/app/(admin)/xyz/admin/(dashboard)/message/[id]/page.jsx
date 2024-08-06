import MessafeDetails from "@/components/Admin/Messages/MessafeDetails"


export default function page({params}) {
  return (
    <div>
        <MessafeDetails id={params?.id}/>
    </div>
  )
}
