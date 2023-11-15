// src/jsx.d.ts
import React from 'react';

declare module 'react' {
    interface HTMLProps<T> extends React.HTMLProps<T> {
        // Adicione aqui as propriedades específicas dos elementos HTML
    }

    interface IntrinsicElements {
        // Adicione mapeamentos para elementos HTML padrão aqui
        div: HTMLProps<HTMLDivElement>;
        span: HTMLProps<HTMLSpanElement>;
        // Adicione outros elementos conforme necessário
    }
}
