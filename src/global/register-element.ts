import 'element-plus/dist/index.css'
import {
  ElCard,
  ElRow,
  ElCol,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElButton,
  ElMenu,
  ElMenuItem
} from 'element-plus'
import { App } from 'vue'

const components = [
  ElCard,
  ElRow,
  ElCol,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElButton,
  ElMenu,
  ElMenuItem
]

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
