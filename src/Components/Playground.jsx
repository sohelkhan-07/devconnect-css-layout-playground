import { useMemo, useState } from "react";

const Playground = () => {
  const [layout, setLayout] = useState("flex");

  const [direction, setDirection] = useState("row");
  const [wrap, setWrap] = useState("wrap");
  const [justify, setJustify] = useState("center");
  const [align, setAlign] = useState("center");
  const [alignContent, setAlignContent] = useState("center");

  const [columns, setColumns] = useState(3);
  const [rows, setRows] = useState(2);
  const [justifyItems, setJustifyItems] = useState("stretch");
  const [gridAlignItems, setGridAlignItems] = useState("stretch");

  const [gap, setGap] = useState(16);
  const [columnGap, setColumnGap] = useState(16);
  const [rowGap, setRowGap] = useState(16);

  const [responsive, setResponsive] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatedCss = useMemo(() => {
    if (layout === "flex") {
      const css = `.container {
  display: flex;
  flex-direction: ${direction};
  flex-wrap: ${wrap};
  justify-content: ${justify};
  align-items: ${align};
  align-content: ${alignContent};
  gap: ${gap}px;
}`;

      if (responsive) {
        return `${css}

@media (max-width: 640px) {
  .container {
    flex-direction: ${direction === "row" ? "column" : direction};
    width: 100%;
  }
}`;
      }

      return css;
    }

    const css = `.container {
  display: grid;
  grid-template-columns: repeat(${columns}, minmax(0, 1fr));
  grid-template-rows: repeat(${rows}, minmax(0, 1fr));
  column-gap: ${columnGap}px;
  row-gap: ${rowGap}px;
  justify-items: ${justifyItems};
  align-items: ${gridAlignItems};
}`;

    if (responsive) {
      return `${css}

@media (max-width: 768px) {
  .container {
    grid-template-columns: repeat(${Math.min(columns, 2)}, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .container {
    grid-template-columns: 1fr;
  }
}`;
    }

    return css;
  }, [
    layout,
    direction,
    wrap,
    justify,
    align,
    alignContent,
    columns,
    rows,
    justifyItems,
    gridAlignItems,
    gap,
    columnGap,
    rowGap,
    responsive,
  ]);

  const previewStyle =
    layout === "flex"
      ? {
          display: "flex",
          flexDirection: direction,
          flexWrap: wrap,
          justifyContent: justify,
          alignItems: align,
          alignContent,
          gap: `${gap}px`,
        }
      : {
          display: "grid",
          gridTemplateColumns: responsive
            ? `repeat(${columns}, minmax(0, 1fr))`
            : `repeat(${columns}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
          columnGap: `${columnGap}px`,
          rowGap: `${rowGap}px`,
          justifyItems,
          alignItems: gridAlignItems,
        };

  const copyCss = async () => {
    try {
      await navigator.clipboard.writeText(generatedCss);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch {
      setCopied(false);
    }
  };

  const resetPlayground = () => {
    setLayout("flex");

    setDirection("row");
    setWrap("wrap");
    setJustify("center");
    setAlign("center");
    setAlignContent("center");

    setColumns(3);
    setRows(2);
    setJustifyItems("stretch");
    setGridAlignItems("stretch");

    setGap(16);
    setColumnGap(16);
    setRowGap(16);

    setResponsive(true);
    setCopied(false);
  };

  return (
    <main className="min-h-[calc(100vh-148px)] bg-[#F7F7F5] px-3 py-4 sm:px-5 sm:py-6 lg:px-8">
      <div className="mx-auto max-w-300">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#4F46E5]" />

              <p className="text-[11px] font-semibold tracking-widest text-[#71717A]">
                LAYOUTLAB PLAYGROUND
              </p>
            </div>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#18181B] sm:text-4xl">
              Shape the layout.
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#71717A] sm:text-base">
              Change the rules. Watch the layout respond. Learn what the CSS
              actually does.
            </p>
          </div>

          <button
            type="button"
            onClick={resetPlayground}
            className="h-10 self-start rounded-lg border border-[#E4E4E7] bg-white px-4 text-xs font-semibold text-[#52525B] transition-all duration-200 hover:border-[#D4D4D8] hover:bg-[#FAFAFA] hover:text-[#18181B] sm:self-auto"
          >
            Reset playground
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#DCDCE1] bg-white shadow-[0_20px_60px_rgba(24,24,27,0.07)]">
          <div className="flex min-h-16 flex-col justify-between gap-3 border-b border-[#E4E4E7] bg-white px-4 py-3 sm:flex-row sm:items-center sm:px-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E4E4E7]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#E4E4E7]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#E4E4E7]" />
              </div>

              <div className="h-5 w-px bg-[#E4E4E7]" />

              <span className="text-sm font-semibold text-[#18181B]">
                LayoutLab
              </span>

              <span className="hidden text-xs text-[#A1A1AA] sm:block">
                / playground
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex rounded-lg border border-[#E4E4E7] bg-[#F7F7F5] p-1">
                <button
                  type="button"
                  onClick={() => setLayout("flex")}
                  aria-pressed={layout === "flex"}
                  className={`rounded-md px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    layout === "flex"
                      ? "bg-white text-[#4F46E5] shadow-sm"
                      : "text-[#71717A] hover:text-[#18181B]"
                  }`}
                >
                  Flexbox
                </button>

                <button
                  type="button"
                  onClick={() => setLayout("grid")}
                  aria-pressed={layout === "grid"}
                  className={`rounded-md px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    layout === "grid"
                      ? "bg-white text-[#4F46E5] shadow-sm"
                      : "text-[#71717A] hover:text-[#18181B]"
                  }`}
                >
                  Grid
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[250px_minmax(0,1fr)_320px]">
            <aside className="border-b border-[#E4E4E7] bg-[#FAFAFA] p-5 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.12em] text-[#A1A1AA]">
                    CONFIGURATION
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#18181B]">
                    {layout === "flex" ? "Flexbox" : "CSS Grid"}
                  </p>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EEF2FF] text-xs font-bold text-[#4F46E5]">
                  {layout === "flex" ? "F" : "G"}
                </div>
              </div>

              <div className="mt-7 space-y-6">
                {layout === "flex" && (
                  <>
                    <div>
                      <label
                        htmlFor="direction"
                        className="text-xs font-semibold text-[#52525B]"
                      >
                        Direction
                      </label>

                      <select
                        id="direction"
                        value={direction}
                        onChange={(e) => setDirection(e.target.value)}
                        className="mt-2 h-10 w-full rounded-lg border border-[#D4D4D8] bg-white px-3 text-xs font-medium text-[#18181B] outline-none transition-all focus:border-[#818CF8] focus:ring-2 focus:ring-[#EEF2FF]"
                      >
                        <option value="row">Row</option>
                        <option value="row-reverse">Row reverse</option>
                        <option value="column">Column</option>
                        <option value="column-reverse">Column reverse</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="wrap"
                        className="text-xs font-semibold text-[#52525B]"
                      >
                        Flex wrap
                      </label>

                      <select
                        id="wrap"
                        value={wrap}
                        onChange={(e) => setWrap(e.target.value)}
                        className="mt-2 h-10 w-full rounded-lg border border-[#D4D4D8] bg-white px-3 text-xs font-medium text-[#18181B] outline-none transition-all focus:border-[#818CF8] focus:ring-2 focus:ring-[#EEF2FF]"
                      >
                        <option value="nowrap">No wrap</option>
                        <option value="wrap">Wrap</option>
                        <option value="wrap-reverse">Wrap reverse</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="justify"
                        className="text-xs font-semibold text-[#52525B]"
                      >
                        Justify content
                      </label>

                      <select
                        id="justify"
                        value={justify}
                        onChange={(e) => setJustify(e.target.value)}
                        className="mt-2 h-10 w-full rounded-lg border border-[#D4D4D8] bg-white px-3 text-xs font-medium text-[#18181B] outline-none transition-all focus:border-[#818CF8] focus:ring-2 focus:ring-[#EEF2FF]"
                      >
                        <option value="flex-start">Start</option>
                        <option value="center">Center</option>
                        <option value="flex-end">End</option>
                        <option value="space-between">Space between</option>
                        <option value="space-around">Space around</option>
                        <option value="space-evenly">Space evenly</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="align"
                        className="text-xs font-semibold text-[#52525B]"
                      >
                        Align items
                      </label>

                      <select
                        id="align"
                        value={align}
                        onChange={(e) => setAlign(e.target.value)}
                        className="mt-2 h-10 w-full rounded-lg border border-[#D4D4D8] bg-white px-3 text-xs font-medium text-[#18181B] outline-none transition-all focus:border-[#818CF8] focus:ring-2 focus:ring-[#EEF2FF]"
                      >
                        <option value="flex-start">Start</option>
                        <option value="center">Center</option>
                        <option value="flex-end">End</option>
                        <option value="stretch">Stretch</option>
                        <option value="baseline">Baseline</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="alignContent"
                        className="text-xs font-semibold text-[#52525B]"
                      >
                        Align content
                      </label>

                      <select
                        id="alignContent"
                        value={alignContent}
                        onChange={(e) => setAlignContent(e.target.value)}
                        className="mt-2 h-10 w-full rounded-lg border border-[#D4D4D8] bg-white px-3 text-xs font-medium text-[#18181B] outline-none transition-all focus:border-[#818CF8] focus:ring-2 focus:ring-[#EEF2FF]"
                      >
                        <option value="flex-start">Start</option>
                        <option value="center">Center</option>
                        <option value="flex-end">End</option>
                        <option value="space-between">Space between</option>
                        <option value="space-around">Space around</option>
                        <option value="space-evenly">Space evenly</option>
                        <option value="stretch">Stretch</option>
                      </select>
                    </div>
                  </>
                )}

                {layout === "grid" && (
                  <>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="columns"
                          className="text-xs font-semibold text-[#52525B]"
                        >
                          Columns
                        </label>

                        <span className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-[#4F46E5]">
                          {columns}
                        </span>
                      </div>

                      <input
                        id="columns"
                        type="range"
                        min="1"
                        max="6"
                        value={columns}
                        onChange={(e) => setColumns(Number(e.target.value))}
                        className="mt-4 w-full accent-[#4F46E5]"
                      />

                      <div className="mt-2 flex justify-between text-[10px] text-[#A1A1AA]">
                        <span>1</span>
                        <span>6</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="rows"
                          className="text-xs font-semibold text-[#52525B]"
                        >
                          Rows
                        </label>

                        <span className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-[#4F46E5]">
                          {rows}
                        </span>
                      </div>

                      <input
                        id="rows"
                        type="range"
                        min="1"
                        max="4"
                        value={rows}
                        onChange={(e) => setRows(Number(e.target.value))}
                        className="mt-4 w-full accent-[#4F46E5]"
                      />

                      <div className="mt-2 flex justify-between text-[10px] text-[#A1A1AA]">
                        <span>1</span>
                        <span>4</span>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="justifyItems"
                        className="text-xs font-semibold text-[#52525B]"
                      >
                        Justify items
                      </label>

                      <select
                        id="justifyItems"
                        value={justifyItems}
                        onChange={(e) => setJustifyItems(e.target.value)}
                        className="mt-2 h-10 w-full rounded-lg border border-[#D4D4D8] bg-white px-3 text-xs font-medium text-[#18181B] outline-none transition-all focus:border-[#818CF8] focus:ring-2 focus:ring-[#EEF2FF]"
                      >
                        <option value="start">Start</option>
                        <option value="center">Center</option>
                        <option value="end">End</option>
                        <option value="stretch">Stretch</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="gridAlignItems"
                        className="text-xs font-semibold text-[#52525B]"
                      >
                        Align items
                      </label>

                      <select
                        id="gridAlignItems"
                        value={gridAlignItems}
                        onChange={(e) => setGridAlignItems(e.target.value)}
                        className="mt-2 h-10 w-full rounded-lg border border-[#D4D4D8] bg-white px-3 text-xs font-medium text-[#18181B] outline-none transition-all focus:border-[#818CF8] focus:ring-2 focus:ring-[#EEF2FF]"
                      >
                        <option value="start">Start</option>
                        <option value="center">Center</option>
                        <option value="end">End</option>
                        <option value="stretch">Stretch</option>
                      </select>
                    </div>
                  </>
                )}

                {layout === "flex" && (
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="gap"
                        className="text-xs font-semibold text-[#52525B]"
                      >
                        Gap
                      </label>

                      <span className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-[#4F46E5]">
                        {gap}px
                      </span>
                    </div>

                    <input
                      id="gap"
                      type="range"
                      min="0"
                      max="48"
                      step="4"
                      value={gap}
                      onChange={(e) => setGap(Number(e.target.value))}
                      className="mt-4 w-full accent-[#4F46E5]"
                    />

                    <div className="mt-2 flex justify-between text-[10px] text-[#A1A1AA]">
                      <span>0px</span>
                      <span>48px</span>
                    </div>
                  </div>
                )}

                {layout === "grid" && (
                  <>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="columnGap"
                          className="text-xs font-semibold text-[#52525B]"
                        >
                          Column gap
                        </label>

                        <span className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-[#4F46E5]">
                          {columnGap}px
                        </span>
                      </div>

                      <input
                        id="columnGap"
                        type="range"
                        min="0"
                        max="48"
                        step="4"
                        value={columnGap}
                        onChange={(e) => setColumnGap(Number(e.target.value))}
                        className="mt-4 w-full accent-[#4F46E5]"
                      />

                      <div className="mt-2 flex justify-between text-[10px] text-[#A1A1AA]">
                        <span>0px</span>
                        <span>48px</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="rowGap"
                          className="text-xs font-semibold text-[#52525B]"
                        >
                          Row gap
                        </label>

                        <span className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-[#4F46E5]">
                          {rowGap}px
                        </span>
                      </div>

                      <input
                        id="rowGap"
                        type="range"
                        min="0"
                        max="48"
                        step="4"
                        value={rowGap}
                        onChange={(e) => setRowGap(Number(e.target.value))}
                        className="mt-4 w-full accent-[#4F46E5]"
                      />

                      <div className="mt-2 flex justify-between text-[10px] text-[#A1A1AA]">
                        <span>0px</span>
                        <span>48px</span>
                      </div>
                    </div>
                  </>
                )}

                <label className="flex cursor-pointer items-center justify-between rounded-lg border border-[#E4E4E7] bg-white px-3 py-3">
                  <span>
                    <span className="block text-xs font-semibold text-[#52525B]">
                      Responsive CSS
                    </span>

                    <span className="mt-1 block text-[10px] text-[#A1A1AA]">
                      Add mobile breakpoints
                    </span>
                  </span>

                  <input
                    type="checkbox"
                    checked={responsive}
                    onChange={(e) => setResponsive(e.target.checked)}
                    className="h-4 w-4 accent-[#4F46E5]"
                  />
                </label>
              </div>
            </aside>

            <section className="relative min-h-120 overflow-hidden bg-[#F4F4F5] p-4 sm:p-7">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(#D4D4D8 1px, transparent 1px), linear-gradient(90deg, #D4D4D8 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.12em] text-[#A1A1AA]">
                    CANVAS
                  </p>

                  <p className="mt-1 text-xs font-medium text-[#71717A]">
                    Live layout preview
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#D4D4D8] bg-white px-3 py-1.5 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />

                  <span className="text-[10px] font-semibold text-[#52525B]">
                    Live
                  </span>
                </div>
              </div>

              <div className="relative mt-5 flex min-h-90 items-center justify-center overflow-hidden rounded-2xl border border-[#DCDCE1] bg-white p-4 shadow-[0_8px_30px_rgba(24,24,27,0.05)] sm:p-8">
                <div
                  style={previewStyle}
                  className="relative min-h-60 w-full max-w-125 overflow-hidden rounded-xl border border-dashed border-[#A1A1AA] bg-[#FAFAFA] p-5 sm:p-7"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-[#E4E4E7]" />

                  {Array.from({ length: 6 }, (_, index) => (
                    <div
                      key={index}
                      className="flex min-h-14 min-w-0 items-center justify-center rounded-lg bg-[#4F46E5] px-3 text-sm font-bold text-white shadow-[0_4px_12px_rgba(79,70,229,0.2)] transition-all duration-300"
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <aside className="border-t border-[#27272A] bg-[#18181B] lg:border-l lg:border-t-0">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-[#27272A] px-5 py-4">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.12em] text-[#71717A]">
                      OUTPUT
                    </p>

                    <p className="mt-1 text-xs font-semibold text-[#FAFAFA]">
                      Generated CSS
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={copyCss}
                    className="rounded-md border border-[#3F3F46] bg-[#18181B] px-3 py-1.5 text-[10px] font-semibold text-[#D4D4D8] transition-all duration-200 hover:border-[#52525B] hover:bg-[#27272A]"
                  >
                    {copied ? "Copied!" : "Copy CSS"}
                  </button>
                </div>

                <div className="flex-1 overflow-auto p-5">
                  <div className="mb-5 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#818CF8]" />

                    <span className="text-[10px] font-medium text-[#71717A]">
                      .container
                    </span>
                  </div>

                  <pre className="whitespace-pre-wrap wrap-break-word overflow-hidden font-mono text-[11px] leading-7 sm:text-xs">
                    <code>
                      {generatedCss.split("\n").map((line, index) => {
                        const match = line.match(/^(\s*)([\w-]+)(:)(.*)$/);

                        if (!match) {
                          return (
                            <div key={index} className="text-[#D4D4D8]">
                              {line}
                            </div>
                          );
                        }

                        return (
                          <div key={index}>
                            <span className="text-[#A1A1AA]">{match[1]}</span>

                            <span className="text-[#818CF8]">{match[2]}</span>

                            <span className="text-[#71717A]">{match[3]}</span>

                            <span className="text-[#D4D4D8]">{match[4]}</span>
                          </div>
                        );
                      })}
                    </code>
                  </pre>
                </div>

                <div className="border-t border-[#27272A] px-5 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#71717A]">
                      CSS generated from controls
                    </span>

                    <span className="text-[10px] font-medium text-[#52525B]">
                      {
                        generatedCss.split("\n").filter((line) => line.trim())
                          .length
                      }{" "}
                      lines
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="border-t border-[#E4E4E7] bg-white px-5 py-3"></div>
        </div>
      </div>
    </main>
  );
};

export default Playground;
