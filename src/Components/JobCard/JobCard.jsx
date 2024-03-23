

const JobCard = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="border border-[#E8E8E8] p-6 mt-8 text-start">
            <img src={logo} alt="" />
            <h2>{job_title}</h2>
            <p>{company_name}</p>
            <div className="flex gap-4">
                <button className="text-[#8092FF] border border-[#8092FF] rounded-lg px-4 py-1 font-bold">{remote_or_onsite}</button>
                <button className="text-[#8092FF] border border-[#8092FF] rounded-lg px-4 py-1 font-bold">{job_type}</button>
                
            </div>
        </div>
    );
};

export default JobCard;