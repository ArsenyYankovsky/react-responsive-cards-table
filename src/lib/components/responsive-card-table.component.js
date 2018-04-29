import React, { Component } from 'react'

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

  getContentStyles = () => ({
    display: 'flex',
    width: this.state.isCard ? '100%' : '',
    ...this.props.containerStyles,
  })

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
        contentRef: (content) => { this.content = content },
      },
    )

    return (
      <div style={this.getContentStyles()} ref={(ref) => { this.container = ref }}>
        {element}
      </div>
    )
  }
}
