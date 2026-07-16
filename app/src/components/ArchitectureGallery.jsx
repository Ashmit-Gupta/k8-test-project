import { useMemo, useState } from "react";
import "./ArchitectureGallery.css";

function buildViewerUrl(fileUrl, pageId) {
  const params = new URLSearchParams({
    highlight: "0000ff",
    edit: "_blank",
    layers: "1",
    nav: "1",
    "page-id": pageId,
  });
  return `https://viewer.diagrams.net/?${params.toString()}#U${encodeURIComponent(fileUrl)}`;
}

export default function ArchitectureGallery({ diagrams, diagramFile }) {
  const [activeId, setActiveId] = useState(diagrams[0]?.id);

  const fileUrl = useMemo(() => {
    const githubRaw =
      "https://raw.githubusercontent.com/Ashmit-Gupta/k8-test-project/main/Scopify-Server-Architecture-Detailed.drawio";
    if (typeof window === "undefined") return githubRaw;
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1") return githubRaw;
    return new URL(diagramFile, window.location.origin).href;
  }, [diagramFile]);

  const active = diagrams.find((d) => d.id === activeId) || diagrams[0];
  const viewerSrc = buildViewerUrl(fileUrl, active.id);

  return (
    <section className="arch">
      <h2>Architecture</h2>
      <p className="arch__lead">
        Interactive diagrams of the AWS topology and Kubernetes traffic path —
        the same models used to design and operate this platform.
      </p>

      <div className="arch__tabs" role="tablist" aria-label="Architecture diagrams">
        {diagrams.map((diagram) => (
          <button
            key={diagram.id}
            type="button"
            role="tab"
            aria-selected={diagram.id === active.id}
            className={
              diagram.id === active.id ? "arch__tab arch__tab--active" : "arch__tab"
            }
            onClick={() => setActiveId(diagram.id)}
          >
            {diagram.title}
          </button>
        ))}
      </div>

      <p className="arch__desc">{active.description}</p>

      <div className="arch__frame-wrap">
        <iframe
          key={active.id}
          title={active.title}
          className="arch__frame"
          src={viewerSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="arch__links">
        <a
          className="btn btn-ghost"
          href={viewerSrc}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open live diagram
        </a>
        <a
          className="btn btn-ghost"
          href={diagramFile}
          download="scopify-platform-architecture.drawio"
        >
          Download .drawio
        </a>
      </div>
    </section>
  );
}
