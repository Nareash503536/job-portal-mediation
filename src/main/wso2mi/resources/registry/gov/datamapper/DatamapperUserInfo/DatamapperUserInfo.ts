import * as dmUtils from "./dm-utils";

/*
* title : "user",
* inputType : "XML",
*/
interface User {
id: number
email: string
first_name: string
last_name: string
date_of_birth: string
address: string
role: string
status: string
summary: string
skills: string
education: string
experience: string
}

/*
* title : "root",
* outputType : "JSON",
*/
interface Root {
email: string
first_name: string
last_name: string
date_of_birth: string
address: string
status: string
summary: string
skills: string
education: string
experience: string
}



/**
 * functionName : map_S_user_S_root
 * inputVariable : inputuser
*/
export function mapFunction(input: User): Root {
    return {
        email: input.email,
        first_name: input.first_name,
        last_name: input.last_name,
        date_of_birth: input.date_of_birth,
        address: input.address,
        status: input.status,
        summary: input.summary,
        skills: input.skills,
        education: input.education,
        experience: input.experience,
    };
}

