import React, { useMemo, useState } from "react";
import Seo from "../components/Seo";
import { useLanguage } from "../context/LanguageContext";
import { useProjects } from "../context/ProjectsContext";
import { useAdminAccess } from "../context/AdminAccessContext";

const emptyForm = {
  slug: "",
  titleId: "",
  titleEn: "",
  descId: "",
  descEn: "",
  image: "",
  alt: "",
  tags: "",
  categories: "",
  roleId: "",
  roleEn: "",
  timelineId: "",
  timelineEn: "",
  problemId: "",
  problemEn: "",
  solutionId: "",
  solutionEn: "",
  architectureId: "",
  architectureEn: "",
  outcomesId: "",
  outcomesEn: "",
  demo: "#",
  repo: "#"
};

function toLines(value) {
  return Array.isArray(value) ? value.map((item) => item.id || "").join("\n") : "";
}

function toLinesEn(value) {
  return Array.isArray(value) ? value.map((item) => item.en || "").join("\n") : "";
}

function toForm(project) {
  return {
    slug: project.slug,
    titleId: project.title.id,
    titleEn: project.title.en,
    descId: project.description.id,
    descEn: project.description.en,
    image: project.image,
    alt: project.alt,
    tags: project.tags.join(", "),
    categories: project.categories.join(", "),
    roleId: project.role.id,
    roleEn: project.role.en,
    timelineId: project.timeline.id,
    timelineEn: project.timeline.en,
    problemId: project.problem.id,
    problemEn: project.problem.en,
    solutionId: project.solution.id,
    solutionEn: project.solution.en,
    architectureId: toLines(project.architecture),
    architectureEn: toLinesEn(project.architecture),
    outcomesId: toLines(project.outcomes),
    outcomesEn: toLinesEn(project.outcomes),
    demo: project.links.demo,
    repo: project.links.repo
  };
}

function toArray(text) {
  return String(text)
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function buildProject(values) {
  const archId = toArray(values.architectureId);
  const archEn = toArray(values.architectureEn);
  const outId = toArray(values.outcomesId);
  const outEn = toArray(values.outcomesEn);

  return {
    slug: values.slug.trim(),
    title: { id: values.titleId.trim(), en: values.titleEn.trim() },
    description: { id: values.descId.trim(), en: values.descEn.trim() },
    image: values.image.trim(),
    alt: values.alt.trim(),
    tags: values.tags.split(",").map((item) => item.trim()).filter(Boolean),
    categories: values.categories.split(",").map((item) => item.trim()).filter(Boolean),
    role: { id: values.roleId.trim(), en: values.roleEn.trim() },
    timeline: { id: values.timelineId.trim(), en: values.timelineEn.trim() },
    problem: { id: values.problemId.trim(), en: values.problemEn.trim() },
    solution: { id: values.solutionId.trim(), en: values.solutionEn.trim() },
    architecture: archId.map((id, index) => ({ id, en: archEn[index] || archEn[0] || id })),
    outcomes: outId.map((id, index) => ({ id, en: outEn[index] || outEn[0] || id })),
    links: {
      demo: values.demo.trim() || "#",
      repo: values.repo.trim() || "#"
    }
  };
}

export default function AdminPage() {
  const { isId } = useLanguage();
  const { isDev, isEnabled, isUnlocked, unlock, lock } = useAdminAccess();
  const { projects, upsertProject, deleteProject, resetProjects, replaceProjects, exportProjects } =
    useProjects();
  const [form, setForm] = useState(emptyForm);
  const [mode, setMode] = useState("create");
  const [message, setMessage] = useState("");
  const [jsonEditor, setJsonEditor] = useState("");
  const [adminKeyInput, setAdminKeyInput] = useState("");

  const copy = useMemo(
    () => ({
      seoTitle: isId ? "Admin Proyek" : "Project Admin",
      heading: isId ? "Panel Admin Proyek" : "Project Admin Panel",
      sub: isId
        ? "Kelola data proyek dari UI tanpa database. Data disimpan di browser (localStorage)."
        : "Manage project data from the UI without a database. Data is stored in browser localStorage.",
      create: isId ? "Tambah Proyek" : "Create Project",
      update: isId ? "Update Proyek" : "Update Project",
      clear: isId ? "Reset Form" : "Reset Form",
      resetAll: isId ? "Reset ke Default" : "Reset to Default",
      export: isId ? "Salin JSON" : "Copy JSON",
      download: isId ? "Download JSON" : "Download JSON",
      importJson: isId ? "Import JSON" : "Import JSON"
    }),
    [isId]
  );

  const handleUnlock = (event) => {
    event.preventDefault();
    const ok = unlock(adminKeyInput);
    if (ok) {
      setMessage(isId ? "Akses admin dibuka." : "Admin access unlocked.");
      setAdminKeyInput("");
      return;
    }

    setMessage(isId ? "Kunci admin tidak valid." : "Invalid admin key.");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.slug || !form.titleId || !form.titleEn) {
      setMessage(isId ? "Slug dan title wajib diisi." : "Slug and title are required.");
      return;
    }

    upsertProject(buildProject(form));
    setMessage(mode === "create" ? (isId ? "Proyek ditambahkan." : "Project created.") : isId ? "Proyek diperbarui." : "Project updated.");
    setMode("create");
    setForm(emptyForm);
  };

  const handleEdit = (project) => {
    setMode("edit");
    setForm(toForm(project));
    setMessage(isId ? "Mode edit aktif." : "Edit mode enabled.");
  };

  const handleDelete = (slug) => {
    deleteProject(slug);
    setMessage(isId ? "Proyek dihapus." : "Project deleted.");
    if (form.slug === slug) {
      setForm(emptyForm);
      setMode("create");
    }
  };

  const handleExport = async () => {
    const payload = exportProjects();
    setJsonEditor(payload);
    try {
      await navigator.clipboard.writeText(payload);
      setMessage(isId ? "JSON berhasil disalin ke clipboard." : "JSON copied to clipboard.");
    } catch (error) {
      setMessage(isId ? "Gagal copy otomatis, salin manual dari textarea output browser devtools." : "Automatic copy failed. Copy manually from browser output.");
      console.log(payload);
    }
  };

  const handleDownload = () => {
    const payload = exportProjects();
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "projects-export.json";
    anchor.click();
    URL.revokeObjectURL(url);
    setMessage(isId ? "File JSON berhasil diunduh." : "JSON file downloaded.");
  };

  const handleImport = () => {
    try {
      const parsed = JSON.parse(jsonEditor);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        setMessage(isId ? "JSON harus berupa array proyek." : "JSON must be a projects array.");
        return;
      }

      replaceProjects(parsed);
      setMessage(isId ? "Data proyek berhasil di-import." : "Project data imported.");
    } catch (error) {
      setMessage(isId ? "JSON tidak valid." : "Invalid JSON.");
    }
  };

  return (
    <main className="container">
      <Seo
        title={copy.seoTitle}
        description={isId ? "Panel internal untuk kelola data proyek portofolio." : "Internal panel to manage portfolio project data."}
        path="/admin"
      />

      <section className="page-head reveal">
        <p className="eyebrow mono">ADMIN</p>
        <h1>{copy.heading}</h1>
        <p>{copy.sub}</p>
      </section>

      {!isEnabled ? (
        <section className="panel reveal admin-auth">
          <h2>{isId ? "Admin Dinonaktifkan" : "Admin Disabled"}</h2>
          <p>
            {isId
              ? "Set VITE_ADMIN_KEY pada environment production untuk mengaktifkan akses admin."
              : "Set VITE_ADMIN_KEY in production environment to enable admin access."}
          </p>
        </section>
      ) : null}

      {isEnabled && !isUnlocked ? (
        <section className="panel reveal admin-auth">
          <h2>{isId ? "Masuk Admin" : "Admin Login"}</h2>
          <p>
            {isId
              ? "Masukkan kunci admin environment untuk membuka panel ini."
              : "Enter the environment admin key to unlock this panel."}
          </p>
          <form className="admin-auth-form" onSubmit={handleUnlock}>
            <label htmlFor="adminKey">{isId ? "Kunci Admin" : "Admin Key"}</label>
            <input
              id="adminKey"
              type="password"
              value={adminKeyInput}
              onChange={(event) => setAdminKeyInput(event.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">
              {isId ? "Buka Akses" : "Unlock"}
            </button>
          </form>
          {message ? <p className="mono form-note is-error">{message}</p> : null}
        </section>
      ) : null}

      {isEnabled && isUnlocked ? (
        <>
          {!isDev ? (
            <section className="admin-toolbar reveal">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => {
                  lock();
                  setMessage(isId ? "Akses admin dikunci kembali." : "Admin access locked.");
                }}
              >
                {isId ? "Kunci Admin" : "Lock Admin"}
              </button>
            </section>
          ) : null}

          <section className="admin-grid reveal">
        <article className="panel admin-list">
          <div className="admin-list-head">
            <h2>{isId ? "Daftar Proyek" : "Project List"}</h2>
            <div className="admin-actions">
              <button type="button" className="btn btn-outline" onClick={handleExport}>
                {copy.export}
              </button>
              <button type="button" className="btn btn-outline" onClick={handleDownload}>
                {copy.download}
              </button>
            </div>
          </div>
          <div className="admin-items">
            {projects.map((project) => (
              <div className="admin-item" key={project.slug}>
                <div>
                  <h3>{project.title.id}</h3>
                  <p className="mono">/{project.slug}</p>
                </div>
                <div className="admin-actions">
                  <button type="button" className="btn btn-outline" onClick={() => handleEdit(project)}>
                    {isId ? "Edit" : "Edit"}
                  </button>
                  <button type="button" className="btn btn-outline danger" onClick={() => handleDelete(project.slug)}>
                    {isId ? "Hapus" : "Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button type="button" className="btn btn-outline" onClick={resetProjects}>
            {copy.resetAll}
          </button>

          <label htmlFor="jsonEditor" className="mono admin-json-label">
            {isId
              ? "Import/Export JSON (workflow sync ke file)"
              : "Import/Export JSON (file sync workflow)"}
          </label>
          <textarea
            id="jsonEditor"
            className="admin-json"
            rows="10"
            value={jsonEditor}
            onChange={(event) => setJsonEditor(event.target.value)}
            placeholder={isId ? "Tempel JSON export di sini..." : "Paste exported JSON here..."}
          />
          <button type="button" className="btn btn-outline" onClick={handleImport}>
            {copy.importJson}
          </button>
          <p className="mono admin-hint">
            {isId
              ? "Untuk permanen ke source code: npm run sync:projects -- --input projects-export.json"
              : "To persist to source code: npm run sync:projects -- --input projects-export.json"}
          </p>
        </article>

        <form className="panel admin-form" onSubmit={handleSubmit}>
          <h2>{mode === "create" ? copy.create : copy.update}</h2>
          <label htmlFor="slug">Slug</label>
          <input id="slug" name="slug" value={form.slug} onChange={handleChange} required />

          <label htmlFor="titleId">Title (ID)</label>
          <input id="titleId" name="titleId" value={form.titleId} onChange={handleChange} required />

          <label htmlFor="titleEn">Title (EN)</label>
          <input id="titleEn" name="titleEn" value={form.titleEn} onChange={handleChange} required />

          <label htmlFor="descId">Description (ID)</label>
          <textarea id="descId" name="descId" rows="3" value={form.descId} onChange={handleChange} required />

          <label htmlFor="descEn">Description (EN)</label>
          <textarea id="descEn" name="descEn" rows="3" value={form.descEn} onChange={handleChange} required />

          <label htmlFor="image">Image URL</label>
          <input id="image" name="image" value={form.image} onChange={handleChange} required />

          <label htmlFor="alt">Image Alt</label>
          <input id="alt" name="alt" value={form.alt} onChange={handleChange} required />

          <label htmlFor="tags">Tags (comma separated)</label>
          <input id="tags" name="tags" value={form.tags} onChange={handleChange} required />

          <label htmlFor="categories">Categories (comma separated)</label>
          <input id="categories" name="categories" value={form.categories} onChange={handleChange} required />

          <label htmlFor="roleId">Role (ID)</label>
          <input id="roleId" name="roleId" value={form.roleId} onChange={handleChange} required />

          <label htmlFor="roleEn">Role (EN)</label>
          <input id="roleEn" name="roleEn" value={form.roleEn} onChange={handleChange} required />

          <label htmlFor="timelineId">Timeline (ID)</label>
          <input id="timelineId" name="timelineId" value={form.timelineId} onChange={handleChange} required />

          <label htmlFor="timelineEn">Timeline (EN)</label>
          <input id="timelineEn" name="timelineEn" value={form.timelineEn} onChange={handleChange} required />

          <label htmlFor="problemId">Problem (ID)</label>
          <textarea id="problemId" name="problemId" rows="3" value={form.problemId} onChange={handleChange} required />

          <label htmlFor="problemEn">Problem (EN)</label>
          <textarea id="problemEn" name="problemEn" rows="3" value={form.problemEn} onChange={handleChange} required />

          <label htmlFor="solutionId">Solution (ID)</label>
          <textarea id="solutionId" name="solutionId" rows="3" value={form.solutionId} onChange={handleChange} required />

          <label htmlFor="solutionEn">Solution (EN)</label>
          <textarea id="solutionEn" name="solutionEn" rows="3" value={form.solutionEn} onChange={handleChange} required />

          <label htmlFor="architectureId">Architecture Lines (ID)</label>
          <textarea id="architectureId" name="architectureId" rows="4" value={form.architectureId} onChange={handleChange} required />

          <label htmlFor="architectureEn">Architecture Lines (EN)</label>
          <textarea id="architectureEn" name="architectureEn" rows="4" value={form.architectureEn} onChange={handleChange} required />

          <label htmlFor="outcomesId">Outcomes Lines (ID)</label>
          <textarea id="outcomesId" name="outcomesId" rows="4" value={form.outcomesId} onChange={handleChange} required />

          <label htmlFor="outcomesEn">Outcomes Lines (EN)</label>
          <textarea id="outcomesEn" name="outcomesEn" rows="4" value={form.outcomesEn} onChange={handleChange} required />

          <label htmlFor="demo">Demo URL</label>
          <input id="demo" name="demo" value={form.demo} onChange={handleChange} />

          <label htmlFor="repo">Repo URL</label>
          <input id="repo" name="repo" value={form.repo} onChange={handleChange} />

          <div className="admin-actions">
            <button type="submit" className="btn btn-primary">
              {mode === "create" ? copy.create : copy.update}
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                setForm(emptyForm);
                setMode("create");
              }}
            >
              {copy.clear}
            </button>
          </div>

          {message ? <p className="mono form-note is-success">{message}</p> : null}
        </form>
      </section>
        </>
      ) : null}
    </main>
  );
}
