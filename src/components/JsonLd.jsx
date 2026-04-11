import React, { useEffect } from "react";

export default function JsonLd({ id, data }) {
  useEffect(() => {
    if (!id || !data) {
      return undefined;
    }

    const scriptId = `jsonld-${id}`;
    let script = document.head.querySelector(`#${scriptId}`);

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);

    return () => {
      const current = document.head.querySelector(`#${scriptId}`);
      if (current) {
        current.remove();
      }
    };
  }, [id, data]);

  return null;
}
