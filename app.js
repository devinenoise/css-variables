const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || ''; //  or '' allows for the hex code color picker
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix // append the suffix to the element
  );
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
