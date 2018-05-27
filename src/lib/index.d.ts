import * as React from 'react'

export interface ResponsiveCardTableProps {
    children: (() => React.ReactNode) | React.ReactNode;
}

export class ResponsiveCardTable extends React.Component<ResponsiveCardTableProps, any> { }

export interface ChildrenProps {
    isCard: boolean
}

export interface ContentProps {
    children: ((props: ChildrenProps) => React.ReactNode);
}

export class Content extends React.Component<ContentProps, any> { }
