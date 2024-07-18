import BreadCrumb from "./../BreadCrumb/BreadCrumb";

const imageUrl =
  "https://raw.githubusercontent.com/ansanonymo/nanco/tazri/src/asset/breadcrumb/breadcrumb.jpg";

export default function TopSection({title, routs}) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="bg-center flex flex-col bg-no-repeat bg-cover gap-20 h-96 lg:h-[450px] justify-center items-center"
    >
      <BreadCrumb
        pageName={title}
        title={'ttrrtyry'}
        path={routs}
      />
    </div>
  );
}
