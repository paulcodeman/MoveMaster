# FlexiMove

FlexiMove is a lightweight JavaScript library for moving HTML elements along specified axes (X, Y, Z) with intuitive drag-and-drop functionality.

## Features
- Move elements freely along the X, Y, and Z axes.
- Support for custom step sizes and grid snapping.
- Boundary limits to restrict movement within specified areas.
- Easy to integrate with any web project.

## Installation

You can include FlexiMove in your project by downloading the script file or using a CDN. 

### Using CDN
```html
<script src="https://cdn.example.com/fleximove.min.js"></script>
```

### Local Installation
1. Download the `fleximove.min.js` file.
2. Include it in your HTML:
```html
<script src="path/to/fleximove.min.js"></script>
```

## Usage

To make an element movable, add the `data-movable` attribute and specify the `data-move-axis` attribute.

### HTML Structure
```html
<div class="movable-box" data-movable="true" data-move-axis="xy">
    Move me!
</div>
```

### Options
- `data-move-axis`: Specifies the axes along which the element can move (e.g., `x`, `y`, `z`, `xy`, `xz`, `yz`, `xyz`).
- `data-move-step`: Defines the movement step size (in pixels).
- `data-move-grid`: Enables grid snapping with specified grid size (in pixels).
- `data-move-boundary`: Restricts movement within defined boundaries (in the format `minX,minY,maxX,maxY`).

## Examples

### Moving on the X-axis
```html
<div class="movable-box" data-movable="true" data-move-axis="x">
    Move on X-axis
</div>
```

### Moving on the XY-axis with Step Size
```html
<div class="movable-box" data-movable="true" data-move-axis="xy" data-move-step="10">
    Move with step 10px
</div>
```

### Moving within Boundaries
```html
<div class="movable-box" data-movable="true" data-move-axis="xy" data-move-boundary="0,0,300,300">
    Move within boundaries (300x300)
</div>
```

## Contribution

Contributions are welcome! Please open an issue or submit a pull request if you'd like to contribute.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
