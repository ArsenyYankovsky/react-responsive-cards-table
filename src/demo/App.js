import React from 'react'
import { map } from 'lodash'
import { ResponsiveCardTable, Content } from '../lib'
import { Th, Td, Wrapper, Card, PlanetCard, PlanetName, CardRow } from './demo.styles'

import planets from './planets.json'

const renderTable = (isCard) => {
  if (isCard) {
    return (
      <Content isCard={isCard}>
        {map(planets, (planet, i) => (
          <PlanetCard key={i}>
            <PlanetName>
              {planet.name}
            </PlanetName>
            <CardRow>
              <div>Mass</div>
              <div>{planet.massBase.toFixed(4)} x 10<sup>{planet.massExponent}</sup> kg</div>
            </CardRow>
            <CardRow>
              <div>Mean Radius</div>
              <div>{planet.radius} km</div>
            </CardRow>
            <CardRow>
              <div>Synodic Period</div>
              <div>{planet.synodicPeriod} days</div>
            </CardRow>
          </PlanetCard>
        ))}
      </Content>
    )
  }

  return (
    <Content isCard={isCard}>
      <Card>
        <table>
          <tbody>
            <tr>
              <Th>Name</Th>
              <Th>Mass, kg</Th>
              <Th>Mean Radius, km</Th>
              <Th>Synodic period, days</Th>
            </tr>
            {map(planets, (planet, i) => (
              <tr key={i}>
                <Td>{planet.name}</Td>
                <Td>{planet.massBase.toFixed(4)} x 10<sup>{planet.massExponent}</sup></Td>
                <Td>{planet.radius}</Td>
                <Td>{planet.synodicPeriod}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </Content>
  )
}

const App = () => (
  <Wrapper>
    <ResponsiveCardTable>
      {({ isCard }) => renderTable(isCard)}
    </ResponsiveCardTable>
  </Wrapper>
)

export default App
