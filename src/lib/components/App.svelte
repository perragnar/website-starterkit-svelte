<script>
  import { fly, fade } from 'svelte/transition';
  import { appStore } from '$stores/appStore';

  let titleChanged = false;
  let editTitleMode = false;

  $: {
    if (editTitleMode === true && titleChanged === false) {
      titleChanged = true;
    }
  }
</script>

<div class="app">
  <header class="app__header">
    <hgroup>
      <h1 on:click={() => (editTitleMode = !editTitleMode)}>
        {$appStore.appTitle || 'No name'}
      </h1>
      <h2>SvelteKit edition</h2>
    </hgroup>
  </header>
  <main class="app__content">
    <p>A simple Svelte boilerplate.</p>
    {#if !titleChanged}
      <p class="note">
        Pst! Check out Sveltes interactions by clicking the title <strong
          >{$appStore.appTitle}</strong
        > above.
      </p>
    {/if}
    {#if editTitleMode}
      <p in:fly={{ y: -20 }} out:fade>
        <input
          type="text"
          class="app-title-input"
          bind:value={$appStore.appTitle}
          on:blur={() => (editTitleMode = false)}
          on:keypress={(e) => {
            if (e.key === 'Enter') {
              editTitleMode = false;
            }
          }}
        />
      </p>
      <p class="note">Edit the title and press enter.</p>
    {/if}
  </main>
</div>

<style type="scss">
  .app {
    width: 50vw;
    max-width: 800px;
    background-color: #dddddd;
    padding: 2rem;
    border-radius: 3px;

    &__header {
      hgroup {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 1rem;

        h1 {
          cursor: pointer;
        }

        h2 {
          color: #666666;
        }
      }
    }

    &__content {
      .note {
        font-size: 0.8em;
        color: #555;
        display: inline-block;
        padding: 0.5rem 1rem;
        background-color: rgba(0 0 0 / 10%);
        border-radius: 0.5rem;
      }

      .app-title-input {
        padding: 0.5rem 0.75rem;
        width: 100%;
      }
    }
  }
</style>
