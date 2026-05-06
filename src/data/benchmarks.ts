export interface DataPoint {
    label: string;
    value: number;
    isHighlight?: boolean;
}

export const nodeSpeedData: DataPoint[] = [
    { label: 'Talifun', value: 928.39, isHighlight: true },
    { label: 'AI Tokenizer', value: 97.58 },
    { label: 'tiktoken', value: 81.14 },
    { label: 'GPT Tokenizer', value: 23.97 },
    { label: 'HF tokenizers', value: 5.33 },
];

export const pythonSpeedData: DataPoint[] = [
    { label: 'Talifun', value: 832.65, isHighlight: true },
    { label: 'RS-BPE', value: 43.54 },
    { label: 'tiktoken', value: 35.96 },
    { label: 'TokenDagger', value: 34.33 },
    { label: 'HF tokenizers', value: 26.22 },
    { label: 'Splintr', value: 10.42 },
];

export const rustSpeedData: DataPoint[] = [
    { label: 'Talifun', value: 943.20, isHighlight: true },
    { label: 'RS-BPE OpenAI', value: 99.67 },
    { label: 'tiktoken-rs', value: 80.24 },
    { label: 'HuggingFace tokenizers', value: 38.15 },
    { label: 'Splintr', value: 12.63 },
];

export const nodeLatencyData: DataPoint[] = [
    { label: 'Talifun', value: 0.39, isHighlight: true },
    { label: 'GPT Tokenizer', value: 2.72 },
    { label: 'AI Tokenizer', value: 3.39 },
    { label: 'tiktoken', value: 4.91 },
    { label: 'HF tokenizers', value: 38.35 },
];

export const pythonLatencyData: DataPoint[] = [
    { label: 'Talifun', value: 0.34, isHighlight: true },
    { label: 'Splintr', value: 2.34 },
    { label: 'HF tokenizers', value: 3.44 },
    { label: 'TokenDagger', value: 5.57 },
    { label: 'tiktoken', value: 6.87 },
    { label: 'RS-BPE', value: 8.59 },
];

export const rustLatencyData: DataPoint[] = [
    { label: 'Talifun', value: 0.23, isHighlight: true },
    { label: 'RS-BPE OpenAI', value: 1.29 },
    { label: 'tiktoken-rs', value: 1.33 },
    { label: 'Splintr', value: 1.34 },
    { label: 'HuggingFace tokenizers', value: 4.69 },
];
