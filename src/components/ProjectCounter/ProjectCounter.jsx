import Counter from "./Counter";


export default async function ProjectCouter({ countInfo }) {
  const countData = await countInfo;
  
  return (
    <div className="container flex  gap-3 lg:gap-7 justify-center lg:mt-5 lg:justify-start">

      <Counter name={'projects'} count={countData?.totalProjects}/>
    
      <Line />

      <Counter name={'Membars'} count={countData?.totalMembars}/>
      
      <Line />

      <Counter name={'Clients'} count={countData?.totalClients}/>
      
    </div>
  );
}


function Line() {
  return (
    <div className=" border-[0.5px] border-dashed border-muted text"></div>
  );
}
