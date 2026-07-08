let decorationIds = [];

export function highlightLine(editor, line) {
  if (!editor) return;

  decorationIds = editor.deltaDecorations(
    decorationIds,
    [
      {
        range: {
          startLineNumber: line,
          startColumn: 1,
          endLineNumber: line,
          endColumn: 1,
        },
        options: {
          isWholeLine: true,
          className: "codesage-error-line",
          glyphMarginClassName: "codesage-error-glyph",
        },
      },
    ]
  );

  editor.revealLineInCenter(line);

  editor.setPosition({
    lineNumber: line,
    column: 1,
  });

  editor.focus();
}