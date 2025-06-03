import * as dmUtils from "./dm-utils";

/*
* title : "applications",
* inputType : "XML",
*/
interface Applications {
    application: {
        id: number
        job_id: number
        job_title: string
        company: string
        status: string
    }[]
}

/*
* title : "root",
* outputType : "JSON",
*/
interface Root {
    application: {
        id: string
        job_id: string
        job_title: string
        company: string
        status: string
    }[]
}



/**
 * functionName : map_S_applications_S_root
 * inputVariable : inputapplications
*/
export function mapFunction(input: Applications): Root {
    return {
        application: input.application
            .map((applicationItem) => {
                return {
                    id: String(applicationItem.id),
                    job_id: String(applicationItem.job_id),
                    job_title: applicationItem.job_title,
                    company: applicationItem.company,
                    status: applicationItem.status
                };
            })
    };
}

