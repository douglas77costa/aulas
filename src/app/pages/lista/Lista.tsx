import React, {useCallback, useState} from "react";

interface ITarefa {
    id: number;
    title: string;
    isCompleted: boolean;
}

export const Lista = () => {

    const [lista, setLista] = useState<ITarefa[]>([]);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;

            e.currentTarget.value = '';

            setLista((oldLista) => {
                if (oldLista.some((listItem) => listItem.title === value)) return oldLista;
                return [
                    ...oldLista, {
                        id: oldLista.length,
                        title: value,
                        isCompleted: false
                    }];
            });
        }
    }, []);

    return (
        <div>
            <p>Lista</p>

            <input
                onKeyDown={handleInputKeyDown}
            />

            <p>{lista.filter((listItem) => listItem.isCompleted).length}</p>

            <ul>
                {lista.map((listItem) => {
                    return <li key={listItem.id}>
                        <input
                            type="checkbox"
                            checked={listItem.isCompleted}
                            onChange={() => {
                                setLista(oldList => {
                                    return oldList.map(oldListItem => {
                                        const newIsSelect = oldListItem.title === listItem.title
                                            ? !oldListItem.isCompleted
                                            : oldListItem.isCompleted;
                                        return {
                                            ...oldListItem,
                                            isCompleted: newIsSelect
                                        }
                                    })
                                })
                            }}
                        />
                        {listItem.title}
                    </li>;
                })}
            </ul>
        </div>
    );
}
