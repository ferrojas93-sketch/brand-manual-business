type Props = { id: string; className?: string };

const stroke = "#0C0C0C";
const lacre = "#C4553A";
const sw = 1.25;

/**
 * 40 editorial SVG icons for /anatomia. Pentagram-meets-Swiss: thin black line + Lacre accent.
 * Slugs map 1:1 to the content array.
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
    // 01 FUNDAMENTOS
    case "01-proposito":
      return (
        <svg {...common}>
          <circle cx="60" cy="72" r="3" fill={lacre} stroke="none" />
          <path d="M60 72 L60 22" />
          <path d="M56 28 L60 22 L64 28" />
        </svg>
      );
    case "01-vision":
      return (
        <svg {...common}>
          <path d="M15 45 Q60 10 105 45 Q60 80 15 45 Z" />
          <circle cx="60" cy="45" r="11" fill={lacre} stroke="none" />
          <circle cx="60" cy="45" r="4" fill="#F4F0EB" stroke="none" />
        </svg>
      );
    case "01-valores":
      return (
        <svg {...common}>
          <ellipse cx="60" cy="20" rx="24" ry="5" />
          <ellipse cx="60" cy="40" rx="28" ry="5.5" fill={lacre} stroke="none" />
          <ellipse cx="60" cy="60" rx="22" ry="5" />
          <ellipse cx="60" cy="78" rx="26" ry="5.5" />
        </svg>
      );
    case "01-personalidad":
      return (
        <svg {...common}>
          <path d="M60 10 L60 80" />
          <path d="M40 80 C 40 60 30 50 38 40 C 34 28 42 14 60 14" />
          <path d="M60 14 C 78 14 86 28 82 40 C 90 50 80 60 80 80 Z" fill={lacre} stroke="none" />
        </svg>
      );

    // 02 LOGO SYSTEM
    case "02-marca-principal":
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
    case "02-variantes":
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
    case "02-zona-exclusion":
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
    case "02-usos-incorrectos":
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

    // 03 TIPOGRAFÍA
    case "03-display":
      return (
        <svg {...common}>
          <text x="-8" y="80" fontFamily="Georgia, serif" fontSize="110" fontWeight="900" stroke="none" fill={stroke}>A</text>
          <circle cx="95" cy="72" r="3.5" fill={lacre} stroke="none" />
        </svg>
      );
    case "03-texto":
      return (
        <svg {...common}>
          {[20, 32, 44, 56, 68].map((y, i) => (
            <line key={y} x1="15" y1={y} x2={i === 4 ? 75 : 105} y2={y} strokeWidth={1} />
          ))}
        </svg>
      );
    case "03-jerarquia":
      return (
        <svg {...common}>
          <rect x="15" y="12" width="90" height="9" fill={lacre} stroke="none" />
          <rect x="15" y="28" width="72" height="7" fill={stroke} stroke="none" />
          <rect x="15" y="44" width="54" height="5" fill={stroke} stroke="none" />
          <rect x="15" y="58" width="40" height="4" fill={stroke} stroke="none" />
          <rect x="15" y="70" width="28" height="3" fill={stroke} stroke="none" />
        </svg>
      );
    case "03-escalas":
      return (
        <svg {...common}>
          <line x1="25" y1="10" x2="25" y2="80" />
          {[14, 22, 32, 44, 58, 74].map((y, i) => (
            <g key={y}>
              <line x1="25" y1={y} x2={25 + 6 + i * 2} y2={y} />
              <line x1={40 + i * 4} y1={y} x2={70 + i * 6} y2={y} strokeWidth={1 + i * 0.4} stroke={i === 0 ? lacre : stroke} />
            </g>
          ))}
        </svg>
      );

    // 04 COLOR
    case "04-primarios":
      return (
        <svg {...common}>
          <rect x="15" y="12" width="28" height="66" fill={stroke} stroke="none" />
          <rect x="46" y="12" width="28" height="66" fill="#F4F0EB" stroke={stroke} />
          <rect x="77" y="12" width="28" height="66" fill={lacre} stroke="none" />
          <path d="M29 78 L29 83 M60 78 L60 82 M91 78 L91 84" stroke={stroke} />
        </svg>
      );
    case "04-secundarios":
      return (
        <svg {...common}>
          {[0, 1, 2].map((c) =>
            [0, 1].map((r) => (
              <g key={`${c}${r}`}>
                <rect x={15 + c * 30} y={12 + r * 34} width="24" height="20" fill={r === 0 && c === 1 ? lacre : "none"} />
                <line x1={15 + c * 30} y1={35 + r * 34} x2={39 + c * 30} y2={35 + r * 34} strokeWidth={0.8} />
              </g>
            )),
          )}
        </svg>
      );
    case "04-usos-jerarquia":
      return (
        <svg {...common}>
          <circle cx="60" cy="45" r="32" />
          <path d="M60 45 L60 13 A 32 32 0 0 1 90 55 Z" fill={stroke} stroke="none" />
          <path d="M60 45 L90 55 A 32 32 0 0 1 76 74 Z" fill={lacre} stroke="none" />
        </svg>
      );
    case "04-valores-pantone":
      return (
        <svg {...common}>
          <rect x="28" y="12" width="64" height="66" fill={lacre} stroke="none" />
          <path d="M92 12 L80 24 L92 24 Z" fill="#F4F0EB" stroke={stroke} />
          <rect x="28" y="60" width="64" height="18" fill="#F4F0EB" stroke={stroke} />
          <line x1="34" y1="68" x2="60" y2="68" strokeWidth={0.8} />
          <line x1="34" y1="73" x2="50" y2="73" strokeWidth={0.8} />
        </svg>
      );

    // 05 ICONOGRAFÍA
    case "05-trazo":
      return (
        <svg {...common}>
          <path d="M30 65 L50 35 L70 55 L90 25" strokeWidth={2} />
          <circle cx="30" cy="65" r="3" fill={lacre} stroke="none" />
          <circle cx="90" cy="25" r="3" fill={lacre} stroke="none" />
        </svg>
      );
    case "05-tamanos":
      return (
        <svg {...common}>
          {[{ s: 6, x: 18 }, { s: 10, x: 38 }, { s: 14, x: 62 }, { s: 20, x: 92 }].map((c) => (
            <circle key={c.x} cx={c.x} cy="40" r={c.s} />
          ))}
          {[18, 38, 62, 92].map((x) => (
            <line key={x} x1={x} y1="72" x2={x} y2="76" />
          ))}
        </svg>
      );
    case "05-coleccion":
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
    case "05-icono-donts":
      return (
        <svg {...common}>
          {[0, 1, 2, 3].map((i) => {
            const x = 12 + (i % 4) * 26;
            return (
              <g key={i} transform={`translate(${x} 28)`}>
                <rect x="0" y="0" width="22" height="22" />
                <circle cx="11" cy="11" r="6" />
                {i > 0 && <line x1="0" y1="0" x2="22" y2="22" stroke={lacre} strokeWidth={1.8} />}
              </g>
            );
          })}
        </svg>
      );

    // 06 FOTOGRAFÍA
    case "06-direccion":
      return (
        <svg {...common}>
          <rect x="18" y="12" width="84" height="66" />
          <line x1="60" y1="30" x2="60" y2="60" />
          <line x1="45" y1="45" x2="75" y2="45" />
          <circle cx="60" cy="45" r="3" fill={lacre} stroke="none" />
          <path d="M18 12 L26 12 L26 18 M112 6 L112 18 L102 18" transform="translate(-10 0)" />
        </svg>
      );
    case "06-tratamiento":
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
    case "06-composicion":
      return (
        <svg {...common}>
          <rect x="10" y="10" width="100" height="70" />
          <line x1="43" y1="10" x2="43" y2="80" strokeDasharray="2 3" />
          <line x1="76" y1="10" x2="76" y2="80" strokeDasharray="2 3" />
          <line x1="10" y1="33" x2="110" y2="33" strokeDasharray="2 3" />
          <line x1="10" y1="57" x2="110" y2="57" strokeDasharray="2 3" />
          <circle cx="76" cy="33" r="4" fill={lacre} stroke="none" />
        </svg>
      );
    case "06-moodboard":
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

    // 07 VOZ
    case "07-principios":
      return (
        <svg {...common}>
          <text x="20" y="68" fontFamily="Georgia" fontSize="80" fontWeight="900" stroke="none" fill={stroke}>&ldquo;</text>
          <text x="62" y="68" fontFamily="Georgia" fontSize="80" fontWeight="900" stroke="none" fill={lacre}>&rdquo;</text>
        </svg>
      );
    case "07-registro":
      return (
        <svg {...common}>
          <path d="M50 12 L50 60 C 50 70 55 78 60 78 C 65 78 70 70 70 60 L70 12" />
          <line x1="50" y1="12" x2="70" y2="12" />
          <circle cx="60" cy="40" r="3.5" fill={lacre} stroke="none" />
        </svg>
      );
    case "07-glosario":
      return (
        <svg {...common}>
          <path d="M18 20 L60 14 L102 20 L102 72 L60 68 L18 72 Z" />
          <line x1="60" y1="14" x2="60" y2="68" />
          <path d="M70 14 L70 38 L76 34 L82 38 L82 14" fill={lacre} stroke={lacre} />
        </svg>
      );
    case "07-prohibidas":
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

    // 08 APLICACIONES
    case "08-papeleria":
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
    case "08-digital":
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
    case "08-merch":
      return (
        <svg {...common}>
          <path d="M44 18 Q60 6 76 18" />
          <path d="M32 22 L36 78 L84 78 L88 22 Z" />
          <circle cx="60" cy="48" r="6" fill={lacre} stroke="none" />
        </svg>
      );
    case "08-senaletica":
      return (
        <svg {...common}>
          <line x1="40" y1="80" x2="40" y2="20" />
          <path d="M40 20 L80 20 L90 30 L80 40 L40 40 Z" />
          <line x1="50" y1="30" x2="78" y2="30" strokeWidth={0.8} />
          <path d="M85 30 L92 30" stroke={lacre} strokeWidth={2.5} />
          <path d="M88 27 L92 30 L88 33" stroke={lacre} strokeWidth={2} />
        </svg>
      );

    // 09 ARCHITECTURE
    case "09-marca-producto":
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
    case "09-co-branding":
      return (
        <svg {...common}>
          <circle cx="46" cy="45" r="26" />
          <circle cx="74" cy="45" r="26" stroke={lacre} />
          <path d="M60 22 A 26 26 0 0 1 60 68 A 26 26 0 0 1 60 22 Z" fill={lacre} fillOpacity="0.18" stroke="none" />
        </svg>
      );
    case "09-submarcas":
      return (
        <svg {...common}>
          <rect x="10" y="28" width="28" height="34" />
          <text x="24" y="52" fontFamily="Georgia" fontSize="16" fontWeight="900" textAnchor="middle" stroke="none" fill={stroke}>T</text>
          <line x1="38" y1="45" x2="54" y2="45" />
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${54 + i * 20} 34)`}>
              <rect x="0" y="0" width="16" height="22" />
              <circle cx="8" cy="11" r="3" fill={i === 1 ? lacre : stroke} stroke="none" />
            </g>
          ))}
        </svg>
      );
    case "09-endorsement":
      return (
        <svg {...common}>
          <rect x="25" y="18" width="70" height="44" />
          <text x="60" y="50" fontFamily="Georgia" fontSize="26" fontWeight="900" textAnchor="middle" stroke="none" fill={stroke}>T</text>
          <line x1="35" y1="72" x2="85" y2="72" stroke={lacre} strokeWidth={2.5} />
          <text x="60" y="82" fontFamily="monospace" fontSize="5" textAnchor="middle" stroke="none" fill={lacre}>BY TRAMARCA</text>
        </svg>
      );

    // 10 GOVERNANCE
    case "10-checklist":
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
    case "10-aprobacion":
      return (
        <svg {...common}>
          <path d="M40 12 L40 36 L32 40 L32 50 L88 50 L88 40 L80 36 L80 12" />
          <circle cx="60" cy="68" r="16" fill={lacre} stroke="none" />
          <text x="60" y="72" fontFamily="monospace" fontSize="6" textAnchor="middle" stroke="none" fill="#F4F0EB">OK</text>
        </svg>
      );
    case "10-versionado":
      return (
        <svg {...common}>
          <rect x="14" y="50" width="36" height="30" />
          <rect x="42" y="34" width="36" height="30" />
          <rect x="70" y="18" width="36" height="30" fill={lacre} stroke="none" />
          <path d="M28 50 L28 44 M56 34 L56 28 M88 18 L88 12" />
          <path d="M24 48 L28 44 L32 48 M52 32 L56 28 L60 32 M84 16 L88 12 L92 16" />
        </svg>
      );
    case "10-formacion":
      return (
        <svg {...common}>
          <rect x="52" y="18" width="16" height="18" fill={lacre} stroke="none" />
          <line x1="60" y1="36" x2="60" y2="44" />
          <line x1="20" y1="44" x2="100" y2="44" />
          {[30, 46, 62, 78, 94].map((x) => (
            <circle key={x} cx={x} cy="60" r="5" />
          ))}
        </svg>
      );
    // 11 MOVIMIENTO
    case "11-motion-logo":
      return (
        <svg {...common}>
          <circle cx="32" cy="45" r="10" strokeDasharray="1 3" opacity="0.4" />
          <circle cx="60" cy="45" r="14" strokeDasharray="2 3" opacity="0.7" />
          <circle cx="88" cy="45" r="18" fill={lacre} stroke="none" />
          <path d="M14 45 L102 45" strokeWidth={0.5} strokeDasharray="2 4" opacity="0.5" />
          <path d="M98 42 L104 45 L98 48" strokeWidth={1} />
        </svg>
      );
    case "11-microinteracciones":
      return (
        <svg {...common}>
          <rect x="22" y="30" width="76" height="30" rx="3" />
          <circle cx="38" cy="45" r="4" fill={lacre} stroke="none" />
          <path d="M30 68 Q40 76 50 68" strokeWidth={1.5} />
          <path d="M48 66 L52 70 L48 70" strokeWidth={1.5} fill="none" />
          <line x1="60" y1="45" x2="90" y2="45" strokeWidth={1} />
        </svg>
      );
    case "11-video":
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
    case "11-audio":
      return (
        <svg {...common}>
          {[20, 32, 44, 56, 68, 80, 92, 104].map((x, i) => {
            const heights = [18, 34, 52, 26, 44, 62, 30, 20];
            const h = heights[i];
            const y = 45 - h / 2;
            return <rect key={x} x={x - 2} y={y} width="3" height={h} fill={i === 5 ? lacre : stroke} stroke="none" />;
          })}
        </svg>
      );

    // 12 EXTENSIONES
    case "12-accesibilidad":
      return (
        <svg {...common}>
          <circle cx="60" cy="45" r="30" />
          <circle cx="60" cy="24" r="4" fill={stroke} stroke="none" />
          <path d="M44 36 L76 36 M48 36 L52 70 L56 56 L64 56 L68 70 L72 36" />
          <path d="M82 45 A 22 22 0 0 1 82 55" stroke={lacre} strokeWidth={1.8} />
          <path d="M90 40 A 30 30 0 0 1 90 60" stroke={lacre} strokeWidth={1.8} />
        </svg>
      );
    case "12-digital-ui":
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
    case "12-territorial":
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
    case "12-legal":
      return (
        <svg {...common}>
          <path d="M60 10 L88 22 L88 44 Q 88 68 60 80 Q 32 68 32 44 L32 22 Z" />
          <text x="60" y="54" fontFamily="Georgia" fontSize="26" fontWeight="900" textAnchor="middle" stroke="none" fill={lacre}>®</text>
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
