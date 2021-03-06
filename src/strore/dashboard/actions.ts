import { IApp } from './types'

export const dashboardActions = {
  addAppAC: (app: IApp) => {
    return { type: 'ADD-APP', app } as const
  },

  setAppsAC: (apps: Array<IApp>) => {
    return { type: 'SET-APPS', apps } as const
  },

  openEditorAC: () => {
    return { type: 'OPEN-EDITOR', open: true } as const
  },
  closeEditorAC: () => {
    return { type: 'CLOSE-EDITOR', open: false } as const
  },
  setCurrentEditApp: (app: IApp) => {
    return { type: 'EDIT-APP', app } as const
  },

  setKeysAC: (keys: Array<string>) => {
    return { type: 'SET-KEYS', keys } as const
  },
  setisEditAppMode: (editMode: boolean) => {
    return { type: 'SET-IS-EDIT-APP-MODE', editMode } as const
  },
  editAppAC: (app: IApp) => {
    return { type: 'SET-NEW-APP-VALUE', app } as const
  },
}
