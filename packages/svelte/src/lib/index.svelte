<script lang="ts">
  import type { SimpleIcon } from 'simple-icons'
  export let icon: SimpleIcon
  export let title = icon.title
  export let element: SVGSVGElement = undefined
  export let svgProps: svelte.JSX.SVGProps<SVGSVGElement> = {}
</script>

<svg
  role="img"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  bind:this={element}
  {...svgProps}
>
  {#if title}
    <title>{title}</title>
  {/if}
  <path d={icon.path} />
</svg>
