export const projects = [
  {
    slug: "cloud-native-delivery-platform",
    aliases: ["k8-test-project"],
    title: "Cloud-Native Application Delivery Platform",
    subtitle: "Kubernetes platform engineering — CI/CD to production ingress",
    featured: true,
    summary:
      "End-to-end platform engineering on AWS and Kubernetes: immutable container delivery with Jenkins and GHCR, Ingress-based routing, NodePort edge integration, and a multi-node cluster with Calico networking — documented with live architecture diagrams.",
    stack: [
      "Kubernetes",
      "Jenkins",
      "Docker",
      "GHCR",
      "Nginx Ingress",
      "AWS",
      "Terraform",
      "Calico",
      "React",
    ],
    github: "https://github.com/Ashmit-Gupta/k8-test-project",
    live: "https://dev.ashmit.xyz",
    diagrams: [
      {
        id: "detailed-aws",
        title: "AWS infrastructure topology",
        description:
          "VPC, public/private subnets, Nginx edge, NAT, security groups, and cluster EC2 layout across AZs.",
      },
      {
        id: "k8s-workload-arch",
        title: "Kubernetes workload architecture",
        description:
          "NodePort → Ingress Controller → Ingress → ClusterIP Service → Pods across control-plane and worker nodes.",
      },
    ],
    diagramFile: "/architecture/scopify-platform-architecture.drawio",
    what: [
      "Built a production-style delivery path: multi-stage Docker (Vite/React → Nginx), GHCR, and Jenkins pipelines with immutable git-SHA tags.",
      "Deployed workloads to a kubeadm cluster with Namespace, Deployment, ClusterIP Service, and Ingress (ingress-nginx).",
      "Integrated an edge Nginx reverse proxy to the Ingress NodePort (80→32208) with correct Host and forwarding headers.",
      "Documented the full AWS + Kubernetes topology in interactive architecture diagrams (edge, nodes, objects, CI/CD).",
    ],
    why: [
      "Demonstrates platform engineering skills recruiters look for: networking, delivery automation, and operational clarity — not only app code.",
      "Immutable tags and declarative manifests mirror industry CI/CD practice and avoid stale :latest deploys.",
      "Architecture diagrams make the system reviewable: every node, Service, Ingress rule, and traffic hop is explicit.",
    ],
    how: [
      "Jenkins builds and pushes ghcr.io/ashmit-gupta/k8-test-project:<sha>, applies manifests, then kubectl set image to pin the Deployment.",
      "Ingress matches host (e.g. dev.ashmit.xyz) to hello-service:80 → pod :3000; kube-proxy exposes NodePorts on all nodes.",
      "Edge Nginx terminates public TLS and proxies to a reachable cluster node NodePort; Calico provides the pod network overlay.",
      "Diagrams ship with the site (public/architecture) and render live via the diagrams.net viewer on this project page.",
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
  return projects.find(
    (p) => p.slug === slug || (p.aliases && p.aliases.includes(slug))
  );
}
