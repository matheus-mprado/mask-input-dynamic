# mask-input-dynamic

[![npm version](https://img.shields.io/npm/v/mask-input-dynamic.svg?style=flat)](https://www.npmjs.com/package/mask-input-dynamic) [![npm downloads](https://img.shields.io/npm/dm/mask-input-dynamic.svg?style=flat)](https://www.npmjs.com/package/mask-input-dynamic)


Create your own mask simple and fast! Use styles pre-defined and more.


### Installing

```
npm install mask-input-dynamic
```
```
yarn add mask-input-dynamic
```

## Usage

```jsx
import { mask } from "mask-input-dynamic";

function InputFone(props) {
    const [fone, setFone] = useState('')

    return (
        <input type="text" onChange={(e) => setFone(mask(e.currentTarget.value, {style:'fone'}))} value={fone} />
    )
}
```
# Properties
|                           Name                            |               Type                | Description |
|        :-----------------------------------------:        |    :-------------------------:    |:--------------------------------------------- |
|                    **[`value`](#value)**                  |              `{String}`           | Value for mask       
|                   **[`pattern`](#pattern)**               |            `{String}`             | Enter with your mask with # pattern 
|                    **[`style`](#style)**                  |            `{fone|cpf}`           | Chose one style pre-defined for your mask 

