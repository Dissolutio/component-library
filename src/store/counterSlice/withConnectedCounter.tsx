import * as React from 'react';
import { connect } from 'react-redux';
import { Diff } from 'utility-types';

import { RootState } from '../store';
import { increment } from './index';

// These props will be injected into the base component
interface InjectedProps {
  count: number
  onIncrement: (step: number) => void
}
const withConnectedCounter = <BaseProps extends InjectedProps>(
  BaseComponent: React.ComponentType<BaseProps>
) => {
  const mapStateToProps = (state: RootState) => ({
    count: state.counter,
  });

  const dispatchProps = {
    onIncrement: increment,
  };

  type HocProps = ReturnType<typeof mapStateToProps> &
    typeof dispatchProps & {
      // here you can extend ConnectedHoc with new props
      overrideCount?: number;
    };

  class Hoc extends React.Component<HocProps> {
    // Enhance component name for debugging and React-Dev-Tools
    static displayName = `withConnectedCount(${BaseComponent.name})`;
    // reference to original wrapped component
    static readonly WrappedComponent = BaseComponent;

    render() {
      const { count, onIncrement, overrideCount, ...restProps } = this.props;

      return (
        <BaseComponent
          count={overrideCount || count} // injected
          onIncrement={onIncrement} // injected
          {...(restProps as BaseProps)}
        />
      );
    }
  }

  const ConnectedHoc = connect<
    ReturnType<typeof mapStateToProps>,
    typeof dispatchProps, // use "undefined" if NOT using dispatchProps
    Diff<BaseProps, InjectedProps>,
    RootState
  >(
    mapStateToProps,
    dispatchProps
  )(Hoc);

  return ConnectedHoc;
};
export default withConnectedCounter