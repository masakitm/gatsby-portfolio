// オブジェクトの複製
export const clone = <T extends Object>(args: T): T => JSON.parse(JSON.stringify(args))