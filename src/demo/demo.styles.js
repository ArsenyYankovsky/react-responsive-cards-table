import styled from 'styled-components'

const Th = styled.th`
  text-align: left;
  padding: 5px 20px;
`
const Td = styled.td`
  text-align: left;
  padding: 5px 20px;
`
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const Card = styled.div`
  border-radius: 10px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px;
  white-space: nowrap;
`
const PlanetCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const PlanetName = styled.div`
  font-weight: bold;
  font-size: 16px;
`
const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
  align-items: center;
`
const CardWrapper = styled.div`
  width: 100%;
  max-width: 620px;
`

export {
  Th,
  Td,
  Wrapper,
  Card,
  PlanetCard,
  PlanetName,
  CardRow,
  CardWrapper,
}
