export const Reset: string = '\x1b[0m';
export const effects: Effects = {
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    italic: '\x1b[3m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
};
export const fontColors: ColorOptionHolder = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
};
export const backgroundColors: ColorOptionHolder = {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
};
export const contrast: {[key in Color]: Color} = {
    black: 'white',
    red: 'black',
    green: 'black',
    yellow: 'black',
    blue: 'black',
    magenta: 'black',
    cyan: 'black',
    white: 'black',
};
export interface TextOptions {
    link?: string;
    bold?: boolean;
    italic?: boolean;
    mono?: boolean;
};
export interface ColorOptions {
    font?: Color;
    background?: Color;
    effects?: Effect[];
};

export type Color = keyof ColorOptionHolder;
export type Effect = keyof Effects;

interface ColorOptionHolder {
    readonly black: string;
    readonly red: string;
    readonly green: string;
    readonly yellow: string;
    readonly blue: string;
    readonly magenta: string;
    readonly cyan: string;
    readonly white: string;
    [key: string]: string;
}

export interface Effects {
    readonly bright: string;
    readonly dim: string;
    readonly italic: string;
    readonly underscore: string;
    readonly blink: string;
    [key: string]: string;
}
