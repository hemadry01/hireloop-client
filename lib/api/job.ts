//import { JobRow } from "@/app/dashboard/recruiter/jobs/page";
import type { JobFormData, JobRow } from "@/lib/types/jobs"

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000"

export const getJobs = async(quary =''):Promise<JobRow[]>=>{
    const res = await fetch(`${BASE_URL}/jobs?${quary}`);
    return res.json();
}