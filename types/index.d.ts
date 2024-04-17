export type VueApp = (app: any) => void
declare global {
  interface Window { [idx: string]: any }
  declare type Recordable<T = any> = Record<string, T>
  interface jsonObj { [idx: string]: string | number | boolean }
}
