export type IconName = 
  | 'python' | 'nextjs' | 'tailwind' | 'sql' | 'figma' | 'excel' | 'r'
  | 'pandas' | 'numpy' | 're' | 'scikit' | 'camel' | 'huggingface' 
  | 'pytorch' | 'sqlite' | 'nltk' | 'bs4' | 'seaborn' | 'matplotlib' | 'bootstrap';

export interface IToolsBase {
    readonly id: string; 
    icon_tag: IconName | null;
    label: string;
    desc: string;
}