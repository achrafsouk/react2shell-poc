"use client";

import { useState } from "react";

export default function FileViewer({ files, fileContents }) {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="w-full max-w-2xl mt-8">
      {files.length > 0 ? (
        <>
          <ul className="space-y-2">
            {files.map((file) => (
              <li key={file.name}>
                <button
                  onClick={() => setSelectedFile(file.name)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors text-left ${
                    selectedFile === file.name
                      ? "bg-blue-100 dark:bg-blue-900"
                      : "bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">
                    📄 {file.name}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-500">
                    {(file.size / 1024).toFixed(2)} KB
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* File content viewer */}
          {selectedFile && (
            <div className="mt-6 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900">
              <h3 className="text-lg font-semibold mb-3 text-black dark:text-zinc-50">
                {selectedFile}
              </h3>
              <pre className="text-sm text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap font-mono overflow-x-auto max-h-96 overflow-y-auto">
                {fileContents[selectedFile]}
              </pre>
            </div>
          )}
        </>
      ) : (
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          No .txt files found in resources directory
        </p>
      )}
    </div>
  );
}