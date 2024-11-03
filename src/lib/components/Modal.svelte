<script>
  export let show = false;  // Controls visibility of the modal
  export let onClose;       // Function to call when closing the modal

  const handleClose = () => {
    onClose();  // Call onClose when background is clicked
  };
</script>

<style>
  .modal {
    position: fixed;                     /* Fixed position to cover the whole screen */
    top: 0;                              /* Align to the top */
    left: 0;                             /* Align to the left */
    width: 100vw;                        /* Full width */
    height: 100vh;                       /* Full height */
    background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
    justify-content: center;             /* Center modal content */
    align-items: center;                 /* Center modal content */
    display: flex;                       /* Use flexbox for alignment */
  }

  .hidden {
    display: none;                       /* Class to hide modal */
  }

  .content {
    background-color: #1e1e1e;           /* Dark background for modal content */
    color: white;                        /* Text color */
    padding: 20px;                       /* Padding inside the modal */
    border-radius: 8px;                  /* Rounded corners */
  }

  button {
    margin-top: 10px;                   /* Space above the button */
    background: #007bff;                /* Button background color */
    color: white;                        /* Button text color */
    border: none;                        /* No border */
    padding: 10px 20px;                 /* Padding for button */
    border-radius: 5px;                 /* Rounded button corners */
    cursor: pointer;                     /* Pointer cursor on hover */
  }
</style>

<div class="modal {show ? '' : 'hidden'}" on:click={handleClose}>
  <div class="content" on:click|stopPropagation>
    <slot></slot> <!-- Injected content -->
    <button on:click={handleClose}>Close</button> <!-- Close button -->
  </div>
</div>