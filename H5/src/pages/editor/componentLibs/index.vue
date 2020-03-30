<template>
    <div class="component-libs-wrapper">
        <ul class="component-list">
            <li v-for="(comItem, index) in componentList" :key='index'>
              <div v-if="item.components&&item.components.length">
                <div class="components-lib-item">
    
                </div>
              </div>
            </li>
        </ul>
    </div>
</template>

<script>
import eleConfig from './eleConfig'


export default {
  name: 'componentLib',
  data() {
    return {
      componentList: eleConfig,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
