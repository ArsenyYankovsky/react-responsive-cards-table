import React, { PureComponent } from 'react'

export class Content extends PureComponent {
  getContentStyles = (isCard, styles) => ({
    display: 'flex',
    flexDirection: isCard ? 'column' : 'row',
    flexWrap: 'nowrap',
    flex: isCard ? '1' : '1 0 auto',
    ...styles,
  })

  render() {
    const { isCard, styles, children } = this.props

    return <div ref={this.props.contentRef} style={this.getContentStyles(isCard, styles)}>{children}</div>
  }
}
