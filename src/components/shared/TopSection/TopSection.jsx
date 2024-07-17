import BreadCrumb from "../BreadCrumb/BreadCrumb";

const breadData = {
  pageName: "Contact Us",
  title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  path: "Home 1 / Contact Us",
};

export default function TopSection() {
  return (
    <div
      style={{
        backgroundImage: 'url("/src/asset/breadcrumb/breadcrumb.jpg")',
      }}
      className="bg-center flex flex-col gap-20 pb-9"
    >
      
      <BreadCrumb
        pageName={breadData.pageName}
        title={breadData.title}
        path={breadData.path}
      />
    </div>
  );
}
