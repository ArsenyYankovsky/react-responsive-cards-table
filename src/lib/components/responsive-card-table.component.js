import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: ${({ isCard }) => isCard ? '100%' : ''};
`

export class ResponsiveCardTable extends Component {
  state = {
    isCard: false,
  }

  componentDidMount() {
    window.addEventListener('resize', this.tryTable)
    this.checkSize()
  }

  componentDidUpdate() {
    this.checkSize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.tryTable)
  }

  tryTable = () => {
    this.setState({ isCard: false })
  }

  checkSize = () => {
    window.requestAnimationFrame(() => {
      if (this.content) {
        const tableWidth = this.content.getBoundingClientRect().width
        const parentWidth = this.container.getBoundingClientRect().width

        if (tableWidth > parentWidth && !this.state.isCard) {
          this.setState({ isCard: true })
        }

        if (tableWidth < parentWidth && this.state.isCard) {
          this.setState({ isCard: false })
        }
      }
    })
  }

  render() {
    const { children } = this.props

    const element = React.cloneElement(
      children({
        isCard: this.state.isCard,
      }),
      {
        innerRef: (content) => { this.content = content },
      },
    )

    return (
      <Container isCard={this.state.isCard} innerRef={(ref) => { this.container = ref }}>
        {element}
      </Container>
    )
  }
}

export const Content = styled.div`
  display: flex;
  flex-direction: ${({ isCard }) => isCard ? 'column' : 'row'};
  flex-wrap: nowrap;
  flex: ${({ isCard }) => isCard ? '1' : '1 0 auto'};
`
