export class Config {
    runner_number: number = 2
    min: number = 10
    max: number = 150
    discrete: string = 'no'
    // orientation: string = 'vertical'
    orientation: string = 'horizontal'
}

export let configObj = {
    runner_number: 2 as number,
    min: 10 as number,
    max: 150 as number,
    discrete: 'no' as string,
    // orientation: 'vertical'
    orientation: 'horizontal' as string
}