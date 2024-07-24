import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { User } from '@/domain/forum/enterprise/entities/user'
import { User as PrismaUser, Prisma } from '@prisma/client'

export class PrismaUserMapper {
  static toDomain(raw: PrismaUser): User {
    return User.create(
      {
        email: raw.email,
        name: raw.name,
        nickname: raw.nickname,
        picture: raw.picture || "",
        emailVerified: raw.emailVerified,
        givenName: raw.givenName,
        familyName: raw.familyName,
        isAuthUser: raw.isAuthUser,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,        
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPrisma(user: User): Prisma.UserUncheckedCreateInput {
    return {
      id: user.id.toString(),
      email: user.email,
      name: user.name,
      nickname: user.nickname,
      picture: user.picture || "",
      emailVerified: user.emailVerified,
      givenName: user.givenName,
      familyName: user.familyName,
      isAuthUser: user.isAuthUser,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt, 
    }
  }
}