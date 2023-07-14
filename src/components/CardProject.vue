<script>
export default {
  props: {
    dataCard: Object,
  },
};
</script>

<template>
  <div class="col">
    <div class="content">
      <div class="card_project col-3">
        <img :src="dataCard.image" :alt="dataCard.image" />
        <div class="title">{{ dataCard.title }}</div>
        <div class="author">{{ dataCard.author }}</div>
        <div class="creation_date">{{ dataCard.creation_date }}</div>
        <div class="last_update">{{ dataCard.last_update }}</div>
        <div v-if="dataCard.collaborators" class="collaborators">
          {{ dataCard.collaborators }}
        </div>
        <div v-if="dataCard.description" class="description">
          {{ dataCard.description }}
        </div>
        <div class="link_github">{{ dataCard.link_github }}</div>
        <div class="type">{{ dataCard.type.name }}</div>
        <div class="languages">
          <span v-for="languages in dataCard.languages">
            {{ languages.name }},
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
