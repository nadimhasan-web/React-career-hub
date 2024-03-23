import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl font-extrabold manrope">
          Featured Jobs
        </h2>
        <p className="font-medium mt-4 manrope text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-2 gap-4 my-8">
          {jobs.slice(0, dataLength).map((job) =><JobCard key={job.id} job={job}></JobCard>)}
        </div>
        
        <div  className={dataLength===jobs.length && 'hidden'}>
          <button onClick={()=> setDataLength(jobs.length)} className="font-extrabold text-lg manrope text-white bg-gradient-to-r from-[#7E90FE] to-[#9774FF] px-6 py-4 rounded-lg mb-20">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
