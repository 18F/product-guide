import { useEffect } from 'react';
import { useCollector } from './useCollector';
export function useMonitorOutput(monitor, collect, onCollect) {
    const [collected, updateCollected] = useCollector(monitor, collect, onCollect);
    useEffect(function subscribeToMonitorStateChange() {
        const handlerId = monitor.getHandlerId();
        if (handlerId == null) {
            return undefined;
        }
        return monitor.subscribeToStateChange(updateCollected, {
            handlerIds: [handlerId],
        });
    }, [monitor, updateCollected]);
    return collected;
}
