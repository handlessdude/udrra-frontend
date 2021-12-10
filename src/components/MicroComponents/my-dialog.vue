<template>
<!--  ...-->
  <div class="dialog" v-if="show">
    <div @click.stop class="dialog__content">
      <my-button
          style="margin-left:auto;margin-bottom: 15px;"
          @click="hideDialog"
      >Закрыть
        <i class="fas fa-times"></i>
      </my-button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-dialog",
  props:{
    show:{
      type: Boolean,
      default: false
    }
  },
  methods:{
    hideDialog(){
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
.dialog{
  top:0;
  bottom: 0;
  right: 0;
  left: 0; /*so the dialog window reaches borders of the view screen*/
  background: rgba(0,0,0,0.5);
  position: fixed;
  display: flex;
}
.dialog__content{
  margin: auto;/*to center block*/
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
</style>