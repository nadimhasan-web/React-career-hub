import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

const JobCard = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="border border-[#E8E8E8] rounded-lg p-6 text-start space-y-3">
      <img src={logo} alt="" />
      <h2 className="font-extrabold text-2xl manrope text-[#474747]">
        {job_title}
      </h2>
      <p className="font-semibold text-lg manrope text-[#757575]">
        {company_name}
      </p>
      <div className="flex gap-4">
        <button className="text-[#8092FF] border border-[#8092FF] rounded-lg px-4 py-1 font-bold">
          {remote_or_onsite}
        </button>
        <button className="text-[#8092FF] border border-[#8092FF] rounded-lg px-4 py-1 font-bold">
          {job_type}
        </button>
      </div>
      <div className="flex gap-4 font-semibold text-lg manrope text-[#757575]">
        <h2 className="flex items-center">
          <IoLocationOutline></IoLocationOutline>
          {location}
        </h2>
        <h2 className="flex items-center">
          <AiOutlineDollar></AiOutlineDollar>
          {salary}
        </h2>
      </div>
      <Link to={`/job/${id}`}>
        <button className="font-extrabold text-lg manrope text-white bg-gradient-to-r from-[#7E90FE] to-[#9774FF] px-4 py-2 rounded-lg mt-4">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
