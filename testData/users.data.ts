export interface UsersData {
  [key: string]:
    | {
        client_id: string
        client_secret: string
      }
    | any
}

export const usersData: UsersData = {
  default: {
    client_id: "eb72536db0330bfe24df791249c99a13",
    client_secret: "562cfc93886e49d7d15037b8a4f96f8c3317c6fb",
  },
}