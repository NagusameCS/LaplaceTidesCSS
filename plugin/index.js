const plugin = require('tailwindcss/plugin');

/**
 * Laplace Tides — Tailwind CSS Plugin
 *
 * A deep-ocean design system named after Pierre-Simon Laplace,
 * whose tidal equations shaped our understanding of ocean dynamics.
 *
 * Palette regions:
 *  abyss   — darkest ocean floor
 *  deep    — mid-depth ocean blues
 *  tide    — transitional, shifting blues
 *  current — bright, active flow
 *  foam    — surface light and whites
 *  sand    — coastal warm accents
 *  biolume — bioluminescent glows
 */

const colors = {
  abyss: {
    50:  '#e8edf4',
    100: '#c4cfdf',
    200: '#9dafc9',
    300: '#758fb3',
    400: '#5777a3',
    500: '#3a6093',
    600: '#2d5080',
    700: '#1f3d6a',
    800: '#122b54',
    900: '#071a3e',
    950: '#030e22',
  },
  deep: {
    50:  '#e6f0f8',
    100: '#bfd6ed',
    200: '#93bae2',
    300: '#659ed7',
    400: '#4188cf',
    500: '#1a72c7',
    600: '#1464b0',
    700: '#0d5295',
    800: '#083f79',
    900: '#042a57',
    950: '#021839',
  },
  tide: {
    50:  '#e3f4f7',
    100: '#b8e3eb',
    200: '#87d1de',
    300: '#53bed1',
    400: '#2bafc7',
    500: '#00a0bd',
    600: '#008fa9',
    700: '#007a90',
    800: '#006475',
    900: '#004d58',
    950: '#002e35',
  },
  current: {
    50:  '#e0f9fb',
    100: '#b3f0f5',
    200: '#7fe5ee',
    300: '#47d9e6',
    400: '#1acfe1',
    500: '#00c4dc',
    600: '#00afc5',
    700: '#0096aa',
    800: '#007d8e',
    900: '#005f6c',
    950: '#003840',
  },
  foam: {
    50:  '#f8fcff',
    100: '#eef6fc',
    200: '#daeef9',
    300: '#c0e4f5',
    400: '#a0d5ef',
    500: '#7fc4e8',
    600: '#5baede',
    700: '#3a93cc',
    800: '#2277ae',
    900: '#0e5a8a',
    950: '#063c5e',
  },
  sand: {
    50:  '#fdf8ee',
    100: '#f8edce',
    200: '#f2dfaa',
    300: '#e9cc7e',
    400: '#dfb94f',
    500: '#cfa234',
    600: '#b08727',
    700: '#8e6b1e',
    800: '#6d5016',
    900: '#4d380f',
    950: '#2e2008',
  },
  biolume: {
    50:  '#e6fff9',
    100: '#b3ffee',
    200: '#7bffe3',
    300: '#3dffda',
    400: '#00ffd4',
    500: '#00e8bf',
    600: '#00cca8',
    700: '#00a888',
    800: '#008469',
    900: '#005f4b',
    950: '#00392d',
  },
};

const laplaceTides = plugin(
  function ({ addBase, addComponents, addUtilities, theme }) {

    // ── Base resets & CSS custom properties ─────────────────────────────────
    addBase({
      ':root': {
        '--lt-abyss':     theme('colors.abyss.950'),
        '--lt-deep':      theme('colors.deep.900'),
        '--lt-tide':      theme('colors.tide.500'),
        '--lt-current':   theme('colors.current.400'),
        '--lt-foam':      theme('colors.foam.100'),
        '--lt-sand':      theme('colors.sand.300'),
        '--lt-biolume':   theme('colors.biolume.400'),
        '--lt-text':      theme('colors.foam.100'),
        '--lt-text-muted':theme('colors.foam.400'),
        '--lt-radius':    '0.5rem',
        '--lt-radius-lg': '1rem',
        '--lt-shadow':    '0 4px 32px 0 rgba(0,164,189,0.15)',
        '--lt-glow':      '0 0 24px 4px rgba(0,255,212,0.25)',
      },
      'html': {
        scrollBehavior: 'smooth',
      },
      'body': {
        backgroundColor: theme('colors.abyss.950'),
        color:           theme('colors.foam.100'),
        fontFamily:      theme('fontFamily.sans'),
        lineHeight:      '1.6',
      },
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },
      'a': {
        color:          theme('colors.current.400'),
        textDecoration: 'none',
        transition:     'color 0.2s ease',
      },
      'a:hover': {
        color: theme('colors.biolume.400'),
      },
      'h1, h2, h3, h4, h5, h6': {
        fontWeight:   '700',
        lineHeight:   '1.2',
        letterSpacing: '-0.02em',
        color:         theme('colors.foam.50'),
      },
      'code, pre': {
        fontFamily: theme('fontFamily.mono'),
      },
      'pre': {
        backgroundColor: theme('colors.abyss.900'),
        border:          `1px solid ${theme('colors.deep.700')}`,
        borderRadius:    'var(--lt-radius)',
        padding:         '1rem 1.25rem',
        overflowX:       'auto',
      },
      'code:not(pre > code)': {
        backgroundColor: theme('colors.abyss.900'),
        color:           theme('colors.biolume.300'),
        borderRadius:    '0.25rem',
        padding:         '0.1em 0.4em',
        fontSize:        '0.875em',
      },
      '::-webkit-scrollbar': {
        width:  '8px',
        height: '8px',
      },
      '::-webkit-scrollbar-track': {
        background: theme('colors.abyss.950'),
      },
      '::-webkit-scrollbar-thumb': {
        background:    theme('colors.deep.700'),
        borderRadius:  '4px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: theme('colors.tide.600'),
      },
      '::selection': {
        backgroundColor: theme('colors.current.600'),
        color:           theme('colors.foam.50'),
      },
    });

    // ── Components ───────────────────────────────────────────────────────────
    addComponents({

      // Container
      '.tide-container': {
        width:        '100%',
        maxWidth:     '1200px',
        marginLeft:   'auto',
        marginRight:  'auto',
        paddingLeft:  '1.5rem',
        paddingRight: '1.5rem',
      },

      // ── Buttons ────────────────────────────────────────────────────────────
      '.btn': {
        display:        'inline-flex',
        alignItems:     'center',
        justifyContent: 'center',
        gap:            '0.5rem',
        paddingTop:     '0.625rem',
        paddingBottom:  '0.625rem',
        paddingLeft:    '1.25rem',
        paddingRight:   '1.25rem',
        borderRadius:   'var(--lt-radius)',
        fontWeight:     '600',
        fontSize:       '0.9375rem',
        lineHeight:     '1',
        cursor:         'pointer',
        border:         '1px solid transparent',
        transition:     'all 0.2s ease',
        userSelect:     'none',
        whiteSpace:     'nowrap',
        textDecoration: 'none',
      },
      '.btn:focus-visible': {
        outline:       `2px solid ${theme('colors.current.400')}`,
        outlineOffset: '3px',
      },
      '.btn:disabled': {
        opacity: '0.45',
        cursor:  'not-allowed',
        pointerEvents: 'none',
      },

      '.btn-primary': {
        backgroundColor: theme('colors.tide.500'),
        color:           theme('colors.foam.50'),
        borderColor:     theme('colors.tide.400'),
      },
      '.btn-primary:hover': {
        backgroundColor: theme('colors.tide.400'),
        borderColor:     theme('colors.tide.300'),
        boxShadow:       'var(--lt-shadow)',
        transform:       'translateY(-1px)',
      },
      '.btn-primary:active': {
        transform:       'translateY(0)',
        backgroundColor: theme('colors.tide.600'),
      },

      '.btn-current': {
        backgroundColor: theme('colors.current.500'),
        color:           theme('colors.abyss.950'),
        borderColor:     theme('colors.current.400'),
        fontWeight:      '700',
      },
      '.btn-current:hover': {
        backgroundColor: theme('colors.current.400'),
        boxShadow:       'var(--lt-glow)',
        transform:       'translateY(-1px)',
      },
      '.btn-current:active': {
        transform:       'translateY(0)',
        backgroundColor: theme('colors.current.600'),
      },

      '.btn-biolume': {
        backgroundColor: theme('colors.biolume.500'),
        color:           theme('colors.abyss.950'),
        borderColor:     theme('colors.biolume.400'),
        fontWeight:      '700',
      },
      '.btn-biolume:hover': {
        backgroundColor: theme('colors.biolume.400'),
        boxShadow:       '0 0 24px 4px rgba(0,232,191,0.4)',
        transform:       'translateY(-1px)',
      },

      '.btn-ghost': {
        backgroundColor: 'transparent',
        color:           theme('colors.foam.200'),
        borderColor:     theme('colors.deep.600'),
      },
      '.btn-ghost:hover': {
        backgroundColor: theme('colors.deep.800'),
        borderColor:     theme('colors.tide.600'),
        color:           theme('colors.foam.50'),
      },

      '.btn-outline': {
        backgroundColor: 'transparent',
        color:           theme('colors.current.400'),
        borderColor:     theme('colors.current.500'),
      },
      '.btn-outline:hover': {
        backgroundColor: theme('colors.current.500'),
        color:           theme('colors.abyss.950'),
        boxShadow:       'var(--lt-glow)',
      },

      '.btn-sm': {
        paddingTop:    '0.375rem',
        paddingBottom: '0.375rem',
        paddingLeft:   '0.875rem',
        paddingRight:  '0.875rem',
        fontSize:      '0.8125rem',
      },
      '.btn-lg': {
        paddingTop:    '0.875rem',
        paddingBottom: '0.875rem',
        paddingLeft:   '1.75rem',
        paddingRight:  '1.75rem',
        fontSize:      '1.0625rem',
      },
      '.btn-xl': {
        paddingTop:    '1.125rem',
        paddingBottom: '1.125rem',
        paddingLeft:   '2.25rem',
        paddingRight:  '2.25rem',
        fontSize:      '1.125rem',
      },

      // ── Cards ──────────────────────────────────────────────────────────────
      '.tide-card': {
        backgroundColor: theme('colors.abyss.900'),
        border:          `1px solid ${theme('colors.deep.800')}`,
        borderRadius:    'var(--lt-radius-lg)',
        padding:         '1.5rem',
        transition:      'border-color 0.2s ease, box-shadow 0.2s ease',
      },
      '.tide-card:hover': {
        borderColor: theme('colors.tide.700'),
        boxShadow:   'var(--lt-shadow)',
      },
      '.tide-card-glow': {
        backgroundColor: theme('colors.abyss.900'),
        border:          `1px solid ${theme('colors.tide.700')}`,
        borderRadius:    'var(--lt-radius-lg)',
        padding:         '1.5rem',
        boxShadow:       'var(--lt-shadow)',
        transition:      'border-color 0.2s ease, box-shadow 0.2s ease',
      },
      '.tide-card-glow:hover': {
        borderColor: theme('colors.current.500'),
        boxShadow:   'var(--lt-glow)',
      },
      '.tide-card-glass': {
        backgroundColor: 'rgba(10,35,66,0.55)',
        backdropFilter:  'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border:          `1px solid rgba(0,164,189,0.25)`,
        borderRadius:    'var(--lt-radius-lg)',
        padding:         '1.5rem',
        transition:      'border-color 0.2s ease, box-shadow 0.2s ease',
      },
      '.tide-card-glass:hover': {
        borderColor: 'rgba(0,196,220,0.45)',
        boxShadow:   'var(--lt-shadow)',
      },

      '.tide-card-header': {
        marginBottom: '1rem',
        paddingBottom: '1rem',
        borderBottom: `1px solid ${theme('colors.deep.800')}`,
      },
      '.tide-card-title': {
        fontSize:     '1.125rem',
        fontWeight:   '700',
        color:        theme('colors.foam.50'),
        marginBottom: '0.25rem',
      },
      '.tide-card-subtitle': {
        fontSize: '0.875rem',
        color:    theme('colors.foam.400'),
      },
      '.tide-card-footer': {
        marginTop:    '1rem',
        paddingTop:   '1rem',
        borderTop:    `1px solid ${theme('colors.deep.800')}`,
        display:      'flex',
        alignItems:   'center',
        gap:          '0.75rem',
      },

      // ── Badges ─────────────────────────────────────────────────────────────
      '.badge': {
        display:        'inline-flex',
        alignItems:     'center',
        gap:            '0.25rem',
        paddingTop:     '0.25rem',
        paddingBottom:  '0.25rem',
        paddingLeft:    '0.625rem',
        paddingRight:   '0.625rem',
        borderRadius:   '9999px',
        fontSize:       '0.75rem',
        fontWeight:     '600',
        lineHeight:     '1',
        letterSpacing:  '0.02em',
        border:         '1px solid transparent',
      },
      '.badge-tide': {
        backgroundColor: `${theme('colors.tide.900')}`,
        color:           theme('colors.tide.300'),
        borderColor:     theme('colors.tide.700'),
      },
      '.badge-current': {
        backgroundColor: `${theme('colors.current.900')}`,
        color:           theme('colors.current.300'),
        borderColor:     theme('colors.current.700'),
      },
      '.badge-biolume': {
        backgroundColor: `${theme('colors.biolume.900')}`,
        color:           theme('colors.biolume.300'),
        borderColor:     theme('colors.biolume.700'),
      },
      '.badge-sand': {
        backgroundColor: `${theme('colors.sand.900')}`,
        color:           theme('colors.sand.300'),
        borderColor:     theme('colors.sand.700'),
      },
      '.badge-foam': {
        backgroundColor: `${theme('colors.abyss.800')}`,
        color:           theme('colors.foam.300'),
        borderColor:     theme('colors.deep.600'),
      },

      // ── Inputs ─────────────────────────────────────────────────────────────
      '.tide-input': {
        width:           '100%',
        paddingTop:      '0.625rem',
        paddingBottom:   '0.625rem',
        paddingLeft:     '0.875rem',
        paddingRight:    '0.875rem',
        backgroundColor: theme('colors.abyss.900'),
        color:           theme('colors.foam.100'),
        border:          `1px solid ${theme('colors.deep.700')}`,
        borderRadius:    'var(--lt-radius)',
        fontSize:        '0.9375rem',
        transition:      'border-color 0.2s ease, box-shadow 0.2s ease',
        outline:         'none',
        appearance:      'none',
      },
      '.tide-input::placeholder': {
        color: theme('colors.foam.500'),
      },
      '.tide-input:focus': {
        borderColor: theme('colors.tide.500'),
        boxShadow:   `0 0 0 3px rgba(0,160,189,0.25)`,
      },
      '.tide-input:focus-visible': {
        borderColor: theme('colors.tide.500'),
        boxShadow:   `0 0 0 3px rgba(0,160,189,0.25)`,
      },
      '.tide-input:disabled': {
        opacity: '0.5',
        cursor:  'not-allowed',
      },

      '.tide-label': {
        display:      'block',
        marginBottom: '0.375rem',
        fontSize:     '0.875rem',
        fontWeight:   '500',
        color:        theme('colors.foam.300'),
      },
      '.tide-form-group': {
        marginBottom: '1.25rem',
      },
      '.tide-hint': {
        marginTop: '0.375rem',
        fontSize:  '0.8125rem',
        color:     theme('colors.foam.400'),
      },
      '.tide-error': {
        marginTop: '0.375rem',
        fontSize:  '0.8125rem',
        color:     theme('colors.sand.400'),
      },

      // ── Navbar ─────────────────────────────────────────────────────────────
      '.tide-nav': {
        position:        'sticky',
        top:             '0',
        zIndex:          '50',
        width:           '100%',
        backgroundColor: 'rgba(3,14,34,0.85)',
        backdropFilter:  'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom:    `1px solid ${theme('colors.deep.800')}`,
      },
      '.tide-nav-inner': {
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'space-between',
        height:          '64px',
        maxWidth:        '1200px',
        marginLeft:      'auto',
        marginRight:     'auto',
        paddingLeft:     '1.5rem',
        paddingRight:    '1.5rem',
      },
      '.tide-nav-brand': {
        fontSize:     '1.375rem',
        fontWeight:   '800',
        letterSpacing: '-0.03em',
        color:         theme('colors.foam.50'),
        textDecoration: 'none',
        display:       'flex',
        alignItems:    'center',
        gap:           '0.5rem',
      },
      '.tide-nav-links': {
        display:    'flex',
        alignItems: 'center',
        gap:        '0.25rem',
      },
      '.tide-nav-link': {
        paddingTop:    '0.375rem',
        paddingBottom: '0.375rem',
        paddingLeft:   '0.875rem',
        paddingRight:  '0.875rem',
        borderRadius:  'var(--lt-radius)',
        fontSize:      '0.9375rem',
        fontWeight:    '500',
        color:         theme('colors.foam.300'),
        textDecoration: 'none',
        transition:    'color 0.18s ease, background-color 0.18s ease',
      },
      '.tide-nav-link:hover': {
        color:           theme('colors.foam.50'),
        backgroundColor: theme('colors.deep.800'),
      },
      '.tide-nav-link.active': {
        color:           theme('colors.current.400'),
        backgroundColor: theme('colors.deep.900'),
      },

      // ── Dividers ───────────────────────────────────────────────────────────
      '.tide-divider': {
        border:     'none',
        borderTop:  `1px solid ${theme('colors.deep.800')}`,
        margin:     '2rem 0',
      },
      '.tide-divider-glow': {
        border:     'none',
        borderTop:  `1px solid ${theme('colors.tide.700')}`,
        margin:     '2rem 0',
        boxShadow:  `0 1px 8px 0 rgba(0,160,189,0.22)`,
      },

      // ── Alert / Callout ────────────────────────────────────────────────────
      '.tide-alert': {
        display:      'flex',
        gap:          '0.875rem',
        padding:      '1rem 1.25rem',
        borderRadius: 'var(--lt-radius)',
        border:       '1px solid transparent',
        fontSize:     '0.9375rem',
        lineHeight:   '1.5',
      },
      '.tide-alert-info': {
        backgroundColor: theme('colors.deep.900'),
        borderColor:     theme('colors.deep.700'),
        color:           theme('colors.foam.200'),
      },
      '.tide-alert-tide': {
        backgroundColor: theme('colors.tide.950'),
        borderColor:     theme('colors.tide.700'),
        color:           theme('colors.tide.200'),
      },
      '.tide-alert-biolume': {
        backgroundColor: theme('colors.biolume.950'),
        borderColor:     theme('colors.biolume.700'),
        color:           theme('colors.biolume.200'),
      },
      '.tide-alert-warning': {
        backgroundColor: theme('colors.sand.950'),
        borderColor:     theme('colors.sand.700'),
        color:           theme('colors.sand.200'),
      },

      // ── Progress bar ───────────────────────────────────────────────────────
      '.tide-progress': {
        width:           '100%',
        height:          '8px',
        backgroundColor: theme('colors.abyss.800'),
        borderRadius:    '9999px',
        overflow:        'hidden',
        border:          `1px solid ${theme('colors.deep.800')}`,
      },
      '.tide-progress-bar': {
        height:        '100%',
        borderRadius:  '9999px',
        transition:    'width 0.4s ease',
        background:    `linear-gradient(90deg, ${theme('colors.tide.600')}, ${theme('colors.current.400')})`,
      },
      '.tide-progress-bar-biolume': {
        background: `linear-gradient(90deg, ${theme('colors.biolume.700')}, ${theme('colors.biolume.400')})`,
        boxShadow:  '0 0 8px 0 rgba(0,232,191,0.5)',
      },

      // ── Avatar ─────────────────────────────────────────────────────────────
      '.tide-avatar': {
        display:         'inline-flex',
        alignItems:      'center',
        justifyContent:  'center',
        borderRadius:    '9999px',
        overflow:        'hidden',
        width:           '2.5rem',
        height:          '2.5rem',
        backgroundColor: theme('colors.deep.800'),
        color:           theme('colors.current.300'),
        fontWeight:      '700',
        fontSize:        '0.9375rem',
        border:          `2px solid ${theme('colors.deep.600')}`,
        flexShrink:      '0',
      },
      '.tide-avatar-sm': {
        width:     '2rem',
        height:    '2rem',
        fontSize:  '0.75rem',
      },
      '.tide-avatar-lg': {
        width:     '3.5rem',
        height:    '3.5rem',
        fontSize:  '1.25rem',
      },
      '.tide-avatar-xl': {
        width:     '5rem',
        height:    '5rem',
        fontSize:  '1.75rem',
      },
      '.tide-avatar-glow': {
        borderColor: theme('colors.biolume.500'),
        boxShadow:   '0 0 12px 2px rgba(0,232,191,0.4)',
      },

      // ── Section / Hero ─────────────────────────────────────────────────────
      '.tide-section': {
        paddingTop:    '5rem',
        paddingBottom: '5rem',
      },
      '.tide-section-sm': {
        paddingTop:    '3rem',
        paddingBottom: '3rem',
      },
      '.tide-section-lg': {
        paddingTop:    '8rem',
        paddingBottom: '8rem',
      },

      '.tide-hero': {
        position:   'relative',
        overflow:   'hidden',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        background: `radial-gradient(ellipse 120% 80% at 50% 0%, ${theme('colors.deep.900')} 0%, ${theme('colors.abyss.950')} 70%)`,
      },

      // ── Code block ─────────────────────────────────────────────────────────
      '.tide-code-block': {
        position:        'relative',
        backgroundColor: theme('colors.abyss.900'),
        border:          `1px solid ${theme('colors.deep.800')}`,
        borderRadius:    'var(--lt-radius-lg)',
        padding:         '1.25rem 1.5rem',
        fontFamily:      theme('fontFamily.mono'),
        fontSize:        '0.875rem',
        lineHeight:      '1.7',
        overflowX:       'auto',
        color:           theme('colors.foam.200'),
      },

      // ── Tooltip (pure CSS) ─────────────────────────────────────────────────
      '.tide-tooltip-wrap': {
        position: 'relative',
        display:  'inline-flex',
      },
      '.tide-tooltip': {
        position:        'absolute',
        bottom:          'calc(100% + 8px)',
        left:            '50%',
        transform:       'translateX(-50%)',
        whiteSpace:      'nowrap',
        backgroundColor: theme('colors.deep.800'),
        color:           theme('colors.foam.100'),
        fontSize:        '0.8125rem',
        fontWeight:      '500',
        padding:         '0.3rem 0.65rem',
        borderRadius:    'var(--lt-radius)',
        border:          `1px solid ${theme('colors.deep.600')}`,
        pointerEvents:   'none',
        opacity:         '0',
        transition:      'opacity 0.18s ease, transform 0.18s ease',
        zIndex:          '100',
        transformOrigin: 'bottom center',
      },
      '.tide-tooltip-wrap:hover .tide-tooltip': {
        opacity:   '1',
        transform: 'translateX(-50%) translateY(-2px)',
      },

      // ── Table ──────────────────────────────────────────────────────────────
      '.tide-table': {
        width:          '100%',
        borderCollapse: 'collapse',
        fontSize:       '0.9375rem',
      },
      '.tide-table thead': {
        borderBottom: `2px solid ${theme('colors.deep.700')}`,
      },
      '.tide-table th': {
        textAlign:   'left',
        padding:     '0.75rem 1rem',
        fontWeight:  '600',
        fontSize:    '0.8125rem',
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color:         theme('colors.foam.400'),
      },
      '.tide-table td': {
        padding:    '0.875rem 1rem',
        color:      theme('colors.foam.200'),
        borderBottom: `1px solid ${theme('colors.deep.900')}`,
      },
      '.tide-table tbody tr:hover td': {
        backgroundColor: theme('colors.abyss.800'),
      },

      // ── Stat card ──────────────────────────────────────────────────────────
      '.tide-stat': {
        display:       'flex',
        flexDirection: 'column',
        gap:           '0.375rem',
      },
      '.tide-stat-label': {
        fontSize:      '0.8125rem',
        fontWeight:    '500',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color:         theme('colors.foam.400'),
      },
      '.tide-stat-value': {
        fontSize:   '2.25rem',
        fontWeight: '800',
        lineHeight: '1',
        color:      theme('colors.foam.50'),
      },
      '.tide-stat-delta': {
        fontSize:   '0.875rem',
        fontWeight: '600',
        color:      theme('colors.biolume.400'),
      },
      '.tide-stat-delta-neg': {
        color: theme('colors.sand.400'),
      },

      // ── Tags ───────────────────────────────────────────────────────────────
      '.tide-tag': {
        display:         'inline-flex',
        alignItems:      'center',
        gap:             '0.25rem',
        paddingTop:      '0.2rem',
        paddingBottom:   '0.2rem',
        paddingLeft:     '0.5rem',
        paddingRight:    '0.5rem',
        borderRadius:    'var(--lt-radius)',
        fontSize:        '0.75rem',
        fontWeight:      '500',
        backgroundColor: theme('colors.abyss.800'),
        color:           theme('colors.foam.300'),
        border:          `1px solid ${theme('colors.deep.700')}`,
      },
    });

    // ── Utilities ────────────────────────────────────────────────────────────
    addUtilities({

      // Glow effects
      '.glow-current': {
        boxShadow: '0 0 20px 4px rgba(0,196,220,0.35)',
      },
      '.glow-biolume': {
        boxShadow: '0 0 20px 4px rgba(0,232,191,0.35)',
      },
      '.glow-tide': {
        boxShadow: '0 0 20px 4px rgba(0,160,189,0.35)',
      },
      '.text-glow-current': {
        textShadow: '0 0 16px rgba(0,196,220,0.7)',
      },
      '.text-glow-biolume': {
        textShadow: '0 0 16px rgba(0,232,191,0.7)',
      },

      // Gradient text
      '.text-gradient-tide': {
        background:         `linear-gradient(135deg, ${theme('colors.current.400')}, ${theme('colors.tide.300')})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor:  'transparent',
        backgroundClip:       'text',
      },
      '.text-gradient-biolume': {
        background:           `linear-gradient(135deg, ${theme('colors.biolume.400')}, ${theme('colors.current.300')})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor:  'transparent',
        backgroundClip:       'text',
      },
      '.text-gradient-deep': {
        background:           `linear-gradient(135deg, ${theme('colors.foam.100')}, ${theme('colors.tide.300')})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor:  'transparent',
        backgroundClip:       'text',
      },

      // Gradient backgrounds
      '.bg-gradient-ocean': {
        background: `linear-gradient(160deg, ${theme('colors.abyss.950')} 0%, ${theme('colors.deep.900')} 50%, ${theme('colors.tide.950')} 100%)`,
      },
      '.bg-gradient-current': {
        background: `linear-gradient(135deg, ${theme('colors.current.600')}, ${theme('colors.tide.500')})`,
      },
      '.bg-gradient-biolume': {
        background: `linear-gradient(135deg, ${theme('colors.biolume.600')}, ${theme('colors.current.500')})`,
      },
      '.bg-gradient-surface': {
        background: `radial-gradient(ellipse 100% 60% at 50% 0%, ${theme('colors.deep.900')} 0%, ${theme('colors.abyss.950')} 65%)`,
      },
      '.bg-gradient-hero': {
        background: `radial-gradient(ellipse 140% 80% at 50% -10%, ${theme('colors.tide.900')} 0%, ${theme('colors.deep.950')} 40%, ${theme('colors.abyss.950')} 70%)`,
      },

      // Wave lines (decorative border utilities)
      '.border-tide': {
        borderColor: theme('colors.tide.700'),
      },
      '.border-glow': {
        border:    `1px solid ${theme('colors.tide.600')}`,
        boxShadow: '0 0 8px 0 rgba(0,160,189,0.25)',
      },

      // Abyss surface panels
      '.surface': {
        backgroundColor: theme('colors.abyss.900'),
        border:          `1px solid ${theme('colors.deep.800')}`,
      },
      '.surface-raised': {
        backgroundColor: theme('colors.abyss.800'),
        border:          `1px solid ${theme('colors.deep.700')}`,
      },
      '.surface-sunken': {
        backgroundColor: theme('colors.abyss.950'),
        border:          `1px solid ${theme('colors.deep.900')}`,
      },

      // Text utilities
      '.text-muted': {
        color: theme('colors.foam.400'),
      },
      '.text-faint': {
        color: theme('colors.foam.500'),
      },
      '.text-bright': {
        color: theme('colors.foam.50'),
      },

      // Wave separator
      '.wave-line': {
        position:   'relative',
        overflow:   'hidden',
        paddingBottom: '1px',
      },
      '.wave-line::after': {
        content:    '""',
        display:    'block',
        height:     '2px',
        background: `linear-gradient(90deg, transparent 0%, ${theme('colors.tide.500')} 30%, ${theme('colors.current.400')} 60%, transparent 100%)`,
        marginTop:  '0.75rem',
      },

      // Focus ring
      '.focus-tide:focus-visible': {
        outline:      `2px solid ${theme('colors.tide.500')}`,
        outlineOffset: '3px',
      },
    });
  },
  {
    // ── Theme extension ──────────────────────────────────────────────────────
    theme: {
      extend: {
        colors,
        fontFamily: {
          sans: [
            'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont',
            '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif',
          ],
          display: [
            '"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif',
          ],
          mono: [
            '"Fira Code"', '"JetBrains Mono"', '"Cascadia Code"',
            'Menlo', 'Consolas', '"Courier New"', 'monospace',
          ],
        },
        borderRadius: {
          'tide':    '0.5rem',
          'tide-lg': '1rem',
          'tide-xl': '1.5rem',
        },
        boxShadow: {
          'tide':         '0 4px 32px 0 rgba(0,164,189,0.15)',
          'tide-lg':      '0 8px 48px 0 rgba(0,164,189,0.22)',
          'glow-current': '0 0 24px 4px rgba(0,196,220,0.28)',
          'glow-biolume': '0 0 24px 4px rgba(0,232,191,0.28)',
          'glow-tide':    '0 0 24px 4px rgba(0,160,189,0.28)',
          'inner-tide':   'inset 0 2px 12px 0 rgba(0,160,189,0.12)',
        },
        backgroundImage: {
          'gradient-ocean':   `linear-gradient(160deg, var(--tw-gradient-stops))`,
          'gradient-radial':  'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'noise':            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        },
        keyframes: {
          wave: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%':      { transform: 'translateY(-8px)' },
          },
          ripple: {
            '0%':   { transform: 'scale(0)', opacity: '0.5' },
            '100%': { transform: 'scale(3)', opacity: '0' },
          },
          drift: {
            '0%':   { transform: 'translateX(0) translateY(0)' },
            '33%':  { transform: 'translateX(6px) translateY(-4px)' },
            '66%':  { transform: 'translateX(-4px) translateY(4px)' },
            '100%': { transform: 'translateX(0) translateY(0)' },
          },
          shimmer: {
            '0%':   { backgroundPosition: '-200% center' },
            '100%': { backgroundPosition: '200% center' },
          },
          fadeIn: {
            from: { opacity: '0', transform: 'translateY(8px)' },
            to:   { opacity: '1', transform: 'translateY(0)' },
          },
          pulseGlow: {
            '0%, 100%': { boxShadow: '0 0 12px 2px rgba(0,196,220,0.2)' },
            '50%':      { boxShadow: '0 0 28px 6px rgba(0,196,220,0.5)' },
          },
          ticker: {
            '0%':   { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        },
        animation: {
          'wave':         'wave 3s ease-in-out infinite',
          'wave-slow':    'wave 5s ease-in-out infinite',
          'ripple':       'ripple 0.6s linear',
          'drift':        'drift 7s ease-in-out infinite',
          'shimmer':      'shimmer 2.5s linear infinite',
          'fade-in':      'fadeIn 0.4s ease forwards',
          'pulse-glow':   'pulseGlow 2.5s ease-in-out infinite',
          'ticker':       'ticker 24s linear infinite',
        },
        transitionTimingFunction: {
          'tide': 'cubic-bezier(0.4, 0, 0.2, 1)',
          'wave': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        },
      },
    },
  }
);

module.exports = laplaceTides;
