import { useEffect, useState } from "react";
import JobCard from "../JobCard/JobCard";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl font-extrabold manrope">Featured Jobs:{jobs.length}</h2>
        <p className="font-medium mt-4 manrope">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-2 gap-4">
            {
                jobs.map(job => <JobCard key={job.id} job={job}></JobCard>)
            }
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
