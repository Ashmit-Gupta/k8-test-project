export const projects = [
  {
    slug: "k8-test-project",
    title: "Kubernetes CI/CD Demo",
    subtitle: "End-to-end delivery on Kubernetes",
    featured: true,
    summary:
      "A live portfolio platform on Kubernetes — Docker multi-stage builds, Jenkins pipelines with immutable image tags, GHCR, Ingress, and an edge Nginx reverse proxy.",
    stack: [
      "Kubernetes",
      "Jenkins",
      "Docker",
      "GHCR",
      "Nginx Ingress",
      "React",
      "Node.js",
    ],
    github: "https://github.com/Ashmit-Gupta/k8-test-project",
    live: "https://test-k8s.ashmit.xyz",
    what: [
      "Containerized a frontend portfolio with a multi-stage Docker build (Node build → Nginx serve).",
      "Automated build → push → deploy with Jenkins: immutable tags from git SHA, not only :latest.",
      "Deployed to Kubernetes with Namespace, Deployment, Service, and Ingress.",
      "Routed public traffic through an edge Nginx proxy to the Ingress NodePort with correct Host headers.",
    ],
    why: [
      "Recruiters and teams should see a real running system — not just a README.",
      "Immutable tags avoid stale :latest caches so every commit actually rolls out.",
      "Practicing production patterns: secrets for GHCR, kubeconfig in CI, and clean GitOps-friendly manifests.",
    ],
    how: [
      "Jenkins checks out main, builds ghcr.io/…:<git-sha> and :latest, pushes to GHCR.",
      "kubectl apply applies manifests; kubectl set image pins the live Deployment to that SHA.",
      "Ingress (ingress-nginx) matches host test-k8s.ashmit.xyz → ClusterIP Service → pods on :80/:3000.",
      "Edge Nginx on the public host proxies HTTPS to the cluster NodePort and forwards Host for routing.",
    ],
  },
  {
    slug: "scopify",
    title: "Scopify",
    subtitle: "Self-hosted SaaS infrastructure platform",
    featured: true,
    summary:
      "Production-grade self-hosted platform with segmented Docker networking, Nginx + Cloudflare edge, and full observability.",
    stack: [
      "Docker",
      "Docker Compose",
      "Nginx",
      "PostgreSQL",
      "Redis",
      "Prometheus",
      "Grafana",
      "Loki",
      "GitHub Actions",
      "NestJS",
    ],
    github: "https://github.com/Ashmit-Gupta",
    live: null,
    what: [
      "Architected segmented Docker networks across edge, platform, and data layers for isolated environments.",
      "Designed reverse proxy and ingress with Nginx + Cloudflare.",
      "Built observability with Prometheus, Grafana, Loki, Promtail, cAdvisor, and Nginx exporters.",
      "Ran containerized CI via GitHub Actions + GHCR and async jobs with Redis + BullMQ.",
    ],
    why: [
      "Self-hosting teaches real ops: networking isolation, failure modes, and cost vs complexity trade-offs.",
      "Centralized observability makes incidents diagnosable instead of guesswork.",
    ],
    how: [
      "Compose stacks per layer with clear network boundaries.",
      "Edge terminates TLS and routes to internal services.",
      "Metrics and logs ship to Prometheus/Grafana/Loki for a single pane of glass.",
    ],
  },
  {
    slug: "collab-editor",
    title: "Real-time Collaborative Editor",
    subtitle: "Event-driven document sync",
    featured: false,
    summary:
      "Flutter + Node.js collaborative editor with Socket.IO — session management, live broadcast, and basic conflict handling.",
    stack: ["Flutter", "Node.js", "Socket.IO"],
    github: "https://github.com/Ashmit-Gupta",
    live: null,
    what: [
      "Built a real-time editor with Flutter Quill and Socket.IO.",
      "Node backend for sessions and event-driven sync under concurrent edits.",
    ],
    why: [
      "Realtime systems force clear thinking about state, ordering, and failure under concurrency.",
    ],
    how: [
      "Clients emit edit events; server broadcasts to peers while keeping shared document state.",
      "Basic conflict handling keeps the document coherent under overlapping edits.",
    ],
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
