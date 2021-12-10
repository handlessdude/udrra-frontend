<template>
  <form @submit.prevent="submitForm" class="flex-form">
    <label>Название:</label>
    <my-input
        v-focus
        v-model.trim="name"
        type="text"
        placeholder="Введите название..."
    />
    <label>Описание:</label>
    <my-textarea
        v-model.trim="previewText"
        placeholder="Введите описание..."
    ></my-textarea>

  <div class="place-image">
    <file-input v-model="myFileInput" is-image
                placeholder-input-text="Файл не выбран"
                placeholder-button-text="Выбрать обложку..."

    ></file-input>
  </div>
  <div class="my-data">
    <div class="data-name">
    <label>Дата начала</label>
    <datepicker v-model="start"
                :locale="dateLocale"
                inputFormat="dd.MM.yyyy"
                placeholder="Выберите дату..."/>
    </div>
    <div class="data-name">
    <label>Дата окончания</label>
    <datepicker v-model="finish"
                :locale="dateLocale"
                :lowerLimit="start"
                inputFormat="dd.MM.yyyy"
                placeholder="Выберите дату..."/>
    </div>
    </div>

    <div class="my-radios">
      <div>Прохождение: </div>
      <div>
        <span>
        <input type="radio" id="consistent" value="consistent" v-model="mode">
        <label for="consistent">Последовательное</label>
      </span>
        <span>
        <input type="radio" id="free" value="free" v-model="mode">
        <label for="free">Свободное</label>
      </span>
      </div>

    </div>

    <div class="my-checkbox">
      <input type="checkbox" id="checkbox" v-model="published">
      <span>Опубликовать</span>
    </div>

    <my-button
        type="submit"
        style="align-self: flex-end; margin-top: 15px"
    >
      Подтвердить
    </my-button>

  </form>
</template>

<script>
import Datepicker from 'vue3-datepicker'
import { ref, watch } from 'vue'
import { ru } from 'date-fns/locale'
import timestampToDate from '@/helpers/timestampToDate'
import dateToTimestamp from '@/helpers/dateToTimestamp'
import FileInput from 'vue3-simple-file-input'
import FileHandler from '@/api/FileHandler'

export default {
  name: "track-form",
  props: ['submitForm', 'trackData'],
  components: {
    Datepicker,
    FileInput
  },
  setup(props){
    const start = ref(timestampToDate(props.trackData.dateTimeStart.value))
    const finish = ref(timestampToDate(props.trackData.dateTimeFinish.value))
    //const newPreviewPicture = ref(null)
    const myFileInput = ref(null)

    watch(start, newStart => {
      // eslint-disable-next-line vue/no-mutating-props
      props.trackData.dateTimeStart.value = dateToTimestamp(newStart)
    })
    watch(finish, newFinish => {
      // eslint-disable-next-line vue/no-mutating-props
      props.trackData.dateTimeFinish.value = dateToTimestamp(newFinish)
    })

    watch(myFileInput, async newMyFileInput => {
        try {
         /* console.log(newMyFileInput)
          console.log(newMyFileInput.file)*/
          const formData = new FormData()
          formData.append('file', newMyFileInput.file)
          const responsePic = await FileHandler.postPreview(formData)
          // eslint-disable-next-line vue/no-mutating-props
          props.trackData.previewPicture.value = responsePic.data.data.file.url
        } catch (e) {
          console.log(e)
        }

    })

    return {
      name: props.trackData.name,
      previewText: props.trackData.previewText,
      previewPicture: props.trackData.previewPicture,
      published: props.trackData.published,
      dateTimeStart: props.trackData.dateTimeStart,
      dateTimeFinish: props.trackData.dateTimeFinish,
      mode: props.trackData.mode,
      start,
      finish,
      dateLocale: ru,
      myFileInput,
    }
  }
}
</script>

<style scoped>
.flex-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 20px;
}
.flex-form * {
  margin-bottom: 15px;
}
.flex-form label {
  align-self:flex-start;
}
.my-data {
  display: flex;
  flex-direction: row;
}
.data-name {
  margin-right: 10px;
}
.my-radios {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.my-buttons {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.my-buttons span {
  margin-right: 10px;
}
.place-image {
  width: 100%;
}
</style>
