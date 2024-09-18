import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'produto_imagens'})
export class ProdutoImagens {

    @PrimaryGeneratedColumn('uuid')
    id: number;
    
    @Column({name: 'url', length: 100, nullable: false})
    url: string;

    @Column({name: 'descricao', length: 100, nullable: false})
    descricao: string;

    
}