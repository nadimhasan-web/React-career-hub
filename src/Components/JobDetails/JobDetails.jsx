import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4 my-20">
        <div className="col-span-2 space-y-4">
          <h2 className="font-extrabold manrope text-[#1A1919]">
            Job Descriptin:
            <span className="font-medium manrope text-[#757575]">
              {job.job_description}
            </span>
          </h2>
          <h2 className="font-extrabold manrope text-[#1A1919]">
            Job Responsibility:
            <span className="font-medium manrope text-[#757575]">
              {job.job_responsibility}
            </span>
          </h2>
          <p className="font-extrabold manrope text-[#1A1919]">
            Educational Requirements:
            <span className="font-medium manrope text-[#757575]">
              {job.educational_requirements}
            </span>
          </p>
          <p className="font-extrabold manrope text-[#1A1919]">
            Experiences:
            <span className="font-medium manrope text-[#757575]">
              {job.experiences}
            </span>
          </p>
        </div>
        <div className="col-span-1">
          <div className=" bg-gradient-to-r from-[rgba(126,143,254,0.10)] to-[rgba(126,143,254,0.10)] rounded-lg p-4">
            <h2 className="font-extrabold text-lg text-[#1A1919] manrope pb-4">
              Job Details
            </h2>
            <hr />
            <div className="mt-4 space-y-2">
              <p className="flex items-center font-bold text-lg text-[#474747]">
                <AiOutlineDollar className="text-[#7E90FE] mr-1"></AiOutlineDollar>
                Salary:
                <span className="font-medium text-[#757575] ml-1">
                  {job.salary}(per month)
                </span>
              </p>
              <p className="flex items-center font-bold text-lg text-[#474747]">
                <FaRegCalendarAlt className="text-[#7E90FE] mr-1"></FaRegCalendarAlt>
                <span>
                Job Title:
                <span className="font-medium text-[#757575] ml-1">
                  {job.job_title}
                </span>
                </span>
              </p>
            </div>
            <h2 className="font-extrabold text-lg text-[#1A1919] manrope py-4">
              Contact Information
            </h2>
            <hr />
            <div className="py-4">
              <p className="flex items-center font-bold text-lg text-[#474747]">
                <LuPhone className="text-[#7E90FE] mr-1"></LuPhone>Phone:
                <span className="font-medium text-[#757575] ml-1">
                  {job.contact_information.phone}
                </span>
              </p>
              <p className="flex items-center font-bold text-lg text-[#474747]">
                <MdOutlineEmail className="text-[#7E90FE] mr-1"></MdOutlineEmail>
                Email:
                <span className="font-medium text-[#757575] ml-1">
                  {job.contact_information.email}
                </span>
              </p>
              <p className="flex items-center font-bold text-lg text-[#474747]">
                <MdOutlineLocationOn className="text-[#7E90FE] mr-1"></MdOutlineLocationOn>
                <span>
                Address:
                <span className="font-medium text-[#757575] ml-1">
                  {job.contact_information.address}
                </span>
                </span>
              </p>
            </div>
          </div>
          <button className="font-extrabold text-lg manrope text-white bg-gradient-to-r from-[#7E90FE] to-[#9774FF] w-full py-4 mt-4 rounded-lg">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
