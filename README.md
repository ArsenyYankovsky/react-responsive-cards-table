# React Responsive Cards Table

![Demo Image](https://github.com/ArsenyYankovsky/react-responsive-cards-table/blob/master/src/demo/demo.gif)

Responsive table that automatically switches between table (wide) and card (narrow) views.
It uses javascript to calculate the width of the actual content

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
