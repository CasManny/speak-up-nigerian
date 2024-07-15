import { z } from "zod"

export const formSchema = z.object({
    fullname: z.string({required_error: "Full name is required"}),
    state: z.string({required_error: "State is required"}),
    roleInCountry: z.string({required_error: "Role must be filled"}),
    dateOfBirth: z.date({required_error: 'Date of birth must be provided'}),
    gender: z.string(),
    lga: z.string({required_error: 'Local government area must be filled'})

})