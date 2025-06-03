import * as dmUtils from "./dm-utils";

/*
* title : "applications",
* inputType : "XML",
*/
interface Applications {
    application: {
        id: number
        user_id: number
        status: string
        email: string
        first_name: string
        last_name: string
        date_of_birth: string
        address: string
        profile: {
            summary: string
            skills: string
            education: string
            experience: string
        }
    }[]
}

/*
* title : "root",
* outputType : "JSON",
*/
interface Root {
applications: {
application: {
status: string
email: string
first_name: string
last_name: string
date_of_birth: string
address: string
profile: {
summary: string
skills: string
education: string
experience: string
}
}[]
}
}



/**
 * functionName : map_S_applications_S_root
 * inputVariable : inputapplications
*/
export function mapFunction(input: Applications): Root {
    return {
        applications: {
            application: input.application.map(app => {
                return {
                    status: app.status,
                    email: app.email,
                    first_name: app.first_name,
                    last_name: app.last_name,
                    date_of_birth: app.date_of_birth,
                    address: app.address,
                    profile: {
                        summary: app.profile.summary,
                        skills: app.profile.skills,
                        education: app.profile.education,
                        experience: app.profile.experience
                    }
                };
            })
        }
    };
}

