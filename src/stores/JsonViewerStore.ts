import create from 'zustand'
import createContext from 'zustand/context'
import { combine } from 'zustand/middleware'

export const DEFAULT_INDENT_WIDTH = 4

// todo
export const createJsonViewerStore = () => create(combine({
  src: {},
  indentWidth: DEFAULT_INDENT_WIDTH
}, () => ({
  get: () => {},
  set: () => {}
})))
export type JsonViewerStore = ReturnType<typeof createJsonViewerStore>

export const {
  useStore: useJsonViewerStore,
  useStoreApi: useJsonViewerStoreApi,
  Provider: JsonViewerProvider
} = createContext<JsonViewerStore>()
