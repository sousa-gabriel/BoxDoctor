//usado para sobreescrever o thema do styled componentes
import 'styled-components';
import theme from './themes';

declare module 'styled-components'{
    type ThemeType = typeof theme

    export interface DefaultTheme extends ThemeType{}
}