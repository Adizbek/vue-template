<script lang="ts" setup>
import { Button } from '@/components/ui/button'

import { toast } from 'vue-sonner'
</script>

<template>
  <main class="text-red-500 font-bold">Welcome to project</main>

  <Button>Hello</Button>

  <Button
    variant="outline" @click="() => {
      toast('Event has been created', {
        description: 'Sunday, December 03, 2023 at 9:00 AM',
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      })
    }"
  >
    Add to calendar
  </Button>

</template>
