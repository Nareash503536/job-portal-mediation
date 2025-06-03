import * as dmUtils from "./dm-utils";

/*
* title : "users",
* inputType : "XML",
*/
interface Users {
user: {
id: number
email: string
first_name: string
last_name: string
date_of_birth: string
address: string
role: string
status: string
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
user: {
id: number
email: string
first_name: string
last_name: string
date_of_birth: string
address: string
role: string
status: string
profile: {
summary: string
skills: string
education: string
experience: string
}
}[]
}



/**
 * functionName : map_S_users_S_root
 * inputVariable : inputusers
*/
export function mapFunction(input: Users): Root {
    return {
        user: input.user.map(u => {
            return {
                id: u.id,
                email: u.email,
                first_name: u.first_name,
                last_name: u.last_name,
                date_of_birth: u.date_of_birth,
                address: u.address,
                role: u.role,
                status: u.status,
                profile: {
                    summary: u.profile.summary,
                    skills: u.profile.skills,
                    education: u.profile.education,
                    experience: u.profile.experience
                }
            };
        })
    };
}

