<script lang="ts" setup>
import { Toaster } from '@/components/ui/sonner'
import { ModalsContainer } from 'vue-final-modal'
import { RouterView } from 'vue-router'
</script>

<template>
  <Toaster />

  <RouterView />

  <ModalsContainer />
</template>
