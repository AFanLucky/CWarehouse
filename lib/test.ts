'use server'

import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

// 用户相关操作
export async function createUser(data: { email: string; name?: string; password: string }) {
  try {
    return await prisma.user.create({
      data,
    })
  } catch (error) {
    console.error('创建用户失败:', error)
    throw error
  }
}

export async function getUsers(options?: {
  skip?: number
  take?: number
  includeComponents?: boolean
}) {
  try {
    return await prisma.user.findMany({
      skip: options?.skip,
      take: options?.take,
      include: {
        components: options?.includeComponents,
      },
    })
  } catch (error) {
    console.error('获取用户列表失败:', error)
    throw error
  }
}

// 组件相关操作
export async function createComponent(data: {
  title: string
  description?: string
  content: string
  preview?: string
  authorId: number
  typeId: number
  tags?: string
  language?: string
  platforms?: string
}) {
  try {
    return await prisma.component.create({
      data: {
        ...data,
        published: false,
      },
    })
  } catch (error) {
    console.error('创建组件失败:', error)
    throw error
  }
}

export async function updateComponent(
  id: number,
  data: {
    title?: string
    description?: string
    content?: string
    preview?: string
    published?: boolean
    tags?: string
    version?: string
    language?: string
    platforms?: string
  },
) {
  try {
    return await prisma.component.update({
      where: { id },
      data,
    })
  } catch (error) {
    console.error('更新组件失败:', error)
    throw error
  }
}

export async function deleteComponent(id: number) {
  try {
    return await prisma.component.delete({
      where: { id },
    })
  } catch (error) {
    console.error('删除组件失败:', error)
    throw error
  }
}

export async function getComponents(options?: {
  skip?: number
  take?: number
  typeId?: number
  authorId?: number
  published?: boolean
  language?: string
  platforms?: string
  searchText?: string
}) {
  try {
    const where: Prisma.ComponentWhereInput = {}

    if (options?.typeId) where.typeId = options.typeId
    if (options?.authorId) where.authorId = options.authorId
    if (options?.published !== undefined) where.published = options.published
    if (options?.language) where.language = options.language
    if (options?.platforms) where.platforms = { contains: options.platforms }
    if (options?.searchText) {
      where.OR = [
        { title: { contains: options.searchText } },
        { description: { contains: options.searchText } },
        { tags: { contains: options.searchText } },
      ]
    }

    return await prisma.component.findMany({
      where,
      skip: options?.skip,
      take: options?.take,
      include: {
        author: true,
        type: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
  } catch (error) {
    console.error('获取组件列表失败:', error)
    throw error
  }
}

// 组件类型相关操作
export async function createComponentType(data: { name: string; description?: string }) {
  try {
    return await prisma.componentType.create({
      data,
    })
  } catch (error) {
    console.error('创建组件类型失败:', error)
    throw error
  }
}

export async function getComponentTypes() {
  try {
    return await prisma.componentType.findMany({
      include: {
        _count: {
          select: {
            components: true,
          },
        },
      },
    })
  } catch (error) {
    console.error('获取组件类型列表失败:', error)
    throw error
  }
}

// 统计相关操作
export async function incrementComponentDownloads(id: number) {
  try {
    return await prisma.component.update({
      where: { id },
      data: {
        downloads: {
          increment: 1,
        },
      },
    })
  } catch (error) {
    console.error('更新下载次数失败:', error)
    throw error
  }
}

export async function toggleComponentLike(id: number, increment: boolean) {
  try {
    return await prisma.component.update({
      where: { id },
      data: {
        likes: {
          [increment ? 'increment' : 'decrement']: 1,
        },
      },
    })
  } catch (error) {
    console.error('更新点赞数失败:', error)
    throw error
  }
}
