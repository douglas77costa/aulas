import {Api} from "../ApiConfig";
import {ApiException} from "../ApiException";

interface ITarefa {
    id: number;
    title: string;
    isCompleted: boolean;
}

const getAll = async (): Promise<ITarefa[] | ApiException> => {
    try {
        const {data} = await Api().get('/tarefas');
        return data;
    } catch (e: any) {
        return new ApiException(e.message || 'Erro ao buscar os registros');
    }
};

const getById = async (id: string): Promise<ITarefa | ApiException> => {
    try {
        const {data} = await Api().get(`/tarefas/${id}`);
        return data;
    } catch (e: any) {
        return new ApiException(e.message || 'Erro ao buscar o registro');
    }
};

const create = async (dataToCreate: Omit<ITarefa, 'id'>): Promise<ITarefa | ApiException> => {
    try {
        const {data} = await Api().post<any>(`/tarefas`, dataToCreate);
        return data;
    } catch (e: any) {
        return new ApiException(e.message || 'Erro ao consultar a API');
    }
};

const updateById = async (id: string, dataToUpdate: ITarefa): Promise<ITarefa | ApiException> => {
    try {
        const {data} = await Api().put<any>(`/tarefas/${id}`, dataToUpdate);
        return data;
    } catch (e: any) {
        return new ApiException(e.message || 'Erro ao atualizar o registro');
    }
};

const deleteById = async (id: string): Promise<undefined | ApiException> => {
    try {
        await Api().delete(`/tarefas/${id}`);
        return undefined;
    } catch (e: any) {
        return new ApiException(e.message || 'Erro ao buscar o registro');
    }
};

export const TarefasService = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}
