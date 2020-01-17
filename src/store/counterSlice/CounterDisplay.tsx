import * as React from 'react';
import CounterContainer from './CounterContainer';

interface IFCCountProps {
    count: number
    onIncrement: (step: number) => void
    label: string
}
const FCCounter: React.FC<IFCCountProps> = props => {
    const { label, count, onIncrement } = props;
    const step = 1
    const handleIncrement = () => {
        onIncrement(step);
    };
    return (
        <div>
            <h1>{label}</h1>
            <p>{count}</p>
            <button onClick={handleIncrement}>Increment by {step}</button>
        </div>
    )
}
const CounterDisplay = CounterContainer(FCCounter)
export default CounterDisplay
