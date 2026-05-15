import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import './MermaidFlowchart.css';

let mermaidInitialized = false;

function ensureMermaidInit() {
    if (mermaidInitialized) return;
    mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        securityLevel: 'loose',
        flowchart: {
            htmlLabels: true,
            curve: 'basis',
            padding: 12,
        },
        themeVariables: {
            fontFamily: 'Plus Jakarta Sans, Outfit, system-ui, sans-serif',
            primaryColor: '#fef7e9',
            primaryTextColor: '#401d0c',
            primaryBorderColor: '#f7ab20',
            lineColor: '#7f4b10',
            secondaryColor: '#e8eaf6',
            tertiaryColor: '#ffffff',
        },
    });
    mermaidInitialized = true;
}

interface MermaidFlowchartProps {
    /** Unique DOM-safe id prefix for Mermaid render (e.g. section id). */
    chartId: string;
    /** Mermaid diagram source (without fenced code wrapper). */
    chart: string;
}

export default function MermaidFlowchart({ chartId, chart }: MermaidFlowchartProps) {
    const hostRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ensureMermaidInit();
        const host = hostRef.current;
        if (!host) return;

        const renderId = `mmd-${chartId.replace(/[^a-zA-Z0-9-_]/g, '-')}-${Math.random().toString(36).slice(2, 9)}`;
        let cancelled = false;

        mermaid
            .render(renderId, chart)
            .then(({ svg, bindFunctions }) => {
                if (cancelled) return;
                host.innerHTML = svg;
                bindFunctions?.(host);
            })
            .catch(() => {
                if (cancelled) return;
                host.textContent = 'Could not render flowchart.';
            });

        return () => {
            cancelled = true;
            host.innerHTML = '';
        };
    }, [chart, chartId]);

    return (
        <div
            ref={hostRef}
            className="mermaid-flowchart"
            role="img"
            aria-label="User flow diagram"
        />
    );
}
