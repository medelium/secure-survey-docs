---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/tada5hi.png',
    name: 'Peter Placzek',
    links: [
      { icon: 'github', link: 'https://github.com/tada5hi' },
      { icon: 'twitter', link: 'https://twitter.com/tada5hi' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/peter-placzek-047a74210/' },
    ]
  },
  {
    avatar: 'https://www.github.com/migraf.png',
    name: 'Michael Graf',
    links: [
      { icon: 'github', link: 'https://github.com/migraf' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/michael-m-graf/' },
    ]
  },
  {
    avatar: 'https://www.github.com/SirHerr.png',
    name: 'Marius de Arruda Botelho Herr',
    links: [
      { icon: 'github', link: 'https://github.com/SirHerr' },
      { icon: 'linkedin', link: 'https://de.linkedin.com/in/marius-de-arruda-botelho-herr-60b89b18b' },
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
