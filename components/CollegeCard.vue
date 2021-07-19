<template>
<div class="tw-rounded-lg tw-h-2/12 md:tw-h-3/12 tw-w-11/12 lg:tw-w-80 tw-bg-gradient-to-b tw-from-red-400 tw-to-cyan">
    <div class="tw-rounded-lg tw-w-full tw-transform tw-translate-x-3 md:tw-translate-x-8 tw-translate-y-5 md:tw-translate-y-8 tw-bg-white tw-bg-opacity-30 tw-backdrop-filter tw-backdrop-blur-lg">
        <div class="tw-flex tw-flex-row tw-pl-2 tw-pt-2">
            <img class="tw-w-2/12" :src="require('@/static/' + image + '')" alt="Everett Community College">
            <div class="tw-ml-2 tw-flex tw-flex-col tw-content-center">
                <p class="tw tw-font-bold">{{collegeName}}</p>
                <p class="tw-mt-2 tw-text-xs">{{cert}}</p>
            </div>
        </div>
        <div class="tw-my-4 tw-flex tw-flex-row tw-flex-wrap">
            <div v-for="item in tags" :key="item[0]" class="tw-rounded-3xl tw-bg-cyan hover:tw-bg-red-400 tw-border-2 tw-inline-block tw-p-2 tw-text-xs tw-mx-2 tw-my-1 tw-whitespace-nowrap">{{item}}</div>
        </div>
    </div>
</div>

</template>
<script>
export default {
  name: 'CollegeCard',
  props: {
    collegeName: String,
    cert: String,
    image: String,
    tags: Array
  }
};
</script>
    
