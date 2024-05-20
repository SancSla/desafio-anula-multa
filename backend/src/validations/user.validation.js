import * as yup from "yup";

export const userValidation = yup.object({
    titulo: yup.string().required(),
    descricao: yup.string().required(),
});