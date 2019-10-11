
export class Permissao {
    permissao: TipoPermissao
}

export enum TipoPermissao {
    ROLE_USER = 'ROLE_USER',
    ROLE_ADMIN = 'ROLE_ADMIN',
    ROLE_CREATOR = 'ROLE_CREATOR'
}