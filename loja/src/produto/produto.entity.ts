import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity({ name: 'produtos'})
export class ProdutoEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'titulo', length: 100, nullable: false})
    titulo: string;
    

    @Column({ name: 'descricao', length: 100, nullable: false})
    descricao: string;
    

    @Column({ name: 'valor', nullable: false})
    valor: number;
    

    @Column({ name: 'ativo', nullable: false})
    ativo: boolean;

    @CreateDateColumn({ name: 'created_at'})
    createdAt: string;
    
    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: string;

    @DeleteDateColumn({ name: 'delete_at'})
    deletedAt: string;

}