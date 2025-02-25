export interface CoverSize {
    width: number;
    height: number;
    label: string;
}

export const PRESET_SIZES: CoverSize[] = [
    { width: 730, height: 310, label: '个人博客 (730x310)' },
    { width: 1200, height: 630, label: '社交媒体 (1200x630)' },
    { width: 1920, height: 1080, label: '全高清 (1920x1080)' },
    { width: 800, height: 600, label: '文章封面 (800x600)' },
    { width: 1080, height: 1080, label: 'Instagram (1080x1080)' }
];

export const FONT_FAMILIES = [
    { value: 'sans-serif', label: 'Sans Serif' },
    { value: 'serif', label: 'Serif' },
    { value: 'monospace', label: 'Monospace' },
    { value: 'Pacifico, cursive', label: 'Pacifico' },
    { value: 'Dancing Script, cursive', label: 'Dancing Script' },
    { value: 'Great Vibes, cursive', label: 'Great Vibes' },
    { value: 'Satisfy, cursive', label: 'Satisfy' },
    // 中文字体
    { value: '"Noto Serif SC", serif', label: '思源宋体' },
    { value: '"ZCOOL XiaoWei", serif', label: '站酷小薇' },
    { value: '"ZCOOL QingKe HuangYou", cursive', label: '站酷庆科黄油体' },
    { value: '"Ma Shan Zheng", cursive', label: '马善政楷书' }
];

export const DEFAULT_SETTINGS = {
    selectedSize: PRESET_SIZES[0],
    title: '输入标题预览效果',
    fontSize: 90,
    fontFamily: '"ZCOOL QingKe HuangYou", cursive',
    letterSpacing: 10,
    backgroundColor: '#022D3D',
    textColor: '#ffffff',
    gradientStart: '#4f46e5',
    gradientEnd: '#818cf8',
    gradientAngle: 45,
    backgroundType: 'solid',
    borderRadius: 0,
    backgroundImage: '',
    backgroundSize: 'cover' as const,
    backgroundPosition: 'center',
    fontWeight: 500,
    customWidth: 1200,
    customHeight: 630
};