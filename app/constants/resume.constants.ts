export const TEMPLATE_NAMES = {
	MINIMAL: 'minimal',
	CLASSIC: 'classic',
	MODERN: 'modern',
	PROFESSIONAL: 'professional',
	CREATIVE: 'creative',
	CODE: 'code',
	MODERN_BLUE: 'modern-blue',
} as const;

export const TEMPLATE_DISPLAY_NAMES = {
	[TEMPLATE_NAMES.MINIMAL]: 'Minimal Template',
	[TEMPLATE_NAMES.CLASSIC]: 'Two Column Classic',
	[TEMPLATE_NAMES.MODERN]: 'Modern Sidebar',
	[TEMPLATE_NAMES.PROFESSIONAL]: 'Professional Grid',
	[TEMPLATE_NAMES.CREATIVE]: 'Creative Blue',
	[TEMPLATE_NAMES.CODE]: 'Code Theme',
	[TEMPLATE_NAMES.MODERN_BLUE]: 'Modern Blue',
} as const;

export const TEMPLATE_DESCRIPTIONS = {
	[TEMPLATE_NAMES.MINIMAL]: 'Clean and professional design',
	[TEMPLATE_NAMES.CLASSIC]: 'Traditional split layout',
	[TEMPLATE_NAMES.MODERN]: 'Bold and contemporary design',
	[TEMPLATE_NAMES.PROFESSIONAL]: 'Organized and structured layout',
	[TEMPLATE_NAMES.CREATIVE]: 'Stylish and eye-catching design',
	[TEMPLATE_NAMES.CODE]: 'Perfect for developers',
	[TEMPLATE_NAMES.MODERN_BLUE]: 'Contemporary and professional',
} as const;
