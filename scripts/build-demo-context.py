#!/usr/bin/env python3
"""Build a readonly demo task context from demo-workspace.

This script is intentionally small and safe:
- reads only ./demo-workspace
- does not access ~/.hermes
- does not access databases
- does not use network
- does not upload anything
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WORKSPACE = ROOT / "demo-workspace"

FILES = [
    "knowledge/README.md",
    "knowledge/standards/terminology.md",
    "knowledge/standards/structure.md",
    "projects/registry.yaml",
    "projects/demo-agent-workbench/STATE.md",
    "projects/demo-agent-workbench/docs/progress.md",
    "teams/team-registry.example.yaml",
    "roles/product-manager.md",
    "roles/engineer.md",
    "roles/qa-reviewer.md",
    "memories/product-manager/experience-log.md",
    "memories/product-manager/failure-log.md",
    "memories/engineer/experience-log.md",
    "memories/engineer/failure-log.md",
    "memories/qa-reviewer/experience-log.md",
    "memories/qa-reviewer/failure-log.md",
]


def read_demo_file(relative_path: str) -> str:
    path = (WORKSPACE / relative_path).resolve()
    workspace_root = WORKSPACE.resolve()
    if workspace_root not in path.parents and path != workspace_root:
        raise ValueError(f"Refusing to read outside demo-workspace: {relative_path}")
    if not path.exists():
        return f"[MISSING] {relative_path}\n"
    return path.read_text(encoding="utf-8")


def clip(text: str, limit: int = 1600) -> str:
    text = text.strip()
    if len(text) <= limit:
        return text
    return text[:limit].rstrip() + "\n\n...[clipped for demo context]"


def build_context() -> str:
    parts = [
        "# Demo Task Context",
        "",
        "> This is generated from ./demo-workspace only. It is a static public demo context, not a real system export.",
        "",
        "## Task",
        "Perform a readonly audit of the demo-agent-workbench. Check fact sources, team boundaries, role profiles, role memories, and next-step clarity.",
        "",
        "## Safety Rules",
        "- Read only.",
        "- Do not modify files.",
        "- Do not access network.",
        "- Do not upload anything.",
        "- Cite file paths for every conclusion.",
        "",
    ]
    for rel in FILES:
        parts.append(f"## File: demo-workspace/{rel}")
        parts.append("")
        parts.append("```")
        parts.append(clip(read_demo_file(rel)))
        parts.append("```")
        parts.append("")
    return "\n".join(parts)


if __name__ == "__main__":
    print(build_context())
