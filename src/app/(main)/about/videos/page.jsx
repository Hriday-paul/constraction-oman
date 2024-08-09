import TopSection from "@/components/Shared/TopSection/TopSection";
import UseGetVideos from "@/Hooks/UseGetVideos";


const breadCrumbData = [{ name: 'home', link: '/' }, { name: " / videos", rout: "/" }];

export const metadata = {
    title: 'Nancco | videos',
    description: 'Nancco all videos',
}

const VideoPage = async () => {
    const videos = await UseGetVideos();
  
    return (
        <div>
            <TopSection title={"Videos"} routs={breadCrumbData} />

            <div className="container my-7 flex flex-col gap-y-16">
                {/** video card */}
                {videos.map((video) => {
                    return <Video key={video?.id} video={video} />;
                })}
            </div>

        </div>
    )
}

export default VideoPage;


function Video({ video }) {
    
    return (
        <div className="flex flex-col lg:flex-row gap-8 group">
            {/**video */}
            <div className="w-full">
                <iframe
                    className="w-full aspect-video"
                    src={video?.src}
                    title={video?.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
            {/** description */}
            <div className="w-full md:group-even:-order-1">
                <h2 className="text-3xl text-secondary mb-5">{video?.title}</h2>
                <p className="text-gray-800 text-justify">{video?.details}</p>
            </div>
        </div>
    );
}