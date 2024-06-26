import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
    ['flex-center', 'flex items-center justify-center'],
    [/^i-(.*)$/, ([,c]) => `i-${c} dark:text-#ffffff active:dark:text-#ffffff`],
  ],
  theme: {
    colors: {
      pc: '#18a058',
      pch: '#36ad6a',
      pcp: '#0c7a43',
      pcs: '#36ad6a',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        'my-icon': FileSystemIconLoader(
          './src/assets/icons',
          svg => svg.replace(/#fff/, 'currentColor'),
        ),
      },
    }),
    presetWebFonts(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [
    'i-ant-design:dashboard-outlined',
    'i-carbon-user-profile',
    'i-my-icon-logo',
    '!color-pc',
    'i-ant-design:reload-outlined',
    'i-ant-design:close-outlined',
    'i-ant-design:column-width-outlined',
    'i-ant-design:minus-outlined',
  ],
})
