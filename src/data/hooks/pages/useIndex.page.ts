import { useState, useMemo } from 'react';
import { UserShortInterface } from 'data/@types/UserInterface';
import { ValidationService } from 'data/services/ValidationServices';
import { ApiService } from 'data/services/ApiServices';

export default function useIndex() {
    const [cep, setCep] = useState(''),
        cepValido = useMemo(() => {
            return ValidationService.cep(cep)
        }, [cep]),
        [erro, setErro] = useState(''),
        [buscaFeita, SetBuscaFeita] = useState(false),
        [carregando, setCarregando] = useState(false),
        [diaristas, setDiristas] = useState([] as UserShortInterface[]),
        [diaristasRestantes, setDiristasRestantes] = useState(0);

    async function buscarProfissionais(cep: string) {
        SetBuscaFeita(false);
        setCarregando(true);
        setErro('');

        try {
            const { data } = await ApiService.get<{
                diaristas: UserShortInterface[],
                quantidade_diaristas: number
            }>(`/api/diaristas-cidade?cep=${cep.replace(/\D/g, '')}`);
            setDiristas(data.diaristas);
            setDiristasRestantes(data.quantidade_diaristas)
            SetBuscaFeita(true);
            setCarregando(false);
        } catch (error) {
            setErro('CEP não encontrado');
            setCarregando(false);
        }

    }


    return {
        cep,
        setCep,
        cepValido,
        buscarProfissionais,
        erro,
        diaristas,
        buscaFeita,
        carregando,
        diaristasRestantes
    }
}