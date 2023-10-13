import { CreatePerfilDto } from './dtos/createPerfil.dto';
import { ConflictException, Injectable, NotFoundException, Param, UnauthorizedException } from '@nestjs/common';
import { PerfilEntity } from './entities/perfil.entity';
import { hash } from 'bcrypt'
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CacheService } from 'src/cache/cache.service';
import { UserService } from 'src/user/user.service';
import { ReturnPerfilDto } from './dtos/returnPerfil.dto';
import { PerfilIdService } from 'src/perfil-id/perfil-id.service';

@Injectable()
export class PerfilService {
    constructor(
        @InjectRepository(PerfilEntity)
        private readonly perfilRepository: Repository<PerfilEntity>,
        private readonly userService: UserService,
        private readonly cacheRepository: CacheService,
        private readonly perfilIdService: PerfilIdService,
    ) { }

    // async gettAllPerfilByUserId(perUsuId: number): Promise<PerfilEntity[]> {
    //     return this.cacheRepository.getCache<PerfilEntity[]>(`${perUsuId}`,
    //         () => this.perfilRepository.find({
    //             where: {
    //                 perUsuId,
    //             }
    //         }),
    //     )
    // }

    async gettAllPerfilByUserId(perUsuId: number): Promise<PerfilEntity[]> {
        return this.perfilRepository.find({
                            where: {
                    perUsuId,
                }
        }).catch(()=> undefined)
    }

    async createPerfil(createPerfilDto: CreatePerfilDto, perUsuId: number): Promise<PerfilEntity> {
        const user = await this.userService.findUserById(perUsuId)
        return this.perfilRepository.save({
            ...createPerfilDto,
            perUsuId,
        })
    }

    async selectPerfil(perId: number, perUsuId: number): Promise<PerfilEntity> {
        const perfil = await this.perfilRepository.findOne({
          where: {
            perId,
            perUsuId,
          },
        });
        if (!perfil) {
          throw new NotFoundException(`Perfil id: ${perId} not found`);
        }
        
        this.perfilIdService.setProfileId(perfil.perId);
        // console.log('Id Pego: ', this.perfilIdService.getProfileId());
        // console.log(
        //   'Id: ',
        //   perfil.perId,
        //   'Nome: ',
        //   perfil.perNome,
        //   'Imagem: ',
        //   perfil.perImagem,
        //   'Usuario Id: ',
        //   perfil.perUsuId,
        // );
        return perfil;
      }

    async deletePerfilByID(perId: number, perUsuId: number): Promise<DeleteResult>{

      const deletePerfil = await this.selectPerfil(perId, perUsuId)

      return this.perfilRepository.delete(deletePerfil);

    }

}


