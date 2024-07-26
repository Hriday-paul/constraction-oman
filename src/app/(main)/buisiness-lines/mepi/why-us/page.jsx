import { RiUserShared2Fill } from "react-icons/ri";
import { SiDwavesystems } from "react-icons/si";
import { GrUserWorker } from "react-icons/gr";

const whyUs =
{
    customer_satisfiction: ['End to end design, engineering & construction competency', 'Strong project management abilities', 'Value engineering capabilities', 'Competent in risk management', 'Proven track record of customer satisfaction for the last 12 years'],
    bestInClass: ['ISO 9001, 14001 & OHSAS 18001 certified', 'ERP based Material Management, Service delivery system', 'Registered with DCRP, PAEW, PEIE, JSRS'],
    specilizedWork: ['Multi-cultural, highly motivated, young workforce of 3000+ people', 'In house Qualified Engineering and Design team']
}


export const metadata = {
    title: 'Nanco | business-lines | engineering & construction | why us',
    description: 'Why choose nanco construction services. High customer retention score exceeding 95%. Most Preferred IFM operator for Royal Properties and Iconic projects. Strategic alignment with our customers’ facility objective. Established processes (i.e. root cause analysis and reliability centered maintenance) Continuous improvement of processes leading to reduced cost. Continuous performance measurement to ensure quality value and customer satisfaction. ISO 9001, 14001 & OHSAS 18001 certified. ERP based Material Management, Service delivery system. Multi cultural, highly motivated, young  workforce of 3500+ people. Omanisation levels of 18%.',
  }


export default function page() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 gap-x-0 lg:gap-5 pt-5">
            <div className="relative p-5">
                <div className="p-10 lg:p-7 xl:p-10 border-dashed border border-slate-400">
                    <h3 className="text-lg font-bold text-black uppercase">IMPECCABLE PROJECT DELIVERY</h3>
                    <ul className="my-5">
                        {
                            whyUs.customer_satisfiction.map((text, indx) => {
                                return <li key={indx + text} className="flex flex-row gap-x-1 my-1.5">
                                    <div className="border-2 border-secondary rounded-full h-2 w-2 mt-1"></div>
                                    <p className="text-base text-gray-800 font-normal">{text}</p>
                                </li>
                            })
                        }

                    </ul>
                </div>
                <span className="p-7 lg:p-5 xl:p-7 absolute -top-5 lg:-top-3 xl:-top-5 -left-5 lg:-left-3 xl:-left-7 rounded-full shadow-lg bg-white">
                    <RiUserShared2Fill className="text-3xl lg:text-2xl xl:text-3xl" />
                </span>
            </div>
            <div className="relative p-5">
                <div className="p-10 lg:p-7 xl:p-10 border-dashed border border-slate-400">
                    <h3 className="text-lg font-bold text-black uppercase">BEST IN CLASS QUALITY & SYSTEMS</h3>
                    <ul className="my-5">
                        {
                            whyUs.bestInClass.map((text, indx) => {
                                return <li key={indx + text} className="flex flex-row gap-x-1 my-1.5">
                                    <span className="border-2 border-secondary rounded-full h-2 w-2 mt-1"></span>
                                    <p className="text-base text-gray-800 font-normal">{text}</p>
                                </li>
                            })
                        }

                    </ul>
                </div>
                <span className="p-7 lg:p-5 xl:p-7 absolute -top-5 lg:-top-3 xl:-top-5 -left-5 lg:-left-3 xl:-left-5 rounded-full shadow-lg bg-white">
                    <SiDwavesystems className="text-3xl lg:text-2xl xl:text-3xl" />
                </span>
            </div>
            <div className="relative p-5">
                <div className="p-10 lg:p-7 xl:p-10 border-dashed border border-slate-400">
                    <h3 className="text-lg font-bold text-black uppercase">SPECIALIZED WORKFORCE</h3>
                    <ul className="my-5">
                        {
                            whyUs.specilizedWork.map((text, indx) => {
                                return <li key={indx + text} className="flex flex-row gap-x-1 my-1.5">
                                    <span className="border-2 border-secondary rounded-full h-2 w-2 mt-1"></span>
                                    <p className="text-base text-gray-800 font-normal">{text}</p>
                                </li>
                            })
                        }

                    </ul>
                </div>
                <span className="p-7 lg:p-5 xl:p-7 absolute -top-5 lg:-top-3 xl:-top-5 -left-5 lg:-left-3 xl:-left-7 rounded-full shadow-lg bg-white">
                    <GrUserWorker className="text-3xl lg:text-2xl xl:text-3xl" />
                </span>
            </div>
        </div>
    )
}
