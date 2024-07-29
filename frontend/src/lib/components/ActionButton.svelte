<script>
  import { MousePointerClick } from "lucide-svelte";

  export let disabled = false;
  export let onClick;
  export let text;
</script>

<button
  class={!disabled
    ? "flex flex-row text-9xl font-cursive drop-shadow-md hover:drop-shadow-2xl active:drop-shadow-md active:text-[#609172] text-[#3c5f48] hover:text-[#487056]"
    : "text-9xl font-cursive drop-shadow-md text-[#636363]"}
  on:click={onClick}
>
 {text}
  {#if !disabled}
    <MousePointerClick size={64} />
  {/if}
</button>

<style lang="postcss"></style>
