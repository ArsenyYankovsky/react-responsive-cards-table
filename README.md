# React Responsive Cards Table

<a href="./package.json">
  <img src="https://img.shields.io/npm/v/react-responsive-cards-table.svg?maxAge=3600&label=react-responsive-cards-table&colorB=007ec6">
</a>

<a href="https://unpkg.com/react-responsive-cards-table@0.2.0/dist/index.js">
  <img src="http://img.badgesize.io/https://unpkg.com/react-responsive-cards-table@0.2.0/dist/index.js?compression=gzip&amp;label=react--responsive--cards--table">
</a>

Responsive table that automatically switches between table (wide) and card (narrow) views.
It uses javascript to calculate the width of the actual content

![Demo Image](https://github.com/ArsenyYankovsky/react-responsive-cards-table/blob/master/src/demo/demo.gif)

## Installation

Using yarn:

`yarn add react-responsive-cards-table`

or npm:

`npm i --save react-responsive-cards-table`

## Example usage

[Demo](http://react-responsive-cards-table.surge.sh/)

[Demo Source Code](https://github.com/ArsenyYankovsky/react-responsive-cards-table/tree/master/src/demo)

Typical use case would be a table component that will need to collapse into list of cards.
Here is basic example of how to do that:

```js
import React from 'react'
import { map } from 'lodash'
import { ResponsiveCardTable, Content } from 'react-responsive-cards-table'

import planets from './planets.json'

const App = () => (
    <ResponsiveCardTable>
      {({ isCard }) => {
        if (isCard) {
          return (
            <Content>
              {map(planets, (planet, i) => (
                <PlanetCard key={i}>
                  ...
                </PlanetCard>
              ))}
            </Content>
          )
        }
    
        return (
          <Content>
            <table>
              <tbody>
                <tr>
                ...
                </tr>
                {map(planets, (planet, i) => (
                  <tr key={i}>
                  ...
                  </tr>
                ))}
              </tbody>
            </table>
          </Content>
        )
      }}
    </ResponsiveCardTable>
)

export default App
```

## API

Both `Content` and `Container` components expose `styles` property that will override default styles. 
