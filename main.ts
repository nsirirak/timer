namespace Timer {
    export function periodic( p: number, f: () =>void) {
        control.setInterval(f,p, control.IntervalMode.Interval)

    }
}