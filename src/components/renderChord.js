import React from "react";

export function renderChord(chordString, t) {
  if (!chordString) return null;

  // 1) Detectar el slash ("/")
  const slashIndex = chordString.indexOf("/");
  let mainStr = chordString;
  let slashStr = "";

  if (slashIndex >= 0) {
    mainStr = chordString.slice(0, slashIndex).trim();
    slashStr = chordString.slice(slashIndex + 1).trim();
  }

  // 2) Parsear la parte principal
  const parts = mainStr.split(/\s+/).filter(Boolean); // p.e. ["do", "#", "m"]
  const root = t(parts[0] || "");
  const modifiers = parts.slice(1).map((m) => t(m));

  // 3) Parsear la parte de slash (si existe)
  let slashRoot = "";
  let slashMods = [];
  if (slashStr) {
    const slashParts = slashStr.split(/\s+/).filter(Boolean); // p.e. ["re", "#"]
    slashRoot = t(slashParts[0] || "");
    slashMods = slashParts.slice(1).map((m) => t(m));
  }

  // 4) Construir la lista de hijos (children) para el contenedor
  const children = [];

  // Nota principal
  children.push(
    React.createElement("span", { className: "text-md leading-none" }, root)
  );

  // Modificadores de la nota principal
  if (modifiers.length > 0) {
    children.push(
      React.createElement(
        "span",
        { className: "flex gap-0 text-2xs" },
        modifiers.map((mod, i) => React.createElement("span", { key: i }, mod))
      )
    );
  }

  // Si tenemos slashRoot, añadimos la barra "/" y la segunda nota
  if (slashRoot) {
    // Barra slash
    children.push(
      React.createElement("span", { className: "text-md leading-none" }, "/")
    );

    // Nota del slash
    children.push(
      React.createElement(
        "span",
        { className: "text-md leading-none" },
        slashRoot
      )
    );

    // Modificadores del slash
    if (slashMods.length > 0) {
      children.push(
        React.createElement(
          "span",
          { className: "flex gap-0 text-2xs" },
          slashMods.map((mod, i) =>
            React.createElement("span", { key: i }, mod)
          )
        )
      );
    }
  }

  // 5) Devolvemos un <span> contenedor con todos los hijos
  return React.createElement(
    "span",
    { className: "inline-flex items-end" },
    ...children
  );
}
