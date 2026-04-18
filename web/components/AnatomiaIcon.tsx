type Props = { id: string; className?: string };

const stroke = "#0C0C0C";
const lacre = "#C4553A";
const sw = 1.25;

/**
 * 48 editorial SVG icons para /anatomia (16 capítulos alineados con manual Tramarca v4).
 * Pentagram-meets-Swiss: thin black line + Lacre accent. Cada icono mapea 1:1 al slug del
 * componente en `lib/anatomia.ts`.
 */
export function AnatomiaIcon({ id, className = "" }: Props) {
  const common = {
    viewBox: "0 0 120 90",
    fill: "none",
    stroke,
    strokeWidth: sw,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
  switch (id) {
    // ═══ I · PROVOCACIÓN ═══
    case "01-tesis":
      return (
        <svg {...common}>
          <text x="60" y="40" fontFamily="Georgia" fontSize="30" fontWeight="900" textAnchor="middle" stroke="none" fill={stroke}>&ldquo;</text>
          <line x1="24" y1="56" x2="96" y2="56" strokeWidth={2} />
          <circle cx="100" cy="56" r="3.5" fill={lacre} stroke="none" />
        </svg>
      );
    case "01-respuesta":
      return (
        <svg {...common}>
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(${10 + i * 26} 20)`}>
              <rect x="0" y="0" width="22" height="50" />
              <rect x="4" y="6" width="14" height="4" fill={i === 1 ? lacre : stroke} stroke="none" />
              <line x1="4" y1="18" x2="18" y2="18" strokeWidth={0.8} />
              <line x1="4" y1="24" x2="14" y2="24" strokeWidth={0.8} />
            </g>
          ))}
        </svg>
      );
    case "01-mercado":
      return (
        <svg {...common}>
          <line x1="12" y1="78" x2="108" y2="78" />
          {[0, 1, 2, 3].map((i) => {
            const heights = [60, 30, 14, 42];
            const x = 18 + i * 24;
            const h = heights[i];
            return <rect key={i} x={x} y={78 - h} width="16" height={h} fill={i === 3 ? lacre : stroke} stroke="none" />;
          })}
          <text x="88" y="12" fontFamily="monospace" fontSize="7" stroke="none" fill={lacre}>TM</text>
        </svg>
      );

    // ═══ II · PERSONAS ═══
    case "02-audiencia-interna":
      return (
        <svg {...common}>
          <circle cx="60" cy="30" r="10" />
          <path d="M42 72 Q60 50 78 72 Z" />
          <circle cx="60" cy="30" r="3" fill={lacre} stroke="none" />
          <line x1="12" y1="82" x2="108" y2="82" strokeWidth={0.8} strokeDasharray="2 2" />
        </svg>
      );
    case "02-audiencia-externa":
      return (
        <svg {...common}>
          <circle cx="30" cy="45" r="10" />
          <circle cx="60" cy="45" r="10" fill={lacre} stroke="none" />
          <circle cx="90" cy="45" r="10" />
          <line x1="40" y1="45" x2="50" y2="45" strokeWidth={0.8} />
          <line x1="70" y1="45" x2="80" y2="45" strokeWidth={0.8} />
        </svg>
      );
    case "02-friccion":
      return (
        <svg {...common}>
          <path d="M12 70 Q 30 30 60 60 Q 90 90 108 40" strokeWidth={1.6} />
          <circle cx="60" cy="60" r="4" fill={lacre} stroke="none" />
          <line x1="56" y1="56" x2="64" y2="64" stroke={lacre} strokeWidth={1.8} />
          <line x1="64" y1="56" x2="56" y2="64" stroke={lacre} strokeWidth={1.8} />
        </svg>
      );

    // ═══ III · FUNDAMENTOS ═══
    case "03-proposito":
      return (
        <svg {...common}>
          <circle cx="60" cy="72" r="3" fill={lacre} stroke="none" />
          <path d="M60 72 L60 22" />
          <path d="M56 28 L60 22 L64 28" />
        </svg>
      );
    case "03-vision":
      return (
        <svg {...common}>
          <path d="M15 45 Q60 10 105 45 Q60 80 15 45 Z" />
          <circle cx="60" cy="45" r="11" fill={lacre} stroke="none" />
          <circle cx="60" cy="45" r="4" fill="#F4F0EB" stroke="none" />
        </svg>
      );
    case "03-valores":
      return (
        <svg {...common}>
          <ellipse cx="60" cy="20" rx="24" ry="5" />
          <ellipse cx="60" cy="40" rx="28" ry="5.5" fill={lacre} stroke="none" />
          <ellipse cx="60" cy="60" rx="22" ry="5" />
          <ellipse cx="60" cy="78" rx="26" ry="5.5" />
        </svg>
      );
    case "03-personalidad":
      return (
        <svg {...common}>
          <path d="M60 10 L60 80" />
          <path d="M40 80 C 40 60 30 50 38 40 C 34 28 42 14 60 14" />
          <path d="M60 14 C 78 14 86 28 82 40 C 90 50 80 60 80 80 Z" fill={lacre} stroke="none" />
        </svg>
      );

    // ═══ IV · SISTEMA DE LOGO ═══
    case "04-marca-principal":
      return (
        <svg {...common}>
          {[18, 36, 54, 72, 90, 108].map((x) => (
            <line key={`v${x}`} x1={x} y1="10" x2={x} y2="80" stroke="#0C0C0C22" strokeDasharray="2 3" />
          ))}
          {[15, 30, 45, 60, 75].map((y) => (
            <line key={`h${y}`} x1="15" y1={y} x2="105" y2={y} stroke="#0C0C0C22" strokeDasharray="2 3" />
          ))}
          <text x="60" y="58" fontFamily="Georgia, serif" fontSize="40" fontWeight="900" textAnchor="middle" fill={stroke} stroke="none">T</text>
          <circle cx="78" cy="56" r="2.5" fill={lacre} stroke="none" />
        </svg>
      );
    case "04-variantes":
      return (
        <svg {...common}>
          <rect x="8" y="30" width="30" height="30" />
          <text x="23" y="52" fontFamily="Georgia" fontSize="18" fontWeight="900" textAnchor="middle" stroke="none" fill={stroke}>T</text>
          <rect x="46" y="26" width="34" height="38" />
          <text x="63" y="48" fontFamily="Georgia" fontSize="14" fontWeight="900" textAnchor="middle" stroke="none" fill={stroke}>TM</text>
          <circle cx="60" cy="56" r="1.5" fill={lacre} stroke="none" />
          <rect x="88" y="34" width="24" height="22" />
          <circle cx="100" cy="45" r="5" fill={lacre} stroke="none" />
        </svg>
      );
    case "04-zona-exclusion":
      return (
        <svg {...common}>
          <rect x="40" y="25" width="40" height="40" />
          <rect x="30" y="15" width="60" height="60" strokeDasharray="3 2" />
          <rect x="20" y="5" width="80" height="80" strokeDasharray="2 3" opacity="0.5" />
          <text x="60" y="52" fontFamily="Georgia" fontSize="22" fontWeight="900" textAnchor="middle" stroke="none" fill={stroke}>T</text>
          <line x1="38" y1="45" x2="32" y2="45" />
          <line x1="82" y1="45" x2="88" y2="45" />
        </svg>
      );
    case "04-usos-incorrectos":
      return (
        <svg {...common}>
          {[
            { x: 10, y: 10, skew: "scale(1.6,0.7)" },
            { x: 66, y: 10, skew: "rotate(20)" },
            { x: 10, y: 50, skew: "" },
            { x: 66, y: 50, skew: "scale(0.6,1.4)" },
          ].map((c, i) => (
            <g key={i} transform={`translate(${c.x} ${c.y})`}>
              <rect x="0" y="0" width="44" height="32" />
              <g transform={`translate(22 16) ${c.skew}`}>
                <text x="0" y="6" fontFamily="Georgia" fontSize="16" fontWeight="900" textAnchor="middle" stroke="none" fill={stroke}>T</text>
              </g>
              <line x1="0" y1="0" x2="44" y2="32" stroke={lacre} strokeWidth={2} />
            </g>
          ))}
        </svg>
      );

    // ═══ V · TIPOGRAFÍA ═══
    case "05-display":
      return (
        <svg {...common}>
          <text x="-8" y="80" fontFamily="Georgia, serif" fontSize="110" fontWeight="900" stroke="none" fill={stroke}>A</text>
          <circle cx="95" cy="72" r="3.5" fill={lacre} stroke="none" />
        </svg>
      );
    case "05-texto":
      return (
        <svg {...common}>
          {[20, 32, 44, 56, 68].map((y, i) => (
            <line key={y} x1="15" y1={y} x2={i === 4 ? 75 : 105} y2={y} strokeWidth={1} />
          ))}
        </svg>
      );
    case "05-jerarquia":
      return (
        <svg {...common}>
          <rect x="15" y="12" width="90" height="9" fill={lacre} stroke="none" />
          <rect x="15" y="28" width="72" height="7" fill={stroke} stroke="none" />
          <rect x="15" y="44" width="54" height="5" fill={stroke} stroke="none" />
          <rect x="15" y="58" width="40" height="4" fill={stroke} stroke="none" />
          <rect x="15" y="70" width="28" height="3" fill={stroke} stroke="none" />
        </svg>
      );

    // ═══ VI · COLOR ═══
    case "06-primarios":
      return (
        <svg {...common}>
          <rect x="15" y="12" width="28" height="66" fill={stroke} stroke="none" />
          <rect x="46" y="12" width="28" height="66" fill="#F4F0EB" stroke={stroke} />
          <rect x="77" y="12" width="28" height="66" fill={lacre} stroke="none" />
          <path d="M29 78 L29 83 M60 78 L60 82 M91 78 L91 84" stroke={stroke} />
        </svg>
      );
    case "06-secundarios":
      return (
        <svg {...common}>
          <circle cx="60" cy="45" r="32" />
          <path d="M60 45 L60 13 A 32 32 0 0 1 90 55 Z" fill={stroke} stroke="none" />
          <path d="M60 45 L90 55 A 32 32 0 0 1 76 74 Z" fill={lacre} stroke="none" />
        </svg>
      );
    case "06-valores-pantone":
      return (
        <svg {...common}>
          <rect x="28" y="12" width="64" height="66" fill={lacre} stroke="none" />
          <path d="M92 12 L80 24 L92 24 Z" fill="#F4F0EB" stroke={stroke} />
          <rect x="28" y="60" width="64" height="18" fill="#F4F0EB" stroke={stroke} />
          <line x1="34" y1="68" x2="60" y2="68" strokeWidth={0.8} />
          <line x1="34" y1="73" x2="50" y2="73" strokeWidth={0.8} />
        </svg>
      );

    // ═══ VII · ICONOGRAFÍA ═══
    case "07-trazo":
      return (
        <svg {...common}>
          <path d="M30 65 L50 35 L70 55 L90 25" strokeWidth={2} />
          <circle cx="30" cy="65" r="3" fill={lacre} stroke="none" />
          <circle cx="90" cy="25" r="3" fill={lacre} stroke="none" />
        </svg>
      );
    case "07-coleccion":
      return (
        <svg {...common}>
          {Array.from({ length: 9 }).map((_, i) => {
            const x = 18 + (i % 3) * 30;
            const y = 10 + Math.floor(i / 3) * 26;
            return (
              <g key={i} transform={`translate(${x} ${y})`}>
                {i === 4 ? (
                  <circle cx="10" cy="10" r="8" fill={lacre} stroke="none" />
                ) : (
                  <>
                    <rect x="2" y="2" width="16" height="16" />
                    {i % 2 === 0 && <line x1="2" y1="2" x2="18" y2="18" />}
                    {i % 3 === 0 && <circle cx="10" cy="10" r="4" />}
                  </>
                )}
              </g>
            );
          })}
        </svg>
      );

    // ═══ VIII · FOTOGRAFÍA ═══
    case "08-direccion":
      return (
        <svg {...common}>
          <rect x="18" y="12" width="84" height="66" />
          <line x1="60" y1="30" x2="60" y2="60" />
          <line x1="45" y1="45" x2="75" y2="45" />
          <circle cx="60" cy="45" r="3" fill={lacre} stroke="none" />
          <path d="M18 12 L26 12 L26 18 M112 6 L112 18 L102 18" transform="translate(-10 0)" />
        </svg>
      );
    case "08-tratamiento":
      return (
        <svg {...common}>
          <rect x="10" y="22" width="100" height="46" />
          {[14, 26, 38, 50, 62, 74, 86, 98].map((y) => (
            <circle key={y} cx={y + 2} cy="22" r="1.2" fill={stroke} stroke="none" />
          ))}
          <rect x="16" y="28" width="28" height="34" />
          <rect x="46" y="28" width="28" height="34" fill={lacre} stroke="none" />
          <rect x="76" y="28" width="28" height="34" />
        </svg>
      );
    case "08-moodboard":
      return (
        <svg {...common}>
          {Array.from({ length: 12 }).map((_, i) => {
            const x = 8 + (i % 4) * 26;
            const y = 8 + Math.floor(i / 4) * 24;
            const accent = i === 5;
            return <rect key={i} x={x} y={y} width="22" height="20" fill={accent ? lacre : "none"} stroke={accent ? "none" : stroke} />;
          })}
        </svg>
      );

    // ═══ IX · VOZ Y TONO ═══
    case "09-principios":
      return (
        <svg {...common}>
          <text x="20" y="68" fontFamily="Georgia" fontSize="80" fontWeight="900" stroke="none" fill={stroke}>&ldquo;</text>
          <text x="62" y="68" fontFamily="Georgia" fontSize="80" fontWeight="900" stroke="none" fill={lacre}>&rdquo;</text>
        </svg>
      );
    case "09-registro":
      return (
        <svg {...common}>
          <path d="M50 12 L50 60 C 50 70 55 78 60 78 C 65 78 70 70 70 60 L70 12" />
          <line x1="50" y1="12" x2="70" y2="12" />
          <circle cx="60" cy="40" r="3.5" fill={lacre} stroke="none" />
        </svg>
      );
    case "09-glosario":
      return (
        <svg {...common}>
          <path d="M18 20 L60 14 L102 20 L102 72 L60 68 L18 72 Z" />
          <line x1="60" y1="14" x2="60" y2="68" />
          <path d="M70 14 L70 38 L76 34 L82 38 L82 14" fill={lacre} stroke={lacre} />
        </svg>
      );
    case "09-prohibidas":
      return (
        <svg {...common}>
          {[22, 40, 58].map((y, i) => (
            <g key={y}>
              <line x1="18" y1={y} x2={90 - i * 10} y2={y} strokeWidth={1.5} />
              <line x1="14" y1={y} x2={94 - i * 10} y2={y} stroke={lacre} strokeWidth={2} />
            </g>
          ))}
        </svg>
      );

    // ═══ X · APLICACIONES ═══
    case "10-papeleria":
      return (
        <svg {...common}>
          <rect x="14" y="50" width="70" height="28" transform="rotate(-4 14 50)" />
          <rect x="22" y="40" width="72" height="30" transform="rotate(2 22 40)" />
          <rect x="30" y="30" width="74" height="32" />
          <circle cx="95" cy="46" r="3" fill={lacre} stroke="none" />
          <line x1="38" y1="48" x2="76" y2="48" strokeWidth={0.8} />
          <line x1="38" y1="54" x2="64" y2="54" strokeWidth={0.8} />
        </svg>
      );
    case "10-digital":
      return (
        <svg {...common}>
          <rect x="10" y="18" width="60" height="44" rx="2" />
          <line x1="10" y1="56" x2="70" y2="56" />
          <rect x="34" y="64" width="12" height="3" />
          <rect x="78" y="14" width="26" height="54" rx="3" />
          <circle cx="91" cy="62" r="1.5" fill={lacre} stroke="none" />
          <line x1="18" y1="28" x2="56" y2="28" strokeWidth={0.8} />
          <line x1="18" y1="34" x2="48" y2="34" strokeWidth={0.8} />
          <line x1="84" y1="22" x2="98" y2="22" strokeWidth={0.8} />
          <line x1="84" y1="28" x2="94" y2="28" strokeWidth={0.8} />
        </svg>
      );
    case "10-merch":
      return (
        <svg {...common}>
          <path d="M44 18 Q60 6 76 18" />
          <path d="M32 22 L36 78 L84 78 L88 22 Z" />
          <circle cx="60" cy="48" r="6" fill={lacre} stroke="none" />
        </svg>
      );
    case "10-senaletica":
      return (
        <svg {...common}>
          <line x1="40" y1="80" x2="40" y2="20" />
          <path d="M40 20 L80 20 L90 30 L80 40 L40 40 Z" />
          <line x1="50" y1="30" x2="78" y2="30" strokeWidth={0.8} />
          <path d="M85 30 L92 30" stroke={lacre} strokeWidth={2.5} />
          <path d="M88 27 L92 30 L88 33" stroke={lacre} strokeWidth={2} />
        </svg>
      );

    // ═══ XI · ARQUITECTURA ═══
    case "11-marca-producto":
      return (
        <svg {...common}>
          <circle cx="60" cy="18" r="8" fill={lacre} stroke="none" />
          <line x1="60" y1="26" x2="60" y2="40" />
          <line x1="30" y1="50" x2="90" y2="50" />
          <line x1="30" y1="40" x2="30" y2="50" />
          <line x1="60" y1="40" x2="60" y2="50" />
          <line x1="90" y1="40" x2="90" y2="50" />
          <circle cx="30" cy="62" r="6" />
          <circle cx="60" cy="62" r="6" />
          <circle cx="90" cy="62" r="6" />
        </svg>
      );
    case "11-co-branding":
      return (
        <svg {...common}>
          <circle cx="46" cy="45" r="26" />
          <circle cx="74" cy="45" r="26" stroke={lacre} />
          <path d="M60 22 A 26 26 0 0 1 60 68 A 26 26 0 0 1 60 22 Z" fill={lacre} fillOpacity="0.18" stroke="none" />
        </svg>
      );

    // ═══ XII · GOVERNANCE ═══
    case "12-checklist":
      return (
        <svg {...common}>
          <rect x="22" y="10" width="76" height="70" />
          <rect x="52" y="6" width="16" height="8" rx="1" />
          {[26, 38, 50, 62, 74].map((y, i) => (
            <g key={y}>
              <line x1="32" y1={y} x2="86" y2={y} strokeWidth={0.8} />
              {i < 3 && (
                <path d="M32 0 L35 3 L40 -3" transform={`translate(-6 ${y})`} stroke={lacre} strokeWidth={1.8} />
              )}
            </g>
          ))}
        </svg>
      );
    case "12-aprobacion":
      return (
        <svg {...common}>
          <path d="M40 12 L40 36 L32 40 L32 50 L88 50 L88 40 L80 36 L80 12" />
          <circle cx="60" cy="68" r="16" fill={lacre} stroke="none" />
          <text x="60" y="72" fontFamily="monospace" fontSize="6" textAnchor="middle" stroke="none" fill="#F4F0EB">OK</text>
        </svg>
      );
    case "12-versionado":
      return (
        <svg {...common}>
          <rect x="14" y="50" width="36" height="30" />
          <rect x="42" y="34" width="36" height="30" />
          <rect x="70" y="18" width="36" height="30" fill={lacre} stroke="none" />
          <path d="M28 50 L28 44 M56 34 L56 28 M88 18 L88 12" />
          <path d="M24 48 L28 44 L32 48 M52 32 L56 28 L60 32 M84 16 L88 12 L92 16" />
        </svg>
      );

    // ═══ XIII · MARCA EN MOVIMIENTO ═══
    case "13-motion-logo":
      return (
        <svg {...common}>
          <circle cx="32" cy="45" r="10" strokeDasharray="1 3" opacity="0.4" />
          <circle cx="60" cy="45" r="14" strokeDasharray="2 3" opacity="0.7" />
          <circle cx="88" cy="45" r="18" fill={lacre} stroke="none" />
          <path d="M14 45 L102 45" strokeWidth={0.5} strokeDasharray="2 4" opacity="0.5" />
          <path d="M98 42 L104 45 L98 48" strokeWidth={1} />
        </svg>
      );
    case "13-microinteracciones":
      return (
        <svg {...common}>
          <rect x="22" y="30" width="76" height="30" rx="3" />
          <circle cx="38" cy="45" r="4" fill={lacre} stroke="none" />
          <path d="M30 68 Q40 76 50 68" strokeWidth={1.5} />
          <path d="M48 66 L52 70 L48 70" strokeWidth={1.5} fill="none" />
          <line x1="60" y1="45" x2="90" y2="45" strokeWidth={1} />
        </svg>
      );
    case "13-video":
      return (
        <svg {...common}>
          <rect x="14" y="20" width="92" height="50" />
          <path d="M50 32 L70 45 L50 58 Z" fill={lacre} stroke="none" />
          <line x1="14" y1="74" x2="58" y2="74" strokeWidth={0.8} />
          <line x1="14" y1="78" x2="40" y2="78" strokeWidth={0.8} />
          <rect x="14" y="20" width="4" height="50" fill={stroke} stroke="none" opacity="0.4" />
          <rect x="102" y="20" width="4" height="50" fill={stroke} stroke="none" opacity="0.4" />
        </svg>
      );

    // ═══ XIV · EXTENSIONES ═══
    case "14-accesibilidad":
      return (
        <svg {...common}>
          <circle cx="60" cy="45" r="30" />
          <circle cx="60" cy="24" r="4" fill={stroke} stroke="none" />
          <path d="M44 36 L76 36 M48 36 L52 70 L56 56 L64 56 L68 70 L72 36" />
          <path d="M82 45 A 22 22 0 0 1 82 55" stroke={lacre} strokeWidth={1.8} />
          <path d="M90 40 A 30 30 0 0 1 90 60" stroke={lacre} strokeWidth={1.8} />
        </svg>
      );
    case "14-digital-ui":
      return (
        <svg {...common}>
          <rect x="10" y="14" width="100" height="62" rx="2" />
          <line x1="10" y1="26" x2="110" y2="26" />
          <circle cx="16" cy="20" r="1.5" fill={stroke} stroke="none" />
          <circle cx="22" cy="20" r="1.5" fill={stroke} stroke="none" />
          <rect x="16" y="32" width="36" height="38" />
          <rect x="56" y="32" width="50" height="18" fill={lacre} stroke="none" />
          <rect x="56" y="54" width="50" height="16" />
          <line x1="60" y1="60" x2="96" y2="60" strokeWidth={0.8} />
          <line x1="60" y1="64" x2="88" y2="64" strokeWidth={0.8} />
        </svg>
      );
    case "14-territorial":
      return (
        <svg {...common}>
          <circle cx="60" cy="45" r="30" />
          <ellipse cx="60" cy="45" rx="30" ry="12" />
          <ellipse cx="60" cy="45" rx="12" ry="30" />
          <path d="M30 45 Q42 30 60 30 Q78 30 90 45" />
          <path d="M30 45 Q42 60 60 60 Q78 60 90 45" />
          <circle cx="60" cy="45" r="3" fill={lacre} stroke="none" />
        </svg>
      );

    // ═══ XV · SERVICIO ═══
    case "15-proceso":
      return (
        <svg {...common}>
          {[0, 1, 2, 3, 4].map((i) => {
            const x = 16 + i * 22;
            return (
              <g key={i}>
                <circle cx={x} cy="45" r="6" fill={i === 4 ? lacre : "none"} stroke={stroke} />
                <text x={x} y="47" fontFamily="monospace" fontSize="4.5" textAnchor="middle" stroke="none" fill={i === 4 ? "#F4F0EB" : stroke}>0{i + 1}</text>
                {i < 4 && <line x1={x + 6} y1="45" x2={x + 16} y2="45" strokeWidth={0.8} />}
              </g>
            );
          })}
        </svg>
      );
    case "15-entrega":
      return (
        <svg {...common}>
          <path d="M60 16 L96 30 L96 62 L60 78 L24 62 L24 30 Z" />
          <path d="M24 30 L60 46 L96 30" strokeWidth={0.8} />
          <line x1="60" y1="46" x2="60" y2="78" strokeWidth={0.8} />
          <circle cx="60" cy="46" r="3" fill={lacre} stroke="none" />
        </svg>
      );
    case "15-post-entrega":
      return (
        <svg {...common}>
          <circle cx="60" cy="45" r="28" />
          <path d="M60 17 A 28 28 0 0 1 88 45" stroke={lacre} strokeWidth={2.5} />
          <path d="M82 38 L88 45 L95 38" stroke={lacre} strokeWidth={1.8} />
          <text x="60" y="52" fontFamily="monospace" fontSize="10" fontWeight="700" textAnchor="middle" stroke="none" fill={stroke}>30d</text>
        </svg>
      );

    // ═══ XVI · PORTFOLIO ═══
    case "16-casos":
      return (
        <svg {...common}>
          {[0, 1, 2, 3, 4].map((i) => {
            const y = 12 + i * 14;
            return (
              <g key={i}>
                <rect x="20" y={y} width="16" height="10" fill={i === 4 ? lacre : "none"} stroke={stroke} />
                <line x1="40" y1={y + 5} x2="92" y2={y + 5} strokeWidth={0.8} />
              </g>
            );
          })}
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <circle cx="60" cy="45" r="20" />
          <circle cx="60" cy="45" r="4" fill={lacre} stroke="none" />
        </svg>
      );
  }
}
