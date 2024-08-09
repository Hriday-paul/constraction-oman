import Image from "next/image";


export default function EmptyData() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-40">
        <img src='/empty-data.jpg' height={500} width={500} className="w-40 h-auto" alt="empty data image" />
        <p className="text-secondary text-lg text-center">Data not found</p>
      </div>
    </div>
  )
}
