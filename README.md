# COL - Modal

#### Contact info
- Name: Hoang Nguyen
- Email: nmhoangis@gmail.com
- Github: hoangnm2012

## Live Demo: 
Explore the [https://col-modal.onrender.com](https://col-modal.onrender.com) to see COL Modal in action.

## Prerequisites

- `Node`
- `npm` or `yarn` as global packages


## Installation

To install COL Modal, use the following command:

```bash
yarn install || npm i
```

### Usage

Runs the Client app in the development mode.<br />
```
  yarn start || npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the app in your browser. The demo app showcases two parts of the COL Modal:
1. Open a centered modal vertically.
2. Change the modal size (e.g., `xs`, `sm`, `md`, `lg`, and `xl`) by clicking the button for a specific size.

This Modal component also include the 
- Component API design
- Accessibility
- Animation
- Tests

### `npm test` || `yarn test`
Launches the test runner in the interactive watch mode.

```
  yarn test || npm test
```


### Usage
For a simple modal with the default size "md":

```
<Modal
  title="Medium Size by default"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
>
  <p>Modal Content</p>
</Modal>
```
For advanced modal options, including a centered modal, custom styling, and custom Header & Footer:
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

## Built-In API props
COL Modal offers a variety of props to customize your modals. Here's a list of available props:

- [isOpen](#isopen): A boolean prop to determine if the modal is open - Required
- [onClose](#onclose): A callback function to close the modal - Required
- [children](#children): Content to be displayed in the modal - Required
- [header](#header): Custom header component for the modal - Optional props 
- [footer](#footer): Custom footer component for the modal - Optional props
- [title](#title): Title of the modal.
- [withCloseButton](#withclosebutton): A boolean to display a close button.
- [centered](#centered): A boolean to center the modal vertically - Optional props `false` by default
- [size](#size): Customize the modal size (e.g.,`xs`, `sm`, `md`, `lg`, and `xl`) - Optional props `md` by default 
- [className](#classname): Add custom CSS classes to the modal.
