<script lang="ts">
  import { MousePointerClick } from "lucide-svelte";
  import { fade } from "svelte/transition";

  let timeScale = 1000;
  let intervalScale = 100;
  let countdown = 5 * timeScale;

  let state = "start";
  let timer = 0;

  function handleStartCountdown() {
    state = "countdown";
  }

  function handleEndTimer() {
    timer = (Date.now() - timer) / 1000;
    console.log(timer);
    state = "result";
  }

  function handleRestart() {
    countdown = 5 * timeScale;
    timer = 0;
    state = "start";
  }

  setInterval(() => {
    if (state === "countdown") {
      if (countdown > 0) {
        console.log("timer", countdown);
        countdown -= timeScale / intervalScale;
      } else {
        state = "timer";
        timer = Date.now();
      }
    }
  }, 1000 / intervalScale);

  $: countdownSeconds = Math.floor(countdown / 1000)
    .toString()
    .padStart(2, "0");
  $: countdownCentiseconds = (((countdown / 1000) % 1) * 100)
    .toFixed(0)
    .padStart(2, "0");

  $: timer.toFixed(3);
</script>

<div
  class="flex flex-col h-screen w-screen justify-start items-center bg-gradient-to-b from-orange-50 to-orange-100"
>
  <div class="h-3/5 w-7/12 flex flex-col justify-end">
    <div class="h-1/2 w-full flex flex-col justify-center items-center">
      {#if state === "start"}
        <button
          class="text-9xl font-cursive drop-shadow-md hover:drop-shadow-2xl active:drop-shadow-md active:text-[#609172] text-[#3c5f48] hover:text-[#487056] flex flex-row"
          on:click={handleStartCountdown}
        >
          &nbsp;start! <MousePointerClick size={64} />
        </button>
      {:else if state === "countdown"}
        <button
          class="text-9xl font-cursive drop-shadow-md text-[#636363]"
          disabled
        >
          &nbsp;&nbsp;counting...
        </button>
      {:else if state === "timer"}
        <button
          class="text-9xl font-cursive drop-shadow-md hover:drop-shadow-2xl active:drop-shadow-md active:text-[#609172] text-[#3c5f48] hover:text-[#487056] flex flex-row"
          on:click={handleEndTimer}
        >
          &nbsp;&nbsp;hands up! <MousePointerClick size={64} />
        </button>
      {:else}
        <button
          class="text-9xl font-cursive drop-shadow-md hover:drop-shadow-2xl active:drop-shadow-md active:text-[#609172] text-[#3c5f48] hover:text-[#487056] flex flex-row"
          on:click={handleRestart}
        >
          &nbsp;&nbsp;restart? <MousePointerClick size={64} />
        </button>
      {/if}

      <div class="text-7xl font-mono w-full flex flex-row justify-center">
        {#if state === "result"}
          <div class="flex flex-row items-end">
            <div class="drop-shadow-xl">{timer}</div>
            <div class="text-3xl drop-shadow-xl">s</div>
          </div>
        {:else}
          <div class="flex flex-row items-end">
            <div class="drop-shadow-xl">{countdownSeconds}</div>
            <div class="text-3xl drop-shadow-xl">s</div>
          </div>
          <div class="flex flex-row items-end">
            <div class="drop-shadow-xl">{countdownCentiseconds}</div>
            <div class="text-3xl drop-shadow-xl">cs</div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style lang="postcss"></style>
