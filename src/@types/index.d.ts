declare module '*.jpeg'
declare module '*.png'
declare module '*.jpg'

declare namespace I {
  interface CurrentUser {
    name: string
    email: string
    avatarImg?: string
    statusMessage?: string
  }

  interface Message {
    messageId: string
    author: string
    content: string
    unReaded: boolean
    createdAt: Date
  }

  interface Chat {
    chatId: string
    groupTitle: string
    users: string[]
    messages: Message[]
  }
}
