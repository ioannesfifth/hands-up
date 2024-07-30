<script>
  import { MousePointerClick } from "lucide-svelte";

  export let disabled = false;
  export let onClick = () => {};
  export let text;
</script>

<!-- TODO: refactor tailwind class for counting down to not rely on disabled prop to trigger -->
<!-- TODO: setup actual isMobile checks -->
<div class="flex">
  <button
  class={!disabled
    ? "whitespace-pre flex flex-row text-6xl md:text-9xl font-cursive drop-shadow-md hover:drop-shadow-2xl active:drop-shadow-md active:text-[#609172] text-[#3c5f48] hover:text-[#487056]"
    : "whitespace-pre text-6xl md:text-9xl font-cursive drop-shadow-md text-[#636363]"}
  on:click={onClick}
>
 {text}
  {#if !disabled}
    <div class="flex flex-col h-4/5 justify-start -left-4 md:-left-8 relative items-start">
      <div class="hidden md:block">
        <MousePointerClick size={128} />
      </div>
      <div class="md:hidden">
        <MousePointerClick size={50} />
      </div>
    </div>
  {/if}
</button>
</div>


<style lang="postcss"></style>
