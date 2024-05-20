import { prisma } from "../services/prisma";

export const createUser = async (data) => {
    const user = await prisma.tasks.create({
        data,
        select: {
            titulo: true,
            descricao: true,
            createdAt: true,
        },
    });
    return user;
};

export const getAll = async () => {
    const users = await prisma.tasks.findMany({
        select: {
            titulo: true,
            descricao: true,
            createdAt: true,
        },
    });
    return users;
};

export const getById = async (id) => {
    const uder = await prisma.tasks.findUnique({
        where: {
            id,
        },
    });
    return user;
};

export const updateUser = async (id, data) => {
    const user = await prisma.tasks.update({
        where: {
            id,
        },
        data,
        select: {
            titulo: true,
            descricao: true,
            createdAt: true,
        },
    });
    return user;
};

export const deleteUser = async (id) => {
    await prisma.tasks.delete({
        where: {
            id,
        },
    });
    return;
}