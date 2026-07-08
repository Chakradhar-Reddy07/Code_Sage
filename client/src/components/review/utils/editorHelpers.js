export function goToLine(editor, line) {
  if (!editor) return;

  editor.revealLineInCenter(line);

  editor.setPosition({
    lineNumber: line,
    column: 1,
  });

  editor.focus();
}