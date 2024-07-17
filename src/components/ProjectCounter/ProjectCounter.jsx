export default function ProjectCouter() {
  return (
    <div className="container flex  gap-7 justify-center mt-5 lg:justify-start">
      <Display>20+ Projects</Display>
      <Line />
      <Display>50+ Members</Display>
      <Line />
      <Display>120+ Clients</Display>
    </div>
  );
}

function Display({ children = "give text" }) {
  const [count, name] = children.split(" ");

  return (
    <div className="text-center uppercase">
      <span className="text-secondary text-4xl">{count}</span>
      <p className="text-muted text-3xl">{name}</p>
    </div>
  );
}

function Line() {
  return (
    <div className=" border-[0.5px] border-dashed border-muted text"></div>
  );
}
