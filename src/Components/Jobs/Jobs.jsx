import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import{ getStoredJobApplication } from"../../utility/LocalStorage";

const Jobs = () => {
    const jobs = useLoaderData;
    const [appliedJOb, setApliedJob]= useState([]);
    useEffect(()=>{
        const storedJobId = getStoredJobApplication();
        if(jobs.length > 0){
            // const jobApplied = jobs.filter(job = storedJobId.includes(jobs.id))
            const jobApplied = [];
            for(const id of storedJobId){
                const job = job.find(job => job.id === id);
                if(job){
                    jobApplied.push(job);
                }
            }
        }
        setApliedJob(jobApplied);
        console.log(jobApplied);
    },[])
    return (
        <div>
            <h2>This is applied jobs</h2>
        </div>
    );
};

export default Jobs;