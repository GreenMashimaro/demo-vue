import { getShared } from 'aurora-vue-shared'

export function mainVue() {
  return 'vue main' + getShared()
}
