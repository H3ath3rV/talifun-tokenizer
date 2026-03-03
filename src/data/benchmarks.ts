export interface DataPoint {
    label: string;
    value: number;
    isHighlight?: boolean;
}

export const nodeSpeedData: DataPoint[] = [
    { label: 'Talifun', value: 670.94, isHighlight: true },
    { label: 'Tiktoken', value: 2.84 },
];

export const pythonSpeedData: DataPoint[] = [
    { label: 'Talifun', value: 777.01, isHighlight: true },
    { label: 'Flash Tokenizer', value: 8.52 },
    { label: 'Tiktoken', value: 8.61 },
    { label: 'Splintr', value: 8.57 },
    { label: 'RS-BPE', value: 6.92 },
    { label: 'HF Tokenizers', value: 4.01 },
];

export const rustSpeedData: DataPoint[] = [
    { label: 'Talifun', value: 1050.07, isHighlight: true },
    { label: 'RS-BPE', value: 78.47 },
    { label: 'Tiktoken', value: 73.04 },
    { label: 'HF Tokenizers', value: 30.21 },
    { label: 'Splintr', value: 13.46 },
];

export const nodeLatencyData: DataPoint[] = [
    { label: 'Talifun', value: 0.29, isHighlight: true },
    { label: 'Tiktoken', value: 52.36 },
];

export const pythonLatencyData: DataPoint[] = [
    { label: 'Talifun', value: 0.45, isHighlight: true },
    { label: 'Flash Tokenizer', value: 5.52 },
    { label: 'Tiktoken', value: 6.43 },
    { label: 'Splintr', value: 1.60 },
    { label: 'RS-BPE', value: 4.32 },
    { label: 'HF Tokenizers', value: 14.90 },
];

export const rustLatencyData: DataPoint[] = [
    { label: 'Talifun', value: 0.65, isHighlight: true },
    { label: 'RS-BPE', value: 0.72 },
    { label: 'Tiktoken', value: 2.17 },
    { label: 'HF Tokenizers', value: 15.51 },
    { label: 'Splintr', value: 5.07 },
];
