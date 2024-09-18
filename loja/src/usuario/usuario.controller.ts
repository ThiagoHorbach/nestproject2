import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { criaUsuarioDTO } from './dto/criaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from './dto/listaUsuario.dto';
import { atualizaUsuarioDTO } from './dto/atualizaUsuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('/usuarios')
export class UsuarioController {
    
    constructor(
        private usuarioRepository: UsuarioRepository,
        private usuarioService: UsuarioService
    ) {}

    @Post()
    async criaUsuario(@Body() dadosDoUsuario:criaUsuarioDTO) {

        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.id = uuid();
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.senha = dadosDoUsuario.senha;
        

        //this.usuarioRepository.salvar(usuarioEntity);
        this.usuarioService.criarUsuario(usuarioEntity);
        return { 
            usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            message: 'Usuário criado com sucesso.' 
        };
    }


    @Get()
    async listaUsuarios() {
        // const usuariosSalvos = await this.usuarioRepository.listar();
        // const usuariosLista = usuariosSalvos.map(
        //     usuario => new ListaUsuarioDTO(
        //         usuario.id,
        //         usuario.nome
        //     )
        // );     
        // return usuariosLista;
    
        const usuariosSalvos = await this.usuarioService.listaUsuarios();
          
        return usuariosSalvos;
    }

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: atualizaUsuarioDTO) {
        //const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados);
        const usuarioAtualizado = await this.usuarioService.atualizaUsuario(id, novosDados);
        
        return {
            usuario: usuarioAtualizado,
            message: 'Usuário atualizado com sucesso'
        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string) {
        //const usuarioRemovido = await this.usuarioRepository.remove(id);
        const usuarioRemovido = await this.usuarioService.deletaUsuario(id);

        return {
            usuario: usuarioRemovido,
            message: 'usuário removido com sucesso'
        }
    }

}