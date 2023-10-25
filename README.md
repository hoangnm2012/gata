# COL - Modal

### Prerequisites

- `Node`
- `npm` or `yarn` as global packages


### Installation
```
    yarn install || npm i
```

### Live Demo: 
Use the Live Demo here: https://col-modal.onrender.com

### Usage

Runs the Client app in the development mode.<br />
```
  yarn start || npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test` || `yarn test`
Launches the test runner in the interactive watch mode.

```
  yarn test || npm test
```


### Usage

#### Basic usage
For Simple Modal with the default size "md"
```
<Modal
  title="Medium Size by default"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
>
  <p>Modal Content</p>
</Modal>
```
#### Advanced Usage
For Advanced Modal: with center modal, custom-modal class, Header & Footer
```
<Modal
  className="custom-modal"
  title="Center modal vertically"
  isOpen={isOpenCentered}
  onClose={() => setIsOpenCentered(false)}
  centered
  header={Header()}
  footer={Footer()}
>
  <p>Modal Content</p>
</Modal>
```

## Built-In API
- [isOpen](#isopen)
- [onClose](#onclose)
- [children](#children)
- [header](#header)
- [footer](#footer)
- [title](#title)
- [withCloseButton](#withclosebutton)
- [centered](#centered)
- [size](#size)
- [className](#classname)
