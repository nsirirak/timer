namespace Timer {
    /**
     * Call a function periodicly 
     */
    //% blockId=periodicBlock
    //% block="Interval $p"
    //% p.min=1 p.max=1000
    export function periodic( p: number, f: () =>void) {
        control.setInterval(f,p, control.IntervalMode.Interval)

    }
}