import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common'
import { CreateUserDTO } from './dto/create-user.dto'
import { UpdatePutUserDTO } from './dto/update-put-user.dto'
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto'

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body: CreateUserDTO) {
    return body
  }

  @Get()
  async list() {
    return {
      users: [],
    }
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id) {
    return {
      user: {},
      id,
    }
  }

  @Put(':id')
  async update(@Body() body: UpdatePutUserDTO, @Param('id', ParseIntPipe) id) {
    return {
      method: 'PUT',
      body,
      id,
    }
  }

  @Patch(':id')
  async updatePartial(
    @Body() body: UpdatePatchUserDTO,
    @Param('id', ParseIntPipe) id,
  ) {
    return {
      method: 'PATCH',
      body,
      id,
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
    return {
      id,
    }
  }
}
