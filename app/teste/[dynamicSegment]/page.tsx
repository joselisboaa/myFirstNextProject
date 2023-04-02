"use client"

export default function dynamicSegment({ params }) {
  console.log(params);

  return (
    <div>
      <p>
        Segmento dinâmico
      </p>
    </div>
  );
}