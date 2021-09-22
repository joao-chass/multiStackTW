export const ValidationService = {
    cep(cep = ''): boolean {
        return cep.replace(/\D/g, '').length === 8;//remover tudo que não for numero
    }
}