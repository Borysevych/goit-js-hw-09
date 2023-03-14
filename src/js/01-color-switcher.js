const refs = {
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function updateColor(color) {
  document.body.style.backgroundColor = color;
}

class ColorSwitcher {
  constructor(updateColor) {
    this.intervalID = null;
    this.isActive = false;
    this.updateColor = updateColor;
    refs.stopButton.disabled = true;
  }

  startChangeColor() {
    if (this.isActive) {
      return;
    }

    refs.startButton.disabled = true;
    refs.stopButton.disabled = false;

    this.isActive = true;
    this.intervalID = setInterval(() => updateColor(getRandomHexColor()), 1000);
  }

  stopChangeColor() {
    refs.startButton.disabled = false;
    refs.stopButton.disabled = true;

    clearInterval(this.intervalID);
    this.isActive = false;
  }
}

const colorSwitcher = new ColorSwitcher();

refs.startButton.addEventListener('click', () => colorSwitcher.startChangeColor());
refs.stopButton.addEventListener('click', () => colorSwitcher.stopChangeColor());
