<template>
  <div class="page-editor editor-wrapper">
      <!-- 左侧导航 -->
    <div class='editor-side-bar'>
        <el-tabs type="border-card">
        <el-tab-pane v-for="(side, index) in sideBar" :key="index">
              <el-tooltip  effect="dark" content="side.name" placement="right-start">
                <i class="side.icon"></i>
              </el-tooltip>
        </el-tab-pane>
        </el-tabs>
    </div>
    <!-- 组件列表&页面管理&模板库 -->
    <div class="editor-side-list">
      <ComponentLibs v-if="activeSideBar === 'componentLibs'"></ComponentLibs>
    </div>
    <!-- 编辑区域 -->
    <div class="editor-main">
      <!-- 顶部的控制工具 -->
      <ControlBar></ControlBar>

    </div>
    <!-- 属性编辑区域 -->
    <div class="el-attr-edit-wrapper">

    </div>
  </div>
</template>
<script>
import ComponentLibs from './componentLibs/index.vue'
import ControlBar from './controlBar.vue'
import EditorPan from './editorPanel/index.vue'

const side = [
  {
    name: '组件列表',
    icon: 'el-icon-menu',
  },
  {
    name: '页面管理',
    icon: 'el-icon-document',
  },
  {
    name: '模板库',
    icon: 'el-icon-suitcase',
  },
];
export default {
  name: 'editor',
  component: {
    ComponentLibs,
    ControlBar,
    EditorPan,
  },
  data() {
    return {
      activeBar: 'componentLibs',
      sideBar: side,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
